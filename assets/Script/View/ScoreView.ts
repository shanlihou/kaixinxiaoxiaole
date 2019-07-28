const {ccclass, property} = cc._decorator;
@ccclass
export class ScoreView extends cc.Component {

    onLoad () {
        let label = this.getComponent(cc.Label);
        label.string = "score:0";
    }

    modifyScore(score, delay) {
        this.scheduleOnce((dt) =>{
            let label = this.getComponent(cc.Label);
            label.string = "score:" + score;
        }, delay);
    }
}