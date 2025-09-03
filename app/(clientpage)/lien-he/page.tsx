import React from 'react';
import data from '@/app/database.json';
import FacebookIcon from '@/app/components/FacebookIcon';
import ZaloIcon from '@/app/components/ZaloIcon';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Liên hệ | Nhà hàng Lán Kiên',
};

async function submitContactForm(formData: FormData) {
	'use server';

	// Extract form data
	const contactData = {
		name: formData.get('name') as string,
		phone: formData.get('phone') as string,
		email: formData.get('email') as string,
		subject: formData.get('subject') as string,
		message: formData.get('message') as string,
	};

	// Basic validation
	if (!contactData.name || !contactData.phone || !contactData.subject || !contactData.message) {
		// You could redirect to an error page or handle this differently
		console.error('Missing required fields');
		return;
	}

	// Simulate processing delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	console.log('Form submitted:', contactData);

	// Here you would typically:
	// - Save to database
	// - Send email notification
	// - Call external API

	// Redirect to success page or back to form with success message
	redirect('/lien-he?success=true');
}

interface ContactPageProps {
	searchParams: Promise<{ success?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
	const params = await searchParams;
	const showSuccess = params.success === 'true';

	return (
		<div className='min-h-screen bg-[var(--bg-main)]'>
			{/* Header */}
			<div className='bg-[var(--bg-primary)] text-white py-8'>
				<div className='container'>
					<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] font-bold leading-tight font-mono [word-spacing:-16px]'>
						Liên hệ
					</h1>
					<p className='text-lg opacity-90 mt-4'>
						Hãy liên hệ với chúng tôi để đặt bàn hoặc góp ý về dịch vụ
					</p>
				</div>
			</div>

			<div className='m-4 lg:m-24 border bg-white border-slate-100 px-10 lg:px-20 py-5 lg:py-10 rounded-lg shadow '>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Contact Information - Left Column */}
					<div className='space-y-8'>
						<div>
							<h2 className='text-3xl font-bold text-[var(--text-default)] mb-6'>
								Nhà Hàng Lán Kiên
							</h2>
							<div className='space-y-6'>
								{/* Address */}
								<div className='flex items-start space-x-4'>
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
											d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
										/>
									</svg>
									<div>
										<h3 className='font-semibold text-[var(--text-default)] mb-1'>
											Địa chỉ
										</h3>
										<p className='text-gray-600'>{data.restaurant.address}</p>
									</div>
								</div>

								{/* Phone */}
								<div className='flex items-start space-x-4'>
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
											d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
										/>
									</svg>
									<div>
										<h3 className='font-semibold text-[var(--text-default)] mb-1'>
											Số điện thoại
										</h3>
										<p className='text-gray-600'>
											<a
												href={`tel:+${data.restaurant.phone1}`}
												className='hover:text-[var(--bg-primary)] transition-colors'>
												{data.restaurant.phone1}
											</a>
											{'   '}|{'   '}
											<a
												href={`tel:+${data.restaurant.phone2}`}
												className='hover:text-[var(--bg-primary)] transition-colors'>
												{data.restaurant.phone2}
											</a>
										</p>
									</div>
								</div>

								{/* Email */}
								<div className='flex items-start space-x-4'>
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
											d='M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25'
										/>
									</svg>

									<div>
										<h3 className='font-semibold text-[var(--text-default)] mb-1'>
											Email
										</h3>
										<p className='text-gray-600'>
											<a
												href={`mailto:${data.restaurant.email}`}
												className='hover:text-[var(--bg-primary)] transition-colors'>
												{data.restaurant.email}
											</a>
										</p>
									</div>
								</div>

								{/* Working Hours */}
								<div className='flex items-start space-x-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='size-6'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
										/>
									</svg>

									<div>
										<h3 className='font-semibold text-[var(--text-default)] mb-1'>
											Giờ mở cửa
										</h3>
										<div className='text-gray-600 space-y-1'>
											<p>Thứ 2 - Thứ 6: 10:00 - 22:00</p>
											<p>Thứ 7 - Chủ nhật: 09:00 - 23:00</p>
										</div>
									</div>
								</div>
								{/* Social Media */}
								<div className='flex items-start space-x-4'>
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
											d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46'
										/>
									</svg>
									<div>
										<h3 className='font-semibold text-[var(--text-default)] mb-1'>
											Mạng xã hội
										</h3>
										<div className='flex gap-2 mt-2'>
											<FacebookIcon />
											<ZaloIcon />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form - Right Column */}
					<div>
						{showSuccess && (
							<div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
								<p className='text-green-800'>
									✅ Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công. Chúng
									tôi sẽ liên hệ lại sớm nhất có thể.
								</p>
							</div>
						)}

						<form
							action={submitContactForm}
							className='space-y-6'>
							{/* Name */}
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Họ và tên *
								</label>
								<input
									type='text'
									id='name'
									name='name'
									required
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
									placeholder='Nhập họ và tên của bạn'
								/>
							</div>

							{/* Phone and Email Row */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='phone'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Số điện thoại *
									</label>
									<input
										type='tel'
										id='phone'
										name='phone'
										required
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
										placeholder='0901 234 567'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
										placeholder='your@email.com'
									/>
								</div>
							</div>

							{/* Subject */}
							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Tiêu đề *
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									required
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent'
									placeholder='Đặt bàn / Góp ý / Khiếu nại'
								/>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Nội dung *
								</label>
								<textarea
									id='message'
									name='message'
									required
									rows={5}
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent resize-vertical'
									placeholder='Vui lòng để lại tin nhắn chi tiết để chúng tôi có thể hỗ trợ bạn tốt nhất...'
								/>
							</div>

							{/* Submit Button */}
							<button
								type='submit'
								className='w-full bg-[var(--bg-primary)] text-white py-3 px-6 rounded-lg hover:bg-[var(--bg-dark-primary)] transition-colors font-medium'>
								Gửi tin nhắn
							</button>
						</form>

						{/* Note */}
						<p className='text-sm text-gray-500 mt-4'>
							* Thông tin bắt buộc. Chúng tôi cam kết bảo mật thông tin cá nhân của
							bạn.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
