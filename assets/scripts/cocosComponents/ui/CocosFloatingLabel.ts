import {_decorator, Component, Label} from 'cc';

const { ccclass, menu, property } = _decorator;

@ccclass('CocosFloatingLabel')
@menu('**App/UI/CocosFloatingLabel')
export class CocosFloatingLabel extends Component
{
	@property({ type: Label })
	public label: Label;
}