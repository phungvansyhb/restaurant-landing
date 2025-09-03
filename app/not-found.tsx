import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='min-h-screen bg-[var(--bg-main)] flex items-center justify-center px-4'>
			<div className='text-center max-w-md mx-auto'>
				{/* 404 Number */}
				<div className='mb-8'>
					<h1 className='text-9xl font-bold text-[var(--bg-primary)] opacity-20'>404</h1>
				</div>

				{/* Main Message */}
				<div className='mb-8'>
					<h2 className='text-3xl font-bold text-[var(--text-default)] mb-4'>
						Trang không tồn tại
					</h2>
					<p className='text-gray-600 text-lg leading-relaxed'>
						Có vẻ như món ăn bạn đang tìm kiếm đã "hết" rồi! Hãy quay về thực đơn để
						khám phá những món ngon khác.
					</p>
				</div>

				{/* Restaurant themed illustration */}
				<div className='mb-8'>
					<div className='text-6xl mb-4'>🍜</div>
					<p className='text-gray-500 text-sm'>
						Đầu bếp của chúng tôi đang chuẩn bị những món ăn tuyệt vời khác
					</p>
				</div>

				{/* Action Buttons */}
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Link
						href='/'
						className='bg-[var(--bg-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--bg-dark-primary)] transition-colors font-medium'>
						Về trang chủ
					</Link>
					<Link
						href='/thuc-don'
						className='border border-[var(--bg-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-lg hover:bg-[var(--bg-primary)] hover:text-white transition-colors font-medium'>
						Xem thực đơn
					</Link>
				</div>

				{/* Footer message */}
				<div className='mt-12 text-gray-400 text-sm'>
					<p>Nếu bạn tin rằng đây là lỗi, hãy liên hệ với chúng tôi</p>
				</div>
			</div>
		</div>
	);
}
