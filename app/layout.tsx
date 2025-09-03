import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';

const beVietnamPro = Be_Vietnam_Pro({
	subsets: ['latin', 'vietnamese'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-be-vietnam-pro',
});

export const metadata: Metadata = {
	title: 'Ẩm thực Cao Nguyên | Nhà hàng Lán Kiên',
	description:
		'Trải nghiệm ẩm thực cao cấp nhất. Nhà hàng của chúng tôi mang đến sự kết hợp độc đáo giữa hương vị và không gian.',
	keywords: 'nhà hàng, ẩm thực cao cấp, đặt chỗ, thực đơn, món ăn',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='vi'>
			<head>
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
			</head>
			<body className={`${beVietnamPro.variable} font-be-vietnam-pro`}>
				<Header />
				<main className='containter pt-[70px] lg:pt-[80px]'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
