import {TerminableContext} from "db://assets/scripts/fsm/stateMatter/Terminable/TerminableContext";
import {AppEvents} from "db://assets/scripts/fsm/AppEvents";
import {IStateMachineContext} from "db://assets/scripts/fsm/stateMatter/Interfaces/IStateMachineContext";
import {Node} from "cc";
import {GameConfig} from "db://assets/scripts/types/GameConfig";

export class AppContext extends TerminableContext<AppContext, AppEvents> implements IStateMachineContext<AppContext, AppEvents>
{
	config: GameConfig;
	starterNode: Node;
	onUpdate: (dt: number) => void | null = null;
}