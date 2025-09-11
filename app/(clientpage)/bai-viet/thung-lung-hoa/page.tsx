import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import database from '@/app/database.json';

export const metadata: Metadata = {
	title: 'Thung Lũng Hoa Bắc Hà - Thiên Đường Hoa Đặc Sắc Vùng Cao',
	description:
		'Khám phá Thung lũng hoa Bắc Hà - thiên đường hoa tuyệt đẹp với cánh đồng hoa cải vàng rực rỡ, hoa tam giác mạch và phong cảnh núi rừng hùng vĩ.',
	keywords:
		'thung lũng hoa Bắc Hà, hoa cải vàng, hoa tam giác mạch, Lào Cai, du lịch, phong cảnh',
	authors: [{ name: 'Nhà Hàng Flower Valley' }],
	creator: 'Nhà Hàng Flower Valley',
	publisher: 'Nhà Hàng Flower Valley',

	// Open Graph for Facebook
	openGraph: {
		title: 'Thung Lũng Hoa Bắc Hà - Thiên Đường Hoa Đặc Sắc Vùng Cao',
		description:
			'Khám phá Thung lũng hoa Bắc Hà - thiên đường hoa tuyệt đẹp với cánh đồng hoa cải vàng rực rỡ, hoa tam giác mạch và phong cảnh núi rừng hùng vĩ. Trải nghiệm ẩm thực đặc sản sau chuyến tham quan.',
		url: `${database.restaurant.siteUrl}/bai-viet/thung-lung-hoa`,
		siteName: database.restaurant.name,
		type: 'article',
		locale: 'vi_VN',
		images: [
			{
				url: `${database.restaurant.siteUrl}/blog_photo/thung-lung-hoa_bac_ha.webp`,
				width: 1200,
				height: 630,
				alt: 'Thung lũng hoa Bắc Hà - Thiên đường hoa vùng cao',
			},
		],
		publishedTime: '2025-01-06T00:00:00.000Z',
		modifiedTime: '2025-01-06T00:00:00.000Z',
		section: 'Du lịch & Thiên nhiên',
		tags: ['Thung lũng hoa Bắc Hà', 'Hoa cải vàng', 'Hoa tam giác mạch', 'Lào Cai', 'Du lịch'],
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
		'article:section': 'Du lịch & Thiên nhiên',
		'article:tag': 'Thung lũng hoa Bắc Hà, Hoa cải vàng, Du lịch, Thiên nhiên',
	},
};

