import { IGameState, IGameStateReader, IGameStateWriter } from '../interfaces/IGameState';
import {singleton} from "db://assets/scripts/injects/decorators/singleton";

@singleton()
export class GameState implements IGameStateReader, IGameStateWriter {
    private _timeLeft: number = 0;
    private _score: number = 0;
    private _basketTargetX: number = 0;

    public setBasketTargetPosition(x: number): void {
        this._basketTargetX = x;
    }

    public addScore(points: number): void {
        this._score += points;
    }

    public updateTime(timeLeft: number): void {
        this._timeLeft = timeLeft;
    }

    public getState(): IGameState {
        return {
            timeLeft: this._timeLeft,
            score: this._score,
            basketPosition: { x: this._basketTargetX }
        };
    }
}
