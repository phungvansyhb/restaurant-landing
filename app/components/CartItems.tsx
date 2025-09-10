import React from 'react';
import { CartItem } from '@/app/context/CartContext';

type CartItemsProps = {
	cart: CartItem[];
	total: number;
	isSubmitting: boolean;
	onQuantityChange: (id: string | number, newQty: number) => void;
};

export default function CartItems({ cart, total, isSubmitting, onQuantityChange }: CartItemsProps) {
	return (
		<div className='mb-6'>
			<h3 className='text-lg font-semibold mb-4'>Món đã chọn</h3>
			{cart.length === 0 ? (
				<p className='text-gray-500'>Giỏ hàng trống</p>
			) : (
				<div className='space-y-3'>
					{cart.map((item) => (
						<div
							key={item.id}
							className='flex items-center gap-4 p-3 border border-gray-200 rounded-lg'>
							{item.image && (
								<img
									src={item.image}
									alt={item.name}
									className='w-16 h-16 object-cover rounded'
								/>
							)}
							<div className='flex-1'>
								<h4 className='font-semibold'>{item.name}</h4>
								<p className='font-medium text-[var(--bg-primary)]'>
									{new Intl.NumberFormat('vi-VN', {
										style: 'currency',
										currency: 'VND',
									}).format(item.price || 0)}
								</p>
							</div>
							<div className='flex items-center gap-2'>
								<button
									onClick={() =>
										onQuantityChange(String(item.id), (item.quantity || 0) - 1)
									}
									disabled={isSubmitting}
									className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ${
										isSubmitting
											? 'opacity-50 cursor-not-allowed'
											: 'hover:bg-gray-300'
									}`}>
									-
								</button>
								<span className='w-8 text-center'>{item.quantity}</span>
								<button
									onClick={() =>
										onQuantityChange(String(item.id), (item.quantity || 0) + 1)
									}
									disabled={isSubmitting}
									className={`w-8 h-8 rounded-full bg-[var(--bg-primary)] text-white flex items-center justify-center ${
										isSubmitting
											? 'opacity-50 cursor-not-allowed'
											: 'hover:bg-[var(--bg-dark-primary)]'
									}`}>
									+
								</button>
							</div>
						</div>
					))}
				</div>
			)}

			{cart.length > 0 && (
				<div className='mt-4 p-3 bg-[var(--bg-highlight)] bg-opacity-10 rounded-lg'>
					<div className='flex justify-between font-semibold text-lg'>
						<span>Tổng cộng:</span>
						<span className='text-[var(--bg-primary)]'>
							{new Intl.NumberFormat('vi-VN', {
								style: 'currency',
								currency: 'VND',
							}).format(total)}
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
