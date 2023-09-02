/*:
@target MZ
@plugindesc 删除触摸UI并相应地重新定位菜单
@author TheoAllen 汉化:硕明云书
@help 
版本0.1 可商用
这个插件移除触摸UI。重新放置所有的窗户。以及
在选项菜单中删除它的选项。
建议将此插件的加载顺序置于其他顺序之上。
*/
var Theo = Theo || {}
Theo.NoTouchUI = () => {
    ConfigManager.touchUI = false;
    
    Scene_MenuBase.prototype.mainAreaHeight = function() {
        return Graphics.boxHeight - this.helpAreaHeight()
    };

    Scene_MenuBase.prototype.mainAreaTop = function() {
        if (this.isBottomHelpMode()) {
            return 0
        } else {
            return this.helpAreaHeight();;
        }
    };

    Scene_MenuBase.prototype.helpAreaTop = function() {
        if (!this.isBottomHelpMode()) {
            return 0
        } else {
            return this.mainAreaHeight();;
        }
    };

    Scene_Map.prototype.createButtons = ()=>{}
    Scene_MenuBase.prototype.createButtons = ()=>{}
    Scene_Battle.prototype.createButtons = ()=>{}

    Window_Options.prototype.addGeneralOptions = function() {
        this.addCommand(TextManager.alwaysDash, "alwaysDash");
        this.addCommand(TextManager.commandRemember, "commandRemember");
    };

    Scene_Options.prototype.maxCommands = function() {
        return 6;
    };

}
Theo.NoTouchUI()
