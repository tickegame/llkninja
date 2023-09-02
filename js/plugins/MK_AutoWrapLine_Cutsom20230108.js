/*!
 * MK_AutoWrapLine_Cutsom20230108 - v0.1.0
 * Updated : 2023-01-08T19:25:00+0800
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
 * @plugindesc 自动换行 <MK_AutoWrapLine_Cutsom20230108> v0.1.0
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-custom
 * @version 
 *   v0.1.0 (2023-01-08T19:25:00+0800) 
 *     完成基本功能
 *   v0.0.0 (2023-01-08T15:01:00+0800) Init File
 *     项目计划中
 * 
 * @sourcecode 发布版插件可能压缩了代码，如有需要源代码，可以联系插件作者
 * 
 * 
 * 
 * 
 * @target MZ
 * 
 * 
 * @help
 * 
 * 自动换行 <MK_AutoWrapLine_Cutsom20230108> v0.1.0
 * Updated : 2023-01-08T19:25:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 根据字符数自动换行  
 * 
 * + 一个中文字、一个英文字母、一个全角或半角符号都算一个字符
 * + 不考虑标点出现在行首
 * + 不考虑英文单词的中断
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MZ v1.6.0
 * + MV : 不支持 (MZ有新的绘制文字的方法)
 * + MZ : 推荐
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
 * @param ---- startline ----
 * 
 * @param CharactersPerLine
 * @text 每行字符数
 * @desc 
 * @type number
 * @min 1 @max 1e5
 * @default 20
 * 
 * @param ---- endline ----
 * 
 */

"use strict";

var MK_PluginData = MK_PluginData || {};

