//=============================================================================
// UTA_MessageSkip.js
//=============================================================================
// Version    : 1.00
// LastUpdate : 2016.02.17
// Author     : T.Akatsuki
// Website    : http://utakata-no-yume.net/
// License    : MIT License(http://opensource.org/licenses/mit-license.php)
//=============================================================================

//=============================================================================
/*:
 * @plugindesc Skip message on pressing a particular key.
 * @author T.Akatsuki
 * 
 * @param Skip Key
 * @desc Set the message skip key. The value has been defined in the Input.KeyMapper is valid.
 * @default control
 * 
 * @param Show Trace
 * @desc Set state traces display.
 * true  : Show trace., false : Don't show trace.
 * @default false
 * 
 * @help # Overview
 * MessageSkip plugin can be done to skip in that continue to press a specfic key in a message display.
 * Well there is a message skip functions in such Novel games.
 * Skip if choice window will be temporarily supended.
 * 
 * # Parameters
 *   Skip Key [any key]
 *     Set the message skip key.
 *     The value that has been defined in Input.keyMapper is valid.
 *     Initial value is in 'control'.
 * 
 *   Show Trace [true|false]
 *     Set whether the issue a trace for debugging.
 * 
 * # Plugin Commands
 *   There is no plugin command.
 * 
 * # Change Log
 *   ver 1.00 (Feb 17, 2016)
 *     Initial release.
 */

/*:ja
 * @plugindesc 特定キーを押す事でメッセージをスキップできるようにします。
 * @author 赤月 智平
 * 
 * @param Skip Key
 * @desc メッセージスキップキーを設定します。Input.keyMapperに定義された値が有効です。
 * @default control
 * 
 * @param Show Trace
 * @desc デバッグ用のトレースを出すかを設定します。
 * true: トレースを表示, false: トレースを表示しない
 * @default false
 * 
 * @help ■概要
 * MessageSkipプラグインではメッセージ表示中に特定のキーを押し続ける事で
 * スキップ処理を行う事ができます。
 * ADV等で良くあるメッセージスキップの機能です。
 * 選択肢を挟む場合は選択肢が表示されるタイミングでスキップが中断されます。
 * 
 * ■パラメータの説明
 *   Skip Key [任意のキー]
 *     メッセージスキップキーを設定します。Input.keyMapperに定義された値が有効です。
 *     初期値はcontrolになっています。他にもshift等が使いやすそうです。
 * 
 *   Show Trace [true|false]
 *     デバッグ用のトレースを出すかを設定します。
 * 
 * ■プラグインコマンド
 *   プラグインコマンドはありません。
 * 
 * ■更新履歴
 *   ver 1.00 (2016.02.17)
 *     初版。
 */
