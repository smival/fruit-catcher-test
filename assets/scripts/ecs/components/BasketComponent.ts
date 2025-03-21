import NovaECS from "@nova-engine/ecs";

export class BasketComponent implements NovaECS.Component {
    constructor(
        public currentX: number = 0,
        public targetX: number = 0,
        public moveSpeed: number = 10, // пикселей в секунду
        public smoothing: number = 0.1
    ) {}
}
