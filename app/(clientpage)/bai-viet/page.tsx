'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
	{
		id: 'an-gi-bac-ha-ngon-nhat',
		title: 'Ăn gì ở Bắc Hà ngon nhất? Top 10+ món đặc sản không thể bỏ qua',
		excerpt:
			'Khám phá danh sách các món ăn đặc sắc nhất khi du lịch Bắc Hà. Từ thắng cố truyền thống đến lẩu cá suối tươi ngon, tất cả đều có tại nhà hàng Lán Kiên.',
		image: '/optimized_photo/thang_co.avif',
		date: '2024-12-01',
		readTime: '8 phút đọc',
		tags: ['ăn gì bắc hà', 'ẩm thực bắc hà', 'đặc sản bắc hà'],
	},
	{
		id: 'cho-phien-bac-ha-kham-pha',
		title: 'Chợ phiên Bắc Hà - Khám phá và thưởng thức ẩm thực địa phương',
		excerpt:
			'Hướng dẫn chi tiết về chợ phiên Bắc Hà và những địa điểm ăn uống ngon nhất xung quanh. Nhà hàng Lán Kiên - điểm đến lý tưởng sau khi tham quan chợ.',
		image: '/blog_photo/cho-bac-ha-3.avif',
		date: '2024-11-28',
		readTime: '12 phút đọc',
		tags: ['chợ phiên bắc hà', 'du lịch bắc hà', 'ẩm thực bắc hà'],
	},
	{
		id: 'thang-co-bac-ha-huong-dan',
		title: "Thắng cố Bắc Hà - Món ăn truyền thống của người H'Mông",
		excerpt:
			"Tìm hiểu về món thắng cố đặc sắc của người H'Mông Bắc Hà. Cách chế biến, nguồn gốc và nơi thưởng thức thắng cố ngon nhất.",
		image: '/optimized_photo/thang_co_2.avif',
		date: '2024-11-25',
		readTime: '6 phút đọc',
		tags: ['thắng cố', "ẩm thực h'mông", 'đặc sản bắc hà'],
	},
	{
		id: 'nha-hang-bac-ha-lan-kien',
		title: 'Nhà hàng Bắc Hà Lán Kiên - Trải nghiệm ẩm thực vùng cao',
		excerpt:
			'Giới thiệu về nhà hàng Lán Kiên và lý do tại sao đây là lựa chọn hàng đầu khi tìm hiểu ăn gì ở Bắc Hà. Menu đa dạng với hơn 50 món đặc sản.',
		image: '/blog_photo/nha-hang.avif',
		date: '2024-11-20',
		readTime: '10 phút đọc',
		tags: ['nhà hàng bắc hà', 'lán kiên', 'ẩm thực cao nguyên'],
	},
	{
		id: 'lau-ca-suoi-bac-ha',
		title: 'Lẩu cá suối Bắc Hà - Hương vị núi rừng trong từng thìa nước dùng',
		excerpt:
			'Khám phá món lẩu cá suối đặc sắc của vùng cao Bắc Hà. Từ cách chọn cá tươi đến bí quyết nấu nước dùng thanh ngọt.',
		image: '/optimized_photo/lau_ca_chep.avif',
		date: '2024-11-15',
		readTime: '7 phút đọc',
		tags: ['lẩu cá suối', 'ẩm thực núi rừng', 'đặc sản bắc hà'],
	},
	{
		id: 'am-thuc-vung-cao-tay-bac',
		title: 'Ẩm thực vùng cao Tây Bắc - Nét đẹp văn hóa qua món ăn',
		excerpt:
			'Tìm hiểu sâu về nền ẩm thực đặc sắc của vùng cao Tây Bắc. Những món ăn mang đậm bản sắc dân tộc và nơi thưởng thức tốt nhất.',
		image: '/optimized_photo/combo1.avif',
		date: '2024-11-10',
		readTime: '15 phút đọc',
		tags: ['ẩm thực tây bắc', 'văn hóa ẩm thực', 'dân tộc thiểu số'],
	},
];

