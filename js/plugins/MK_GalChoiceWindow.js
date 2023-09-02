/*!
 * MK_GalChoiceWindow - v0.1.0.fix2
 * Updated : 2022-04-07T17:53:00+0800
 * 
 * https://github.com/MikanHako1024/RPGMaker-plugins-custom
 * Copyright (C) 2022 Mikan(MikanHako)
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
 * @plugindesc galgame选项窗口 <MK_GalChoiceWindow>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-custom
 * @version 
 *   v0.1.0.fix2 (2022-04-07T17:53:00+0800) bugfix
 *     修复无法执行选项分支的问题
 *   v0.1.0.fix1 (2022-04-04T12:53:00+0800) bugfix
 *     修复显示选项时消息文字闪烁的问题
 *   v0.1.0 (2022-04-04T04:33:00+0800) 
 *     完成基本功能
 *   v0.0.0.branch1 (2022-03-27T16:09:00+0800) 
 *     项目计划中
 *   v0.0.0 (2022-03-25T10:19:00+0800) Init File
 *     项目计划中
 * 
 * 
 * 
 * 
 * @target MZ
 * 
 * 
 * @help
 * 
 * galgame选项窗口 <MK_GalChoiceWindow> v0.1.0.fix2
 * Updated : 2022-04-07T17:53:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 仿galgame选项窗口
 * 
 * 
 * ## 使用方法
 * 
 * 选项背景使用图片  
 * 图片需要纵向平均分成5部分  
 * 从上到下分别是 : 普通、悬浮、点击、禁用、判定区域  
 * 图片置于 img/system 文件夹，默认命名 ChoiceBg.png  
 * 
 * 
 * ## 插件指令
 * 
 * | description    |
 * | :------------  |
 * | 是否使用gal选项 |
 * 
 * 
 * ## 其他说明
 * 
 * ...
 * 
 * 
 * ## 使用示例
 * 
 * ...
 * 
 * 
 * ## 后续任务
 * 
 * ...
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
 * Copyright (C) 2022 Mikan(MikanHako)
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
 * @command ChoiceMode
 * @text 是否使用gal选项
 * @desc 
 * 
 * @arg useGalgame
 * @text 使用galgame选项
 * @desc 
 * @type boolean
 * @on galgame @off 原版
 * @default true
 * 
 * 
 * 
 * 
 * @param ---- 游戏参数配置 ----
 *
 * @param SkinImage
 * @text 皮肤图像
 * @desc 选项的背景图，需要纵向平均分成5部分
 * 从上到下分别是 : 普通、悬浮、点击、禁用、判定区域
 * @type file
 * @dir img/system
 * @default ChoiceBg
 * 
 * @param ChoiceWidth
 * @text 选项宽度
 * @desc 
 * @type number
 * @default 512
 * 
 * @param ChoiceHeight
 * @text 选项高度
 * @desc 
 * @type number
 * @default 64
 * 
 * @param WindowOffsetX
 * @text 整体横向偏移
 * @desc 
 * @type number
 * @min -1e5 @max 1e5
 * @default 0
 * 
 * @param WindowOffsetY
 * @text 整体纵向偏移
 * @desc 
 * @type number
 * @min -1e5 @max 1e5
 * @default -88
 * 
 * @param TextPaddingX
 * @text 选项文本左右空位
 * @desc 使绘制文字右移 (文字自动居中，该项未使用)
 * @type number
 * @min -1e5 @max 1e5
 * @default 0
 * 
 * @param TextPaddingY
 * @text 选项文本上下空位
 * @desc 使绘制文字下移 (文字自动居中，该项未使用)
 * @type number
 * @min -1e5 @max 1e5
 * @default 0
 * 
 * @param ChoiceSpaceYScript
 * @text 选项纵向间隔
 * @desc 可使用脚本  sw:屏幕宽 sh:屏幕高 cw:选项宽 ch:选项高
 * cn:选项总数 params:拓展参数
 * @type multiline_string
 * @default Math.min(Math.floor((sh-176-ch-80)/(cn-1)), ch+20)
 * 
 * @param ChoiceOffsetXScript
 * @text 选项横向偏移
 * @desc 可使用脚本  sw:屏幕宽 sh:屏幕高 cw:选项宽 ch:选项高
 * cn:选项总数 params:拓展参数 index:选项编号(从0开始)
 * @type multiline_string
 * @default 0
 * 
 * @param ChoiceOffsetYScript
 * @text 选项纵向偏移
 * @desc 可使用脚本  sw:屏幕宽 sh:屏幕高 cw:选项宽 ch:选项高
 * cn:选项总数 params:拓展参数 index:选项编号(从0开始)
 * @type multiline_string
 * @default 0
 * 
 * @param ChoiceAnimOsXScript
 * @text 选项动画起点横向偏移
 * @desc 可使用脚本  sw:屏幕宽 sh:屏幕高 cw:选项宽 ch:选项高
 * cn:选项总数 params:拓展参数 index:选项编号(从0开始)
 * @type multiline_string
 * @default 0
 * 
 * @param ChoiceAnimOsYScript
 * @text 选项动画起点纵向偏移
 * @desc 可使用脚本  sw:屏幕宽 sh:屏幕高 cw:选项宽 ch:选项高
 * cn:选项总数 params:拓展参数 index:选项编号(从0开始)
 * @type multiline_string
 * @default -(index-Math.ceil(cn/2)+.5)*spy
 * 
 * @param ChoiceAnimOpacity
 * @text 选项动画起点透明度
 * @desc 
 * @type number
 * @min 0 @max 255
 * @default 255
 * 
 * @param ExtraParams
 * @text 拓展参数
 * @desc 可用于 [选项纵向间隔],[选项横向偏移] 等 可使用脚本的参数中
 * 在脚本中使用 `params[索引]` 获取对应值
 * @type number[]
 * @decimals 0
 * @default []
 * 
 * @param DefaultUseGal
 * @text 默认使用gal选项模式
 * @desc 
 * @type boolean
 * @on 默认galgame @off 默认原版
 * @default true
 * 
 * @param OpenAnimParams
 * @text 打开动画参数
 * @desc (0,0)到(1,1)的Cubic-Bezier参数，详见 cubic-bezier.com
 * 必须4个参数，匀速可设置 [".5",".5",".5",".5"]，
 * @type number[]
 * @min -1e5 @max 1e5
 * @decimals 2
 * @default [".5","0",".5","1.5"]
 * 
 * @param CloseAnimParams
 * @text 关闭动画参数
 * @desc (0,0)到(1,1)的Cubic-Bezier参数，详见 cubic-bezier.com
 * 必须4个参数，匀速可设置 [".5",".5",".5",".5"]
 * @type number[]
 * @min -1e5 @max 1e5
 * @decimals 2
 * @default [".5",".5",".5",".5"]
 * 
 * @param ---- 内容数据配置 ----
 * 
 * @param ---- endline ----
 * 
 */

