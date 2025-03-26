import {Label, Node} from "cc";
import {TerminableContext} from "./stateMatter/Terminable/TerminableContext";
import {AppEvents} from "./AppEvents";
import {IStateMachineContext} from "./stateMatter/Interfaces/IStateMachineContext";
import {GameConfig} from "../types/GameConfig";
import {GameEngine} from "../ecs/GameEngine";

export class AppContext extends TerminableContext<AppContext, AppEvents> implements IStateMachineContext<AppContext, AppEvents>
{
	gameEngine: GameEngine;
	config: GameConfig;
	locale: Map<string, string>;

	starterNode: Node;
	gameUI: Node;
	toastNode: Node;
	toastLabel: Label;

	onUpdate: (dt: number) => void | null = null;
}