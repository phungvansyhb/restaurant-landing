import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Metadata } from 'next';
import { fetchRestaurantData, fetchFullMenu } from "@/app/lib/data-fetcher";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
	title: 'Chợ Bắc Hà - Nét Văn Hóa Độc Đáo Của Vùng Cao Lào Cai',
	description:
		'Khám phá chợ phiên Bắc Hà - điểm đến văn hóa độc đáo với những sản phẩm thổ cẩm, ẩm thực đặc sắc và văn hóa dân tộc phong phú ở Lào Cai.',
	keywords: 'chợ Bắc Hà, Lào Cai, du lịch, văn hóa dân tộc, thổ cẩm, ẩm thực',
	authors: [{ name: 'Nhà Hàng Flower Valley' }],
	creator: 'Nhà Hàng Flower Valley',
	publisher: 'Nhà Hàng Flower Valley',

	// Open Graph for Facebook
	openGraph: {
		title: 'Chợ Bắc Hà - Nét Văn Hóa Độc Đáo Của Vùng Cao Lào Cai',
		description:
			'Khám phá chợ phiên Bắc Hà - điểm đến văn hóa độc đáo với những sản phẩm thổ cẩm, ẩm thực đặc sắc và văn hóa dân tộc phong phú ở Lào Cai. Trải nghiệm hương vị đặc sản vùng cao tại nhà hàng chúng tôi.',
		url: `${"https://nha-hang-lan-kien.com"}/bai-viet/cho-bac-ha`,
		siteName: "Nhà hàng Lán Kiên",
		type: 'article',
		locale: 'vi_VN',
		images: [
			{
				url: `${"https://nha-hang-lan-kien.com"}/blog_photo/cho-bac-ha.avif`,
				width: 1200,
				height: 630,
				alt: 'Chợ Bắc Hà Lào Cai - Văn hóa dân tộc vùng cao',
			},
			
		],
		publishedTime: '2025-01-06T00:00:00.000Z',
		modifiedTime: '2025-01-06T00:00:00.000Z',
		section: 'Du lịch & Văn hóa',
		tags: ['Chợ Bắc Hà', 'Lào Cai', 'Văn hóa dân tộc', 'Du lịch', 'Ẩm thực', 'Thổ cẩm'],
	},
	// Additional SEO
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	// Structured data
	other: {
		'article:author': 'Nhà Hàng Flower Valley',
		'article:section': 'Du lịch & Văn hóa',
		'article:tag': 'Chợ Bắc Hà, Lào Cai, Văn hóa dân tộc, Ẩm thực',
	},
};

