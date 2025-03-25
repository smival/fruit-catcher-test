import NovaECS from "@nova-engine/ecs";
import { UITransform } from "cc";
import {IKillableProps} from "./IKillable";

export class HitComponent implements NovaECS.Component, IKillableProps {
    constructor(
        public hitTransform: UITransform | null = null,
        public killed: boolean = false
    ) {}
}
