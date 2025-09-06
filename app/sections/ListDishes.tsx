import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../components/Carousel';
import HighlightBtn from '../components/HighlightBtn';
import DishItem from '../components/DishItem';
import database from '../database.json';
import { CartProvider } from '../context/CartContext';
import FloatCheckoutBtn from '../components/FloatCheckoutBtn';
import Link from 'next/link';

export default function ListDishes() {
	const dishes = database.dishes;

	return (
		<CartProvider>
			<FloatCheckoutBtn />
			<Carousel className='w-full ml-4 lg:px-24'>
				<CarouselContent className='-ml-1'>
					{dishes.slice(0, 10).map((dish, index) => (
						<CarouselItem
							key={index}
							className='pl-1 min-w-[240px] basis-2/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6'>
							<div className='p-2 '>
								<DishItem dish={dish} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className='flex justify-center my-6'>
				<Link href='/thuc-don'>
					<HighlightBtn>Xem thêm</HighlightBtn>
				</Link>
			</div>
		</CartProvider>
	);
}
