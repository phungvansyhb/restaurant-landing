import React from 'react';

type FormData = {
	customerName: string;
	phoneNumber: string;
	reservationDate: string;
	reservationTime: string;
	numberOfCustomers: number;
	notes: string;
};

type CustomerFormProps = {
	formData: FormData;
	isSubmitting: boolean;
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => void;
	phoneError?: string;
};

export default function CustomerForm({
	formData,
	isSubmitting,
	onInputChange,
	phoneError,
}: CustomerFormProps) {
	return (
		<div className='space-y-4'>
			<h3 className='text-lg font-semibold'>Thông tin khách hàng</h3>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div>
					<label className='block text-sm font-medium mb-1'>Họ và tên *</label>
					<input
						type='text'
						name='customerName'
						value={formData.customerName}
						onChange={onInputChange}
						disabled={isSubmitting}
						required
						className={`w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent ${
							isSubmitting ? 'bg-gray-100 opacity-50 cursor-not-allowed' : ''
						}`}
						placeholder='Nhập họ tên'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>Số điện thoại *</label>
					<input
						type='tel'
						name='phoneNumber'
						value={formData.phoneNumber}
						onChange={onInputChange}
						disabled={isSubmitting}
						required
						className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent ${
							phoneError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200'
						} ${isSubmitting ? 'bg-gray-100 opacity-50 cursor-not-allowed' : ''}`}
						placeholder='Nhập số điện thoại'
					/>
					{phoneError && <p className='text-red-500 text-sm mt-1'>{phoneError}</p>}
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				<div>
					<label className='block text-sm font-medium mb-1'>Ngày đặt bàn</label>
					<input
						type='date'
						name='reservationDate'
						value={formData.reservationDate}
						onChange={onInputChange}
						disabled={isSubmitting}
						className={`w-full p-2 border rounded-lg border-gray-200 focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent ${
							isSubmitting ? 'bg-gray-100 opacity-50 cursor-not-allowed' : ''
						}`}
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>Giờ đặt bàn</label>
					<input
						type='time'
						name='reservationTime'
						value={formData.reservationTime}
						onChange={onInputChange}
						disabled={isSubmitting}
						step='1800'
						className={`w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent ${
							isSubmitting ? 'bg-gray-100 opacity-50 cursor-not-allowed' : ''
						}`}
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>Số khách</label>
					<input
						type='number'
						name='numberOfCustomers'
						value={formData.numberOfCustomers}
						onChange={onInputChange}
						disabled={isSubmitting}
						min='1'
						max='50'
						className={`w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent ${
							isSubmitting ? 'bg-gray-100 opacity-50 cursor-not-allowed' : ''
						}`}
						placeholder='Số người'
					/>
				</div>
			</div>

			<div>
				<label className='block text-sm font-medium mb-1'>Ghi chú</label>
				<textarea
					name='notes'
					value={formData.notes}
					onChange={onInputChange}
					disabled={isSubmitting}
					rows={3}
					className={`w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent ${
						isSubmitting ? 'bg-gray-100 opacity-50 cursor-not-allowed' : ''
					}`}
					placeholder='Yêu cầu đặc biệt, dị ứng thực phẩm...'
				/>
			</div>
		</div>
	);
}
