import {Button} from "cc";
import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";

export class IntroState extends AbstractBaseState<AppContext>{
	public Execute()
	{
		this._context.toastLabel.string = this._context.locale.get("intro");

		this._context.starterNode.on(Button.EventType.CLICK, () => {
			this._context.starterNode.off(Button.EventType.CLICK);
			this._context.toastNode.active = false;
			super.Execute();
		});
	}
}