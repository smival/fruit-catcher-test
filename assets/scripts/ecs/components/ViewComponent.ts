import NovaECS from "@nova-engine/ecs";
import { Node } from "cc";
import {CocosFactoryFunc} from "../../factories/CocosFactory";

export class ViewComponent<T = any> implements NovaECS.Component {
    constructor(
        private _node: Node | null = null,
        public prefabPath: string = "",

        public data: T | null = null,
        public factoryFunc: CocosFactoryFunc | null = null
    ) {}

    get node(): Node
    {
        return this._node;
    }

    set node(value: Node)
    {
        this._node = value;
        if (this.data && this.factoryFunc)
            this.factoryFunc(this.node, this.data);
    }
}
