//=============================================================================
// ULDS.js
//=============================================================================

/*:
 * @target MZ MV
 * @plugindesc 无限图层显示系统 (内附详细教程)
 * @author taroxd
 *
 * @param Default Path
 * @text 默认文件夹
 * @desc img文件夹中存储图片的的默认文件夹。
 * @default parallaxes
 *
 * @param Default Z
 * @text 默认Z坐标
 * @desc 贴图的默认z坐标。
 * @type number
 * @decimals 2
 * @min -15
 * @max 15
 * @default 0.5
 *
 * @help 此插件不提供插件指令。
 * 
 * 
 * 
 *  === 介绍 ===
 * 
 * 允许玩家使用简单的地图注释为RMMV地图添加无限的图层，以呈现更好的游戏画面。
 * 
 * 
 * 
* ---------------------------------------------------------------------
*  === ULDS插件使用说明 ===
*
* ULDS插件通过配置地图注释来实现图层功能。
*
*  == 1. 地图注释（基础） ==
*
* 在地图注释中按以下格式书写：
*
      <ulds> {
       参数1: 值1,
       参数2: 值2,
       ......
       参数n: 值n
    } </ulds>
*
*    <ulds>和</ulds>之间要以 JSON 格式书写。请自行学习JSON格式如何书写。
*   
*    其中，必须有的参数是：
*
*    "name": 图片名称。
*
*    "x": 图片的x坐标。x坐标越大，图片越靠右。
*         若为 纯数字 ，则表示以 屏幕左上角 为原点的图片x坐标。图片横向位置始终与屏幕保持一致。
*         若为 this.rx(n) ，则表示以 地图左上角 为原点的图片x坐标。
*         n 可以是以下2种情况：
*           - 若n为 数字，则表示以 地图左上角 为原点的图片x坐标，且x坐标为 n 。
*             例如 this.rx(48) 指的是图片会贴在地图x坐标为 48 像素的位置。
*           - 若n为 t ，则图片将会被从左向右滚动播放。
*             如果是 -t ，则图片会被从右向左滚动播放。
*
*    "y": 图片的y坐标。y坐标越大，图片越靠下。
*         若为 纯数字 ，则表示以 屏幕左上角 为原点的图片y坐标。图片纵向位置始终与屏幕保持一致。
*         若为 this.ry(n) ，则表示以 地图左上角 为原点的图片y坐标。
*         n 可以是以下2种情况：
*           - 若n为 数字，则表示以 地图左上角 为原点的图片y坐标，且y坐标为 n 。
*             例如 this.ry(48) 指的是图片会贴在地图y坐标为 48 像素的位置。
*           - 若n为 t ，则图片将会被从上到下滚动播放。
*             如果是 -t ，则图片会被从下向上滚动播放。
*
*    其他可供选择的基础参数有：
*
*    "z": 图片的z层级。默认是0.5（可在插件参数中设置）。小数点可精确至后两位。建议大于1，且为浮点数，这样设置可以最大程度地兼容其他涉及图层的插件（如灯光插件等）。
*         指定图片可以覆盖在z层级小于该图片z层级的所有图片之上。
*         例如，若指定A图片z层级为6，B图片z层级为10，则A图片会覆盖所有z层级低于6的贴图，但会被B图片覆盖。
*         RMMV中各贴图的原生层级：0 -> 远景，3 -> 玩家/事件，4 -> 星标图块。
*
*    "path": 自定义图片所在的文件夹。文件夹必须在img文件夹里。默认是parallaxes（插件参数中可配置）
*
*    "loop": true/false
*            是否循环播放图片。
*
*    还有一些参数，需要开发人员对Sprite类, Bitmap类属性具有初步的认识：
*    （不过本人已将常用参数全部列在下方了，即便不懂脚本的小伙伴们应该也可以看懂）
*   
*    "smooth": true/false
*                   是否应用平滑缩放。
*
*    "blendMode": 图片的混合模式。默认是0（正常）。
*                        RMMV原生混合模式：0 -> 正常，1 -> 叠加，2 -> 正片叠底，3 -> 滤色
*
*    "opacity": 图片的不透明度。0-255间的一个数字。默认是255（完全不透明）。
*
*    "rotation": 图片的旋转角度（弧度）。数字 兀 在JS中是 Math.PI 。
*
*    "scale.x": 图片被横向缩放的倍数。默认是1（不放大）。可以是小数。
*                    如果是负数，图片就会被左右镜像翻转。
*
*    "scale.y": 图片被纵向缩放的倍数。默认是1（不放大）。可以是小数。
*                    如果是负数，图片就会被上下镜像翻转。
*
*    "visible": true/false
*                 图片是否可见。
*
*
*
*  == 2. 地图注释（高级） ==
*
* 上面模块讲的是地图注释的基本格式。这一模块将会讲到该插件的一些高级用法和提供的一些引用。
*
*
* 无限图层的设置在游玩时是即时动态更新的。
* 所以在地图注释中，可以调用$gameSwitches和$gameVariables等脚本的值来实时控制图片的状态。
*
* 例如：
*
* · 参数"visible"可以这样写：
*   "visible": "$gameSwitches.value(2)"
*   - 这表示由开关#2来实时控制图片的显示与隐藏。
*
* · 参数"rotation"可以这样写：
*   "rotation": "$gameVariables.value(1)*Math.PI"
*   - 这表示由变量#1来控制图片的旋转角度。变量#1最好是介于0到2的数字。
*
* 当然，以此类推，其他插件提供的脚本变量/开关也可以使用。
*
*
* 也许各位会觉得每次写$gameVariables, $gameSwitches什么的太麻烦了，还容易写错，
* 那么可以考虑使用插件作者提供的引用：s 和 v 来代替开关和变量。
*
* 仍以上面举过的两个例子为例：
*
* · 参数"visible"可以这样写：
*   "visible": "s.value(2)"
*   - 这表示由开关#2来实时控制图片的显示与隐藏。
*
* · 参数"rotation"可以这样写：
*   "rotation": "v.value(1)*Math.PI"
*   - 这表示由变量#1来控制图片的旋转角度。变量#1最好是介于0到2的数字。
*
* 除了 s, v 这两个引用之外，插件作者还提供了一个引用。
* 还记得前面提到的 this.rx(t) 吗？
* 其中的 t 也是一个引用。t 代表每帧都会自增（自己+1）的一个数字。初始值是0。
*
* 一个地图中可以添加多个注释。利用z层级来控制各图层的叠加情况，就可以非常灵活地制作视差地图了！
*
*
*
*   == 3. 例子 ==
*
   <ulds> {
     "name": "BlueSky",
     "x": "this.rx(t)",
     "y": 50,
     "z": 10.5,
     "loop": true,
     "scale.x": -1,
     "visible": "s.value(3)"
   } </ulds>
*   - 在地图中使用位于img/parallaxes/中的BlueSky.png图片。
*     该图片Z层级是10.5，在横向位置上以正常速度(1帧1像素)从左向右循环自滚动，在纵向位置上相对于屏幕的y坐标为50，图片被左右镜像反转，由开关#3控制显示和隐藏。
*
   <ulds> {
     "name": "Night",
     "path": "pictures",
     "x": "this.rx(48)",
     "y": "this.ry(48)",
     "z": 20,
     "visible": "s.value(5)",
     "scale.x": "v.value(2)",
     "scale.y": "v.value(2)",
     "blendMode": 2,
     "rotation": "Math.PI"
    } </ulds>
*   - 在地图中使用位于img/pictures/中的Night.png图片。
*     该图片Z层级是20，相对于地图的坐标为(48, 48)，由开关#5控制显示和隐藏，
*     横纵向缩放的倍数是变量#2的值，混合模式是正片叠底，以图片左上角为锚点，旋转180°。
*
*
*
*  == 4. 设置碰撞体积 ==
*
* ULDS插件本身不提供碰撞体积功能。
*
* 默认情况下，在地图的图块组 A组 中随意寻找 可通行图块 和 不可通行图块 各一种，
* 然后根据所使用的图层直接在RMMV地图编辑器中绘制相应可通行/不可通行区域即可。
*
* 似乎也可以使用与该插件同作者的RegionPassage.js，用区域来设置相应可通行/不可通行区域。
*
* 如果有更为细微的需求（例如半格或不规则碰撞体积），也可以找找别的插件。
* 例如QM+CollisionMap.js及其前置插件QMovement.js，允许你进行像素级移动，
* 并通过检查一张图片的颜色来设定通行设置。
* 图片白色和透明部分是可通行的地方，其他颜色不可通行。
*
*
*
*  == 5. 技巧 ==
*
* 可以先稍微熟悉一下以上四个模块的内容，再来看这一模块。
*
*
*  = 关于相对地图远景 =
*
* 设想情景：玩家正行走在一处山峰中。山峰会随着玩家的走动而移动。
* 表现形式：距离镜头近的山峰移动速度快。距离镜头远的山峰(背景)移动速度慢。
* 核心问题：解决不同山峰贴图的不同移动速度问题。
* 解决方法：在原来注释的基础上，只给各个贴图相应的注释参数"x"和"y"值乘一个PARAM即可：
*          (比如如果贴图原先位于相对于地图的(0, 0)处，就做出如下改动：)
*             "x": "this.rx(0)*PARAM",
*             "y": "this.ry(0)*PARAM",
*          其中，PARAM 是一个数字。
*        - 对于 距离镜头近 的贴图：PARAM 最好是一个1以上的数字。
*          数字越大，贴图随玩家移动的速度越快，所演绎的贴图与镜头的距离就越近。
*          记得将z层级设为4以上。
*        - 对于 距离镜头远 的贴图：PARAM 最好是一个0到1之间的小数。
*          小数越小，贴图随玩家移动的速度越慢，所演绎的贴图与镜头的距离就越远。
*          记得将z层级设为3以下。
*
*
*  = 关于动态帧图层 =
*
* 设想情景：玩家走到一处风景宜人的桃源乡暂且歇脚。湖泊中流水潺潺，好一幅生机勃勃之景。
* 表现形式：用多帧图层来表现动态的湖水。
* 核心问题：如何按照指定帧数依次显示湖水的各个图层。
* 解决方法：假设图层相对于地图位于(144, 144)，共有3帧(湖泊_1, 湖泊_2, 湖泊_3)，
*          则创建以以下格式书写的地图注释：
          <ulds> {
               "name": "湖泊_1",
               "x": "this.rx(144)",
               "y": "this.ry(144)",
               "z": 1.5,
               "visible": "v.value(10) === 0"
          } </ulds>
            <ulds> {
               "name": "湖泊_2",
               "x": "this.rx(144)",
               "y": "this.ry(144)",
               "z": 1.5,
               "visible": "v.value(10) === 1"
          } </ulds>
            <ulds> {
               "name": "湖泊_3",
               "x": "this.rx(144)",
               "y": "this.ry(144)",
               "z": 1.5,
               "visible": "v.value(10) === 2"
          } </ulds>
*        在这个例子中，属性"visible"中的条件占用了变量#10。
*        如果想替换为别的变量，直接将所有出现的"10"替换为所使用的变量ID即可。
*        随后，在地图上创建一个并行处理的事件，内容如下：
*            ◆等待：n 帧
*            ◆变量操作：#0010 = 1
*            ◆等待：n 帧
*            ◆变量操作：#0010 = 2
*            ◆等待：n 帧
*            ◆变量操作：#0010 = 0
*        n 是图层的帧间隔。
*        这样应该就没什么问题了。
*
*
*  = 关于简易光源 = 2022-12-09更新
*
* 设想情景：玩家/跟随者/事件在黑暗中行走，只有柔和的光源相伴左右，营造出一种静谧的氛围。
*
* 注意，这一例子主要是讲解将图片绑定在玩家/跟随者/事件上的方法和介绍图片锚点属性。
* 这一部分所制作的光源一个地图只能使用一张，局限性非常大，如果有需求的话还是要使用插件。
* 不过通过将图片绑定在玩家/跟随者/事件上与动态帧图层方法结合起来，可以制作类似角色行走图特效等的效果。
*
* 0.光源图片的配置
*
* 这一部分所要用到的光源图片并非一张简单的有色光源图片，而是背景为纯黑色，只有中心部分镂空作为光源的一张图片。
* 图片的尺寸下限以游戏分辨率为准。一格默认为48像素x48像素，如果分辨率为17格x13格（816像素x624像素），那么图片的大小至少应当是(17x2-1)格x(13x2-1)格，即1584像素x1200像素。
* 在这一情况下，考虑到图片文件的大小，可以适当缩小图片，使用时设置"scale.x"和"scale.y"属性调整缩放值即可。
*
* 1.简易圆形光源 (烛光)
*
* 表现形式：以玩家/跟随者/事件为中心，周身环绕着圆形的光源。
* 核心问题：如何将圆形光源图片绑定在玩家/跟随者/事件身上。
* 解决方法：假设圆形光源图片名为 light.png ，为了将图片绑定到*玩家*身上，
*          则创建以以下格式书写的地图注释：
          <ulds> {
               "name": "light",
               "x": "this.rx(($gamePlayer._realX+1/2)*$gameMap.tileWidth())",
               "y": "this.ry(($gamePlayer._realY+1/2)*$gameMap.tileHeight())",
               "z": 5,
               "anchor.x": 0.5,
               "anchor.y": 0.5,
               "visible": "v.value(11) == 1"
          } </ulds>
*        将变量#11的值设为1时图片就会显现出来。
*
*        其中，"anchor.x"和"anchor.y"属性是指图片的锚点。锚点的位置将会影响图片的旋转和缩放效果。
*        锚点在左上角时"anchor.x"和"anchor.y"分别为0, 0，在中央时分别为0.5, 0.5，在右下角时分别为1, 1，以此类推。
*
*        ※如果想将光源图片绑定到*跟随者*上的话，就将"x""y"属性中的$gamePlayer替换成$gamePlayer.followers().visibleFollowers()[INDEX]。INDEX从零开始计数，第一个跟随者（地图上玩家身后的角色）索引是0。
*        ※如果想将光源图片绑定到*事件*上的话，就将"x""y"属性中的$gamePlayer替换成$gameMap.event(EVENT_ID)。EVENT_ID是事件ID。
*
* 2.简易手电筒
*
* 表现形式：手电筒的光源将会永远朝向玩家/跟随者/事件的正前方。
* 核心问题：如何让手电筒光源图片的旋转角度与玩家的朝向相关联。
* 解决方法：假设手电筒光源图片名为flashlight.png，图片中手电筒光源朝下，为了将图片绑定到*玩家*身上，
*          则创建以以下格式书写的地图注释：
          <ulds> {
               "name": "flashlight",
               "x": "this.rx(($gamePlayer._realX+1/2)*$gameMap.tileWidth())",
               "y": "this.ry(($gamePlayer._realY+1/2)*$gameMap.tileHeight())",
               "z": 5,
               "anchor.x": 0.5,
               "anchor.y": 0.5,
               "visible": "v.value(11) == 2",
               "rotation": "(function(){var obj = $gamePlayer;if(obj.direction()==2) return 0;if(obj.direction()==4) return 1/2*Math.PI;if(obj.direction()==8) return Math.PI;if(obj.direction()==6) return -1/2*Math.PI;})()"
          } </ulds>
*        将变量#11的值设为2时图片就会显现出来。
*
* 对于将手电筒光源图片绑定到跟随者/事件上的方法，参见 1.简易圆形光源 (烛光) 部分。记得将"rotation"属性值中的$gamePlayer也替换掉。
* 
* 
*
* === 使用条款 ===
*
* MIT协议
*
*/


