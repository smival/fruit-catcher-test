import {Component, _decorator} from "cc"
import {GameEngine} from "./GameEngine";
import { GameConfig } from "./types/GameConfig";
import {AssetsLoader} from "db://assets/scripts/utils/AssetsLoader";

const { ccclass, menu } = _decorator;

// todo TEMP move to global FSM
enum GameState {
	INIT,
	PLAYING,
	OVER
}

@ccclass('GameIndex')
@menu('**App/GameIndex')
export class GameIndex extends Component
{
	private readonly _game = GameEngine.instance;
	private _gameState: GameState = GameState.INIT;

	// todo This is a playing state, move json loading to initial state, end after update returns FALSE
	// move to next state OVER_STATE
	onLoad() {
		AssetsLoader.loadJSON<GameConfig>("config").then((conf: GameConfig) => {
			this._game.init(conf);
			this._gameState = GameState.PLAYING;
		});
	}

	update(dt: number)
	{
		if (this._gameState !== GameState.PLAYING)
			return;

		if (!this._game.update(dt))
			this._gameState = GameState.OVER;
	}
}