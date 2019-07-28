const {ccclass, property} = cc._decorator;
@ccclass
export class GmView extends cc.Component {
    private _edit: cc.EditBox = null;
    private _button: cc.Button = null;
    @property(cc.Prefab)
    public gm: cc.Prefab = null;
    private _gm: cc.Node = null;
    private _attachList: Array<any> = [];
    onLoad () {
        this._gm = cc.instantiate(this.gm);
        this.node.addChild(this._gm);
        this._gm.setPosition(cc.v2(41, 490));
        let gmbutton = cc.find("gm_button", this._gm);
        this._edit = cc.find("gm_edit", this._gm).getComponent(cc.EditBox);
        gmbutton.on("click", (button)=>{
            console.log('on click', this._edit.string);
            for (let objs of this._attachList) {
                let obj = objs[0];
                let func = objs[1]
                func.call(obj, this._edit.string);
            }
        })
    }

    attach(obj: object, func) {
        this._attachList.push([obj, func]);
    }
}