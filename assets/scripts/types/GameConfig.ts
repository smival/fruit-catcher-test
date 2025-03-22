import {EItemsCategory} from "./EItemsCategory";

export interface GameConfig {
	time: number;
	rate: number;
	items: FruitItem[];
}

export interface FruitItem
{
	category: EItemsCategory,
	type: string,
	points: number,
	speed: number,
	weight: number
}