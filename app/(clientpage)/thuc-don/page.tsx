'use client';

import React, { useState, useMemo } from 'react';
import database from '@/app/database.json';
import HorizontalDishItem from '@/app/components/HorizontalDishItem';
import ComboCarousel from '@/app/components/ComboCarousel';
import HotpotItem from '@/app/components/HotpotItem';
import FloatCheckoutBtn from '@/app/components/FloatCheckoutBtn';
import ComboItemGrid from '@/app/components/ComboItemGrid';

export default function MenuPage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedSection, setSelectedSection] = useState('Tất cả');

	const sections = ['Tất cả', 'Combo', 'Lẩu', 'Món lẻ', 'Đồ uống'];

	// Filter data based on search and section
	const filteredCombos = useMemo(() => {
		if (selectedSection !== 'Tất cả' && selectedSection !== 'Combo') return [];
		return database.combos.filter((combo) =>
			combo.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm, selectedSection]);

	const filteredHotpots = useMemo(() => {
		if (selectedSection !== 'Tất cả' && selectedSection !== 'Lẩu') return [];
		return database.hotpots.filter((hotpot) =>
			hotpot.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm, selectedSection]);

	const filteredDishes = useMemo(() => {
		if (selectedSection !== 'Tất cả' && selectedSection !== 'Món lẻ') return [];
		return database.dishes.filter((dish) =>
			dish.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm, selectedSection]);

	const filteredDrinks = useMemo(() => {
		if (selectedSection !== 'Tất cả' && selectedSection !== 'Đồ uống') return [];
		return database.drinks.filter((drink) =>
			drink.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm, selectedSection]);

	const totalResults =
		filteredCombos.length +
		filteredHotpots.length +
		filteredDishes.length +
		filteredDrinks.length;

	return (
		<>
			<div className='min-h-screen bg-[var(--bg-main)] pb-8'>
				{/* Header */}
				<div className='bg-[var(--bg-primary)] text-white py-8'>
					<div className='container text-start'>
						<h1 className='text-[42px] lg:text-[56px] uppercase text-[var(--text-highlight)] text-start font-bold leading-16 lg:leading-tight font-mono [word-spacing:-16px]'>
							Thực đơn
						</h1>
						<p className=' text-lg opacity-90'>
							Thăng hoa vị giác với 300+ món nhậu đặc sắc, lẩu nướng, hải sản được
							chuẩn bị từ những đầu bếp chuyên nghiệp hàng đầu.
						</p>
					</div>
				</div>

				<div className='container'>
					{/* Search and Filter Section */}
					<div className='space-y-4 py-8'>
						{/* Search Bar */}
						<div className='max-w-md mx-auto'>
							<input
								type='text'
								placeholder='Tìm kiếm món ăn...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--bg-primary)] focus:border-transparent text-lg'
							/>
						</div>

						{/* Section Filter */}
						<div className='flex flex-wrap justify-center gap-2'>
							{sections.map((section) => (
								<button
									key={section}
									onClick={() => setSelectedSection(section)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
										selectedSection === section
											? 'bg-[var(--bg-primary)] text-white'
											: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
									}`}>
									{section}
								</button>
							))}
						</div>
					</div>

					{/* Results Info */}
					<div className='mb-6'>
						<p className='text-gray-600 text-center'>
							Tìm thấy{' '}
							<span className='font-semibold text-[var(--bg-primary)]'>
								{totalResults}
							</span>{' '}
							kết quả
							{searchTerm && (
								<span>
									{' '}
									với từ khóa "<span className='font-semibold'>{searchTerm}</span>
									"
								</span>
							)}
							{selectedSection !== 'Tất cả' && (
								<span>
									{' '}
									trong mục "
									<span className='font-semibold'>{selectedSection}</span>"
								</span>
							)}
						</p>
					</div>

					{/* Content Sections */}
					{totalResults > 0 ? (
						<div className='space-y-12'>
							{/* Combos Section */}
							{filteredCombos.length > 0 && (
								<section>
									<h2 className='text-2xl font-bold text-[var(--text-default)] mb-6 border-b-2 border-[var(--bg-highlight)] pb-2'>
										Combo ({filteredCombos.length})
									</h2>

									{/* Mobile: Carousel */}
									<div className='block lg:hidden'>
										<ComboCarousel combos={filteredCombos} />
									</div>

									{/* Desktop: 4-column grid */}
									<div className='hidden lg:grid lg:grid-cols-4 gap-6'>
										{filteredCombos.map((combo) => (
											<ComboItemGrid
												key={combo.id}
												combo={combo}
											/>
										))}
									</div>
								</section>
							)}

							{/* Hotpots Section */}
							{filteredHotpots.length > 0 && (
								<section>
									<h2 className='text-2xl font-bold text-[var(--text-default)] mb-6 border-b-2 border-[var(--bg-highlight)] pb-2'>
										Lẩu ({filteredHotpots.length})
									</h2>
									<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
										{filteredHotpots.map((hotpot) => (
											<HotpotItem
												key={hotpot.id}
												hotpot={hotpot}
											/>
										))}
									</div>
								</section>
							)}

							{/* Drinks Section */}
							{filteredDrinks.length > 0 && (
								<section>
									<h2 className='text-2xl font-bold text-[var(--text-default)] mb-6 border-b-2 border-[var(--bg-highlight)] pb-2'>
										Đồ uống ({filteredDrinks.length})
									</h2>
									<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
										{filteredDrinks.map((drink) => (
											<HorizontalDishItem
												key={drink.id}
												dish={drink}
											/>
										))}
									</div>
								</section>
							)}

							{/* Individual Dishes Section */}
							{filteredDishes.length > 0 && (
								<section>
									<h2 className='text-2xl font-bold text-[var(--text-default)] mb-6 border-b-2 border-[var(--bg-highlight)] pb-2'>
										Món lẻ ({filteredDishes.length})
									</h2>
									<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
										{filteredDishes.map((dish) => (
											<HorizontalDishItem
												key={dish.id}
												dish={dish}
											/>
										))}
									</div>
								</section>
							)}
						</div>
					) : (
						<div className='text-center py-12'>
							<div className='text-gray-500 text-lg mb-4'>
								Không tìm thấy kết quả nào
							</div>
							<button
								onClick={() => {
									setSearchTerm('');
									setSelectedSection('Tất cả');
								}}
								className='px-6 py-2 bg-[var(--bg-primary)] text-white rounded-lg hover:bg-[var(--bg-dark-primary)] transition-colors'>
								Xóa bộ lọc
							</button>
						</div>
					)}
				</div>

				{/* Floating Checkout Button */}
				<FloatCheckoutBtn key='/thuc-don' />
			</div>
		</>
	);
}
