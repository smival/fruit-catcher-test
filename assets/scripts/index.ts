import {Component, _decorator} from "cc"
import {GameEngine} from "db://assets/scripts/GameEngine";
const { ccclass, menu } = _decorator;

@ccclass('index')
@menu('**App/index')
export class index extends Component
{
	private readonly _game = GameEngine.instance;
}