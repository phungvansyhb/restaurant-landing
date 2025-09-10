'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import CartItems from './CartItems';
import CustomerForm from './CustomerForm';
import EmptyCartWarningModal from './EmptyCartWarningModal';
import ResultModal from './ResultModal';
import LoadingButton from './LoadingButton';

type CheckoutModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
	const { cart, updateQty, removeItem, clear } = useCart();
	const [showEmptyCartWarning, setShowEmptyCartWarning] = useState(false);
	const [itemToRemove, setItemToRemove] = useState<string | number | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showResultModal, setShowResultModal] = useState(false);
	const [resultMessage, setResultMessage] = useState('');
	const [isSuccess, setIsSuccess] = useState(false);
	const [phoneError, setPhoneError] = useState('');

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

	// Phone validation function
	const validatePhoneNumber = (phone: string): boolean => {
		// Vietnamese phone number patterns:
		// Mobile: 09x, 08x, 07x, 05x, 03x (10 digits)
		// Landline: 02x (10-11 digits)
		const phoneRegex = /^(0[3-9])\d{8,9}$/;
		return phoneRegex.test(phone.replace(/\s+/g, '')); // Remove spaces before validation
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear phone error when user starts typing
		if (name === 'phoneNumber' && phoneError) {
			setPhoneError('');
		}
	};

	const handleQuantityChange = (id: string | number, newQty: number) => {
		if (newQty <= 0) {
			// Check if this is the last item in cart
			if (cart.length === 1) {
				setItemToRemove(id);
				setShowEmptyCartWarning(true);
			} else {
				removeItem(id);
			}
		} else {
			updateQty(id, newQty);
		}
	};

	const handleConfirmRemoveLastItem = () => {
		if (itemToRemove) {
			removeItem(itemToRemove);
		}
		setShowEmptyCartWarning(false);
		setItemToRemove(null);
		onClose();
	};

	const handleCancelRemoveLastItem = () => {
		setShowEmptyCartWarning(false);
		setItemToRemove(null);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate phone number before submitting
		if (!validatePhoneNumber(formData.phoneNumber)) {
			setPhoneError('Số điện thoại không hợp lệ');
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch('/api/send-order', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					formData,
					cart,
					total,
				}),
			});

			const result = await response.json();

			if (response.ok) {
				setIsSuccess(true);
				setResultMessage('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
				setShowResultModal(true);
			} else {
				setIsSuccess(false);
				setResultMessage(result.error || 'Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại.');
				setShowResultModal(true);
			}
		} catch (error) {
			console.error('Error submitting order:', error);
			setIsSuccess(false);
			setResultMessage(
				'Có lỗi xảy ra khi đặt hàng. Vui lòng kiểm tra kết nối internet và thử lại.'
			);
			setShowResultModal(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleResultModalClose = () => {
		setShowResultModal(false);
		if (isSuccess) {
			clear();
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/50  z-50 flex items-center justify-center p-4'>
			<div className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col'>
				{/* Scrollable content */}
				<div className='flex-1 overflow-y-auto p-6 pb-0'>
					<div className='flex justify-between items-center mb-6'>
						<h2 className='text-2xl font-bold text-[var(--text-default)]'>
							Xác nhận đặt bàn
						</h2>
						<button
							onClick={isSubmitting ? undefined : onClose}
							disabled={isSubmitting}
							className={`text-gray-500 hover:text-gray-700 cursor-pointer ${
								isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
							}`}
							aria-label='Đóng'
							type='button'>
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
					<CartItems
						cart={cart}
						total={total}
						isSubmitting={isSubmitting}
						onQuantityChange={handleQuantityChange}
					/>

					{/* Customer Form */}
					<CustomerForm
						formData={formData}
						isSubmitting={isSubmitting}
						onInputChange={handleInputChange}
						phoneError={phoneError}
					/>
				</div>

				{/* Fixed Footer */}
				<div className='border-t border-gray-200 bg-white p-6 rounded-b-lg'>
					<div className='flex gap-3'>
						<button
							type='button'
							onClick={isSubmitting ? undefined : onClose}
							disabled={isSubmitting}
							className={`flex-1 py-3 px-4 border border-gray-300 rounded-lg ${
								isSubmitting
									? 'opacity-50 cursor-not-allowed bg-gray-100'
									: 'hover:bg-gray-50'
							}`}>
							Hủy
						</button>
						<LoadingButton
							isLoading={isSubmitting}
							disabled={
								cart.length === 0 ||
								!formData.customerName ||
								!formData.phoneNumber ||
								!!phoneError ||
								isSubmitting
							}
							onClick={handleSubmit}
							loadingText='Đang gửi...'
							normalText='Xác nhận đặt bàn'
						/>
					</div>
				</div>
			</div>

			{/* Modals */}
			<EmptyCartWarningModal
				isOpen={showEmptyCartWarning && !isSubmitting}
				onConfirm={handleConfirmRemoveLastItem}
				onCancel={handleCancelRemoveLastItem}
			/>

			<ResultModal
				isOpen={showResultModal}
				isSuccess={isSuccess}
				message={resultMessage}
				onClose={handleResultModalClose}
			/>
		</div>
	);
}