"use strict";

var MK_PluginData = MK_PluginData || {};

!function() {
    var pluginData = {
        pluginName: "MK_GalChoiceWindow",
        pluginVersion: "v0.1.0.fix2",
        pluginUpdatedTime: "2022-04-07T17:53:00+0800",
        paramParser: {
            numberParser: function(val, defVal) {
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
                } catch {
                    console.warn(`error json "${str}".`), data = {};
                }
                return data;
            },
            listParser: function(str, parser, ...args) {
                var data = null;
                try {
                    data = JSON.parse(str);
                } catch {
                    console.warn(`error json "${str}".`), data = [];
                }
                return data = data.map(each => parser(each, ...args));
            }
        },
        paramSource: null,
        param: {},
        class: {},
        datas: {},
        getPluginParam: function(pluginName) {
            var param = PluginManager.parameters(pluginName);
            if (param && "{}" !== JSON.stringify(param)) return param;
            for (var list = $plugins.filter(function(i) {
                return i.description.contains("<" + pluginName + ">");
            }), i = 0; i < list.length; i++) {
                var realPluginName = list[i].name;
                if (realPluginName !== pluginName) return PluginManager.parameters(realPluginName);
            }
            return {};
        },
        fetchMyPluginParam: function() {
            return this.paramSource = this.getPluginParam(this.pluginName), this.paramSource;
        }
    };
    MK_PluginData[pluginData.pluginName] = pluginData;
}(), function() {
    const pluginData = MK_PluginData.MK_GalChoiceWindow;
    var paramSource = pluginData.paramParser;
    const numberParser = paramSource.numberParser, stringParser = paramSource.stringParser, booleanParser = paramSource.booleanParser;
    paramSource.structParser;
    const listParser = paramSource.listParser;
    paramSource = pluginData.fetchMyPluginParam();
    const param = pluginData.param;
    param.SkinImage = stringParser(paramSource.SkinImage, ""), param.ChoiceWidth = numberParser(paramSource.ChoiceWidth, 0), 
    param.ChoiceHeight = numberParser(paramSource.ChoiceHeight, 0), param.WindowOffsetX = numberParser(paramSource.WindowOffsetX, 0), 
    param.WindowOffsetY = numberParser(paramSource.WindowOffsetY, 0), param.TextPaddingX = numberParser(paramSource.TextPaddingX, 0), 
    param.TextPaddingY = numberParser(paramSource.TextPaddingY, 0), param.ChoiceSpaceYScript = stringParser(paramSource.ChoiceSpaceYScript, "0"), 
    param.ChoiceOffsetXScript = stringParser(paramSource.ChoiceOffsetXScript, "0"), 
    param.ChoiceOffsetYScript = stringParser(paramSource.ChoiceOffsetYScript, "0"), 
    param.ChoiceAnimOsXScript = stringParser(paramSource.ChoiceAnimOsXScript, "0"), 
    param.ChoiceAnimOsYScript = stringParser(paramSource.ChoiceAnimOsYScript, "0"), 
    param.ChoiceAnimOpacity = numberParser(paramSource.ChoiceAnimOpacity, 0), param.ExtraParams = listParser(paramSource.ExtraParams, numberParser, 0), 
    param.OpenAnimParams = listParser(paramSource.OpenAnimParams, numberParser, 0), 
    param.CloseAnimParams = listParser(paramSource.CloseAnimParams, numberParser, 0), 
    param.DefaultUseGal = booleanParser(paramSource.DefaultUseGal, !0);
}();

