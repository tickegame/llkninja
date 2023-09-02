//=============================================================================
// RegionPassage.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc 区域通行
 * @author taroxd
 *
 * @param Passable Regions
 * @text 可通行区域
 * @desc 在这些区域中可自由通行。
 * @type number[]
 * @max 255
 * @min 0
 * @default []
 *
 * @param Impassable Regions
 * @text 不可通行区域
 * @desc 在这些区域中不可通行。
 * @type number[]
 * @max 255
 * @min 0
 * @default []
 *
 * @help 
 * 为图块通行提供高级设置。
 * 若需要更为细微的设置，去代码本体中看看。
 * 
 * 此插件不提供插件命令。
 */

void function() {

    var parameters = PluginManager.parameters('RegionPassage');
    var PASSABLE_REGIONS = JSON.parse(parameters['Passable Regions'])
    var IMPASSABLE_REGIONS = JSON.parse(parameters['Impassable Regions'])

    var REGIONS = {};
    PASSABLE_REGIONS.forEach(function(r) {
        REGIONS[r] = true;
    });
    IMPASSABLE_REGIONS.forEach(function(r) {
        REGIONS[r] = false;
    });

    /* 高级设置:
     *
     * REGIONS[r] = function(regionId)
     * 
     * 该函数决定能否从 区域#r 走到 区域#regionId 。
     * 如果返回值为true:  则无论从哪种区域都*可以*走到 区域#regionId 。
     * 如果返回值为false: 则无论从哪种区域都*无法*走到 区域#regionId 。
     * 如果返回其他值:    则不改变插件参数的通行设置。
     *
     * 
     * 举例:
     * 
     * 如果只有从 区域#4 才能进入 区域#3 ，
     * 且在 区域#3 内部可以自由通行，
     * 那么可以这样写：
     * REGIONS[3] = function(r) { return r === 3 || r === 4; };
     * 
     * 如果不能在 区域#5 和 区域#6 之间来回走动，
     * 那么可以这样写：
     * REGIONS[5] = function(r) { return r !== 6 && null };
     */

    var enable = Object.keys(REGIONS).length > 0;
    if (!enable) return;

    var ip = Game_Map.prototype.isPassable;
    Game_Map.prototype.isPassable = function(x, y, d) {
        var settings = REGIONS[$gameMap.regionId(x, y)];
        if (typeof(settings) === 'function') {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            settings = settings($gameMap.regionId(x2, y2));
        }
        if (typeof(settings) === 'boolean') {
            return settings;
        }
        return ip.call(this, x, y, d);
    };
}();
