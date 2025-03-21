export interface IGameState {
    readonly timeLeft: number;
    readonly score: number;
    readonly basketPositionX: number;
}

export interface IGameStateWriter {
    setBasketTargetPosition(x: number): void;
    addScore(points: number): void;
    startTime(timeLeft: number): void;
    spendTime(time: number): void;
}

export interface IGameStateReader {
    getState(): IGameState;
}
