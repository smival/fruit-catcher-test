import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";
import {GameEngine} from "../../ecs/GameEngine";
import {inject} from "../../injects/inject";

export class PlayGameState extends AbstractBaseState<AppContext>
{
	public Execute()
	{
		this._context.gameUI.active = true;
		this._context.gameEngine = inject(GameEngine);
		this._context.gameEngine.init(this._context.config);

		this._context.onUpdate = (dt: number): void =>
		{
			if (!this._context.gameEngine.update(dt))
			{
				this._context.onUpdate = null;
				this._context.gameUI.active = false;
				this._context.toastNode.active = true;
				super.Execute();
			}
		}
	}
}