import React from 'react';

type ResultModalProps = {
	isOpen: boolean;
	isSuccess: boolean;
	message: string;
	onClose: () => void;
};

export default function ResultModal({ isOpen, isSuccess, message, onClose }: ResultModalProps) {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/70 z-[70] flex items-center justify-center p-4'>
			<div className='bg-white rounded-lg max-w-md w-full p-6'>
				<div className='text-center'>
					<div
						className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full mb-4 ${
							isSuccess ? 'bg-green-100' : 'bg-red-100'
						}`}>
						{isSuccess ? (
							<svg
								className='h-6 w-6 text-green-600'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4.5 12.75l6 6 9-13.5'
								/>
							</svg>
						) : (
							<svg
								className='h-6 w-6 text-red-600'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						)}
					</div>
					<h3
						className={`text-lg font-medium mb-2 ${
							isSuccess ? 'text-green-900' : 'text-red-900'
						}`}>
						{isSuccess ? 'Đặt hàng thành công!' : 'Có lỗi xảy ra'}
					</h3>
					<p className='text-sm mb-6'>{message}</p>
					<button
						type='button'
						onClick={onClose}
						className={`w-full py-2 px-4 rounded-lg text-white font-medium cursor-pointer ${
							isSuccess
								? 'bg-[var(--bg-primary)] hover:bg-green-700'
								: 'bg-red-600 hover:bg-red-700'
						}`}>
						{isSuccess ? 'Hoàn tất' : 'Thử lại'}
					</button>
				</div>
			</div>
		</div>
	);
}
