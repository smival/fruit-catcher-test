import {_decorator, Component, EventMouse, EventTouch, find, Node, Vec2, Vec3, Camera} from 'cc';
import {GameState} from "../state/GameState";
import {inject} from "../injects/inject";
const { ccclass, menu } = _decorator;

@ccclass('CocosPlayerController')
@menu('**App/CocosPlayerController')
export class CocosPlayerController extends Component {
    private _gameState: GameState = inject(GameState);
    onLoad() {
        this.node.on(Node.EventType.MOUSE_MOVE, (event: EventMouse) => {
                const mousePos: Vec2 = event.getUILocation();
                this._gameState.setBasketTargetPosition(mousePos.x);
            }
        );

        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            const touchPos: Vec2 = event.getUILocation();
            this._gameState.setBasketTargetPosition(touchPos.x);
        });
    }
}