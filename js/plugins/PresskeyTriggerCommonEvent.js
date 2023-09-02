//=================================================================================================
// Press key trigger Common Event.js
//=================================================================================================
/*:
 * @target MZ
 * @plugindesc 按键触发公共事件
 * @help
 *
 * 
 * 
 * @param keyData
 * @type text[]
 * @text 按键+公共事件
 * @desc 添加按键以及对应公共事件，格式：按键键值=公共事件ID
 *       例：按下键盘 H 键（键值 72）运行 8 号公共事件，写 72=8
 * @default
 * 
 * 
*/
//=================================================================================================
;(() => {
//=================================================================================================
const parameters = PluginManager.parameters('PresskeyTriggerCommonEvent');
//=================================================================================================
Game_Temp.prototype.reserveSingleCommonEvent = function(commonEventId) {
    if (this._commonEventQueue.length === 0) {
        this.reserveCommonEvent(commonEventId);
    }
};
//=================================================================================================
function PKTCE_Manager() { throw new Error('This is a static class'); }
PKTCE_Manager.initialize = function() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    this.setupKeys();
};
PKTCE_Manager.setupKeys = function() {
    this._data = {};
    const arr = JSON.parse(parameters['keyData']);
    for (const s of arr) {
        const tmp = s.split('=');
        const key = parseInt(tmp[0]) || 0;
        const id  = parseInt(tmp[1]) || 0;
        if (key > 0 && id > 0) {
            this._data[key] = id;
        }
    }
};
PKTCE_Manager.onKeyDown = function(event) {
    if (SceneManager.isPtcEffective()) {
        const eventId = this._data[event.keyCode] || 0;
        eventId > 0 && $gameTemp.reserveSingleCommonEvent(eventId);
    }
};
//=================================================================================================
const SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
    SceneManager_initialize.call(this);
    PKTCE_Manager.initialize();
};
SceneManager.isPtcEffective = function() {
    if (!(this._scene instanceof Scene_Map)) return false;
    return !!$gameMap && !!$dataMap && !$gameMap.isEventRunning();
};
//=================================================================================================
})();
//=================================================================================================
// end
//=================================================================================================