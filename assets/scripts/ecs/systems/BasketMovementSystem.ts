import NovaECS from "@nova-engine/ecs";
import { GameEngine } from "../../GameEngine";
import { BasketComponent } from "../components/BasketComponent";
import { MovementComponent } from "../components/MovementComponent";

export class BasketMovementSystem extends NovaECS.System {
    protected family?: NovaECS.Family;

    public onAttach(engine: GameEngine): void {
        super.onAttach(engine);
        
        this.family = new NovaECS.FamilyBuilder(engine)
            .include(BasketComponent)
            .include(MovementComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void {
        if (!this.family) return;

        // Обновляем позиции всех корзин
        this.family.entities.forEach(entity => {
            const basket = entity.getComponent<BasketComponent>(BasketComponent);
            const movement = entity.getComponent<MovementComponent>(MovementComponent);
            
            if (!basket || !movement) return;

            // Плавное движение корзины к целевой позиции
            const currentPos = movement.currentX;
            const targetPos = basket.targetX;

            if (Math.abs(currentPos - targetPos) > 0.1) {
                // Интерполяция между текущей и целевой позицией
                const newX = currentPos + (targetPos - currentPos) * basket.smoothing;

                // Ограничение скорости движения
                const maxMove = basket.moveSpeed * delta;
                const actualMove = Math.min(Math.abs(newX - currentPos), maxMove);
                const direction = newX > currentPos ? 1 : -1;

                movement.currentX = currentPos + actualMove * direction;
            }
        });
    }
}
