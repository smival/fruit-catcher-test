import NovaECS from "@nova-engine/ecs";
import { GameItem } from "../types/GameConfig";
import { FruitComponent } from "../ecs/components/FruitComponent";
import { MovementComponent } from "../ecs/components/MovementComponent";
import { BasketComponent } from "../ecs/components/BasketComponent";
import { GameStateComponent } from "../ecs/components/GameStateComponent";
import { view } from "cc";

export class EntitiesFactory {
    public static createFruitEntity(item: GameItem): NovaECS.Entity {
        const entity = new NovaECS.Entity();

        // Создаем компонент фрукта
        entity.putComponent(FruitComponent);
        const fruitComponent = entity.getComponent<FruitComponent>(FruitComponent);
        if (fruitComponent) {
            fruitComponent.category = item.category;
            fruitComponent.type = item.type;
            fruitComponent.points = item.points;
            fruitComponent.speed = item.speed;
        }

        // Случайная позиция по X в пределах экрана
        const screenWidth = view.getVisibleSize().width;
        const randomX = Math.random() * screenWidth;
        const startY = view.getVisibleSize().height + 50; // Немного выше экрана

        // Создаем компонент движения
        entity.putComponent(MovementComponent);
        const movementComponent = entity.getComponent<MovementComponent>(MovementComponent);
        if (movementComponent) {
            movementComponent.velocityY = -item.speed;
            movementComponent.currentX = randomX;
            movementComponent.currentY = startY;
        }

        return entity;
    }

    public static createBasketEntity(initialX: number = 0): NovaECS.Entity {
        const entity = new NovaECS.Entity();

        // Создаем компонент корзины
        entity.putComponent(BasketComponent);
        const basketComponent = entity.getComponent<BasketComponent>(BasketComponent);
        if (basketComponent) {
            basketComponent.currentX = initialX;
            basketComponent.targetX = initialX;
        }

        // Добавляем компонент движения для корзины
        entity.putComponent(MovementComponent);
        const movementComponent = entity.getComponent<MovementComponent>(MovementComponent);
        if (movementComponent) {
            movementComponent.velocityY = 0;
            movementComponent.currentX = initialX;
            movementComponent.currentY = 0;
        }

        return entity;
    }

    public static createGameStateEntity(
        timeLeft: number = 0,
        score: number = 0,
        basketTargetX: number = 0
    ): NovaECS.Entity {
        const entity = new NovaECS.Entity();

        // Создаем компонент состояния игры
        entity.putComponent(GameStateComponent);
        const stateComponent = entity.getComponent<GameStateComponent>(GameStateComponent);
        if (stateComponent) {
            stateComponent.timeLeft = timeLeft;
            stateComponent.score = score;
            stateComponent.basketTargetX = basketTargetX;
        }

        return entity;
    }
}
