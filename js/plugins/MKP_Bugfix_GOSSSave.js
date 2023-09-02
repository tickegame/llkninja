/*!
 * MKP_Bugfix_GOSSSave - v0.1.0
 * Updated : 2023-07-22T20:27:00+0800
 * 
 * https://github.com/MikanHako1024/RPGMaker-plugins-public
 * Copyright (C) 2019-2023 Mikan(MikanHako)
 * 
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */


/*:
 * ================================================================
 * [Twitter] https://twitter.com/_MikanHako/
 * -[GitHub] https://github.com/MikanHako1024/
 * ---[Blog] Coming soon
 * -----[QQ] 312859582
 * ================================================================
 * 
 * @plugindesc 插件修复:GOSSSave <MKP_Bugfix_GOSSSave> v0.1.0
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.1.0 (2023-07-22T20:27:00+0800) 
 *     修复 GOSSSave 读档报错问题
 *   v0.0.0 (2023-07-22T20:16:00+0800) Init File
 *     项目计划中
 * 
 * @sourcecode 发布版插件可能压缩了代码，如有需要源代码，可以联系插件作者
 * 
 * 
 * 
 * 
 * @target MZ
 * 
 * @base GOSSSave
 * @orderAfter GOSSSave
 * 
 * 
 * @help
 * 
 * 插件修复:GOSSSave <MKP_Bugfix_GOSSSave> v0.1.0
 * Updated : 2023-07-22T20:27:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 修复插件 GOSSSave.js 读档报错的问题  
 * ```
 * @target MZ
 * @plugindesc スクリーンショット付きセーブプラグイン
 * @author GrayOgre
 * @url https://grayogre.info/rmmz/plugin/index.html
 * @help
 * 
 * このプラグインはサブ画面にスクリーンショットを含む詳細情報を表示する
 * セーブ／ロード画面を提供します。
 * 
 * このプラグインにプラグインコマンドはありません。
 * 
 * 制約事項
 * オートセーブ時のスクリーンショットには対応していません。
 * 
 * 移植元プラグイン
 * sai_Scenefile.js (sairi様作)
 * 
 * Version 1.0.5
 * ```
 * 
 * 
 * ## 使用方法
 * 
 * 插件管理器中，添加并开启本插件，并置于插件 GOSSSave.js 下方  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MZ v1.6.0
 * + MV : 不清楚 (要看 GOSSSave.js 是否支持)
 * + MZ : 支持
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
 * MIT License  
 * Copyright (C) 2019-2023 Mikan(MikanHako)  
 * http://opensource.org/licenses/mit-license.php  
 * 
 * 本插件使用 MIT协议  
 * 这意味着：  
 * 1. 任何人可以使用、修改、复制、分发本插件。
 * 2. 使用形式不受限制，可以用于交流学习或者用于商用。
 * 3. 插件原作者不对使用本插件的创作作品做担保和负责。
 * 4. 在插件和插件的所有副本中都必须包含以上版权声明和本许可声明。
 * 
 * --------------------------------
 * ENDLINE
 * 
 * 
 * 
 * 
 * @param ---- startline ----
 * 
 * @param ---- endline ----
 * 
 */




"use strict";

var MK_PluginData = MK_PluginData || {};

