export default function Loading() {
	return (
		<div className='min-h-screen bg-[var(--bg-main)] flex items-center justify-center'>
			<div className='text-center'>
				{/* Spinner */}
				<div className='inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-[var(--bg-primary)] mb-6'></div>

				{/* Restaurant Logo/Name */}
				<div className='mb-4'>
					<h2 className='text-2xl font-bold text-[var(--text-default)] mb-2'>
						Nhà Hàng Lán Kiên - Ẩm thực cao nguyên
					</h2>
					<p className='text-gray-600'>Đang tải thực đơn ngon miệng...</p>
				</div>

				{/* Loading dots animation */}
				<div className='flex justify-center space-x-1'>
					<div
						className='w-2 h-2 bg-[var(--bg-primary)] rounded-full animate-bounce'
						style={{ animationDelay: '0ms' }}></div>
					<div
						className='w-2 h-2 bg-[var(--bg-primary)] rounded-full animate-bounce'
						style={{ animationDelay: '150ms' }}></div>
					<div
						className='w-2 h-2 bg-[var(--bg-primary)] rounded-full animate-bounce'
						style={{ animationDelay: '300ms' }}></div>
				</div>
			</div>
		</div>
	);
}
