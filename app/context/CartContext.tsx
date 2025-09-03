'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Dish } from '../typeDefs/Dish';

export type CartItem = Dish & {
	quantity?: number;
};

type CartContextValue = {
	cart: CartItem[];
	addItem: (item: CartItem, qty?: number) => void;
	removeItem: (id: string | number) => void;
	updateQty: (id: string | number, qty: number) => void;
	clear: () => void;
};

const noop = () => {};

const defaultValue: CartContextValue = {
	cart: [],
	addItem: noop as any,
	removeItem: noop as any,
	updateQty: noop as any,
	clear: noop as any,
};

const CartContext = createContext<CartContextValue>(defaultValue);

function readCart(): CartItem[] {
	try {
		if (typeof window === 'undefined') return [];
		const raw = localStorage.getItem('cart');
		return raw ? JSON.parse(raw) : [];
	} catch (e) {
		return [];
	}
}

function writeCart(cart: CartItem[]) {
	try {
		localStorage.setItem('cart', JSON.stringify(cart));
		// also fire an event so non-reactive listeners can pick up
		try {
			window.dispatchEvent(new Event('cart:updated'));
		} catch {}
	} catch (e) {
		console.warn('failed to write cart', e);
	}
}

export function CartProvider({ children }: { children: ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>(() => readCart());

	const addItem = (item: CartItem, qty = 1) => {
		setCart((prev) => {
			const copy = [...prev];
			const incomingQty = Number(qty || 0) || 0; // ensure numeric
			const idx = copy.findIndex((c) => String(c.id) === String(item.id));
			if (idx >= 0) {
				const existing = Number(copy[idx].quantity || 0);
				copy[idx].quantity = existing + incomingQty;
			} else {
				// ignore any quantity on the incoming `item` payload and use incomingQty
				copy.push({ ...item, quantity: incomingQty });
			}
			writeCart(copy);
			return copy;
		});
	};

	const removeItem = (id: string | number) => {
		setCart((prev) => {
			const copy = prev.filter((c) => String(c.id) !== String(id));
			writeCart(copy);
			return copy;
		});
	};

	const updateQty = (id: string | number, qty: number) => {
		setCart((prev) => {
			const copy = prev.map((c) =>
				String(c.id) === String(id) ? { ...c, quantity: qty } : c
			);
			writeCart(copy);
			return copy;
		});
	};

	const clear = () => {
		setCart([]);
		writeCart([]);
	};

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clear }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}

export default CartContext;
