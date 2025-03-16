import {instantiate, Node, Prefab} from "cc";
import {AbstractPool} from "db://assets/scripts/pool/AbstractPool";

export class ItemsPool extends AbstractPool<Node> {
	constructor(protected prefab: Prefab)
	{
		super();
	}

	protected createNewInstance(): Node {
		return instantiate(this.prefab);
	}
}