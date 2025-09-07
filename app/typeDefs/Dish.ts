export type Dish = {
	id: React.Key;
	name: string;
	description?: string;
	price: number;
	priceSpecial?: number;
	unit?: string;
	image?: string;
	gallery?: string[];
	tag?: string[];
};

