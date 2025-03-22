import NovaECS from "@nova-engine/ecs";
import {GameState} from "db://assets/scripts/state/GameState";
import {inject} from "db://assets/scripts/injects/inject";
import {GameEngine} from "db://assets/scripts/ecs/GameEngine";

export class GameOverSystem extends NovaECS.System {
    private _gameState: GameState = inject(GameState);

    public update(engine: GameEngine, delta: number): void {

    }
}
