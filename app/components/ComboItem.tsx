'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dish } from '../typeDefs/Dish';
import ComboDetailModal from './ComboDetailModal';

type ComboItemProps = {
	combo: Dish;
};

export default function ComboItem({ combo }: ComboItemProps) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='bg-white rounded-lg shadow-lg overflow-hidden min-w-[240px] hover:shadow-xl transition-shadow'>
				{/* Image - clickable to open modal */}
				<div
					className='relative h-[240px] overflow-hidden w-full cursor-pointer'
					onClick={() => setShowModal(true)}>
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
								<div className='text-xl font-bold mb-2'>{combo.name}</div>
								<div className='text-sm opacity-90'>Combo Set</div>
								<div className='text-xs opacity-75 mt-2'>Nhấn để xem chi tiết</div>
							</div>
						</div>
					)}
				</div>

				{/* Content */}
				<div className='px-5 py-4 h-[110px] md:h-[150px] flex flex-col justify-between'>
					<h3 className='text font-semibold mb-2 line-clamp-2 h-14'>{combo.name}</h3>
					<span className='font-semibold text-[var(--bg-primary)]'>
						{new Intl.NumberFormat('vi-VN', {
							style: 'currency',
							currency: 'VND',
						}).format(combo.price || 0)}
					</span>
					<button className='mt-2 bg-[var(--bg-primary)] text-white py-1 px-4 rounded-lg cursor-pointer'>
						Đặt combo
					</button>
				</div>
			</div>

			{/* Detail Modal */}
			<ComboDetailModal
				combo={combo}
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</>
	);
}
