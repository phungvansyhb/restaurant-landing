import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';
import { CartProvider } from './context/CartContext';
import database from './database.json';
import { Analytics } from '@vercel/analytics/next';
import { JsonLd, restaurantJsonLd, breadcrumbJsonLd } from './lib/json-ld';

const beVietnamPro = Be_Vietnam_Pro({
	subsets: ['latin', 'vietnamese'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-be-vietnam-pro',
});

export const metadata: Metadata = {
	title: 'Ăn gì ở Bắc Hà? | Ẩm thực Bắc Hà tại Nhà hàng Lán Kiên | Chợ phiên Bắc Hà',
	description:
		'Khám phá ăn gì ở Bắc Hà ngon nhất! Nhà hàng Lán Kiên - điểm đến ẩm thực Bắc Hà hàng đầu, gần chợ phiên Bắc Hà. Thưởng thức thắng cố, lẩu cá suối, thịt trâu gác bếp và các món đặc sản núi rừng Tây Bắc. Đặt bàn ngay để trải nghiệm hương vị độc đáo của vùng cao.',
	keywords:
		'ăn gì bắc hà, ẩm thực bắc hà, chợ phiên bắc hà, nhà hàng bắc hà, thắng cố bắc hà, lẩu cá suối, thịt trâu gác bếp, đặc sản bắc hà, món ngon bắc hà, nhà hàng lán kiên, ẩm thực vùng cao, tây bắc, lào cai, h mông, ethnic food, mountain cuisine, bac ha specialty, bac ha restaurant',
	authors: [{ name: 'Nhà hàng Lán Kiên', url: database.restaurant.siteUrl }],
	creator: 'Nhà hàng Lán Kiên',
	icons: {
		icon: [
			{ url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
	manifest: '/manifest.json',
	openGraph: {
		title: 'Ăn gì ở Bắc Hà? Ẩm thực Bắc Hà tại Nhà hàng Lán Kiên',
		description:
			'Khám phá ăn gì ở Bắc Hà ngon nhất! Thưởng thức ẩm thực Bắc Hà đặc sắc: thắng cố, lẩu cá suối, thịt trâu gác bếp tại nhà hàng Lán Kiên - gần chợ phiên Bắc Hà.',
		url: database.restaurant.siteUrl,
		siteName: 'Nhà hàng Lán Kiên - Ẩm thực Bắc Hà',
		images: [
			{
				url: `${database.restaurant.siteUrl}/nha-hang.avif`,
				width: 800,
				height: 600,
				alt: 'Nhà hàng Lán Kiên - Ăn gì ở Bắc Hà ngon nhất',
			},
		],
		locale: 'vi_VN',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='vi'>
			<head>
				<meta
					name='theme-color'
					content='#000000'
				/>
				<meta
					name='msapplication-TileColor'
					content='#ffffff'
				/>
				<meta
					name='msapplication-TileImage'
					content='/icons/mstile-150x150.png'
				/>
				<link
					rel='preconnect'
					href='https://www.google.com'
				/>
				<link
					rel='preconnect'
					href='https://maps.googleapis.com'
				/>
				<link
					rel='dns-prefetch'
					href='//www.google.com'
				/>
				<link
					rel='dns-prefetch'
					href='//maps.googleapis.com'
				/>
				<link
					rel='canonical'
					href={database.restaurant.siteUrl}
					key='canonical'
				/>
				<JsonLd data={restaurantJsonLd} />
				<JsonLd data={breadcrumbJsonLd} />
			</head>
			<body className={`${beVietnamPro.variable} font-be-vietnam-pro`}>
				<CartProvider>
					<Header />
					<main className='containter pt-[70px] lg:pt-[80px]'>{children}</main>
					<Footer />
				</CartProvider>
				<Analytics />
			</body>
		</html>
	);
}
