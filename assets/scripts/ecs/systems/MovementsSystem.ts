import NovaECS from "@nova-engine/ecs";
import {GameEngine} from "../GameEngine";
import {MovementComponent} from "../components/MovementComponent";
import {PositionComponent} from "../components/PositionComponent";

export class MovementsSystem extends NovaECS.System {
    protected family?: NovaECS.Family;

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        this.family = new NovaECS.FamilyBuilder(engine)
            .include(MovementComponent)
            .build();
    }

    update(engine: GameEngine, delta: number): void {
        for (let i = 0; i < this.family.entities.length; i++)
        {
            const entity = this.family.entities[i];
            const movementComp = entity.getComponent(MovementComponent);
            const posComp: PositionComponent = entity.getComponent(PositionComponent);
            posComp.currentX += movementComp.velocityX * delta;
            posComp.currentY += movementComp.velocityY * delta;
        }
    }
}
