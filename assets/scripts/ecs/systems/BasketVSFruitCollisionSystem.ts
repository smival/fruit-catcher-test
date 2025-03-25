import NovaECS from "@nova-engine/ecs";
import {GameEngine} from "../GameEngine";
import {FruitComponent} from "../components/FruitComponent";
import {BasketComponent} from "../components/BasketComponent";
import {HitComponent} from "../components/HitComponent";

export class BasketVSFruitCollisionSystem extends NovaECS.System {
    protected familyFruits?: NovaECS.Family;
    protected familyBasket?: NovaECS.Family;

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        this.familyFruits = new NovaECS.FamilyBuilder(engine)
            .include(FruitComponent)
            .include(HitComponent)
            .build();

        this.familyBasket = new NovaECS.FamilyBuilder(engine)
            .include(BasketComponent)
            .include(HitComponent)
            .build();
    }

    update(engine: GameEngine, delta: number): void {
        for (let i = 0; i < this.familyBasket.entities.length; i++) {
            const entity1 = this.familyBasket.entities[i];
            const box1 = entity1.getComponent(HitComponent).hitTransform?.getBoundingBoxToWorld();

            if (!box1) continue;

            for (let j = 0; j < this.familyFruits.entities.length; j++) {
                const entity2 = this.familyFruits.entities[j];
                const hitComp = entity2.getComponent(HitComponent);
                const box2 = hitComp.hitTransform?.getBoundingBoxToWorld();

                if (!box2) continue;

                if (box1.intersects(box2)) {
                    hitComp.killed = true;
                }
            }
        }
    }
}
