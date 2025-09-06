import Image from 'next/image';
import React from 'react';
import AddToCartBtn from './AddToCartBtn';
import { Dish } from '../typeDefs/Dish';

type Props = {
	dish: Dish;
};

export default function HorizontalDishItem({ dish }: Props) {
	return (
		<div className='bg-white cursor-pointer rounded-lg overflow-hidden shadow border border-slate-100 transition-shadow flex'>
			{/* Image */}
			<div className='relative size-[124px] overflow-hidden flex-shrink-0'>
				<Image
					src={dish.image!}
					alt='Menu Item'
					className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
					loading='lazy'
					width={124}
					height={124}
				/>
			</div>

			{/* Content */}
			<div className='flex-1 px-4 py-3 flex flex-col justify-between'>
				<div>
					<h3 className='line-clamp-2'>{dish.name}</h3>
				</div>
				<div className='mt-2 flex justify-between items-center gap-4'>
					<span className='font-semibold text-[var(--bg-primary)] text-sm'>
						{new Intl.NumberFormat('vi-VN', {
							style: 'currency',
							currency: 'VND',
						}).format(dish.price || 0)}
					</span>
					<AddToCartBtn item={dish} />
				</div>
			</div>
		</div>
	);
}
