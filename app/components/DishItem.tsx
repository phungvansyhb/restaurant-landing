import Image from 'next/image';
import React from 'react';
import AddToCartBtn from './AddToCartBtn';
import { Dish } from '../typeDefs/Dish';
type Props = {
	dish: Dish;
};

export default function DishItem({ dish }: Props) {
	return (
		<div className='bg-white rounded-lg shadow-lg overflow-hidden '>
			<div className='relative h-[240px] overflow-hidden w-full'>
				<Image
					src={dish.image || '/placeholder.png'}
					alt={dish.name}
					loading='lazy'
					className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
					width={240}
					height={240}
					sizes='240px'
				/>
			</div>
			<div className='px-4 py-4 h-[110px] md:h-[150px] flex flex-col justify-between'>
				<h3 className='text font-semibold mb-2 line-clamp-2 h-14'>{dish.name}</h3>
				<span className='font-semibold text-xs text-[var(--bg-primary)]'>
					<span className='text-base mr-1'>Giá:</span>
					{new Intl.NumberFormat('vi-VN').format(dish.price || 0)}
					{dish.priceSpecial && (
						<span className=''>
							-
							{new Intl.NumberFormat('vi-VN', {
								style: 'currency',
								currency: 'VND',
							}).format(dish.priceSpecial)}
						</span>
					)}
					{dish.unit && <span>/{dish.unit}</span>}
				</span>
				<AddToCartBtn item={dish} />
			</div>
		</div>
	);
}
