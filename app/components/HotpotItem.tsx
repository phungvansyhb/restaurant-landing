'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dish } from '../typeDefs/Dish';
import ComboDetailModal from './ComboDetailModal';

type HotpotItemProps = {
	hotpot: Dish;
};

export default function HotpotItem({ hotpot }: HotpotItemProps) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='bg-white rounded-lg cursor-pointer overflow-hidden shadow border border-slate-100 transition-shadow flex h-[124px]'>
				{/* Image - clickable to open modal */}
				<div
					className='relative w-31 h-31 overflow-hidden cursor-pointer flex-shrink-0'
					onClick={() => setShowModal(true)}>
					<div className='w-full h-full bg-gradient-to-br from-[var(--bg-highlight)] to-[var(--bg-secondary)] flex items-center justify-center'>
						{hotpot.image ? (
							<Image
								src={hotpot.image}
								alt={hotpot.name}
								width={124}
								height={124}
								className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
								loading='lazy'
								sizes='124px'
							/>
						) : (
							<div className='text-white text-center p-2'>
								<div className='text-sm font-bold mb-1'>{hotpot.name}</div>
								<div className='text-xs opacity-90'>Lẩu</div>
								<div className='text-xs opacity-75 mt-1'>Nhấn để xem chi tiết</div>
							</div>
						)}
					</div>
				</div>

				{/* Content */}
				<div className='flex-1 px-4 py-3 flex flex-col justify-between'>
					<div>
						<h3
							className='font-semibold mb-2 line-clamp-1'
							onClick={() => setShowModal(true)}>
							{hotpot.name}
						</h3>

						<span className='font-semibold text-[var(--bg-primary)] text-sm'>
							<span className='text-base mr-1'>Giá:</span>
							{new Intl.NumberFormat('vi-VN').format(hotpot.price || 0)}
							{hotpot.priceSpecial && (
								<span className=''>
									-
									{new Intl.NumberFormat('vi-VN', {
										style: 'currency',
										currency: 'VND',
									}).format(hotpot.priceSpecial)}
								</span>
							)}
							{hotpot.unit && <span>/{hotpot.unit}</span>}
						</span>
					</div>
					<button className='mt-2 bg-[var(--bg-primary)] text-white py-2 px-4 rounded-lg cursor-pointer self-start text-sm'>
						Đặt lẩu
					</button>
				</div>
			</div>

			{/* Detail Modal */}
			<ComboDetailModal
				combo={hotpot}
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</>
	);
}