export default function BlogPage() {
	return (
		<div className='min-h-screen bg-[var(--bg-main)]'>
			{/* SEO Header */}
			<section className='bg-[var(--bg-primary)] text-white py-16'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl lg:text-6xl font-bold text-center mb-6 text-[var(--text-highlight)]'>
						Ăn gì ở Bắc Hà?
					</h1>
					<p className='text-xl text-center max-w-4xl mx-auto opacity-90'>
						Khám phá <strong>ẩm thực Bắc Hà</strong> đặc sắc qua những bài viết chi
						tiết. Từ <strong>chợ phiên Bắc Hà</strong> đến các món đặc sản như thắng cố,
						lẩu cá suối. Tất cả kinh nghiệm ẩm thực vùng cao tại một nơi.
					</p>
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4'>
						{blogPosts.map((post) => (
							<article
								key={post.id}
								className='bg-white rounded-lg shadow overflow-hidden border border-gray-50'>
								<div className='relative h-48 overflow-hidden'>
									<Image
										src={post.image}
										alt={post.title}
										fill
										className='object-cover hover:scale-105 transition-transform duration-300'
									/>
								</div>

								<div className='p-6'>
									<div className='flex items-center gap-2 text-sm text-gray-500 mb-3'>
										<span>{post.date}</span>
										<span>•</span>
										<span>{post.readTime}</span>
									</div>

									<h2 className='text-xl font-bold text-[var(--text-primary)] mb-3 line-clamp-2'>
										{post.title}
									</h2>

									<p className='text-[var(--text-default)] mb-4 line-clamp-3'>
										{post.excerpt}
									</p>

									<div className='flex flex-wrap gap-2 mb-4'>
										{post.tags.map((tag) => (
											<span
												key={tag}
												className='px-3 py-1 bg-[var(--bg-primary)] text-white text-xs rounded-full'>
												{tag}
											</span>
										))}
									</div>

									<Link
										href={`/bai-viet/${post.id}`}
										className='inline-block bg-[var(--bg-primary)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors'>
										Đọc tiếp
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* SEO Content Section */}
			<section className='bg-[var(--bg-highlight)] py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl font-bold text-[var(--text-primary)] text-center mb-8'>
							Tại sao chọn nhà hàng Lán Kiên khi tìm hiểu ăn gì ở Bắc Hà?
						</h2>

						<div className='prose prose-lg max-w-none'>
							<p className='text-[var(--text-default)] text-lg leading-relaxed mb-6'>
								Khi đặt câu hỏi <strong>"ăn gì ở Bắc Hà"</strong>, nhà hàng Lán Kiên
								luôn là câu trả lời hàng đầu. Chúng tôi tự hào là địa chỉ ẩm thực
								Bắc Hà uy tín, nằm ngay gần <strong>chợ phiên Bắc Hà</strong> nổi
								tiếng.
							</p>

							<p className='text-[var(--text-default)] text-lg leading-relaxed mb-6'>
								Với hơn 10 năm kinh nghiệm trong ngành ẩm thực, chúng tôi đã phục vụ
								hàng nghìn du khách đến khám phá <strong>ẩm thức Bắc Hà</strong>.
								Menu đa dạng với hơn 50 món đặc sản từ thắng cố truyền thống, lẩu cá
								suối tươi ngon đến thịt trâu gác bếp đậm đà.
							</p>

							<p className='text-[var(--text-default)] text-lg leading-relaxed'>
								Đội ngũ đầu bếp người địa phương am hiểu sâu sắc về văn hóa ẩm thực
								vùng cao, đảm bảo mang đến trải nghiệm ẩm thực chân thực nhất cho du
								khách. Đặt bàn ngay hôm nay để khám phá tinh hoa{' '}
								<strong>ẩm thực Bắc Hà</strong>!
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
