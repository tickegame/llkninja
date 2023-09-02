/*!
 * MK_Expand_ButtonPicture_Custom20230309 - v0.1.0
 * Updated : 2023-03-15T21:26:00+0800
 * 
 * https://github.com/MikanHako1024/RPGMaker-plugins-custom
 * Copyright (C) 2019-2023 Mikan(MikanHako)
 * 
 * Released under special License.
 * 本插件暂未开源
 * 这意味着：
 * 1. 本插件只能由插件原作者进行分发和授权。
 * 2. 被授权者可以使用、修改本插件，但不允许再次分发。
 * 3. 被授权者的使用形式不受限制，可以用于学习或者用于商用。
 * 4. 插件原作者不对使用本插件的创作作品做担保和负责。
 * 5. 未授权者禁止以任何方法使用、修改、分发本插件。
 * 6. 插件原作者可以公开本插件，那之后，该插件副本仍遵循该规约。
 */


/*:
 * ================================================================
 * [Twitter] https://twitter.com/_MikanHako/
 * -[GitHub] https://github.com/MikanHako1024/
 * ---[Blog] Coming soon
 * -----[QQ] 312859582
 * ================================================================
 * 
 * @plugindesc 拓展ButtonPicture_交互反馈 <MK_Expand_ButtonPicture_Custom20230309> v0.1.0
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-custom
 * @version 
 *   v0.1.0 (2023-03-15T21:26:00+0800) 
 *     完成基本功能
 *   v0.0.0 (2023-03-15T19:23:00+0800) Init File
 *     项目计划中
 * 
 * @sourcecode 发布版插件可能压缩了代码，如有需要源代码，可以联系插件作者
 * 
 * 
 * 
 * 
 * @target MZ
 * 
 * @base ButtonPicture
 * @orderAfter ButtonPicture
 * 
 * 
 * @help
 * 
 * 拓展ButtonPicture_交互反馈 <MK_Expand_ButtonPicture_Custom20230309> v0.1.0
 * Updated : 2023-03-15T21:26:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 拓展官方插件`ButtonPicture`  
 * 增加交互反馈，鼠标放上按钮图片或点击按钮图片时，改变图片色调  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MZ v1.6.0
 * + MV : 不清楚 (未实现插件指令)
 * + MZ : 推荐
 * 
 * 
 * ## 插件指令
 * 
 * | description |
 * | :---------- |
 * | 设置悬浮色调 |
 * | 设置点击色调 |
 * 
 * 
 * ## 使用示例
 * 
 * ◆显示图片：#1, pic/Actor1_1, 左上 (0,0), (100%,100%), 255, 正常
 * ◆插件指令：ButtonPicture, Set Button Picture
 * ：　　　　：Picture Number = 1
 * ：　　　　：Common Event = 12
 * ◆插件指令：MK_Expand_ButtonPicture_Custom20230309, setHoverTone
 * ◆更改图片色调：#1, (68,-34,-34,0), 60帧
 * ◆插件指令：MK_Expand_ButtonPicture_Custom20230309, setPressTone
 * ◆更改图片色调：#1, (-68,-68,0,68), 60帧
 * 
 * 
 * ## 联系方式
 * [Twitter] https://twitter.com/_MikanHako/  
 * -[GitHub] https://github.com/MikanHako1024/  
 * ---[Blog] Coming soon  
 * -----[QQ] 312859582  
 * 
 * 如需在鸣谢名单中显示插件作者名，可以显示此ID :  
 * Mikan(MikanHako)  
 * 
 * 
 * ## 使用规约
 * Copyright (C) 2019-2023 Mikan(MikanHako)  
 * 
 * 本插件暂未开源  
 * 这意味着：  
 * 1. 本插件只能由插件原作者进行分发和授权。
 * 2. 被授权者可以使用、修改本插件，但不允许再次分发。
 * 3. 被授权者的使用形式不受限制，可以用于学习或者用于商用。
 * 4. 插件原作者不对使用本插件的创作作品做担保和负责。
 * 5. 未授权者禁止以任何方法使用、修改、分发本插件。
 * 6. 插件原作者可以公开本插件，那之后，该插件副本仍遵循该规约。
 * 
 * --------------------------------
 * ENDLINE
 * 
 * 
 * 
 * 
 * @command setHoverTone
 * @text 设置悬浮色调
 * @desc 该插件指令的下一条命令，必须是【更改图片色调】命令(下称A)
 *       A命令不会被执行，而是根据A命令的 图片编号 和 色调 设置悬浮色调
 * 
 * 
 * @command setPressTone
 * @text 设置点击色调
 * @desc 该插件指令的下一条命令，必须是【更改图片色调】命令(下称A)
 *       A命令不会被执行，而是根据A命令的 图片编号 和 色调 设置点击色调
 */

