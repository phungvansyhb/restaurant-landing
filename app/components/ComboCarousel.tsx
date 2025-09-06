'use client';

import React, { useState } from 'react';
import ComboItem from './ComboItem';
import { Dish } from '../typeDefs/Dish';
import ComboDetailModal from './ComboDetailModal';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './Carousel';

type ComboCarouselProps = {
	combos: Array<Dish>;
};

export default function ComboCarousel({ combos }: ComboCarouselProps) {
	const [selectedCombo, setSelectedCombo] = useState<Dish | null>(null);
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = (combo: Dish) => {
		setSelectedCombo(combo);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedCombo(null);
	};

	return (
		<>
			<Carousel className='w-full'>
				<CarouselContent className='-ml-1'>
					{combos.map((combo) => (
						<CarouselItem
							key={combo.id}
							className='pl-2 basis-[280px] md:basis-[320px]'>
							<ComboItem
								combo={combo}
								onOpenModal={() => handleOpenModal(combo)}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			{/* Modal rendered outside carousel */}
			{selectedCombo && (
				<ComboDetailModal
					combo={selectedCombo}
					isOpen={showModal}
					onClose={handleCloseModal}
				/>
			)}
		</>
	);
}
