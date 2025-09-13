import ListDishes from './sections/ListDishes';
import RoundMap from './sections/RoundMap';

export default function Home() {
	return (
		<section className='min-h-screen bg-[var(--bg-primary)]'>
			{/* SEO Optimized Hero Section */}
			<div className='p-2 py-4'>
				<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-center font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
					Ẩm thực Bắc Hà
				</h1>
			</div>
			<div className='text-center pt-3 pb-6'>
				<h2 className='text-[20px] lg:text-[30px] uppercase text-[var(--text-white)] font-extrabold font-mono'>
					Độc đáo chợ phiên Bắc Hà
				</h2>
				{/* SEO Content */}
				<div className='max-w-4xl mx-auto px-4 pt-4'>
					<p className='text-[var(--text-white)] leading-relaxed '>
						<strong>Ăn gì ở Bắc Hà ngon nhất?</strong> Nhà hàng Lán Kiên là điểm đến ẩm
						thực Bắc Hà hàng đầu, nằm ngay gần <strong>chợ phiên Bắc Hà</strong> nổi
						tiếng. Khám phá hương vị đặc sắc của vùng cao với thắng cố, lẩu cá suối,
						thịt trâu gác bếp và hơn 50 món đặc sản Tây Bắc.
					</p>
				</div>
			</div>

			<ListDishes />

			{/* SEO Section about Bac Ha */}
			<section className='bg-[var(--bg-dark-primary)] py-24 text-white'>
				<div className='container mx-auto px-4'>
					<h2 className='text-[42px] lg:text-[56px] uppercase font-bold text-[var(--text-highlight)] text-center mb-12 lg:mb-24'>
						Tại sao chọn ẩm thực Bắc Hà tại Lán Kiên?
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 max-w-6xl mx-auto'>
						<div className='text-center'>
							<h3 className='text-3xl font-bold text-[var(--text-primary)] h-12 lg:h-20 mb-4 inline-flex items-start justify-center gap-2'>
								Gần chợ phiên Bắc Hà
							</h3>
							<p>
								Vị trí thuận lợi cách chợ phiên Bắc Hà chỉ 5 phút đi bộ. Dễ dàng kết
								hợp tham quan chợ và thưởng thức ẩm thực địa phương.
							</p>
						</div>
						<div className='text-center'>
							<h3 className='text-3xl font-bold text-[var(--text-primary)] mb-4 h-12 lg:h-20'>
								Đặc sản Bắc Hà chính gốc
							</h3>
							<p>
								Thắng cố, lẩu cá suối, thịt trâu gác bếp được chế biến theo công
								thức truyền thống của người H'Mông bản địa.
							</p>
						</div>
						<div className='text-center'>
							<h3 className='text-3xl font-bold  mb-4 h-12 lg:h-20'>
								Top nhà hàng Bắc Hà
							</h3>
							<p>
								Được du khách đánh giá cao với 4.5/5 sao. Phục vụ hơn 250 khách/ngày
								với chất lượng ổn định.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-[var(--bg-highlight)]'>
				<h2 className='px-2 pt-16 text-[42px] lg:text-[56px] uppercase text-[var(--text-primary)] text-center font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
					Trạm dừng chân <br />
					lý tưởng
				</h2>

				<RoundMap />
			</section>
		</section>
	);
}
