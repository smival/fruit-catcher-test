import NovaECS from "@nova-engine/ecs";

export class PositionComponent implements NovaECS.Component {
    constructor(
        public currentX: number = 0,
        public currentY: number = 0
    ) {}
}
