import { CELL_TYPE, CELL_BASENUM, CELL_STATUS, GRID_WIDTH, GRID_HEIGHT, ANITIME } from "./ConstValue";
export default class ScoreModel {
    private _score:number;
    private _scoreView;
    constructor() {
        this._score = 0;
    }

    init(scoreView) {
        this._scoreView = scoreView;
    }

    onBomb (bombType, delay) {
        console.log('on bomb:', bombType);
        if (bombType == "") {
            this._score += 3;
        }
        else if (bombType == CELL_STATUS.LINE || bombType == CELL_STATUS.COLUMN) {
            this._score += 5;
        }
        else if (bombType == CELL_STATUS.WRAP) {
            this._score += 7;
        }

        this._scoreView.modifyScore(this._score, delay);
    }
}