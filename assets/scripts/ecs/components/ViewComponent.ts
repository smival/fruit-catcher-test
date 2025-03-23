import NovaECS from "@nova-engine/ecs";
import { Node } from "cc";

export class ViewComponent implements NovaECS.Component {
    constructor(
        public node: Node | null = null,
        public prefabPath: string = ""
    ) {}
}
