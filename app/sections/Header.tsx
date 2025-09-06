import database from '@/app/database.json';
import CallNowBtn from '../components/CallNowBtn';
import LinkComponent from '../components/LinkComponent';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className='fixed left-0 top-0 z-10 bg-[var(--bg-primary)] text-white  w-full '>
			<div className='px-4'>
				<nav className='flex items-center justify-between h-20'>
					<div className='flex items-center gap-4'>
						<Link
							href='/'
							className='size-14 flex-shrink-0 overflow-hidden rounded-full bg-white cursor-pointer hover:scale-105 transition-transform duration-200'
							style={{
								backgroundImage: 'url(/logo.avif)',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
							}}
							aria-label={database.restaurant.name}></Link>
						<span className='w-1 h-10 bg-white rounded hidden lg:block'></span>
						<a
							href={`tel:${database.restaurant.phone1}`}
							className='hidden lg:block'>
							<p>Hotline</p>
							<p className='text-[var(--text-highlight)] font-bold'>
								{database.restaurant.phone1}
							</p>
						</a>
						<ul className='flex items-center space-x-4'>
							<li>
								<LinkComponent
									title='Liên hệ'
									url='/lien-he'
								/>
							</li>
							<li className='border-1 border-[var(--bg-highlight)] rounded-lg px-5 py-1.5'>
								<LinkComponent
									title='Thực đơn'
									url='/thuc-don'
								/>
							</li>
						</ul>
					</div>

					<CallNowBtn />
				</nav>
			</div>
		</header>
	);
};