export default function ChoBacHaPage() {
	return (
		<div
			className='min-h-screen'
			style={{ backgroundColor: 'var(--bg-main)' }}>
			{/* Hero Section */}

			<div className='bg-[var(--bg-primary)] text-white py-8'>
				<div className='container text-start'>
					<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-start font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
						Chợ Bắc Hà - Nét Văn Hóa Độc Đáo
					</h1>
					<p className='text-lg opacity-90'>
						Khám phá chợ phiên Bắc Hà - điểm đến văn hóa độc đáo với những sản phẩm thổ
						cẩm, ẩm thực đặc sắc và văn hóa dân tộc phong phú ở Lào Cai.
					</p>
				</div>
			</div>

			{/* Content */}
			<div className='container mx-auto px-4 py-12'>
				<div className='max-w-4xl mx-auto'>
					{/* Breadcrumb */}
					<nav className='flex my-8 text-sm'>
						<Link
							href='/'
							className='hover:underline text-[var(--bg-primary)] font-semibold'>
							Trang chủ
						</Link>
						<span className='mx-2'>/</span>
						<span>Bài viết</span>
						<span className='mx-2'>/</span>
						<span>Chợ Bắc Hà</span>
					</nav>

					{/* Article */}
					<article className='bg-white rounded-lg shadow-lg p-8 my-8'>
						{/* Featured Image */}
						<div className='relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden'>
							<img
								src='/blog_photo/cho-bac-ha.avif'
								alt='Chợ Bắc Hà Lào Cai'
								width={800}
								height={600}
								className='object-cover'
							/>
						</div>

						{/* Article Content */}
						<div className='prose prose-lg max-w-none'>
							<h2 className='text-3xl font-bold mb-6'>
								Chợ Phiên Bắc Hà - Điểm Hẹn Văn Hóa Của Các Dân Tộc Vùng Cao
							</h2>

							<p className='leading-relaxed mb-6'>
								Nằm cách thành phố Lào Cai khoảng 65km, <strong>chợ Bắc Hà</strong>{' '}
								là một trong những chợ phiên đặc sắc và nổi tiếng nhất của vùng cao
								Tây Bắc Việt Nam. Đây không chỉ đơn thuần là nơi mua bán, trao đổi
								hàng hóa mà còn là điểm hẹn văn hóa quan trọng của các dân tộc thiểu
								số trong vùng.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Thời Gian Và Đặc Điểm Nổi Bật
							</h3>

							<p className='leading-relaxed mb-6'>
								Chợ Bắc Hà chỉ họp{' '}
								<strong>mỗi tuần một lần vào ngày Chủ nhật</strong>, tạo nên sự đặc
								biệt và thu hút đông đảo du khách. Từ sáng sớm, người dân các dân
								tộc H'Mông, Tày, Nùng, Phù Lá... từ khắp nơi đổ về đây trong trang
								phục truyền thống sặc sỡ, biến chợ thành một lễ hội văn hóa sống
								động.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>Các Khu Chợ Đặc Trưng</h3>

							<ul className='mb-6 space-y-2'>
								<li>
									<strong>Chợ thổ cẩm:</strong> Nơi trưng bày và bán các sản phẩm
									dệt thủ công truyền thống với họa tiết độc đáo
								</li>
								<li>
									<strong>Chợ ẩm thực:</strong> Thưởng thức các món ăn đặc sản như
									thắng cố, thịt trâu gác bếp, rượu ngô
								</li>
								<li>
									<strong>Chợ ngựa Bắc Hà:</strong> Nơi mua bán và trưng bày giống
									ngựa đặc sản nổi tiếng của vùng
								</li>
								<li>
									<strong>Chợ gia cầm và thực phẩm:</strong> Các sản phẩm nông
									nghiệp địa phương
								</li>
							</ul>

							<h3 className='text-2xl font-semibold mb-4'>Ý Nghĩa Văn Hóa Xã Hội</h3>

							<p className='leading-relaxed mb-6'>
								Chợ Bắc Hà không chỉ là nơi trao đổi hàng hóa mà còn là{' '}
								<strong>điểm hẹn hò lý tưởng</strong> cho các cặp đôi trẻ dân tộc.
								Đây là dịp để họ gặp gỡ, tìm hiểu nhau sau những tuần lao động vất
								vả trên núi. Người dân xem việc đi chợ như một ngày hội, cơ hội để
								giao lưu văn hóa và thể hiện bản sắc dân tộc.
							</p>

							<div
								className='border-l-4 p-6 mb-6'
								style={{
									backgroundColor: 'var(--bg-main)',
									borderColor: 'var(--bg-secondary)',
								}}>
								<h4
									className='text-lg font-semibold mb-2'
									style={{ color: 'var(--bg-primary)' }}>
									💡 Mẹo Du Lịch
								</h4>
								<ul className='space-y-1'>
									<li>
										• Đi chợ từ sáng sớm (7-8h) để trải nghiệm không khí sôi
										động nhất
									</li>
									<li>• Mang theo máy ảnh để ghi lại những khoảnh khắc đẹp</li>
									<li>• Thử các món ăn đặc sản tại chợ ẩm thực</li>
									<li>• Tìm hiểu và tôn trọng văn hóa địa phương</li>
								</ul>
							</div>

							<h3 className='text-2xl font-semibold mb-4'>
								Kết Nối Với Ẩm Thực Địa Phương
							</h3>

							<p className='leading-relaxed mb-6'>
								Sau khi khám phá chợ Bắc Hà, bạn sẽ hiểu thêm về văn hóa ẩm thực đa
								dạng của vùng cao. Những hương vị đặc trưng từ các món ăn dân tộc sẽ
								mang đến trải nghiệm khó quên.
							</p>

							{/* Call to action */}
							<div
								className='rounded-lg p-8 text-center'
								style={{
									background:
										'linear-gradient(135deg, var(--bg-primary), var(--bg-secondary))',
									color: 'var(--text-white)',
								}}>
								<h3 className='text-2xl font-bold mb-4'>
									Thưởng Thức Ẩm Thực Đặc Sắc Ngay Tại Nhà Hàng Chúng Tôi
								</h3>
								<p className='text-lg mb-6 opacity-90'>
									Không thể đến Bắc Hà? Hãy đến với chúng tôi để trải nghiệm hương
									vị đặc sản vùng cao tươi ngon, được chế biến theo công thức
									truyền thống.
								</p>
								<Link
									href='/thuc-don'
									className='inline-block font-semibold py-3 px-8 rounded-lg transition-colors duration-200'
									style={{
										backgroundColor: 'var(--text-white)',
										color: 'var(--bg-primary)',
									}}>
									Khám Phá Thực Đơn Ngay
								</Link>
							</div>
						</div>

						{/* Related Articles */}
						<div
							className='mt-8 pt-6'
							style={{ borderTop: '1px solid #e5e7eb' }}>
							<h3
								className='text-xl font-semibold mb-4'
								style={{ color: 'var(--bg-primary)' }}>
								Bài viết liên quan
							</h3>
							<div className='grid md:grid-cols-3 gap-4'>
								<Link
									href='/bai-viet/nha-hang-lan-kien'
									className='block p-4 rounded-lg shadow hover:shadow-md transition-shadow'
									style={{ backgroundColor: 'var(--bg-main)' }}>
									<img
										src='/blog_photo/nha-hang.avif'
										alt='Nhà hàng Lán Kiên'
										loading='lazy'
										className='w-full h-32 object-cover rounded mb-3'
									/>
									<h4
										className='font-semibold text-sm mb-2'
										style={{ color: 'var(--bg-primary)' }}>
										Nhà Hàng Lán Kiên - Hương Vị Núi Rừng
									</h4>
									<p className='text-xs text-gray-600'>
										Điểm đến ẩm thực đặc sắc tại trung tâm Bắc Hà
									</p>
								</Link>

								<Link
									href='/bai-viet/thung-lung-hoa'
									className='block p-4 rounded-lg shadow hover:shadow-md transition-shadow'
									style={{ backgroundColor: 'var(--bg-main)' }}>
									<img
										src='/blog_photo/thung-lung-hoa_bac_ha.webp'
										alt='Thung lũng hoa Bắc Hà'
										loading='lazy'
										className='w-full h-32 object-cover rounded mb-3'
									/>
									<h4
										className='font-semibold text-sm mb-2'
										style={{ color: 'var(--bg-primary)' }}>
										Thung Lũng Hoa - Thiên Đường Sắc Màu
									</h4>
									<p className='text-xs text-gray-600'>
										Vẻ đẹp tuyệt mỹ của cánh đồng hoa vùng cao
									</p>
								</Link>

								<Link
									href='/bai-viet/dinh-hoang-a-tuong'
									className='block p-4 rounded-lg shadow hover:shadow-md transition-shadow'
									style={{ backgroundColor: 'var(--bg-main)' }}>
									<img
										src='/blog_photo/dinh-a-tuong.avif'
										alt='Dinh Hoàng A Tưởng'
										loading='lazy'
										className='w-full h-32 object-cover rounded mb-3'
									/>
									<h4
										className='font-semibold text-sm mb-2'
										style={{ color: 'var(--bg-primary)' }}>
										Dinh Hoàng A Tưởng - Cung Điện Vua H'Mông
									</h4>
									<p className='text-xs text-gray-600'>
										Công trình kiến trúc độc đáo kết hợp Đông Tây
									</p>
								</Link>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}
