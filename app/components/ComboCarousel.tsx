'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ComboItem from './ComboItem';

type ComboCarouselProps = {
	combos: Array<{
		id: string;
		name: string;
		price_name: string;
		description: string;
		dishes?: Array<{ id: string; name: string }>;
	}>;
};

export default function ComboCarousel({ combos }: ComboCarouselProps) {
	const [emblaRef] = useEmblaCarousel({
		align: 'start',
		slidesToScroll: 1,
		containScroll: 'trimSnaps',
	});

	return (
		<div
			className='embla overflow-hidden'
			ref={emblaRef}>
			<div className='embla__container flex gap-4'>
				{combos.map((combo) => (
					<div
						key={combo.id}
						className='embla__slide flex-none w-[280px]'>
						<ComboItem combo={combo} />
					</div>
				))}
			</div>
		</div>
	);
}
