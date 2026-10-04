import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { fetchRestaurantData, fetchFullMenu } from "@/app/lib/data-fetcher";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
	title: 'Nhà Hàng Lán Kiên - Điểm Đến Ẩm Thực Hấp Dẫn Tại Bắc Hà',
	description:
		'Khám phá nhà hàng Lán Kiên - điểm đến ẩm thực độc đáo tại Bắc Hà với những món ăn đặc sản vùng cao, không gian ấm cúng và dịch vụ tận tâm.',
	keywords: 'nhà hàng Lán Kiên, Bắc Hà, ẩm thực vùng cao, đặc sản, Lào Cai, du lịch',
	authors: [{ name: 'Nhà Hàng Flower Valley' }],
	creator: 'Nhà Hàng Flower Valley',
	publisher: 'Nhà Hàng Flower Valley',

	// Open Graph for Facebook
	openGraph: {
		title: 'Nhà Hàng Lán Kiên - Điểm Đến Ẩm Thực Hấp Dẫn Tại Bắc Hà',
		description:
			'Khám phá nhà hàng Lán Kiên - điểm đến ẩm thực độc đáo tại Bắc Hà với những món ăn đặc sản vùng cao, không gian ấm cúng và dịch vụ tận tâm. Trải nghiệm hương vị đặc sắc của núi rừng Tây Bắc.',
		url: `${"https://nha-hang-lan-kien.com"}/bai-viet/nha-hang-lan-kien`,
		siteName: "Nhà hàng Lán Kiên",
		type: 'article',
		locale: 'vi_VN',
		images: [
			{
				url: `${"https://nha-hang-lan-kien.com"}/blog_photo/nha-hang.avif`,
				width: 1200,
				height: 630,
				alt: 'Nhà Hàng Lán Kiên Bắc Hà - Ẩm thực vùng cao đặc sắc',
			},
			
		],
		publishedTime: '2025-01-06T00:00:00.000Z',
		modifiedTime: '2025-01-06T00:00:00.000Z',
		section: 'Ẩm thực & Du lịch',
		tags: ['Nhà hàng Lán Kiên', 'Bắc Hà', 'Ẩm thực', 'Đặc sản vùng cao', 'Lào Cai'],
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
		'article:section': 'Ẩm thực & Du lịch',
		'article:tag': 'Nhà hàng Lán Kiên, Bắc Hà, Ẩm thực, Đặc sản vùng cao',
	},
};

