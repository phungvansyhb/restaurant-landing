import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import database from '@/app/database.json';

export const metadata: Metadata = {
	title: "Dinh Hoàng A Tưởng - Cung Điện Của Vua H'Mông Ở Bắc Hà",
	description:
		"Khám phá dinh Hoàng A Tưởng - công trình kiến trúc độc đáo kết hợp phong cách Đông Tây, từng là nơi ở của vua H'Mông quyền lực nhất vùng cao Bắc Hà, Lào Cai.",
	keywords:
		"dinh Hoàng A Tưởng, dinh thầy, Bắc Hà, Lào Cai, vua H'Mông, kiến trúc, du lịch, lịch sử",
	authors: [{ name: database.restaurant.name }],
	creator: database.restaurant.name,
	publisher: database.restaurant.name,

	// Open Graph for Facebook
	openGraph: {
		title: "Dinh Hoàng A Tưởng - Cung Điện Của Vua H'Mông Ở Bắc Hà",
		description:
			"Khám phá dinh Hoàng A Tưởng - công trình kiến trúc độc đáo kết hợp phong cách Đông Tây, từng là nơi ở của vua H'Mông quyền lực nhất vùng cao. Trải nghiệm ẩm thực truyền thống sau chuyến tham quan.",
		url: `${database.restaurant.siteUrl}/bai-viet/dinh-hoang-a-tuong`,
		siteName: database.restaurant.siteUrl,
		type: 'article',
		locale: 'vi_VN',
		images: [
			{
				url: '/assets/raw_photo/Dinh-Thu-Hoang-A-Tuo.jpg',
				width: 1200,
				height: 630,
				alt: "Dinh Hoàng A Tưởng Bắc Hà - Cung điện vua H'Mông",
			},
			{
				url: '/assets/imgs/logo.jpg',
				width: 400,
				height: 400,
				alt: 'Logo Nhà Hàng Flower Valley',
			},
		],
		publishedTime: '2025-01-06T00:00:00.000Z',
		modifiedTime: '2025-01-06T00:00:00.000Z',
		section: 'Du lịch & Lịch sử',
		tags: ['Dinh Hoàng A Tưởng', 'Bắc Hà', 'Lào Cai', "Vua H'Mông", 'Kiến trúc', 'Lịch sử'],
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
		'article:author': database.restaurant.name,
		'article:section': 'Du lịch & Lịch sử',
		'article:tag': "Dinh Hoàng A Tưởng, Bắc Hà, Vua H'Mông, Kiến trúc, Lịch sử",
	},
};

