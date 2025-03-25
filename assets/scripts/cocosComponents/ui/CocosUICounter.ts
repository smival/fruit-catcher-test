import {_decorator, CCString, Component, Enum, Label} from 'cc';
import {formatHandlers, FormatType} from "../../utils/FormatUtils";
import {inject} from "../../injects/inject";
import {GameState} from "../../state/GameState";

const {ccclass, menu, property, requireComponent} = _decorator;

@ccclass('UICounter')
@menu('**App/UI/UICounter')
@requireComponent(Label)
export class CocosUICounter extends Component
{
	@property({type: CCString})
	public property: string;

	@property({type: Enum(FormatType)})
	public formatter: FormatType = FormatType.NoFormat;

	private _label: Label;
	private _state: GameState = inject(GameState);

	onLoad(): void
	{
		this._label = this.getComponent(Label);
	}

	update(dt: number): void
	{
		const value: number = this._state.getState()[this.property];
		const formatFunc: (v: number) => string = formatHandlers[this.formatter];

		this._label.string = formatFunc(value);
	}
}