"use strict";

var MK_PluginData = MK_PluginData || {};

(function() {
    const pluginData = {
        MikanPluginDataCoreUpdatedTime: "2023-01-05T20:00:00+0800",
        pluginName: "MK_Expand_ButtonPicture_Custom20230309",
        pluginVersion: "v0.1.0",
        pluginUpdatedTime: "2023-03-15T21:26:00+0800",
        support: {
            supportForMV: false,
            notSupportForMV: false,
            engineNameMV: "MV",
            engineVersionMV: "1.6.2",
            supportForMZ: true,
            notSupportForMZ: false,
            engineNameMZ: "MZ",
            engineVersionMZ: "1.6.0"
        },
        paramParser: {
            numberParser: function(str, defVal) {
                if (str === "") return defVal;
                if (typeof str !== "string" && typeof str !== "number") return defVal;
                var val = Number(str);
                return !Number.isNaN(val) ? val : defVal;
            },
            stringParser: function(str, defVal) {
                str = typeof str == "string" ? String(str) : defVal;
                return str;
            },
            booleanParser: function(str, defVal) {
                if (str === "true") return true; else if (str === "false") return false; else return !!defVal;
            },
            structParser: function(str) {
                var data = null;
                try {
                    data = JSON.parse(str);
                } catch (e) {
                    console.warn(`Failed to parse json "${str}".`);
                    data = null;
                }
                return data;
            },
            listParser: function(parser, str, defVals, ...args) {
                var data = null;
                try {
                    data = JSON.parse(str || "[]");
                } catch (e) {
                    console.warn(`Failed to parse json "${str}".`);
                    data = null;
                }
                if (Array.isArray(data)) {
                    data = Array.isArray(defVals) ? data.map((each, i) => parser(each, defVals[i], ...args)) : data.map(each => parser(each, defVals, ...args));
                } else {
                    console.warn(`Json data "${str}" is not a array data.`);
                    data = null;
                }
                return data;
            }
        },
        paramSource: null,
        param: {},
        class: {},
        datas: {},
        getRealPluginName: function(pluginName) {
            var param = PluginManager._parameters[(pluginName || "").toLowerCase()];
            if (!param) {
                var list = $plugins.filter(function(i) {
                    return i.description.contains("<" + pluginName + ">");
                });
                for (var i = 0, l = list.length; i < l; ++i) {
                    var realPluginName = list[i].name;
                    if (realPluginName !== pluginName) return realPluginName;
                }
                return "";
            } else {
                return pluginName;
            }
        },
        fetchMyRealPluginName: function() {
            if (!this.realPluginName) {
                var realPluginName = this.getRealPluginName(this.pluginName);
                if (!realPluginName) {
                    console.warn(`Don't found real plugin name by plugin name "${this.pluginName}".`);
                    realPluginName = this.pluginName;
                }
                this.realPluginName = realPluginName;
            }
            return this.realPluginName;
        },
        getPluginParam: function(realPluginName) {
            var param = PluginManager.parameters(realPluginName);
            return param;
        },
        fetchMyPluginParam: function() {
            this.paramSource = this.getPluginParam(this.fetchMyRealPluginName());
            return this.paramSource;
        },
        checkRpgmakerEngine: function(name, version) {
            return !!Utils && (name || Utils.RPGMAKER_NAME) === Utils.RPGMAKER_NAME && (version || Utils.RPGMAKER_VERSION) === Utils.RPGMAKER_VERSION;
        },
        calRpgmakerEngine: function() {
            const EngineSupport = this.support;
            const PLUGIN_NAME = this.pluginName;
            const keyNone = "";
            const keyMV = "MV";
            const keyMZ = "MZ";
            if (!Utils) {
                console.error(`Load plugin "${PLUGIN_NAME}" failed, not found "Utils".`);
                return keyNone;
            } else if (this.checkRpgmakerEngine(keyMV, null)) {
                if (EngineSupport.notSupportForMV) {
                    console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
                    return keyNone;
                } else if (!EngineSupport.supportForMV) {
                    console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
                    return keyMV;
                } else {
                    return keyMV;
                }
            } else if (this.checkRpgmakerEngine(keyMZ, null)) {
                if (EngineSupport.notSupportForMZ) {
                    console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
                    return keyNone;
                } else if (!EngineSupport.supportForMZ) {
                    console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
                    return keyMZ;
                } else {
                    return keyMZ;
                }
            } else {
                console.error(`Plugin "${PLUGIN_NAME}" don't support for unknown engine "RPG Maker ${Utils.RPGMAKER_NAME}".`);
                return keyNone;
            }
        },
        currentRpgmakerEngine: null,
        getRpgmakerEngine: function() {
            if (this.currentRpgmakerEngine === null) {
                try {
                    this.currentRpgmakerEngine = this.calRpgmakerEngine();
                } catch (e) {
                    console.warn(`Calculate rpgmaker engine failed.\n${e}`);
                    this.currentRpgmakerEngine = "";
                }
            }
            return this.currentRpgmakerEngine;
        }
    };
    MK_PluginData[pluginData.pluginName] = pluginData;
})();

