import React from 'react';

type Props = {};

export default function OrderForm({}: Props) {
	return (
		<section
			className='py-20 bg-gray-50'
			id='order'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-12'>Make a Reservation</h2>
				<form className='max-w-lg mx-auto'>
					<div className='mb-6'>
						<input
							type='text'
							placeholder='Your Name'
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
						/>
					</div>
					<div className='mb-6'>
						<input
							type='email'
							placeholder='Your Email'
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
						/>
					</div>
					<div className='mb-6'>
						<input
							type='datetime-local'
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
						/>
					</div>
					<div className='mb-6'>
						<textarea
							placeholder='Special Requests'
							rows={4}
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'></textarea>
					</div>
					<button
						type='submit'
						className='w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors'>
						Make Reservation
					</button>
				</form>
			</div>
		</section>
	);
}
