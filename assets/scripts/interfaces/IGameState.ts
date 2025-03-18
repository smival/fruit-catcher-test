export interface IGameState {
    readonly timeLeft: number;
    readonly score: number;
    readonly basketPosition: { x: number };
}

export interface IGameStateWriter {
    setBasketTargetPosition(x: number): void;
    addScore(points: number): void;
    updateTime(timeLeft: number): void;
}

export interface IGameStateReader {
    getState(): IGameState;
}
