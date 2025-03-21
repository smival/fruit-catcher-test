import {_decorator, Component, EventMouse, find, Node, Vec2} from 'cc';

import {inject} from './injects/inject';
import {GameState} from './state/GameState';

const { ccclass, menu, property } = _decorator;

@ccclass('PlayerController')
@menu('**App/PlayerController')
export class PlayerController extends Component {
    private _gameState: GameState = inject(GameState);
    onLoad() {
        find("Canvas").on(Node.EventType.MOUSE_MOVE,
            (event: EventMouse) => {

                const mousePos: Vec2 = event.getLocation();
                this._gameState.setBasketTargetPosition(mousePos.x);
            }
        );
    }
}