import {_decorator, Component, Label, Animation} from 'cc';
import {ECocosNodeEvents} from "../ECocosNodeEvents";

const { ccclass, menu, property } = _decorator;

@ccclass('CocosFloatingLabel')
@menu('**App/UI/CocosFloatingLabel')
export class CocosFloatingLabel extends Component
{
	@property({ type: Label })
	public label: Label;

	onLoad()
	{
		const animation = this.label.node.getComponent(Animation);
		animation.once(Animation.EventType.FINISHED, () => {
			this.node.emit(ECocosNodeEvents.AnimationComplete);
		});
	}
}