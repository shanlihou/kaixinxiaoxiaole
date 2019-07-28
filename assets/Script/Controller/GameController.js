import GameModel from "../Model/GameModel";
import ScoreModel from "../Model/ScoreModel";
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        grid:{
            default: null,
            type: cc.Node
        },
        return:{
            default: null,
            type: cc.Node
        },
        scoreLabel: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        this.gameModel = new GameModel();
        let scoreModel = new ScoreModel();
        this.gameModel.init(6, scoreModel);
        let scoreView = this.scoreLabel.getComponent("ScoreView");
        scoreModel.init(scoreView);
        let gridScript = this.grid.getComponent("GridView");
        gridScript.setController(this);
        gridScript.initWithCellModels(this.gameModel.getCells());

        let gm = this.node.getComponent("GmView");
        gm.attach(this, this.onGm);
    },
    onGm: (str)=>{
        console.log("on gm:", str);
    },

    selectCell: function(pos){
        return this.gameModel.selectCell(pos);
    },
    cleanCmd: function(){
        this.gameModel.cleanCmd();
    },
    onReturn: function() {
        cc.director.loadScene("Login")
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // }, 
});
