import database from '@/app/database.json';
import Logo from '@/app/assets/imgs/logo_72x72.png';
import LinkComponent from '../components/LinkComponent';
import ZaloIcon from '../components/ZaloIcon';
import FacebookIcon from '../components/FacebookIcon';
import CurrentYear from '../components/CurrentYear';
import PhoneIcon from '../components/PhoneIcon';
import LazyIframe from '../components/LazyIframe';

export const Footer = () => {
	const r = database.restaurant || {};
	const { name, address, phone1, phone2, facebook, hours, capacity, slogan } = r;

	const descriptionClass = 'text-[var(--text-secondary)] font-extralight';

	const hightLightText = (t: string) => {
		return <span className='font-medium text-[var(--text-primary)]'>{t}</span>;
	};

	return (
		<footer className='bg-[var(--bg-dark-primary)] text-[var(--text-white)] '>
			<div className='container'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-8'>
					<div>
						<div className='flex gap-4 items-center'>
							<div className='size-18 flex-shrink-0 rounded-full overflow-hidden'>
								<img
									src={Logo.src}
									alt={name}
									width={72}
									height={72}
									sizes='72px'
									loading='lazy'></img>
							</div>

							<h3 className='font-bold text-lg'>{name}</h3>
						</div>

						<p className='text-[var(--text-secondary)] mt-8 font-extralight'>
							{slogan}
						</p>
					</div>

					<div className='block lg:hidden'>
						<h3 className='text-xl font-bold mb-4'>Giờ mở cửa</h3>
						<p className='text-[var(--text-secondary)] font-extralight'>
							{hours || 'Liên hệ để biết giờ mở cửa'}
						</p>
					</div>
					<div className='block lg:hidden'>
						<h3 className='text-xl font-bold mb-4'>Liên hệ</h3>
						<div className='text-[var(--text-secondary)] font-extralight'>
							<div className='flex items-center gap-2'>
								<a
									className='hover:underline'
									href={`tel:${phone1.replace(/\s+/g, '')}`}
									aria-label={`Gọi điện thoại ${phone1}`}>
									{hightLightText(phone1)}
								</a>
								<div className='w-[.1px] h-4 bg-white'></div>
								<a
									className='hover:underline'
									href={`tel:${phone2.replace(/\s+/g, '')}`}
									aria-label={`Gọi điện thoại ${phone2}`}>
									{hightLightText(phone2)}
								</a>
							</div>

							<div className='flex gap-2 mt-2'>
								<ZaloIcon />
								<FacebookIcon />
								<PhoneIcon />
							</div>
						</div>
					</div>
					<div>
						<h3 className='text-xl font-bold mb-4'>Địa chỉ</h3>
						{address && (
							<p className='text-[var(--text-secondary)] font-extralight'>
								{address}
							</p>
						)}
						<div className='w-full lg:size-60 mt-4 rounded overflow-hidden'>
							{/* Optimized Lazy Loading Google Maps */}
							<LazyIframe
								src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3685.164492078776!2d104.29036267529945!3d22.53551007951816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMyJzA3LjgiTiAxMDTCsDE3JzM0LjYiRQ!5e0!3m2!1svi!2s!4v1756723428340!5m2!1svi!2s'
								title='Địa chỉ cửa hàng Lán Kiên'
								width='100%'
								height='100%'
								className='w-full h-full'
							/>
						</div>
					</div>
					<div className=' hidden lg:flex flex-col gap-8 justify-center lg:justify-start '>
						<LinkComponent
							url='/thuc-don'
							title='Thực đơn'
						/>
						<LinkComponent
							url='/lien-he'
							title='Liên hệ'
						/>
						<div className='flex gap-4'>
							<ZaloIcon />
							<FacebookIcon />
							<PhoneIcon />
						</div>
					</div>
				</div>

				<div className='mt-4 py-4 border-t border-gray-700 text-start text-sm text-[var(--text-secondary)]'>
					<p>
						&copy; <CurrentYear /> {name || 'Nhà hàng'}
					</p>
				</div>
			</div>
		</footer>
	);
};
