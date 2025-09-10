import React from 'react';

type EmptyCartWarningModalProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
};

export default function EmptyCartWarningModal({
	isOpen,
	onConfirm,
	onCancel,
}: EmptyCartWarningModalProps) {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4'>
			<div className='bg-white rounded-lg max-w-md w-full p-6'>
				<div className='text-center'>
					<div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4'>
						<svg
							className='h-6 w-6 text-red-600'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
							/>
						</svg>
					</div>
					<h3 className='text-lg font-medium text-gray-900 mb-2'>Xóa tất cả món ăn</h3>
					<p className='text-sm text-gray-500 mb-6'>
						Bạn có chắc chắn muốn xóa món cuối cùng khỏi giỏ hàng? Giỏ hàng sẽ trống
						hoàn toàn.
					</p>
					<div className='flex gap-3'>
						<button
							type='button'
							onClick={onCancel}
							className='flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium'>
							Hủy
						</button>
						<button
							type='button'
							onClick={onConfirm}
							className='flex-1 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium'>
							Xóa
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
