import {AbstractBaseState} from "db://assets/scripts/fsm/stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "db://assets/scripts/fsm/AppContext";
import {GameEngine} from "db://assets/scripts/ecs/GameEngine";

export class PlayGameState extends AbstractBaseState<AppContext>{
	private readonly _game = GameEngine.instance;

	public Execute()
	{
		this._game.init(this._context.config);

		this._context.onUpdate = (dt: number): void =>
		{
			if (!this._game.update(dt))
			{
				this._context.onUpdate = null;
				super.Execute();
			}
		}
	}
}