export default function ThungLungHoaPage() {
	return (
		<div
			className='min-h-screen'
			style={{ backgroundColor: 'var(--bg-main)' }}>
			{/* Hero Section */}

			<div className='bg-[var(--bg-primary)] text-white py-8'>
				<div className='container text-start'>
					<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-start font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
						Thung Lũng Hoa Bắc Hà - Thiên Đường Sắc Màu
					</h1>
					<p className='text-lg opacity-90'>
						Khám phá Thung lũng hoa Bắc Hà - thiên đường hoa tuyệt đẹp với cánh đồng hoa
						cải vàng rực rỡ, hoa tam giác mạch và phong cảnh núi rừng hùng vĩ.
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
						<span>Thung Lũng Hoa</span>
					</nav>

					{/* Article */}
					<article className='bg-white rounded-lg shadow-lg p-8 my-8'>
						{/* Featured Image */}
						<div className='relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden'>
							<img
								src='/blog_photo/thung-lung-hoa_bac_ha.webp'
								alt='Thung lũng hoa Bắc Hà'
								width={800}
								height={600}
								className='object-cover'
							/>
						</div>

						{/* Article Content */}
						<div className='prose prose-lg max-w-none'>
							<h2 className='text-3xl font-bold mb-6'>
								Thung Lũng Hoa Bắc Hà - Bức Tranh Thiên Nhiên Tuyệt Mỹ
							</h2>

							<p className='leading-relaxed mb-6'>
								Nằm ẩn mình giữa những dãy núi hùng vĩ của Bắc Hà, Lào Cai,{' '}
								<strong>Thung lũng hoa Bắc Hà</strong> được mệnh danh là một trong
								những điểm đến đẹp nhất của vùng cao Tây Bắc. Với những cánh đồng
								hoa rực rỡ sắc màu trải dài bất tận, nơi đây như một bức tranh thiên
								nhiên khổng lồ được vẽ bởi bàn tay tạo hóa.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>Mùa Hoa Cải Vàng Rực Rỡ</h3>

							<p className='leading-relaxed mb-6'>
								Thời điểm đẹp nhất để khám phá thung lũng hoa Bắc Hà là vào{' '}
								<strong>tháng 3-4 hàng năm</strong>, khi những cánh đồng hoa cải
								vàng bắt đầu nở rộ. Từ xa nhìn lại, toàn bộ thung lũng như được phủ
								một tấm thảm vàng óng ánh, tạo nên khung cảnh vô cùng thơ mộng và
								ngoạn mục.
							</p>

							<p className='leading-relaxed mb-6'>
								Hoa cải vàng không chỉ đẹp mà còn có{' '}
								<strong>giá trị kinh tế cao</strong> đối với bà con nông dân địa
								phương. Sau mùa thu hoạch, hạt cải được sử dụng để ép dầu, còn thân
								lá được dùng làm thức ăn cho gia súc.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Hoa Tam Giác Mạch Tím Ngát
							</h3>

							<p className='leading-relaxed mb-6'>
								Bên cạnh hoa cải vàng, <strong>hoa tam giác mạch</strong> là một
								điểm nhấn đặc biệt khác của thung lũng. Vào{' '}
								<strong>tháng 10-11</strong>, những bông hoa nhỏ xinh màu tím hồng
								nở rộ khắp các triền đồi, tạo nên sự tương phản tuyệt đẹp với màu
								xanh của lúa và màu nâu của đất núi.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>
								Địa Điểm Tham Quan Nổi Bật
							</h3>

							<ul className='mb-6 space-y-3'>
								<li>
									<strong>Đường đi Cán Cầu:</strong> Con đường uốn lượn qua thung
									lũng với view ngắm hoa đẹp nhất
								</li>
								<li>
									<strong>Bản Phùng:</strong> Ngôi làng nhỏ giữa thung lũng với
									đời sống nông nghiệp đặc trưng
								</li>
								<li>
									<strong>Đỉnh Lảo Thẩn:</strong> Điểm ngắm toàn cảnh thung lũng
									từ trên cao
								</li>
								<li>
									<strong>Bản Liền:</strong> Nổi tiếng với ruộng bậc thang và hoa
									tam giác mạch
								</li>
								<li>
									<strong>Suối Thầu:</strong> Dòng suối trong vắt chảy qua thung
									lũng
								</li>
							</ul>

							<h3 className='text-2xl font-semibold mb-4'>
								Đời Sống Người Dân Địa Phương
							</h3>

							<p className='leading-relaxed mb-6'>
								Thung lũng hoa Bắc Hà là nơi sinh sống của các dân tộc{' '}
								<strong>H'Mông, Tày, Nùng</strong>
								với lối sống gắn liền với thiên nhiên. Bà con nông dân nơi đây vẫn
								duy trì phương thức canh tác truyền thống, trồng trọt theo mùa và
								tận dụng từng thửa đất để tạo ra những cánh đồng hoa đẹp như tranh
								vẽ.
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
									📍 Thông Tin Du Lịch
								</h4>
								<ul className='space-y-2'>
									<li>
										<strong>Thời điểm lý tưởng:</strong> Tháng 3-4 (hoa cải),
										tháng 10-11 (hoa tam giác mạch)
									</li>
									<li>
										<strong>Cách di chuyển:</strong> Từ Bắc Hà đi Cán Cầu khoảng
										20km
									</li>
									<li>
										<strong>Thời gian tham quan:</strong> 1-2 ngày
									</li>
									<li>
										<strong>Hoạt động:</strong> Chụp ảnh, trekking, trải nghiệm
										văn hóa
									</li>
									<li>
										<strong>Lưu ý:</strong> Mang giày đi bộ, kem chống nắng,
										nước uống
									</li>
								</ul>
							</div>

							<h3 className='text-2xl font-semibold mb-4'>
								Hoạt Động Trải Nghiệm Thú Vị
							</h3>

							<p className='leading-relaxed mb-6'>
								Du khách đến thung lũng hoa Bắc Hà có thể tham gia nhiều hoạt động
								thú vị như
								<strong> trekking qua các cánh đồng hoa</strong>, chụp ảnh với phông
								nền thiên nhiên tuyệt đẹp, trải nghiệm cuộc sống nông nghiệp cùng
								người dân địa phương, hoặc thưởng thức các món ăn dân dã được chế
								biến từ nguyên liệu tại chỗ.
							</p>

							<h3 className='text-2xl font-semibold mb-4'>Văn Hóa Ẩm Thực Đặc Sắc</h3>

							<p className='leading-relaxed mb-6'>
								Chuyến tham quan thung lũng hoa không thể hoàn thiện nếu thiếu những
								trải nghiệm ẩm thực. Các món ăn được chế biến từ{' '}
								<strong>nguyên liệu organic</strong> như rau củ tự trồng, thịt gia
								súc chăn nuôi tự nhiên mang đến hương vị trong lành, đậm đà khó
								quên.
							</p>

							<h4 className='text-xl font-semibold mb-3'>
								Đặc sản không thể bỏ qua:
							</h4>

							<ul className='mb-6 space-y-2'>
								<li>
									<strong>Cơm lam nướng:</strong> Cơm được nấu trong ống tre tươi
								</li>
								<li>
									<strong>Thịt lợn nướng than hoa:</strong> Thịt thơm ngon, ướp
									gia vị đặc biệt
								</li>
								<li>
									<strong>Canh măng chua:</strong> Món canh chua ngọt đặc trưng
									vùng cao
								</li>
								<li>
									<strong>Rượu ngô dân tộc:</strong> Thức uống truyền thống của
									người H'Mông
								</li>
							</ul>

							<h3 className='text-2xl font-semibold mb-4'>
								Bảo Vệ Môi Trường Và Du Lịch Bền Vững
							</h3>

							<p className='leading-relaxed mb-6'>
								Thung lũng hoa Bắc Hà đang dần trở thành điểm đến du lịch hút khách,
								tuy nhiên việc
								<strong> bảo vệ môi trường và cảnh quan thiên nhiên</strong> luôn
								được đặt lên hàng đầu. Du khách được khuyến khích tham gia du lịch
								có trách nhiệm, không xả rác, không hái hoa và tôn trọng đời sống
								của người dân địa phương.
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
									Thưởng Thức Hương Vị Vùng Cao Ngay Tại Thành Phố
								</h3>
								<p className='text-lg mb-6 opacity-90'>
									Không thể đến thung lũng hoa Bắc Hà? Hãy đến với nhà hàng chúng
									tôi để trải nghiệm những món ăn đặc sản vùng cao được chế biến
									với tình yêu và sự tận tâm như chính tại quê hương của chúng.
								</p>
								<Link
									href='/thuc-don'
									className='inline-block font-semibold py-3 px-8 rounded-lg transition-colors duration-200'
									style={{
										backgroundColor: 'var(--text-white)',
										color: 'var(--bg-primary)',
									}}>
									Khám Phá Thực Đơn Đặc Sắc
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
