/*!
 * MKP_Bugfix_XdRs_GlobalData - v0.1.2
 * Updated : 2023-01-04T20:33:00+0800
 * 
 * https://github.com/MikanHako1024/RPGMaker-plugins-public
 * Copyright (C) 2019-2023 Mikan(MikanHako)
 * 
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * 
 * Include XdRs_GlobalData.js (https://rpg.blue/thread-486316-1-1.html)
 */


/*:
 * ================================================================
 * [Twitter] https://twitter.com/_MikanHako/
 * -[GitHub] https://github.com/MikanHako1024/
 * ---[Blog] Coming soon
 * -----[QQ] 312859582
 * ================================================================
 * 
 * @plugindesc 问题修复:XdRs_GlobalData <MKP_Bugfix_XdRs_GlobalData> v0.1.2
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.1.2 (2023-01-04T20:33:00+0800) 
 *     优化实现方法
 *   v0.1.1 (2023-01-04T20:10:00+0800) 
 *     修复开关或变量错误地被覆盖的问题
 *   v0.1.0 (2023-01-04T03:04:00+0800) 
 *     修复在安卓环境下报错的问题
 *   v0.0.0 (2023-01-04T02:36:00+0800) Init File
 *     项目计划中
 * 
 * @sourcecode 发布版插件可能压缩了代码，如有需要源代码，可以联系插件作者
 * 
 * 
 * 
 * 
 * @target MV MZ
 * 
 * 
 * @help
 * 
 * 问题修复:XdRs_GlobalData <MKP_Bugfix_XdRs_GlobalData> v0.1.2
 * Updated : 2023-01-04T20:33:00+0800
 * 
 * 
 * Include XdRs_GlobalData.js (https://rpg.blue/thread-486316-1-1.html)
 * 
 * ## 原说明
 * 
 * plugindesc 全局开关 + 变量 <MV + MZ>
 * author 芯☆淡茹水
 * help 
 * 
 * 〓 说明 〓
 * 全局 开关/变量 设置方法：
 * 在给 开关/变量 命名时，在名字最前面加上 $ 符号。
 * 例如： $立绘开关, $周目变量, ... 等，这些名字前面有 $ 符号的为全局 开关/变量 。
 * 
 * 〓 敬告 〓
 * 该插件以 开关/变量 的 setValue 自动侦测值的变更来进行全局数据的储存，
 * 一些直接脚本代码调用更改 开关/变量 的 data 等非常规操作的，全局数据储存将会失效。
 * 
 * 
 * ## 简要说明
 * 
 * 修复插件[XdRs_GlobalData.js](https://rpg.blue/thread-486316-1-1.html)的一些问题  
 * 1. 修复在安卓环境下报错的问题
 * 2. 修复开关或变量错误地被覆盖的问题
 * 
 * 
 * ## 使用方法
 * 
 * 关闭原插件(必要)，开启本插件  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.6.0
 * + MV : 支持 (未测试)
 * + MZ : 支持
 * 
 * 
 * ## 脚本说明
 * 
 * TODO
 * 
 * 
 * ## 其他说明
 * 
 * TODO
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
 */




"use strict";

var MK_PluginData = MK_PluginData || {};

