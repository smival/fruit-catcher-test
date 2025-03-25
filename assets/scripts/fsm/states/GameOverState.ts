import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";
import {Button} from "cc";
import {GameEngine} from "../../ecs/GameEngine";

export class GameOverState extends AbstractBaseState<AppContext>
{
	public Execute()
	{
		this._context.toastLabel.string = this._context.locale.get("game_over");
		this._context.starterNode.on(Button.EventType.CLICK, () =>
		{
			this._context.starterNode.off(Button.EventType.CLICK);
			GameEngine.instance.clean();
			super.Execute();
		});
	}
}