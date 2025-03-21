import { IGameState, IGameStateReader, IGameStateWriter } from '../interfaces/IGameState';
import {singleton} from "db://assets/scripts/injects/decorators/singleton";

@singleton()
export class GameState implements IGameStateReader, IGameStateWriter {
    private _timeLeft: number = 0;
    private _score: number = 0;
    private _basketTargetX: number = 0;

    public setBasketTargetPosition(x: number): void {
        this._basketTargetX = x;
        //console.log("setBasketTargetPosition", this._basketTargetX);
    }

    public addScore(points: number): void {
        this._score += points;
    }

    public startTime(timeLeft: number): void {
        this._timeLeft = timeLeft;
    }

    public spendTime(time: number): void {
        this._timeLeft -= time;
    }

    public getState(): IGameState {
        return {
            timeLeft: this._timeLeft,
            score: this._score,
            basketPositionX: this._basketTargetX
        };
    }

    public clean(): void {
        this._timeLeft = 0;
        this._score = 0;
        this._basketTargetX = 0;
    }
}
