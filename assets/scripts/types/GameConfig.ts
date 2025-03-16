import {EItemsCategory} from "db://assets/scripts/EItemsCategory";

export interface GameConfig {
	time: number;
	items: GameItem[];
}

export interface GameItem {
	category: EItemsCategory,
	type: string,
	points: number,
	speed: number,
	weight: number
}