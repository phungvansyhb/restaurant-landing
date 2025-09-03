import Link from 'next/link';
import React from 'react';
type Props = {
	url: string;
	title: string;
};

export default function LinkComponent({ url, title }: Props) {
	return (
		<Link
			href={url}
			className='hover:text-[var(--text-highlight)] transition-all duration-300 font-bold'>
			{title}
		</Link>
	);
}