(function() {
    const _MK_Sprite_Picture_updateTone = Sprite_Picture.prototype.updateTone;
    Sprite_Picture.prototype.updateTone = function() {
        const picture = this.picture();
        if (this._pressed && picture.mzkp_pressTone) {
            this.setColorTone(picture.mzkp_pressTone);
        } else if (this._hovered && picture.mzkp_hoverTone) {
            this.setColorTone(picture.mzkp_hoverTone);
        } else {
            _MK_Sprite_Picture_updateTone.apply(this, arguments);
        }
    };
})();

(function() {
    const PLUGIN_NAME = "MK_Expand_ButtonPicture_Custom20230309";
    const REAL_PLUGIN_NAME = MK_PluginData[PLUGIN_NAME].fetchMyRealPluginName();
    const ParamParser = function() {
        const pluginData = MK_PluginData[PLUGIN_NAME];
        return pluginData.paramParser;
    }();
    const CURRENT_ENGINE = function() {
        const pluginData = MK_PluginData[PLUGIN_NAME];
        return pluginData.getRpgmakerEngine();
    }();
    if (CURRENT_ENGINE === "MZ") {
        function registerCommand(commandName, func) {
            var pluginName = REAL_PLUGIN_NAME;
            PluginManager.registerCommand(pluginName, commandName, func);
        }
        registerCommand("setHoverTone", function(args) {
            for (var i = this._index + 1, l = this._list.length; i < l; i++) {
                if (this._list[i].code == 657) {
                    continue;
                } else if (this._list[i].code == 234) {
                    this._index = i;
                    const params = this.currentCommand().parameters;
                    const picture = $gameScreen.picture(params[0]);
                    if (picture) {
                        picture.mzkp_hoverTone = params[1].slice(0);
                    }
                    break;
                } else {
                    console.warn(`Don't found command "更改图片色调" (code=234).`);
                    break;
                }
            }
        });
        registerCommand("setPressTone", function(args) {
            for (var i = this._index + 1, l = this._list.length; i < l; i++) {
                if (this._list[i].code == 657) {
                    continue;
                } else if (this._list[i].code == 234) {
                    this._index = i;
                    const params = this.currentCommand().parameters;
                    const picture = $gameScreen.picture(params[0]);
                    if (picture) {
                        picture.mzkp_pressTone = params[1].slice(0);
                    }
                    break;
                } else {
                    console.warn(`Don't found command "更改图片色调" (code=234).`);
                    break;
                }
            }
        });
    }
})();