import NovaECS from "@nova-engine/ecs";
import { UITransform } from "cc";

export class HitComponent implements NovaECS.Component {
    constructor(
        public hitTransform: UITransform | null = null,
    ) {}
}
