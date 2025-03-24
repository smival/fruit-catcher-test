import NovaECS from "@nova-engine/ecs";

export class MovementComponent implements NovaECS.Component {
    constructor(
        public velocityX: number = 0,
        public velocityY: number = 0
    ) {}
}
