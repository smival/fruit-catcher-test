import NovaECS from "@nova-engine/ecs";
import { FruitItem } from "../types/GameConfig";
import { FruitComponent } from "../ecs/components/FruitComponent";
import { MovementComponent } from "../ecs/components/MovementComponent";
import { BasketComponent } from "../ecs/components/BasketComponent";
import { GameStateComponent } from "../ecs/components/GameStateComponent";
import { view, Node, UITransform } from "cc";
import {ViewComponent} from "../ecs/components/ViewComponent";

export class EntitiesFactory {
    public static createFruitEntity(fruit: FruitItem, spawnZone: Node): NovaECS.Entity {
        const entity = new NovaECS.Entity();

        // Создаем компонент фрукта
        entity.putComponent(FruitComponent);
        const fruitComponent = entity.getComponent<FruitComponent>(FruitComponent);
        if (fruitComponent) {
            fruitComponent.category = fruit.category;
            fruitComponent.type = fruit.type;
            fruitComponent.points = fruit.points;
            fruitComponent.speed = fruit.speed * 100;
        }

        // Получаем размеры зоны спавна
        const spawnTransform = spawnZone.getComponent(UITransform);
        const spawnWidth = spawnTransform ? spawnTransform.width : view.getVisibleSize().width;
        const spawnPos = spawnZone.getWorldPosition();
        const randomX = spawnPos.x - spawnWidth/2 + Math.random() * spawnWidth;
        const startY = spawnPos.y;

        // Создаем компонент движения
        entity.putComponent(MovementComponent);
        const movementComponent = entity.getComponent<MovementComponent>(MovementComponent);
        if (movementComponent) {
            movementComponent.currentX = randomX;
            movementComponent.currentY = startY;
            movementComponent.velocityY = -fruit.speed;
        }

        entity.putComponent(ViewComponent).prefabPath = `prefabs/fruits/type${fruit.category}/${fruit.type}`;

        return entity;
    }

    public static createBasketEntity(): NovaECS.Entity {
        const entity = new NovaECS.Entity();

        entity.putComponent(BasketComponent);
        entity.putComponent(MovementComponent);
        const movementComponent = entity.getComponent<MovementComponent>(MovementComponent);
        if (movementComponent) {
            movementComponent.currentX = 0;
            movementComponent.currentY = 0;
            movementComponent.velocityY = 0;
        }

        entity.putComponent(ViewComponent).prefabPath = `prefabs/Basket`;

        return entity;
    }

    public static createGameStateEntity(time: number): NovaECS.Entity {
        const entity = new NovaECS.Entity();

        // Создаем компонент состояния игры
        entity.putComponent(GameStateComponent);
        const gameStateComponent = entity.getComponent<GameStateComponent>(GameStateComponent);
        if (gameStateComponent) {
            gameStateComponent.timeLeft = time;
            gameStateComponent.score = 0;
        }

        return entity;
    }
}