(function() {
	// core
	const pluginData = {
		MikanPluginDataCoreUpdatedTime : '2023-01-02T20:00:00+0800', 
		pluginName : 'MKP_Bugfix_XdRs_GlobalData', 
		pluginVersion : 'v0.1.2', 
		pluginUpdatedTime : '2023-01-04T20:33:00+0800', 

		support : {
			supportForMV : true, 
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
			//var param = PluginManager.parameters(pluginName);
			//if (!param || Object.keys(param).length === 0) {
			var param = PluginManager._parameters[pluginName.toLowerCase()];
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

		getPluginParam : function(pluginName, realPluginName) {
			var param = PluginManager.parameters(pluginName);
			if (!param || Object.keys(param).length === 0) {
				param = PluginManager.parameters(realPluginName);
			}
			return param;
		}, 
		fetchMyPluginParam : function() {
			this.paramSource = this.getPluginParam(this.pluginName, this.fetchMyRealPluginName());
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
	// parser
	const pluginData = MK_PluginData['MKP_Bugfix_XdRs_GlobalData'];

	const paramParser = pluginData.paramParser;

	const numberParser  = paramParser['numberParser' ];
	const stringParser  = paramParser['stringParser' ];
	const booleanParser = paramParser['booleanParser'];
	const structParser  = paramParser['structParser' ];
	const listParser    = paramParser['listParser'   ];
})();

(function() {
	// param
	const pluginData = MK_PluginData['MKP_Bugfix_XdRs_GlobalData'];


	const paramSource = pluginData.fetchMyPluginParam();
	const param = pluginData.param;
})();




(function() {
	// logic

	const PLUGIN_NAME = 'MKP_Bugfix_XdRs_GlobalData';

	const CURRENT_ENGINE = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	})();

	//==============================================================================================================
	;((isMZ) => {
	//==============================================================================================================
	DataManager.globalDataFileName = function() {
		return 'GlobalData';
	};
	DataManager.isGlobalDataLoaded = function() {
		return !!this._globalData;
	};
	DataManager.makeEmptyGlobalData = function() {
		return {'switches':[], 'variables':[]};
	};
	DataManager.loadGlobalData = function() {
		if (isMZ) {
			StorageManager.loadObject(this.globalDataFileName())
				//.then(data => { this._globalData = data; })
				.then(data => {
					this._globalData = !!data ? data : this.makeEmptyGlobalData();
					/*if (!!data) {
						const globalData = this.makeEmptyGlobalData();
						if (Array.isArray(data.switches)) {
							data.switches.forEach((v, switchId) => {
								// isGlobalSwitch
								if ($dataSystem.switches[switchId] && /^\$/.test($dataSystem.switches[switchId])) {
									globalData.switches[switchId] = v;
								}
							})
						}
						if (Array.isArray(data.variables)) {
							data.variables.forEach((v, variableId) => {
								// isGlobalVariable
								if ($dataSystem.variables[variableId] && /^\$/.test($dataSystem.variables[variableId])) {
									globalData.variables[variableId] = v;
								}
							})
						}
						this._globalData = globalData;
					}
					else {
						this._globalData = this.makeEmptyGlobalData();
					}*/
				})
				.catch(()  => { this._globalData = this.makeEmptyGlobalData(); });
		} else this._globalData = JSON.parse(StorageManager.load('globalData'));
	};
	DataManager.saveGlobalData = function(type, id, value) {
		if (this.isGlobalDataLoaded() && this._globalData[type]) {
			this._globalData[type][id] = value;
			if (isMZ) StorageManager.saveObject(this.globalDataFileName(), this._globalData);
			else StorageManager.save('globalData', JSON.stringify(this._globalData));
		}
	};
	DataManager.synchronGlobalData = function() {
		if (this.isGlobalDataLoaded()) {
			if (!$gameSwitches)  throw new Error('游戏开关未生成或未读取！');
			if (!$gameVariables) throw new Error('游戏变量未生成或未读取！');
			$gameSwitches.synchron(this._globalData.switches);
			$gameVariables.synchron(this._globalData.variables);
		} else console.error('全局数据未读取！');
	};


	/*const XR_DataManager_loadDatabase = DataManager.loadDatabase;
	DataManager.loadDatabase = function() {
		XR_DataManager_loadDatabase.call(this);
		this.loadGlobalData();
	};*/
	/*const XR_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
		return this.isGlobalDataLoaded() && XR_DataManager_isDatabaseLoaded.call(this);
	};*/

	// 加载时机不对
	// loadDatabase 时 无法确定 $dataSystem 已加载完毕
	// 导致安卓环境下 StorageManager 调用 loadFromForage 时 获取 forageKey 失败
	// 报错 Cannot read properties of null (reading 'advanced')


	// 测试用 模拟安卓环境
	/*StorageManager.isLocalMode = function() {
		return false;
	};*/

	const _MK_Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
	Scene_Boot.prototype.onDatabaseLoaded = function() {
		_MK_Scene_Boot_onDatabaseLoaded.apply(this, arguments);
		DataManager.loadGlobalData();
	};
	Scene_Boot.prototype.isGlobalDataLoaded = function() {
		return DataManager.isGlobalDataLoaded();
	};
	const _MK_Scene_Boot_isReady = Scene_Boot.prototype.isReady;
	Scene_Boot.prototype.isReady = function() {
		return _MK_Scene_Boot_isReady.apply(this, arguments)
			 && this.isGlobalDataLoaded();
	};


	const XR_DataManager_createGameObjects = DataManager.createGameObjects;
	DataManager.createGameObjects = function() {
		XR_DataManager_createGameObjects.call(this);
		this.synchronGlobalData();
	};
	const XR_DataManager_extractSaveContents = DataManager.extractSaveContents;
	DataManager.extractSaveContents = function(contents) {
		XR_DataManager_extractSaveContents.call(this, contents);
		this.synchronGlobalData();
	};
	//==============================================================================================================
	if (!isMZ) {
		const XR_StorageManager_load = StorageManager.load;
		StorageManager.load = function(savefileId) {
			const data = XR_StorageManager_load.call(this, savefileId);
			if (savefileId === 'globalData' && !data) {
				return JSON.stringify(DataManager.makeEmptyGlobalData());
			}
			return data;
		};
		const XR_StorageManager_localFilePath = StorageManager.localFilePath;
		StorageManager.localFilePath = function(savefileId) {
			if (savefileId === 'globalData') {
				return this.localFileDirectoryPath() + DataManager.globalDataFileName() + '.rpgsave';
			}
			return XR_StorageManager_localFilePath.call(this, savefileId);
		};
		const XR_StorageManager_webStorageKey = StorageManager.webStorageKey;
		StorageManager.webStorageKey = function(savefileId) {
			if (savefileId === 'globalData') {
				return 'RPG ' + DataManager.globalDataFileName();
			}
			return XR_StorageManager_webStorageKey.call(this, savefileId);
		};
	};
	//==============================================================================================================
	Game_Switches.prototype.isGlobalSwitch = function(switchId) {
		return $dataSystem.switches[switchId] && /^\$/.test($dataSystem.switches[switchId]);
	};


	/*Game_Switches.prototype.synchron = function(ary) {
		let result = false;
		for (let i=1;i<ary.length;++i) {
			if (ary[i] !== void 0) {
				this._data[i] = ary[i];
				result = true;
			}
		}
		result && this.onChange();
	};*/
	Game_Switches.prototype.synchron = function(ary) {
		let result = false;
		for (let i=1;i<ary.length;++i) {
			if (ary[i] !== void 0) { // 对于null 仍然会继续 导致覆盖原数据
				if (this.isGlobalSwitch(i)) {
					this._data[i] = ary[i];
					result = true;
				}
			}
		}
		result && this.onChange();
	};


	const XR_Game_Switches_setValue = Game_Switches.prototype.setValue;
	Game_Switches.prototype.setValue = function(switchId, value) {
		const tmp = this.value(switchId);
		XR_Game_Switches_setValue.call(this, switchId, value);
		if (this.isGlobalSwitch(switchId) && tmp !== this.value(switchId)) {
			DataManager.saveGlobalData('switches', switchId, this.value(switchId));
		}
	};
	//==============================================================================================================
	Game_Variables.prototype.isGlobalVariable = function(variableId) {
		return $dataSystem.variables[variableId] && /^\$/.test($dataSystem.variables[variableId]);
	};


	/*Game_Variables.prototype.synchron = function(ary) {
		let result = false;
		for (let i=1;i<ary.length;++i) {
			if (ary[i] !== void 0) {
				this._data[i] = ary[i];
				result = true;
			}
		}
		result && this.onChange();
	};*/
	Game_Variables.prototype.synchron = function(ary) {
		let result = false;
		for (let i=1;i<ary.length;++i) {
			if (ary[i] !== void 0) { // 对于null 仍然会继续 导致覆盖原数据
				if (this.isGlobalVariable(i)) {
					this._data[i] = ary[i];
					result = true;
				}
			}
		}
		result && this.onChange();
	};


	const XR_Game_Variables_setValue = Game_Variables.prototype.setValue;
	Game_Variables.prototype.setValue = function(variableId, value) {
		const tmp = this.value(variableId);
		XR_Game_Variables_setValue.call(this, variableId, value);
		if (this.isGlobalVariable(variableId) && tmp !== this.value(variableId)) {
			DataManager.saveGlobalData('variables', variableId, this.value(variableId));
		}
	};
	//==============================================================================================================
	})(Utils.RPGMAKER_NAME === 'MZ');
	//==============================================================================================================
	// end
	//==============================================================================================================
})();



