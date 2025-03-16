import {InjectionMapping} from "./InjectionMapping";
import {IInjectable} from "./interfaces/IInjectable";
import {classMap} from "./dependency-injection";
import {Class} from "./type/Type";

export class Kernel
{
    public bind<T extends IInjectable>(constructor: Class<T>): InjectionMapping<T> {

        let result: InjectionMapping<T> = this.getBinding(constructor);
        if (!result) {
            result = new InjectionMapping(classMap, constructor);
        }

        return result;
    }

    public get<K extends T, T extends IInjectable>(constructor: Class<T>): K {
        const mapping: InjectionMapping<IInjectable> = classMap.get(constructor);

        if (!mapping) {
            throw new Error("There is no any binding for " + constructor + " please bind the class before inject()");
        }

        return mapping.getInstance() as K;
    }

    public getBinding<T extends IInjectable>(constructor: Class<T>): InjectionMapping<T> {
        if (!constructor) {
            throw Error("you are trying to get undefined constructor");
        }

        return <InjectionMapping<T>>classMap.get(constructor);
    }

    public activate(): void {
        const injectionsList: InjectionMapping<IInjectable>[] = [];
        classMap.forEach(item => injectionsList.push(item));

        //Then activate
        injectionsList.forEach(
            (item: InjectionMapping<IInjectable>) => {
                if (item.isForceCreation()) {
                    item.getInstance();
                }
            }
        );
    }
}
