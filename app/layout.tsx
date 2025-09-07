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
		'Khám phá tinh hoa ẩm thực vùng cao tại nhà hàng Lán Kiên - điểm đến lý tưởng cho những ai yêu thích hương vị đặc sắc của núi rừng Tây Bắc. Chúng tôi tự hào mang đến thực đơn phong phú với các món ăn truyền thống được chế biến từ nguyên liệu tươi ngon nhất...',
	keywords:
		'nhà hàng Lán Kiên, ẩm thực vùng cao, Bắc Hà, thắng cố, lẩu cá suối, thịt trâu gác bếp, đặc sản Tây Bắc, món ăn dân tộc, đặt bàn nhà hàng, ẩm thực truyền thống',
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
