'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import CheckoutModal from './CheckoutModal';

export default function FloatCheckoutBtn() {
	const { cart } = useCart();
	const [mounted, setMounted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const count = cart.reduce((s, it) => s + (it.quantity || 0), 0);
	const total = cart.reduce((s, it) => s + (it.price || 0) * (it.quantity || 0), 0);

	// Prevent hydration mismatch by not rendering until client-side
	if (!mounted || count <= 0) return null;

	return (
		<>
			<div className='fixed right-6 bottom-6 z-40'>
				<button
					onClick={() => setIsModalOpen(true)}
					className='border border-gray-200 bg-[var(--bg-highlight)] text-black px-4 py-3 rounded-full cursor-pointer shadow font-semibold flex gap-3 items-center hover:bg-opacity-90 transition-all'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
						/>
					</svg>
					<span className='bg-white px-2 py-1 rounded-full text-sm'>{count} món</span>
					Tạm tính
					<span className='text-sm text-[var(--text-secondary)] opacity-80'>
						{total
							? new Intl.NumberFormat('vi-VN', {
									style: 'currency',
									currency: 'VND',
							  }).format(total)
							: ''}
					</span>
				</button>
			</div>

			<CheckoutModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
}
