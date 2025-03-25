import NovaECS from "@nova-engine/ecs";

export class PositionComponent implements NovaECS.Component {
    static tag: string = "PositionComponent";
    constructor(
        public currentX: number = 0,
        public currentY: number = 0
    ) {}
}
