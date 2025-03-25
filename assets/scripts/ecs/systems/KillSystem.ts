import NovaECS from "@nova-engine/ecs";
import {FruitComponent} from "../components/FruitComponent";
import {find, Node} from "cc";
import {GameEngine} from "../GameEngine";
import {HitComponent} from "../components/HitComponent";
import {NodeNames} from "../../NodeNames";
import {PositionComponent} from "../components/PositionComponent";

export class KillSystem extends NovaECS.System {
    private killZone: Node;
    protected family?: NovaECS.Family;
    private _engine: GameEngine | null = null;

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        this.killZone = find(NodeNames.ZoneKill);
        this._engine = engine;
        this.family = new NovaECS.FamilyBuilder(engine)
            .include(FruitComponent)
            .include(HitComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void {
        const killZoneY: number = this.killZone.getWorldPosition().y;
        for (let i = 0; i < this.family.entities.length; i++) {
            const entity = this.family.entities[i];
            const posComp = entity.getComponent(PositionComponent);
            if (posComp) {
                if (posComp.currentY < killZoneY) {
                    engine.removeEntity(entity);
                }
            }
            const hitComp = entity.getComponent(HitComponent);
            if (hitComp.hitOccurred) {
                engine.removeEntity(entity);
            }
        }
    }
}