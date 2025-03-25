import NovaECS from "@nova-engine/ecs";
import {Node} from "cc";
import {CocosFactoryFunc} from "../../factories/CocosFactory";
import {IKillableProps} from "./IKillable";
import {ECocosNodeEvents} from "../../cocosComponents/ECocosNodeEvents";

export class ViewComponent<T = any> implements NovaECS.Component, IKillableProps
{
    tag: string = "ViewComponent";

    constructor(
        private _node: Node | null = null,
        public prefabPath: string = "",
        public data: T | null = null,
        public factoryFunc: CocosFactoryFunc | null = null,
        public killed: boolean = false
    )
    {
    }

    get node(): Node
    {
        return this._node;
    }

    set node(value: Node)
    {
        this._node = value;

        if (!value) return;

        if (this.data && this.factoryFunc)
            this.factoryFunc(this.node, this.data);

        this._node.once(ECocosNodeEvents.AnimationComplete, () =>
        {
            this.killed = true;
        });
    }
}
