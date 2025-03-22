import {AbstractBaseState} from "db://assets/scripts/fsm/stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "db://assets/scripts/fsm/AppContext";

export class GameOverState  extends AbstractBaseState<AppContext>{
	public Execute()
	{
		console.log("Game is OVer!");
		//super.Execute();
	}
}