import NovaECS from "@nova-engine/ecs";

export class MovementComponent implements NovaECS.Component {
    constructor(
        public velocityY: number = 0,
        public currentX: number = 0,
        public currentY: number = 0
    ) {}
}
