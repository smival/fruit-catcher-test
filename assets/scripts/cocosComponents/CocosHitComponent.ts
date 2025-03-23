import {_decorator, Node, Component} from 'cc';

const { ccclass, menu, property} = _decorator;

@ccclass('HitComponent')
@menu('**App/HitComponent')
export class CocosHitComponent extends Component {
    @property({ type: Node })
    public hitNode: Node;
}