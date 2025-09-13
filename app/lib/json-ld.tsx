import { Metadata } from 'next';

// JSON-LD structured data for the restaurant
export const restaurantJsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Restaurant',
			'@id': 'https://nha-hang-lan-kien.com/#restaurant',
			name: 'Nhà Hàng Lán Kiên - Ăn gì ở Bắc Hà ngon nhất',
			alternateName: ['Lán Kiên Restaurant', 'Nhà hàng Bắc Hà', 'Ẩm thực Bắc Hà'],
			description:
				'Ăn gì ở Bắc Hà? Nhà hàng Lán Kiên là câu trả lời hoàn hảo! Khám phá ẩm thực Bắc Hà đặc sắc với thắng cố, lẩu cá suối, thịt trâu gác bếp. Nằm gần chợ phiên Bắc Hà, chúng tôi phục vụ 250+ khách với tinh hoa ẩm thực vùng cao Tây Bắc.',
			image: [
				'https://nha-hang-lan-kien.com/nha-hang.avif',
				'https://nha-hang-lan-kien.com/optimized_photo/combo1.avif',
				'https://nha-hang-lan-kien.com/optimized_photo/thang_co.avif',
			],
			logo: 'https://nha-hang-lan-kien.com/icons/android-chrome-512x512.png',
			url: 'https://nha-hang-lan-kien.com',
			telephone: ['+84984350229', '+84948791468'],
			email: 'cuonglanbh6789@icloud.com',
			priceRange: '$$',
			currenciesAccepted: 'VND',
			paymentAccepted: ['Cash', 'Credit Card'],
			servesCuisine: [
				'Vietnamese',
				'Bac Ha Cuisine',
				'Mountain Cuisine',
				"H'Mong Traditional Food",
				'Ethnic Vietnamese',
			],
			acceptsReservations: true,
			hasMenu: 'https://nha-hang-lan-kien.com/thuc-don',
			keywords: [
				'ăn gì bắc hà',
				'ẩm thực bắc hà',
				'chợ phiên bắc hà',
				'nhà hàng bắc hà',
				'thắng cố',
				'lẩu cá suối',
			],
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Ngã 3 Phố Bờ hồ',
				addressLocality: 'Bắc Hà',
				addressRegion: 'Lào Cai',
				addressCountry: 'VN',
				addressCountryCode: 'VN',
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: '22.5208',
				longitude: '104.2861',
			},
			openingHoursSpecification: [
				{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
					],
					opens: '06:00',
					closes: '22:00',
				},
			],
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: '4.5',
				reviewCount: '128',
				bestRating: '5',
				worstRating: '1',
			},
			amenityFeature: [
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Free WiFi',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Parking',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Air Conditioning',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Private Dining Room',
					value: true,
				},
			],
			maximumAttendeeCapacity: 250,
			smokingPolicy: 'http://schema.org/NoSmokingPolicy',
		},
		{
			'@type': 'LocalBusiness',
			'@id': 'https://nha-hang-lan-kien.com/#localbusiness',
			name: 'Nhà Hàng Lán Kiên',
			image: 'https://nha-hang-lan-kien.com/nha-hang.avif',
			telephone: '+84984350229',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Ngã 3 Phố Bờ hồ',
				addressLocality: 'Bắc Hà',
				addressRegion: 'Lào Cai',
				addressCountry: 'VN',
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: '22.5208',
				longitude: '104.2861',
			},
			url: 'https://nha-hang-lan-kien.com',
			openingHours: 'Mo-Su 06:00-22:00',
			priceRange: '$$',
		},
		{
			'@type': 'WebSite',
			'@id': 'https://nha-hang-lan-kien.com/#website',
			url: 'https://nha-hang-lan-kien.com',
			name: 'Nhà Hàng Lán Kiên - Ẩm thực Cao Nguyên',
			description:
				'Website chính thức của Nhà hàng Lán Kiên - Khám phá tinh hoa ẩm thực vùng cao Bắc Hà, Lào Cai',
			publisher: {
				'@id': 'https://nha-hang-lan-kien.com/#restaurant',
			},
			inLanguage: 'vi-VN',
			potentialAction: [
				{
					'@type': 'SearchAction',
					target: {
						'@type': 'EntryPoint',
						urlTemplate:
							'https://nha-hang-lan-kien.com/thuc-don?search={search_term_string}',
					},
					'query-input': 'required name=search_term_string',
				},
			],
		},
		{
			'@type': 'Organization',
			'@id': 'https://nha-hang-lan-kien.com/#organization',
			name: 'Nhà Hàng Lán Kiên',
			url: 'https://nha-hang-lan-kien.com',
			logo: 'https://nha-hang-lan-kien.com/icons/android-chrome-512x512.png',
			image: 'https://nha-hang-lan-kien.com/nha-hang.avif',
			description:
				'Nhà hàng chuyên phục vụ ẩm thực vùng cao Bắc Hà với các món đặc sản như thắng cố, lẩu cá suối, thịt trâu gác bếp',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Ngã 3 Phố Bờ hồ',
				addressLocality: 'Bắc Hà',
				addressRegion: 'Lào Cai',
				addressCountry: 'VN',
			},
			contactPoint: [
				{
					'@type': 'ContactPoint',
					telephone: '+84984350229',
					contactType: 'customer service',
					availableLanguage: ['Vietnamese'],
				},
				{
					'@type': 'ContactPoint',
					telephone: '+84948791468',
					contactType: 'reservations',
					availableLanguage: ['Vietnamese'],
				},
			],
			sameAs: ['https://www.facebook.com/profile.php?id=100011234567890'],
		},
	],
};

