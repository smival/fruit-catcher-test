import NovaECS from "@nova-engine/ecs";
import { GameEngine } from "../../GameEngine";
import { GameItem } from "../../types/GameConfig";
import { inject } from "../../injects/inject";
import { GameState } from "../../state/GameState";
import { FruitComponent } from "../components/FruitComponent";
import { MovementComponent } from "../components/MovementComponent";
import { EntitiesFactory } from "../../factories/EntitiesFactory";

export class SpawnSystem extends NovaECS.System {
    protected family?: NovaECS.Family;
    private _spawnItems: GameItem[] = [];
    private _nextSpawnTime: number = 0;
    private _spawnInterval: number = 2;
    private _gameState: GameState = inject(GameState);
    private _engine: GameEngine | null = null;

    constructor(priority: number) {
        super();
        this.priority = priority;
    }

    public initSpawnConfig(items: GameItem[]): void {
        this._spawnItems = items;
    }

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);
        this._engine = engine;
        this.family = new NovaECS.FamilyBuilder(engine)
            .include(FruitComponent)
            .include(MovementComponent)
            .build();
    }

    public update(engine: GameEngine, delta: number): void {
        const state = this._gameState.getState();
        if (state.timeLeft <= 0) return;

        this._nextSpawnTime -= delta;
        if (this._nextSpawnTime <= 0) {
            this._spawnFruit();
            this._nextSpawnTime = this._spawnInterval;
        }

        this.family?.entities.forEach(entity => {
            const movement = entity.getComponent<MovementComponent>(MovementComponent);
            if (movement) {
                movement.currentY += movement.velocityY * delta;

                if (movement.currentY < 0) {
                    engine.removeEntity(entity);
                }
            }
        });
    }

    private _spawnFruit(): void {
        if (!this._engine) return;

        const totalWeight = this._spawnItems.reduce((sum, item) => sum + item.weight, 0);
        let randomWeight = Math.random() * totalWeight;

        let selectedItem: GameItem | null = null;
        for (const item of this._spawnItems) {
            randomWeight -= item.weight;
            if (randomWeight <= 0) {
                selectedItem = item;
                break;
            }
        }

        if (!selectedItem) return;

        const entity = EntitiesFactory.createFruitEntity(selectedItem);
        this._engine.addEntity(entity);
    }
}