import {AbstractBaseState} from "db://assets/scripts/fsm/stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "db://assets/scripts/fsm/AppContext";
import {Button} from "cc";

export class IntroState extends AbstractBaseState<AppContext>{
	public Execute()
	{
		this._context.starterNode.on(Button.EventType.CLICK, () => {
			this._context.starterNode.off(Button.EventType.CLICK);
			super.Execute();
		});
	}
}