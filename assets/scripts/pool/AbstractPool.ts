import {IPool} from "./IPool";

export abstract class AbstractPool<T> implements IPool<T> {
	protected readonly objects: T[] = [];

	init(pSize: number) {
		for (let i = 0; i < pSize; i++) {
			this.release(this.createNewInstance());
		}
		return this;
	}

	obtain(): T {
		return this.objects.pop() || this.createNewInstance();
	}

	release(pObject: T): void {
		this.objects.push(pObject);
	}

	protected abstract createNewInstance(): T;
}
