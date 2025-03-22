import NovaECS from "@nova-engine/ecs";
import { Utils } from "db://assets/scripts/utils/Utils";
import { EntitiesFactory } from "db://assets/scripts/factories/EntitiesFactory";
import {GameState} from "db://assets/scripts/state/GameState";
import {inject} from "db://assets/scripts/injects/inject";
import {GameConfig} from "db://assets/scripts/types/GameConfig";
import {SpawnKillSystem} from "db://assets/scripts/ecs/systems/SpawnKillSystem";
import {ViewSystem} from "db://assets/scripts/ecs/systems/ViewSystem";
import {BasketMovementSystem} from "db://assets/scripts/ecs/systems/BasketMovementSystem";

export class GameEngine extends NovaECS.Engine {
    private _gameState: GameState = inject(GameState);
    private readonly _gameSpeed: number = 1;
    private _time = 0;
    private static _instance: GameEngine;

    private _systemsList: NovaECS.System[] = [];
    private _config: GameConfig | null = null;

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
            new ViewSystem(),
            new BasketMovementSystem()
        ];

        this.addEntity(EntitiesFactory.createBasketEntity());

        // Добавляем системы в движок
        this._systemsList.forEach(system => this.addSystem(system));
    }
}