import NovaECS from "@nova-engine/ecs";
import { UITransform } from "cc";
import {IKillableProps} from "./IKillable";

export class HitComponent implements NovaECS.Component, IKillableProps {
    static tag: string = "HitComponent";
    constructor(
        public hitTransform: UITransform | null = null,
        public killed: boolean = false
    ) {}
}
