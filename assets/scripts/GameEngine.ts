import NovaECS from "@nova-engine/ecs";
import {SpawnSystem} from "db://assets/scripts/ecs/systems/SpawnSystem";

export class GameEngine extends NovaECS.Engine
{
	public gameMeta: any;

	private static _instance: GameEngine;
	private _systemsList: NovaECS.System[] = [];

	constructor()
	{
		super();

		this._systemsList = [
			//new AddRemoveEntitySystem(0),
			new SpawnSystem(1),
			//new ViewSystem(2),
			//new MoveSystem(3),
			//new EnergySystem(4),
			//new FieldSystem(5, this._paneParams),
			//new GridSystem(6, grid),
			//new PathSystem(7, grid),
			//new ManagersSystem(8)
		];
	}

	public static get instance(): GameEngine
	{
		if (!GameEngine._instance) {
			GameEngine._instance = new GameEngine();
		}

		return GameEngine._instance;
	}
}