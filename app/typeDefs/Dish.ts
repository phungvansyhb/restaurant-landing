export type Dish = {
	id: React.Key;
	name: string;
	description?: string;
	price: number;
	image?: string;
	gallery?: string[];
	tag?: string[];
};

