import {AbstractBaseStateMachine} from "./stateMatter/Abstract/AbstractBaseStateMachine";
import {AppContext} from "./AppContext";
import {AppEvents} from "./AppEvents";
import {IBaseTransition} from "./stateMatter/Interfaces/IBaseTransition";

export class AppStateMachine extends AbstractBaseStateMachine<AppContext, AppEvents>
{
	protected PerformTransition(pTransition: IBaseTransition<AppContext>): void
	{
		console.log("Transition", pTransition.FromState, pTransition.ToState);
		super.PerformTransition(pTransition);
	}
}