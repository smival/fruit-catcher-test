import {_decorator, Component, Label} from 'cc';
import {ECocosNodeEvents} from "../ECocosNodeEvents";
import {AnimationsUtils} from "../../utils/AnimationsUtils";

const {ccclass, menu, property} = _decorator;

@ccclass('CocosFloatingLabel')
@menu('**App/UI/CocosFloatingLabel')
export class CocosFloatingLabel extends Component
{
	@property({type: Label})
	public label: Label;

	onEnable()
	{
		AnimationsUtils.playAnimation(this.label.node).then(() =>
		{
			this.node.emit(ECocosNodeEvents.AnimationComplete);
		});
	}
}