const Sprite_GalChoiceWindow = function() {
    const PLUGIN_PARAMS = (param = MK_PluginData.MK_GalChoiceWindow.param, {
        SkinImage: param.SkinImage,
        ChoiceWidth: param.ChoiceWidth,
        ChoiceHeight: param.ChoiceHeight,
        WindowOffsetX: param.WindowOffsetX,
        WindowOffsetY: param.WindowOffsetY,
        TextPaddingX: param.TextPaddingX,
        TextPaddingY: param.TextPaddingY,
        ChoiceSpaceYScript: param.ChoiceSpaceYScript,
        ChoiceOffsetXScript: param.ChoiceOffsetXScript,
        ChoiceOffsetYScript: param.ChoiceOffsetYScript,
        ChoiceAnimOsXScript: param.ChoiceAnimOsXScript,
        ChoiceAnimOsYScript: param.ChoiceAnimOsYScript,
        ChoiceAnimOpacity: param.ChoiceAnimOpacity,
        ExtraParams: param.ExtraParams,
        OpenAnimParams: param.OpenAnimParams,
        CloseAnimParams: param.CloseAnimParams
    });
    var param;
    const Window_TextPanel = function() {
        function Window_TextPanel() {
            this.initialize(...arguments);
        }
        return ((Window_TextPanel.prototype = Object.create(Window_Base.prototype)).constructor = Window_TextPanel).prototype.initialize = function(width, height) {
            Window_Base.prototype.initialize.call(this, new Rectangle(0, 0, width, height)), 
            this.padding = 0, this.margin = 0, this._container.removeChild(this._backSprite), 
            this._container.removeChild(this._frameSprite), this._clientArea.removeChild(this._contentsBackSprite), 
            this._clientArea.removeChild(this._cursorSprite), this.removeChild(this._downArrowSprite), 
            this.removeChild(this._upArrowSprite), this.removeChild(this._pauseSignSprite), 
            this.openness = 255;
        }, Object.defineProperty(Window_TextPanel.prototype, "innerWidth", {
            get: function() {
                return Math.max(0, this._width);
            },
            configurable: !0
        }), Object.defineProperty(Window_TextPanel.prototype, "innerHeight", {
            get: function() {
                return Math.max(0, this._height);
            },
            configurable: !0
        }), Window_TextPanel.prototype.flushTextState = function(textState) {
            var text = textState.buffer, outputWidth = textState.rtl, width = this.textWidth(text), height = textState.height, x = outputWidth ? textState.x - width : textState.x, y = textState.y, offsetX = Math.floor((this.innerWidth - width) / 2), offsetY = Math.floor((this.innerHeight - height) / 2);
            textState.drawing && this.contents.drawText(text, x + offsetX, y + offsetY, width, height), 
            textState.x += outputWidth ? -width : width, textState.buffer = this.createTextBuffer(outputWidth);
            outputWidth = Math.abs(textState.x - textState.startX);
            textState.outputWidth < outputWidth && (textState.outputWidth = outputWidth), textState.outputHeight = y - textState.startY + height;
        }, Window_TextPanel;
    }(), Sprite_GalChoice = function() {
        function Sprite_GalChoice() {
            this.initialize(...arguments);
        }
        return ((Sprite_GalChoice.prototype = Object.create(Sprite.prototype)).constructor = Sprite_GalChoice).prototype.initialize = function(skin, width, height, padX, padY) {
            this._choiceWidth = width || 0, this._choiceHeight = height || 0, this._textPaddingX = padX || 0, 
            this._textPaddingY = padY || 0, this._startX = 0, this._startY = 0, this._startOpacity = 0, 
            this._endX = 0, this._endY = 0, this._endOpacity = 255, this._animProgress = 0, 
            Sprite.prototype.initialize.call(this, skin || null), this.createTextPanel(width, height, padX, padY), 
            this.setPattern(0);
        }, Sprite_GalChoice.prototype.createTextPanel = function(width, height, padX, textPanel) {
            textPanel = new Window_TextPanel(width || 0, height || 0, padX || 0, textPanel || 0);
            textPanel.x = -Math.floor(this._choiceWidth / 2), textPanel.y = -Math.floor(this._choiceHeight / 2), 
            this._textPanel = textPanel, this.addChild(textPanel);
        }, Sprite_GalChoice.prototype.setPattern = function(pattern) {
            this.setFrame(0, pattern * this._choiceHeight, this._choiceWidth, this._choiceHeight);
        }, Sprite_GalChoice.prototype.setPosition = function(ex, ey, sx, sy, so) {
            arguments.length < 3 && (sx = ex), arguments.length < 4 && (sy = ey), arguments.length < 5 && (so = 255), 
            this._startX = sx, this._startY = sy, this._startOpacity = so, this._endX = ex, 
            this._endY = ey, this._endOpacity = 255;
        }, Sprite_GalChoice.prototype.updateAnimProgress = function(progress) {
            var x = this._startX + (this._endX - this._startX) * progress, y = this._startY + (this._endY - this._startY) * progress, opacity = this._startOpacity + (this._endOpacity - this._startOpacity) * progress;
            this.x = Math.round(x), this.y = Math.round(y), this.opacity = Math.round(opacity), 
            this._animProgress = progress;
        }, Sprite_GalChoice.prototype.clearText = function() {
            this._textPanel.contents.clear();
        }, Sprite_GalChoice.prototype.drawTextEx = function(text) {
            this._textPanel.drawTextEx(text, 0, 0, this._choiceWidth);
        }, Sprite_GalChoice.prototype.getTransformForHitTest = function(needRefresh) {
            return this.parent ? (needRefresh && this.updateTransform(), this.worldTransform) : (needRefresh && this.transform.updateLocalTransform(), 
            this.localTransform);
        }, Sprite_GalChoice.prototype.getHitBitmapPixelAlpha = function(x, y) {
            return this.bitmap && 0 <= x && x < this._choiceWidth && 0 <= y && y < this._choiceHeight ? this.bitmap.getAlphaPixel(x, y + Sprite_GalChoiceWindow.CHOICE_PATTERN_CHECK * this._choiceHeight) : 0;
        }, Sprite_GalChoice.prototype.hitTest = function(x, pos2) {
            var tf = this.getTransformForHitTest(!0), pos2 = new Point(x + this.anchor.x * this.width, pos2 + this.anchor.y * this.height), pos2 = tf.applyInverse(pos2);
            return 0 < this.getHitBitmapPixelAlpha(pos2.x, pos2.y);
        }, Sprite_GalChoice;
    }(), Sprite_GalChoiceWindow = function() {
        function Sprite_GalChoiceWindow() {
            this.initialize(...arguments);
        }
        Sprite_GalChoiceWindow.prototype = Object.create(Sprite.prototype), Sprite_GalChoiceWindow.prototype.constructor = Sprite_GalChoiceWindow, 
        Sprite_GalChoiceWindow.prototype.initialize = function() {
            Sprite.prototype.initialize.call(this), this._choiceStyle = null, this.applyChoiceStyleConfig(), 
            this._skinBitmap = null, this.loadSkinBitmap(), this._choiceContainer = null, this.createChoiceContainer(), 
            this._maxChoices = 6, this._choiceSprites = [], this.createAllChoiceSprites(), this._choicedIndex = -1, 
            this._clickedIndex = -1, this._closeForChoice = !1, this._msgOnChoiceIndex = -2, 
            this._openness = 0, this._openning = !1, this._closing = !0, this._active = !1;
        }, Sprite_GalChoiceWindow.prototype.applyChoiceStyleConfig = function() {
            const style = {};
            style.SkinImage = PLUGIN_PARAMS.SkinImage, style.ChoiceWidth = PLUGIN_PARAMS.ChoiceWidth, 
            style.ChoiceHeight = PLUGIN_PARAMS.ChoiceHeight, style.WindowOffsetX = PLUGIN_PARAMS.WindowOffsetX, 
            style.WindowOffsetY = PLUGIN_PARAMS.WindowOffsetY, style.TextPaddingX = PLUGIN_PARAMS.TextPaddingX, 
            style.TextPaddingY = PLUGIN_PARAMS.TextPaddingY, style.ChoiceSpaceYScript = PLUGIN_PARAMS.ChoiceSpaceYScript, 
            style.ChoiceOffsetXScript = PLUGIN_PARAMS.ChoiceOffsetXScript, style.ChoiceOffsetYScript = PLUGIN_PARAMS.ChoiceOffsetYScript, 
            style.ChoiceAnimOsXScript = PLUGIN_PARAMS.ChoiceAnimOsXScript, style.ChoiceAnimOsYScript = PLUGIN_PARAMS.ChoiceAnimOsYScript, 
            style.ChoiceAnimOpacity = PLUGIN_PARAMS.ChoiceAnimOpacity, style.ExtraParams = JSON.parse(JSON.stringify(PLUGIN_PARAMS.ExtraParams)), 
            style.OpenAnimParams = JSON.parse(JSON.stringify(PLUGIN_PARAMS.OpenAnimParams)), 
            style.CloseAnimParams = JSON.parse(JSON.stringify(PLUGIN_PARAMS.CloseAnimParams)), 
            this._choiceStyle = style, this.checkAnimParams();
        }, Sprite_GalChoiceWindow.prototype.checkAnimParams = function() {
            this._choiceStyle.OpenAnimParams = this._choiceStyle.OpenAnimParams.concat(new Array(4).fill(0)).slice(0, 4), 
            this._choiceStyle.CloseAnimParams = this._choiceStyle.CloseAnimParams.concat(new Array(4).fill(0)).slice(0, 4);
        }, Sprite_GalChoiceWindow.prototype.loadSkinBitmap = function() {
            var imageName = this._choiceStyle.SkinImage;
            this._skinBitmap = imageName ? ImageManager.loadSystem(imageName) : null;
        }, Sprite_GalChoiceWindow.prototype.createChoiceContainer = function() {
            var container = new Sprite();
            container.x = Graphics.width / 2, container.y = Graphics.height / 2, this._choiceContainer = container, 
            this.addChild(this._choiceContainer);
        }, Sprite_GalChoiceWindow.prototype.createAllChoiceSprites = function() {
            var style = this._choiceStyle, num = this._maxChoices || 0, container = this._choiceContainer;
            this._choiceSprites = [];
            for (var i = 0; i < num; i++) {
                var sprite = new Sprite_GalChoice(this._skinBitmap || null, style.ChoiceWidth, style.ChoiceHeight, style.TextPaddingX, style.TextPaddingY);
                sprite.anchor = new Point(.5, .5), sprite.visible = !1, this._choiceSprites.push(sprite), 
                container.addChildAt(sprite, 0);
            }
        }, Sprite_GalChoiceWindow.prototype.start = function() {
            this.resetChoiceSprites();
            var defaultIndex = $gameMessage.choiceDefaultType();
            0 <= defaultIndex && this.selectChoice(defaultIndex), this.setMsgOnChoiceIndex($gameMessage.choiceCancelType()), 
            this.open();
        }, Sprite_GalChoiceWindow.prototype.update = function() {
            this.updateOpenning(), this.updateClosing(), this._active && (this.updateKeyInput() || this.updateTouchInput()), 
            Sprite.prototype.update.apply(this, arguments);
        }, Sprite_GalChoiceWindow.prototype.activate = function() {
            this._active = !0;
        }, Sprite_GalChoiceWindow.prototype.deactivate = function() {
            this._active = !1;
        }, Sprite_GalChoiceWindow.prototype.isActive = function() {
            return this._active || this._openning || this._closing;
        }, Sprite_GalChoiceWindow.prototype.canInput = function() {
            return this._active;
        }, Sprite_GalChoiceWindow.prototype.isBusy = function() {
            return 0 < this._openning;
        }, Sprite_GalChoiceWindow.prototype.open = function() {
            this._openness < 255 && (this._openning = !0, this._closing = !1), this.visible = !0;
        }, Sprite_GalChoiceWindow.prototype.close = function(forChoice) {
            0 < this._openness && (this._closing = !0, this._openning = !1, this._closeForChoice = !!forChoice), 
            this.deactivate();
        }, Sprite_GalChoiceWindow.prototype.updateOpenning = function() {
            this._openning && (this._closing = !1, this._openness += 8, 255 <= this._openness && (this._openness = 255, 
            this._openning = !1, this.activate()), this.refreshForOpenness(!1));
        }, Sprite_GalChoiceWindow.prototype.updateClosing = function() {
            this._closing && (this._openning = !1, this._openness -= 8, this._openness <= 0 && (this._openness = 0, 
            this._closing = !1, this.deactivate(), this.visible = !1, this._closeForChoice && ($gameMessage.onChoice(this._msgOnChoiceIndex), 
            this._messageWindow.terminateMessage())), this.refreshForOpenness(!0));
        }, Sprite_GalChoiceWindow.prototype.refreshForOpenness = function(forClose) {
            for (var progress = 0, progress = this._openness <= 0 ? 0 : 255 <= this._openness ? 1 : forClose ? 1 - this.calChoiceCloseAnimProgress(1 - this._openness / 255) : this.calChoiceOpenAnimProgress(this._openness / 255), i = 0, l = this._choiceSprites.length; i < l; i++) this._choiceSprites[i].updateAnimProgress(progress);
        }, Sprite_GalChoiceWindow.prototype.calCubicBezierBase = function(p0, p1, p2, p3, t) {
            return p0 * (1 - t) * (1 - t) * (1 - t) + 3 * p1 * t * (1 - t) * (1 - t) + 3 * p2 * t * t * (1 - t) + p3 * t * t * t;
        }, Sprite_GalChoiceWindow.prototype.findCubicBezierYByX = function(x1, y1, x2, y2, targetX) {
            for (var tx, resT = 0, minDiff = targetX, t = 0; t <= 1; t += .001) tx = this.calCubicBezierBase(0, x1, x2, 1, t), 
            minDiff > Math.abs(tx - targetX) && (resT = t, minDiff = Math.abs(tx - targetX));
            return this.calCubicBezierBase(0, y1, y2, 1, resT);
        }, Sprite_GalChoiceWindow.prototype.calChoiceOpenAnimProgress = function(rate) {
            return this.findCubicBezierYByX(...this._choiceStyle.OpenAnimParams, rate);
        }, Sprite_GalChoiceWindow.prototype.calChoiceCloseAnimProgress = function(rate) {
            return this.findCubicBezierYByX(...this._choiceStyle.CloseAnimParams, rate);
        }, Sprite_GalChoiceWindow.CHOICE_PATTERN_NORMAL = 0, Sprite_GalChoiceWindow.CHOICE_PATTERN_HOVER = 1, 
        Sprite_GalChoiceWindow.CHOICE_PATTERN_PRESS = 2, Sprite_GalChoiceWindow.CHOICE_PATTERN_DISABLED = 3, 
        Sprite_GalChoiceWindow.CHOICE_PATTERN_CHECK = 4, Sprite_GalChoiceWindow.prototype.resetChoiceSprites = function() {
            for (var style = this._choiceStyle, choices = $gameMessage.choices().clone(), choiceNum = choices.length, perWidth = style.ChoiceWidth, perHeight = style.ChoiceHeight, windowOffsetX = style.WindowOffsetX, windowOffsetY = style.WindowOffsetY, spaceY = this.executeStyleScript(style.ChoiceSpaceYScript, style, Graphics.width, Graphics.height, perWidth, perHeight, choiceNum, 0, style.ExtraParams, -1), startY = -Math.floor((choiceNum - 1) * spaceY / 2), index = 0, l = this._choiceSprites.length; index < l; index++) {
                var offsetY, animOsX, animOsY, baseX, baseY, sprite = this._choiceSprites[index], text = choices[index];
                index < choiceNum ? (sprite.setPattern(Sprite_GalChoiceWindow.CHOICE_PATTERN_NORMAL), 
                baseY = this.executeStyleScript(style.ChoiceOffsetXScript, style, Graphics.width, Graphics.height, perWidth, perHeight, choiceNum, spaceY, style.ExtraParams, index), 
                offsetY = this.executeStyleScript(style.ChoiceOffsetYScript, style, Graphics.width, Graphics.height, perWidth, perHeight, choiceNum, spaceY, style.ExtraParams, index), 
                animOsX = this.executeStyleScript(style.ChoiceAnimOsXScript, style, Graphics.width, Graphics.height, perWidth, perHeight, choiceNum, spaceY, style.ExtraParams, index), 
                animOsY = this.executeStyleScript(style.ChoiceAnimOsYScript, style, Graphics.width, Graphics.height, perWidth, perHeight, choiceNum, spaceY, style.ExtraParams, index), 
                sprite.setPosition((baseX = windowOffsetX + 0) + baseY, (baseY = windowOffsetY + startY + index * spaceY) + offsetY, baseX + animOsX, baseY + animOsY, style.ChoiceAnimOpacity), 
                sprite.updateAnimProgress(0), sprite.clearText(), sprite.drawTextEx(text), sprite.visible = !0) : sprite.visible = !1;
            }
        }, Sprite_GalChoiceWindow.prototype.executeStyleScript = function(script, style, sw, sh, cw, ch, cn, spy, params, index) {
            try {
                return eval(script);
            } catch (e) {
                return console.warn("style script error.\n", e), 0;
            }
        }, Sprite_GalChoiceWindow.prototype.unselectChoice = function() {
            var choiceSprite = this._choiceSprites[this._choicedIndex];
            choiceSprite && choiceSprite.setPattern(Sprite_GalChoiceWindow.CHOICE_PATTERN_NORMAL), 
            this._choicedIndex = -1;
        }, Sprite_GalChoiceWindow.prototype.selectChoice = function(index) {
            this.unselectChoice(), this.unclickChoice();
            var choiceSprite = this._choiceSprites[index];
            choiceSprite && choiceSprite.setPattern(Sprite_GalChoiceWindow.CHOICE_PATTERN_HOVER), 
            this._choicedIndex = index;
        }, Sprite_GalChoiceWindow.prototype.unclickChoice = function(index) {
            var choiceSprite = this._choiceSprites[this._clickedIndex];
            choiceSprite && choiceSprite.setPattern(Sprite_GalChoiceWindow.CHOICE_PATTERN_NORMAL), 
            this._clickedIndex = -1;
        }, Sprite_GalChoiceWindow.prototype.clickChoice = function(index) {
            this.unselectChoice(), this.unclickChoice();
            var choiceSprite = this._choiceSprites[index];
            choiceSprite && choiceSprite.setPattern(Sprite_GalChoiceWindow.CHOICE_PATTERN_PRESS), 
            this._clickedIndex = index;
        };
        const TouchStateLastMap = {};
        function testForTouchState() {
            var key, newState = {
                isHovered: TouchInput.isHovered(),
                isClicked: TouchInput.isClicked(),
                isPressed: TouchInput.isPressed(),
                isLongPressed: TouchInput.isLongPressed(),
                isMoved: TouchInput.isMoved(),
                isReleased: TouchInput.isReleased(),
                isRepeated: TouchInput.isRepeated(),
                isTriggered: TouchInput.isTriggered(),
                isCancelled: TouchInput.isCancelled()
            }, arr = [];
            for (key in newState) TouchStateLastMap[key] !== newState[key] && (TouchStateLastMap[key] = newState[key], 
            arr.push(key), arr.push(!!newState[key]));
            console.log(...arr);
        }
        return Sprite_GalChoiceWindow.prototype.hitChoiceIndex = function(x, y) {
            for (var i = 0, l = this._choiceSprites.length; i < l; i++) if (this._choiceSprites[i].hitTest(x, y)) return i;
            return -1;
        }, Sprite_GalChoiceWindow.prototype.updateTouchInput = function() {
            var hitX = TouchInput.x, hitY = TouchInput.y;
            if (TouchInput.isHovered()) {
                var hitIndex = this.hitChoiceIndex(hitX, hitY);
                this.onHovered(hitIndex);
            } else if (TouchInput.isPressed()) {
                hitIndex = this.hitChoiceIndex(hitX, hitY);
                this.onPressed(hitIndex);
            } else if (TouchInput.isReleased()) {
                hitIndex = this.hitChoiceIndex(hitX, hitY);
                this.onReleased(hitIndex);
            } else {
                if (!TouchInput.isCancelled()) return !1;
                this.onCanceled();
            }
        }, Sprite_GalChoiceWindow.prototype.onHovered = function(index) {
            0 <= index && this.selectChoice(index);
        }, Sprite_GalChoiceWindow.prototype.onPressed = function(index) {
            0 <= index && this.clickChoice(index);
        }, Sprite_GalChoiceWindow.prototype.onReleased = function(index) {
            0 <= index ? (this.unselectChoice(), this.unclickChoice(), this._clickedIndex === index ? this.processOk(this._clickedIndex) : this.processOk(index)) : (this.selectChoice(this._clickedIndex), 
            this.unclickChoice());
        }, Sprite_GalChoiceWindow.prototype.onCanceled = function() {
            this.isCancelEnabled() && this.processCancel();
        }, Sprite_GalChoiceWindow.prototype.updateKeyInput = function() {
            if (Input.isRepeated("down") || 0 < TouchInput.wheelY) this.onCursorNext(Input.isTriggered("down")); else if (Input.isRepeated("up") || TouchInput.wheelY < 0) this.onCursorLast(Input.isTriggered("up")); else if (Input.isRepeated("ok")) this.processOk(this._choicedIndex); else {
                if (!Input.isRepeated("cancel")) return !1;
                this.processCancel();
            }
        }, Sprite_GalChoiceWindow.prototype.currentChoiceNum = function() {
            return $gameMessage.choices().length;
        }, Sprite_GalChoiceWindow.prototype.onCursorNext = function(canLoop) {
            var index;
            0 <= this._choicedIndex ? (index = this._choicedIndex + 1) >= this.currentChoiceNum() ? canLoop && (this.playCursorSound(), 
            this.selectChoice(0)) : (this.playCursorSound(), this.selectChoice(index)) : (this.playCursorSound(), 
            this.selectChoice(0));
        }, Sprite_GalChoiceWindow.prototype.onCursorLast = function(canLoop) {
            var index;
            0 <= this._choicedIndex ? (index = this._choicedIndex - 1) < 0 ? canLoop && (this.playCursorSound(), 
            this.selectChoice(this.currentChoiceNum() - 1)) : (this.playCursorSound(), this.selectChoice(index)) : (this.playCursorSound(), 
            this.selectChoice(this.currentChoiceNum() - 1));
        }, Sprite_GalChoiceWindow.prototype.setMessageWindow = function(messageWindow) {
            this._messageWindow = messageWindow;
        }, Sprite_GalChoiceWindow.prototype.updateInputData = function() {
            Input.update(), TouchInput.update();
        }, Sprite_GalChoiceWindow.prototype.playCursorSound = function() {
            SoundManager.playCursor();
        }, Sprite_GalChoiceWindow.prototype.playOkSound = function() {
            SoundManager.playOk();
        }, Sprite_GalChoiceWindow.prototype.playBuzzerSound = function() {
            SoundManager.playBuzzer();
        }, Sprite_GalChoiceWindow.prototype.playCancelSound = function() {
            SoundManager.playCancel();
        }, Sprite_GalChoiceWindow.prototype.isCancelEnabled = function() {
            return -1 !== $gameMessage.choiceCancelType();
        }, Sprite_GalChoiceWindow.prototype.needsCancelButton = function() {
            return -2 === $gameMessage.choiceCancelType();
        }, Sprite_GalChoiceWindow.prototype.setMsgOnChoiceIndex = function(index) {
            this._msgOnChoiceIndex = index;
        }, Sprite_GalChoiceWindow.prototype.processOk = function(index) {
            0 <= index ? (this.playOkSound(), this.setMsgOnChoiceIndex(index), this.unselectChoice(), 
            this.unclickChoice(), this.close(!0), this.updateInputData()) : this.playBuzzerSound();
        }, Sprite_GalChoiceWindow.prototype.processCancel = function() {
            this.playCancelSound(), this.setMsgOnChoiceIndex($gameMessage.choiceCancelType()), 
            this.unselectChoice(), this.unclickChoice(), this.close(!0), this.updateInputData();
        }, Sprite_GalChoiceWindow;
    }();
    return Sprite_GalChoiceWindow;
}();

