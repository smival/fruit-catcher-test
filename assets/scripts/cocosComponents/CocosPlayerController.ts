import {_decorator, Component, EventMouse, find, Node, Vec2} from 'cc';
import {GameState} from "../state/GameState";
import {inject} from "../injects/inject";
import {NodeNames} from "../NodeNames";
const { ccclass, menu } = _decorator;

@ccclass('PlayerController')
@menu('**App/PlayerController')
export class CocosPlayerController extends Component {
    private _gameState: GameState = inject(GameState);
    onLoad() {
        find(NodeNames.Canvas).on(Node.EventType.MOUSE_MOVE,
            (event: EventMouse) => {

                const mousePos: Vec2 = event.getLocation();
                this._gameState.setBasketTargetPosition(mousePos.x);
            }
        );
    }
}