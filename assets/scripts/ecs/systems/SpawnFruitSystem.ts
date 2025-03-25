import NovaECS from "@nova-engine/ecs";
import {FruitItem} from "../../types/GameConfig";
import {FruitComponent} from "../components/FruitComponent";
import {EntitiesFactory} from "../../factories/EntitiesFactory";
import {find, Node} from "cc";
import {GameEngine} from "../GameEngine";
import {HitComponent} from "../components/HitComponent";
import {NodeNames} from "../../NodeNames";

export class SpawnFruitSystem extends NovaECS.System
{
	protected family?: NovaECS.Family;
	private spawnZone: Node;
	private _spawnItems: FruitItem[] = [];
	private _nextSpawnTime: number = 0;
	private _spawnInterval: number;
	private _engine: GameEngine | null = null;

	onAttach(engine: GameEngine): void
	{
		super.onAttach(engine);

		this._spawnItems = engine.config.items;
		this._spawnInterval = engine.config.rate;

		this.spawnZone = find(NodeNames.ZoneSpawn);
		this._engine = engine;
		this.family = new NovaECS.FamilyBuilder(engine)
			.include(FruitComponent)
			.include(HitComponent)
			.build();
	}

	public update(engine: GameEngine, delta: number): void
	{
		this._nextSpawnTime -= delta;
		if (this._nextSpawnTime <= 0)
		{
			this._spawnFruit();
			this._nextSpawnTime = this._spawnInterval;
		}
	}

	private _spawnFruit(): void
	{
		const totalWeight = this._spawnItems.reduce((sum, item) => sum + item.weight, 0);
		let randomWeight = Math.random() * totalWeight;

		let selectedItem: FruitItem | null = null;
		for (const item of this._spawnItems)
		{
			randomWeight -= item.weight;
			if (randomWeight <= 0)
			{
				selectedItem = item;
				break;
			}
		}

		if (!selectedItem) return;

		const entity = EntitiesFactory.createFruitEntity(selectedItem, this.spawnZone);
		this._engine.addEntity(entity);
	}
}