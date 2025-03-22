import NovaECS from "@nova-engine/ecs";
import {BasketComponent} from "../components/BasketComponent";
import {MovementComponent} from "../components/MovementComponent";
import {find, Node} from "cc";
import {GameState} from "../../state/GameState";
import {inject} from "../../injects/inject";
import {GameEngine} from "../GameEngine";

export class BasketMovementSystem extends NovaECS.System {
    private readonly basketZoneName: string = "ZoneBasket";
    private basketZone: Node;

    private _gameState: GameState = inject(GameState);
    protected family?: NovaECS.Family;

    public onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        this.basketZone = find(`Canvas/${this.basketZoneName}`);

        this.family = new NovaECS.FamilyBuilder(engine)
            .include(BasketComponent)
            .include(MovementComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void {

        this.family.entities.forEach(entity => {
            const movementComp = entity.getComponent(MovementComponent);
            movementComp.currentX = this._gameState.getState().basketPositionX;
            movementComp.currentY = this.basketZone.getWorldPosition().y;
        });
    }
}
