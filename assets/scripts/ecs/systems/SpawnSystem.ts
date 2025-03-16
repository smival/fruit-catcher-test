import NovaECS from "@nova-engine/ecs";
import {GameEngine} from "db://assets/scripts/GameEngine";
//import {SpawnComponent} from "../components/SpawnComponent";
//import {GameEngine} from "../GameEngine";
//import {Utils} from "../Utils";
//import {GameSystem} from "./GameSystem";

export class SpawnSystem extends NovaECS.System
{
    protected family?: NovaECS.Family;

    constructor(priority: number)
    {
        super();
        this.priority = priority;
    }

    onAttach(engine: GameEngine)
    {
        super.onAttach(engine);
        this.family = new NovaECS.FamilyBuilder(engine)
            //.include(SpawnComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void
    {
        this.family.entities.forEach(entity =>
        {
            //const comp = entity.getComponent(SpawnComponent);
            //comp.currentTime += Utils.getDeltaInSec(delta);
        });
    }
}