// JSON-LD for menu page
export const menuJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Menu',
	'@id': 'https://nha-hang-lan-kien.com/thuc-don#menu',
	name: 'Thực đọn Nhà hàng Lán Kiên',
	description: 'Thực đơn đa dạng với các món đặc sản vùng cao Bắc Hà',
	hasMenuSection: [
		{
			'@type': 'MenuSection',
			name: 'Combo Set Menu',
			description: 'Các combo món ăn trọn gói cho nhóm',
			hasMenuItem: [
				{
					'@type': 'MenuItem',
					name: 'COMBO 1',
					description:
						'Gồm gà bản luộc (hấp) lá chanh, Lòng, phèo, trễ tổng hợp, Thịt ngựa xào tổng hợp, Khâu nhục, Canh mọc, Bánh trưng đen, Rau luộc chấm trứng, Tráng miệng, Rượu hoa quả, Cơm trắng',
					image: 'https://nha-hang-lan-kien.com/optimized_photo/combo1.avif',
					offers: {
						'@type': 'Offer',
						price: '1100000',
						priceCurrency: 'VND',
					},
				},
				{
					'@type': 'MenuItem',
					name: 'COMBO 2',
					description:
						'Gồm Gà bản luộc (hấp) lá chanh, Chân giò tần lạc nấm, Xèo ngựa, Thịt lợn hun khói xào rau, Cá chép om dưa, Canh mọc, Bánh trưng đen, Rau xào, Tráng miệng, Rượu hoa quả, Cơm trắng',
					image: 'https://nha-hang-lan-kien.com/optimized_photo/combo2.avif',
					offers: {
						'@type': 'Offer',
						price: '1200000',
						priceCurrency: 'VND',
					},
				},
			],
		},
		{
			'@type': 'MenuSection',
			name: 'Món lẩu',
			description: 'Các món lẩu đặc sắc vùng cao',
			hasMenuItem: [
				{
					'@type': 'MenuItem',
					name: 'Lẩu cá chép',
					description: 'Lẩu cá chép tươi ngon với rau rừng',
					image: 'https://nha-hang-lan-kien.com/optimized_photo/lau_ca_chep.avif',
					offers: {
						'@type': 'Offer',
						price: '350000',
						priceCurrency: 'VND',
					},
				},
				{
					'@type': 'MenuItem',
					name: 'Thắng cố',
					description: "Món thắng cố truyền thống của người H'Mông",
					image: 'https://nha-hang-lan-kien.com/optimized_photo/thang_co.avif',
					offers: {
						'@type': 'Offer',
						price: '120000',
						priceCurrency: 'VND',
					},
				},
			],
		},
	],
};

// JSON-LD for breadcrumb navigation
export const breadcrumbJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Trang chủ',
			item: 'https://nha-hang-lan-kien.com',
		},
		{
			'@type': 'ListItem',
			position: 2,
			name: 'Thực đơn',
			item: 'https://nha-hang-lan-kien.com/thuc-don',
		},
		{
			'@type': 'ListItem',
			position: 3,
			name: 'Liên hệ',
			item: 'https://nha-hang-lan-kien.com/lien-he',
		},
		{
			'@type': 'ListItem',
			position: 4,
			name: 'Bài viết',
			item: 'https://nha-hang-lan-kien.com/bai-viet',
		},
	],
};

// Component to inject JSON-LD
export function JsonLd({ data }: { data: object }) {
	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
