export type DynamicObject = Partial<Dynamic>;

export interface Dynamic {
    [key: string]: any;
}

export type Abstract<T> = Exclude<Function & { prototype: T }, Constructor<T>>;
// export type Abstract<T> = Function & { prototype: T };
export type Constructor<T> = new (...args: any[]) => T;
export type Class<T> = Abstract<T> | Constructor<T>;