export default function NhaHangLanKienPage() {
	return (
		<div
			className='min-h-screen'
			style={{ backgroundColor: 'var(--bg-main)' }}>
			{/* Hero Section */}

			<div className='bg-[var(--bg-primary)] text-white py-8'>
				<div className='container text-start'>
					<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-start font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
						Nhà Hàng Lán Kiên - Hương Vị Núi Rừng
					</h1>
					<p className='text-lg opacity-90'>
						Khám phá nhà hàng Lán Kiên - điểm đến ẩm thực độc đáo tại Bắc Hà với những
						món ăn đặc sản vùng cao, không gian ấm cúng và dịch vụ tận tâm.
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
						<span>Nhà Hàng Lán Kiên</span>
					</nav>

					{/* Article */}
					<article className='bg-white rounded-lg shadow-lg p-8 my-8'>
						{/* Featured Image */}
						<div className='relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden'>
							<img
								src='/blog_photo/nha-hang.avif'
								alt='Nhà Hàng Lán Kiên Bắc Hà'
								width={800}
								height={600}
								className='object-cover'
							/>
						</div>

						{/* Article Content */}
						<div className='prose prose-lg max-w-none'>
							<h2 className='text-3xl font-bold mb-6'>
								Nhà Hàng Lán Kiên - Tinh Hoa Ẩm Thực Vùng Cao Bắc Hà
							</h2>

							<p className='leading-relaxed mb-6'>
								Tọa lạc tại trung tâm thị trấn Bắc Hà,{' '}
								<strong>nhà hàng Lán Kiên</strong> đã trở thành một điểm đến không
								thể bỏ qua cho những ai muốn khám phá và thưởng thức tinh hoa ẩm
								thực của vùng cao Tây Bắc. Với hơn 15 năm kinh nghiệm phục vụ, nhà
								hàng đã ghi dấu ấn sâu đậm trong lòng thực khách bởi hương vị đặc
								trưng và chất lượng dịch vụ tuyệt vời.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Không Gian Ấm Cúng Mang Đậm Bản Sắc Địa Phương
							</h3>

							<p className='leading-relaxed mb-6'>
								Bước vào nhà hàng Lán Kiên, thực khách sẽ được đắm chìm trong không
								gian ấm cúng với thiết kế mang đậm chất{' '}
								<strong>kiến trúc truyền thống của người Tày</strong>. Những bức
								tường gỗ thông tự nhiên, mái ngói âm dương và hệ thống ánh sáng vàng
								ấm tạo nên một không gian vừa hiện đại vừa gần gũi, thân thiện.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Thực Đơn Đa Dạng Với Đặc Sản Vùng Cao
							</h3>

							<p className='leading-relaxed mb-6'>
								Thực đơn của nhà hàng Lán Kiên được xây dựng dựa trên nền tảng ẩm
								thực dân tộc với những món ăn{' '}
								<strong>100% từ nguyên liệu địa phương</strong>. Mỗi món ăn đều được
								chế biến theo công thức truyền thống, giữ nguyên hương vị đặc trưng
								của núi rừng.
							</p>

							<h4 className='text-xl font-semibold mb-3'>Những Món Ăn Nổi Bật:</h4>

							<ul className='mb-6 space-y-3'>
								<li>
									<strong>Thắng cố Bắc Hà:</strong> Món ăn truyền thống của người
									H'Mông với nước dùng thanh ngọt từ xương ống và thịt ngựa thơm
									ngon
								</li>
								<li>
									<strong>Lẩu cá suối:</strong> Cá tươi sống từ những con suối
									trong vắt kết hợp với rau rừng đặc trưng vùng cao
								</li>
								<li>
									<strong>Thịt trâu gác bếp:</strong> Đặc sản được hun khói theo
									phương pháp truyền thống, thịt thơm đậm đà hương khói
								</li>
								<li>
									<strong>Cơm lam nướng tre:</strong> Cơm được nấu trong ống tre
									non, tạo hương vị thơm ngon đặc biệt
								</li>
								<li>
									<strong>Rau rừng xào:</strong> Các loại rau rừng tươi ngon như
									rau su su, măng tre, lá lốt được hái từ núi rừng địa phương
								</li>
							</ul>

							<h3 className='text-2xl font-semibold mb-4'>
								Dịch Vụ Tận Tâm Và Chuyên Nghiệp
							</h3>

							<p className='leading-relaxed mb-6'>
								Đội ngũ nhân viên tại nhà hàng Lán Kiên được đào tạo bài bản, luôn
								sẵn sàng
								<strong> tư vấn và giới thiệu món ăn</strong> phù hợp với sở thích
								của từng thực khách. Phong cách phục vụ thân thiện, nhiệt tình nhưng
								không kém phần chuyên nghiệp đã tạo nên ấn tượng tốt đẹp cho du
								khách gần xa.
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
									🍽️ Thông Tin Nhà Hàng
								</h4>
								<ul className='space-y-2'>
									<li>
										<strong>Địa chỉ:</strong> Trung tâm thị trấn Bắc Hà, Lào Cai
									</li>
									<li>
										<strong>Giờ mở cửa:</strong> 6:00 - 22:00 hàng ngày
									</li>
									<li>
										<strong>Sức chứa:</strong> 250 khách
									</li>
									<li>
										<strong>Đặc sắc:</strong> Ẩm thực dân tộc, không gian truyền
										thống
									</li>
									<li>
										<strong>Dịch vụ:</strong> Tiệc cưới, hội nghị, tour ẩm thực
									</li>
								</ul>
							</div>

							<h3 className='text-2xl font-semibold mb-4'>
								Trải Nghiệm Ẩm Thực Đáng Nhớ
							</h3>

							<p className='leading-relaxed mb-6'>
								Nhà hàng Lán Kiên không chỉ đơn thuần là nơi thưởng thức ẩm thực mà
								còn là
								<strong> cầu nối văn hóa</strong> giúp du khách hiểu thêm về đời
								sống, tập quán của các dân tộc vùng cao. Mỗi bữa ăn tại đây đều mang
								đến những câu chuyện thú vị về nguồn gốc, cách chế biến và ý nghĩa
								văn hóa của từng món ăn.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Cam Kết Chất Lượng Và An Toàn Thực Phẩm
							</h3>

							<p className='leading-relaxed mb-6'>
								Nhà hàng Lán Kiên luôn đặt{' '}
								<strong>chất lượng và an toàn thực phẩm</strong>
								lên hàng đầu. Tất cả nguyên liệu đều được tuyển chọn kỹ lưỡng từ các
								nguồn cung cấp uy tín, đảm bảo tươi ngon và đạt tiêu chuẩn vệ sinh
								an toàn thực phẩm. Quy trình chế biến tuân thủ nghiêm ngặt các quy
								định về vệ sinh và bảo quản.
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
									Khám Phá Tinh Hoa Ẩm Thực Vùng Cao Ngay Hôm Nay
								</h3>
								<p className='text-lg mb-6 opacity-90'>
									Hãy đến với nhà hàng của chúng tôi để trải nghiệm những hương vị
									đặc sắc tương tự như tại nhà hàng Lán Kiên, được chế biến tại
									thành phố với chất lượng tuyệt vời.
								</p>
								<Link
									href='/thuc-don'
									className='inline-block font-semibold py-3 px-8 rounded-lg transition-colors duration-200'
									style={{
										backgroundColor: 'var(--text-white)',
										color: 'var(--bg-primary)',
									}}>
									Xem Thực Đơn Của Chúng Tôi
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
									href='/bai-viet/cho-bac-ha'
									className='block p-4 rounded-lg shadow hover:shadow-md transition-shadow'
									style={{ backgroundColor: 'var(--bg-main)' }}>
									<img
										src='/blog_photo/cho-bac-ha.avif'
										alt='Chợ Bắc Hà'
										loading='lazy'
										className='w-full h-32 object-cover rounded mb-3'
									/>
									<h4
										className='font-semibold text-sm mb-2'
										style={{ color: 'var(--bg-primary)' }}>
										Chợ Bắc Hà - Nét Văn Hóa Độc Đáo
									</h4>
									<p className='text-xs text-gray-600'>
										Khám phá chợ phiên đặc sắc nhất vùng cao Tây Bắc
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