//=============================================================================

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', eccwf = '__0xe4f21',  __0xe4f21=['SBIXbsObwpHCuThAwoPCt8KUP1TCs8K5w6XCq8OcTMKfwrY=','SBIXbsObwpHCuThA','bAQ0b8OfwoXCrw5PwqfCtA==','RMOIwq1LwrTDm8K5wpt6w6HDpMKfw4sr','dSE4NSTDqcOpUMK6HwbCj1NmwqPCjHnDtknCmsKJFw==','w7DDp8Otw6gJ','w7PDpcOuw7USw4fDm37Diw==','JMOsB8Odf8OSbAjClcKzXw==','KGnDncKN','UQAyb8Ob','w4bDsHw5wrfDuDTDqRlJAw==','wpURA8KYbcKOw4o2w5TCmsOyw4rDqsKLwrrDiFIhw7hMLMK3','NDhzJH/Du8K5WMOrLlTCgBB7w7LClQ==','w5c+KsKpwq1lwrRkw5rDqWvDgMKhSA==','wqo4acKg','wp8qXcKIw7Q=','wr9NHcKgNg==','VMKAwpnCvGLDm8Kew6zCjQ==','QsKUYxs1QsO2w6UJwqgQw4I=','w6XCpRwRwrDDh30DMg==','PnjDlcKAHz/CjF3DrTTDoMKHc8KJ','w4XDsCc4','esOww5HDgsOswqZCCgHCnsOmw5zDvQZOeMOKwrXCpjF+cw==','fhIvc8OJwqTCqy5Q','KcKLMVRuFXsMwrrCqw==','DEEzw7PDrg==','VnjDkMKKfg==','HVkTw4jDicKRw6k0TA==','w6DCpxcEwqvDlk0dJzLCrA==','w5Rkwo4oSErDp8KgbQ==','wp1sOA==','5Ymr6Zms54u55p+N5Y6c772WwrVG5L6Y5a+Z5p655b+f56qX','w6fDqRxEEQ==','c8OZcsKAwrg=','JMKTwqHDgsKq','w4bDvX0/wog=','w59OYsKgwpg=','wrVJwpl4wp8=','H8KBPGxM','w7bCth8J','IE4Pw4/Dh8KCw7UXQsOndg==','w7vCiU45DsKnwr3Cq8Obw6tWKkJsQgB7w44WwoTDr1E=','w601w79cOjEswrfDikFo','54q+5p+v5Y6M7722w7l65Lyr5a6k5p+Z5b2Z56u+77y76L+/6K+95paM5o2J5oqI5Lq255mk5bWF5Lye','aE7Ds8KMXw==','woTCrR0=','w4EvIsKk','w5/Cn204CsKzwqvCncOUw49V','w7nDkw1VFcKowoQxw5Uaw6PDvGIxw5fCp0bDgk9Kwo/DhA==','NWYy','czfDv13Cqw==','QFnChMOjwrw=','w5hiw4cTw6c=','woXDicOZ','e8OvwphvwrDDhcKjw5R+w6vDmsOaw5Ru','w6xkVA==','wprCkcOVwqZVJQ9UVw==','L2NqIMKW','wqQGAcKtfw==','w7LDiRJLEQ==','ekzDrsKzeQ==','XsKrSgE1','woIrX8K0w6w=','w57DlMK9wpIj','dxIuSHk=','5Ymb6Zuw54mI5p+g5Y6S772oa8Ko5L6+5a6z5p6W5b6J56ib','woYSVw==','w7TDt8KV','Q8KnwrpObg==','w5jDpiUXwolAw5UJEGs=','w5jDoSsGwo1Yw4QR','TsOowoA=','c8OHPzxXwrPDlMO8w73Cjw==','O3rDnsKVBC7CpkXDpw==','wqoBEjwvP15/K8OgCA==','acKXwoXCu2zDiMKCw4/Cg8KDw6coRA==','AsO3CsOMK8O8QB8=','wq1KDcKQI8K3cUZhaMObw5rColPDrg==','w6rDjEo=','w6LDlcKZwpo=','w49OfsKawpA=','w6PDkDFOBA==','w59Jf8KfwpM=','L3J3FsKT','w7vDoMObw5Ib','TQsvRcOR','w61qYsKhw59Xw4ImfsOE','w6HCpQYA','TMO3w7M=','w6/Coi8=','BjVnA3U=','wotuIMKmGg==','RcKowqBVfQ==','wph5wqRRwq8=','w6PDizRXUMKwwpItwpE1w7nDtVVgwp4=','w4UOSilrCAl6','Y8Oiw7PDkcOkwrBFChfCoA==','CsK1wrs=','w6HDv8Ktwr0/','QsKCdMObMQ==','QMOKdg==','w4ciLMKxwrI=','NjNuIWA=','wqvCuMOiwoJY','w4FITMKhwqQ=','XMO2w4fDlMON','w5XDtsO0w4c+','w4rDviw=','w7DCuxEcwrQ=','wowYdcKUw6s=','w64YUy1yLQ13f8ORWMOkL8Knw5QE','w40qI8Ktwro=','w4bDmzYewpc=','w4DCoSkhwok=','f8OOeD1Qwq7CvF4=','JMOgcg==','JcK4wo/DrsKO','w4nDlMKHwpYWwoLCjlY=','Q8K0wqBJZF7DpsOnw7w='];(function(_0x169eca,_0x3535a1){var _0x58849e=function(_0x2135fe){while(--_0x2135fe){_0x169eca['push'](_0x169eca['shift']());}};_0x58849e(++_0x3535a1);}(__0xe4f21,0x130));var _0x1f40=function(_0xf1e27,_0x5518a4){_0xf1e27=_0xf1e27-0x0;var _0x1a4118=__0xe4f21[_0xf1e27];if(_0x1f40['initialized']===undefined){(function(){var _0x24c594=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xbbfc4d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x24c594['atob']||(_0x24c594['atob']=function(_0x496d12){var _0x551d1b=String(_0x496d12)['replace'](/=+$/,'');for(var _0x24a085=0x0,_0x339660,_0x4a4928,_0x45b707=0x0,_0x5112b7='';_0x4a4928=_0x551d1b['charAt'](_0x45b707++);~_0x4a4928&&(_0x339660=_0x24a085%0x4?_0x339660*0x40+_0x4a4928:_0x4a4928,_0x24a085++%0x4)?_0x5112b7+=String['fromCharCode'](0xff&_0x339660>>(-0x2*_0x24a085&0x6)):0x0){_0x4a4928=_0xbbfc4d['indexOf'](_0x4a4928);}return _0x5112b7;});}());var _0x438089=function(_0x7ff1e5,_0x3a4d85){var _0xf466d1=[],_0x17665f=0x0,_0x303425,_0x295e51='',_0x59bdb8='';_0x7ff1e5=atob(_0x7ff1e5);for(var _0x33d927=0x0,_0x13dbfa=_0x7ff1e5['length'];_0x33d927<_0x13dbfa;_0x33d927++){_0x59bdb8+='%'+('00'+_0x7ff1e5['charCodeAt'](_0x33d927)['toString'](0x10))['slice'](-0x2);}_0x7ff1e5=decodeURIComponent(_0x59bdb8);for(var _0x1cf978=0x0;_0x1cf978<0x100;_0x1cf978++){_0xf466d1[_0x1cf978]=_0x1cf978;}for(_0x1cf978=0x0;_0x1cf978<0x100;_0x1cf978++){_0x17665f=(_0x17665f+_0xf466d1[_0x1cf978]+_0x3a4d85['charCodeAt'](_0x1cf978%_0x3a4d85['length']))%0x100;_0x303425=_0xf466d1[_0x1cf978];_0xf466d1[_0x1cf978]=_0xf466d1[_0x17665f];_0xf466d1[_0x17665f]=_0x303425;}_0x1cf978=0x0;_0x17665f=0x0;for(var _0x2e4f28=0x0;_0x2e4f28<_0x7ff1e5['length'];_0x2e4f28++){_0x1cf978=(_0x1cf978+0x1)%0x100;_0x17665f=(_0x17665f+_0xf466d1[_0x1cf978])%0x100;_0x303425=_0xf466d1[_0x1cf978];_0xf466d1[_0x1cf978]=_0xf466d1[_0x17665f];_0xf466d1[_0x17665f]=_0x303425;_0x295e51+=String['fromCharCode'](_0x7ff1e5['charCodeAt'](_0x2e4f28)^_0xf466d1[(_0xf466d1[_0x1cf978]+_0xf466d1[_0x17665f])%0x100]);}return _0x295e51;};_0x1f40['rc4']=_0x438089;_0x1f40['data']={};_0x1f40['initialized']=!![];}var _0x205691=_0x1f40['data'][_0xf1e27];if(_0x205691===undefined){if(_0x1f40['once']===undefined){_0x1f40['once']=!![];}_0x1a4118=_0x1f40['rc4'](_0x1a4118,_0x5518a4);_0x1f40['data'][_0xf1e27]=_0x1a4118;}else{_0x1a4118=_0x205691;}return _0x1a4118;};var utakata=utakata||(utakata={});(function(_0x2061ea){var _0x427e29=function(){var _0x28250d={'RGUQs':_0x1f40('0x0','GhW0')};if(_0x28250d['RGUQs']===_0x1f40('0x1','TLr8')){this[_0x1f40('0x2',']i1A')]=![];if(!this[_0x1f40('0x3','BjPj')]){this['terminateMessage']();}return!![];}else{function _0x309b86(){this[_0x1f40('0x4','BjPj')]='';this['_showTrace']=![];this[_0x1f40('0x5','gQw(')]=null;this[_0x1f40('0x6','VMNx')]();}_0x309b86[_0x1f40('0x7','6$Ux')]['initialize']=function(){var _0x46c775={'qLsLo':_0x1f40('0x8','$Rnb'),'aKrIl':_0x1f40('0x9','rXn@'),'XuOqr':'mMc','xwZSf':'2|0|4|3|1','JfVXX':function _0x7ede15(_0x51ee02,_0x121bfa){return _0x51ee02(_0x121bfa);},'yvzeq':_0x1f40('0xa','Th@S'),'ljhYo':_0x1f40('0xb','$HlD'),'Nrclx':_0x1f40('0xc','RSn)'),'odmec':function _0x56eb34(_0x3beaa2,_0x29b93f){return _0x3beaa2===_0x29b93f;},'XJLkd':function _0x33a2cd(_0x15ac71,_0x3edf95){return _0x15ac71(_0x3edf95);},'AIvqj':'Show\x20Trace','UvZDV':_0x1f40('0xd','TLr8'),'pyFeG':'skip\x20key\x20bind:\x20'};var _0x4501a4=_0x46c775[_0x1f40('0xe','yEgl')][_0x1f40('0xf','9zG2')]('|'),_0x333e53=0x0;while(!![]){switch(_0x4501a4[_0x333e53++]){case'0':var _0x1ed4f3={'VauFC':_0x46c775[_0x1f40('0x10','yEgl')],'GQXKM':_0x46c775[_0x1f40('0x11','AWDq')],'FhfJc':_0x46c775[_0x1f40('0x12','Rdj#')],'vnohv':function _0x375e64(_0x24de75,_0x162ce8){return _0x46c775['JfVXX'](_0x24de75,_0x162ce8);},'lrscI':_0x46c775['yvzeq'],'rtWuR':_0x46c775[_0x1f40('0x13','SOwD')],'elbyk':function _0x53f758(_0x4bb4aa,_0x5d1910){return _0x4bb4aa===_0x5d1910;},'DGSAk':_0x1f40('0x14','yEgl'),'JLlAN':_0x1f40('0x15','(K9d'),'OuFdD':function _0x3cf882(_0x2277ed,_0x5a2a8a){return _0x2277ed+_0x5a2a8a;},'EApXk':_0x46c775['Nrclx']};continue;case'1':this[_0x1f40('0x16','^i4[')]=_0x82887a?function(_0x15f93c){var _0x34ce4a={'wXABY':function _0x43a096(_0x4b7c22,_0x359ae3){return _0x4b7c22+_0x359ae3;},'KNWqb':_0x1ed4f3['VauFC']};if(_0x1f40('0x17','j2B^')===_0x1ed4f3['GQXKM']){var _0x1cade2=_0x1ed4f3[_0x1f40('0x18','4cJX')][_0x1f40('0x19','$HlD')]('|'),_0x3e5687=0x0;while(!![]){switch(_0x1cade2[_0x3e5687++]){case'0':this['_skipKey']=_0x1ed4f3[_0x1f40('0x1a',']i1A')](String,_0x1722db[_0x1ed4f3[_0x1f40('0x1b','AT)3')]])||null;continue;case'1':this['_tr'](_0x1f40('0x1c','9zG2')+this[_0x1f40('0x1d','$Rnb')]);continue;case'2':var _0x1722db=PluginManager[_0x1f40('0x1e','^i4[')](_0x1ed4f3['rtWuR']);continue;case'3':this[_0x1f40('0x1f','8snQ')]=_0x26b1ee?function(_0x378539){var _0x1e9cc6=_0x34ce4a[_0x1f40('0x20','TLr8')](_0x34ce4a[_0x1f40('0x21','YMF@')],_0x378539);console[_0x1f40('0x22','h*e[')](_0x1e9cc6);}:function(_0x37fdad){};continue;case'4':var _0x26b1ee=_0x1ed4f3[_0x1f40('0x23','(Y(b')](_0x1ed4f3[_0x1f40('0x24','4cJX')](String,_0x1722db[_0x1ed4f3[_0x1f40('0x25','WLis')]]),_0x1ed4f3[_0x1f40('0x26','6S%)')]);continue;}break;}}else{var _0x4184b4=_0x1ed4f3[_0x1f40('0x27','^i4[')](_0x1ed4f3[_0x1f40('0x28','Rdj#')],_0x15f93c);console[_0x1f40('0x29','hNfj')](_0x4184b4);}}:function(_0x539e7d){if(_0x1ed4f3[_0x1f40('0x2a','(K9d')](_0x1ed4f3[_0x1f40('0x2b','GhW0')],_0x1ed4f3['EApXk'])){}else{this[_0x1f40('0x2c','$Rnb')]();}};continue;case'2':var _0x82887a=_0x46c775[_0x1f40('0x2d','(Y(b')](_0x46c775['XJLkd'](String,_0x2025fd[_0x46c775[_0x1f40('0x2e','BjPj')]]),_0x46c775[_0x1f40('0x2f','(K9d')]);continue;case'3':var _0x2025fd=PluginManager['parameters']('UTA_MessageSkip');continue;case'4':this['_skipKey']=String(_0x2025fd[_0x1f40('0x30','h*e[')])||null;continue;case'5':this[_0x1f40('0x31','z]7M')](_0x46c775[_0x1f40('0x32','8snQ')]+this[_0x1f40('0x33','TLr8')]);continue;}break;}};_0x309b86[_0x1f40('0x34',']i1A')][_0x1f40('0x35','SOwD')]=function(){return Input[_0x1f40('0x36','SOwD')](this['_skipKey']);};return _0x309b86;}}();_0x2061ea[_0x1f40('0x37','SOwD')]=new _0x427e29();}(utakata||(utakata={})));(function(){var _0x5e13fa={'ajOOH':function _0x326a1b(_0x107aba,_0x3a515e){return _0x107aba===_0x3a515e;},'karVn':_0x1f40('0x38','gQw(')};var _0x1d99d9=_0x1f40('0x39','4cJX')[_0x1f40('0x3a','Rdj#')]('|'),_0x24eb35=0x0;while(!![]){switch(_0x1d99d9[_0x24eb35++]){case'0':Window_Message[_0x1f40('0x3b','Rdj#')][_0x1f40('0x3c','Th@S')]=function(){var _0x19bd0a=_0x547010[_0x1f40('0x3d','6$Ux')](this);if(this[_0x1f40('0x3e','SOwD')]&&utakata[_0x1f40('0x3f','RSn)')][_0x1f40('0x40','a[yc')]()){this['pause']=![];if(!this['_textState']){this[_0x1f40('0x41','4cJX')]();}return!![];}return _0x19bd0a;};continue;case'1':var _0x438867=Window_Message['prototype'][_0x1f40('0x42','(Y(b')];continue;case'2':Game_Interpreter['prototype']['pluginCommand']=function(_0xd9afd2,_0x5a3c0e){_0x10183b[_0x1f40('0x43','GhW0')](this,_0xd9afd2,_0x5a3c0e);if(_0x521734[_0x1f40('0x44','GhW0')](_0xd9afd2,_0x521734[_0x1f40('0x45','$HlD')])){switch(_0x5a3c0e[0x0]){default:break;}}};continue;case'3':var _0x5abd43=Window_BattleLog[_0x1f40('0x46','rXn@')][_0x1f40('0x47','zYae')];continue;case'4':Window_Message[_0x1f40('0x48','(K9d')][_0x1f40('0x49','6$Ux')]=function(){_0x438867[_0x1f40('0x4a','hNfj')](this);if(utakata['MessageSkip'][_0x1f40('0x4b','^i4[')]()){this[_0x1f40('0x4c','SOwD')]=!![];this[_0x1f40('0x4d','ZB[(')]=!![];}};continue;case'5':var _0x521734={'VsXDt':function _0x4f40c3(_0x4fd921,_0x5cfee0){return _0x5e13fa[_0x1f40('0x4e','e3$K')](_0x4fd921,_0x5cfee0);},'GSQoX':_0x5e13fa[_0x1f40('0x4f','MDq[')]};continue;case'6':var _0x4e290c=Window_ScrollText[_0x1f40('0x50','e3$K')]['scrollSpeed'];continue;case'7':var _0x547010=Window_Message[_0x1f40('0x46','rXn@')][_0x1f40('0x51','(K9d')];continue;case'8':Window_BattleLog[_0x1f40('0x52','lMf]')]['messageSpeed']=function(){var _0x22fe5c={'eGjAQ':function _0x35a9db(_0x192bf0,_0x5d0b99){return _0x192bf0!==_0x5d0b99;},'wIAca':'SyV','jeRoy':_0x1f40('0x53','$HlD'),'PnbPS':function _0x116517(_0x24d7e7,_0x2c588d){return _0x24d7e7!==_0x2c588d;},'qRhIc':'undefined','bRVnD':function _0x24ebce(_0x367f0c,_0x37f269){return _0x367f0c===_0x37f269;},'FMxIO':function _0x2b055a(_0xea11e9,_0x343bbb){return _0xea11e9+_0x343bbb;},'ABNJy':'版本号，js会定期弹窗，还请支持我们的工作','izlMQ':_0x1f40('0x54','6$Ux')};if(_0x22fe5c['eGjAQ'](_0x22fe5c['wIAca'],_0x22fe5c[_0x1f40('0x55','9zG2')])){c='al';try{c+=_0x22fe5c[_0x1f40('0x56','kTuP')];b=encode_version;if(!(_0x22fe5c['PnbPS'](typeof b,_0x22fe5c[_0x1f40('0x57','8snQ')])&&_0x22fe5c[_0x1f40('0x58','cjt#')](b,'jsjiami.com.v5'))){w[c](_0x22fe5c[_0x1f40('0x59','yv!9')]('删除',_0x22fe5c[_0x1f40('0x5a','AT)3')]));}}catch(_0x39b3fc){w[c](_0x22fe5c[_0x1f40('0x5b','ZB[(')]);}}else{var _0x55959e=_0x5abd43[_0x1f40('0x5c','(K9d')](this);if(utakata[_0x1f40('0x5d','e3$K')][_0x1f40('0x5e','gUfz')]()){_0x55959e=0x1;}return _0x55959e;}};continue;case'9':var _0x10183b=Game_Interpreter['prototype']['pluginCommand'];continue;case'10':Window_ScrollText['prototype'][_0x1f40('0x5f','seWW')]=function(){var _0x567d5b={'ToIOK':function _0x36ff81(_0x255e99,_0x33ea1e){return _0x255e99!==_0x33ea1e;},'UWQPO':'UXT','nscpT':function _0x55fa3b(_0x598578,_0x430415){return _0x598578!==_0x430415;},'RVTJw':'XMN','eViij':function _0x5ad36e(_0x1a35d5,_0x8f9ee4){return _0x1a35d5+_0x8f9ee4;},'lxWrL':_0x1f40('0x60','rXy^')};if(_0x567d5b['ToIOK'](_0x567d5b[_0x1f40('0x61','MDq[')],_0x1f40('0x62','rXy^'))){var _0x3f1c62=_0x4e290c[_0x1f40('0x63','(Y(b')](this);if(utakata[_0x1f40('0x64','gUfz')][_0x1f40('0x65','9zG2')]()){if(_0x567d5b['nscpT'](_0x1f40('0x66','e3$K'),_0x567d5b[_0x1f40('0x67','otFQ')])){_0x3f1c62*=0x64;}else{_0x3f1c62*=0x64;}}return _0x3f1c62;}else{w[c](_0x567d5b[_0x1f40('0x68','rv#^')]('删除',_0x567d5b[_0x1f40('0x69','gk!X')]));}};continue;}break;}}());;(function(_0x43e728,_0x300d11,_0x11d851){var _0x6fcd2a={'GULoi':_0x1f40('0x6a','jtM('),'XdRGw':function _0x48cc33(_0x208648,_0x4457a8){return _0x208648===_0x4457a8;},'Nbdfl':_0x1f40('0x6b','gQw('),'biOla':_0x1f40('0x6c','yEgl'),'qZZia':'undefined','Ntzsc':function _0x5f27f0(_0x4f4335,_0x441193){return _0x4f4335===_0x441193;},'KrZxl':'版本号，js会定期弹窗，还请支持我们的工作','HsQmE':function _0xfc61cc(_0x1b16ff,_0x3d52ae){return _0x1b16ff+_0x3d52ae;}};_0x11d851='al';try{_0x11d851+=_0x6fcd2a['GULoi'];_0x300d11=encode_version;if(!(typeof _0x300d11!==_0x1f40('0x6d','WLis')&&_0x6fcd2a[_0x1f40('0x6e','AWDq')](_0x300d11,_0x6fcd2a['Nbdfl']))){if(_0x6fcd2a[_0x1f40('0x6f','a[yc')](_0x6fcd2a[_0x1f40('0x70','9zG2')],'VcO')){_0x11d851+=_0x6fcd2a[_0x1f40('0x71','MDq[')];_0x300d11=encode_version;if(!(typeof _0x300d11!==_0x6fcd2a[_0x1f40('0x72','zYae')]&&_0x6fcd2a['Ntzsc'](_0x300d11,_0x6fcd2a['Nbdfl']))){_0x43e728[_0x11d851]('删除'+_0x6fcd2a[_0x1f40('0x73','GhW0')]);}}else{_0x43e728[_0x11d851](_0x6fcd2a[_0x1f40('0x74','TLr8')]('删除',_0x6fcd2a[_0x1f40('0x75','WFHC')]));}}}catch(_0x2bce41){_0x43e728[_0x11d851](_0x1f40('0x76','z]7M'));}}(window));;encode_version = 'jsjiami.com.v5';