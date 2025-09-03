import React from 'react';

type Props = {
	children: React.ReactNode;
};

export default function HighlightBtn({ children }: Props) {
	return (
		<button className='border-1 border-[var(--bg-highlight)] rounded-lg px-5 py-1.5 text-white font-bold'>
			{children}
		</button>
	);
}
