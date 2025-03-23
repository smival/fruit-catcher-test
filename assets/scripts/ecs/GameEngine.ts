import NovaECS from "@nova-engine/ecs";
import {inject} from "../injects/inject";
import {GameState} from "../state/GameState";
import {GameConfig} from "../types/GameConfig";
import {SpawnKillSystem} from "./systems/SpawnKillSystem";
import {ViewSystem} from "./systems/ViewSystem";
import {BasketMovementSystem} from "./systems/BasketMovementSystem";
import {EntitiesFactory} from "../factories/EntitiesFactory";
import {Utils} from "../utils/Utils";
import {CollisionSystem} from "./systems/CollisionSystem";
import {ScoresSystem} from "./systems/ScoresSystem";
import {ItemsPool} from "../pool/ItemsPool";

export class GameEngine extends NovaECS.Engine {
    private _gameState: GameState = inject(GameState);
    private readonly _gameSpeed: number = 1;
    private _time = 0;
    private static _instance: GameEngine;

    private _systemsList: NovaECS.System[] = [];
    private _config: GameConfig | null = null;
    private _viewPoolMap: Map<string, ItemsPool> = new Map<string, ItemsPool>(); // prefab path / pool

    constructor() {
        super();
    }

    public get config(): GameConfig
    {
        return this._config;
    }

    public static get instance(): GameEngine {
        if (!GameEngine._instance) {
            GameEngine._instance = new GameEngine();
        }
        return GameEngine._instance;
    }

    public init(config: GameConfig): void {
        this._config = config;
        this._initSystems();
        this._gameState.startTime(config.time);
    }

    public clean(): void
    {
        this._systemsList.forEach(system => this.removeSystem(system));
        this.entities.forEach(entity => this.removeEntity(entity));
        this._gameState.clean();
    }

    update(dt: number): boolean {
        const maxFPS = 60;
        const minFPS = 30;
        const frameTime = 1 / maxFPS;

        this._time += dt * this._gameSpeed;
        let count = Math.min(
            Math.floor(this._time / frameTime),
            maxFPS / minFPS
        );
        if (this._time / frameTime > 0.99) {
            count = count < 1 ? 1 : count;
            for (let i = 0; i < count; i++) {
                super.update(Utils.roundTo(frameTime * 1000, 5));
                this._time -= frameTime;
            }
        }

        this._gameState.spendTime(frameTime * count);

        return this._gameState.getState().timeLeft >= 1;
    }

    private _initSystems(): void {
        this._systemsList = [
            new SpawnKillSystem(),
            new ViewSystem(this._viewPoolMap),
            new CollisionSystem(),
            new ScoresSystem(),
            new BasketMovementSystem()
        ];

        this.addEntity(EntitiesFactory.createBasketEntity());
        this._systemsList.forEach(system => this.addSystem(system));
    }
}