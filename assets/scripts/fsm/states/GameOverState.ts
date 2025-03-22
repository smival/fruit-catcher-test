import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";
import {Button} from "cc";

export class GameOverState extends AbstractBaseState<AppContext>{
	public Execute()
	{
		this._context.starterNode.on(Button.EventType.CLICK, () =>
		{
			this._context.starterNode.off(Button.EventType.CLICK);
			super.Execute();
		});
	}
}