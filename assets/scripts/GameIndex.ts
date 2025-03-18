import {Component, _decorator} from "cc"
import {GameEngine} from "./GameEngine";
import { GameConfig } from "./types/GameConfig";
import {AssetsLoader} from "db://assets/scripts/utils/AssetsLoader";

const { ccclass, menu } = _decorator;

@ccclass('GameIndex')
@menu('**App/GameIndex')
export class GameIndex extends Component
{
	private readonly _game = GameEngine.instance;

	onLoad() {
		AssetsLoader.loadJSON<GameConfig>("config").then((conf: GameConfig) => {
			this._game.init(conf);
		});
	}

	update(dt: number)
	{
		this._game.update(dt);
	}
}