(function() {
	// core
	const pluginData = {
		MikanPluginDataCoreUpdatedTime : '2023-01-05T20:00:00+0800', 
		pluginName : 'MKP_Bugfix_GOSSSave', 
		pluginVersion : 'v0.1.0', 
		pluginUpdatedTime : '2023-07-22T20:27:00+0800', 

		support : {
			supportForMV : false, 
			notSupportForMV : false, 
			engineNameMV : 'MV', 
			engineVersionMV : '1.6.2', 

			supportForMZ : true, 
			notSupportForMZ : false, 
			engineNameMZ : 'MZ', 
			engineVersionMZ : '1.6.0', 
		}, 

		paramParser : {
			numberParser : function(str, defVal) {
				if (str === '') return defVal;
				if (typeof(str) !== 'string' && typeof(str) !== 'number') return defVal;
				var val = Number(str);
				return !Number.isNaN(val) ? val : defVal;
			}, 
			stringParser : function(str, defVal) {
				str = typeof(str) == 'string' ? String(str) : defVal;
				return str;
			}, 
			booleanParser : function(str, defVal) {
				if (str === 'true') return true;
				else if (str === 'false') return false;
				else return !!defVal;
			}, 
			structParser : function(str) {
				var data = null;
				try {
					data = JSON.parse(str);
				}
				catch (e) {
					console.warn(`Failed to parse json "${str}".`);
					data = null;
				}
				return data;
			}, 
			listParser : function(parser, str, defVals, ...args) {
				var data = null;
				try {
					data = JSON.parse(str || '[]');
				}
				catch (e) {
					console.warn(`Failed to parse json "${str}".`);
					data = null;
				}
				if (Array.isArray(data)) {
					data = Array.isArray(defVals)
						? data.map((each, i) => parser(each, defVals[i], ...args))
						: data.map(each => parser(each, defVals, ...args));
				}
				else {
					console.warn(`Json data "${str}" is not a array data.`);
					data = null;
				}
				return data;
			}, 
		}, 
		paramSource : null, 
		param : {}, 
		class : {}, 
		datas : {}, 

		getRealPluginName : function(pluginName) {
			var param = PluginManager._parameters[(pluginName || '').toLowerCase()];
			if (!param) {
				var list = $plugins.filter(function (i) {
					return i.description.contains('<' + pluginName + '>');
				});
				for (var i = 0, l = list.length; i < l; ++i) {
					var realPluginName = list[i].name;
					if (realPluginName !== pluginName)
						return realPluginName;
				}
				return '';
			}
			else {
				return pluginName;
			}
		}, 
		fetchMyRealPluginName : function() {
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

		getPluginParam : function(realPluginName) {
			var param = PluginManager.parameters(realPluginName);
			return param;
		}, 
		fetchMyPluginParam : function() {
			this.paramSource = this.getPluginParam(this.fetchMyRealPluginName());
			return this.paramSource;
		}, 

		checkRpgmakerEngine : function(name, version) {
			return !!Utils
				 && ((name || Utils.RPGMAKER_NAME) === Utils.RPGMAKER_NAME)
				 && ((version || Utils.RPGMAKER_VERSION) === Utils.RPGMAKER_VERSION);
		}, 
		calRpgmakerEngine : function() {
			const EngineSupport = this.support;
			const PLUGIN_NAME = this.pluginName;

			const keyNone = '';
			const keyMV = 'MV';
			const keyMZ = 'MZ';

			if (!Utils) {
				console.error(`Load plugin "${PLUGIN_NAME}" failed, not found "Utils".`);
				return keyNone;
			}
			else if (this.checkRpgmakerEngine(keyMV, null)) {
				if (EngineSupport.notSupportForMV) {
					console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyNone;
				}
				else if (!EngineSupport.supportForMV) {
					console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyMV;
				}
				else {
					return keyMV;
				}
			}
			else if (this.checkRpgmakerEngine(keyMZ, null)) {
				if (EngineSupport.notSupportForMZ) {
					console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyNone;
				}
				else if (!EngineSupport.supportForMZ) {
					console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyMZ;
				}
				else {
					return keyMZ;
				}
			}
			else {
				console.error(`Plugin "${PLUGIN_NAME}" don't support for unknown engine "RPG Maker ${Utils.RPGMAKER_NAME}".`);
				return keyNone;
			}
		}, 

		currentRpgmakerEngine : null, 
		getRpgmakerEngine : function() {
			if (this.currentRpgmakerEngine === null) {
				try {
					this.currentRpgmakerEngine = this.calRpgmakerEngine();
				}
				catch (e) {
					console.warn(`Calculate rpgmaker engine failed.\n${e}`);
					this.currentRpgmakerEngine = '';
				}
			}
			return this.currentRpgmakerEngine;
		}, 
	};
	MK_PluginData[pluginData.pluginName] = pluginData;
})();




(function() {
	// logic

	DataManager.thumbnailsIsReady = function() {
		for (const key in this._snapUrls) {
			if (this._snapUrls[key]) {
				if (typeof this._snapUrls[key] !== 'string') {
					return false;
				}
			}
		}
		return true;
	};

	const _MK_Scene_File_isReady = Scene_File.prototype.isReady;
	Scene_File.prototype.isReady = function() {
		return _MK_Scene_File_isReady.apply(this, arguments)
			&& DataManager.thumbnailsIsReady();
	};
})();



