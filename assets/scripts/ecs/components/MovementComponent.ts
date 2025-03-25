import NovaECS from "@nova-engine/ecs";

export class MovementComponent implements NovaECS.Component
{
    static tag: string = "MovementComponent";

    constructor(
        public velocityX: number = 0,
        public velocityY: number = 0
    )
    {
    }
}
