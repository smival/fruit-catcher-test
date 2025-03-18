import NovaECS from "@nova-engine/ecs";

export class GameStateComponent implements NovaECS.Component {
    constructor(
        public timeLeft: number = 0,
        public score: number = 0,
        public basketTargetX: number = 0
    ) {}
}
