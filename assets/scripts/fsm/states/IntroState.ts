import {Button} from "cc";
import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";

export class IntroState extends AbstractBaseState<AppContext>{
	public Execute()
	{
		this._context.starterNode.on(Button.EventType.CLICK, () => {
			this._context.starterNode.off(Button.EventType.CLICK);
			this._context.toastUI.active = false;
			super.Execute();
		});
	}
}