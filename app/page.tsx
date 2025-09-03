import { Carousel, CarouselContent, CarouselItem } from './components/Carousel';
import DishItem from './components/DishItem';
import database from './database.json';
import HighlightBtn from './components/HighlightBtn';
import RoundMap from './sections/RoundMap';
import FloatCheckoutBtn from './components/FloatCheckoutBtn';
import ListDishes from './sections/ListDishes';

export default function Home() {
	return (
		<section className='min-h-screen bg-[var(--bg-primary)]'>
			<div className='p-2 py-4'>
				<h2 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-center font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
					Độc đáo ẩm thực <br /> cao nguyên
				</h2>
			</div>
			<div className='text-center pt-3 pb-6'>
				<span className='text-[20px] lg:text-[30px] uppercase text-[var(--text-white)] font-extrabold font-mono'>
					Chợ phiên Bắc Hà
				</span>
			</div>
			<ListDishes />
			<section className='bg-[var(--bg-highlight)]'>
				<RoundMap />
			</section>
		</section>
	);
}
