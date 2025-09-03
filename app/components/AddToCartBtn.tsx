'use client';

import React, { useState } from 'react';
import { useCart, CartItem as ContextCartItem } from '@/app/context/CartContext';

type CartItem = ContextCartItem;

type Props = {
	item: CartItem;
	quantity?: number;
};

export default function AddToCartBtn({ item, quantity = 1 }: Props) {
	const [adding, setAdding] = useState(false);
	const { addItem } = useCart();
	const [locked, setLocked] = useState(false);

	function addToCart() {
		if (locked) return;
		setLocked(true);
		addItem(item, quantity);
		setAdding(true);
		window.setTimeout(() => {
			setAdding(false);
			setLocked(false);
		}, 900);
	}

	return (
		<button
			onClick={addToCart}
			aria-label='Thêm vào giỏ'
			disabled={locked}
			className={`mt-2 bg-[var(--bg-primary)] text-white py-1 px-4 rounded-lg inline-flex items-center gap-2 ${
				adding ? 'opacity-90' : ''
			} ${locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>
			<span>{adding ? 'Đã thêm' : 'Thêm vào giỏ'}</span>
		</button>
	);
}
