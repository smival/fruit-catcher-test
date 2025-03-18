import { _decorator, Component, Node, director, EventMouse } from 'cc';
import { inject } from './injects/inject';
import { GameState } from './state/GameState';

const { ccclass, menu } = _decorator;

@ccclass('PlayerController')
@menu('**App/PlayerController')
export class PlayerController extends Component {
    private _gameState: GameState = inject(GameState);

    onLoad() {
        director.getScene().getChildByName("Canvas").on(Node.EventType.MOUSE_MOVE,
            (event: EventMouse) => {
                this._gameState.setBasketTargetPosition(event.getLocation().x);
            }
        );
    }
}