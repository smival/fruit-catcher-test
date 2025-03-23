import NovaECS from "@nova-engine/ecs";
import {FruitComponent} from "../components/FruitComponent";
import {GameEngine} from "../GameEngine";
import {HitComponent} from "../components/HitComponent";
import {GameState} from "../../state/GameState";
import {inject} from "../../injects/inject";

export class ScoresSystem extends NovaECS.System {
    protected family?: NovaECS.Family;
    protected gameState: GameState = inject(GameState);

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);
        this.family = new NovaECS.FamilyBuilder(engine)
            .include(FruitComponent)
            .include(HitComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void {
        for (let i = 0; i < this.family.entities.length; i++) {
            const entity = this.family.entities[i];
            const hitComp = entity.getComponent(HitComponent);
            const fruitComp = entity.getComponent(FruitComponent);

            if (hitComp.hitOccurred) {
                engine.removeEntity(entity);
                this.gameState.addScore(fruitComp.points);
            }
        }

    }
}