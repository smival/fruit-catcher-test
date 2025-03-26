import NovaECS from "@nova-engine/ecs";
import {GameEngine} from "../GameEngine";
import {FruitComponent} from "../components/FruitComponent";
import {BasketComponent} from "../components/BasketComponent";
import {HitComponent} from "../components/HitComponent";

export class BasketVSFruitCollisionSystem extends NovaECS.System
{
	protected familyFruits?: NovaECS.Family;
	protected familyBasket?: NovaECS.Family;

	onAttach(engine: GameEngine): void
	{
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

	update(engine: GameEngine, delta: number): void
	{
		for (let i = 0; i < this.familyBasket.entities.length; i++)
		{
			const basketEntity = this.familyBasket.entities[i];
			const basketBox = basketEntity.getComponent(HitComponent).hitTransform?.getBoundingBoxToWorld();

			if (!basketBox) continue;

			for (let j = 0; j < this.familyFruits.entities.length; j++)
			{
				const fruitEntity = this.familyFruits.entities[j];
				const fruitHitComp = fruitEntity.getComponent(HitComponent);
				const fruitBox = fruitHitComp.hitTransform?.getBoundingBoxToWorld();

				if (!fruitBox) continue;

				if (basketBox.intersects(fruitBox)
					&& fruitBox.y >= basketBox.y)
				{
					fruitHitComp.killed = true;
				}
			}
		}
	}
}
