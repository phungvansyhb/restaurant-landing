'use client';

import React from 'react';
import Image from 'next/image';
import { Dish } from '../typeDefs/Dish';
import { useCart } from '@/app/context/CartContext';

type ComboItemProps = {
	combo: Dish;
	onOpenModal?: () => void;
};

export default function ComboItem({ combo, onOpenModal }: ComboItemProps) {
	const { addItem } = useCart();

	return (
		<div className='bg-white rounded-lg shadow border border-slate-100 overflow-hidden min-w-[240px]  transition-shadow'>
			{/* Image - clickable to open modal */}
			<div
				className='relative h-[240px] overflow-hidden w-full cursor-pointer'
				onClick={onOpenModal}>
				{combo.image ? (
					<Image
						src={combo.image}
						alt={combo.name}
						width={240}
						height={240}
						className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
						loading='lazy'
						sizes='240px'
					/>
				) : (
					<div className='w-full h-full bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] flex items-center justify-center'>
						<div className='text-white text-center p-4'>
							<div className='text-xl font-bold mb-2 cursor-pointer'>
								{combo.name}
							</div>
							<div className='text-sm opacity-90'>Combo Set</div>
							<div className='text-xs opacity-75 mt-2'>Nhấn để xem chi tiết</div>
						</div>
					</div>
				)}
			</div>

			{/* Content */}
			<div className='px-5 py-4 h-[110px] md:h-[150px] flex flex-col justify-between'>
				<h3
					className='text font-semibold mb-2 line-clamp-2 h-14 cursor-pointer'
					onClick={onOpenModal}>
					{combo.name}
				</h3>
				<span className='font-semibold text-[var(--bg-primary)]'>
					Giá:{' '}
					{new Intl.NumberFormat('vi-VN', {
						style: 'currency',
						currency: 'VND',
					}).format(combo.price || 0)}
				</span>
				<button
					className='mt-2 bg-[var(--bg-primary)] text-white py-1 px-4 rounded-lg cursor-pointer'
					onClick={()=> addItem(combo)}>
					Đặt combo
				</button>
			</div>
		</div>
	);
}
