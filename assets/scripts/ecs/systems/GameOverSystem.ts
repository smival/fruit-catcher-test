import NovaECS from "@nova-engine/ecs";
import {GameEngine} from "../../GameEngine";
import {GameState} from "db://assets/scripts/state/GameState";
import {inject} from "db://assets/scripts/injects/inject";

export class GameOverSystem extends NovaECS.System {
    private _gameState: GameState = inject(GameState);

    public update(engine: GameEngine, delta: number): void {

    }
}
