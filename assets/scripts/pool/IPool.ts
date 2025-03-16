export interface IPool<T> {
	obtain(): T;
	release(pObject: T): void;
}