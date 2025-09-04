'use client';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Restaurent from '@/app/assets/imgs/restaurent.avif';
import Market from '@/app/assets/imgs/market.avif';
import Valley from '@/app/assets/imgs/flower-valley.jpg';
import Tower from '@/app/assets/imgs/dinhthu.jpeg';
export default function RoundMap() {
	const pathRef = useRef<SVGPathElement | null>(null);
	const [markers, setMarkers] = useState<
		Array<{
			x: number;
			y: number;
			angle: number;
			label: string;
			image: string;
			active: boolean;
			description: string;
		}>
	>([]);

	useEffect(() => {
		// run only on client when DOM is available
		if (!pathRef.current) return;
		const path = pathRef.current;
		try {
			const total = path.getTotalLength();
			if (!total || total === 0) return;

			// choose a few percentages along the path where we want markers
			const percentages = [0.08, 0.4, 0.6, 0.88];
			const computed = percentages.map((p, i) => {
				const at = Math.max(0, Math.min(total, total * p));
				const pt = path.getPointAtLength(at);
				// compute small angle by sampling a nearby point for rotation
				const ahead = Math.min(total, at + 0.5);
				const pt2 = path.getPointAtLength(ahead);
				const dx = pt2.x - pt.x;
				const dy = pt2.y - pt.y;
				const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
				return {
					x: pt.x,
					y: pt.y,
					angle,
					label: [
						'Nhà hàng \n Lán Kiên',
						'Chợ Bắc Hà',
						'Thung lũng hoa',
						'Dinh Hoàng A Tưởng',
					][i],
					image: [Restaurent.src, Market.src, Valley.src, Tower.src][i],
					active: i === 0,
					description: [
						'Nhà hàng Lán Kiên - Nơi thưởng thức ẩm thực đặc sắc',
						'Chợ Bắc Hà - Điểm đến văn hóa độc đáo',
						'Thung lũng hoa - Thiên đường sống ảo',
						'Dinh Hoàng A Tưởng - Di sản văn hóa lịch sử',
					][i],
				};
			});
			setMarkers(computed);
		} catch (err) {
			console.warn('SVG path measurement failed', err);
		}
	}, []);
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 container'>
			<div className='h-[300px] md:h-dvh max-h-[1080px] col-span-1 lg:col-span-2'>
				<svg
					width='100%'
					height='100%'
					preserveAspectRatio='xMidYMid meet'
					viewBox='0 0 170 77'
					className=''
					xmlns='http://www.w3.org/2000/svg'>
					<defs>
						{/* small circular marker symbol; replace href with an image path if desired */}
						<symbol
							id='pin'
							viewBox='0 0 24 24'>
							<circle
								cx='12'
								cy='8'
								r='4'
								fill='var(--text-highlight)'
							/>
							<path
								d='M12 12 C12 12 8 20 12 22 C16 20 12 12 12 12 Z'
								fill='var(--text-highlight)'
								opacity='0.95'
							/>
						</symbol>
						<path
							id='mainRoute'
							d='M3 21.2646C9.66217 17.7156 52.7963 -8.20968 61.2223 8.64238C69.2553 24.7084 30.7222 53.7007 51 68.9091C68.3757 81.9408 103.533 66.541 120.511 59.5757C131.852 54.9231 141.231 47.3373 151.711 41.4424C152.475 41.013 158.81 37.2646 156.6 37.2646'
							stroke='var(--bg-primary)'
							strokeWidth={1}
							strokeDasharray='2,8'
							strokeLinecap='round'
							fill='none'
						/>
					</defs>

					{/* use the path defined in defs for measurement and rendering */}
					<use xlinkHref='#mainRoute' />

					{/* attach ref to a hidden path element for getPointAtLength usage */}
					<path
						ref={pathRef}
						d='M3 21.2646C9.66217 17.7156 52.7963 -8.20968 61.2223 8.64238C69.2553 24.7084 30.7222 53.7007 51 68.9091C68.3757 81.9408 103.533 66.541 120.511 59.5757C131.852 54.9231 141.231 47.3373 151.711 41.4424C152.475 41.013 158.81 37.2646 156.6 37.2646'
						stroke='transparent'
						strokeWidth={0.5}
						fill='none'
						id='measurablePath'
					/>

					{/* markers mapped from computed positions */}
					{markers.map((m, i) => (
						<g
							onClick={() => {
								setMarkers((prev) =>
									prev.map((m, j) => ({
										...m,
										active: j === i,
									}))
								);
							}}
							key={i}
							className={`svg-marker-group`}
							transform={`translate(${m.x - 12}, ${m.y - 12})`}>
							{/* image marker (use foreignObject so we can apply normal CSS like rounded corners & shadow) */}
							<foreignObject
								x='0'
								y='0'
								width='24'
								height='24'>
								<div
									className={`w-6 h-6 rounded-full svg-marker-img ${
										m.active ? 'active' : ''
									}`}
									style={{
										width: '24px',
										height: '24px',
										backgroundImage: `url(${m.image})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
									}}
									title={m.label}
								/>
							</foreignObject>

							<text
								x='12'
								y='30'
								fontSize='3.5'
								className='svg-marker-label'
								fill='var(--text-primary)'
								textAnchor='middle'>
								{m.label.split('\n').map((line, idx) => (
									<tspan
										key={idx}
										x='12'
										dy={idx === 0 ? '0' : '4'}>
										{line}
									</tspan>
								))}
							</text>
						</g>
					))}
				</svg>
			</div>
			<div className='pb-6 lg:py-24 self-center'>
				<p
					className=' text-[var(--text-primary)] text-justify lg:text-lg leading-7 lg:leading-10 lg:indent-14 text-balance line-clamp-6 
                '>
					{markers.find((m) => m.active)?.description}
					Chợ phiên Bắc Hà ở Lào Cai là một trong những chợ phiên vùng cao lớn và nổi
					tiếng nhất Tây Bắc. Chợ chỉ họp vào sáng Chủ Nhật hằng tuần, thu hút đông đảo
					đồng bào Mông, Dao, Tày, Nùng từ khắp nơi về mua bán, trao đổi hàng hóa. Nét đặc
					sắc của chợ là không gian rực rỡ sắc màu từ trang phục thổ cẩm truyền thống, tạo
					nên khung cảnh sống động và độc đáo. Tại đây, du khách có thể bắt gặp đủ loại
					mặt hàng: từ gia súc, nông sản đến thổ cẩm và các món ăn đặc sản. Thắng cố, phở
					chua, cùng rượu ngô men lá bản Phố là những hương vị khó quên khi đến chợ. Không
					chỉ là nơi buôn bán, chợ phiên Bắc Hà còn là điểm hẹn văn hóa, nơi con người gặp
					gỡ, giao lưu và giữ gìn bản sắc truyền thống.
				</p>
				<span className='text-[var(--text-primary)] font-semibold cursor-pointer'>
					Đọc tiếp
				</span>
			</div>
		</div>
	);
}
