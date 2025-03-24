import NovaECS from "@nova-engine/ecs";
import {FruitItem} from "../../types/GameConfig";
import { FruitComponent } from "../components/FruitComponent";
import { EntitiesFactory } from "../../factories/EntitiesFactory";
import { Node, find } from "cc";
import {GameEngine} from "../GameEngine";
import {HitComponent} from "../components/HitComponent";
import {NodeNames} from "../../NodeNames";
import {PositionComponent} from "../components/PositionComponent";

export class SpawnKillSystem extends NovaECS.System {
    private spawnZone: Node;
    private killZone: Node;

    protected family?: NovaECS.Family;
    private _spawnItems: FruitItem[] = [];
    private _nextSpawnTime: number = 0;
    private _spawnInterval: number;
    private _engine: GameEngine | null = null;

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        this._spawnItems = engine.config.items;
        this._spawnInterval = engine.config.rate;

        this.spawnZone = find(NodeNames.ZoneSpawn);
        this.killZone = find(NodeNames.ZoneKill);

        this._engine = engine;
        this.family = new NovaECS.FamilyBuilder(engine)
            .include(FruitComponent)
            .include(HitComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void {
        this._nextSpawnTime -= delta;
        if (this._nextSpawnTime <= 0) {
            this._spawnFruit();
            this._nextSpawnTime = this._spawnInterval;
        }

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

    private _spawnFruit(): void {
        const totalWeight = this._spawnItems.reduce((sum, item) => sum + item.weight, 0);
        let randomWeight = Math.random() * totalWeight;

        let selectedItem: FruitItem | null = null;
        for (const item of this._spawnItems) {
            randomWeight -= item.weight;
            if (randomWeight <= 0) {
                selectedItem = item;
                break;
            }
        }

        if (!selectedItem) return;

        const entity = EntitiesFactory.createFruitEntity(selectedItem, this.spawnZone);
        this._engine.addEntity(entity);
    }
}