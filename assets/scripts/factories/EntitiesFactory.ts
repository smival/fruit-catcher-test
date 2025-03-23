import NovaECS from "@nova-engine/ecs";
import { FruitItem } from "../types/GameConfig";
import { FruitComponent } from "../ecs/components/FruitComponent";
import { MovementComponent } from "../ecs/components/MovementComponent";
import { BasketComponent } from "../ecs/components/BasketComponent";
import { view, Node, UITransform } from "cc";
import {ViewComponent} from "../ecs/components/ViewComponent";
import {HitComponent} from "../ecs/components/HitComponent";

export class EntitiesFactory {
    public static createFruitEntity(fruit: FruitItem, spawnZone: Node): NovaECS.Entity {
        const entity = new NovaECS.Entity();

        entity.putComponent(FruitComponent);
        const fruitComponent = entity.getComponent<FruitComponent>(FruitComponent);
        if (fruitComponent) {
            fruitComponent.category = fruit.category;
            fruitComponent.type = fruit.type;
            fruitComponent.points = fruit.points;
        }

        const spawnTransform = spawnZone.getComponent(UITransform);
        const spawnWidth = spawnTransform ? spawnTransform.width : view.getVisibleSize().width;
        const spawnPos = spawnZone.getWorldPosition();
        const randomX = spawnPos.x - spawnWidth/2 + Math.random() * spawnWidth;
        const startY = spawnPos.y;

        entity.putComponent(MovementComponent);
        const movementComponent = entity.getComponent<MovementComponent>(MovementComponent);
        if (movementComponent) {
            movementComponent.currentX = randomX;
            movementComponent.currentY = startY;
            movementComponent.velocityY = -fruit.speed;
        }

        entity.putComponent(ViewComponent).prefabPath = `prefabs/fruits/type${fruit.category}/${fruit.type}`;
        entity.putComponent(HitComponent);

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
        entity.putComponent(HitComponent);

        return entity;
    }
}
