import NovaECS from "@nova-engine/ecs";
import {GameState} from "../../state/GameState";
import {inject} from "../../injects/inject";
import {GameEngine} from "../GameEngine";

export class GameOverSystem extends NovaECS.System {
    private _gameState: GameState = inject(GameState);

    public update(engine: GameEngine, delta: number): void {

    }
}
