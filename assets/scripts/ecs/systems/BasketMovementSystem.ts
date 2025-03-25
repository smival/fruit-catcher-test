import NovaECS from "@nova-engine/ecs";
import {BasketComponent} from "../components/BasketComponent";
import {find, Node} from "cc";
import {GameState} from "../../state/GameState";
import {inject} from "../../injects/inject";
import {GameEngine} from "../GameEngine";
import {NodeNames} from "../../NodeNames";
import {EntitiesFactory} from "../../factories/EntitiesFactory";
import {PositionComponent} from "../components/PositionComponent";

export class BasketMovementSystem extends NovaECS.System
{
	protected family?: NovaECS.Family;
	private basketZone: Node;
	private _gameState: GameState = inject(GameState);

	public onAttach(engine: GameEngine): void
	{
		super.onAttach(engine);

		this.basketZone = find(NodeNames.ZoneBasket);
		engine.addEntity(EntitiesFactory.createBasketEntity());

		this.family = new NovaECS.FamilyBuilder(engine)
			.include(BasketComponent)
			.build();
	}

	public update(engine: GameEngine, delta: number): void
	{
		for (let i = 0; i < this.family.entities.length; i++)
		{
			const entity = this.family.entities[i];
			const posComp = entity.getComponent(PositionComponent);
			posComp.currentX = this._gameState.getState().basketPositionX;
			posComp.currentY = this.basketZone.getWorldPosition().y;
		}

	}
}
