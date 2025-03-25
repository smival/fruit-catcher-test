import {_decorator, Component, find, Label} from "cc";
import {AppStateMachine} from "./fsm/AppStateMachine";
import {AppContext} from "./fsm/AppContext";
import {LoadingState} from "./fsm/states/LoadingState";
import {IntroState} from "./fsm/states/IntroState";
import {PlayGameState} from "./fsm/states/PlayGameState";
import {GameOverState} from "./fsm/states/GameOverState";
import {NodeNames} from "./NodeNames";

const {ccclass, menu} = _decorator;

@ccclass('AppIndex')
@menu('**App/AppIndex')
export class AppIndex extends Component
{
	private _stateMachine: AppStateMachine;
	private _context: AppContext;

	onLoad()
	{
		this._stateMachine = new AppStateMachine();
		this._context = new AppContext(this._stateMachine);
		this._stateMachine.Context = this._context;
		this._context.starterNode = this.node;
		this._context.gameUI = find(NodeNames.TotalPoints);
		this._context.toastNode = find(NodeNames.ToastMessage);
		this._context.toastLabel = this._context.toastNode.getChildByName("Value").getComponent(Label);

		const loadingState = new LoadingState(this._context);
		const introState = new IntroState(this._context);
		const playingState = new PlayGameState(this._context);
		const gameOverState = new GameOverState(this._context);

		this._stateMachine.AddState(loadingState, true);
		this._stateMachine.AddState(introState);
		this._stateMachine.AddState(playingState);
		this._stateMachine.AddState(gameOverState);

		this._stateMachine.AddTransition(loadingState, introState);
		this._stateMachine.AddTransition(introState, playingState);
		this._stateMachine.AddTransition(playingState, gameOverState);
		this._stateMachine.AddTransition(gameOverState, introState);

		this._stateMachine.Run();
	}

	update(dt: number): void
	{
		this._context.onUpdate?.(dt);
	}
}