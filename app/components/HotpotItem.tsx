'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type HotpotItemProps = {
	hotpot: {
		id: string;
		name: string;
		price_range?: string;
		description?: string;
		description_name?: string;
		tips?: string;
		dishes?: Array<{ id: string; name: string }>;
	};
};

// Modal component for hotpot details
function HotpotDetailModal({
	hotpot,
	isOpen,
	onClose,
}: {
	hotpot: HotpotItemProps['hotpot'];
	isOpen: boolean;
	onClose: () => void;
}) {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
			<div className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
				<div className='p-6'>
					<div className='flex justify-between items-center mb-6'>
						<h2 className='text-2xl font-bold text-[var(--text-default)]'>
							{hotpot.name}
						</h2>
						<button
							onClick={onClose}
							className='text-gray-500 hover:text-gray-700 text-2xl cursor-pointer'
							aria-label='Đóng'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='size-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
								/>
							</svg>
						</button>
					</div>

					{/* Large image */}
					<div className='w-full h-64 bg-gradient-to-br from-[var(--bg-highlight)] to-[var(--bg-secondary)] rounded-lg flex items-center justify-center mb-6'>
						<div className='text-white text-center p-4'>
							<div className='text-3xl font-bold mb-2'>{hotpot.name}</div>
							<div className='text-lg opacity-90'>Lẩu</div>
						</div>
					</div>

					{/* Price */}
					{hotpot.price_range && (
						<div className='text-2xl font-bold text-[var(--bg-primary)] mb-4'>
							{hotpot.price_range}
						</div>
					)}

					{/* Description */}
					{hotpot.description && (
						<div className='mb-4'>
							<h3 className='text-lg font-semibold mb-2'>Mô tả</h3>
							<p className='text-gray-600 leading-relaxed'>{hotpot.description}</p>
						</div>
					)}

					{/* Description name */}
					{hotpot.description_name && (
						<div className='mb-4'>
							<p className='text-gray-600 leading-relaxed'>
								{hotpot.description_name}
							</p>
						</div>
					)}

					{/* Tips */}
					{hotpot.tips && (
						<div className='mb-6 p-4 bg-[var(--bg-highlight)] bg-opacity-10 rounded-lg'>
							<div className='text-[var(--bg-primary)] font-medium'>
								💡 <strong>Gợi ý:</strong> {hotpot.tips}
							</div>
						</div>
					)}

					{/* Dishes list */}
					{hotpot.dishes && hotpot.dishes.length > 0 && (
						<div className='mb-6'>
							<h3 className='text-lg font-semibold text-[var(--bg-primary)] mb-3'>
								Các loại lẩu ({hotpot.dishes.length} loại):
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
								{hotpot.dishes.map((dish, index) => (
									<div
										key={dish.id}
										className='flex items-center p-2 bg-gray-50 rounded'>
										<span className='w-6 h-6 bg-[var(--bg-highlight)] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3'>
											{index + 1}
										</span>
										<span className='text-sm'>{dish.name}</span>
									</div>
								))}
							</div>
						</div>
					)}

					<div className='flex gap-3 pt-4'>
						<button
							onClick={onClose}
							className='flex-1 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50'>
							Đóng
						</button>
						<button className='flex-1 py-3 px-4 bg-[var(--bg-primary)] text-white rounded-lg hover:bg-[var(--bg-dark-primary)]'>
							Đặt lẩu này
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function HotpotItem({ hotpot }: HotpotItemProps) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='bg-white rounded-lg shadow cursor-pointer overflow-hidden hover:shadow-xl transition-shadow flex'>
				{/* Image - clickable to open modal */}
				<div
					className='relative w-31 h-31 overflow-hidden cursor-pointer flex-shrink-0'
					onClick={() => setShowModal(true)}>
					<div className='w-full h-full bg-gradient-to-br from-[var(--bg-highlight)] to-[var(--bg-secondary)] flex items-center justify-center'>
						<div className='text-white text-center p-2'>
							<div className='text-sm font-bold mb-1'>{hotpot.name}</div>
							<div className='text-xs opacity-90'>Lẩu</div>
							<div className='text-xs opacity-75 mt-1'>Nhấn để xem chi tiết</div>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className='flex-1 px-4 py-3 flex flex-col justify-between'>
					<div>
						<h3
							className='text-lg font-semibold mb-2 line-clamp-2'
							onClick={() => setShowModal(true)}>
							{hotpot.name}
						</h3>
						{hotpot.price_range && (
							<span className='font-semibold text-[var(--bg-primary)] text-sm'>
								{hotpot.price_range}
							</span>
						)}
					</div>
					<button className='mt-2 bg-[var(--bg-primary)] text-white py-2 px-4 rounded-lg cursor-pointer self-start text-sm'>
						Đặt lẩu
					</button>
				</div>
			</div>

			{/* Detail Modal */}
			<HotpotDetailModal
				hotpot={hotpot}
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</>
	);
}
