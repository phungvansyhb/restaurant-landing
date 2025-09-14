import clsx from 'clsx';
import ListDishes from './sections/ListDishes';
import RoundMap from './sections/RoundMap';

export default function Home() {
	const HeaderClassName =
		'text-[32px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-center font-bold  font-serif text-stroke-2 text-stroke-black';
	const SubHeaderClassName =
		'text-[20px] lg:text-[30px] text-[var(--text-white)] font-extrabold font-serif';
	return (
		<section className='min-h-screen bg-[var(--bg-primary)]'>
			{/* SEO Optimized Hero Section */}
			<div className='p-2 py-4'>
				<h1 className={HeaderClassName}>Ẩm thực Bắc Hà</h1>
			</div>
			<div className='text-center pb-6'>
				<h2 className={SubHeaderClassName}>Độc đáo chợ phiên Bắc Hà</h2>
				{/* SEO Content */}
				<div className='max-w-4xl mx-auto px-4 pt-6'>
					<p className='hidden lg:block text-[var(--text-white)] leading-relaxed '>
						<strong>Ăn gì ở Bắc Hà ngon nhất?</strong> Nhà hàng Lán Kiên là điểm đến ẩm
						thực Bắc Hà hàng đầu, nằm ngay gần <strong>chợ phiên Bắc Hà</strong> nổi
						tiếng. Khám phá hương vị đặc sắc của vùng cao với thắng cố, lẩu cá suối,
						thịt trâu gác bếp và hơn 50 món đặc sản Tây Bắc.
					</p>
				</div>
			</div>

			<ListDishes />

			{/* SEO Section about Bac Ha */}
			<section className='bg-[var(--bg-dark-primary)] py-12 lg:py-24 text-white bg-svg-secondary'>
				<div className='container mx-auto px-4'>
					<h2 className={HeaderClassName + ' mb-12 lg:mb-14'}>
						Tại sao chọn <br /> nhà hàng Lán Kiên?
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto'>
						<div className='text-left lg:text-center'>
							<h3 className={SubHeaderClassName + ' h-12 lg:h-28'}>
								<div className='checksvg' />
								Gần chợ phiên Bắc Hà
							</h3>
							<p className='hidden lg:block'>
								Vị trí thuận lợi cách chợ phiên Bắc Hà chỉ 5 phút đi bộ. Dễ dàng kết
								hợp tham quan chợ và thưởng thức ẩm thực địa phương.
							</p>
						</div>
						<div className='text-left lg:text-center'>
							<h3 className={SubHeaderClassName + ' h-12 lg:h-28'}>
								<div className='checksvg' />
								Đặc sản chuẩn Bắc Hà
							</h3>
							<p className='hidden lg:block'>
								Thắng cố, lẩu cá suối, thịt trâu gác bếp được chế biến theo công
								thức truyền thống của người H'Mông bản địa.
							</p>
						</div>
						<div className='text-left lg:text-center'>
							<h3 className={SubHeaderClassName + ' h-12 lg:h-28'}>
								<div className='checksvg' />
								Top nhà hàng Bắc Hà
							</h3>
							<p className='hidden lg:block'>
								Được du khách đánh giá cao với 4.5/5 sao. Phục vụ hơn 250 khách/ngày
								với chất lượng ổn định.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-[var(--bg-highlight)] relative'>
				<h2 className={clsx(HeaderClassName + ' px-2 pt-16 !text-[#10512b] ')}>
					Trạm dừng chân <br />
					lý tưởng
				</h2>
				<div className='bg-noodle'></div>
				<RoundMap />
			</section>
		</section>
	);
}
