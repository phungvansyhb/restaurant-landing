'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';

type CheckoutModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
	const { cart, updateQty, removeItem, clear } = useCart();

	// Helper functions for default values
	const getDefaultDate = () => {
		const today = new Date();
		return today.toISOString().split('T')[0]; // YYYY-MM-DD format
	};

	const getDefaultTime = () => {
		const now = new Date();
		const minutes = now.getMinutes();
		const roundedMinutes = minutes < 30 ? 30 : 0;
		const hour = roundedMinutes === 0 ? now.getHours() + 1 : now.getHours();
		return `${String(hour).padStart(2, '0')}:${String(roundedMinutes).padStart(2, '0')}`;
	};

	const [formData, setFormData] = useState({
		customerName: '',
		phoneNumber: '',
		reservationDate: getDefaultDate(),
		reservationTime: getDefaultTime(),
		numberOfCustomers: 1,
		notes: '',
	});

	const total = cart.reduce((s, item) => s + (item.price || 0) * (item.quantity || 0), 0);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleQuantityChange = (id: string | number, newQty: number) => {
		if (newQty <= 0) {
			removeItem(id);
		} else {
			updateQty(id, newQty);
		}
	};

	const resetOrders = () => {
		clear();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the order to your backend
		console.log('Order submitted:', { formData, cart, total });
		alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
		clear();
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/50  z-50 flex items-center justify-center p-4'>
			<div className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
				<div className='p-6'>
					<div className='flex justify-between items-center mb-6'>
						<h2 className='text-2xl font-bold text-[var(--text-default)]'>
							Xác nhận đặt bàn
						</h2>
						<button
							onClick={onClose}
							className='text-gray-500 hover:text-gray-700 cursor-pointer'
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

					{/* Cart Items */}
					<div className='mb-6'>
						<h3 className='text-lg font-semibold mb-4'>
							Món đã chọn hoặc{' '}
							<button
								className='text-[var(--text-highlight)] cursor-pointer font-extralight'
								onClick={resetOrders}>
								xoá hết đến gọi sau
							</button>
						</h3>
						{cart.length === 0 ? (
							<p className='text-gray-500'>Giỏ hàng trống</p>
						) : (
							<div className='space-y-3'>
								{cart.map((item) => (
									<div
										key={item.id}
										className='flex items-center gap-4 p-3 border rounded-lg'>
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
													handleQuantityChange(
														String(item.id),
														(item.quantity || 0) - 1
													)
												}
												className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
												-
											</button>
											<span className='w-8 text-center'>{item.quantity}</span>
											<button
												onClick={() =>
													handleQuantityChange(
														String(item.id),
														(item.quantity || 0) + 1
													)
												}
												className='w-8 h-8 rounded-full bg-[var(--bg-primary)] text-white flex items-center justify-center'>
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

					{/* Customer Form */}
					<form
						onSubmit={handleSubmit}
						className='space-y-4'>
						<h3 className='text-lg font-semibold'>Thông tin khách hàng</h3>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Họ và tên *
								</label>
								<input
									type='text'
									name='customerName'
									value={formData.customerName}
									onChange={handleInputChange}
									required
									className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
									placeholder='Nhập họ tên'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>
									Số điện thoại *
								</label>
								<input
									type='tel'
									name='phoneNumber'
									value={formData.phoneNumber}
									onChange={handleInputChange}
									required
									className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
									placeholder='Nhập số điện thoại'
								/>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Ngày đặt bàn
								</label>
								<input
									type='date'
									name='reservationDate'
									value={formData.reservationDate}
									onChange={handleInputChange}
									className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>
									Giờ đặt bàn
								</label>
								<input
									type='time'
									name='reservationTime'
									value={formData.reservationTime}
									onChange={handleInputChange}
									step='1800'
									className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>Số khách</label>
								<input
									type='number'
									name='numberOfCustomers'
									value={formData.numberOfCustomers}
									onChange={handleInputChange}
									min='1'
									max='50'
									className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
									placeholder='Số người'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium mb-1'>Ghi chú</label>
							<textarea
								name='notes'
								value={formData.notes}
								onChange={handleInputChange}
								rows={3}
								className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
								placeholder='Yêu cầu đặc biệt, dị ứng thực phẩm...'
							/>
						</div>

						<div className='flex gap-3 pt-4'>
							<button
								type='button'
								onClick={onClose}
								className='flex-1 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50'>
								Hủy
							</button>
							<button
								type='submit'
								disabled={
									cart.length === 0 ||
									!formData.customerName ||
									!formData.phoneNumber
								}
								className='flex-1 py-3 px-4 bg-[var(--bg-primary)] text-white rounded-lg hover:bg-[var(--bg-dark-primary)] disabled:opacity-50 disabled:cursor-not-allowed'>
								Xác nhận đặt bàn
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
