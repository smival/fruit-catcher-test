import { _decorator, Component, Node, director, EventMouse } from 'cc';
const { ccclass, menu } = _decorator;

@ccclass('PlayerController')
@menu('**App/PlayerController')
export class PlayerController extends Component
{
	private _initialPosition: number = 0;

	onLoad()
	{
		this._initialPosition = this.node.getWorldPosition().y;

		director.getScene().getChildByName("Canvas").on( Node.EventType.MOUSE_MOVE,
			(event: EventMouse ) => {
				const location = event.getLocation();
				this.node.setWorldPosition(location.x, this._initialPosition, 0);
		})
	}
}