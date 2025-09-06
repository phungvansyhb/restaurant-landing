import Image from 'next/image';
import React from 'react';
import AddToCartBtn from './AddToCartBtn';
import { Dish } from '../typeDefs/Dish';
type Props = {
	dish: Dish;
};

export default function DishItem({ dish }: Props) {
	return (
		<div className='bg-white rounded-lg shadow-lg overflow-hidden max-w-[240px]'>
			<div className='relative h-[240px] overflow-hidden w-full'>
				<Image
					src={dish.image || '/placeholder.png'}
					alt={dish.name}
					loading='lazy'
					className='object-contain'
					width={240}
					height={240}
					sizes='240px'
				/>
			</div>
			<div className='px-5 py-4 h-[110px] md:h-[150px] flex flex-col justify-between'>
				<h3 className='text font-semibold mb-2 line-clamp-2 h-14'>{dish.name}</h3>
				<span className='font-semibold text-[var(--bg-primary)]'>
					Giá:
					{new Intl.NumberFormat('vi-VN', {
						style: 'currency',
						currency: 'VND',
					}).format(dish.price || 0)}
				</span>
				<AddToCartBtn item={dish} />
			</div>
		</div>
	);
}