!function() {
    const _MK_Scene_Message_createChoiceListWindow = Scene_Message.prototype.createChoiceListWindow;
    Scene_Message.prototype.createChoiceListWindow = function() {
        _MK_Scene_Message_createChoiceListWindow.apply(this, arguments), this._galChoiceListWindow = new Sprite_GalChoiceWindow(), 
        this.addWindow(this._galChoiceListWindow);
    };
    const _MK_Scene_Message_associateWindows = Scene_Message.prototype.associateWindows;
    Scene_Message.prototype.associateWindows = function() {
        _MK_Scene_Message_associateWindows.apply(this, arguments);
        const messageWindow = this._messageWindow;
        messageWindow.setGalChoiceListWindow(this._galChoiceListWindow), this._galChoiceListWindow.setMessageWindow(messageWindow);
    };
    const _MK_Window_Message_initMembers = Window_Message.prototype.initMembers;
    Window_Message.prototype.initMembers = function() {
        _MK_Window_Message_initMembers.apply(this, arguments), this._galChoiceListWindow = null;
    }, Window_Message.prototype.setGalChoiceListWindow = function(galChoiceListWindow) {
        this._galChoiceListWindow = galChoiceListWindow;
    };
    const _MK_Window_Message_isAnySubWindowActive = Window_Message.prototype.isAnySubWindowActive;
    Window_Message.prototype.isAnySubWindowActive = function() {
        return _MK_Window_Message_isAnySubWindowActive.apply(this, arguments) || this._galChoiceListWindow.isActive();
    };
    const _MK_Window_Message_startInput = Window_Message.prototype.startInput;
    Window_Message.prototype.startInput = function() {
        return $gameMessage.isChoice() && this.useGalChoiceListWindow() ? (this._galChoiceListWindow.start(), 
        !0) : _MK_Window_Message_startInput.apply(this, arguments);
    }, Window_Message.prototype.useGalChoiceListWindow = function() {
        return this._galChoiceListWindow && $gameSystem.galChoiceWindow_isEnabled();
    };
}(), function() {
    const PLUGIN_PARAMS = {
        DefaultUseGal: MK_PluginData.MK_GalChoiceWindow.param.DefaultUseGal
    }, _MK_Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _MK_Game_System_initialize.apply(this, arguments), this._galChoiceWindow_enabled = !1;
    }, Game_System.prototype.galChoiceWindow_isEnabled = function() {
        return this._galChoiceWindow_enabled;
    }, Game_System.prototype.galChoiceWindow_enable = function() {
        this._galChoiceWindow_enabled = !0;
    }, Game_System.prototype.galChoiceWindow_disable = function() {
        this._galChoiceWindow_enabled = !1;
    }, Game_System.prototype.galChoiceWindow_setDefault = function() {
        PLUGIN_PARAMS.DefaultUseGal ? this.galChoiceWindow_enable() : this.galChoiceWindow_disable();
    };
    const _MK_DataManager_setupNewGame = DataManager.setupNewGame;
    DataManager.setupNewGame = function() {
        _MK_DataManager_setupNewGame.apply(this, arguments), $gameSystem.galChoiceWindow_setDefault();
    };
}(), function() {
    var paramParser = MK_PluginData.MK_GalChoiceWindow.paramParser;
    paramParser.numberParser, paramParser.stringParser;
    const booleanParser = paramParser.booleanParser;
    paramParser.structParser, paramParser.listParser;
    !function registerCommand(commandName, func) {
        PluginManager.registerCommand("MK_GalChoiceWindow", commandName, func);
    }("ChoiceMode", function(args) {
        booleanParser(args.useGalgame, !0) ? $gameSystem.galChoiceWindow_enable() : $gameSystem.galChoiceWindow_disable();
    });
}();