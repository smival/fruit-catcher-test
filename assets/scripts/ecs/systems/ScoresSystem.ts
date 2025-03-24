import NovaECS from "@nova-engine/ecs";
import {FruitComponent} from "../components/FruitComponent";
import {GameEngine} from "../GameEngine";
import {HitComponent} from "../components/HitComponent";
import {GameState} from "../../state/GameState";
import {inject} from "../../injects/inject";
import {EntitiesFactory} from "../../factories/EntitiesFactory";
import {PositionComponent} from "../components/PositionComponent";
import {Vec3} from "cc";

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

            if (hitComp.hitOccurred) {
                const fruitComp = entity.getComponent(FruitComponent);
                const posComp = entity.getComponent(PositionComponent);

                engine.removeEntity(entity);
                engine.addEntity(EntitiesFactory.createScoreEntity(
                    new Vec3(posComp.currentX, posComp.currentY), fruitComp.points)
                );
                this.gameState.addScore(fruitComp.points);
            }
        }

    }
}