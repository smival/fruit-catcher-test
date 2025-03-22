import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";
import {GameEngine} from "../../ecs/GameEngine";

export class PlayGameState extends AbstractBaseState<AppContext>{
	private readonly _game = GameEngine.instance;

	public Execute()
	{
		this._context.gameUI.active = true;
		this._game.init(this._context.config);

		this._context.onUpdate = (dt: number): void =>
		{
			if (!this._game.update(dt))
			{
				this._context.onUpdate = null;
				this._context.gameUI.active = false;
				this._context.toastUI.active = true;
				super.Execute();
			}
		}
	}
}