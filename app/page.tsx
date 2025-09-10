import ListDishes from './sections/ListDishes';
import RoundMap from './sections/RoundMap';

export default function Home() {
	return (
		<section className='min-h-screen bg-[var(--bg-primary)]'>
			{/* Hero Section với nhiều text content */}
			<div className='p-2 py-4'>
				<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-center font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
					Độc đáo ẩm thực <br /> cao nguyên
				</h1>
			</div>
			<div className='text-center pt-3 pb-6'>
				<span className='text-[20px] lg:text-[30px] uppercase text-[var(--text-white)] font-extrabold font-mono'>
					Chợ phiên Bắc Hà
				</span>
			</div>

			<ListDishes />

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
