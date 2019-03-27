
            var RE_VAR_FIN = /(\b|\'|\"|\|\/|\.|\-|\[)((?!__VAR__|SAVE|arguments|Error|console|var|function|if|else|for|in|do|while|switch|case|typeof|break|continue|return|throw|try|catch|finally|with|new|delete|void|Object|Array|String|Number|Boolean|Function|RegExp|Date|Math|true|false|null|undefined|NaN))[\w$]+(\b|(\'\")?)/g;
            var __DATA__ = [];
            function __DEEPCLONE__(o) {
                return o;
                // var copy = o;
                // if (typeof o === 'object') {
                //     copy = Object.prototype.toString.call(o) === '[object Array]' ? [] : {};
                //     for (var item in o) {
                //         if (o.hasOwnProperty(item)) {
                //             copy[item] = __DEEPCLONE__(o[item]);
                //         }
                //     }
                // }
                // return copy;
            }
            function _ProcessVariable_(valueObj) {
                var str = '';
                if (valueObj) {
                    for (var key in valueObj) {
                        str += key + ',';
                    }
                }
                if (str.length) {
                    str = str.slice(0, str.length - 1);
                }
                function getCaller(stackArray) {
                  var callerStack = stackArray[1] || {};
                  var currentStack = stackArray[0] || {};
                  return {
                    father: callerStack,
                    self: currentStack
                  }
                }
                function processName(name) {
                  var temp = name.split('.');
                  var len = temp.length;
                  return temp[len - 1].replace(/ [\s\S]*/, '');
                }
                var __error__ = new Error();
                var stackInfo = getCaller(window.StackTrace.getSync());
                if (window.__INDEX__ >= 0) {
                    if (!__DATA__[window.__INDEX__]) {
                        __DATA__[window.__INDEX__] = [];
                    }
                    var __obj__ = {
                        name: 'var ' + str,
                        isVariable: true,
                        caller: processName(stackInfo.father.functionName),
                        func: null,
                        args: {
                        },
                        variable: valueObj,
                        stack: __error__.stack,
                        callLine: stackInfo
                    };
                    __DATA__[window.__INDEX__].push(__obj__);
                }
            }
            function _ProcessReturn_(value, O) {
                if (O) {
                    O.returnValue = value;
                }
                return value;
            }
            function GET_VAR(data) {
                var FUNC_VAR = [];
                data.replace(/[,{][\$\w]+(?=:)|(^ *|[^\"\-\'$\w\.{])(?!(?:var|JSON|if|for|else|this|switch|break|arguments|console|return|case|function|typeof|true|false|delete|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g, function(_, $1, $2) {
                    if ($2) {
                        FUNC_VAR.push($2);
                    }
                    return _;
                });
                var names = FUNC_VAR.join(',');
                try {
                    var fun = new Function('FUNC_VAR', "var a = {};FUNC_VAR.forEach(function(item){try{a[item] = eval(item);}catch(e) {console.log(e)}});console.log(a)");
                    console.log(fun);
                    fun(FUNC_VAR);
                }
                catch(e) {
                    console.log(e);
                }
            }
            function SAVENAME(args, name) {
                try {
                    if (name) {
                        args.callee.prototype.name = name;
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            function TRY_CATCH() {
                var __error__ = {};
                // try {
                //     console.log(iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii);
                // }
                // catch (e) {
                //     __error__ = e;
                // }
                __error__ = new Error();
                __error__.stackArray = window.StackTrace.getSync();
                return __error__;
            }
            // 获取堆栈信息以获取父级调用者
            function GET_STACK_PARENT_FUNC(stackStr, funcName) {
                var o = {};
                if (funcName && stackStr) {
                    var stackArr = [];
                    if (stackStr) {
                        stackArr = stackStr.split('  at ');
                    }
                    var flag = false;
                    for (var i = 0; i < stackArr.length; i++) {
                        var nowStack = stackArr[i];
                        if (nowStack.indexOf('<anonymous>') > -1 && flag === false) {
                            flag = true;
                        }
                        else if (nowStack.indexOf('<anonymous>') === -1 && flag === true) {
                            o['type'] = stackArr[i-1].trim().split(' ')[0];
                            o['parentName'] = stackArr[i].trim().split(' ')[0];
                            break;
                        }
                    }
                }
                return o;
            }
            var __flag__ = false;
            function SAVE(args) {
                var arguments = args;
                var __error__ = TRY_CATCH();
                if (window.__INDEX__ >= 0) {
                    if (!__DATA__[window.__INDEX__]) {
                        __DATA__[window.__INDEX__] = [];
                    }
                    if (!__flag__) {
                        __flag__ = true;
                        $.ajax({url: __error__.stackArray[0].fileName, type:'GET', dataType: 'text/plain', contentType: 'text/plain', success: function(response) {
                                window.__SOURCE_CODE__ = response;
                                setTimeout(function() {
                                    $(window).trigger('source-code', response);
                                }, 3000);
                            }});
                    }
                    var __obj__ = {
                        
                        name: arguments.callee && arguments.callee.name,
                        caller: arguments.callee.caller && arguments.callee.caller.name,
                        func: arguments.callee.toString(),
                        // self: this,
                        args: {
                            cloneArgs: __DEEPCLONE__(arguments),
                            origin: arguments
                        },
                        callLine: {
                            self: __error__.stackArray[2],
                            father: __error__.stackArray[3],
                            stackSource: __error__
                        }
                    };
                    // console.log(__obj__);
                    // console.log(__obj__.name, __obj__.caller, __error__.stack);
                    if (!__obj__.name) {
                        __obj__.name = args.callee && args.callee.prototype.name;
                    }
                    if (!__obj__.caller) {
                        try {
                            __obj__.caller = args.callee.caller && args.callee.caller.prototype.name;
                        }
                        catch (e) {
                            console.log(e);
                        }
                        if (!__obj__.caller) {
                            __obj__.stack = __error__.stack;
                            var anonymousInfo = GET_STACK_PARENT_FUNC(__error__.stack, __obj__.name);
                            var __nameArr__ = anonymousInfo.parentName && anonymousInfo.parentName.split('.') || [];
                            
                            __obj__.caller = __nameArr__[__nameArr__.length - 1] || null;
                            __obj__.anonymousInfo = anonymousInfo;
                        }
                    }
                    if (__obj__.caller === 'anonymous') {
                        __obj__.stack = __error__.stack;
                        var anonymousInfo = GET_STACK_PARENT_FUNC(__error__.stack, __obj__.name);
                        var __nameArr__ = anonymousInfo.parentName && anonymousInfo.parentName.split('.') || [];
        
                        __obj__.caller = __nameArr__[__nameArr__.length - 1] || null;
                        __obj__.anonymousInfo = anonymousInfo;
                    }
                    __DATA__[window.__INDEX__].push(__obj__);
                    __obj__.returnValue = 'no return yet';
                    return __obj__;
                }
            }
            window.SAVE = SAVE;
            ;;
(function _anonymous_1(global, factory) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.riot = factory();
})(this, function _anonymous_2() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
  

  

  function $(selector, ctx) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_((ctx || document).querySelector(selector), __O__);
  }

  var
  __TAGS_CACHE = [],
  __TAG_IMPL = {},
      YIELD_TAG = 'yield',


  
  GLOBAL_MIXIN = '__global_mixin',
  ATTRS_PREFIX = 'riot-',
  REF_DIRECTIVES = ['ref', 'data-ref'],
      IS_DIRECTIVE = 'data-is',
      CONDITIONAL_DIRECTIVE = 'if',
      LOOP_DIRECTIVE = 'each',
      LOOP_NO_REORDER_DIRECTIVE = 'no-reorder',
      SHOW_DIRECTIVE = 'show',
      HIDE_DIRECTIVE = 'hide',
      KEY_DIRECTIVE = 'key',
      RIOT_EVENTS_KEY = '__riot-events__',
  T_STRING = 'string',
      T_OBJECT = 'object',
      T_UNDEF = 'undefined',
      T_FUNCTION = 'function',
      XLINK_NS = 'http://www.w3.org/1999/xlink',
      SVG_NS = 'http://www.w3.org/2000/svg',
      XLINK_REGEX = /^xlink:(\w+)/,
      WIN = typeof window === T_UNDEF ? undefined : window,
  RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
      RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,
      RE_EVENTS_PREFIX = /^on/,
      RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,
  CASE_SENSITIVE_ATTRIBUTES = {
    'viewbox': 'viewBox',
    'preserveaspectratio': 'preserveAspectRatio'
  },

  
  RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,
  IE_VERSION = (WIN && WIN.document || {}).documentMode | 0;_ProcessVariable_({__TAGS_CACHE: __TAGS_CACHE,__TAG_IMPL: __TAG_IMPL,YIELD_TAG: YIELD_TAG,GLOBAL_MIXIN: GLOBAL_MIXIN,ATTRS_PREFIX: ATTRS_PREFIX,REF_DIRECTIVES: REF_DIRECTIVES,IS_DIRECTIVE: IS_DIRECTIVE,CONDITIONAL_DIRECTIVE: CONDITIONAL_DIRECTIVE,LOOP_DIRECTIVE: LOOP_DIRECTIVE,LOOP_NO_REORDER_DIRECTIVE: LOOP_NO_REORDER_DIRECTIVE,SHOW_DIRECTIVE: SHOW_DIRECTIVE,HIDE_DIRECTIVE: HIDE_DIRECTIVE,KEY_DIRECTIVE: KEY_DIRECTIVE,RIOT_EVENTS_KEY: RIOT_EVENTS_KEY,T_STRING: T_STRING,T_OBJECT: T_OBJECT,T_UNDEF: T_UNDEF,T_FUNCTION: T_FUNCTION,XLINK_NS: XLINK_NS,SVG_NS: SVG_NS,XLINK_REGEX: XLINK_REGEX,WIN: WIN,RE_SPECIAL_TAGS: RE_SPECIAL_TAGS,RE_SPECIAL_TAGS_NO_OPTION: RE_SPECIAL_TAGS_NO_OPTION,RE_EVENTS_PREFIX: RE_EVENTS_PREFIX,RE_HTML_ATTRS: RE_HTML_ATTRS,CASE_SENSITIVE_ATTRIBUTES: CASE_SENSITIVE_ATTRIBUTES,RE_BOOL_ATTRS: RE_BOOL_ATTRS,IE_VERSION: IE_VERSION}, __O__);

  
  function makeElement(name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name), __O__);
  }

  
  function setAttribute(dom, name, val) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var xlink = XLINK_REGEX.exec(name);_ProcessVariable_({xlink: xlink}, __O__);
    if (xlink && xlink[1]) {
      dom.setAttributeNS(XLINK_NS, xlink[1], val);
    } else {
      dom.setAttribute(name, val);
    }
  }

  var styleNode;_ProcessVariable_({styleNode: styleNode}, __O__);
  var cssTextProp;_ProcessVariable_({cssTextProp: cssTextProp}, __O__);
  var byName = {};_ProcessVariable_({byName: byName}, __O__);
  var needsInject = false;_ProcessVariable_({needsInject: needsInject}, __O__);
  if (WIN) {
    styleNode = function _anonymous_3() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var newNode = makeElement('style');_ProcessVariable_({newNode: newNode}, __O__);
      var userNode = $('style[type=riot]');_ProcessVariable_({userNode: userNode}, __O__);

      setAttribute(newNode, 'type', 'text/css');
      
      if (userNode) {
        if (userNode.id) {
          newNode.id = userNode.id;
        }
        userNode.parentNode.replaceChild(newNode, userNode);
      } else {
        document.head.appendChild(newNode);
      }

      return _ProcessReturn_(newNode, __O__);
    }();
    cssTextProp = styleNode.styleSheet;
  }

  
  var styleManager = {
    styleNode: styleNode,
    
    add: function add(css, name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      byName[name] = css;
      needsInject = true;
    },
    
    inject: function inject() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (!WIN || !needsInject) {
        return _ProcessReturn_(undefined, __O__);
      }
      needsInject = false;
      var style = Object.keys(byName).map(function _anonymous_4(k) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(byName[k], __O__);
      }).join('\n');
      
      if (cssTextProp) {
        cssTextProp.cssText = style;
      } else {
        styleNode.innerHTML = style;
      }
    },

    
    remove: function remove(name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      delete byName[name];
      needsInject = true;
    }

    

    
  };_ProcessVariable_({styleManager: styleManager}, __O__);var skipRegex = function _anonymous_5() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var beforeReChars = '[{(,;:?=|&!^~>%*/';

    var beforeReWords = ['case', 'default', 'do', 'else', 'in', 'instanceof', 'prefix', 'return', 'typeof', 'void', 'yield'];

    var wordsLastChar = beforeReWords.reduce(function _anonymous_6(s, w) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(s + w.slice(-1), __O__);
    }, '');

    var RE_REGEX = /^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/;
    var RE_VN_CHAR = /[$\w]/;

    function prev(code, pos) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      while (--pos >= 0 && /\s/.test(code[pos])) {}
      return _ProcessReturn_(pos, __O__);
    }

    function _skipRegex(code, start) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

      var re = /.*/g;
      var pos = re.lastIndex = start++;
      var match = re.exec(code)[0].match(RE_REGEX);

      if (match) {
        var next = pos + match[0].length;

        pos = prev(code, pos);
        var c = code[pos];

        if (pos < 0 || ~beforeReChars.indexOf(c)) {
          return _ProcessReturn_(next, __O__);
        }

        if (c === '.') {

          if (code[pos - 1] === '.') {
            start = next;
          }
        } else if (c === '+' || c === '-') {

          if (code[--pos] !== c || (pos = prev(code, pos)) < 0 || !RE_VN_CHAR.test(code[pos])) {
            start = next;
          }
        } else if (~wordsLastChar.indexOf(c)) {

          var end = pos + 1;

          while (--pos >= 0 && RE_VN_CHAR.test(code[pos])) {}
          if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {
            start = next;
          }
        }
      }

      return _ProcessReturn_(start, __O__);
    }

    return _ProcessReturn_(_skipRegex, __O__);
  }();_ProcessVariable_({skipRegex: skipRegex}, __O__);

  

  

  
  var brackets = function _anonymous_7(UNDEF) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var REGLOB = 'g',
        R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
        R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,
        S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,
        UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),
        NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,
        S_QBLOCK2 = R_STRINGS.source + '|' + /(\/)(?![*\/])/.source,
        FINDBRACES = {
      '(': RegExp('([()])|' + S_QBLOCK2, REGLOB),
      '[': RegExp('([[\\]])|' + S_QBLOCK2, REGLOB),
      '{': RegExp('([{}])|' + S_QBLOCK2, REGLOB)
    },
        DEFAULT = '{ }';

    var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];

    var cachedBrackets = UNDEF,
        _regex,
        _cache = [],
        _settings;

    function _loopback(re) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(re, __O__);
    }

    function _rewrite(re, bp) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (!bp) {
        bp = _cache;
      }
      return _ProcessReturn_(new RegExp(
          re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
        ), __O__);
    }

    function _create(pair) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (pair === DEFAULT) {
        return _ProcessReturn_(_pairs, __O__);
      }

      var arr = pair.split(' ');

      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
        throw new Error('Unsupported brackets "' + pair + '"');
      }
      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
      arr[6] = _rewrite(_pairs[6], arr);
      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);
      arr[8] = pair;
      return _ProcessReturn_(arr, __O__);
    }

    function _brackets(reOrIdx) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx], __O__);
    }

    _brackets.split = function split(str, tmpl, _bp) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (!_bp) {
        _bp = _cache;
      }

      var parts = [],
          match,
          isexpr,
          start,
          pos,
          re = _bp[6];

      var qblocks = [];
      var prevStr = '';
      var mark, lastIndex;

      isexpr = start = re.lastIndex = 0;

      while (match = re.exec(str)) {

        lastIndex = re.lastIndex;
        pos = match.index;

        if (isexpr) {

          if (match[2]) {

            var ch = match[2];
            var rech = FINDBRACES[ch];
            var ix = 1;

            rech.lastIndex = lastIndex;
            while (match = rech.exec(str)) {
              if (match[1]) {
                if (match[1] === ch) {
                  ++ix;
                } else if (! --ix) {
                  break;
                }
              } else {
                rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);
              }
            }
            re.lastIndex = ix ? str.length : rech.lastIndex;
            continue;
          }

          if (!match[3]) {
            re.lastIndex = pushQBlock(pos, lastIndex, match[4]);
            continue;
          }
        }

        if (!match[1]) {
          unescapeStr(str.slice(start, pos));
          start = re.lastIndex;
          re = _bp[6 + (isexpr ^= 1)];
          re.lastIndex = start;
        }
      }

      if (str && start < str.length) {
        unescapeStr(str.slice(start));
      }

      parts.qblocks = qblocks;

      return _ProcessReturn_(parts, __O__);

      function unescapeStr(s) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        if (prevStr) {
          s = prevStr + s;
          prevStr = '';
        }
        if (tmpl || isexpr) {
          parts.push(s && s.replace(_bp[5], '$1'));
        } else {
          parts.push(s);
        }
      }

      function pushQBlock(_pos, _lastIndex, slash) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        if (slash) {
          _lastIndex = skipRegex(str, _pos);
        }

        if (tmpl && _lastIndex > _pos + 2) {
          mark = '\u2057' + qblocks.length + '~';
          qblocks.push(str.slice(_pos, _lastIndex));
          prevStr += str.slice(start, _pos) + mark;
          start = _lastIndex;
        }
        return _ProcessReturn_(_lastIndex, __O__);
      }
    };

    _brackets.hasExpr = function hasExpr(str) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(_cache[4].test(str), __O__);
    };

    _brackets.loopKeys = function loopKeys(expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var m = expr.match(_cache[9]);

      return _ProcessReturn_(m
          ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
          : { val: expr.trim() }, __O__);
    };

    _brackets.array = function array(pair) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(pair ? _create(pair) : _cache, __O__);
    };

    function _reset(pair) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
        _cache = _create(pair);
        _regex = pair === DEFAULT ? _loopback : _rewrite;
        _cache[9] = _regex(_pairs[9]);
      }
      cachedBrackets = pair;
    }

    function _setSettings(o) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var b;

      o = o || {};
      b = o.brackets;
      Object.defineProperty(o, 'brackets', {
        set: _reset,
        get: function _anonymous_8() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          return _ProcessReturn_(cachedBrackets, __O__);
        },
        enumerable: true
      });
      _settings = o;
      _reset(b);
    }

    Object.defineProperty(_brackets, 'settings', {
      set: _setSettings,
      get: function _anonymous_9() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(_settings, __O__);
      }
    });

    
    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
    _brackets.set = _reset;
    _brackets.skipRegex = skipRegex;

    _brackets.R_STRINGS = R_STRINGS;
    _brackets.R_MLCOMMS = R_MLCOMMS;
    _brackets.S_QBLOCKS = S_QBLOCKS;
    _brackets.S_QBLOCK2 = S_QBLOCK2;

    return _ProcessReturn_(_brackets, __O__);
  }();_ProcessVariable_({brackets: brackets}, __O__);

  

  
  var tmpl = function _anonymous_10() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var _cache = {};

    function _tmpl(str, data) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (!str) {
        return _ProcessReturn_(str, __O__);
      }

      return _ProcessReturn_((_cache[str] || (_cache[str] = _create(str))).call(
          data, _logErr.bind({
            data: data,
            tmpl: str
          })
        ), __O__);
    }

    _tmpl.hasExpr = brackets.hasExpr;

    _tmpl.loopKeys = brackets.loopKeys;
    _tmpl.clearCache = function _anonymous_11() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      _cache = {};
    };

    _tmpl.errorHandler = null;

    function _logErr(err, ctx) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

      err.riotData = {
        tagName: ctx && ctx.__ && ctx.__.tagName,
        _riot_id: ctx && ctx._riot_id
      };

      if (_tmpl.errorHandler) {
        _tmpl.errorHandler(err);
      } else if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(err.message);
        console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl);
        console.log(this.data);
      }
    }

    function _create(str) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var expr = _getTmpl(str);

      if (expr.slice(0, 11) !== 'try{return ') {
        expr = 'return ' + expr;
      }

      return _ProcessReturn_(new Function('E', expr + ';'), __O__);
    }

    var RE_DQUOTE = /\u2057/g;
    var RE_QBMARK = /\u2057(\d+)~/g;

    function _getTmpl(str) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
      var qstr = parts.qblocks;
      var expr;

      if (parts.length > 2 || parts[0]) {
        var i,
            j,
            list = [];

        for (i = j = 0; i < parts.length; ++i) {

          expr = parts[i];

          if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"')) {
            list[j++] = expr;
          }
        }

        expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
      } else {

        expr = _parseExpr(parts[1], 0, qstr);
      }

      if (qstr.length) {
        expr = expr.replace(RE_QBMARK, function _anonymous_12(_, pos) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          return _ProcessReturn_(qstr[pos]
              .replace(/\\r/g, '\\\\r')
              .replace(/\n/g, '\\\n'), __O__);
        });
      }
      return _ProcessReturn_(expr, __O__);
    }

    var RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/;
    var RE_BREND = {
      '(': /[()]/g,
      '[': /[[\]]/g,
      '{': /[{}]/g
    };

    function _parseExpr(expr, asText, qstr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

      expr = expr.replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

      if (expr) {
        var list = [],
            cnt = 0,
            match;

        while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
          var key,
              jsb,
              re = /,|([[{(])|$/g;

          expr = RegExp.rightContext;
          key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

          while (jsb = (match = re.exec(expr))[1]) {
            skipBraces(jsb, re);
          }

          jsb = expr.slice(0, match.index);
          expr = RegExp.rightContext;

          list[cnt++] = _wrapExpr(jsb, 1, key);
        }

        expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
      }
      return _ProcessReturn_(expr, __O__);

      function skipBraces(ch, re) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        var mm,
            lv = 1,
            ir = RE_BREND[ch];

        ir.lastIndex = re.lastIndex;
        while (mm = ir.exec(expr)) {
          if (mm[0] === ch) {
            ++lv;
          } else if (! --lv) {
            break;
          }
        }
        re.lastIndex = lv ? expr.length : ir.lastIndex;
      }
    }
    var
    JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
        JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
        JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

    function _wrapExpr(expr, asText, key) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var tb;

      expr = expr.replace(JS_VARNAME, function _anonymous_13(match, p, mvar, pos, s) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        if (mvar) {
          pos = tb ? 0 : pos + match.length;

          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
            match = p + '("' + mvar + JS_CONTEXT + mvar;
            if (pos) {
              tb = (s = s[pos]) === '.' || s === '(' || s === '[';
            }
          } else if (pos) {
            tb = !JS_NOPROPS.test(s.slice(pos));
          }
        }
        return _ProcessReturn_(match, __O__);
      });

      if (tb) {
        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
      }

      if (key) {

        expr = (tb ? 'function _anonymous_14(){ ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
      } else if (asText) {

        expr = 'function _anonymous_15(v){ ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
      }

      return _ProcessReturn_(expr, __O__);
    }

    _tmpl.version = brackets.version = 'v3.0.8';

    return _ProcessReturn_(_tmpl, __O__);
  }();_ProcessVariable_({tmpl: tmpl}, __O__);

  
  var observable = function _anonymous_16(el) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    

    el = el || {};

    
    var callbacks = {},
        slice = Array.prototype.slice;

    
    Object.defineProperties(el, {
      
      on: {
        value: function _anonymous_17(event, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          if (typeof fn == 'function') {
            (callbacks[event] = callbacks[event] || []).push(fn);
          }
          return _ProcessReturn_(el, __O__);
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      
      off: {
        value: function _anonymous_18(event, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          if (event == '*' && !fn) {
            callbacks = {};
          } else {
            if (fn) {
              var arr = callbacks[event];
              for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                if (cb == fn) {
                  arr.splice(i--, 1);
                }
              }
            } else {
              delete callbacks[event];
            }
          }
          return _ProcessReturn_(el, __O__);
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      
      one: {
        value: function _anonymous_19(event, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          function on() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
            el.off(event, on);
            fn.apply(el, arguments);
          }
          return _ProcessReturn_(el.on(event, on), __O__);
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      
      trigger: {
        value: function _anonymous_20(event) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          var arguments$1 = arguments;
          var arglen = arguments.length - 1,
              args = new Array(arglen),
              fns,
              fn,
              i;

          for (i = 0; i < arglen; i++) {
            args[i] = arguments$1[i + 1];
          }

          fns = slice.call(callbacks[event] || [], 0);

          for (i = 0; fn = fns[i]; ++i) {
            fn.apply(el, args);
          }

          if (callbacks['*'] && event != '*') {
            el.trigger.apply(el, ['*', event].concat(args));
          }

          return _ProcessReturn_(el, __O__);
        },
        enumerable: false,
        writable: false,
        configurable: false
      }
    });

    return _ProcessReturn_(el, __O__);
  };_ProcessVariable_({observable: observable}, __O__);

  
  function getPropDescriptor(o, k) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(Object.getOwnPropertyDescriptor(o, k), __O__);
  }

  
  function isUndefined(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(typeof value === T_UNDEF, __O__);
  }

  
  function isWritable(obj, key) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var descriptor = getPropDescriptor(obj, key);_ProcessVariable_({descriptor: descriptor}, __O__);
    return _ProcessReturn_(isUndefined(obj[key]) || descriptor && descriptor.writable, __O__);
  }

  
  function extend(src) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var obj;_ProcessVariable_({obj: obj}, __O__);
    var i = 1;_ProcessVariable_({i: i}, __O__);
    var args = arguments;_ProcessVariable_({args: args}, __O__);
    var l = args.length;_ProcessVariable_({l: l}, __O__);

    for (; i < l; i++) {
      if (obj = args[i]) {
        for (var key in obj) {
          if (isWritable(src, key)) {
            src[key] = obj[key];
          }
        }
      }
    }
    return _ProcessReturn_(src, __O__);
  }

  
  function create(src) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(Object.create(src), __O__);
  }

  var settings = extend(create(brackets.settings), {
    skipAnonymousTags: true,
    keepValueAttributes: false,
    autoUpdate: true
  });_ProcessVariable_({settings: settings}, __O__);

  
  function $$(selector, ctx) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_([].slice.call((ctx || document).querySelectorAll(selector)), __O__);
  }

  
  function createDOMPlaceholder() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(document.createTextNode(''), __O__);
  }

  

  function toggleVisibility(dom, show) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    dom.style.display = show ? '' : 'none';
    dom.hidden = show ? false : true;
  }

  
  function getAttribute(dom, name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(dom.getAttribute(name), __O__);
  }

  
  function removeAttribute(dom, name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    dom.removeAttribute(name);
  }

  
  
  function setInnerHTML(container, html, isSvg) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isSvg) {
      var node = container.ownerDocument.importNode(new DOMParser().parseFromString("<svg xmlns=\"" + SVG_NS + "\">" + html + "</svg>", 'application/xml').documentElement, true);_ProcessVariable_({node: node}, __O__);

      container.appendChild(node);
    } else {
      container.innerHTML = html;
    }
  }

  
  function walkAttributes(html, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!html) {
      return _ProcessReturn_(undefined, __O__);
    }
    var m;_ProcessVariable_({m: m}, __O__);
    while (m = RE_HTML_ATTRS.exec(html)) {
      fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
    }
  }

  
  function createFragment() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(document.createDocumentFragment(), __O__);
  }

  
  function safeInsert(root, curr, next) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    root.insertBefore(curr, next.parentNode && next);
  }

  
  function styleObjectToString(style) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(Object.keys(style).reduce(function _anonymous_21(acc, prop) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return acc + " " + prop + ": " + style[prop] + ";";
    }, ''), __O__);
  }

  
  function walkNodes(dom, fn, context) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (dom) {
      var res = fn(dom, context);_ProcessVariable_({res: res}, __O__);
      var next;_ProcessVariable_({next: next}, __O__);
      if (res === false) {
        return _ProcessReturn_(undefined, __O__);
      }

      dom = dom.firstChild;

      while (dom) {
        next = dom.nextSibling;
        walkNodes(dom, fn, res);
        dom = next;
      }
    }
  }

  var dom = Object.freeze({
    $$: $$,
    $: $,
    createDOMPlaceholder: createDOMPlaceholder,
    mkEl: makeElement,
    setAttr: setAttribute,
    toggleVisibility: toggleVisibility,
    getAttr: getAttribute,
    remAttr: removeAttribute,
    setInnerHTML: setInnerHTML,
    walkAttrs: walkAttributes,
    createFrag: createFragment,
    safeInsert: safeInsert,
    styleObjectToString: styleObjectToString,
    walkNodes: walkNodes
  });_ProcessVariable_({dom: dom}, __O__);

  
  function isNil(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(isUndefined(value) || value === null, __O__);
  }

  
  function isBlank(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(isNil(value) || value === '', __O__);
  }

  
  function isFunction(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(typeof value === T_FUNCTION, __O__);
  }

  
  function isObject(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(value && typeof value === T_OBJECT, __O__);
  }

  
  function isSvg(el) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var owner = el.ownerSVGElement;_ProcessVariable_({owner: owner}, __O__);
    return _ProcessReturn_(!!owner || owner === null, __O__);
  }

  
  function isArray(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(Array.isArray(value) || value instanceof Array, __O__);
  }

  
  function isBoolAttr(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(RE_BOOL_ATTRS.test(value), __O__);
  }

  
  function isString(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(typeof value === T_STRING, __O__);
  }

  var check = Object.freeze({
    isBlank: isBlank,
    isFunction: isFunction,
    isObject: isObject,
    isSvg: isSvg,
    isWritable: isWritable,
    isArray: isArray,
    isBoolAttr: isBoolAttr,
    isNil: isNil,
    isString: isString,
    isUndefined: isUndefined
  });_ProcessVariable_({check: check}, __O__);

  
  function contains(array, item) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(array.indexOf(item) !== -1, __O__);
  }

  
  function each(list, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var len = list ? list.length : 0;_ProcessVariable_({len: len}, __O__);
    var i = 0;_ProcessVariable_({i: i}, __O__);
    for (; i < len; i++) {
      fn(list[i], i);
    }
    return _ProcessReturn_(list, __O__);
  }

  
  function startsWith(str, value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(str.slice(0, value.length) === value, __O__);
  }

  
  var uid = function uid() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var i = -1;
    return _ProcessReturn_(function _anonymous_22() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments); return ++i; }, __O__);
  }();_ProcessVariable_({uid: uid}, __O__);

  
  function define(el, key, value, options) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    Object.defineProperty(el, key, extend({
      value: value,
      enumerable: false,
      writable: false,
      configurable: true
    }, options));
    return _ProcessReturn_(el, __O__);
  }

  
  function toCamel(str) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(str.replace(/-(\\w)/g, function _anonymous_23(_, c) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return c.toUpperCase();
    }), __O__);
  }

  
  function warn(message) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (console && console.warn) {
      console.warn(message);
    }
  }

  var misc = Object.freeze({
    contains: contains,
    each: each,
    getPropDescriptor: getPropDescriptor,
    startsWith: startsWith,
    uid: uid,
    defineProperty: define,
    objectCreate: create,
    extend: extend,
    toCamel: toCamel,
    warn: warn
  });_ProcessVariable_({misc: misc}, __O__);

  
  function arrayishAdd(obj, key, value, ensureArray, index) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var dest = obj[key];_ProcessVariable_({dest: dest}, __O__);
    var isArr = isArray(dest);_ProcessVariable_({isArr: isArr}, __O__);
    var hasIndex = !isUndefined(index);_ProcessVariable_({hasIndex: hasIndex}, __O__);

    if (dest && dest === value) {
      return _ProcessReturn_(undefined, __O__);
    }
    if (!dest && ensureArray) {
      obj[key] = [value];
    } else if (!dest) {
      obj[key] = value;
    }
    else {
        if (isArr) {
          var oldIndex = dest.indexOf(value);_ProcessVariable_({oldIndex: oldIndex}, __O__);
          if (oldIndex === index) {
            return _ProcessReturn_(undefined, __O__);
          }
          if (oldIndex !== -1) {
            dest.splice(oldIndex, 1);
          }
          if (hasIndex) {
            dest.splice(index, 0, value);
          } else {
            dest.push(value);
          }
        } else {
          obj[key] = [dest, value];
        }
      }
  }

  
  function get(dom) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(dom.tagName && __TAG_IMPL[getAttribute(dom, IS_DIRECTIVE) || getAttribute(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()], __O__);
  }

  
  function getName(dom, skipDataIs) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var child = get(dom);_ProcessVariable_({child: child}, __O__);
    var namedTag = !skipDataIs && getAttribute(dom, IS_DIRECTIVE);_ProcessVariable_({namedTag: namedTag}, __O__);
    return _ProcessReturn_(namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase(), __O__);
  }

  
  function inheritParentProps() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (this.parent) {
      return _ProcessReturn_(extend(create(this), this.parent), __O__);
    }
    return _ProcessReturn_(this, __O__);
  }

  

  var reHasYield = /<yield\b/i,
      reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
      reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
      reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
      rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
      tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION,
      GENERIC = 'div',
      SVG = 'svg';_ProcessVariable_({reHasYield: reHasYield,reYieldAll: reYieldAll,reYieldSrc: reYieldSrc,reYieldDest: reYieldDest,rootEls: rootEls,tblTags: tblTags,GENERIC: GENERIC,SVG: SVG}, __O__);

  
  function specialTags(el, tmpl, tagName) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var select = tagName[0] === 'o',
        parent = select ? 'select>' : 'table>';_ProcessVariable_({select: select,parent: parent}, __O__);
    el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
    parent = el.firstChild;
    
    if (select) {
      parent.selectedIndex = -1;
    } else {
      var tname = rootEls[tagName];_ProcessVariable_({tname: tname}, __O__);
      if (tname && parent.childElementCount === 1) {
        parent = $(tname, parent);
      }
    }
    return _ProcessReturn_(parent, __O__);
  }

  
  function replaceYield(tmpl, html) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!reHasYield.test(tmpl)) {
      return _ProcessReturn_(tmpl, __O__);
    }
    var src = {};_ProcessVariable_({src: src}, __O__);

    html = html && html.replace(reYieldSrc, function _anonymous_24(_, ref, text) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      src[ref] = src[ref] || text;
      return _ProcessReturn_('', __O__);
    }).trim();

    return _ProcessReturn_(tmpl.replace(reYieldDest, function _anonymous_25(_, ref, def) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return src[ref] || def || '';
    }).replace(reYieldAll, function _anonymous_26(_, def) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return html || def || '';
    }), __O__);
  }

  
  function mkdom(tmpl, html, isSvg) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var match = tmpl && tmpl.match(/^\s*<([-\w]+)/);_ProcessVariable_({match: match}, __O__);
    var tagName = match && match[1].toLowerCase();_ProcessVariable_({tagName: tagName}, __O__);
    var el = makeElement(isSvg ? SVG : GENERIC);_ProcessVariable_({el: el}, __O__);
    tmpl = replaceYield(tmpl, html);

    
    if (tblTags.test(tagName)) {
      el = specialTags(el, tmpl, tagName);
    } else {
      setInnerHTML(el, tmpl, isSvg);
    }

    return _ProcessReturn_(el, __O__);
  }

  var EVENT_ATTR_RE = /^on/;_ProcessVariable_({EVENT_ATTR_RE: EVENT_ATTR_RE}, __O__);

  
  function isEventAttribute(attribute) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(EVENT_ATTR_RE.test(attribute), __O__);
  }

  
  function getImmediateCustomParent(tag) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var ptag = tag;_ProcessVariable_({ptag: ptag}, __O__);
    while (ptag.__.isAnonymous) {
      if (!ptag.parent) {
        break;
      }
      ptag = ptag.parent;
    }
    return _ProcessReturn_(ptag, __O__);
  }

  
  function handleEvent(dom, handler, e) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var ptag = this.__.parent;_ProcessVariable_({ptag: ptag}, __O__);
    var item = this.__.item;_ProcessVariable_({item: item}, __O__);

    if (!item) {
      while (ptag && !item) {
        item = ptag.__.item;
        ptag = ptag.__.parent;
      }
    }
    
    if (isWritable(e, 'currentTarget')) {
      e.currentTarget = dom;
    }
    
    if (isWritable(e, 'target')) {
      e.target = e.srcElement;
    }
    
    if (isWritable(e, 'which')) {
      e.which = e.charCode || e.keyCode;
    }

    e.item = item;

    handler.call(this, e);
    if (!settings.autoUpdate) {
      return _ProcessReturn_(undefined, __O__);
    }

    if (!e.preventUpdate) {
      var p = getImmediateCustomParent(this);_ProcessVariable_({p: p}, __O__);
      if (p.isMounted) {
        p.update();
      }
    }
  }

  
  function setEventHandler(name, handler, dom, tag) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var eventName;_ProcessVariable_({eventName: eventName}, __O__);
    var cb = handleEvent.bind(tag, dom, handler);_ProcessVariable_({cb: cb}, __O__);
    dom[name] = null;
    eventName = name.replace(RE_EVENTS_PREFIX, '');
    if (!contains(tag.__.listeners, dom)) {
      tag.__.listeners.push(dom);
    }
    if (!dom[RIOT_EVENTS_KEY]) {
      dom[RIOT_EVENTS_KEY] = {};
    }
    if (dom[RIOT_EVENTS_KEY][name]) {
      dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]);
    }

    dom[RIOT_EVENTS_KEY][name] = cb;
    dom.addEventListener(eventName, cb, false);
  }

  
  function initChild(child, opts, innerHTML, parent) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var tag = createTag(child, opts, innerHTML);_ProcessVariable_({tag: tag}, __O__);
    var tagName = opts.tagName || getName(opts.root, true);_ProcessVariable_({tagName: tagName}, __O__);
    var ptag = getImmediateCustomParent(parent);_ProcessVariable_({ptag: ptag}, __O__);
    define(tag, 'parent', ptag);
    tag.__.parent = parent;
    arrayishAdd(ptag.tags, tagName, tag);
    if (ptag !== parent) {
      arrayishAdd(parent.tags, tagName, tag);
    }

    return _ProcessReturn_(tag, __O__);
  }

  
  function arrayishRemove(obj, key, value, ensureArray) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isArray(obj[key])) {
      var index = obj[key].indexOf(value);_ProcessVariable_({index: index}, __O__);
      if (index !== -1) {
        obj[key].splice(index, 1);
      }
      if (!obj[key].length) {
        delete obj[key];
      } else if (obj[key].length === 1 && !ensureArray) {
        obj[key] = obj[key][0];
      }
    } else if (obj[key] === value) {
      delete obj[key];
    }
  }

  
  function makeVirtual(src, target) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var this$1 = this;_ProcessVariable_({this$1: this$1}, __O__);

    var head = createDOMPlaceholder();_ProcessVariable_({head: head}, __O__);
    var tail = createDOMPlaceholder();_ProcessVariable_({tail: tail}, __O__);
    var frag = createFragment();_ProcessVariable_({frag: frag}, __O__);
    var sib;_ProcessVariable_({sib: sib}, __O__);
    var el;_ProcessVariable_({el: el}, __O__);

    this.root.insertBefore(head, this.root.firstChild);
    this.root.appendChild(tail);

    this.__.head = el = head;
    this.__.tail = tail;

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      this$1.__.virts.push(el);
      el = sib;
    }

    if (target) {
      src.insertBefore(frag, target.__.head);
    } else {
      src.appendChild(frag);
    }
  }

  
  function makeReplaceVirtual(tag, ref) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!ref.parentNode) {
      return _ProcessReturn_(undefined, __O__);
    }
    var frag = createFragment();_ProcessVariable_({frag: frag}, __O__);
    makeVirtual.call(tag, frag);
    ref.parentNode.replaceChild(frag, ref);
  }

  
  function updateDataIs(expr, parent, tagName) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var tag = expr.tag || expr.dom._tag;_ProcessVariable_({tag: tag}, __O__);
    var ref;_ProcessVariable_({ref: ref}, __O__);

    var ref$1 = tag ? tag.__ : {};_ProcessVariable_({ref$1: ref$1}, __O__);
    var head = ref$1.head;_ProcessVariable_({head: head}, __O__);
    var isVirtual = expr.dom.tagName === 'VIRTUAL';_ProcessVariable_({isVirtual: isVirtual}, __O__);

    if (tag && expr.tagName === tagName) {
      tag.update();
      return _ProcessReturn_(undefined, __O__);
    }
    if (tag) {
      if (isVirtual) {
        ref = createDOMPlaceholder();
        head.parentNode.insertBefore(ref, head);
      }

      tag.unmount(true);
    }
    if (!isString(tagName)) {
      return _ProcessReturn_(undefined, __O__);
    }

    expr.impl = __TAG_IMPL[tagName];
    if (!expr.impl) {
      return _ProcessReturn_(undefined, __O__);
    }

    expr.tag = tag = initChild(expr.impl, {
      root: expr.dom,
      parent: parent,
      tagName: tagName
    }, expr.dom.innerHTML, parent);

    each(expr.attrs, function _anonymous_27(a) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(setAttribute(tag.root, a.name, a.value), __O__);
    });
    expr.tagName = tagName;
    tag.mount();
    if (isVirtual) {
      makeReplaceVirtual(tag, ref || tag.root);
    }
    parent.__.onUnmount = function _anonymous_28() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var delName = tag.opts.dataIs;_ProcessVariable_({delName: delName}, __O__);
      arrayishRemove(tag.parent.tags, delName, tag);
      arrayishRemove(tag.__.parent.tags, delName, tag);
      tag.unmount();
    };
  }

  
  function normalizeAttrName(attrName) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!attrName) {
      return _ProcessReturn_(null, __O__);
    }
    attrName = attrName.replace(ATTRS_PREFIX, '');
    if (CASE_SENSITIVE_ATTRIBUTES[attrName]) {
      attrName = CASE_SENSITIVE_ATTRIBUTES[attrName];
    }
    return _ProcessReturn_(attrName, __O__);
  }

  
  function updateExpression(expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (this.root && getAttribute(this.root, 'virtualized')) {
      return _ProcessReturn_(undefined, __O__);
    }

    var dom = expr.dom;_ProcessVariable_({dom: dom}, __O__);
    var attrName = normalizeAttrName(expr.attr);_ProcessVariable_({attrName: attrName}, __O__);
    var isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName);_ProcessVariable_({isToggle: isToggle}, __O__);
    var isVirtual = expr.root && expr.root.tagName === 'VIRTUAL';_ProcessVariable_({isVirtual: isVirtual}, __O__);
    var ref = this.__;_ProcessVariable_({ref: ref}, __O__);
    var isAnonymous = ref.isAnonymous;_ProcessVariable_({isAnonymous: isAnonymous}, __O__);
    var parent = dom && (expr.parent || dom.parentNode);_ProcessVariable_({parent: parent}, __O__);
    var keepValueAttributes = settings.keepValueAttributes;_ProcessVariable_({keepValueAttributes: keepValueAttributes}, __O__);
    var isStyleAttr = attrName === 'style';_ProcessVariable_({isStyleAttr: isStyleAttr}, __O__);
    var isClassAttr = attrName === 'class';_ProcessVariable_({isClassAttr: isClassAttr}, __O__);
    var isValueAttr = attrName === 'value';_ProcessVariable_({isValueAttr: isValueAttr}, __O__);

    var value;_ProcessVariable_({value: value}, __O__);
    if (expr._riot_id) {
      if (expr.__.wasCreated) {
        expr.update();
      } else {
        expr.mount();
        if (isVirtual) {
          makeReplaceVirtual(expr, expr.root);
        }
      }
      return _ProcessReturn_(undefined, __O__);
    }
    if (expr.update) {
      return _ProcessReturn_(expr.update(), __O__);
    }

    var context = isToggle && !isAnonymous ? inheritParentProps.call(this) : this;_ProcessVariable_({context: context}, __O__);
    value = tmpl(expr.expr, context);

    var hasValue = !isBlank(value);_ProcessVariable_({hasValue: hasValue}, __O__);
    var isObj = isObject(value);_ProcessVariable_({isObj: isObj}, __O__);
    if (isObj) {
      if (isClassAttr) {
        value = tmpl(JSON.stringify(value), this);
      } else if (isStyleAttr) {
        value = styleObjectToString(value);
      }
    }
    if (expr.attr && (
    !expr.wasParsedOnce ||
    value === false ||
    !hasValue && (!isValueAttr || isValueAttr && !keepValueAttributes))) {
      removeAttribute(dom, getAttribute(dom, expr.attr) ? expr.attr : attrName);
    }
    if (expr.bool) {
      value = value ? attrName : false;
    }
    if (expr.isRtag) {
      return _ProcessReturn_(updateDataIs(expr, this, value), __O__);
    }
    if (expr.wasParsedOnce && expr.value === value) {
      return _ProcessReturn_(undefined, __O__);
    }
    expr.value = value;
    expr.wasParsedOnce = true;
    if (isObj && !isClassAttr && !isStyleAttr && !isToggle) {
      return _ProcessReturn_(undefined, __O__);
    }
    if (!hasValue) {
      value = '';
    }
    if (!attrName) {
      value += '';
      if (parent) {
        expr.parent = parent;
        if (parent.tagName === 'TEXTAREA') {
          parent.value = value;
          if (!IE_VERSION) {
            dom.nodeValue = value;
          }
        }
        else {
            dom.nodeValue = value;
          }
      }
      return _ProcessReturn_(undefined, __O__);
    }

    switch (true) {
      case isFunction(value):
        if (isEventAttribute(attrName)) {
          setEventHandler(attrName, value, dom, this);
        }
        break;
      case isToggle:
        toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);
        break;
      default:
        if (expr.bool) {
          dom[attrName] = value;
        }

        if (isValueAttr && dom.value !== value) {
          dom.value = value;
        } else if (hasValue && value !== false) {
          setAttribute(dom, attrName, value);
        }
        if (isStyleAttr && dom.hidden) {
          toggleVisibility(dom, false);
        }
    }
  }

  
  function update(expressions) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    each(expressions, updateExpression.bind(this));
  }

  
  function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isLoop && isAnonymous) {
      return _ProcessReturn_(undefined, __O__);
    }
    var ctx = isLoop ? inheritParentProps.call(this) : parent || this;_ProcessVariable_({ctx: ctx}, __O__);

    each(instAttrs, function _anonymous_29(attr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (attr.expr) {
        updateExpression.call(ctx, attr.expr);
      }
      opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;
    });
  }

  
  function componentUpdate(tag, data, expressions) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var __ = tag.__;_ProcessVariable_({__: __}, __O__);
    var nextOpts = {};_ProcessVariable_({nextOpts: nextOpts}, __O__);
    var canTrigger = tag.isMounted && !__.skipAnonymous;_ProcessVariable_({canTrigger: canTrigger}, __O__);
    if (__.isAnonymous && __.parent) {
      extend(tag, __.parent);
    }
    extend(tag, data);

    updateOpts.apply(tag, [__.isLoop, __.parent, __.isAnonymous, nextOpts, __.instAttrs]);

    if (canTrigger && tag.isMounted && isFunction(tag.shouldUpdate) && !tag.shouldUpdate(data, nextOpts)) {
      return _ProcessReturn_(tag, __O__);
    }

    extend(tag.opts, nextOpts);

    if (canTrigger) {
      tag.trigger('update', data);
    }
    update.call(tag, expressions);
    if (canTrigger) {
      tag.trigger('updated');
    }

    return _ProcessReturn_(tag, __O__);
  }

  
  function query(tags1) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!tags1) {
      var keys = Object.keys(__TAG_IMPL);_ProcessVariable_({keys: keys}, __O__);
      return _ProcessReturn_(keys + query(keys), __O__);
    }

    return _ProcessReturn_(tags1.filter(function _anonymous_30(t) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return !/[^-\\w]/.test(t);
    }).reduce(function _anonymous_31(list, t) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var name = t.trim().toLowerCase();_ProcessVariable_({name: name}, __O__);
      return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]";
    }, ''), __O__);
  }

  
  function Tag(el, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var ref = this;_ProcessVariable_({ref: ref}, __O__);
    var name = ref.name;_ProcessVariable_({name: name}, __O__);
    var tmpl = ref.tmpl;_ProcessVariable_({tmpl: tmpl}, __O__);
    var css = ref.css;_ProcessVariable_({css: css}, __O__);
    var attrs = ref.attrs;_ProcessVariable_({attrs: attrs}, __O__);
    var onCreate = ref.onCreate;_ProcessVariable_({onCreate: onCreate}, __O__);
    if (!__TAG_IMPL[name]) {
      tag(name, tmpl, css, attrs, onCreate);
      __TAG_IMPL[name].class = this.constructor;
    }
    mount$1(el, name, opts, this);
    if (css) {
      styleManager.inject();
    }

    return _ProcessReturn_(this, __O__);
  }

  
  function tag(name, tmpl, css, attrs, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isFunction(attrs)) {
      fn = attrs;

      if (/^[\w-]+\s?=/.test(css)) {
        attrs = css;
        css = '';
      } else {
        attrs = '';
      }
    }

    if (css) {
      if (isFunction(css)) {
        fn = css;
      } else {
        styleManager.add(css, name);
      }
    }

    name = name.toLowerCase();
    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return _ProcessReturn_(name, __O__);
  }

  
  function tag2(name, tmpl, css, attrs, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (css) {
      styleManager.add(css, name);
    }

    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return _ProcessReturn_(name, __O__);
  }

  
  function mount(selector, tagName, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var tags = [];_ProcessVariable_({tags: tags}, __O__);
    var elem, allTags;_ProcessVariable_({elem: elem,allTags: allTags}, __O__);

    function pushTagsTo(root) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (root.tagName) {
        var riotTag = getAttribute(root, IS_DIRECTIVE),
            tag;_ProcessVariable_({riotTag: riotTag,tag: tag}, __O__);
        if (tagName && riotTag !== tagName) {
          riotTag = tagName;
          setAttribute(root, IS_DIRECTIVE, tagName);
        }

        tag = mount$1(root, riotTag || root.tagName.toLowerCase(), isFunction(opts) ? opts() : opts);

        if (tag) {
          tags.push(tag);
        }
      } else if (root.length) {
        each(root, pushTagsTo);
      }
    }
    styleManager.inject();

    if (isObject(tagName) || isFunction(tagName)) {
      opts = tagName;
      tagName = 0;
    }
    if (isString(selector)) {
      selector = selector === '*' ?
      allTags = query() :
      selector + query(selector.split(/, */));
      elem = selector ? $$(selector) : [];
    } else
      {
        elem = selector;
      }
    if (tagName === '*') {
      tagName = allTags || query();
      if (elem.tagName) {
        elem = $$(tagName, elem);
      } else {
        var nodeList = [];_ProcessVariable_({nodeList: nodeList}, __O__);

        each(elem, function _anonymous_32(_el) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          return _ProcessReturn_(nodeList.push($$(tagName, _el)), __O__);
        });

        elem = nodeList;
      }
      tagName = 0;
    }

    pushTagsTo(elem);

    return _ProcessReturn_(tags, __O__);
  }
  var mixins = {};_ProcessVariable_({mixins: mixins}, __O__);
  var globals = mixins[GLOBAL_MIXIN] = {};_ProcessVariable_({globals: globals}, __O__);
  var mixins_id = 0;_ProcessVariable_({mixins_id: mixins_id}, __O__);

  
  function mixin(name, mix, g) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isObject(name)) {
      mixin("__" + mixins_id++ + "__", name, true);
      return _ProcessReturn_(undefined, __O__);
    }

    var store = g ? globals : mixins;_ProcessVariable_({store: store}, __O__);
    if (!mix) {
      if (isUndefined(store[name])) {
        throw new Error("Unregistered mixin: " + name);
      }

      return _ProcessReturn_(store[name], __O__);
    }
    store[name] = isFunction(mix) ? extend(mix.prototype, store[name] || {}) && mix : extend(store[name] || {}, mix);
  }

  
  function update$1() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(each(__TAGS_CACHE, function _anonymous_33(tag) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return tag.update();
    }), __O__);
  }

  function unregister(name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    styleManager.remove(name);
    return _ProcessReturn_(delete __TAG_IMPL[name], __O__);
  }

  var version = 'v3.13.1';_ProcessVariable_({version: version}, __O__);

  var core = Object.freeze({
    Tag: Tag,
    tag: tag,
    tag2: tag2,
    mount: mount,
    mixin: mixin,
    update: update$1,
    unregister: unregister,
    version: version
  });_ProcessVariable_({core: core}, __O__);

  
  function componentMixin(tag$$1) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var mixins = [],
        len = arguments.length - 1;_ProcessVariable_({mixins: mixins,len: len}, __O__);
    while (len-- > 0) mixins[len] = arguments[len + 1];

    each(mixins, function _anonymous_34(mix) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var instance;_ProcessVariable_({instance: instance}, __O__);
      var obj;_ProcessVariable_({obj: obj}, __O__);
      var props = [];_ProcessVariable_({props: props}, __O__);
      var propsBlacklist = ['init', '__proto__'];_ProcessVariable_({propsBlacklist: propsBlacklist}, __O__);

      mix = isString(mix) ? mixin(mix) : mix;
      if (isFunction(mix)) {
        instance = new mix();
      } else {
        instance = mix;
      }

      var proto = Object.getPrototypeOf(instance);_ProcessVariable_({proto: proto}, __O__);
      do {
        props = props.concat(Object.getOwnPropertyNames(obj || instance));
      } while (obj = Object.getPrototypeOf(obj || instance));
      each(props, function _anonymous_35(key) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        if (!contains(propsBlacklist, key)) {
          var descriptor = getPropDescriptor(instance, key) || getPropDescriptor(proto, key);_ProcessVariable_({descriptor: descriptor}, __O__);
          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);_ProcessVariable_({hasGetterSetter: hasGetterSetter}, __O__);
          if (!tag$$1.hasOwnProperty(key) && hasGetterSetter) {
            Object.defineProperty(tag$$1, key, descriptor);
          } else {
            tag$$1[key] = isFunction(instance[key]) ? instance[key].bind(tag$$1) : instance[key];
          }
        }
      });
      if (instance.init) {
        instance.init.bind(tag$$1)(tag$$1.opts);
      }
    });

    return _ProcessReturn_(tag$$1, __O__);
  }

  
  function moveChild(tagName, newPos) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var parent = this.parent;_ProcessVariable_({parent: parent}, __O__);
    var tags;_ProcessVariable_({tags: tags}, __O__);
    if (!parent) {
      return _ProcessReturn_(undefined, __O__);
    }

    tags = parent.tags[tagName];

    if (isArray(tags)) {
      tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]);
    } else {
      arrayishAdd(parent.tags, tagName, this);
    }
  }

  
  function moveVirtual(src, target) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var this$1 = this;_ProcessVariable_({this$1: this$1}, __O__);

    var el = this.__.head;_ProcessVariable_({el: el}, __O__);
    var sib;_ProcessVariable_({sib: sib}, __O__);
    var frag = createFragment();_ProcessVariable_({frag: frag}, __O__);

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      el = sib;
      if (el === this$1.__.tail) {
        frag.appendChild(el);
        src.insertBefore(frag, target.__.head);
        break;
      }
    }
  }

  
  function mkitem(expr, key, val) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var item = {};_ProcessVariable_({item: item}, __O__);
    item[expr.key] = key;
    if (expr.pos) {
      item[expr.pos] = val;
    }
    return _ProcessReturn_(item, __O__);
  }

  
  function unmountRedundant(items, tags, filteredItemsCount) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var i = tags.length;_ProcessVariable_({i: i}, __O__);
    var j = items.length - filteredItemsCount;_ProcessVariable_({j: j}, __O__);

    while (i > j) {
      i--;
      remove.apply(tags[i], [tags, i]);
    }
  }

  
  function remove(tags, i) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    tags.splice(i, 1);
    this.unmount();
    arrayishRemove(this.parent, this, this.__.tagName, true);
  }

  
  function moveNestedTags(i) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var this$1 = this;_ProcessVariable_({this$1: this$1}, __O__);

    each(Object.keys(this.tags), function _anonymous_36(tagName) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      moveChild.apply(this$1.tags[tagName], [tagName, i]);
    });
  }

  
  function move(root, nextTag, isVirtual) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isVirtual) {
      moveVirtual.apply(this, [root, nextTag]);
    } else {
      safeInsert(root, this.root, nextTag.root);
    }
  }

  
  function insert(root, nextTag, isVirtual) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isVirtual) {
      makeVirtual.apply(this, [root, nextTag]);
    } else {
      safeInsert(root, this.root, nextTag.root);
    }
  }

  
  function append(root, isVirtual) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (isVirtual) {
      makeVirtual.call(this, root);
    } else {
      root.appendChild(this.root);
    }
  }

  
  function getItemId(keyAttr, originalItem, keyedItem, hasKeyAttrExpr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (keyAttr) {
      return _ProcessReturn_(hasKeyAttrExpr ? tmpl(keyAttr, keyedItem) : originalItem[keyAttr], __O__);
    }

    return _ProcessReturn_(originalItem, __O__);
  }

  
  function _each(dom, parent, expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var mustReorder = typeof getAttribute(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || removeAttribute(dom, LOOP_NO_REORDER_DIRECTIVE);_ProcessVariable_({mustReorder: mustReorder}, __O__);
    var keyAttr = getAttribute(dom, KEY_DIRECTIVE);_ProcessVariable_({keyAttr: keyAttr}, __O__);
    var hasKeyAttrExpr = keyAttr ? tmpl.hasExpr(keyAttr) : false;_ProcessVariable_({hasKeyAttrExpr: hasKeyAttrExpr}, __O__);
    var tagName = getName(dom);_ProcessVariable_({tagName: tagName}, __O__);
    var impl = __TAG_IMPL[tagName];_ProcessVariable_({impl: impl}, __O__);
    var parentNode = dom.parentNode;_ProcessVariable_({parentNode: parentNode}, __O__);
    var placeholder = createDOMPlaceholder();_ProcessVariable_({placeholder: placeholder}, __O__);
    var child = get(dom);_ProcessVariable_({child: child}, __O__);
    var ifExpr = getAttribute(dom, CONDITIONAL_DIRECTIVE);_ProcessVariable_({ifExpr: ifExpr}, __O__);
    var tags = [];_ProcessVariable_({tags: tags}, __O__);
    var isLoop = true;_ProcessVariable_({isLoop: isLoop}, __O__);
    var innerHTML = dom.innerHTML;_ProcessVariable_({innerHTML: innerHTML}, __O__);
    var isAnonymous = !__TAG_IMPL[tagName];_ProcessVariable_({isAnonymous: isAnonymous}, __O__);
    var isVirtual = dom.tagName === 'VIRTUAL';_ProcessVariable_({isVirtual: isVirtual}, __O__);
    var oldItems = [];_ProcessVariable_({oldItems: oldItems}, __O__);
    removeAttribute(dom, LOOP_DIRECTIVE);
    removeAttribute(dom, KEY_DIRECTIVE);
    expr = tmpl.loopKeys(expr);
    expr.isLoop = true;

    if (ifExpr) {
      removeAttribute(dom, CONDITIONAL_DIRECTIVE);
    }
    parentNode.insertBefore(placeholder, dom);
    parentNode.removeChild(dom);

    expr.update = function updateEach() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      expr.value = tmpl(expr.val, parent);

      var items = expr.value;_ProcessVariable_({items: items}, __O__);
      var frag = createFragment();_ProcessVariable_({frag: frag}, __O__);
      var isObject = !isArray(items) && !isString(items);_ProcessVariable_({isObject: isObject}, __O__);
      var root = placeholder.parentNode;_ProcessVariable_({root: root}, __O__);
      var tmpItems = [];_ProcessVariable_({tmpItems: tmpItems}, __O__);
      var hasKeys = isObject && !!items;_ProcessVariable_({hasKeys: hasKeys}, __O__);
      if (!root) {
        return _ProcessReturn_(undefined, __O__);
      }
      if (isObject) {
        items = items ? Object.keys(items).map(function _anonymous_37(key) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          return _ProcessReturn_(mkitem(expr, items[key], key), __O__);
        }) : [];
      }
      var filteredItemsCount = 0;_ProcessVariable_({filteredItemsCount: filteredItemsCount}, __O__);
      each(items, function _anonymous_38(_item, index) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        var i = index - filteredItemsCount;_ProcessVariable_({i: i}, __O__);
        var item = !hasKeys && expr.key ? mkitem(expr, _item, index) : _item;_ProcessVariable_({item: item}, __O__);
        if (ifExpr && !tmpl(ifExpr, extend(create(parent), item))) {
          filteredItemsCount++;
          return _ProcessReturn_(undefined, __O__);
        }

        var itemId = getItemId(keyAttr, _item, item, hasKeyAttrExpr);_ProcessVariable_({itemId: itemId}, __O__);
        var doReorder = !isObject && mustReorder && typeof _item === T_OBJECT || keyAttr;_ProcessVariable_({doReorder: doReorder}, __O__);
        var oldPos = oldItems.indexOf(itemId);_ProcessVariable_({oldPos: oldPos}, __O__);
        var isNew = oldPos === -1;_ProcessVariable_({isNew: isNew}, __O__);
        var pos = !isNew && doReorder ? oldPos : i;_ProcessVariable_({pos: pos}, __O__);
        var tag = tags[pos];_ProcessVariable_({tag: tag}, __O__);
        var mustAppend = i >= oldItems.length;_ProcessVariable_({mustAppend: mustAppend}, __O__);
        var mustCreate = doReorder && isNew || !doReorder && !tag || !tags[i];_ProcessVariable_({mustCreate: mustCreate}, __O__);
        if (mustCreate) {
          tag = createTag(impl, {
            parent: parent,
            isLoop: isLoop,
            isAnonymous: isAnonymous,
            tagName: tagName,
            root: dom.cloneNode(isAnonymous),
            item: item,
            index: i
          }, innerHTML);
          tag.mount();

          if (mustAppend) {
            append.apply(tag, [frag || root, isVirtual]);
          } else {
            insert.apply(tag, [root, tags[i], isVirtual]);
          }

          if (!mustAppend) {
            oldItems.splice(i, 0, item);
          }
          tags.splice(i, 0, tag);
          if (child) {
            arrayishAdd(parent.tags, tagName, tag, true);
          }
        } else if (pos !== i && doReorder) {
          if (keyAttr || contains(items, oldItems[pos])) {
            move.apply(tag, [root, tags[i], isVirtual]);
            tags.splice(i, 0, tags.splice(pos, 1)[0]);
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
          }
          if (expr.pos) {
            tag[expr.pos] = i;
          }
          if (!child && tag.tags) {
            moveNestedTags.call(tag, i);
          }
        }
        extend(tag.__, {
          item: item,
          index: i,
          parent: parent
        });

        tmpItems[i] = itemId;

        if (!mustCreate) {
          tag.update(item);
        }
      });
      unmountRedundant(items, tags, filteredItemsCount);
      oldItems = tmpItems.slice();

      root.insertBefore(frag, placeholder);
    };

    expr.unmount = function _anonymous_39() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      each(tags, function _anonymous_40(t) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        t.unmount();
      });
    };

    return _ProcessReturn_(expr, __O__);
  }

  var RefExpr = {
    init: function init(dom, parent, attrName, attrValue) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      this.dom = dom;
      this.attr = attrName;
      this.rawValue = attrValue;
      this.parent = parent;
      this.hasExp = tmpl.hasExpr(attrValue);
      return _ProcessReturn_(this, __O__);
    },
    update: function update() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var old = this.value;
      var customParent = this.parent && getImmediateCustomParent(this.parent);
      var tagOrDom = this.dom.__ref || this.tag || this.dom;

      this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;
      if (!isBlank(old) && customParent) {
        arrayishRemove(customParent.refs, old, tagOrDom);
      }
      if (!isBlank(this.value) && isString(this.value)) {
        if (customParent) {
          arrayishAdd(customParent.refs, this.value, tagOrDom,
          null, this.parent.__.index);
        }

        if (this.value !== old) {
          setAttribute(this.dom, this.attr, this.value);
        }
      } else {
        removeAttribute(this.dom, this.attr);
      }
      if (!this.dom.__ref) {
        this.dom.__ref = tagOrDom;
      }
    },
    unmount: function unmount() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var tagOrDom = this.tag || this.dom;
      var customParent = this.parent && getImmediateCustomParent(this.parent);
      if (!isBlank(this.value) && customParent) {
        arrayishRemove(customParent.refs, this.value, tagOrDom);
      }
    }

    
  };_ProcessVariable_({RefExpr: RefExpr}, __O__);function createRefDirective(dom, tag, attrName, attrValue) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(create(RefExpr).init(dom, tag, attrName, attrValue), __O__);
  }

  
  function unmountAll(expressions) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    each(expressions, function _anonymous_41(expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (expr.unmount) {
        expr.unmount(true);
      } else if (expr.tagName) {
        expr.tag.unmount(true);
      } else if (expr.unmount) {
        expr.unmount();
      }
    });
  }

  var IfExpr = {
    init: function init(dom, tag, expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      removeAttribute(dom, CONDITIONAL_DIRECTIVE);
      extend(this, { tag: tag, expr: expr, stub: createDOMPlaceholder(), pristine: dom });
      var p = dom.parentNode;
      p.insertBefore(this.stub, dom);
      p.removeChild(dom);

      return _ProcessReturn_(this, __O__);
    },
    update: function update$$1() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      this.value = tmpl(this.expr, this.tag);

      if (!this.stub.parentNode) {
        return _ProcessReturn_(undefined, __O__);
      }

      if (this.value && !this.current) {
        this.current = this.pristine.cloneNode(true);
        this.stub.parentNode.insertBefore(this.current, this.stub);
        this.expressions = parseExpressions.apply(this.tag, [this.current, true]);
      } else if (!this.value && this.current) {
        this.unmount();
        this.current = null;
        this.expressions = [];
      }

      if (this.value) {
        update.call(this.tag, this.expressions);
      }
    },
    unmount: function unmount() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (this.current) {
        if (this.current._tag) {
          this.current._tag.unmount();
        } else if (this.current.parentNode) {
          this.current.parentNode.removeChild(this.current);
        }
      }

      unmountAll(this.expressions || []);
    }

    
  };_ProcessVariable_({IfExpr: IfExpr}, __O__);function createIfDirective(dom, tag, attr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(create(IfExpr).init(dom, tag, attr), __O__);
  }

  
  function parseExpressions(root, mustIncludeRoot) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var this$1 = this;_ProcessVariable_({this$1: this$1}, __O__);

    var expressions = [];_ProcessVariable_({expressions: expressions}, __O__);

    walkNodes(root, function _anonymous_42(dom) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var type = dom.nodeType;_ProcessVariable_({type: type}, __O__);
      var attr;_ProcessVariable_({attr: attr}, __O__);
      var tagImpl;_ProcessVariable_({tagImpl: tagImpl}, __O__);

      if (!mustIncludeRoot && dom === root) {
        return _ProcessReturn_(undefined, __O__);
      }
      if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue)) {
        expressions.push({ dom: dom, expr: dom.nodeValue });
      }

      if (type !== 1) {
        return _ProcessReturn_(undefined, __O__);
      }

      var isVirtual = dom.tagName === 'VIRTUAL';_ProcessVariable_({isVirtual: isVirtual}, __O__);
      if (attr = getAttribute(dom, LOOP_DIRECTIVE)) {
        if (isVirtual) {
          setAttribute(dom, 'loopVirtual', true);
        }
        expressions.push(_each(dom, this$1, attr));
        return _ProcessReturn_(false, __O__);
      }
      if (attr = getAttribute(dom, CONDITIONAL_DIRECTIVE)) {
        expressions.push(createIfDirective(dom, this$1, attr));
        return _ProcessReturn_(false, __O__);
      }

      if (attr = getAttribute(dom, IS_DIRECTIVE)) {
        if (tmpl.hasExpr(attr)) {
          expressions.push({
            isRtag: true,
            expr: attr,
            dom: dom,
            attrs: [].slice.call(dom.attributes)
          });

          return _ProcessReturn_(false, __O__);
        }
      }
      tagImpl = get(dom);

      if (isVirtual) {
        if (getAttribute(dom, 'virtualized')) {
          dom.parentElement.removeChild(dom);
        }
        if (!tagImpl && !getAttribute(dom, 'virtualized') && !getAttribute(dom, 'loopVirtual'))
          {
            tagImpl = { tmpl: dom.outerHTML };
          }
      }

      if (tagImpl && (dom !== root || mustIncludeRoot)) {
        var hasIsDirective = getAttribute(dom, IS_DIRECTIVE);_ProcessVariable_({hasIsDirective: hasIsDirective}, __O__);
        if (isVirtual && !hasIsDirective) {
          setAttribute(dom, 'virtualized', true);
          var tag = createTag({ tmpl: dom.outerHTML }, { root: dom, parent: this$1 }, dom.innerHTML);_ProcessVariable_({tag: tag}, __O__);

          expressions.push(tag);
        } else {
          if (hasIsDirective && isVirtual) {
            warn("Virtual tags shouldn't be used together with the \"" + IS_DIRECTIVE + "\" attribute - https://github.com/riot/riot/issues/2511");
          }

          expressions.push(initChild(tagImpl, {
            root: dom,
            parent: this$1
          }, dom.innerHTML, this$1));
          return _ProcessReturn_(false, __O__);
        }
      }
      parseAttributes.apply(this$1, [dom, dom.attributes, function _anonymous_43(attr, expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        if (!expr) {
          return _ProcessReturn_(undefined, __O__);
        }
        expressions.push(expr);
      }]);
    });

    return _ProcessReturn_(expressions, __O__);
  }

  
  function parseAttributes(dom, attrs, fn) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var this$1 = this;_ProcessVariable_({this$1: this$1}, __O__);

    each(attrs, function _anonymous_44(attr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (!attr) {
        return _ProcessReturn_(false, __O__);
      }

      var name = attr.name;_ProcessVariable_({name: name}, __O__);
      var bool = isBoolAttr(name);_ProcessVariable_({bool: bool}, __O__);
      var expr;_ProcessVariable_({expr: expr}, __O__);

      if (contains(REF_DIRECTIVES, name) && dom.tagName.toLowerCase() !== YIELD_TAG) {
        expr = createRefDirective(dom, this$1, name, attr.value);
      } else if (tmpl.hasExpr(attr.value)) {
        expr = { dom: dom, expr: attr.value, attr: name, bool: bool };
      }

      fn(attr, expr);
    });
  }

  
  function setMountState(value) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var ref = this.__;_ProcessVariable_({ref: ref}, __O__);
    var isAnonymous = ref.isAnonymous;_ProcessVariable_({isAnonymous: isAnonymous}, __O__);
    var skipAnonymous = ref.skipAnonymous;_ProcessVariable_({skipAnonymous: skipAnonymous}, __O__);

    define(this, 'isMounted', value);

    if (!isAnonymous || !skipAnonymous) {
      if (value) {
        this.trigger('mount');
      } else {
        this.trigger('unmount');
        this.off('*');
        this.__.wasCreated = false;
      }
    }
  }

  
  function componentMount(tag$$1, dom, expressions, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var __ = tag$$1.__;_ProcessVariable_({__: __}, __O__);
    var root = __.root;_ProcessVariable_({root: root}, __O__);
    root._tag = tag$$1;
    parseAttributes.apply(__.parent, [root, root.attributes, function _anonymous_45(attr, expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (!__.isAnonymous && RefExpr.isPrototypeOf(expr)) {
        expr.tag = tag$$1;
      }
      attr.expr = expr;
      __.instAttrs.push(attr);
    }]);
    walkAttributes(__.impl.attrs, function _anonymous_46(k, v) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      __.implAttrs.push({ name: k, value: v });
    });
    parseAttributes.apply(tag$$1, [root, __.implAttrs, function _anonymous_47(attr, expr) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (expr) {
        expressions.push(expr);
      } else {
        setAttribute(root, attr.name, attr.value);
      }
    }]);
    updateOpts.apply(tag$$1, [__.isLoop, __.parent, __.isAnonymous, opts, __.instAttrs]);
    var globalMixin = mixin(GLOBAL_MIXIN);_ProcessVariable_({globalMixin: globalMixin}, __O__);

    if (globalMixin && !__.skipAnonymous) {
      for (var i in globalMixin) {
        if (globalMixin.hasOwnProperty(i)) {
          tag$$1.mixin(globalMixin[i]);
        }
      }
    }

    if (__.impl.fn) {
      __.impl.fn.call(tag$$1, opts);
    }

    if (!__.skipAnonymous) {
      tag$$1.trigger('before-mount');
    }
    each(parseExpressions.apply(tag$$1, [dom, __.isAnonymous]), function _anonymous_48(e) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(expressions.push(e), __O__);
    });

    tag$$1.update(__.item);

    if (!__.isAnonymous && !__.isInline) {
      while (dom.firstChild) {
        root.appendChild(dom.firstChild);
      }
    }

    define(tag$$1, 'root', root);
    if (!__.skipAnonymous && tag$$1.parent) {
      var p = getImmediateCustomParent(tag$$1.parent);_ProcessVariable_({p: p}, __O__);
      p.one(!p.isMounted ? 'mount' : 'updated', function _anonymous_49() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        setMountState.call(tag$$1, true);
      });
    } else {
      setMountState.call(tag$$1, true);
    }

    tag$$1.__.wasCreated = true;

    return _ProcessReturn_(tag$$1, __O__);
  }

  
  function tagUnmount(tag, mustKeepRoot, expressions) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var __ = tag.__;_ProcessVariable_({__: __}, __O__);
    var root = __.root;_ProcessVariable_({root: root}, __O__);
    var tagIndex = __TAGS_CACHE.indexOf(tag);_ProcessVariable_({tagIndex: tagIndex}, __O__);
    var p = root.parentNode;_ProcessVariable_({p: p}, __O__);

    if (!__.skipAnonymous) {
      tag.trigger('before-unmount');
    }
    walkAttributes(__.impl.attrs, function _anonymous_50(name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (startsWith(name, ATTRS_PREFIX)) {
        name = name.slice(ATTRS_PREFIX.length);
      }

      removeAttribute(root, name);
    });
    tag.__.listeners.forEach(function _anonymous_51(dom) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function _anonymous_52(eventName) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);
      });
    });
    if (tagIndex !== -1) {
      __TAGS_CACHE.splice(tagIndex, 1);
    }
    if (__.parent && !__.isAnonymous) {
      var ptag = getImmediateCustomParent(__.parent);_ProcessVariable_({ptag: ptag}, __O__);

      if (__.isVirtual) {
        Object.keys(tag.tags).forEach(function _anonymous_53(tagName) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          return _ProcessReturn_(arrayishRemove(ptag.tags, tagName, tag.tags[tagName]), __O__);
        });
      } else {
        arrayishRemove(ptag.tags, __.tagName, tag);
      }
    }
    if (tag.__.virts) {
      each(tag.__.virts, function _anonymous_54(v) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        if (v.parentNode) {
          v.parentNode.removeChild(v);
        }
      });
    }
    unmountAll(expressions);
    each(__.instAttrs, function _anonymous_55(a) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(a.expr && a.expr.unmount && a.expr.unmount(), __O__);
    });
    if (mustKeepRoot) {
      setInnerHTML(root, '');
    }
    else if (p) {
        p.removeChild(root);
      }
    if (__.onUnmount) {
      __.onUnmount();
    }
    if (!tag.isMounted) {
      setMountState.call(tag, true);
    }

    setMountState.call(tag, false);

    delete root._tag;

    return _ProcessReturn_(tag, __O__);
  }

  
  function createTag(impl, conf, innerHTML) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (impl === void 0) impl = {};
    if (conf === void 0) conf = {};

    var tag = conf.context || {};_ProcessVariable_({tag: tag}, __O__);
    var opts = conf.opts || {};_ProcessVariable_({opts: opts}, __O__);
    var parent = conf.parent;_ProcessVariable_({parent: parent}, __O__);
    var isLoop = conf.isLoop;_ProcessVariable_({isLoop: isLoop}, __O__);
    var isAnonymous = !!conf.isAnonymous;_ProcessVariable_({isAnonymous: isAnonymous}, __O__);
    var skipAnonymous = settings.skipAnonymousTags && isAnonymous;_ProcessVariable_({skipAnonymous: skipAnonymous}, __O__);
    var item = conf.item;_ProcessVariable_({item: item}, __O__);
    var index = conf.index;_ProcessVariable_({index: index}, __O__);
    var instAttrs = [];_ProcessVariable_({instAttrs: instAttrs}, __O__);
    var implAttrs = [];_ProcessVariable_({implAttrs: implAttrs}, __O__);
    var tmpl = impl.tmpl;_ProcessVariable_({tmpl: tmpl}, __O__);
    var expressions = [];_ProcessVariable_({expressions: expressions}, __O__);
    var root = conf.root;_ProcessVariable_({root: root}, __O__);
    var tagName = conf.tagName || getName(root);_ProcessVariable_({tagName: tagName}, __O__);
    var isVirtual = tagName === 'virtual';_ProcessVariable_({isVirtual: isVirtual}, __O__);
    var isInline = !isVirtual && !tmpl;_ProcessVariable_({isInline: isInline}, __O__);
    var dom;_ProcessVariable_({dom: dom}, __O__);

    if (isInline || isLoop && isAnonymous) {
      dom = root;
    } else {
      if (!isVirtual) {
        root.innerHTML = '';
      }
      dom = mkdom(tmpl, innerHTML, isSvg(root));
    }
    if (!skipAnonymous) {
      observable(tag);
    }
    if (impl.name && root._tag) {
      root._tag.unmount(true);
    }

    define(tag, '__', {
      impl: impl,
      root: root,
      skipAnonymous: skipAnonymous,
      implAttrs: implAttrs,
      isAnonymous: isAnonymous,
      instAttrs: instAttrs,
      innerHTML: innerHTML,
      tagName: tagName,
      index: index,
      isLoop: isLoop,
      isInline: isInline,
      item: item,
      parent: parent,
      listeners: [],
      virts: [],
      wasCreated: false,
      tail: null,
      head: null
    });
    return _ProcessReturn_([['isMounted', false],
    ['_riot_id', uid()], ['root', root], ['opts', opts, { writable: true, enumerable: true }], ['parent', parent || null],
    ['tags', {}], ['refs', {}], ['update', function _anonymous_56(data) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return componentUpdate(tag, data, expressions);
    }], ['mixin', function _anonymous_57() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var mixins = [], len = arguments.length;_ProcessVariable_({mixins: mixins,len: len}, __O__);
      while (len--) mixins[len] = arguments[len];

      return componentMixin.apply(void 0, [tag].concat(mixins));
    }], ['mount', function _anonymous_58() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return componentMount(tag, dom, expressions, opts);
    }], ['unmount', function _anonymous_59(mustKeepRoot) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return tagUnmount(tag, mustKeepRoot, expressions);
    }]].reduce(function _anonymous_60(acc, ref) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var key = ref[0];_ProcessVariable_({key: key}, __O__);
      var value = ref[1];_ProcessVariable_({value: value}, __O__);
      var opts = ref[2];_ProcessVariable_({opts: opts}, __O__);

      define(tag, key, value, opts);
      return acc;
    }, extend(tag, item)), __O__);
  }

  
  function mount$1(root, tagName, opts, ctx) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var impl = __TAG_IMPL[tagName];_ProcessVariable_({impl: impl}, __O__);
    var implClass = __TAG_IMPL[tagName].class;_ProcessVariable_({implClass: implClass}, __O__);
    var context = ctx || (implClass ? create(implClass.prototype) : {});_ProcessVariable_({context: context}, __O__);
    var innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;_ProcessVariable_({innerHTML: innerHTML}, __O__);
    var conf = extend({ root: root, opts: opts, context: context }, { parent: opts ? opts.parent : null });_ProcessVariable_({conf: conf}, __O__);
    var tag;_ProcessVariable_({tag: tag}, __O__);

    if (impl && root) {
      tag = createTag(impl, conf, innerHTML);
    }

    if (tag && tag.mount) {
      tag.mount(true);
      if (!contains(__TAGS_CACHE, tag)) {
        __TAGS_CACHE.push(tag);
      }
    }

    return _ProcessReturn_(tag, __O__);
  }

  var tags = Object.freeze({
    arrayishAdd: arrayishAdd,
    getTagName: getName,
    inheritParentProps: inheritParentProps,
    mountTo: mount$1,
    selectTags: query,
    arrayishRemove: arrayishRemove,
    getTag: get,
    initChildTag: initChild,
    moveChildTag: moveChild,
    makeReplaceVirtual: makeReplaceVirtual,
    getImmediateCustomParentTag: getImmediateCustomParent,
    makeVirtual: makeVirtual,
    moveVirtual: moveVirtual,
    unmountAll: unmountAll,
    createIfDirective: createIfDirective,
    createRefDirective: createRefDirective
  });_ProcessVariable_({tags: tags}, __O__);

  
  var settings$1 = settings;_ProcessVariable_({settings$1: settings$1}, __O__);
  var util = {
    tmpl: tmpl,
    brackets: brackets,
    styleManager: styleManager,
    vdom: __TAGS_CACHE,
    styleNode: styleManager.styleNode,
    dom: dom,
    check: check,
    misc: misc,
    tags: tags
  };_ProcessVariable_({util: util}, __O__);
  var Tag$1 = Tag;_ProcessVariable_({Tag$1: Tag$1}, __O__);
  var tag$1 = tag;_ProcessVariable_({tag$1: tag$1}, __O__);
  var tag2$1 = tag2;_ProcessVariable_({tag2$1: tag2$1}, __O__);
  var mount$2 = mount;_ProcessVariable_({mount$2: mount$2}, __O__);
  var mixin$1 = mixin;_ProcessVariable_({mixin$1: mixin$1}, __O__);
  var update$2 = update$1;_ProcessVariable_({update$2: update$2}, __O__);
  var unregister$1 = unregister;_ProcessVariable_({unregister$1: unregister$1}, __O__);
  var version$1 = version;_ProcessVariable_({version$1: version$1}, __O__);
  var observable$1 = observable;_ProcessVariable_({observable$1: observable$1}, __O__);

  var riot$1 = extend({}, core, {
    observable: observable,
    settings: settings$1,
    util: util
  });_ProcessVariable_({riot$1: riot$1}, __O__);

  var riot$2 = Object.freeze({
    settings: settings$1,
    util: util,
    Tag: Tag$1,
    tag: tag$1,
    tag2: tag2$1,
    mount: mount$2,
    mixin: mixin$1,
    update: update$2,
    unregister: unregister$1,
    version: version$1,
    observable: observable$1,
    default: riot$1
  });_ProcessVariable_({riot$2: riot$2}, __O__);

  
  function safeRegex(re) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var arguments$1 = arguments;_ProcessVariable_({arguments$1: arguments$1}, __O__);

    var src = re.source;_ProcessVariable_({src: src}, __O__);
    var opt = re.global ? 'g' : '';_ProcessVariable_({opt: opt}, __O__);

    if (re.ignoreCase) {
      opt += 'i';
    }
    if (re.multiline) {
      opt += 'm';
    }

    for (var i = 1; i < arguments.length; i++) {
      src = src.replace('@', '\\' + arguments$1[i]);
    }

    return _ProcessReturn_(new RegExp(src, opt), __O__);
  }

  
  var parsers = function _anonymous_61(win) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var _p = {};

    function _r(name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var parser = win[name];

      if (parser) {
        return _ProcessReturn_(parser, __O__);
      }

      throw new Error('Parser "' + name + '" not loaded.');
    }

    function _req(name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var parts = name.split('.');

      if (parts.length !== 2) {
        throw new Error('Bad format for parsers._req');
      }

      var parser = _p[parts[0]][parts[1]];
      if (parser) {
        return _ProcessReturn_(parser, __O__);
      }

      throw new Error('Parser "' + name + '" not found.');
    }

    function extend(obj, props) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (props) {
        for (var prop in props) {
          
          if (props.hasOwnProperty(prop)) {
            obj[prop] = props[prop];
          }
        }
      }
      return _ProcessReturn_(obj, __O__);
    }

    function renderPug(compilerName, html, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      opts = extend({
        pretty: true,
        filename: url,
        doctype: 'html'
      }, opts);
      return _ProcessReturn_(_r(compilerName).render(html, opts), __O__);
    }

    _p.html = {
      jade: function _anonymous_62(html, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        
        console.log('DEPRECATION WARNING: jade was renamed "pug" - The jade parser will be removed in riot@3.0.0!');
        
        return _ProcessReturn_(renderPug('jade', html, opts, url), __O__);
      },
      pug: function _anonymous_63(html, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(renderPug('pug', html, opts, url), __O__);
      }
    };
    _p.css = {
      less: function _anonymous_64(tag, css, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        var ret;

        opts = extend({
          sync: true,
          syncImport: true,
          filename: url
        }, opts);
        _r('less').render(css, opts, function _anonymous_65(err, result) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          if (err) {
            throw err;
          }
          ret = result.css;
        });
        return _ProcessReturn_(ret, __O__);
      }
    };
    _p.js = {

      es6: function _anonymous_66(js, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(_r('Babel').transform(
            js,
            extend({
              plugins: [
                ['transform-es2015-template-literals', { loose: true }],
                'transform-es2015-literals',
                'transform-es2015-function-name',
                'transform-es2015-arrow-functions',
                'transform-es2015-block-scoped-functions',
                ['transform-es2015-classes', { loose: true }],
                'transform-es2015-object-super',
                'transform-es2015-shorthand-properties',
                'transform-es2015-duplicate-keys',
                ['transform-es2015-computed-properties', { loose: true }],
                ['transform-es2015-for-of', { loose: true }],
                'transform-es2015-sticky-regex',
                'transform-es2015-unicode-regex',
                'check-es2015-constants',
                ['transform-es2015-spread', { loose: true }],
                'transform-es2015-parameters',
                ['transform-es2015-destructuring', { loose: true }],
                'transform-es2015-block-scoping',
                'transform-es2015-typeof-symbol',
                ['transform-es2015-modules-commonjs', { allowTopLevelThis: true }],
                ['transform-regenerator', { async: false, asyncGenerators: false }]
              ]
            },
            opts
            )).code, __O__);
      },
      buble: function _anonymous_67(js, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        opts = extend({
          source: url,
          modules: false
        }, opts);
        return _ProcessReturn_(_r('buble').transform(js, opts).code, __O__);
      },
      coffee: function _anonymous_68(js, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(_r('CoffeeScript').compile(js, extend({ bare: true }, opts)), __O__);
      },
      livescript: function _anonymous_69(js, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(_r('livescript').compile(js, extend({ bare: true, header: false }, opts)), __O__);
      },
      typescript: function _anonymous_70(js, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(_r('typescript')(js, opts), __O__);
      },
      none: function _anonymous_71(js) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(js, __O__);
      }
    };
    _p.js.javascript = _p.js.none;
    _p.js.coffeescript = _p.js.coffee;
    _p._req = _req;
    _p.utils = {
      extend: extend
    };

    return _ProcessReturn_(_p, __O__);
  }(window || global);_ProcessVariable_({parsers: parsers}, __O__);

  var S_SQ_STR = /'[^'\n\r\\]*(?:\\(?:\r\n?|[\S\s])[^'\n\r\\]*)*'/.source;_ProcessVariable_({S_SQ_STR: S_SQ_STR}, __O__);

  var S_R_SRC1 = [/\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//.source, '//.*', S_SQ_STR, S_SQ_STR.replace(/'/g, '"'), '([/`])'].join('|');_ProcessVariable_({S_R_SRC1: S_R_SRC1}, __O__);

  var S_R_SRC2 = S_R_SRC1.slice(0, -2) + "{}])";_ProcessVariable_({S_R_SRC2: S_R_SRC2}, __O__);

  function skipES6str(code, start, stack) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var re = /[`$\\]/g;_ProcessVariable_({re: re}, __O__);

    re.lastIndex = start;
    while (re.exec(code)) {
      var end = re.lastIndex;_ProcessVariable_({end: end}, __O__);
      var c = code[end - 1];_ProcessVariable_({c: c}, __O__);

      if (c === '`') {
        return _ProcessReturn_(end, __O__);
      }
      if (c === '$' && code[end] === '{') {
        stack.push('`', '}');
        return _ProcessReturn_(end + 1, __O__);
      }
      re.lastIndex++;
    }

    throw new Error('Unclosed ES6 template');
  }

  function jsSplitter(code, start) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var re1 = new RegExp(S_R_SRC1, 'g');_ProcessVariable_({re1: re1}, __O__);
    var re2;_ProcessVariable_({re2: re2}, __O__);

    
    var skipRegex = brackets.skipRegex;_ProcessVariable_({skipRegex: skipRegex}, __O__);
    var offset = start | 0;_ProcessVariable_({offset: offset}, __O__);
    var result = [[]];_ProcessVariable_({result: result}, __O__);
    var stack = [];_ProcessVariable_({stack: stack}, __O__);
    var re = re1;_ProcessVariable_({re: re}, __O__);

    var lastPos = re.lastIndex = offset;_ProcessVariable_({lastPos: lastPos}, __O__);
    var str, ch, idx, end, match;_ProcessVariable_({str: str,ch: ch,idx: idx,end: end,match: match}, __O__);

    while (match = re.exec(code)) {
      idx = match.index;
      end = re.lastIndex;
      str = '';
      ch = match[1];

      if (ch) {

        if (ch === '{') {
          stack.push('}');
        } else if (ch === '}') {
          if (stack.pop() !== ch) {
            throw new Error("Unexpected '}'");
          } else if (stack[stack.length - 1] === '`') {
            ch = stack.pop();
          }
        } else if (ch === '/') {
          end = skipRegex(code, idx);

          if (end > idx + 1) {
            str = code.slice(idx, end);
          }
        }

        if (ch === '`') {
          end = skipES6str(code, end, stack);
          str = code.slice(idx, end);

          if (stack.length) {
            re = re2 || (re2 = new RegExp(S_R_SRC2, 'g'));
          } else {
            re = re1;
          }
        }
      } else {

        str = match[0];

        if (str[0] === '/') {
          str = str[1] === '*' ? ' ' : '';
          code = code.slice(offset, idx) + str + code.slice(end);
          end = idx + str.length;
          str = '';
        } else if (str.length === 2) {
          str = '';
        }
      }

      if (str) {
        result[0].push(code.slice(lastPos, idx));
        result.push(str);
        lastPos = end;
      }

      re.lastIndex = end;
    }

    result[0].push(code.slice(lastPos));

    return _ProcessReturn_(result, __O__);
  }

  

  var extend$1 = parsers.utils.extend;_ProcessVariable_({extend$1: extend$1}, __O__);
  

  var S_LINESTR = /"[^"\n\\]*(?:\\[\S\s][^"\n\\]*)*"|'[^'\n\\]*(?:\\[\S\s][^'\n\\]*)*'/.source;_ProcessVariable_({S_LINESTR: S_LINESTR}, __O__);

  var S_STRINGS = brackets.R_STRINGS.source;_ProcessVariable_({S_STRINGS: S_STRINGS}, __O__);

  var HTML_ATTRS = / *([-\w:\xA0-\xFF]+) ?(?:= ?('[^']*'|"[^"]*"|\S+))?/g;_ProcessVariable_({HTML_ATTRS: HTML_ATTRS}, __O__);

  var HTML_COMMS = RegExp(/<!--(?!>)[\S\s]*?-->/.source + '|' + S_LINESTR, 'g');_ProcessVariable_({HTML_COMMS: HTML_COMMS}, __O__);

  var HTML_TAGS = /<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^"'/>]*(?:(?:"[^"]*"|'[^']*'|\/[^>])[^'"/>]*)*)|\s*)(\/?)>/g;_ProcessVariable_({HTML_TAGS: HTML_TAGS}, __O__);

  var HTML_PACK = />[ \t]+<(-?[A-Za-z]|\/[-A-Za-z])/g;_ProcessVariable_({HTML_PACK: HTML_PACK}, __O__);

  var RIOT_ATTRS = ['style', 'src', 'd', 'value'];_ProcessVariable_({RIOT_ATTRS: RIOT_ATTRS}, __O__);

  var VOID_TAGS = /^(?:input|img|br|wbr|hr|area|base|col|embed|keygen|link|meta|param|source|track)$/;_ProcessVariable_({VOID_TAGS: VOID_TAGS}, __O__);

  var PRE_TAGS = /<pre(?:\s+(?:[^">]*|"[^"]*")*)?>([\S\s]+?)<\/pre\s*>/gi;_ProcessVariable_({PRE_TAGS: PRE_TAGS}, __O__);

  var SPEC_TYPES = /^"(?:number|date(?:time)?|time|month|email|color)\b/i;_ProcessVariable_({SPEC_TYPES: SPEC_TYPES}, __O__);

  var IMPORT_STATEMENT = /^\s*import(?!\w)(?:(?:\s|[^\s'"])*)['|"].*\n?/gm;_ProcessVariable_({IMPORT_STATEMENT: IMPORT_STATEMENT}, __O__);

  var TRIM_TRAIL = /[ \t]+$/gm;_ProcessVariable_({TRIM_TRAIL: TRIM_TRAIL}, __O__);

  var RE_HASEXPR = safeRegex(/@#\d/, 'x01'),
      RE_REPEXPR = safeRegex(/@#(\d+)/g, 'x01'),
      CH_IDEXPR = '\x01#',
      CH_DQCODE = '\u2057',
      DQ = '"',
      SQ = "'";_ProcessVariable_({RE_HASEXPR: RE_HASEXPR,RE_REPEXPR: RE_REPEXPR,CH_IDEXPR: CH_IDEXPR,CH_DQCODE: CH_DQCODE,DQ: DQ,SQ: SQ}, __O__);

  function cleanSource(src) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var mm,
        re = HTML_COMMS;_ProcessVariable_({mm: mm,re: re}, __O__);

    if (src.indexOf('\r') !== 1) {
      src = src.replace(/\r\n?/g, '\n');
    }

    re.lastIndex = 0;
    while (mm = re.exec(src)) {
      if (mm[0][0] === '<') {
        src = RegExp.leftContext + RegExp.rightContext;
        re.lastIndex = mm[3] + 1;
      }
    }
    return _ProcessReturn_(src, __O__);
  }

  function parseAttribs(str, pcex) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var list = [],
        match,
        type,
        vexp;_ProcessVariable_({list: list,match: match,type: type,vexp: vexp}, __O__);

    HTML_ATTRS.lastIndex = 0;

    str = str.replace(/\s+/g, ' ');

    while (match = HTML_ATTRS.exec(str)) {
      var k = match[1].toLowerCase(),
          v = match[2];_ProcessVariable_({k: k,v: v}, __O__);

      if (!v) {
        list.push(k);
      } else {

        if (v[0] !== DQ) {
          v = DQ + (v[0] === SQ ? v.slice(1, -1) : v) + DQ;
        }

        if (k === 'type' && SPEC_TYPES.test(v)) {
          type = v;
        } else {
          if (RE_HASEXPR.test(v)) {

            if (k === 'value') {
              vexp = 1;
            }
            if (RIOT_ATTRS.indexOf(k) !== -1) {
              k = 'riot-' + k;
            }
          }

          list.push(k + '=' + v);
        }
      }
    }

    if (type) {
      if (vexp) {
        type = DQ + pcex._bp[0] + SQ + type.slice(1, -1) + SQ + pcex._bp[1] + DQ;
      }
      list.push('type=' + type);
    }
    return _ProcessReturn_(list.join(' '), __O__);
  }

  function splitHtml(html, opts, pcex) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var _bp = pcex._bp;_ProcessVariable_({_bp: _bp}, __O__);

    if (html && _bp[4].test(html)) {
      var jsfn = opts.expr && (opts.parser || opts.type) ? _compileJS : 0,
          list = brackets.split(html, 0, _bp),
          expr;_ProcessVariable_({jsfn: jsfn,list: list,expr: expr}, __O__);

      for (var i = 1; i < list.length; i += 2) {
        expr = list[i];
        if (expr[0] === '^') {
          expr = expr.slice(1);
        } else if (jsfn) {
          expr = jsfn(expr, opts).trim();
          if (expr.slice(-1) === ';') {
            expr = expr.slice(0, -1);
          }
        }
        list[i] = CH_IDEXPR + (pcex.push(expr) - 1) + _bp[1];
      }
      html = list.join('');
    }
    return _ProcessReturn_(html, __O__);
  }

  function restoreExpr(html, pcex) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (pcex.length) {
      html = html.replace(RE_REPEXPR, function _anonymous_72(_, d) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

        return _ProcessReturn_(pcex._bp[0] + pcex[d].trim().replace(/[\\r\n]+/g, ' ').replace(/"/g, CH_DQCODE), __O__);
      });
    }
    return _ProcessReturn_(html, __O__);
  }

  function _compileHTML(html, opts, pcex) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!/\S/.test(html)) {
      return _ProcessReturn_('', __O__);
    }

    html = splitHtml(html, opts, pcex).replace(HTML_TAGS, function _anonymous_73(_, name, attr, ends) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

      name = name.toLowerCase();

      ends = ends && !VOID_TAGS.test(name) ? '></' + name : '';

      if (attr) {
        name += ' ' + parseAttribs(attr, pcex);
      }

      return _ProcessReturn_('<' + name + ends + '>', __O__);
    });

    if (!opts.whitespace) {
      var p = [];_ProcessVariable_({p: p}, __O__);

      if (/<pre[\s>]/.test(html)) {
        html = html.replace(PRE_TAGS, function _anonymous_74(q) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          p.push(q);
          return _ProcessReturn_('\\u0002', __O__);
        });
      }

      html = html.trim().replace(/\s+/g, ' ');

      if (p.length) {
        html = html.replace(/\u0002/g, function _anonymous_75() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          return _ProcessReturn_(p.shift(), __O__);
        });
      }
    }

    if (opts.compact) {
      html = html.replace(HTML_PACK, '><$1');
    }

    return _ProcessReturn_(restoreExpr(html, pcex).replace(TRIM_TRAIL, ''), __O__);
  }

  function compileHTML(html, opts, pcex) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    if (Array.isArray(opts)) {
      pcex = opts;
      opts = {};
    } else {
      if (!pcex) {
        pcex = [];
      }
      if (!opts) {
        opts = {};
      }
    }

    pcex._bp = brackets.array(opts.brackets);

    return _ProcessReturn_(_compileHTML(cleanSource(html), opts, pcex), __O__);
  }

  var JS_ES6SIGN = /^[ \t]*(((?:async|\*)\s*)?([$_A-Za-z][$\w]*))\s*\([^()]*\)\s*{/m;_ProcessVariable_({JS_ES6SIGN: JS_ES6SIGN}, __O__);

  function riotjs(js) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var parts = [],
        match,
        toes5,
        pos,
        method,
        prefix,
        name,
        RE = RegExp;_ProcessVariable_({parts: parts,match: match,toes5: toes5,pos: pos,method: method,prefix: prefix,name: name,RE: RE}, __O__);

    var src = jsSplitter(js);_ProcessVariable_({src: src}, __O__);
    js = src.shift().join('<%>');

    while (match = js.match(JS_ES6SIGN)) {

      parts.push(RE.leftContext);
      js = RE.rightContext;
      pos = skipBody(js);

      method = match[1];
      prefix = match[2] || '';
      name = match[3];

      toes5 = !/^(?:if|while|for|switch|catch|function)$/.test(name);

      if (toes5) {
        name = match[0].replace(method, 'this.' + name + ' =' + prefix + ' function');
      } else {
        name = match[0];
      }

      parts.push(name, js.slice(0, pos));
      js = js.slice(pos);

      if (toes5 && !/^\s*.\s*bind\b/.test(js)) {
        parts.push('.bind(this)');
      }
    }

    if (parts.length) {
      js = parts.join('') + js;
    }

    if (src.length) {
      js = js.replace(/<%>/g, function _anonymous_76() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        return _ProcessReturn_(src.shift(), __O__);
      });
    }

    return _ProcessReturn_(js, __O__);

    function skipBody(s) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var r = /[{}]/g;_ProcessVariable_({r: r}, __O__);
      var i = 1;_ProcessVariable_({i: i}, __O__);

      while (i && r.exec(s)) {
        if (s[r.lastIndex - 1] === '{') {
          ++i;
        } else {
          --i;
        }
      }
      return _ProcessReturn_(i ? s.length : r.lastIndex, __O__);
    }
  }

  function _compileJS(js, opts, type, parserOpts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!/\S/.test(js)) {
      return _ProcessReturn_('', __O__);
    }
    if (!type) {
      type = opts.type;
    }

    var parser = opts.parser || type && parsers._req('js.' + type, true) || riotjs;_ProcessVariable_({parser: parser}, __O__);

    return _ProcessReturn_(parser(js, parserOpts, url).replace(/\\r\n?/g, '\n').replace(TRIM_TRAIL, ''), __O__);
  }

  function compileJS(js, opts, type, userOpts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (typeof opts === 'string') {
      userOpts = type;
      type = opts;
      opts = {};
    }
    if (type && typeof type === 'object') {
      userOpts = type;
      type = '';
    }
    if (!userOpts) {
      userOpts = {};
    }

    return _ProcessReturn_(_compileJS(js, opts || {}, type, userOpts.parserOptions, userOpts.url), __O__);
  }

  var CSS_SELECTOR = RegExp('([{}]|^)[; ]*((?:[^@ ;{}][^{}]*)?[^@ ;{}:] ?)(?={)|' + S_LINESTR, 'g');_ProcessVariable_({CSS_SELECTOR: CSS_SELECTOR}, __O__);

  function scopedCSS(tag, css) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var scope = ':scope';_ProcessVariable_({scope: scope}, __O__);

    return _ProcessReturn_(css.replace(CSS_SELECTOR, function _anonymous_77(m, p1, p2) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

      if (!p2) {
        return m;
      }

      p2 = p2.replace(/[^,]+/g, function _anonymous_78(sel) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        var s = sel.trim();_ProcessVariable_({s: s}, __O__);

        if (s.indexOf(tag) === 0) {
          return sel;
        }

        if (!s || s === 'from' || s === 'to' || s.slice(-1) === '%') {
          return sel;
        }

        if (s.indexOf(scope) < 0) {
          s = tag + ' ' + s + ',[data-is="' + tag + '"] ' + s;
        } else {
          s = s.replace(scope, tag) + ',' + s.replace(scope, '[data-is="' + tag + '"]');
        }
        return s;
      });

      return p1 ? p1 + ' ' + p2 : p2;
    }), __O__);
  }

  function _compileCSS(css, tag, type, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    opts = opts || {};

    if (type) {
      if (type !== 'css') {

        var parser = parsers._req('css.' + type, true);_ProcessVariable_({parser: parser}, __O__);
        css = parser(tag, css, opts.parserOpts || {}, opts.url);
      }
    }

    css = css.replace(brackets.R_MLCOMMS, '').replace(/\s+/g, ' ').trim();
    if (tag) {
      css = scopedCSS(tag, css);
    }

    return _ProcessReturn_(css, __O__);
  }

  function compileCSS(css, type, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (type && typeof type === 'object') {
      opts = type;
      type = '';
    } else if (!opts) {
      opts = {};
    }

    return _ProcessReturn_(_compileCSS(css, opts.tagName, type, opts), __O__);
  }

  var TYPE_ATTR = /\stype\s*=\s*(?:(['"])(.+?)\1|(\S+))/i;_ProcessVariable_({TYPE_ATTR: TYPE_ATTR}, __O__);

  var MISC_ATTR = '\\s*=\\s*(' + S_STRINGS + '|{[^}]+}|\\S+)';_ProcessVariable_({MISC_ATTR: MISC_ATTR}, __O__);

  var END_TAGS = /\/>\n|^<(?:\/?-?[A-Za-z][-\w\xA0-\xFF]*\s*|-?[A-Za-z][-\w\xA0-\xFF]*\s+[-\w:\xA0-\xFF][\S\s]*?)>\n/;_ProcessVariable_({END_TAGS: END_TAGS}, __O__);

  function _q(s, r) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (!s) {
      return _ProcessReturn_("''", __O__);
    }
    s = SQ + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + SQ;
    return _ProcessReturn_(r && s.indexOf('\n') !== -1 ? s.replace(/\n/g, '\\\n') : s, __O__);
  }

  function mktag(name, html, css, attr, js, imports, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var c = opts.debug ? ',\n  ' : ', ',
        s = '});';_ProcessVariable_({c: c,s: s}, __O__);

    if (js && js.slice(-1) !== '\n') {
      s = '\n' + s;
    }

    return _ProcessReturn_(imports + 'riot.tag2(\'' + name + SQ + c + _q(html, 1) + c + _q(css) + c + _q(attr) + ', function _anonymous_79(opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);\n' + js + s, __O__);
  }

  function splitBlocks(str) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (/<[-\w]/.test(str)) {
      var m,
          k = str.lastIndexOf('<'),
          n = str.length;_ProcessVariable_({m: m,k: k,n: n}, __O__);

      while (k !== -1) {
        m = str.slice(k, n).match(END_TAGS);
        if (m) {
          k += m.index + m[0].length;
          m = str.slice(0, k);
          if (m.slice(-5) === '<-/>\n') {
            m = m.slice(0, -5);
          }
          return _ProcessReturn_([m, str.slice(k)], __O__);
        }
        n = k;
        k = str.lastIndexOf('<', k - 1);
      }
    }
    return _ProcessReturn_(['', str], __O__);
  }

  function getType(attribs) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (attribs) {
      var match = attribs.match(TYPE_ATTR);_ProcessVariable_({match: match}, __O__);

      match = match && (match[2] || match[3]);
      if (match) {
        return _ProcessReturn_(match.replace('text/', ''), __O__);
      }
    }
    return _ProcessReturn_('', __O__);
  }

  function getAttrib(attribs, name) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (attribs) {
      var match = attribs.match(RegExp('\\s' + name + MISC_ATTR, 'i'));_ProcessVariable_({match: match}, __O__);

      match = match && match[1];
      if (match) {
        return _ProcessReturn_(/^['"]/.test(match) ? match.slice(1, -1) : match, __O__);
      }
    }
    return _ProcessReturn_('', __O__);
  }

  function unescapeHTML(str) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    return _ProcessReturn_(str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, '\''), __O__);
  }

  function getParserOptions(attribs) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var opts = unescapeHTML(getAttrib(attribs, 'options'));_ProcessVariable_({opts: opts}, __O__);

    return _ProcessReturn_(opts ? JSON.parse(opts) : null, __O__);
  }

  function getCode(code, opts, attribs, base) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var type = getType(attribs),
        src = getAttrib(attribs, 'src'),
        jsParserOptions = extend$1({}, opts.parserOptions.js);_ProcessVariable_({type: type,src: src,jsParserOptions: jsParserOptions}, __O__);

    if (src) {
      return _ProcessReturn_(false, __O__);
    }

    return _ProcessReturn_(_compileJS(code, opts, type, extend$1(jsParserOptions, getParserOptions(attribs)), base), __O__);
  }

  function cssCode(code, opts, attribs, url, tag) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var parserStyleOptions = extend$1({}, opts.parserOptions.style),
        extraOpts = {
      parserOpts: extend$1(parserStyleOptions, getParserOptions(attribs)),
      url: url
    };_ProcessVariable_({parserStyleOptions: parserStyleOptions,extraOpts: extraOpts}, __O__);

    return _ProcessReturn_(_compileCSS(code, tag, getType(attribs) || opts.style, extraOpts), __O__);
  }

  function compileTemplate(html, url, lang, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    var parser = parsers._req('html.' + lang, true);_ProcessVariable_({parser: parser}, __O__);
    return _ProcessReturn_(parser(html, opts, url), __O__);
  }

  var CUST_TAG = RegExp(/^([ \t]*)<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^'"/>]+(?:(?:@|\/[^>])[^'"/>]*)*)|\s*)?(?:\/>|>[ \t]*\n?([\S\s]*)^\1<\/\2\s*>|>(.*)<\/\2\s*>)/.source.replace('@', S_STRINGS), 'gim'),
      SCRIPTS = /<script(\s+[^>]*)?>\n?([\S\s]*?)<\/script\s*>/gi,
      STYLES = /<style(\s+[^>]*)?>\n?([\S\s]*?)<\/style\s*>/gi;_ProcessVariable_({CUST_TAG: CUST_TAG,SCRIPTS: SCRIPTS,STYLES: STYLES}, __O__);

  function compile(src, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var parts = [],
        included,
        output = src,
        defaultParserptions = {

      template: {},
      js: {},
      style: {}
    };_ProcessVariable_({parts: parts,included: included,output: output,defaultParserptions: defaultParserptions}, __O__);

    if (!opts) {
      opts = {};
    }

    opts.parserOptions = extend$1(defaultParserptions, opts.parserOptions || {});

    included = opts.exclude ? function _anonymous_80(s) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(opts.exclude.indexOf(s) < 0, __O__);
    } : function _anonymous_81() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(1, __O__);
    };

    if (!url) {
      url = '';
    }

    var _bp = brackets.array(opts.brackets);_ProcessVariable_({_bp: _bp}, __O__);

    if (opts.template) {
      output = compileTemplate(output, url, opts.template, opts.parserOptions.template);
    }

    output = cleanSource(output).replace(CUST_TAG, function _anonymous_82(_, indent, tagName, attribs, body, body2) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var jscode = '',
          styles = '',
          html = '',
          imports = '',
          pcex = [];_ProcessVariable_({jscode: jscode,styles: styles,html: html,imports: imports,pcex: pcex}, __O__);

      pcex._bp = _bp;

      tagName = tagName.toLowerCase();

      attribs = attribs && included('attribs') ? restoreExpr(parseAttribs(splitHtml(attribs, opts, pcex), pcex), pcex) : '';

      if ((body || (body = body2)) && /\S/.test(body)) {

        if (body2) {

          if (included('html')) {
            html = _compileHTML(body2, opts, pcex);
          }
        } else {

          body = body.replace(RegExp('^' + indent, 'gm'), '');

          body = body.replace(SCRIPTS, function _anonymous_83(_m, _attrs, _script) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
            if (included('js')) {
              var code = getCode(_script, opts, _attrs, url);_ProcessVariable_({code: code}, __O__);

              if (code) {
                jscode += (jscode ? '\n' : '') + code;
              }
            }
            return _ProcessReturn_('', __O__);
          });

          body = body.replace(STYLES, function _anonymous_84(_m, _attrs, _style) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
            if (included('css')) {
              styles += (styles ? ' ' : '') + cssCode(_style, opts, _attrs, url, tagName);
            }
            return _ProcessReturn_('', __O__);
          });

          var blocks = splitBlocks(body.replace(TRIM_TRAIL, ''));_ProcessVariable_({blocks: blocks}, __O__);

          if (included('html')) {
            html = _compileHTML(blocks[0], opts, pcex);
          }

          if (included('js')) {
            body = _compileJS(blocks[1], opts, null, null, url);
            if (body) {
              jscode += (jscode ? '\n' : '') + body;
            }
            jscode = jscode.replace(IMPORT_STATEMENT, function _anonymous_85(s) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
              imports += s.trim() + '\n';
              return _ProcessReturn_('', __O__);
            });
          }
        }
      }

      jscode = /\S/.test(jscode) ? jscode.replace(/\n{3,}/g, '\n\n') : '';

      if (opts.entities) {
        parts.push({
          tagName: tagName,
          html: html,
          css: styles,
          attribs: attribs,
          js: jscode,
          imports: imports
        });
        return _ProcessReturn_('', __O__);
      }

      return _ProcessReturn_(mktag(tagName, html, styles, attribs, jscode, imports, opts), __O__);
    });

    if (opts.entities) {
      return _ProcessReturn_(parts, __O__);
    }

    return _ProcessReturn_(output, __O__);
  }

  var version$2 = 'v3.5.1';_ProcessVariable_({version$2: version$2}, __O__);

  var compiler = {
    compile: compile,
    compileHTML: compileHTML,
    compileCSS: compileCSS,
    compileJS: compileJS,
    parsers: parsers,
    version: version$2
  };_ProcessVariable_({compiler: compiler}, __O__);

  var promise,
  ready;_ProcessVariable_({promise: promise,ready: ready}, __O__);
  function GET(url, fn, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var req = new XMLHttpRequest();_ProcessVariable_({req: req}, __O__);

    req.onreadystatechange = function _anonymous_86() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      if (req.readyState === 4) {
        if (req.status === 200 || !req.status && req.responseText.length) {
          fn(req.responseText, opts, url);
        } else {
          compile$1.error("\"" + url + "\" not found");
        }
      }
    };

    req.onerror = function _anonymous_87(e) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      return _ProcessReturn_(compile$1.error(e), __O__);
    };

    req.open('GET', url, true);
    req.send('');
  }
  function globalEval(js, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    if (typeof js === T_STRING) {
      var node = makeElement('script'),
          root = document.documentElement;_ProcessVariable_({node: node,root: root}, __O__);
      if (url) {
        js += '\n//# sourceURL=' + url + '.js';
      }

      node.text = js;
      root.appendChild(node);
      root.removeChild(node);
    }
  }
  function compileScripts(fn, xopt) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var scripts = $$('script[type="riot/tag"]'),
        scriptsAmount = scripts.length;_ProcessVariable_({scripts: scripts,scriptsAmount: scriptsAmount}, __O__);

    function done() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      promise.trigger('ready');
      ready = true;
      if (fn) {
        fn();
      }
    }

    function compileTag(src, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      var code = compiler.compile(src, opts, url);_ProcessVariable_({code: code}, __O__);

      globalEval(code, url);
      if (! --scriptsAmount) {
        done();
      }
    }

    if (!scriptsAmount) {
      done();
    } else {
      for (var i = 0; i < scripts.length; ++i) {
        var script = scripts[i],
            opts = extend({ template: getAttribute(script, 'template') }, xopt),
            url = getAttribute(script, 'src') || getAttribute(script, 'data-src');_ProcessVariable_({script: script,opts: opts,url: url}, __O__);

        url ? GET(url, compileTag, opts) : compileTag(script.innerHTML, opts);
      }
    }
  }

  var parsers$1 = compiler.parsers;_ProcessVariable_({parsers$1: parsers$1}, __O__);

  
  function compile$1(arg, fn, opts) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);

    if (typeof arg === T_STRING) {
      if (isObject(fn)) {
        opts = fn;
        fn = false;
      }
      if (/^\s*</m.test(arg)) {
        var js = compiler.compile(arg, opts);_ProcessVariable_({js: js}, __O__);
        if (fn !== true) {
          globalEval(js);
        }
        if (isFunction(fn)) {
          fn(js, arg, opts);
        }
        return _ProcessReturn_(js, __O__);
      }
      GET(arg, function _anonymous_88(str, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        var js = compiler.compile(str, opts, url);_ProcessVariable_({js: js}, __O__);
        globalEval(js, url);
        if (fn) {
          fn(js, str, opts);
        }
      }, opts);
    } else if (isArray(arg)) {
      var i = arg.length;_ProcessVariable_({i: i}, __O__);
      arg.forEach(function _anonymous_89(str) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
        GET(str, function _anonymous_90(str, opts, url) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
          var js = compiler.compile(str, opts, url);_ProcessVariable_({js: js}, __O__);
          globalEval(js, url);
          i--;
          if (!i && fn) {
            fn(js, str, opts);
          }
        }, opts);
      });
    } else {
      if (isFunction(arg)) {
        opts = fn;
        fn = arg;
      } else {
        opts = arg;
        fn = undefined;
      }

      if (ready) {
        return _ProcessReturn_(fn && fn(), __O__);
      }

      if (promise) {
        if (fn) {
          promise.on('ready', fn);
        }
      } else {
        promise = observable();
        compileScripts(fn, opts);
      }
    }
  }
  compile$1.error = function _anonymous_91(e) { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    throw new Error(e);
  };

  function mount$3() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
    var args = [],
        len = arguments.length;_ProcessVariable_({args: args,len: len}, __O__);
    while (len--) args[len] = arguments[len];

    var ret;_ProcessVariable_({ret: ret}, __O__);
    compile$1(function _anonymous_92() { ;var __O__ = (this.SAVE ? this : window).SAVE(arguments);
      ret = mount$2.apply(riot$2, args);
    });
    return _ProcessReturn_(ret, __O__);
  }

  var riot_compiler = extend({}, riot$2, {
    mount: mount$3,
    compile: compile$1,
    parsers: parsers$1
  });_ProcessVariable_({riot_compiler: riot_compiler}, __O__);

  return _ProcessReturn_(riot_compiler, __O__);
});