'use client';

import React, { useState } from 'react';
import { useCart, CartItem as ContextCartItem } from '@/app/context/CartContext';

type CartItem = ContextCartItem;

type Props = {
	item: CartItem;
	quantity?: number;
	iconMode?: boolean;
};

export default function AddToCartBtn({ item, quantity = 1, iconMode = false }: Props) {
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
			{!iconMode && <span>{adding ? 'Đã thêm' : 'Thêm vào giỏ'}</span>}
			{iconMode && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-5'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
					/>
				</svg>
			)}
		</button>
	);
}
