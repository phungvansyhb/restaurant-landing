'use client';
import { useState, useEffect, useRef } from 'react';

interface LazyIframeProps {
	src: string;
	title: string;
	width?: string;
	height?: string;
	className?: string;
	[key: string]: any;
}

export default function LazyIframe({
	src,
	title,
	width = '100%',
	height = '100%',
	className = '',
	...props
}: LazyIframeProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.1,
				rootMargin: '50px', // Load trước khi vào viewport 50px
			}
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={containerRef}
			className={`relative ${className}`}
			style={{ width, height }}>
			{isVisible ? (
				<>
					{!isLoaded && (
						<div className='absolute inset-0 bg-gray-100 flex items-center justify-center'>
							<div className='text-center'>
								<div className='w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2'></div>
								<span className='text-gray-600 text-sm'>Đang tải bản đồ...</span>
							</div>
						</div>
					)}
					<iframe
						src={src}
						title={title}
						width={width}
						height={height}
						style={{ border: 0, opacity: isLoaded ? 1 : 0 }}
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						sandbox='allow-scripts allow-same-origin allow-popups'
						onLoad={() => setIsLoaded(true)}
						{...props}
					/>
				</>
			) : (
				<div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded'>
					<div className='text-center'>
						<svg
							className='w-12 h-12 mx-auto mb-2 text-gray-400'
							fill='currentColor'
							viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='text-gray-500 text-sm'>Bản đồ sẽ tải khi cuộn đến</span>
					</div>
				</div>
			)}
		</div>
	);
}