void function() {

    var assign = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                target[key] = source[key];
            }
        }
        return target;
    };

    var RE = /<ulds>([^]*?)<\/ulds>/ig;
    var parameters = PluginManager.parameters('ULDS');
    var DEFAULT_SETTINGS = {
        z: parseFloat(parameters['Default Z']),
        path: parameters['Default Path'],
        smooth: true
    };

    // Feel free to add your own helper.
    var Helper = {
        t: 0,

        // Converts a coordinate on the map to the corresponding coordinate on the screen.
        rx: function(x, scrollRate) {
            if (scrollRate == null) {
                scrollRate = $gameMap.tileWidth();
            }

            if (scrollRate === 0) {
                return x;
            } else {
                return $gameMap.adjustX(x / scrollRate) * scrollRate;
            }
        },

        ry: function(y, scrollRate) {
            if (scrollRate == null) {
                scrollRate = $gameMap.tileHeight();
            }

            if (scrollRate === 0) {
                return y;
            } else {
                return $gameMap.adjustY(y / scrollRate) * scrollRate;
            }
        },

        update: function() {
            ++this.t;
            this._updater(this.t, $gameSwitches, $gameVariables);
        },

        assignSettings: function(settings) {
            var code = '';
            for (var key in settings) {
                var value = settings[key];
                if (typeof(value) === 'string') {
                    // this.x = (formula);
                    // this.scale.x = (formula); // key is "scale.x"
                    code += 'this.' + key + ' = (' + value + ');\n';
                } else {
                    // if key is "scale.x"
                    // keys is ["scale", "x"]
                    var keys = key.split('.');
                    // set key to "x"
                    key = keys.pop();

                    var target = this;
                    keys.forEach(function(k) {
                        if (typeof(target) !== 'object') {
                            target[k] = {};
                        }
                        target = target[k];
                    });

                    target[key] = value;
                }
            }
            // You may log the code for debugging purpose.
            // console.log(code);
            this._updater = new Function('t', 's', 'v', code);
        }
    };

    // NOT a class constructor
    function ULDS(settings) {
        settings = assign({}, DEFAULT_SETTINGS, settings);
        var spriteClass = settings.loop ? ULDS.TilingSprite : ULDS.Sprite;
        var bitmap = ImageManager.loadBitmap('img/' + settings.path + '/',
            settings.name, settings.hue, settings.smooth);
        var sprite = new spriteClass(bitmap);

        delete settings.path;
        delete settings.name;
        delete settings.loop;
        delete settings.hue;
        delete settings.smooth;

        sprite.assignSettings(settings);

        return sprite;
    }

    ULDS.Sprite = function(bitmap) {
        Sprite.call(this, bitmap);
    };

    ULDS.Sprite.prototype = Object.create(Sprite.prototype);
    ULDS.Sprite.prototype.constructor = ULDS.Sprite;
    assign(ULDS.Sprite.prototype, Helper);

    ULDS.TilingSprite = function(bitmap) {
        TilingSprite.call(this, bitmap);
        bitmap.addLoadListener(function() {
            this.move(0, 0, bitmap.width, bitmap.height);
        }.bind(this));
    };

    ULDS.TilingSprite.prototype = Object.create(TilingSprite.prototype);
    ULDS.TilingSprite.prototype.constructor = ULDS.TilingSprite;
    assign(ULDS.TilingSprite.prototype, Helper);

    Object.defineProperties(ULDS.TilingSprite.prototype, {
        x: {
            get: function() { return -this.origin.x; },
            set: function(x) { this.origin.x = -x; }
        },
        y: {
            get: function() { return -this.origin.y; },
            set: function(y) { this.origin.y = -y; }
        }
    });

    var ct = Spriteset_Map.prototype.createTilemap;
    Spriteset_Map.prototype.createTilemap = function() {
        ct.call(this);
        $dataMap.note.replace(RE, function(_match, settings) {
            var isValid = false;
            try {
                settings = JSON.parse(settings);
                isValid = typeof(settings) === 'object';
                if (!isValid) {
                    throw 'ULDS settings should be an object';
                }
            } catch (e) {
                console.error(e);
                console.log(settings);
            }
            if (isValid) {
                this._tilemap.addChild(ULDS(settings));
            }
        }.bind(this));
    };
}();