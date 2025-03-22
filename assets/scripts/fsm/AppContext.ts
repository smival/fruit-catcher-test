import {Node} from "cc";
import {TerminableContext} from "./stateMatter/Terminable/TerminableContext";
import {AppEvents} from "./AppEvents";
import {IStateMachineContext} from "./stateMatter/Interfaces/IStateMachineContext";
import {GameConfig} from "../types/GameConfig";

export class AppContext extends TerminableContext<AppContext, AppEvents> implements IStateMachineContext<AppContext, AppEvents>
{
	config: GameConfig;
	starterNode: Node;
	gameUI: Node;
	toastUI: Node;

	onUpdate: (dt: number) => void | null = null;
}