import NovaECS from "@nova-engine/ecs";
import { GameStateComponent } from "../components/GameStateComponent";
import { IGameState, IGameStateReader, IGameStateWriter } from "../../interfaces/IGameState";
import { GameEngine } from "../../GameEngine";
import { EntitiesFactory } from "../../factories/EntitiesFactory";

export class GameStateSystem extends NovaECS.System implements IGameStateReader, IGameStateWriter {
    protected family?: NovaECS.Family;
    private _stateEntity: NovaECS.Entity | null = null;

    constructor() {
        super();
    }

    public onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        // Создаем семейство для отслеживания сущностей с GameStateComponent
        this.family = new NovaECS.FamilyBuilder(engine)
            .include(GameStateComponent)
            .build();

        // Создаем единственную сущность для хранения состояния игры через фабрику
        this._stateEntity = EntitiesFactory.createGameStateEntity();
        engine.addEntity(this._stateEntity);
    }

    public update(engine: GameEngine, delta: number): void {
        if (!this._stateEntity) return;

        const state = this._stateEntity.getComponent(GameStateComponent);
        if (!state) return;

        // Обновляем время
        if (state.timeLeft > 0) {
            state.timeLeft -= delta;
        }
    }

    // Реализация IGameStateWriter
    public setBasketTargetPosition(x: number): void {
        if (!this._stateEntity) return;
        const state = this._stateEntity.getComponent(GameStateComponent);
        if (state) {
            state.basketTargetX = x;
        }
    }

    public addScore(points: number): void {
        if (!this._stateEntity) return;
        const state = this._stateEntity.getComponent(GameStateComponent);
        if (state) {
            state.score += points;
        }
    }

    public updateTime(timeLeft: number): void {
        if (!this._stateEntity) return;
        const state = this._stateEntity.getComponent(GameStateComponent);
        if (state) {
            state.timeLeft = timeLeft;
        }
    }

    // Реализация IGameStateReader
    public getState(): IGameState {
        if (!this._stateEntity) {
            return { timeLeft: 0, score: 0, basketPosition: { x: 0 } };
        }

        const state = this._stateEntity.getComponent(GameStateComponent);
        if (!state) {
            return { timeLeft: 0, score: 0, basketPosition: { x: 0 } };
        }

        return {
            timeLeft: state.timeLeft,
            score: state.score,
            basketPosition: { x: state.basketTargetX }
        };
    }
}
