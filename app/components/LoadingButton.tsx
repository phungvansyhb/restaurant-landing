import React from 'react';

type LoadingButtonProps = {
	isLoading: boolean;
	disabled: boolean;
	onClick: (e: React.FormEvent) => void;
	loadingText?: string;
	normalText: string;
	className?: string;
};

export default function LoadingButton({
	isLoading,
	disabled,
	onClick,
	loadingText = 'Đang xử lý...',
	normalText,
	className = '',
}: LoadingButtonProps) {
	return (
		<button
			type='submit'
			onClick={onClick}
			disabled={disabled}
			className={`flex-1 py-3 px-4 bg-[var(--bg-primary)] text-white rounded-lg hover:bg-[var(--bg-dark-primary)] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
			{isLoading ? (
				<div className='flex items-center justify-center gap-2'>
					<svg
						className='animate-spin h-4 w-4'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'>
						<circle
							className='opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'></circle>
						<path
							className='opacity-75'
							fill='currentColor'
							d='m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
					</svg>
					{loadingText}
				</div>
			) : (
				normalText
			)}
		</button>
	);
}
