import NovaECS from "@nova-engine/ecs";
import { EItemsCategory } from "../../types/EItemsCategory";

export class FruitComponent implements NovaECS.Component {
    constructor(
        public category: EItemsCategory = EItemsCategory.A,
        public type: string = "",
        public points: number = 0
    ) {}
}
