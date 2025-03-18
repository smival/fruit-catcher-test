import NovaECS from "@nova-engine/ecs";
import { SpawnSystem } from "./ecs/systems/SpawnSystem";
import { GameStateSystem } from "./ecs/systems/GameStateSystem";
import { BasketMovementSystem } from "./ecs/systems/BasketMovementSystem";
import { inject } from "./injects/inject";
import { GameState } from "./state/GameState";
import { GameConfig } from "./types/GameConfig";
import {Utils} from "db://assets/scripts/utils/Utils";

export class GameEngine extends NovaECS.Engine {
    private _gameState: GameState = inject(GameState);
    private readonly _gameSpeed: number = 1;
    private _time = 0;
    private static _instance: GameEngine;

    private _systemsList: NovaECS.System[] = [];
    private _config: GameConfig | null = null;

    constructor() {
        super();
        this._initSystems();
    }

    public static get instance(): GameEngine {
        if (!GameEngine._instance) {
            GameEngine._instance = new GameEngine();
        }
        return GameEngine._instance;
    }

    public init(config: GameConfig): void {
        this._config = config;

        // Устанавливаем начальное время из конфига
        this._gameState.updateTime(config.time);

        // Инициализируем системы с настройками из конфига
        this._systemsList.forEach(system => {
            if (system instanceof SpawnSystem) {
                system.initSpawnConfig(config.items);
            }
        });
    }

    update(dt: number)
    {
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
    }

    private _initSystems(): void {
        this._systemsList = [
            new SpawnSystem(1),
            new GameStateSystem(),
            new BasketMovementSystem()
        ];

        // Добавляем системы в движок
        this._systemsList.forEach(system => this.addSystem(system));
    }
}