export default function DinhHoangATuongPage() {
	return (
		<div
			className='min-h-screen'
			style={{ backgroundColor: 'var(--bg-main)' }}>
			{/* Hero Section */}
			<div className='bg-[var(--bg-primary)] text-white py-8'>
				<div className='container text-start'>
					<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-start font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
						Dinh Hoàng A Tưởng - Cung Điện Vua H'Mông
					</h1>
					<p className='text-lg opacity-90'>
						Khám phá dinh Hoàng A Tưởng - công trình kiến trúc độc đáo kết hợp phong
						cách Đông Tây, từng là nơi ở của vua H'Mông quyền lực nhất vùng cao Bắc Hà,
						Lào Cai.
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
							className='hover:underline font-semibold'
							style={{ color: 'var(--bg-primary)' }}>
							Trang chủ
						</Link>
						<span className='mx-2'>/</span>
						<span>Bài viết</span>
						<span className='mx-2'>/</span>
						<span>Dinh Hoàng A Tưởng</span>
					</nav>

					{/* Article */}
					<article className='bg-white rounded-lg shadow-lg p-8 my-8'>
						{/* Featured Image */}
						<div className='relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden'>
							<Image
								src='/blog_photo/dinh-a-tuong.avif'
								alt='Dinh Hoàng A Tưởng Bắc Hà Lào Cai'
								fill
								className='object-cover'
								sizes='(max-width: 768px) 100vw, 800px'
								priority
							/>
						</div>

						{/* Article Content */}
						<div className='prose prose-lg max-w-none'>
							<h2 className='text-3xl font-bold mb-6'>
								Dinh Hoàng A Tưởng - Biểu Tượng Quyền Lực Của Vua H'Mông
							</h2>

							<p className='leading-relaxed mb-6'>
								Tọa lạc tại thị trấn Bắc Hà, tỉnh Lào Cai,{' '}
								<strong>dinh Hoàng A Tưởng</strong> (còn gọi là dinh thầy) là một
								trong những công trình kiến trúc độc đáo và ấn tượng nhất của vùng
								cao Tây Bắc. Đây từng là nơi ở và làm việc của Hoàng A Tưởng - người
								được mệnh danh là "vua H'Mông" quyền lực nhất trong khu vực vào đầu
								thế kỷ 20.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Lịch Sử Và Nhân Vật Hoàng A Tưởng
							</h3>

							<p className='leading-relaxed mb-6'>
								Hoàng A Tưởng (1845-1913) là một tù trưởng người H'Mông có ảnh hưởng
								lớn trong khu vực Bắc Hà thời thuộc Pháp. Ông được chính quyền thực
								dân phong làm <strong>"Tổng đốc các dân tộc"</strong>, có quyền cai
								quản một vùng rộng lớn bao gồm nhiều bản làng dân tộc thiểu số. Với
								sự khôn ngoan và tài ngoại giao, ông đã xây dựng được một thế lực
								mạnh mẽ và tích lũy được của cải khổng lồ.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Kiến Trúc Độc Đáo Đông - Tây Kết Hợp
							</h3>

							<p className='leading-relaxed mb-6'>
								Dinh được xây dựng vào năm 1914-1921 với thiết kế ấn tượng kết hợp
								giữa <strong>kiến trúc phương Đông và phương Tây</strong>. Công
								trình có 2 tầng với tổng diện tích gần 1.200m², bao gồm 64 phòng
								được bố trí theo lối kiến trúc cung đình Huế nhưng có pha trộn yếu
								tố kiến trúc Pháp và văn hóa H'Mông.
							</p>

							<ul className='mb-6 space-y-2'>
								<li>
									<strong>Tầng 1:</strong> Kho vũ khí, nhà kho, phòng tiếp khách
									và sinh hoạt
								</li>
								<li>
									<strong>Tầng 2:</strong> Phòng ngủ, phòng làm việc của gia đình
									và hầu hạ
								</li>
								<li>
									<strong>Sân trước:</strong> Rộng rãi để tổ chức các lễ hội và
									tiếp đón khách
								</li>
								<li>
									<strong>Hệ thống phòng ngầm:</strong> Dùng để cất giấu vàng bạc
									và lương thực
								</li>
							</ul>

							<h3 className='text-2xl font-semibold mb-4'>
								Đặc Điểm Nổi Bật Của Dinh
							</h3>

							<p className='leading-relaxed mb-6'>
								Điều đặc biệt nhất của dinh Hoàng A Tưởng là{' '}
								<strong>hệ thống phòng bí mật</strong> được thiết kế rất tinh vi.
								Các bức tường có thể di chuyển, tạo ra những lối đi ẩn giúp chủ nhân
								có thể thoát thân khi gặp nguy hiểm. Ngoài ra, dinh còn có hệ thống
								thông gió tự nhiên và ánh sáng được tính toán kỹ lưỡng.
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
									💡 Thông Tin Tham Quan
								</h4>
								<ul className='space-y-1'>
									<li>
										• <strong>Thời gian:</strong> 7:00 - 17:00 hàng ngày
									</li>
									<li>
										• <strong>Vé tham quan:</strong> 30.000 VNĐ/người lớn
									</li>
									<li>
										• <strong>Khoảng cách:</strong> 7km từ trung tâm thị trấn
										Bắc Hà
									</li>
									<li>
										• <strong>Lưu ý:</strong> Tôn trọng không gian lịch sử,
										không chụp ảnh flash
									</li>
								</ul>
							</div>

							<h3 className='text-2xl font-semibold mb-4'>
								Ý Nghĩa Lịch Sử Và Văn Hóa
							</h3>

							<p className='leading-relaxed mb-6'>
								Ngày nay, dinh Hoàng A Tưởng không chỉ là điểm du lịch hấp dẫn mà
								còn là <strong>biểu tượng văn hóa quan trọng</strong> thể hiện sự
								giao thoa giữa các nền văn hóa khác nhau. Công trình này giúp du
								khách hiểu thêm về lịch sử phức tạp của vùng cao, về sự khôn ngoan
								và tài năng của người H'Mông trong việc thích ứng với hoàn cảnh lịch
								sử.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Kết Nối Với Ẩm Thực Truyền Thống
							</h3>

							<p className='leading-relaxed mb-6'>
								Sau khi tham quan dinh Hoàng A Tưởng, du khách sẽ hiểu sâu hơn về
								văn hóa ẩm thực phong phú của người H'Mông và các dân tộc vùng cao.
								Những món ăn truyền thống được chế biến từ nguyên liệu địa phương sẽ
								mang đến trải nghiệm khó quên về hương vị đặc trưng của vùng đất
								này.
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
									Thưởng Thức Ẩm Thực Vùng Cao Sau Chuyến Tham Quan
								</h3>
								<p className='text-lg mb-6 opacity-90'>
									Hoàn thành hành trình khám phá lịch sử tại dinh Hoàng A Tưởng,
									hãy đến với chúng tôi để trải nghiệm những món ăn đặc sản được
									chế biến theo công thức truyền thống của các dân tộc vùng cao.
								</p>
								<Link
									href='/'
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
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}
