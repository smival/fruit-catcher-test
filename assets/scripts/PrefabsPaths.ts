import {EItemsCategory} from "./types/EItemsCategory";

export class PrefabsPaths
{
	public static fruitPrefabPath(category: EItemsCategory, type: string)
	{
		return `prefabs/fruits/type${category}/${type}`;
	}
}