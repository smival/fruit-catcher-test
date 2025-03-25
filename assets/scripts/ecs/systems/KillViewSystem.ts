import NovaECS from "@nova-engine/ecs";
import {GameEngine} from "../GameEngine";
import {ViewComponent} from "../components/ViewComponent";

export class KillViewSystem extends NovaECS.System {
    protected family?: NovaECS.Family;

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        this.family = new NovaECS.FamilyBuilder(engine)
            .include(ViewComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void {
        for (let i = 0; i < this.family.entities.length; i++) {
            const entity = this.family.entities[i];
            if (entity.getComponent(ViewComponent).killed) {
                engine.removeEntity(entity);
            }
        }
    }
}