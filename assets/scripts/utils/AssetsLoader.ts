import { resources, JsonAsset, Prefab } from 'cc';

export class AssetsLoader {
	public static loadJSON<T>(path: string):Promise<T>
	{
		return new Promise((resolve, reject) => {
			resources.load(path, JsonAsset, (err, jsonAsset) => {
				if (err) {
					reject(err);
					console.error(err.message);
					return;
				}
				resolve(jsonAsset.json as T);
			});
		});
	}

	public static loadPrefab(path: string):Promise<Prefab>
	{
		return new Promise((resolve, reject) => {
			resources.load(path, Prefab, (err, prefab) => {
				if (err) {
					reject(err);
					console.error(err.message);
					return;
				}
				resolve(prefab);
			});
		});
	}
}