!function() {
    var pluginData = {
        MikanPluginDataCoreUpdatedTime: "2023-01-05T20:00:00+0800",
        pluginName: "MK_AutoWrapLine_Cutsom20230108",
        pluginVersion: "v0.1.0",
        pluginUpdatedTime: "2023-01-08T19:25:00+0800",
        support: {
            supportForMV: !1,
            notSupportForMV: !0,
            engineNameMV: "MV",
            engineVersionMV: "1.6.2",
            supportForMZ: !0,
            notSupportForMZ: !1,
            engineNameMZ: "MZ",
            engineVersionMZ: "1.6.0"
        },
        paramParser: {
            numberParser: function(val, defVal) {
                if ("" === val) return defVal;
                if ("string" != typeof val && "number" != typeof val) return defVal;
                val = Number(val);
                return Number.isNaN(val) ? defVal : val;
            },
            stringParser: function(str, defVal) {
                return str = "string" == typeof str ? String(str) : defVal;
            },
            booleanParser: function(str, defVal) {
                return "true" === str || "false" !== str && !!defVal;
            },
            structParser: function(str) {
                var data = null;
                try {
                    data = JSON.parse(str);
                } catch (e) {
                    console.warn(`Failed to parse json "${str}".`), data = null;
                }
                return data;
            },
            listParser: function(parser, str, defVals, ...args) {
                var data = null;
                try {
                    data = JSON.parse(str || "[]");
                } catch (e) {
                    console.warn(`Failed to parse json "${str}".`), data = null;
                }
                return data = Array.isArray(data) ? Array.isArray(defVals) ? data.map((each, i) => parser(each, defVals[i], ...args)) : data.map(each => parser(each, defVals, ...args)) : (console.warn(`Json data "${str}" is not a array data.`), 
                null);
            }
        },
        paramSource: null,
        param: {},
        class: {},
        datas: {},
        getRealPluginName: function(pluginName) {
            if (PluginManager._parameters[(pluginName || "").toLowerCase()]) return pluginName;
            for (var list = $plugins.filter(function(i) {
                return i.description.contains("<" + pluginName + ">");
            }), i = 0, l = list.length; i < l; ++i) {
                var realPluginName = list[i].name;
                if (realPluginName !== pluginName) return realPluginName;
            }
            return "";
        },
        fetchMyRealPluginName: function() {
            var realPluginName;
            return this.realPluginName || ((realPluginName = this.getRealPluginName(this.pluginName)) || (console.warn(`Don't found real plugin name by plugin name "${this.pluginName}".`), 
            realPluginName = this.pluginName), this.realPluginName = realPluginName), this.realPluginName;
        },
        getPluginParam: function(realPluginName) {
            return PluginManager.parameters(realPluginName);
        },
        fetchMyPluginParam: function() {
            return this.paramSource = this.getPluginParam(this.fetchMyRealPluginName()), this.paramSource;
        },
        checkRpgmakerEngine: function(name, version) {
            return !!Utils && (name || Utils.RPGMAKER_NAME) === Utils.RPGMAKER_NAME && (version || Utils.RPGMAKER_VERSION) === Utils.RPGMAKER_VERSION;
        },
        calRpgmakerEngine: function() {
            var EngineSupport = this.support, PLUGIN_NAME = this.pluginName;
            return Utils ? this.checkRpgmakerEngine("MV", null) ? EngineSupport.notSupportForMV ? (console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`), 
            "") : (EngineSupport.supportForMV || console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`), 
            "MV") : this.checkRpgmakerEngine("MZ", null) ? EngineSupport.notSupportForMZ ? (console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`), 
            "") : (EngineSupport.supportForMZ || console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`), 
            "MZ") : (console.error(`Plugin "${PLUGIN_NAME}" don't support for unknown engine "RPG Maker ${Utils.RPGMAKER_NAME}".`), 
            "") : (console.error(`Load plugin "${PLUGIN_NAME}" failed, not found "Utils".`), 
            "");
        },
        currentRpgmakerEngine: null,
        getRpgmakerEngine: function() {
            if (null === this.currentRpgmakerEngine) try {
                this.currentRpgmakerEngine = this.calRpgmakerEngine();
            } catch (e) {
                console.warn(`Calculate rpgmaker engine failed.
` + e), this.currentRpgmakerEngine = "";
            }
            return this.currentRpgmakerEngine;
        }
    };
    MK_PluginData[pluginData.pluginName] = pluginData;
}(), function() {
    const pluginData = MK_PluginData.MK_AutoWrapLine_Cutsom20230108;
    var paramSource = pluginData.paramParser;
    const numberParser = paramSource.numberParser;
    paramSource.stringParser, paramSource.booleanParser, paramSource.structParser, paramSource.listParser;
    paramSource = pluginData.fetchMyPluginParam();
    const param = pluginData.param;
    param.CharactersPerLine = numberParser(paramSource.CharactersPerLine, 20);
}(), function() {
    const PLUGIN_PARAMS = {
        CharactersPerLine: MK_PluginData.MK_AutoWrapLine_Cutsom20230108.param.CharactersPerLine
    };
    if ("MZ" === function() {
        const pluginData = MK_PluginData.MK_AutoWrapLine_Cutsom20230108;
        return pluginData.getRpgmakerEngine();
    }()) {
        Window_Base.prototype.needsAutoWrapLine = function() {
            return !1;
        };
        const _MK_Window_Base_createTextState = Window_Base.prototype.createTextState;
        Window_Base.prototype.createTextState = function(text, x, y, width) {
            return this.needsAutoWrapLine() && (text = this.insertWrapLineToText(text)), _MK_Window_Base_createTextState.call(this, text, x, y, width);
        }, Window_Base.prototype.createTextStateNative = function(text, x, y, width) {
            return _MK_Window_Base_createTextState.apply(this, arguments);
        }, Window_Base.prototype.insertWrapLineToText = function(text) {
            this.resetFontSettings();
            const textState = this.createTextStateNative(text, 0, 0, 0);
            textState.drawing = !1;
            const insertedIndexes = [];
            for (var lineCharsCount = 0; textState.index < textState.text.length; ) {
                const c = textState.text[textState.index];
                "\n" !== c && "\f" !== c || (lineCharsCount = 0), 32 <= c.charCodeAt(0) && (lineCharsCount >= PLUGIN_PARAMS.CharactersPerLine && (lineCharsCount = 0, 
                insertedIndexes.push(textState.index)), lineCharsCount++), this.processCharacter(textState);
            }
            this.resetFontSettings();
            for (var newText = text, i = insertedIndexes.length - 1; 0 <= i; --i) var index = insertedIndexes[i], newText = newText.slice(0, index) + "\n" + newText.slice(index);
            return newText;
        }, Window_Message.prototype.needsAutoWrapLine = function() {
            return !0;
        }, Window_ScrollText.prototype.needsAutoWrapLine = function() {
            return !0;
        };
        const _MK_Window_Message_processNewLine = Window_Message.prototype.processNewLine;
        Window_Message.prototype.processNewLine = function(textState) {
            (textState.drawing ? _MK_Window_Message_processNewLine : Window_Base.prototype.processNewLine).call(this, textState);
        };
    }
}();