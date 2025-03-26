import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";
import {GameEngine} from "../../ecs/GameEngine";
import {inject} from "../../injects/inject";

export class PlayGameState extends AbstractBaseState<AppContext>
{
	private readonly _game = inject(GameEngine);

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
				this._context.toastNode.active = true;
				super.Execute();
			}
		}
	}
}