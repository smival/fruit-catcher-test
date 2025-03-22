import {_decorator, Component} from "cc"
import {AppContext} from "db://assets/scripts/fsm/AppContext";
import {AppStateMachine} from "db://assets/scripts/fsm/AppStateMachine";
import {LoadingState} from "db://assets/scripts/fsm/states/LoadingState";
import {IntroState} from "db://assets/scripts/fsm/states/IntroState";
import {PlayGameState} from "db://assets/scripts/fsm/states/PlayGameState";
import {GameOverState} from "db://assets/scripts/fsm/states/GameOverState";

const { ccclass, menu } = _decorator;

@ccclass('AppIndex')
@menu('**App/AppIndex')
export class AppIndex extends Component
{
	private _stateMachine: AppStateMachine;
	private _context: AppContext;

	onLoad() {
		this._stateMachine = new AppStateMachine();
		this._context = new AppContext(this._stateMachine);
		this._stateMachine.Context = this._context;
		this._context.starterNode = this.node;

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

	update(dt: number): void {
		this._context.onUpdate?.(dt);
	}
}