'use client';
import { useEffect, useState } from 'react';
import { Dish } from '../typeDefs/Dish';
import Image from 'next/image';

export default function ComboDetailModal({
	combo,
	isOpen,
	onClose,
}: {
	combo: Dish;
	isOpen: boolean;
	onClose: () => void;
}) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = combo.gallery || [];
	const hasImages = images.length > 0;

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const goToImage = (index: number) => {
		setCurrentImageIndex(index);
	};

	// Keyboard navigation and scroll management
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				prevImage();
			} else if (e.key === 'ArrowRight') {
				nextImage();
			} else if (e.key === 'Escape') {
				onClose();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen]);

	if (!isOpen) return null;
	
	return (
		<div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
			<div className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col'>
				{/* Scrollable content */}
				<div className='flex-1 overflow-y-auto p-6 pb-0'>
					<div className='flex justify-between items-center mb-6'>
						<h2 className='text-2xl font-bold text-[var(--text-default)]'>
							{combo.name}
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

					{/* Gallery Slideshow - Moved to top */}
					{hasImages ? (
						<div className='relative mb-6'>
							{/* Slideshow */}
							<div className='relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden mb-4'>
								<Image
									src={images[currentImageIndex]}
									alt={`${combo.name} - Ảnh ${currentImageIndex + 1}`}
									fill
									className='object-cover transition-opacity duration-300'
									sizes='(max-width: 768px) 100vw, 600px'
								/>

								{/* Navigation arrows */}
								{images.length > 1 && (
									<>
										<button
											onClick={prevImage}
											className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors'
											aria-label='Ảnh trước'>
											<svg
												className='w-5 h-5'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M15 19l-7-7 7-7'
												/>
											</svg>
										</button>
										<button
											onClick={nextImage}
											className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors'
											aria-label='Ảnh tiếp theo'>
											<svg
												className='w-5 h-5'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M9 5l7 7-7 7'
												/>
											</svg>
										</button>
									</>
								)}

								{/* Image counter */}
								{images.length > 1 && (
									<div className='absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm'>
										{currentImageIndex + 1} / {images.length}
									</div>
								)}
							</div>

							{/* Thumbnail navigation - Hidden on mobile */}
							{images.length > 1 && (
								<div className='hidden md:flex gap-2 overflow-x-auto pb-2'>
									{images.map((image, index) => (
										<button
											key={index}
											onClick={() => goToImage(index)}
											className={`relative w-16 h-16 flex-shrink-0 rounded border-2 overflow-hidden transition-all ${
												index === currentImageIndex
													? 'border-red-500 scale-105'
													: 'border-gray-300 hover:border-gray-400'
											}`}>
											<Image
												src={image}
												alt={`Thumbnail ${index + 1}`}
												fill
												className='object-cover'
												sizes='64px'
											/>
										</button>
									))}
								</div>
							)}
						</div>
					) : (
						/* Fallback when no gallery images */
						<div className='w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-6'>
							{combo.image ? (
								<Image
									src={combo.image}
									alt={combo.name}
									width={600}
									height={256}
									className='w-full h-full object-cover'
									loading='lazy'
								/>
							) : (
								<div className='w-full h-full bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] flex items-center justify-center'>
									<div className='text-white text-center p-4'>
										<div className='text-3xl font-bold mb-2'>{combo.name}</div>
										<div className='text-lg opacity-90'>Combo Set</div>
									</div>
								</div>
							)}
						</div>
					)}
					{/* Price */}
					<div className='text-2xl font-bold text-[var(--bg-primary)] mb-4'>
						{new Intl.NumberFormat('vi-VN', {
							style: 'currency',
							currency: 'VND',
						}).format(combo.price || 0)}
					</div>
					{/* Description */}
					<div className='mb-6'>
						<h3 className='text-lg font-semibold mb-2'>Mô tả</h3>
						<p className='text-gray-600 leading-relaxed'>{combo.description}</p>
					</div>
				</div>

				{/* Fixed footer */}
				<div className='border-t border-gray-200 p-6 bg-white rounded-b-lg'>
					<div className='flex gap-3'>
						<button
							onClick={onClose}
							className='flex-1 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
							Đóng
						</button>
						<button className='flex-1 py-3 px-4 bg-[var(--bg-primary)] text-white rounded-lg hover:bg-[var(--bg-dark-primary)] transition-colors'>
							Đặt món ngay
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
