/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vue/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@3.1.0@css-loader/dist/cjs.js!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/vue/style/index.less":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.1.0@css-loader/dist/cjs.js!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/vue/style/index.less ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@3.1.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.1.0@css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".layout {\n  font-size: 32px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/_css-loader@3.1.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.1.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/_error-stack-parser@2.0.2@error-stack-parser/error-stack-parser.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_error-stack-parser@2.0.2@error-stack-parser/error-stack-parser.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./node_modules/_stackframe@1.0.4@stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ErrorStackParser(StackFrame) {
  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);
      return filtered.map(function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }

        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame({
          functionName: functionName,
          fileName: fileName,
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);
      return filtered.map(function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame({
            functionName: line
          });
        } else {
          var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var matches = line.match(functionNameRegex);
          var functionName = matches && matches[1] ? matches[1] : undefined;
          var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
          return new StackFrame({
            functionName: functionName,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            functionName: match[3] || undefined,
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);
      return filtered.map(function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame({
          functionName: functionName,
          args: args,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    }
  };
});

/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/_process@0.11.10@process/browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/_setimmediate@1.0.5@setimmediate/setImmediate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_setimmediate@1.0.5@setimmediate/setImmediate.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.35.3@webpack/buildin/global.js */ "./node_modules/_webpack@4.35.3@webpack/buildin/global.js"), __webpack_require__(/*! ./../_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js")))

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/array-set.js":
/*!********************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/array-set.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/_source-map@0.5.6@source-map/lib/util.js");

var has = Object.prototype.hasOwnProperty;
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */

function ArraySet() {
  this._array = [];
  this._set = Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */


ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();

  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }

  return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */


ArraySet.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */


ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;

  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }

  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */


ArraySet.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */


ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);

  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }

  throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */


ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }

  throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */


ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/base64-vlq.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/base64-vlq.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/_source-map@0.5.6@source-map/lib/base64.js"); // A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011


var VLQ_BASE_SHIFT = 5; // binary: 100000

var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */

function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */


function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */


exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;

    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }

    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */


exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));

    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/base64.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/base64.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */

exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }

  throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */


exports.decode = function (charCode) {
  var bigA = 65; // 'A'

  var bigZ = 90; // 'Z'

  var littleA = 97; // 'a'

  var littleZ = 122; // 'z'

  var zero = 48; // '0'

  var nine = 57; // '9'

  var plus = 43; // '+'

  var slash = 47; // '/'

  var littleOffset = 26;
  var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  } // 26 - 51: abcdefghijklmnopqrstuvwxyz


  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  } // 52 - 61: 0123456789


  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  } // 62: +


  if (charCode == plus) {
    return 62;
  } // 63: /


  if (charCode == slash) {
    return 63;
  } // Invalid base64 digit.


  return -1;
};

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/binary-search.js":
/*!************************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/binary-search.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */

function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);

  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  } else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    } // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  } else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    } // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */


exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);

  if (index < 0) {
    return -1;
  } // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.


  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }

    --index;
  }

  return index;
};

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/mapping-list.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/mapping-list.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/_source-map@0.5.6@source-map/lib/util.js");
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */


function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */


function MappingList() {
  this._array = [];
  this._sorted = true; // Serves as infimum

  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */


MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */


MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;

    this._array.push(aMapping);
  } else {
    this._sorted = false;

    this._array.push(aMapping);
  }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */


MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);

    this._sorted = true;
  }

  return this._array;
};

exports.MappingList = MappingList;

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/quick-sort.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/quick-sort.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */


function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */


function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.
  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.
    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1; // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */


exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/source-map-consumer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/source-map-consumer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/_source-map@0.5.6@source-map/lib/util.js");

var binarySearch = __webpack_require__(/*! ./binary-search */ "./node_modules/_source-map@0.5.6@source-map/lib/binary-search.js");

var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/_source-map@0.5.6@source-map/lib/array-set.js").ArraySet;

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/_source-map@0.5.6@source-map/lib/base64-vlq.js");

var quickSort = __webpack_require__(/*! ./quick-sort */ "./node_modules/_source-map@0.5.6@source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function (aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
};
/**
 * The version of the source mapping spec that we are consuming.
 */


SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */

SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;

  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;

    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;

    default:
      throw new Error("Unknown order of iteration.");
  }

  var sourceRoot = this.sourceRoot;
  mappings.map(function (mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);

    if (source != null && sourceRoot != null) {
      source = util.join(sourceRoot, source);
    }

    return {
      source: source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, 'line'); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
  // returns the index of the closest mapping less than the needle. By
  // setting needle.originalColumn to 0, we thus find the last mapping for
  // the given line, provided such a mapping exists.

  var needle = {
    source: util.getArg(aArgs, 'source'),
    originalLine: line,
    originalColumn: util.getArg(aArgs, 'column', 0)
  };

  if (this.sourceRoot != null) {
    needle.source = util.relative(this.sourceRoot, needle.source);
  }

  if (!this._sources.has(needle.source)) {
    return [];
  }

  needle.source = this._sources.indexOf(needle.source);
  var mappings = [];

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (aArgs.column === undefined) {
      var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we found. Since
      // mappings are sorted, this is guaranteed to find all mappings for
      // the line we found.

      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we were searching for.
      // Since mappings are sorted, this is guaranteed to find all mappings for
      // the line we are searching for.

      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }

  return mappings;
};

exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */

function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources'); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.

  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null); // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources.map(String) // Some source maps produce relative source paths like "./foo.js" instead of
  // "foo.js".  Normalize these first so that future comparisons will succeed.
  // See bugzil.la/1090768.
  .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
  // the source root, if the source root is absolute. Not doing this would
  // be particularly problematic when the source root is a prefix of the
  // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
  .map(function (source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  }); // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.

  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */

BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file; // Because we are modifying the entries (by converting string sources and
  // names to indices into the sources and names ArraySets), we have to make
  // a copy of the entry or else bad things happen. Shared mutable state
  // strikes again! See github issue #191.

  var generatedMappings = aSourceMap._mappings.toArray().slice();

  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];

  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;

    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;

      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }

      destOriginalMappings.push(destMapping);
    }

    destGeneratedMappings.push(destMapping);
  }

  quickSort(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */


BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */

function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;

  while (index < length) {
    if (aStr.charAt(index) === ';') {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ',') {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
      // many segments often have the same encoding. We can exploit this
      // fact by caching the parsed variable length fields of each segment,
      // allowing us to avoid a second parse if we encounter the same
      // segment again.

      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }

      str = aStr.slice(index, end);
      segment = cachedSegments[str];

      if (segment) {
        index += str.length;
      } else {
        segment = [];

        while (index < end) {
          base64VLQ.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }

        if (segment.length === 2) {
          throw new Error('Found a source, but no line and column');
        }

        if (segment.length === 3) {
          throw new Error('Found a source and line, but no column');
        }

        cachedSegments[str] = segment;
      } // Generated column.


      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;

      if (segment.length > 1) {
        // Original source.
        mapping.source = previousSource + segment[1];
        previousSource += segment[1]; // Original line.

        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

        mapping.originalLine += 1; // Original column.

        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;

        if (segment.length > 4) {
          // Original name.
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }

      generatedMappings.push(mapping);

      if (typeof mapping.originalLine === 'number') {
        originalMappings.push(mapping);
      }
    }
  }

  quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */


BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  // To return the position we are searching for, we must first find the
  // mapping for the given position and then return the opposite position it
  // points to. Because the mappings are sorted, we can use binary search to
  // find the best mapping.
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
  }

  if (aNeedle[aColumnName] < 0) {
    throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
  }

  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */


BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
    // can come up with an optimistic estimate, however, by assuming that
    // mappings are contiguous (i.e. given two consecutive mappings, the
    // first mapping ends where the second one starts).

    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];

      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    } // The last mapping for each line spans the entire line.


    mapping.lastGeneratedColumn = Infinity;
  }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */


BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._generatedMappings[index];

    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, 'source', null);

      if (source !== null) {
        source = this._sources.at(source);

        if (this.sourceRoot != null) {
          source = util.join(this.sourceRoot, source);
        }
      }

      var name = util.getArg(mapping, 'name', null);

      if (name !== null) {
        name = this._names.at(name);
      }

      return {
        source: source,
        line: util.getArg(mapping, 'originalLine', null),
        column: util.getArg(mapping, 'originalColumn', null),
        name: name
      };
    }
  }

  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }

  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
    return sc == null;
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }

  if (this.sourceRoot != null) {
    aSource = util.relative(this.sourceRoot, aSource);
  }

  if (this._sources.has(aSource)) {
    return this.sourcesContent[this._sources.indexOf(aSource)];
  }

  var url;

  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    // XXX: file:// URIs and absolute paths lead to unexpected behavior for
    // many users. We can help them out when they expect file:// URIs to
    // behave like it would if they were running a local HTTP server. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
    var fileUriAbsPath = aSource.replace(/^file:\/\//, "");

    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }

    if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + aSource)];
    }
  } // This function is used recursively from
  // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
  // don't want to throw if we can't find the source - we just want to
  // return null, so we provide a flag to exit gracefully.


  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, 'source');

  if (this.sourceRoot != null) {
    source = util.relative(this.sourceRoot, source);
  }

  if (!this._sources.has(source)) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }

  source = this._sources.indexOf(source);
  var needle = {
    source: source,
    originalLine: util.getArg(aArgs, 'line'),
    originalColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, 'generatedLine', null),
        column: util.getArg(mapping, 'generatedColumn', null),
        lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
      };
    }
  }

  return {
    line: null,
    column: null,
    lastColumn: null
  };
};

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */

function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }

    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }

    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    };
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */

IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];

    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }

    return sources;
  }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */

IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  }; // Find the section containing the generated position we're trying to map
  // to an original position.

  var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
    var cmp = needle.generatedLine - section.generatedOffset.generatedLine;

    if (cmp) {
      return cmp;
    }

    return needle.generatedColumn - section.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];

  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }

  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function (s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);

    if (content) {
      return content;
    }
  }

  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i]; // Only consider this section if the requested source is in the list of
    // sources of the consumer.

    if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
      continue;
    }

    var generatedPosition = section.consumer.generatedPositionFor(aArgs);

    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }

  return {
    line: null,
    column: null
  };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];

  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;

    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];

      var source = section.consumer._sources.at(mapping.source);

      if (section.consumer.sourceRoot !== null) {
        source = util.join(section.consumer.sourceRoot, source);
      }

      this._sources.add(source);

      source = this._sources.indexOf(source);

      var name = section.consumer._names.at(mapping.name);

      this._names.add(name);

      name = this._names.indexOf(name); // The mappings coming from the consumer for the section have
      // generated positions relative to the start of the section, so we
      // need to offset them to be relative to the start of the concatenated
      // generated file.

      var adjustedMapping = {
        source: source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: name
      };

      this.__generatedMappings.push(adjustedMapping);

      if (typeof adjustedMapping.originalLine === 'number') {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }

  quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util.compareByOriginalPositions);
};

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/source-map-generator.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/source-map-generator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/_source-map@0.5.6@source-map/lib/base64-vlq.js");

var util = __webpack_require__(/*! ./util */ "./node_modules/_source-map@0.5.6@source-map/lib/util.js");

var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/_source-map@0.5.6@source-map/lib/array-set.js").ArraySet;

var MappingList = __webpack_require__(/*! ./mapping-list */ "./node_modules/_source-map@0.5.6@source-map/lib/mapping-list.js").MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */


function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }

  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */

SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator({
    file: aSourceMapConsumer.file,
    sourceRoot: sourceRoot
  });
  aSourceMapConsumer.eachMapping(function (mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };

    if (mapping.source != null) {
      newMapping.source = mapping.source;

      if (sourceRoot != null) {
        newMapping.source = util.relative(sourceRoot, newMapping.source);
      }

      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };

      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }

    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */


SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util.getArg(aArgs, 'generated');
  var original = util.getArg(aArgs, 'original', null);
  var source = util.getArg(aArgs, 'source', null);
  var name = util.getArg(aArgs, 'name', null);

  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }

  if (source != null) {
    source = String(source);

    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }

  if (name != null) {
    name = String(name);

    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }

  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source: source,
    name: name
  });
};
/**
 * Set the source content for a source file.
 */


SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;

  if (this._sourceRoot != null) {
    source = util.relative(this._sourceRoot, source);
  }

  if (aSourceContent != null) {
    // Add the source content to the _sourcesContents map.
    // Create a new _sourcesContents map if the property is null.
    if (!this._sourcesContents) {
      this._sourcesContents = Object.create(null);
    }

    this._sourcesContents[util.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    // Remove the source file from the _sourcesContents map.
    // If the _sourcesContents map is empty, set the property to null.
    delete this._sourcesContents[util.toSetString(source)];

    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */


SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile; // If aSourceFile is omitted, we will use the file property of the SourceMap

  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
    }

    sourceFile = aSourceMapConsumer.file;
  }

  var sourceRoot = this._sourceRoot; // Make "sourceFile" relative if an absolute Url is passed.

  if (sourceRoot != null) {
    sourceFile = util.relative(sourceRoot, sourceFile);
  } // Applying the SourceMap can add and remove items from the sources and
  // the names array.


  var newSources = new ArraySet();
  var newNames = new ArraySet(); // Find mappings for the "sourceFile"

  this._mappings.unsortedForEach(function (mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      // Check if it can be mapped by the source map, then update the mapping.
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });

      if (original.source != null) {
        // Copy mapping
        mapping.source = original.source;

        if (aSourceMapPath != null) {
          mapping.source = util.join(aSourceMapPath, mapping.source);
        }

        if (sourceRoot != null) {
          mapping.source = util.relative(sourceRoot, mapping.source);
        }

        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;

        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }

    var source = mapping.source;

    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }

    var name = mapping.name;

    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);

  this._sources = newSources;
  this._names = newNames; // Copy sourcesContents of applied map.

  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile = util.join(aSourceMapPath, sourceFile);
      }

      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }

      this.setSourceContent(sourceFile, content);
    }
  }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */


SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    // Case 1.
    return;
  } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    // Cases 2 and 3.
    return;
  } else {
    throw new Error('Invalid mapping: ' + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */


SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = '';
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;

  var mappings = this._mappings.toArray();

  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = '';

    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;

      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ';';
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }

        next += ',';
      }
    }

    next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;

    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ.encode(sourceIdx - previousSource);
      previousSource = sourceIdx; // lines are stored 0-based in SourceMap spec version 3

      next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;

      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }

    result += next;
  }

  return result;
};

SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function (source) {
    if (!this._sourcesContents) {
      return null;
    }

    if (aSourceRoot != null) {
      source = util.relative(aSourceRoot, source);
    }

    var key = util.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
/**
 * Externalize the source map.
 */


SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };

  if (this._file != null) {
    map.file = this._file;
  }

  if (this._sourceRoot != null) {
    map.sourceRoot = this._sourceRoot;
  }

  if (this._sourcesContents) {
    map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
  }

  return map;
};
/**
 * Render the source map being generated to a string.
 */


SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};

exports.SourceMapGenerator = SourceMapGenerator;

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/source-node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/source-node.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "./node_modules/_source-map@0.5.6@source-map/lib/source-map-generator.js").SourceMapGenerator;

var util = __webpack_require__(/*! ./util */ "./node_modules/_source-map@0.5.6@source-map/lib/util.js"); // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).


var REGEX_NEWLINE = /(\r?\n)/; // Newline character code for charCodeAt() comparisons

var NEWLINE_CODE = 10; // Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!

var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */

function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */


SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  // The SourceNode we want to fill with the generated code
  // and the SourceMap
  var node = new SourceNode(); // All even indices of this array are one line of the generated code,
  // while all odd indices are the newlines between two adjacent lines
  // (since `REGEX_NEWLINE` captures its match).
  // Processed fragments are removed from this array, by calling `shiftNextLine`.

  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);

  var shiftNextLine = function () {
    var lineContents = remainingLines.shift(); // The last line of a file might not have a newline.

    var newLine = remainingLines.shift() || "";
    return lineContents + newLine;
  }; // We need to remember the position of "remainingLines"


  var lastGeneratedLine = 1,
      lastGeneratedColumn = 0; // The generate SourceNodes we need a code range.
  // To extract it current and last mapping is used.
  // Here we store the last mapping.

  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function (mapping) {
    if (lastMapping !== null) {
      // We add the code from "lastMapping" to "mapping":
      // First check if there is a new line in between.
      if (lastGeneratedLine < mapping.generatedLine) {
        // Associate first line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0; // The remaining code is added without mapping
      } else {
        // There is no new line in between.
        // Associate the code between "lastGeneratedColumn" and
        // "mapping.generatedColumn" with "lastMapping"
        var nextLine = remainingLines[0];
        var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[0] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code); // No more remaining code, continue

        lastMapping = mapping;
        return;
      }
    } // We add the generated code until the first mapping
    // to the SourceNode without any mapping.
    // Each line is added as separate string.


    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }

    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[0];
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[0] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }

    lastMapping = mapping;
  }, this); // We have processed all mappings.

  if (remainingLines.length > 0) {
    if (lastMapping) {
      // Associate the remaining code in the current line with "lastMapping"
      addMappingWithCode(lastMapping, shiftNextLine());
    } // and add the remaining lines without any mapping


    node.add(remainingLines.join(""));
  } // Copy sourcesContent into SourceNode


  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util.join(aRelativePath, sourceFile);
      }

      node.setSourceContent(sourceFile, content);
    }
  });
  return node;

  function addMappingWithCode(mapping, code) {
    if (mapping === null || mapping.source === undefined) {
      node.add(code);
    } else {
      var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
    }
  }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;

  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];

    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== '') {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */


SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;

  if (len > 0) {
    newChildren = [];

    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }

    newChildren.push(this.children[i]);
    this.children = newChildren;
  }

  return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */


SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];

  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push(''.replace(aPattern, aReplacement));
  }

  return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */


SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }

  var sources = Object.keys(this.sourceContents);

  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */


SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */


SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;

    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }

      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }

    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0; // Mappings end at eol

        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });
  return {
    code: generated.code,
    map: map
  };
};

exports.SourceNode = SourceNode;

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/lib/util.js":
/*!***************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/lib/util.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}

exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);

  if (!match) {
    return null;
  }

  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}

exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';

  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }

  url += '//';

  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }

  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }

  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }

  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }

  return url;
}

exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */

function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);

  if (url) {
    if (!url.path) {
      return aPath;
    }

    path = url.path;
  }

  var isAbsolute = exports.isAbsolute(path);
  var parts = path.split(/\/+/);

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];

    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }

  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }

  return path;
}

exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */

function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  if (aPath === "") {
    aPath = ".";
  }

  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);

  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  } // `join(foo, '//www.example.org')`


  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }

    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  } // `join('http://', 'www.example.com')`


  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }

  return joined;
}

exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */


function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.

  var level = 0;

  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");

    if (index < 0) {
      return aPath;
    } // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.


    aRoot = aRoot.slice(0, index);

    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  } // Make sure we add a "../" for each component we removed from the root.


  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}

exports.relative = relative;

var supportsNullProto = function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}();

function identity(s) {
  return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */


function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}

exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}

exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9
  /* "__proto__".length */
  ) {
      return false;
    }

  if (s.charCodeAt(length - 1) !== 95
  /* '_' */
  || s.charCodeAt(length - 2) !== 95
  /* '_' */
  || s.charCodeAt(length - 3) !== 111
  /* 'o' */
  || s.charCodeAt(length - 4) !== 116
  /* 't' */
  || s.charCodeAt(length - 5) !== 111
  /* 'o' */
  || s.charCodeAt(length - 6) !== 114
  /* 'r' */
  || s.charCodeAt(length - 7) !== 112
  /* 'p' */
  || s.charCodeAt(length - 8) !== 95
  /* '_' */
  || s.charCodeAt(length - 9) !== 95
  /* '_' */
  ) {
      return false;
    }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36
    /* '$' */
    ) {
        return false;
      }
  }

  return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */


function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}

exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */

function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}

exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */


function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/***/ }),

/***/ "./node_modules/_source-map@0.5.6@source-map/source-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_source-map@0.5.6@source-map/source-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "./node_modules/_source-map@0.5.6@source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "./node_modules/_source-map@0.5.6@source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "./node_modules/_source-map@0.5.6@source-map/lib/source-node.js").SourceNode;

/***/ }),

/***/ "./node_modules/_stack-generator@2.0.3@stack-generator/stack-generator.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_stack-generator@2.0.3@stack-generator/stack-generator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./node_modules/_stackframe@1.0.4@stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (StackFrame) {
  return {
    backtrace: function StackGenerator$$backtrace(opts) {
      var stack = [];
      var maxStackSize = 10;

      if (typeof opts === 'object' && typeof opts.maxStackSize === 'number') {
        maxStackSize = opts.maxStackSize;
      }

      var curr = arguments.callee;

      while (curr && stack.length < maxStackSize && curr['arguments']) {
        // Allow V8 optimizations
        var args = new Array(curr['arguments'].length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = curr['arguments'][i];
        }

        if (/function(?:\s+([\w$]+))+\s*\(/.test(curr.toString())) {
          stack.push(new StackFrame({
            functionName: RegExp.$1 || undefined,
            args: args
          }));
        } else {
          stack.push(new StackFrame({
            args: args
          }));
        }

        try {
          curr = curr.caller;
        } catch (e) {
          break;
        }
      }

      return stack;
    }
  };
});

/***/ }),

/***/ "./node_modules/_stackframe@1.0.4@stackframe/stackframe.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_stackframe@1.0.4@stackframe/stackframe.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  function _getter(p) {
    return function () {
      return this[p];
    };
  }

  var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
  var numericProps = ['columnNumber', 'lineNumber'];
  var stringProps = ['fileName', 'functionName', 'source'];
  var arrayProps = ['args'];
  var props = booleanProps.concat(numericProps, stringProps, arrayProps);

  function StackFrame(obj) {
    if (obj instanceof Object) {
      for (var i = 0; i < props.length; i++) {
        if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
          this['set' + _capitalize(props[i])](obj[props[i]]);
        }
      }
    }
  }

  StackFrame.prototype = {
    getArgs: function () {
      return this.args;
    },
    setArgs: function (v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    getEvalOrigin: function () {
      return this.evalOrigin;
    },
    setEvalOrigin: function (v) {
      if (v instanceof StackFrame) {
        this.evalOrigin = v;
      } else if (v instanceof Object) {
        this.evalOrigin = new StackFrame(v);
      } else {
        throw new TypeError('Eval Origin must be an Object or StackFrame');
      }
    },
    toString: function () {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };

  for (var i = 0; i < booleanProps.length; i++) {
    StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

    StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
      return function (v) {
        this[p] = Boolean(v);
      };
    }(booleanProps[i]);
  }

  for (var j = 0; j < numericProps.length; j++) {
    StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

    StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
      return function (v) {
        if (!_isNumber(v)) {
          throw new TypeError(p + ' must be a Number');
        }

        this[p] = Number(v);
      };
    }(numericProps[j]);
  }

  for (var k = 0; k < stringProps.length; k++) {
    StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

    StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
      return function (v) {
        this[p] = String(v);
      };
    }(stringProps[k]);
  }

  return StackFrame;
});

/***/ }),

/***/ "./node_modules/_stacktrace-gps@3.0.2@stacktrace-gps/stacktrace-gps.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_stacktrace-gps@3.0.2@stacktrace-gps/stacktrace-gps.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! source-map */ "./node_modules/_source-map@0.5.6@source-map/source-map.js"), __webpack_require__(/*! stackframe */ "./node_modules/_stackframe@1.0.4@stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (SourceMap, StackFrame) {
  /**
   * Make a X-Domain request to url and callback.
   *
   * @param {String} url
   * @returns {Promise} with response text if fulfilled
   */
  function _xdr(url) {
    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('get', url);
      req.onerror = reject;

      req.onreadystatechange = function onreadystatechange() {
        if (req.readyState === 4) {
          if (req.status >= 200 && req.status < 300 || url.substr(0, 7) === 'file://' && req.responseText) {
            resolve(req.responseText);
          } else {
            reject(new Error('HTTP status: ' + req.status + ' retrieving ' + url));
          }
        }
      };

      req.send();
    });
  }
  /**
   * Convert a Base64-encoded string into its original representation.
   * Used for inline sourcemaps.
   *
   * @param {String} b64str Base-64 encoded string
   * @returns {String} original representation of the base64-encoded string.
   */


  function _atob(b64str) {
    if (typeof window !== 'undefined' && window.atob) {
      return window.atob(b64str);
    } else {
      throw new Error('You must supply a polyfill for window.atob in this environment');
    }
  }

  function _parseJson(string) {
    if (typeof JSON !== 'undefined' && JSON.parse) {
      return JSON.parse(string);
    } else {
      throw new Error('You must supply a polyfill for JSON.parse in this environment');
    }
  }

  function _findFunctionName(source, lineNumber
  /*, columnNumber*/
  ) {
    var syntaxes = [// {name} = function ({args}) TODO args capture
    /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, // function {name}({args}) m[1]=name m[2]=args
    /function\s+([^('"`]*?)\s*\(([^)]*)\)/, // {name} = eval()
    /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/, // fn_name() {
    /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/, // {name} = () => {
    /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/];
    var lines = source.split('\n'); // Walk backwards in the source lines until we find the line which matches one of the patterns above

    var code = '';
    var maxLines = Math.min(lineNumber, 20);

    for (var i = 0; i < maxLines; ++i) {
      // lineNo is 1-based, source[] is 0-based
      var line = lines[lineNumber - i - 1];
      var commentPos = line.indexOf('//');

      if (commentPos >= 0) {
        line = line.substr(0, commentPos);
      }

      if (line) {
        code = line + code;
        var len = syntaxes.length;

        for (var index = 0; index < len; index++) {
          var m = syntaxes[index].exec(code);

          if (m && m[1]) {
            return m[1];
          }
        }
      }
    }

    return undefined;
  }

  function _ensureSupportedEnvironment() {
    if (typeof Object.defineProperty !== 'function' || typeof Object.create !== 'function') {
      throw new Error('Unable to consume source maps in older browsers');
    }
  }

  function _ensureStackFrameIsLegit(stackframe) {
    if (typeof stackframe !== 'object') {
      throw new TypeError('Given StackFrame is not an object');
    } else if (typeof stackframe.fileName !== 'string') {
      throw new TypeError('Given file name is not a String');
    } else if (typeof stackframe.lineNumber !== 'number' || stackframe.lineNumber % 1 !== 0 || stackframe.lineNumber < 1) {
      throw new TypeError('Given line number must be a positive integer');
    } else if (typeof stackframe.columnNumber !== 'number' || stackframe.columnNumber % 1 !== 0 || stackframe.columnNumber < 0) {
      throw new TypeError('Given column number must be a non-negative integer');
    }

    return true;
  }

  function _findSourceMappingURL(source) {
    var sourceMappingUrlRegExp = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/mg;
    var lastSourceMappingUrl;
    var matchSourceMappingUrl;

    while (matchSourceMappingUrl = sourceMappingUrlRegExp.exec(source)) {
      // jshint ignore:line
      lastSourceMappingUrl = matchSourceMappingUrl[1];
    }

    if (lastSourceMappingUrl) {
      return lastSourceMappingUrl;
    } else {
      throw new Error('sourceMappingURL not found');
    }
  }

  function _extractLocationInfoFromSourceMapSource(stackframe, sourceMapConsumer, sourceCache) {
    return new Promise(function (resolve, reject) {
      var loc = sourceMapConsumer.originalPositionFor({
        line: stackframe.lineNumber,
        column: stackframe.columnNumber
      });

      if (loc.source) {
        // cache mapped sources
        var mappedSource = sourceMapConsumer.sourceContentFor(loc.source);

        if (mappedSource) {
          sourceCache[loc.source] = mappedSource;
        }

        resolve( // given stackframe and source location, update stackframe
        new StackFrame({
          functionName: loc.name || stackframe.functionName,
          args: stackframe.args,
          fileName: loc.source,
          lineNumber: loc.line,
          columnNumber: loc.column
        }));
      } else {
        reject(new Error('Could not get original source for given stackframe and source map'));
      }
    });
  }
  /**
   * @constructor
   * @param {Object} opts
   *      opts.sourceCache = {url: "Source String"} => preload source cache
   *      opts.sourceMapConsumerCache = {/path/file.js.map: SourceMapConsumer}
   *      opts.offline = True to prevent network requests.
   *              Best effort without sources or source maps.
   *      opts.ajax = Promise returning function to make X-Domain requests
   */


  return function StackTraceGPS(opts) {
    if (!(this instanceof StackTraceGPS)) {
      return new StackTraceGPS(opts);
    }

    opts = opts || {};
    this.sourceCache = opts.sourceCache || {};
    this.sourceMapConsumerCache = opts.sourceMapConsumerCache || {};
    this.ajax = opts.ajax || _xdr;
    this._atob = opts.atob || _atob;

    this._get = function _get(location) {
      return new Promise(function (resolve, reject) {
        var isDataUrl = location.substr(0, 5) === 'data:';

        if (this.sourceCache[location]) {
          resolve(this.sourceCache[location]);
        } else if (opts.offline && !isDataUrl) {
          reject(new Error('Cannot make network requests in offline mode'));
        } else {
          if (isDataUrl) {
            // data URLs can have parameters.
            // see http://tools.ietf.org/html/rfc2397
            var supportedEncodingRegexp = /^data:application\/json;([\w=:"-]+;)*base64,/;
            var match = location.match(supportedEncodingRegexp);

            if (match) {
              var sourceMapStart = match[0].length;
              var encodedSource = location.substr(sourceMapStart);

              var source = this._atob(encodedSource);

              this.sourceCache[location] = source;
              resolve(source);
            } else {
              reject(new Error('The encoding of the inline sourcemap is not supported'));
            }
          } else {
            var xhrPromise = this.ajax(location, {
              method: 'get'
            }); // Cache the Promise to prevent duplicate in-flight requests

            this.sourceCache[location] = xhrPromise;
            xhrPromise.then(resolve, reject);
          }
        }
      }.bind(this));
    };
    /**
     * Creating SourceMapConsumers is expensive, so this wraps the creation of a
     * SourceMapConsumer in a per-instance cache.
     *
     * @param {String} sourceMappingURL = URL to fetch source map from
     * @param {String} defaultSourceRoot = Default source root for source map if undefined
     * @returns {Promise} that resolves a SourceMapConsumer
     */


    this._getSourceMapConsumer = function _getSourceMapConsumer(sourceMappingURL, defaultSourceRoot) {
      return new Promise(function (resolve, reject) {
        if (this.sourceMapConsumerCache[sourceMappingURL]) {
          resolve(this.sourceMapConsumerCache[sourceMappingURL]);
        } else {
          var sourceMapConsumerPromise = new Promise(function (resolve, reject) {
            return this._get(sourceMappingURL).then(function (sourceMapSource) {
              if (typeof sourceMapSource === 'string') {
                sourceMapSource = _parseJson(sourceMapSource.replace(/^\)\]\}'/, ''));
              }

              if (typeof sourceMapSource.sourceRoot === 'undefined') {
                sourceMapSource.sourceRoot = defaultSourceRoot;
              }

              resolve(new SourceMap.SourceMapConsumer(sourceMapSource));
            }, reject);
          }.bind(this));
          this.sourceMapConsumerCache[sourceMappingURL] = sourceMapConsumerPromise;
          resolve(sourceMapConsumerPromise);
        }
      }.bind(this));
    };
    /**
     * Given a StackFrame, enhance function name and use source maps for a
     * better StackFrame.
     *
     * @param {StackFrame} stackframe object
     * @returns {Promise} that resolves with with source-mapped StackFrame
     */


    this.pinpoint = function StackTraceGPS$$pinpoint(stackframe) {
      return new Promise(function (resolve, reject) {
        this.getMappedLocation(stackframe).then(function (mappedStackFrame) {
          function resolveMappedStackFrame() {
            resolve(mappedStackFrame);
          }

          this.findFunctionName(mappedStackFrame).then(resolve, resolveMappedStackFrame)['catch'](resolveMappedStackFrame);
        }.bind(this), reject);
      }.bind(this));
    };
    /**
     * Given a StackFrame, guess function name from location information.
     *
     * @param {StackFrame} stackframe
     * @returns {Promise} that resolves with enhanced StackFrame.
     */


    this.findFunctionName = function StackTraceGPS$$findFunctionName(stackframe) {
      return new Promise(function (resolve, reject) {
        _ensureStackFrameIsLegit(stackframe);

        this._get(stackframe.fileName).then(function getSourceCallback(source) {
          var lineNumber = stackframe.lineNumber;
          var columnNumber = stackframe.columnNumber;

          var guessedFunctionName = _findFunctionName(source, lineNumber, columnNumber); // Only replace functionName if we found something


          if (guessedFunctionName) {
            resolve(new StackFrame({
              functionName: guessedFunctionName,
              args: stackframe.args,
              fileName: stackframe.fileName,
              lineNumber: lineNumber,
              columnNumber: columnNumber
            }));
          } else {
            resolve(stackframe);
          }
        }, reject)['catch'](reject);
      }.bind(this));
    };
    /**
     * Given a StackFrame, seek source-mapped location and return new enhanced StackFrame.
     *
     * @param {StackFrame} stackframe
     * @returns {Promise} that resolves with enhanced StackFrame.
     */


    this.getMappedLocation = function StackTraceGPS$$getMappedLocation(stackframe) {
      return new Promise(function (resolve, reject) {
        _ensureSupportedEnvironment();

        _ensureStackFrameIsLegit(stackframe);

        var sourceCache = this.sourceCache;
        var fileName = stackframe.fileName;

        this._get(fileName).then(function (source) {
          var sourceMappingURL = _findSourceMappingURL(source);

          var isDataUrl = sourceMappingURL.substr(0, 5) === 'data:';
          var defaultSourceRoot = fileName.substring(0, fileName.lastIndexOf('/') + 1);

          if (sourceMappingURL[0] !== '/' && !isDataUrl && !/^https?:\/\/|^\/\//i.test(sourceMappingURL)) {
            sourceMappingURL = defaultSourceRoot + sourceMappingURL;
          }

          return this._getSourceMapConsumer(sourceMappingURL, defaultSourceRoot).then(function (sourceMapConsumer) {
            return _extractLocationInfoFromSourceMapSource(stackframe, sourceMapConsumer, sourceCache).then(resolve)['catch'](function () {
              resolve(stackframe);
            });
          });
        }.bind(this), reject)['catch'](reject);
      }.bind(this));
    };
  };
});

/***/ }),

/***/ "./node_modules/_stacktrace-js@2.0.0@stacktrace-js/stacktrace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_stacktrace-js@2.0.0@stacktrace-js/stacktrace.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! error-stack-parser */ "./node_modules/_error-stack-parser@2.0.2@error-stack-parser/error-stack-parser.js"), __webpack_require__(/*! stack-generator */ "./node_modules/_stack-generator@2.0.3@stack-generator/stack-generator.js"), __webpack_require__(/*! stacktrace-gps */ "./node_modules/_stacktrace-gps@3.0.2@stacktrace-gps/stacktrace-gps.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function StackTrace(ErrorStackParser, StackGenerator, StackTraceGPS) {
  var _options = {
    filter: function (stackframe) {
      // Filter out stackframes for this library by default
      return (stackframe.functionName || '').indexOf('StackTrace$$') === -1 && (stackframe.functionName || '').indexOf('ErrorStackParser$$') === -1 && (stackframe.functionName || '').indexOf('StackTraceGPS$$') === -1 && (stackframe.functionName || '').indexOf('StackGenerator$$') === -1;
    },
    sourceCache: {}
  };

  var _generateError = function StackTrace$$GenerateError() {
    try {
      // Error must be thrown to get stack in IE
      throw new Error();
    } catch (err) {
      return err;
    }
  };
  /**
   * Merge 2 given Objects. If a conflict occurs the second object wins.
   * Does not do deep merges.
   *
   * @param {Object} first base object
   * @param {Object} second overrides
   * @returns {Object} merged first and second
   * @private
   */


  function _merge(first, second) {
    var target = {};
    [first, second].forEach(function (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          target[prop] = obj[prop];
        }
      }

      return target;
    });
    return target;
  }

  function _isShapedLikeParsableError(err) {
    return err.stack || err['opera#sourceloc'];
  }

  function _filtered(stackframes, filter) {
    if (typeof filter === 'function') {
      return stackframes.filter(filter);
    }

    return stackframes;
  }

  return {
    /**
     * Get a backtrace from invocation point.
     *
     * @param {Object} opts
     * @returns {Array} of StackFrame
     */
    get: function StackTrace$$get(opts) {
      var err = _generateError();

      return _isShapedLikeParsableError(err) ? this.fromError(err, opts) : this.generateArtificially(opts);
    },

    /**
     * Get a backtrace from invocation point.
     * IMPORTANT: Does not handle source maps or guess function names!
     *
     * @param {Object} opts
     * @returns {Array} of StackFrame
     */
    getSync: function StackTrace$$getSync(opts) {
      opts = _merge(_options, opts);

      var err = _generateError();

      var stack = _isShapedLikeParsableError(err) ? ErrorStackParser.parse(err) : StackGenerator.backtrace(opts);
      return _filtered(stack, opts.filter);
    },

    /**
     * Given an error object, parse it.
     *
     * @param {Error} error object
     * @param {Object} opts
     * @returns {Promise} for Array[StackFrame}
     */
    fromError: function StackTrace$$fromError(error, opts) {
      opts = _merge(_options, opts);
      var gps = new StackTraceGPS(opts);
      return new Promise(function (resolve) {
        var stackframes = _filtered(ErrorStackParser.parse(error), opts.filter);

        resolve(Promise.all(stackframes.map(function (sf) {
          return new Promise(function (resolve) {
            function resolveOriginal() {
              resolve(sf);
            }

            gps.pinpoint(sf).then(resolve, resolveOriginal)['catch'](resolveOriginal);
          });
        })));
      }.bind(this));
    },

    /**
     * Use StackGenerator to generate a backtrace.
     *
     * @param {Object} opts
     * @returns {Promise} of Array[StackFrame]
     */
    generateArtificially: function StackTrace$$generateArtificially(opts) {
      opts = _merge(_options, opts);
      var stackFrames = StackGenerator.backtrace(opts);

      if (typeof opts.filter === 'function') {
        stackFrames = stackFrames.filter(opts.filter);
      }

      return Promise.resolve(stackFrames);
    },

    /**
     * Given a function, wrap it such that invocations trigger a callback that
     * is called with a stack trace.
     *
     * @param {Function} fn to be instrumented
     * @param {Function} callback function to call with a stack trace on invocation
     * @param {Function} errback optional function to call with error if unable to get stack trace.
     * @param {Object} thisArg optional context object (e.g. window)
     */
    instrument: function StackTrace$$instrument(fn, callback, errback, thisArg) {
      if (typeof fn !== 'function') {
        throw new Error('Cannot instrument non-function object');
      } else if (typeof fn.__stacktraceOriginalFn === 'function') {
        // Already instrumented, return given Function
        return fn;
      }

      var instrumented = function StackTrace$$instrumented() {
        try {
          this.get().then(callback, errback)['catch'](errback);
          return fn.apply(thisArg || this, arguments);
        } catch (e) {
          if (_isShapedLikeParsableError(e)) {
            this.fromError(e).then(callback, errback)['catch'](errback);
          }

          throw e;
        }
      }.bind(this);

      instrumented.__stacktraceOriginalFn = fn;
      return instrumented;
    },

    /**
     * Given a function that has been instrumented,
     * revert the function to it's original (non-instrumented) state.
     *
     * @param {Function} fn to de-instrument
     */
    deinstrument: function StackTrace$$deinstrument(fn) {
      if (typeof fn !== 'function') {
        throw new Error('Cannot de-instrument non-function object');
      } else if (typeof fn.__stacktraceOriginalFn === 'function') {
        return fn.__stacktraceOriginalFn;
      } else {
        // Function not instrumented, return original
        return fn;
      }
    },

    /**
     * Given an error message and Array of StackFrames, serialize and POST to given URL.
     *
     * @param {Array} stackframes
     * @param {String} url
     * @param {String} errorMsg
     * @param {Object} requestOptions
     */
    report: function StackTrace$$report(stackframes, url, errorMsg, requestOptions) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.onerror = reject;

        req.onreadystatechange = function onreadystatechange() {
          if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
              resolve(req.responseText);
            } else {
              reject(new Error('POST to ' + url + ' failed with status: ' + req.status));
            }
          }
        };

        req.open('post', url); // Set request headers

        req.setRequestHeader('Content-Type', 'application/json');

        if (requestOptions && typeof requestOptions.headers === 'object') {
          var headers = requestOptions.headers;

          for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
              req.setRequestHeader(header, headers[header]);
            }
          }
        }

        var reportPayload = {
          stack: stackframes
        };

        if (errorMsg !== undefined && errorMsg !== null) {
          reportPayload.message = errorMsg;
        }

        req.send(JSON.stringify(reportPayload));
      });
    }
  };
});

/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/_timers-browserify@2.0.10@timers-browserify/main.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_timers-browserify@2.0.10@timers-browserify/main.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/_setimmediate@1.0.5@setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.35.3@webpack/buildin/global.js */ "./node_modules/_webpack@4.35.3@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_vue@2.6.10@vue/dist/vue.js":
/*!**************************************************!*\
  !*** ./node_modules/_vue@2.6.10@vue/dist/vue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {const stacktrace = __webpack_require__(/*! stacktrace-js */ "./node_modules/_stacktrace-js@2.0.0@stacktrace-js/stacktrace.js");

window.StackTrace = stacktrace;

(function (global, factory) {
   true ? factory(exports) : undefined;
})(this, function (exports) {
  var lastTime = null;

  function initNecooData() {
    if (typeof window.necooData === 'undefined') {
      window.necooData = [];
    } // if (typeof window.necooIndex === 'undefined') {
    //     window.necooIndex = 0;
    // }


    if (!window.necooData[window.necooIndex] && window.necooIndex >= 0) {
      window.necooData[window.necooIndex] = [];
    }

    return window.necooIndex >= 0;
  }
  /**
   * 通过StackTrace获取报错堆栈
   */


  function getStackTrace() {
    var stack = {};
    var error = new Error();
    stack.sourceStack = error.stack;
    var trace = window.StackTrace ? window.StackTrace.getSync() : [];
    stack.stackTrace = trace.slice(2);
    return stack;
  }

  function getCallerFromSourceStack(sourceStack, calleeName) {
    // 为什么不用stackTrace.stackTrace呢？好像stackTrace.stackTrace会丢信息
    var callerName = null;
    var calleeIndex = 0;
    var callerIndex = calleeIndex + 1;

    if (sourceStack) {
      var stackArr = []; // slice(3) 把Error 、getStackTrace、necooPush去掉

      stackArr = sourceStack.split('  at ').slice(3);

      for (var i = 0; i < stackArr.length; i++) {
        var stack = stackArr[i];

        if (stack.indexOf(calleeName) > -1) {
          calleeIndex = i;
          callerIndex = calleeIndex + 1;
          break;
        }
      }

      stackArr.forEach(function (stack, index) {
        if (stack.indexOf('calleeName') > -1) {
          calleeIndex = index;
        }
      });

      if (stackArr[1]) {
        try {
          callerName = stackArr[1].split('eval at ')[1].split(' ')[0];
        } catch (e) {}
      } // for (var i = 0; i < stackArr.length; i++) {
      //     var nowStack = stackArr[i];
      //
      //     // if (nowStack.indexOf('<anonymous>') > -1 && flag === false) {
      //     //     flag = true;
      //     // }
      //     // else if (nowStack.indexOf('<anonymous>') === -1 && flag === true) {
      //     //     o['type'] = stackArr[i-1].trim().split(' ')[0];
      //     //     o['parentName'] = stackArr[i].trim().split(' ')[0];
      //     //     break;
      //     // }
      // }

    }

    return callerName;
  }

  function getCallerFromTrace(trace) {
    // 数字根据层级来定
    if (trace && trace.length > 3) {
      var calleeTrace = trace[3];
    }
  }

  function getObjectCallerName(callerName) {
    if (callerName && /\./.test(callerName)) {
      callerName = callerName.split('.').reverse() && callerName.split('.').reverse()[0];

      if (/ /.test(callerName)) {
        callerName = callerName.split(' ')[0];
      }

      return callerName;
    }

    return callerName;
  }

  function necooPush(args) {
    var callStack = {};
    var splitTime = 0;

    if (!lastTime) {
      lastTime = +new Date();
    } else {
      var now = +new Date();
      splitTime = now - lastTime;
      lastTime = now;
    }

    callStack.pushReturn = returnVal => {
      callStack.returnVal = returnVal;
      return returnVal;
    };

    if (!initNecooData()) {
      return callStack;
    }

    if (window.necooIndex >= 0) {
      try {
        var stackTrace = getStackTrace();
        var calleeName = null;
        var callerName = null;
        var grandFather = null;
        calleeName = args.callee && args.callee.name;
        callerName = args.callee.caller && args.callee.caller.name;

        if (!calleeName) {
          calleeName = args.callee && args.callee.prototype.name;
        }

        var callerStack3 = stackTrace.stackTrace[1] && stackTrace.stackTrace[1].functionName;
        var callerStack4 = stackTrace.stackTrace[2] && stackTrace.stackTrace[2].functionName;
        var callerStack5 = stackTrace.stackTrace[3] && stackTrace.stackTrace[3].functionName;
        grandFather = callerStack4;

        if (!callerName) {
          callerName = args.callee.caller && args.callee.caller.prototype && args.callee.caller.prototype.name;

          if (!callerName) {
            var caller = getCallerFromSourceStack(stackTrace.sourceStack, calleeName) || callerStack3;

            if (caller) {
              callerName = caller;
            } // get callerName from stackTrace

          }
        }

        if (callerName === 'anonymous') {
          // get callerName from stackTrace
          var caller = getCallerFromSourceStack(stackTrace.sourceStack, calleeName) || callerStack3;

          if (caller) {
            callerName = caller;
          }
        }

        if (callerName === 'Object.<anonymous>') {
          callerName = callerStack4;
          grandFather = callerStack5;
        }

        callStack = {
          name: getObjectCallerName(calleeName),
          showName: 'function: ' + calleeName,
          caller: getObjectCallerName(callerName),
          body: args.callee.toString(),
          arguments: args,
          splitTime: splitTime,
          callerInfo: {
            grandFather: getObjectCallerName(grandFather),
            stackTrace: stackTrace,
            father: stackTrace && typeof stackTrace.stackTrace[1] !== 'undefined' ? stackTrace.stackTrace[1] : null,
            self: stackTrace && typeof stackTrace.stackTrace[0] !== 'undefined' ? stackTrace.stackTrace[0] : null
          }
        };

        callStack.pushReturn = returnVal => {
          callStack.returnVal = returnVal;
          return returnVal;
        };

        window.necooData[window.necooIndex].push(callStack);
      } catch (e) {
        console.log('sorry for error', e);
      }
    }

    return callStack;
  }

  exports.necooPush = necooPush;

  if (window) {
    window.necooPush = necooPush;
  }
});
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


(function _anonymous_1(global, factory) {
  var necooData = window.necooPush(arguments);
   true ? module.exports = factory() : undefined;
})(this, function _anonymous_2() {
  var necooData = window.necooPush(arguments);
  /*  */

  var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.

  function isUndef(v) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(v === undefined || v === null);
    ;
    ;
  }

  function isDef(v) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(v !== undefined && v !== null);
    ;
    ;
  }

  function isTrue(v) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(v === true);
    ;
    ;
  }

  function isFalse(v) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(v === false);
    ;
    ;
  }
  /**
   * Check if value is primitive.
   */


  function isPrimitive(value) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
    typeof value === 'symbol' || typeof value === 'boolean');
    ;
    ;
  }
  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */


  function isObject(obj) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(obj !== null && typeof obj === 'object');
    ;
    ;
  }
  /**
   * Get the raw type string of a value, e.g., [object Object].
   */


  var _toString = Object.prototype.toString;

  function toRawType(value) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(_toString.call(value).slice(8, -1));
    ;
    ;
  }
  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */


  function isPlainObject(obj) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(_toString.call(obj) === '[object Object]');
    ;
    ;
  }

  function isRegExp(v) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(_toString.call(v) === '[object RegExp]');
    ;
    ;
  }
  /**
   * Check if val is a valid array index.
   */


  function isValidArrayIndex(val) {
    var necooData = window.necooPush(arguments);
    var n = parseFloat(String(val));
    return necooData.pushReturn(n >= 0 && Math.floor(n) === n && isFinite(val));
    ;
    ;
  }

  function isPromise(val) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function');
    ;
    ;
  }
  /**
   * Convert a value to a string that is actually rendered.
   */


  function toString(val) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val));
    ;
    ;
  }
  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */


  function toNumber(val) {
    var necooData = window.necooPush(arguments);
    var n = parseFloat(val);
    return necooData.pushReturn(isNaN(n) ? val : n);
    ;
    ;
  }
  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */


  function makeMap(str, expectsLowerCase) {
    var necooData = window.necooPush(arguments);
    var map = Object.create(null);
    var list = str.split(',');

    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }

    return necooData.pushReturn(expectsLowerCase ? function _anonymous_3(val) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(map[val.toLowerCase()]);
      ;
      ;
    } : function _anonymous_4(val) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(map[val]);
      ;
      ;
    });
    ;
    ;
  }
  /**
   * Check if a tag is a built-in tag.
   */


  var isBuiltInTag = makeMap('slot,component', true);
  /**
   * Check if an attribute is a reserved attribute.
   */

  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
  /**
   * Remove an item from an array.
   */

  function remove(arr, item) {
    var necooData = window.necooPush(arguments);

    if (arr.length) {
      var index = arr.indexOf(item);

      if (index > -1) {
        return necooData.pushReturn(arr.splice(index, 1));
        ;
        ;
      }
    }
  }
  /**
   * Check whether an object has the property.
   */


  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(hasOwnProperty.call(obj, key));
    ;
    ;
  }
  /**
   * Create a cached version of a pure function.
   */


  function cached(fn) {
    var necooData = window.necooPush(arguments);
    var cache = Object.create(null);
    return necooData.pushReturn(function cachedFn(str) {
      var necooData = window.necooPush(arguments);
      var hit = cache[str];
      return necooData.pushReturn(hit || (cache[str] = fn(str)));
      ;
      ;
    });
    ;
    ;
  }
  /**
   * Camelize a hyphen-delimited string.
   */


  var camelizeRE = /-(\w)/g;
  var camelize = cached(function _anonymous_5(str) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(str.replace(camelizeRE, function _anonymous_6(_, c) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(c ? c.toUpperCase() : '');
      ;
      ;
    }));
    ;
    ;
  });
  /**
   * Capitalize a string.
   */

  var capitalize = cached(function _anonymous_7(str) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(str.charAt(0).toUpperCase() + str.slice(1));
    ;
    ;
  });
  /**
   * Hyphenate a camelCase string.
   */

  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function _anonymous_8(str) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(str.replace(hyphenateRE, '-$1').toLowerCase());
    ;
    ;
  });
  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */

  function polyfillBind(fn, ctx) {
    var necooData = window.necooPush(arguments);

    function boundFn(a) {
      var necooData = window.necooPush(arguments);
      var l = arguments.length;
      return necooData.pushReturn(l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx));
      ;
      ;
    }

    boundFn._length = fn.length;
    return necooData.pushReturn(boundFn);
    ;
    ;
  }

  function nativeBind(fn, ctx) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(fn.bind(ctx));
    ;
    ;
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;
  /**
   * Convert an Array-like object to a real Array.
   */

  function toArray(list, start) {
    var necooData = window.necooPush(arguments);
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);

    while (i--) {
      ret[i] = list[i + start];
    }

    return necooData.pushReturn(ret);
    ;
    ;
  }
  /**
   * Mix properties into target object.
   */


  function extend(to, _from) {
    var necooData = window.necooPush(arguments);

    for (var key in _from) {
      to[key] = _from[key];
    }

    return necooData.pushReturn(to);
    ;
    ;
  }
  /**
   * Merge an Array of Objects into a single Object.
   */


  function toObject(arr) {
    var necooData = window.necooPush(arguments);
    var res = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }
  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */


  function noop(a, b, c) {
    var necooData = window.necooPush(arguments);
  }
  /**
   * Always return necooData.pushReturn(false);;;.
   */


  var no = function _anonymous_9(a, b, c) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(false);
    ;
    ;
  };
  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */


  var identity = function _anonymous_10(_) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(_);
    ;
    ;
  };
  /**
   * Generate a string containing static keys from compiler modules.
   */


  function genStaticKeys(modules) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(modules.reduce(function _anonymous_11(keys, m) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(keys.concat(m.staticKeys || []));
      ;
      ;
    }, []).join(','));
    ;
    ;
  }
  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */


  function looseEqual(a, b) {
    var necooData = window.necooPush(arguments);

    if (a === b) {
      return necooData.pushReturn(true);
      ;
      ;
    }

    var isObjectA = isObject(a);
    var isObjectB = isObject(b);

    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);

        if (isArrayA && isArrayB) {
          return necooData.pushReturn(a.length === b.length && a.every(function _anonymous_12(e, i) {
            var necooData = window.necooPush(arguments);
            return necooData.pushReturn(looseEqual(e, b[i]));
            ;
            ;
          }));
          ;
          ;
        } else if (a instanceof Date && b instanceof Date) {
          return necooData.pushReturn(a.getTime() === b.getTime());
          ;
          ;
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return necooData.pushReturn(keysA.length === keysB.length && keysA.every(function _anonymous_13(key) {
            var necooData = window.necooPush(arguments);
            return necooData.pushReturn(looseEqual(a[key], b[key]));
            ;
            ;
          }));
          ;
          ;
        } else {
          /* istanbul ignore next */
          return necooData.pushReturn(false);
          ;
          ;
        }
      } catch (e) {
        /* istanbul ignore next */
        return necooData.pushReturn(false);
        ;
        ;
      }
    } else if (!isObjectA && !isObjectB) {
      return necooData.pushReturn(String(a) === String(b));
      ;
      ;
    } else {
      return necooData.pushReturn(false);
      ;
      ;
    }
  }
  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */


  function looseIndexOf(arr, val) {
    var necooData = window.necooPush(arguments);

    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return necooData.pushReturn(i);
        ;
        ;
      }
    }

    return necooData.pushReturn(-1);
    ;
    ;
  }
  /**
   * Ensure a function is called only once.
   */


  function once(fn) {
    var necooData = window.necooPush(arguments);
    var called = false;
    return necooData.pushReturn(function _anonymous_14() {
      var necooData = window.necooPush(arguments);

      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    });
    ;
    ;
  }

  var SSR_ATTR = 'data-server-rendered';
  var ASSET_TYPES = ['component', 'directive', 'filter'];
  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };
  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */

  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  /**
   * Check if a string starts with $ or _
   */

  function isReserved(str) {
    var necooData = window.necooPush(arguments);
    var c = (str + '').charCodeAt(0);
    return necooData.pushReturn(c === 0x24 || c === 0x5F);
    ;
    ;
  }
  /**
   * Define a property.
   */


  function def(obj, key, val, enumerable) {
    var necooData = window.necooPush(arguments);
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }
  /**
   * Parse simple path.
   */


  var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

  function parsePath(path) {
    var necooData = window.necooPush(arguments);

    if (bailRE.test(path)) {
      return;
    }

    var segments = path.split('.');
    return necooData.pushReturn(function _anonymous_15(obj) {
      var necooData = window.necooPush(arguments);

      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }

        obj = obj[segments[i]];
      }

      return necooData.pushReturn(obj);
      ;
      ;
    });
    ;
    ;
  }
  /*  */
  // can we use __proto__?


  var hasProto = '__proto__' in {}; // Browser environment sniffing

  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

  var nativeWatch = {}.watch;
  var supportsPassive = false;

  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          var necooData = window.necooPush(arguments);
          /* istanbul ignore next */

          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285

      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  } // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV


  var _isServer;

  var isServerRendering = function _anonymous_16() {
    var necooData = window.necooPush(arguments);

    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }

    return necooData.pushReturn(_isServer);
    ;
    ;
  }; // detect devtools


  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  /* istanbul ignore next */

  function isNative(Ctor) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(typeof Ctor === 'function' && /native code/.test(Ctor.toString()));
    ;
    ;
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */
  // $flow-disable-line


  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set =
    /*@__PURE__*/
    function _anonymous_17() {
      var necooData = window.necooPush(arguments);

      function Set() {
        var necooData = window.necooPush(arguments);
        this.set = Object.create(null);
      }

      Set.prototype.has = function has(key) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(this.set[key] === true);
        ;
        ;
      };

      Set.prototype.add = function add(key) {
        var necooData = window.necooPush(arguments);
        this.set[key] = true;
      };

      Set.prototype.clear = function clear() {
        var necooData = window.necooPush(arguments);
        this.set = Object.create(null);
      };

      return necooData.pushReturn(Set);
      ;
      ;
    }();
  }
  /*  */


  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check

  var formatComponentName = noop;
  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;

    var classify = function _anonymous_18(str) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(str.replace(classifyRE, function _anonymous_19(c) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(c.toUpperCase());
        ;
        ;
      }).replace(/[-_]/g, ''));
      ;
      ;
    };

    warn = function _anonymous_20(msg, vm) {
      var necooData = window.necooPush(arguments);
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function _anonymous_21(msg, vm) {
      var necooData = window.necooPush(arguments);

      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function _anonymous_22(vm, includeFile) {
      var necooData = window.necooPush(arguments);

      if (vm.$root === vm) {
        return necooData.pushReturn('<Root>');
        ;
        ;
      }

      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;

      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return necooData.pushReturn((name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : ''));
      ;
      ;
    };

    var repeat = function _anonymous_23(str, n) {
      var necooData = window.necooPush(arguments);
      var res = '';

      while (n) {
        if (n % 2 === 1) {
          res += str;
        }

        if (n > 1) {
          str += str;
        }

        n >>= 1;
      }

      return necooData.pushReturn(res);
      ;
      ;
    };

    generateComponentTrace = function _anonymous_24(vm) {
      var necooData = window.necooPush(arguments);

      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;

        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];

            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }

          tree.push(vm);
          vm = vm.$parent;
        }

        return necooData.pushReturn('\n\nfound in\n\n' + tree.map(function _anonymous_25(vm, i) {
          var necooData = window.necooPush(arguments);
          return necooData.pushReturn("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm)));
          ;
          ;
        }).join('\n'));
        ;
        ;
      } else {
        return necooData.pushReturn("\n\n(found in " + formatComponentName(vm) + ")");
        ;
        ;
      }
    };
  }
  /*  */

  var uid = 0;
  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */

  var Dep = function Dep() {
    var necooData = window.necooPush(arguments);
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    var necooData = window.necooPush(arguments);
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    var necooData = window.necooPush(arguments);
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    var necooData = window.necooPush(arguments);

    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    var necooData = window.necooPush(arguments); // stabilize the subscriber list first

    var subs = this.subs.slice();

    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function _anonymous_26(a, b) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(a.id - b.id);
        ;
        ;
      });
    }

    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }; // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.


  Dep.target = null;
  var targetStack = [];

  function pushTarget(target) {
    var necooData = window.necooPush(arguments);
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget() {
    var necooData = window.necooPush(arguments);
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }
  /*  */


  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    var necooData = window.necooPush(arguments);
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = {
    child: {
      configurable: true
    }
  }; // DEPRECATED: alias for componentInstance for backwards compat.

  /* istanbul ignore next */

  prototypeAccessors.child.get = function _anonymous_27() {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(this.componentInstance);
    ;
    ;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function _anonymous_28(text) {
    var necooData = window.necooPush(arguments);
    if (text === void 0) text = '';
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return necooData.pushReturn(node);
    ;
    ;
  };

  function createTextVNode(val) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(new VNode(undefined, undefined, undefined, String(val)));
    ;
    ;
  } // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.


  function cloneVNode(vnode) {
    var necooData = window.necooPush(arguments);
    var cloned = new VNode(vnode.tag, vnode.data, // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return necooData.pushReturn(cloned);
    ;
    ;
  }
  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */


  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
  /**
   * Intercept mutating methods and emit events
   */

  methodsToPatch.forEach(function _anonymous_29(method) {
    var necooData = window.necooPush(arguments); // cache original method

    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var necooData = window.necooPush(arguments);
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      } // notify change


      ob.dep.notify();
      return necooData.pushReturn(result);
      ;
      ;
    });
  });
  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */

  var shouldObserve = true;

  function toggleObserving(value) {
    var necooData = window.necooPush(arguments);
    shouldObserve = value;
  }
  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */


  var Observer = function Observer(value) {
    var necooData = window.necooPush(arguments);
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }

      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  Observer.prototype.walk = function walk(obj) {
    var necooData = window.necooPush(arguments);
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };
  /**
   * Observe a list of Array items.
   */


  Observer.prototype.observeArray = function observeArray(items) {
    var necooData = window.necooPush(arguments);

    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }; // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */


  function protoAugment(target, src) {
    var necooData = window.necooPush(arguments);
    /* eslint-disable no-proto */

    target.__proto__ = src;
    /* eslint-enable no-proto */
  }
  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */

  /* istanbul ignore next */


  function copyAugment(target, src, keys) {
    var necooData = window.necooPush(arguments);

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }
  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */


  function observe(value, asRootData) {
    var necooData = window.necooPush(arguments);

    if (!isObject(value) || value instanceof VNode) {
      return;
    }

    var ob;

    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }

    if (asRootData && ob) {
      ob.vmCount++;
    }

    return necooData.pushReturn(ob);
    ;
    ;
  }
  /**
   * Define a reactive property on an Object.
   */


  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var necooData = window.necooPush(arguments);
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property && property.configurable === false) {
      return;
    } // cater for pre-defined getter/setters


    var getter = property && property.get;
    var setter = property && property.set;

    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var necooData = window.necooPush(arguments);
        var value = getter ? getter.call(obj) : val;

        if (Dep.target) {
          dep.depend();

          if (childOb) {
            childOb.dep.depend();

            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }

        return necooData.pushReturn(value);
        ;
        ;
      },
      set: function reactiveSetter(newVal) {
        var necooData = window.necooPush(arguments);
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */

        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */


        if (customSetter) {
          customSetter();
        } // #7981: for accessor properties without setter


        if (getter && !setter) {
          return;
        }

        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }

        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }
  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */


  function set(target, key, val) {
    var necooData = window.necooPush(arguments);

    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return necooData.pushReturn(val);
      ;
      ;
    }

    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return necooData.pushReturn(val);
      ;
      ;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return necooData.pushReturn(val);
      ;
      ;
    }

    if (!ob) {
      target[key] = val;
      return necooData.pushReturn(val);
      ;
      ;
    }

    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return necooData.pushReturn(val);
    ;
    ;
  }
  /**
   * Delete a property and trigger change if necessary.
   */


  function del(target, key) {
    var necooData = window.necooPush(arguments);

    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }

    if (!hasOwn(target, key)) {
      return;
    }

    delete target[key];

    if (!ob) {
      return;
    }

    ob.dep.notify();
  }
  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */


  function dependArray(value) {
    var necooData = window.necooPush(arguments);

    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();

      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }
  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */


  var strats = config.optionMergeStrategies;
  /**
   * Options with restrictions
   */

  {
    strats.el = strats.propsData = function _anonymous_30(parent, child, vm, key) {
      var necooData = window.necooPush(arguments);

      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }

      return necooData.pushReturn(defaultStrat(parent, child));
      ;
      ;
    };
  }
  /**
   * Helper that recursively merges two data objects together.
   */

  function mergeData(to, from) {
    var necooData = window.necooPush(arguments);

    if (!from) {
      return necooData.pushReturn(to);
      ;
      ;
    }

    var key, toVal, fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i]; // in case the object is already observed...

      if (key === '__ob__') {
        continue;
      }

      toVal = to[key];
      fromVal = from[key];

      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }

    return necooData.pushReturn(to);
    ;
    ;
  }
  /**
   * Data
   */


  function mergeDataOrFn(parentVal, childVal, vm) {
    var necooData = window.necooPush(arguments);

    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return necooData.pushReturn(parentVal);
        ;
        ;
      }

      if (!parentVal) {
        return necooData.pushReturn(childVal);
        ;
        ;
      } // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.


      return necooData.pushReturn(function mergedDataFn() {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal));
        ;
        ;
      });
      ;
      ;
    } else {
      return necooData.pushReturn(function mergedInstanceDataFn() {
        var necooData = window.necooPush(arguments); // instance merge

        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

        if (instanceData) {
          return necooData.pushReturn(mergeData(instanceData, defaultData));
          ;
          ;
        } else {
          return necooData.pushReturn(defaultData);
          ;
          ;
        }
      });
      ;
      ;
    }
  }

  strats.data = function _anonymous_31(parentVal, childVal, vm) {
    var necooData = window.necooPush(arguments);

    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
        return necooData.pushReturn(parentVal);
        ;
        ;
      }

      return necooData.pushReturn(mergeDataOrFn(parentVal, childVal));
      ;
      ;
    }

    return necooData.pushReturn(mergeDataOrFn(parentVal, childVal, vm));
    ;
    ;
  };
  /**
   * Hooks and props are merged as arrays.
   */


  function mergeHook(parentVal, childVal) {
    var necooData = window.necooPush(arguments);
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return necooData.pushReturn(res ? dedupeHooks(res) : res);
    ;
    ;
  }

  function dedupeHooks(hooks) {
    var necooData = window.necooPush(arguments);
    var res = [];

    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }

  LIFECYCLE_HOOKS.forEach(function _anonymous_32(hook) {
    var necooData = window.necooPush(arguments);
    strats[hook] = mergeHook;
  });
  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */

  function mergeAssets(parentVal, childVal, vm, key) {
    var necooData = window.necooPush(arguments);
    var res = Object.create(parentVal || null);

    if (childVal) {
      assertObjectType(key, childVal, vm);
      return necooData.pushReturn(extend(res, childVal));
      ;
      ;
    } else {
      return necooData.pushReturn(res);
      ;
      ;
    }
  }

  ASSET_TYPES.forEach(function _anonymous_33(type) {
    var necooData = window.necooPush(arguments);
    strats[type + 's'] = mergeAssets;
  });
  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */

  strats.watch = function _anonymous_34(parentVal, childVal, vm, key) {
    var necooData = window.necooPush(arguments); // work around Firefox's Object.prototype.watch...

    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }

    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */


    if (!childVal) {
      return necooData.pushReturn(Object.create(parentVal || null));
      ;
      ;
    }

    {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return necooData.pushReturn(childVal);
      ;
      ;
    }

    var ret = {};
    extend(ret, parentVal);

    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];

      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }

      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }

    return necooData.pushReturn(ret);
    ;
    ;
  };
  /**
   * Other object hashes.
   */


  strats.props = strats.methods = strats.inject = strats.computed = function _anonymous_35(parentVal, childVal, vm, key) {
    var necooData = window.necooPush(arguments);

    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return necooData.pushReturn(childVal);
      ;
      ;
    }

    var ret = Object.create(null);
    extend(ret, parentVal);

    if (childVal) {
      extend(ret, childVal);
    }

    return necooData.pushReturn(ret);
    ;
    ;
  };

  strats.provide = mergeDataOrFn;
  /**
   * Default strategy.
   */

  var defaultStrat = function _anonymous_36(parentVal, childVal) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(childVal === undefined ? parentVal : childVal);
    ;
    ;
  };
  /**
   * Validate component names
   */


  function checkComponents(options) {
    var necooData = window.necooPush(arguments);

    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    var necooData = window.necooPush(arguments);

    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
    }

    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }
  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */


  function normalizeProps(options, vm) {
    var necooData = window.necooPush(arguments);
    var props = options.props;

    if (!props) {
      return;
    }

    var res = {};
    var i, val, name;

    if (Array.isArray(props)) {
      i = props.length;

      while (i--) {
        val = props[i];

        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = {
            type: null
          };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : {
          type: val
        };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }

    options.props = res;
  }
  /**
   * Normalize all injections into Object-based format
   */


  function normalizeInject(options, vm) {
    var necooData = window.necooPush(arguments);
    var inject = options.inject;

    if (!inject) {
      return;
    }

    var normalized = options.inject = {};

    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = {
          from: inject[i]
        };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({
          from: key
        }, val) : {
          from: val
        };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }
  /**
   * Normalize raw function directives into object format.
   */


  function normalizeDirectives(options) {
    var necooData = window.necooPush(arguments);
    var dirs = options.directives;

    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];

        if (typeof def$$1 === 'function') {
          dirs[key] = {
            bind: def$$1,
            update: def$$1
          };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    var necooData = window.necooPush(arguments);

    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }
  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */


  function mergeOptions(parent, child, vm) {
    var necooData = window.necooPush(arguments);
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child); // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.

    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }

      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;

    for (key in parent) {
      mergeField(key);
    }

    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      var necooData = window.necooPush(arguments);
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }

    return necooData.pushReturn(options);
    ;
    ;
  }
  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */


  function resolveAsset(options, type, id, warnMissing) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore if */

    if (typeof id !== 'string') {
      return;
    }

    var assets = options[type]; // check local registration variations first

    if (hasOwn(assets, id)) {
      return necooData.pushReturn(assets[id]);
      ;
      ;
    }

    var camelizedId = camelize(id);

    if (hasOwn(assets, camelizedId)) {
      return necooData.pushReturn(assets[camelizedId]);
      ;
      ;
    }

    var PascalCaseId = capitalize(camelizedId);

    if (hasOwn(assets, PascalCaseId)) {
      return necooData.pushReturn(assets[PascalCaseId]);
      ;
      ;
    } // fallback to prototype chain


    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

    if (warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }

    return necooData.pushReturn(res);
    ;
    ;
  }
  /*  */


  function validateProp(key, propOptions, propsData, vm) {
    var necooData = window.necooPush(arguments);
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key]; // boolean casting

    var booleanIndex = getTypeIndex(Boolean, prop.type);

    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);

        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    } // check default value


    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
      // make sure to observe it.

      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }

    {
      assertProp(prop, key, value, vm, absent);
    }
    return necooData.pushReturn(value);
    ;
    ;
  }
  /**
   * Get the default value of a prop.
   */


  function getPropDefaultValue(vm, prop, key) {
    var necooData = window.necooPush(arguments); // no default, return necooData.pushReturn(undefined);;;

    if (!hasOwn(prop, 'default')) {
      return undefined;
    }

    var def = prop.default; // warn against non-factory defaults for Object & Array

    if (isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    } // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger


    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return necooData.pushReturn(vm._props[key]);
      ;
      ;
    } // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context


    return necooData.pushReturn(typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def);
    ;
    ;
  }
  /**
   * Assert whether a prop is valid.
   */


  function assertProp(prop, name, value, vm, absent) {
    var necooData = window.necooPush(arguments);

    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }

    if (value == null && !prop.required) {
      return;
    }

    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];

    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }

      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
      return;
    }

    var validator = prop.validator;

    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var necooData = window.necooPush(arguments);
    var valid;
    var expectedType = getType(type);

    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }

    return necooData.pushReturn({
      valid: valid,
      expectedType: expectedType
    });
    ;
    ;
  }
  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */


  function getType(fn) {
    var necooData = window.necooPush(arguments);
    var match = fn && fn.toString().match(/^\s*function _anonymous_37(\w+)/);
    return necooData.pushReturn(match ? match[1] : '');
    ;
    ;
  }

  function isSameType(a, b) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(getType(a) === getType(b));
    ;
    ;
  }

  function getTypeIndex(type, expectedTypes) {
    var necooData = window.necooPush(arguments);

    if (!Array.isArray(expectedTypes)) {
      return necooData.pushReturn(isSameType(expectedTypes, type) ? 0 : -1);
      ;
      ;
    }

    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return necooData.pushReturn(i);
        ;
        ;
      }
    }

    return necooData.pushReturn(-1);
    ;
    ;
  }

  function getInvalidTypeMessage(name, value, expectedTypes) {
    var necooData = window.necooPush(arguments);
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }

    message += ", got " + receivedType + " "; // check if we need to specify received value

    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }

    return necooData.pushReturn(message);
    ;
    ;
  }

  function styleValue(value, type) {
    var necooData = window.necooPush(arguments);

    if (type === 'String') {
      return necooData.pushReturn("\"" + value + "\"");
      ;
      ;
    } else if (type === 'Number') {
      return necooData.pushReturn("" + Number(value));
      ;
      ;
    } else {
      return necooData.pushReturn("" + value);
      ;
      ;
    }
  }

  function isExplicable(value) {
    var necooData = window.necooPush(arguments);
    var explicitTypes = ['string', 'number', 'boolean'];
    return necooData.pushReturn(explicitTypes.some(function _anonymous_38(elem) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(value.toLowerCase() === elem);
      ;
      ;
    }));
    ;
    ;
  }

  function isBoolean() {
    var necooData = window.necooPush(arguments);
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return necooData.pushReturn(args.some(function _anonymous_39(elem) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(elem.toLowerCase() === 'boolean');
      ;
      ;
    }));
    ;
    ;
  }
  /*  */


  function handleError(err, vm, info) {
    var necooData = window.necooPush(arguments); // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505

    pushTarget();

    try {
      if (vm) {
        var cur = vm;

        while (cur = cur.$parent) {
          var hooks = cur.$options.errorCaptured;

          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;

                if (capture) {
                  return;
                }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }

      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling(handler, context, args, vm, info) {
    var necooData = window.necooPush(arguments);
    var res;

    try {
      res = args ? handler.apply(context, args) : handler.call(context);

      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function _anonymous_40(e) {
          var necooData = window.necooPush(arguments);
          return necooData.pushReturn(handleError(e, vm, info + " (Promise/async)"));
          ;
          ;
        }); // issue #9511
        // avoid catch triggering multiple times when nested calls

        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }

    return necooData.pushReturn(res);
    ;
    ;
  }

  function globalHandleError(err, vm, info) {
    var necooData = window.necooPush(arguments);

    if (config.errorHandler) {
      try {
        return necooData.pushReturn(config.errorHandler.call(null, err, vm, info));
        ;
        ;
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }

    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    var necooData = window.necooPush(arguments);
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */

    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
  /*  */


  var isUsingMicroTask = false;
  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    var necooData = window.necooPush(arguments);
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;

    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  } // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).


  var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:

  /* istanbul ignore next, $flow-disable-line */

  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();

    timerFunc = function _anonymous_41() {
      var necooData = window.necooPush(arguments);
      p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.

      if (isIOS) {
        setTimeout(noop);
      }
    };

    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });

    timerFunc = function _anonymous_42() {
      var necooData = window.necooPush(arguments);
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };

    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function _anonymous_43() {
      var necooData = window.necooPush(arguments);
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function _anonymous_44() {
      var necooData = window.necooPush(arguments);
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick(cb, ctx) {
    var necooData = window.necooPush(arguments);

    var _resolve;

    callbacks.push(function _anonymous_45() {
      var necooData = window.necooPush(arguments);

      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });

    if (!pending) {
      pending = true;
      timerFunc();
    } // $flow-disable-line


    if (!cb && typeof Promise !== 'undefined') {
      return necooData.pushReturn(new Promise(function _anonymous_46(resolve) {
        var necooData = window.necooPush(arguments);
        _resolve = resolve;
      }));
      ;
      ;
    }
  }
  /*  */


  var mark;
  var measure;
  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */

    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function _anonymous_47(tag) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(perf.mark(tag));
        ;
        ;
      };

      measure = function _anonymous_48(name, startTag, endTag) {
        var necooData = window.necooPush(arguments);
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag); // perf.clearMeasures(name)
      };
    }
  }
  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;
  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function _anonymous_49(target, key) {
      var necooData = window.necooPush(arguments);
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var warnReservedPrefix = function _anonymous_50(target, key) {
      var necooData = window.necooPush(arguments);
      warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          var necooData = window.necooPush(arguments);

          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return necooData.pushReturn(false);
            ;
            ;
          } else {
            target[key] = value;
            return necooData.pushReturn(true);
            ;
            ;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var necooData = window.necooPush(arguments);
        var has = key in target;
        var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

        if (!has && !isAllowed) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return necooData.pushReturn(has || !isAllowed);
        ;
        ;
      }
    };
    var getHandler = {
      get: function get(target, key) {
        var necooData = window.necooPush(arguments);

        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return necooData.pushReturn(target[key]);
        ;
        ;
      }
    };

    initProxy = function initProxy(vm) {
      var necooData = window.necooPush(arguments);

      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }
  /*  */

  var seenObjects = new _Set();
  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */

  function traverse(val) {
    var necooData = window.necooPush(arguments);

    _traverse(val, seenObjects);

    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var necooData = window.necooPush(arguments);
    var i, keys;
    var isA = Array.isArray(val);

    if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
      return;
    }

    if (val.__ob__) {
      var depId = val.__ob__.dep.id;

      if (seen.has(depId)) {
        return;
      }

      seen.add(depId);
    }

    if (isA) {
      i = val.length;

      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;

      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }
  /*  */


  var normalizeEvent = cached(function _anonymous_51(name) {
    var necooData = window.necooPush(arguments);
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return necooData.pushReturn({
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    });
    ;
    ;
  });

  function createFnInvoker(fns, vm) {
    var necooData = window.necooPush(arguments);

    function invoker() {
      var necooData = window.necooPush(arguments);
      var arguments$1 = arguments;
      var fns = invoker.fns;

      if (Array.isArray(fns)) {
        var cloned = fns.slice();

        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return necooData.pushReturn(value);;; for single handlers
        return necooData.pushReturn(invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler"));
        ;
        ;
      }
    }

    invoker.fns = fns;
    return necooData.pushReturn(invoker);
    ;
    ;
  }

  function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
    var necooData = window.necooPush(arguments);
    var name, def$$1, cur, old, event;

    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);

      if (isUndef(cur)) {
        warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }

        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }

        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }

    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }
  /*  */


  function mergeVNodeHook(def, hookKey, hook) {
    var necooData = window.necooPush(arguments);

    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }

    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      var necooData = window.necooPush(arguments);
      hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
      // and prevent memory leak

      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }
  /*  */


  function extractPropsFromVNodeData(data, Ctor, tag) {
    var necooData = window.necooPush(arguments); // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.

    var propOptions = Ctor.options.props;

    if (isUndef(propOptions)) {
      return;
    }

    var res = {};
    var attrs = data.attrs;
    var props = data.props;

    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();

          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    var necooData = window.necooPush(arguments);

    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];

        if (!preserve) {
          delete hash[key];
        }

        return necooData.pushReturn(true);
        ;
        ;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];

        if (!preserve) {
          delete hash[altKey];
        }

        return necooData.pushReturn(true);
        ;
        ;
      }
    }

    return necooData.pushReturn(false);
    ;
    ;
  }
  /*  */
  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:
  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.


  function simpleNormalizeChildren(children) {
    var necooData = window.necooPush(arguments);

    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return necooData.pushReturn(Array.prototype.concat.apply([], children));
        ;
        ;
      }
    }

    return necooData.pushReturn(children);
    ;
    ;
  } // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.


  function normalizeChildren(children) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined);
    ;
    ;
  }

  function isTextNode(node) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(isDef(node) && isDef(node.text) && isFalse(node.isComment));
    ;
    ;
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var necooData = window.necooPush(arguments);
    var res = [];
    var i, c, lastIndex, last;

    for (i = 0; i < children.length; i++) {
      c = children[i];

      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }

      lastIndex = res.length - 1;
      last = res[lastIndex]; //  nested

      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }

          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }

          res.push(c);
        }
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }
  /*  */


  function initProvide(vm) {
    var necooData = window.necooPush(arguments);
    var provide = vm.$options.provide;

    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var necooData = window.necooPush(arguments);
    var result = resolveInject(vm.$options.inject, vm);

    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function _anonymous_52(key) {
        var necooData = window.necooPush(arguments);
        /* istanbul ignore else */

        {
          defineReactive$$1(vm, key, result[key], function _anonymous_53() {
            var necooData = window.necooPush(arguments);
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    var necooData = window.necooPush(arguments);

    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]; // #6574 in case the inject object is observed...

        if (key === '__ob__') {
          continue;
        }

        var provideKey = inject[key].from;
        var source = vm;

        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }

          source = source.$parent;
        }

        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }

      return necooData.pushReturn(result);
      ;
      ;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */


  function resolveSlots(children, context) {
    var necooData = window.necooPush(arguments);

    if (!children || !children.length) {
      return necooData.pushReturn({});
      ;
      ;
    }

    var slots = {};

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      } // named slots should only be respected if the vnode was rendered in the
      // same context.


      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);

        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    } // ignore slots that contains only whitespace


    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }

    return necooData.pushReturn(slots);
    ;
    ;
  }

  function isWhitespace(node) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(node.isComment && !node.asyncFactory || node.text === ' ');
    ;
    ;
  }
  /*  */


  function normalizeScopedSlots(slots, normalSlots, prevSlots) {
    var necooData = window.necooPush(arguments);
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;

    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return necooData.pushReturn(slots._normalized);
      ;
      ;
    } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return necooData.pushReturn(prevSlots);
      ;
      ;
    } else {
      res = {};

      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    } // expose normal slots on scopedSlots


    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    } // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error


    if (slots && Object.isExtensible(slots)) {
      slots._normalized = res;
    }

    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return necooData.pushReturn(res);
    ;
    ;
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var necooData = window.necooPush(arguments);

    var normalized = function _anonymous_54() {
      var necooData = window.necooPush(arguments);
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
      : normalizeChildren(res);
      return necooData.pushReturn(res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
      ) ? undefined : res);
      ;
      ;
    }; // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.


    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }

    return necooData.pushReturn(normalized);
    ;
    ;
  }

  function proxyNormalSlot(slots, key) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(function _anonymous_55() {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(slots[key]);
      ;
      ;
    });
    ;
    ;
  }
  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */


  function renderList(val, render) {
    var necooData = window.necooPush(arguments);
    var ret, i, l, keys, key;

    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);

      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);

      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();

        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);

        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }

    if (!isDef(ret)) {
      ret = [];
    }

    ret._isVList = true;
    return necooData.pushReturn(ret);
    ;
    ;
  }
  /*  */

  /**
   * Runtime helper for rendering <slot>
   */


  function renderSlot(name, fallback, props, bindObject) {
    var necooData = window.necooPush(arguments);
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;

    if (scopedSlotFn) {
      // scoped slot
      props = props || {};

      if (bindObject) {
        if (!isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }

        props = extend(extend({}, bindObject), props);
      }

      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;

    if (target) {
      return necooData.pushReturn(this.$createElement('template', {
        slot: target
      }, nodes));
      ;
      ;
    } else {
      return necooData.pushReturn(nodes);
      ;
      ;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving filters
   */


  function resolveFilter(id) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(resolveAsset(this.$options, 'filters', id, true) || identity);
    ;
    ;
  }
  /*  */


  function isKeyNotMatch(expect, actual) {
    var necooData = window.necooPush(arguments);

    if (Array.isArray(expect)) {
      return necooData.pushReturn(expect.indexOf(actual) === -1);
      ;
      ;
    } else {
      return necooData.pushReturn(expect !== actual);
      ;
      ;
    }
  }
  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */


  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var necooData = window.necooPush(arguments);
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return necooData.pushReturn(isKeyNotMatch(builtInKeyName, eventKeyName));
      ;
      ;
    } else if (mappedKeyCode) {
      return necooData.pushReturn(isKeyNotMatch(mappedKeyCode, eventKeyCode));
      ;
      ;
    } else if (eventKeyName) {
      return necooData.pushReturn(hyphenate(eventKeyName) !== key);
      ;
      ;
    }
  }
  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */


  function bindObjectProps(data, tag, value, asProp, isSync) {
    var necooData = window.necooPush(arguments);

    if (value) {
      if (!isObject(value)) {
        warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }

        var hash;

        var loop = function _anonymous_56(key) {
          var necooData = window.necooPush(arguments);

          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }

          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);

          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});

              on["update:" + key] = function _anonymous_57($event) {
                var necooData = window.necooPush(arguments);
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop(key);
      }
    }

    return necooData.pushReturn(data);
    ;
    ;
  }
  /*  */

  /**
   * Runtime helper for rendering static trees.
   */


  function renderStatic(index, isInFor) {
    var necooData = window.necooPush(arguments);
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.

    if (tree && !isInFor) {
      return necooData.pushReturn(tree);
      ;
      ;
    } // otherwise, render a fresh tree.


    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return necooData.pushReturn(tree);
    ;
    ;
  }
  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */


  function markOnce(tree, index, key) {
    var necooData = window.necooPush(arguments);
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return necooData.pushReturn(tree);
    ;
    ;
  }

  function markStatic(tree, key, isOnce) {
    var necooData = window.necooPush(arguments);

    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    var necooData = window.necooPush(arguments);
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }
  /*  */


  function bindObjectListeners(data, value) {
    var necooData = window.necooPush(arguments);

    if (value) {
      if (!isPlainObject(value)) {
        warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};

        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }

    return necooData.pushReturn(data);
    ;
    ;
  }
  /*  */


  function resolveScopedSlots(fns, // see flow/vnode
  res, // the following are added in 2.6
  hasDynamicKeys, contentHashKey) {
    var necooData = window.necooPush(arguments);
    res = res || {
      $stable: !hasDynamicKeys
    };

    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];

      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }

        res[slot.key] = slot.fn;
      }
    }

    if (contentHashKey) {
      res.$key = contentHashKey;
    }

    return necooData.pushReturn(res);
    ;
    ;
  }
  /*  */


  function bindDynamicKeys(baseObj, values) {
    var necooData = window.necooPush(arguments);

    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];

      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
      }
    }

    return necooData.pushReturn(baseObj);
    ;
    ;
  } // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.


  function prependModifier(value, symbol) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(typeof value === 'string' ? symbol + value : value);
    ;
    ;
  }
  /*  */


  function installRenderHelpers(target) {
    var necooData = window.necooPush(arguments);
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }
  /*  */


  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var necooData = window.necooPush(arguments);
    var this$1 = this;
    var options = Ctor.options; // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check

    var contextVm;

    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent); // $flow-disable-line

      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent; // $flow-disable-line

      parent = parent._original;
    }

    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);

    this.slots = function _anonymous_58() {
      var necooData = window.necooPush(arguments);

      if (!this$1.$slots) {
        normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
      }

      return necooData.pushReturn(this$1.$slots);
      ;
      ;
    };

    Object.defineProperty(this, 'scopedSlots', {
      enumerable: true,
      get: function get() {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(normalizeScopedSlots(data.scopedSlots, this.slots()));
        ;
        ;
      }
    }); // support for compiled functional template

    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options; // pre-resolve slots for renderSlot()

      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function _anonymous_59(a, b, c, d) {
        var necooData = window.necooPush(arguments);
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);

        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }

        return necooData.pushReturn(vnode);
        ;
        ;
      };
    } else {
      this._c = function _anonymous_60(a, b, c, d) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(createElement(contextVm, a, b, c, d, needNormalization));
        ;
        ;
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var necooData = window.necooPush(arguments);
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;

    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }

      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return necooData.pushReturn(cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext));
      ;
      ;
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);

      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }

      return necooData.pushReturn(res);
      ;
      ;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    var necooData = window.necooPush(arguments); // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.

    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }

    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }

    return necooData.pushReturn(clone);
    ;
    ;
  }

  function mergeProps(to, from) {
    var necooData = window.necooPush(arguments);

    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }
  /*  */

  /*  */

  /*  */

  /*  */
  // inline hooks to be invoked on component VNodes during patch


  var componentVNodeHooks = {
    init: function init(vnode, hydrating) {
      var necooData = window.necooPush(arguments);

      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow

        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },
    prepatch: function prepatch(oldVnode, vnode) {
      var necooData = window.necooPush(arguments);
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },
    insert: function insert(vnode) {
      var necooData = window.necooPush(arguments);
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }

      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    },
    destroy: function destroy(vnode) {
      var necooData = window.necooPush(arguments);
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    }
  };
  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    var necooData = window.necooPush(arguments);

    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base; // plain options object: turn it into a constructor

    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    } // if at this stage it's not a constructor or an async component factory,
    // reject.


    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    } // async component


    var asyncFactory;

    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return necooData.pushReturn(createAsyncPlaceholder(asyncFactory, data, context, children, tag));
        ;
        ;
      }
    }

    data = data || {}; // resolve constructor options in case global mixins are applied after
    // component constructor creation

    resolveConstructorOptions(Ctor); // transform component v-model data into props & events

    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    } // extract props


    var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

    if (isTrue(Ctor.options.functional)) {
      return necooData.pushReturn(createFunctionalComponent(Ctor, propsData, data, context, children));
      ;
      ;
    } // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners


    var listeners = data.on; // replace with listeners with .native modifier
    // so it gets processed during parent component patch.

    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot
      // work around flow
      var slot = data.slot;
      data = {};

      if (slot) {
        data.slot = slot;
      }
    } // install component management hooks onto the placeholder node


    installComponentHooks(data); // return a placeholder vnode

    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
      Ctor: Ctor,
      propsData: propsData,
      listeners: listeners,
      tag: tag,
      children: children
    }, asyncFactory);
    return necooData.pushReturn(vnode);
    ;
    ;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
  ) {
    var necooData = window.necooPush(arguments);
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    }; // check inline-template render functions

    var inlineTemplate = vnode.data.inlineTemplate;

    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }

    return necooData.pushReturn(new vnode.componentOptions.Ctor(options));
    ;
    ;
  }

  function installComponentHooks(data) {
    var necooData = window.necooPush(arguments);
    var hooks = data.hook || (data.hook = {});

    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];

      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1(f1, f2) {
    var necooData = window.necooPush(arguments);

    var merged = function _anonymous_61(a, b) {
      var necooData = window.necooPush(arguments); // flow complains about extra args which is why we use any

      f1(a, b);
      f2(a, b);
    };

    merged._merged = true;
    return necooData.pushReturn(merged);
    ;
    ;
  } // transform component v-model info (value and callback) into
  // prop and event handler respectively.


  function transformModel(options, data) {
    var necooData = window.necooPush(arguments);
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;

    if (isDef(existing)) {
      if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }
  /*  */


  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
  // without getting yelled at by flow

  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    var necooData = window.necooPush(arguments);

    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }

    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }

    return necooData.pushReturn(_createElement(context, tag, data, children, normalizationType));
    ;
    ;
  }

  function _createElement(context, tag, data, children, normalizationType) {
    var necooData = window.necooPush(arguments);

    if (isDef(data) && isDef(data.__ob__)) {
      warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return necooData.pushReturn(createEmptyVNode());
      ;
      ;
    } // object syntax in v-bind


    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }

    if (!tag) {
      // in case of component :is set to falsy value
      return necooData.pushReturn(createEmptyVNode());
      ;
      ;
    } // warn against non-primitive key


    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    } // support single function children as default scoped slot


    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = {
        default: children[0]
      };
      children.length = 0;
    }

    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }

    var vnode, ns;

    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }

    if (Array.isArray(vnode)) {
      return necooData.pushReturn(vnode);
      ;
      ;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }

      if (isDef(data)) {
        registerDeepBindings(data);
      }

      return necooData.pushReturn(vnode);
      ;
      ;
    } else {
      return necooData.pushReturn(createEmptyVNode());
      ;
      ;
    }
  }

  function applyNS(vnode, ns, force) {
    var necooData = window.necooPush(arguments);
    vnode.ns = ns;

    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }

    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];

        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  } // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes


  function registerDeepBindings(data) {
    var necooData = window.necooPush(arguments);

    if (isObject(data.style)) {
      traverse(data.style);
    }

    if (isObject(data.class)) {
      traverse(data.class);
    }
  }
  /*  */


  function initRender(vm) {
    var necooData = window.necooPush(arguments);
    vm._vnode = null; // the root of the child tree

    vm._staticTrees = null; // v-once cached trees

    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates

    vm._c = function _anonymous_62(a, b, c, d) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(createElement(vm, a, b, c, d, false));
      ;
      ;
    }; // normalization is always applied for the public version, used in
    // user-written render functions.


    vm.$createElement = function _anonymous_63(a, b, c, d) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(createElement(vm, a, b, c, d, true));
      ;
      ;
    }; // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated


    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */

    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function _anonymous_64() {
        var necooData = window.necooPush(arguments);
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function _anonymous_65() {
        var necooData = window.necooPush(arguments);
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin(Vue) {
    var necooData = window.necooPush(arguments); // install runtime convenience helpers

    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function _anonymous_66(fn) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(nextTick(fn, this));
      ;
      ;
    };

    Vue.prototype._render = function _anonymous_67() {
      var necooData = window.necooPush(arguments);
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      } // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.


      vm.$vnode = _parentVnode; // render self

      var vnode;

      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render"); // return error render result,
        // or previous vnode to prevent render error causing blank component

        /* istanbul ignore else */

        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      } // if the returned array contains only a single node, allow it


      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      } // return empty vnode in case the render function errored out


      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }

        vnode = createEmptyVNode();
      } // set parent


      vnode.parent = _parentVnode;
      return necooData.pushReturn(vnode);
      ;
      ;
    };
  }
  /*  */


  function ensureCtor(comp, base) {
    var necooData = window.necooPush(arguments);

    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }

    return necooData.pushReturn(isObject(comp) ? base.extend(comp) : comp);
    ;
    ;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var necooData = window.necooPush(arguments);
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
      data: data,
      context: context,
      children: children,
      tag: tag
    };
    return necooData.pushReturn(node);
    ;
    ;
  }

  function resolveAsyncComponent(factory, baseCtor) {
    var necooData = window.necooPush(arguments);

    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return necooData.pushReturn(factory.errorComp);
      ;
      ;
    }

    if (isDef(factory.resolved)) {
      return necooData.pushReturn(factory.resolved);
      ;
      ;
    }

    var owner = currentRenderingInstance;

    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return necooData.pushReturn(factory.loadingComp);
      ;
      ;
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null;
      owner.$on('hook:destroyed', function _anonymous_68() {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(remove(owners, owner));
        ;
        ;
      });

      var forceRender = function _anonymous_69(renderCompleted) {
        var necooData = window.necooPush(arguments);

        for (var i = 0, l = owners.length; i < l; i++) {
          owners[i].$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;

          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }

          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function _anonymous_70(res) {
        var necooData = window.necooPush(arguments); // cache resolved

        factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)

        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });
      var reject = once(function _anonymous_71(reason) {
        var necooData = window.necooPush(arguments);
        warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });
      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);

            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function _anonymous_72() {
                var necooData = window.necooPush(arguments);
                timerLoading = null;

                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function _anonymous_73() {
              var necooData = window.necooPush(arguments);
              timerTimeout = null;

              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false; // return necooData.pushReturn(i);;;n case resolved synchronously

      return necooData.pushReturn(factory.loading ? factory.loadingComp : factory.resolved);
      ;
      ;
    }
  }
  /*  */


  function isAsyncPlaceholder(node) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(node.isComment && node.asyncFactory);
    ;
    ;
  }
  /*  */


  function getFirstComponentChild(children) {
    var necooData = window.necooPush(arguments);

    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];

        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return necooData.pushReturn(c);
          ;
          ;
        }
      }
    }
  }
  /*  */

  /*  */


  function initEvents(vm) {
    var necooData = window.necooPush(arguments);
    vm._events = Object.create(null);
    vm._hasHookEvent = false; // init parent attached events

    var listeners = vm.$options._parentListeners;

    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn) {
    var necooData = window.necooPush(arguments);
    target.$on(event, fn);
  }

  function remove$1(event, fn) {
    var necooData = window.necooPush(arguments);
    target.$off(event, fn);
  }

  function createOnceHandler(event, fn) {
    var necooData = window.necooPush(arguments);
    var _target = target;
    return necooData.pushReturn(function onceHandler() {
      var necooData = window.necooPush(arguments);
      var res = fn.apply(null, arguments);

      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    });
    ;
    ;
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    var necooData = window.necooPush(arguments);
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var necooData = window.necooPush(arguments);
    var hookRE = /^hook:/;

    Vue.prototype.$on = function _anonymous_74(event, fn) {
      var necooData = window.necooPush(arguments);
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup

        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }

      return necooData.pushReturn(vm);
      ;
      ;
    };

    Vue.prototype.$once = function _anonymous_75(event, fn) {
      var necooData = window.necooPush(arguments);
      var vm = this;

      function on() {
        var necooData = window.necooPush(arguments);
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.$on(event, on);
      return necooData.pushReturn(vm);
      ;
      ;
    };

    Vue.prototype.$off = function _anonymous_76(event, fn) {
      var necooData = window.necooPush(arguments);
      var vm = this; // all

      if (!arguments.length) {
        vm._events = Object.create(null);
        return necooData.pushReturn(vm);
        ;
        ;
      } // array of events


      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }

        return necooData.pushReturn(vm);
        ;
        ;
      } // specific event


      var cbs = vm._events[event];

      if (!cbs) {
        return necooData.pushReturn(vm);
        ;
        ;
      }

      if (!fn) {
        vm._events[event] = null;
        return necooData.pushReturn(vm);
        ;
        ;
      } // specific handler


      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return necooData.pushReturn(vm);
      ;
      ;
    };

    Vue.prototype.$emit = function _anonymous_77(event) {
      var necooData = window.necooPush(arguments);
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();

        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";

        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }

      return necooData.pushReturn(vm);
      ;
      ;
    };
  }
  /*  */


  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var necooData = window.necooPush(arguments);
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return necooData.pushReturn(function _anonymous_78() {
      var necooData = window.necooPush(arguments);
      activeInstance = prevActiveInstance;
    });
    ;
    ;
  }

  function initLifecycle(vm) {
    var necooData = window.necooPush(arguments);
    var options = vm.$options; // locate first non-abstract parent

    var parent = options.parent;

    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }

      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    var necooData = window.necooPush(arguments);

    Vue.prototype._update = function _anonymous_79(vnode, hydrating) {
      var necooData = window.necooPush(arguments);
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.

      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
        /* removeOnly */
        );
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }

      restoreActiveInstance(); // update __vue__ reference

      if (prevEl) {
        prevEl.__vue__ = null;
      }

      if (vm.$el) {
        vm.$el.__vue__ = vm;
      } // if parent is an HOC, update its $el as well


      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      } // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.

    };

    Vue.prototype.$forceUpdate = function _anonymous_80() {
      var necooData = window.necooPush(arguments);
      var vm = this;

      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function _anonymous_81() {
      var necooData = window.necooPush(arguments);
      var vm = this;

      if (vm._isBeingDestroyed) {
        return;
      }

      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true; // remove self from parent

      var parent = vm.$parent;

      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      } // teardown watchers


      if (vm._watcher) {
        vm._watcher.teardown();
      }

      var i = vm._watchers.length;

      while (i--) {
        vm._watchers[i].teardown();
      } // remove reference from data ob
      // frozen object may not have observer.


      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      } // call the last hook...


      vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

      vm.__patch__(vm._vnode, null); // fire destroyed hook


      callHook(vm, 'destroyed'); // turn off all instance listeners.

      vm.$off(); // remove __vue__ reference

      if (vm.$el) {
        vm.$el.__vue__ = null;
      } // release circular reference (#6759)


      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    var necooData = window.necooPush(arguments);
    vm.$el = el;

    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }

    callHook(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */

    if (config.performance && mark) {
      updateComponent = function _anonymous_82() {
        var necooData = window.necooPush(arguments);
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;
        mark(startTag);

        var vnode = vm._render();

        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);
        mark(startTag);

        vm._update(vnode, hydrating);

        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function _anonymous_83() {
        var necooData = window.necooPush(arguments);

        vm._update(vm._render(), hydrating);
      };
    } // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined


    new Watcher(vm, updateComponent, noop, {
      before: function before() {
        var necooData = window.necooPush(arguments);

        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true
    /* isRenderWatcher */
    );
    hydrating = false; // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook

    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }

    return necooData.pushReturn(vm);
    ;
    ;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    var necooData = window.necooPush(arguments);
    {
      isUpdatingChildComponent = true;
    } // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.

    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.

    var needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }

    vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render

    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject; // update props

    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];

      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?

        props[key] = validateProp(key, propOptions, propsData, vm);
      }

      toggleObserving(true); // keep a copy of raw propsData

      vm.$options.propsData = propsData;
    } // update listeners


    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    var necooData = window.necooPush(arguments);

    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return necooData.pushReturn(true);
        ;
        ;
      }
    }

    return necooData.pushReturn(false);
    ;
    ;
  }

  function activateChildComponent(vm, direct) {
    var necooData = window.necooPush(arguments);

    if (direct) {
      vm._directInactive = false;

      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }

    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;

      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    var necooData = window.necooPush(arguments);

    if (direct) {
      vm._directInactive = true;

      if (isInInactiveTree(vm)) {
        return;
      }
    }

    if (!vm._inactive) {
      vm._inactive = true;

      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    var necooData = window.necooPush(arguments); // #7573 disable dep collection when invoking lifecycle hooks

    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";

    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }

    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }

    popTarget();
  }
  /*  */


  var MAX_UPDATE_COUNT = 100;
  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;
  /**
   * Reset the scheduler's state.
   */

  function resetSchedulerState() {
    var necooData = window.necooPush(arguments);
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  } // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.


  var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

  var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)

  if (inBrowser && !isIE) {
    var performance = window.performance;

    if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function _anonymous_84() {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(performance.now());
        ;
        ;
      };
    }
  }
  /**
   * Flush both queues and run the watchers.
   */


  function flushSchedulerQueue() {
    var necooData = window.necooPush(arguments);
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id; // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.

    queue.sort(function _anonymous_85(a, b) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(a.id - b.id);
      ;
      ;
    }); // do not cache length because more watchers might be pushed
    // as we run existing watchers

    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];

      if (watcher.before) {
        watcher.before();
      }

      id = watcher.id;
      has[id] = null;
      watcher.run(); // in dev build, check and stop circular updates.

      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;

        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    } // keep copies of post queues before resetting state


    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState(); // call component updated and activated hooks

    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue); // devtool hook

    /* istanbul ignore if */

    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var necooData = window.necooPush(arguments);
    var i = queue.length;

    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;

      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }
  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */


  function queueActivatedComponent(vm) {
    var necooData = window.necooPush(arguments); // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)

    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    var necooData = window.necooPush(arguments);

    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true
      /* true */
      );
    }
  }
  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */


  function queueWatcher(watcher) {
    var necooData = window.necooPush(arguments);
    var id = watcher.id;

    if (has[id] == null) {
      has[id] = true;

      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;

        while (i > index && queue[i].id > watcher.id) {
          i--;
        }

        queue.splice(i + 1, 0, watcher);
      } // queue the flush


      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return;
        }

        nextTick(flushSchedulerQueue);
      }
    }
  }
  /*  */


  var uid$2 = 0;
  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */

  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    var necooData = window.necooPush(arguments);
    this.vm = vm;

    if (isRenderWatcher) {
      vm._watcher = this;
    }

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid$2; // uid for batching

    this.active = true;
    this.dirty = this.lazy; // for lazy watchers

    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString(); // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);

      if (!this.getter) {
        this.getter = noop;
        warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }

    this.value = this.lazy ? undefined : this.get();
  };
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  Watcher.prototype.get = function get() {
    var necooData = window.necooPush(arguments);
    pushTarget(this);
    var value;
    var vm = this.vm;

    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }

      popTarget();
      this.cleanupDeps();
    }

    return necooData.pushReturn(value);
    ;
    ;
  };
  /**
   * Add a dependency to this directive.
   */


  Watcher.prototype.addDep = function addDep(dep) {
    var necooData = window.necooPush(arguments);
    var id = dep.id;

    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);

      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };
  /**
   * Clean up for dependency collection.
   */


  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var necooData = window.necooPush(arguments);
    var i = this.deps.length;

    while (i--) {
      var dep = this.deps[i];

      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }

    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */


  Watcher.prototype.update = function update() {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore else */

    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };
  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */


  Watcher.prototype.run = function run() {
    var necooData = window.necooPush(arguments);

    if (this.active) {
      var value = this.get();

      if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;

        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };
  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */


  Watcher.prototype.evaluate = function evaluate() {
    var necooData = window.necooPush(arguments);
    this.value = this.get();
    this.dirty = false;
  };
  /**
   * Depend on all deps collected by this watcher.
   */


  Watcher.prototype.depend = function depend() {
    var necooData = window.necooPush(arguments);
    var i = this.deps.length;

    while (i--) {
      this.deps[i].depend();
    }
  };
  /**
   * Remove self from all dependencies' subscriber list.
   */


  Watcher.prototype.teardown = function teardown() {
    var necooData = window.necooPush(arguments);

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }

      var i = this.deps.length;

      while (i--) {
        this.deps[i].removeSub(this);
      }

      this.active = false;
    }
  };
  /*  */


  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    var necooData = window.necooPush(arguments);

    sharedPropertyDefinition.get = function proxyGetter() {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(this[sourceKey][key]);
      ;
      ;
    };

    sharedPropertyDefinition.set = function proxySetter(val) {
      var necooData = window.necooPush(arguments);
      this[sourceKey][key] = val;
    };

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    var necooData = window.necooPush(arguments);
    vm._watchers = [];
    var opts = vm.$options;

    if (opts.props) {
      initProps(vm, opts.props);
    }

    if (opts.methods) {
      initMethods(vm, opts.methods);
    }

    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true
      /* asRootData */
      );
    }

    if (opts.computed) {
      initComputed(vm, opts.computed);
    }

    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var necooData = window.necooPush(arguments);
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.

    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent; // root instance props should be converted

    if (!isRoot) {
      toggleObserving(false);
    }

    var loop = function _anonymous_86(key) {
      var necooData = window.necooPush(arguments);
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */

      {
        var hyphenatedKey = hyphenate(key);

        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }

        defineReactive$$1(props, key, value, function _anonymous_87() {
          var necooData = window.necooPush(arguments);

          if (!isRoot && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      } // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.

      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop(key);

    toggleObserving(true);
  }

  function initData(vm) {
    var necooData = window.necooPush(arguments);
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

    if (!isPlainObject(data)) {
      data = {};
      warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    } // proxy data on instance


    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;

    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }

      if (props && hasOwn(props, key)) {
        warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    } // observe data


    observe(data, true
    /* asRootData */
    );
  }

  function getData(data, vm) {
    var necooData = window.necooPush(arguments); // #7573 disable dep collection when invoking data getters

    pushTarget();

    try {
      return necooData.pushReturn(data.call(vm, vm));
      ;
      ;
    } catch (e) {
      handleError(e, vm, "data()");
      return necooData.pushReturn({});
      ;
      ;
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = {
    lazy: true
  };

  function initComputed(vm, computed) {
    var necooData = window.necooPush(arguments); // $flow-disable-line

    var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;

      if (getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      } // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.


      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var necooData = window.necooPush(arguments);
    var shouldCache = !isServerRendering();

    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }

    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function _anonymous_88() {
        var necooData = window.necooPush(arguments);
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(function computedGetter() {
      var necooData = window.necooPush(arguments);
      var watcher = this._computedWatchers && this._computedWatchers[key];

      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }

        if (Dep.target) {
          watcher.depend();
        }

        return necooData.pushReturn(watcher.value);
        ;
        ;
      }
    });
    ;
    ;
  }

  function createGetterInvoker(fn) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(function computedGetter() {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(fn.call(this, this));
      ;
      ;
    });
    ;
    ;
  }

  function initMethods(vm, methods) {
    var necooData = window.necooPush(arguments);
    var props = vm.$options.props;

    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
        }

        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }

        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    var necooData = window.necooPush(arguments);

    for (var key in watch) {
      var handler = watch[key];

      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    var necooData = window.necooPush(arguments);

    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }

    if (typeof handler === 'string') {
      handler = vm[handler];
    }

    return necooData.pushReturn(vm.$watch(expOrFn, handler, options));
    ;
    ;
  }

  function stateMixin(Vue) {
    var necooData = window.necooPush(arguments); // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.

    var dataDef = {};

    dataDef.get = function _anonymous_89() {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(this._data);
      ;
      ;
    };

    var propsDef = {};

    propsDef.get = function _anonymous_90() {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(this._props);
      ;
      ;
    };

    {
      dataDef.set = function _anonymous_91() {
        var necooData = window.necooPush(arguments);
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };

      propsDef.set = function _anonymous_92() {
        var necooData = window.necooPush(arguments);
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function _anonymous_93(expOrFn, cb, options) {
      var necooData = window.necooPush(arguments);
      var vm = this;

      if (isPlainObject(cb)) {
        return necooData.pushReturn(createWatcher(vm, expOrFn, cb, options));
        ;
        ;
      }

      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);

      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
        }
      }

      return necooData.pushReturn(function unwatchFn() {
        var necooData = window.necooPush(arguments);
        watcher.teardown();
      });
      ;
      ;
    };
  }
  /*  */


  var uid$3 = 0;

  function initMixin(Vue) {
    var necooData = window.necooPush(arguments);

    Vue.prototype._init = function _anonymous_94(options) {
      var necooData = window.necooPush(arguments);
      var vm = this; // a uid

      vm._uid = uid$3++;
      var startTag, endTag;
      /* istanbul ignore if */

      if (config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      } // a flag to avoid this being observed


      vm._isVue = true; // merge options

      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */


      {
        initProxy(vm);
      } // expose real self

      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props

      initState(vm);
      initProvide(vm); // resolve provide after data/props

      callHook(vm, 'created');
      /* istanbul ignore if */

      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var necooData = window.necooPush(arguments);
    var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var necooData = window.necooPush(arguments);
    var options = Ctor.options;

    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;

      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

        var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }

        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    return necooData.pushReturn(options);
    ;
    ;
  }

  function resolveModifiedOptions(Ctor) {
    var necooData = window.necooPush(arguments);
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;

    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }

        modified[key] = latest[key];
      }
    }

    return necooData.pushReturn(modified);
    ;
    ;
  }

  function Vue(options) {
    var necooData = window.necooPush(arguments);

    if (!(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }

    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);
  /*  */

  function initUse(Vue) {
    var necooData = window.necooPush(arguments);

    Vue.use = function _anonymous_95(plugin) {
      var necooData = window.necooPush(arguments);
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

      if (installedPlugins.indexOf(plugin) > -1) {
        return necooData.pushReturn(this);
        ;
        ;
      } // additional parameters


      var args = toArray(arguments, 1);
      args.unshift(this);

      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }

      installedPlugins.push(plugin);
      return necooData.pushReturn(this);
      ;
      ;
    };
  }
  /*  */


  function initMixin$1(Vue) {
    var necooData = window.necooPush(arguments);

    Vue.mixin = function _anonymous_96(mixin) {
      var necooData = window.necooPush(arguments);
      this.options = mergeOptions(this.options, mixin);
      return necooData.pushReturn(this);
      ;
      ;
    };
  }
  /*  */


  function initExtend(Vue) {
    var necooData = window.necooPush(arguments);
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */

    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */

    Vue.extend = function _anonymous_97(extendOptions) {
      var necooData = window.necooPush(arguments);
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

      if (cachedCtors[SuperId]) {
        return necooData.pushReturn(cachedCtors[SuperId]);
        ;
        ;
      }

      var name = extendOptions.name || Super.options.name;

      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        var necooData = window.necooPush(arguments);

        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.

      if (Sub.options.props) {
        initProps$1(Sub);
      }

      if (Sub.options.computed) {
        initComputed$1(Sub);
      } // allow further extension/mixin/plugin usage


      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use; // create asset registers, so extended classes
      // can have their private assets too.

      ASSET_TYPES.forEach(function _anonymous_98(type) {
        var necooData = window.necooPush(arguments);
        Sub[type] = Super[type];
      }); // enable recursive self-lookup

      if (name) {
        Sub.options.components[name] = Sub;
      } // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.


      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options); // cache constructor

      cachedCtors[SuperId] = Sub;
      return necooData.pushReturn(Sub);
      ;
      ;
    };
  }

  function initProps$1(Comp) {
    var necooData = window.necooPush(arguments);
    var props = Comp.options.props;

    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var necooData = window.necooPush(arguments);
    var computed = Comp.options.computed;

    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }
  /*  */


  function initAssetRegisters(Vue) {
    var necooData = window.necooPush(arguments);
    /**
     * Create asset registration methods.
     */

    ASSET_TYPES.forEach(function _anonymous_99(type) {
      var necooData = window.necooPush(arguments);

      Vue[type] = function _anonymous_100(id, definition) {
        var necooData = window.necooPush(arguments);

        if (!definition) {
          return necooData.pushReturn(this.options[type + 's'][id]);
          ;
          ;
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }

          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }

          if (type === 'directive' && typeof definition === 'function') {
            definition = {
              bind: definition,
              update: definition
            };
          }

          this.options[type + 's'][id] = definition;
          return necooData.pushReturn(definition);
          ;
          ;
        }
      };
    });
  }
  /*  */


  function getComponentName(opts) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(opts && (opts.Ctor.options.name || opts.tag));
    ;
    ;
  }

  function matches(pattern, name) {
    var necooData = window.necooPush(arguments);

    if (Array.isArray(pattern)) {
      return necooData.pushReturn(pattern.indexOf(name) > -1);
      ;
      ;
    } else if (typeof pattern === 'string') {
      return necooData.pushReturn(pattern.split(',').indexOf(name) > -1);
      ;
      ;
    } else if (isRegExp(pattern)) {
      return necooData.pushReturn(pattern.test(name));
      ;
      ;
    }
    /* istanbul ignore next */


    return necooData.pushReturn(false);
    ;
    ;
  }

  function pruneCache(keepAliveInstance, filter) {
    var necooData = window.necooPush(arguments);
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;

    for (var key in cache) {
      var cachedNode = cache[key];

      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);

        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var necooData = window.necooPush(arguments);
    var cached$$1 = cache[key];

    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }

    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];
  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },
    created: function created() {
      var necooData = window.necooPush(arguments);
      this.cache = Object.create(null);
      this.keys = [];
    },
    destroyed: function destroyed() {
      var necooData = window.necooPush(arguments);

      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },
    mounted: function mounted() {
      var necooData = window.necooPush(arguments);
      var this$1 = this;
      this.$watch('include', function _anonymous_101(val) {
        var necooData = window.necooPush(arguments);
        pruneCache(this$1, function _anonymous_102(name) {
          var necooData = window.necooPush(arguments);
          return necooData.pushReturn(matches(val, name));
          ;
          ;
        });
      });
      this.$watch('exclude', function _anonymous_103(val) {
        var necooData = window.necooPush(arguments);
        pruneCache(this$1, function _anonymous_104(name) {
          var necooData = window.necooPush(arguments);
          return necooData.pushReturn(!matches(val, name));
          ;
          ;
        });
      });
    },
    render: function render() {
      var necooData = window.necooPush(arguments);
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;

      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;

        if ( // not included
        include && (!name || !matches(include, name)) || // excluded
        exclude && name && matches(exclude, name)) {
          return necooData.pushReturn(vnode);
          ;
          ;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance; // make current key freshest

          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key); // prune oldest entry

          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }

      return necooData.pushReturn(vnode || slot && slot[0]);
      ;
      ;
    }
  };
  var builtInComponents = {
    KeepAlive: KeepAlive
  };
  /*  */

  function initGlobalAPI(Vue) {
    var necooData = window.necooPush(arguments); // config

    var configDef = {};

    configDef.get = function _anonymous_105() {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(config);
      ;
      ;
    };

    {
      configDef.set = function _anonymous_106() {
        var necooData = window.necooPush(arguments);
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.

    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick; // 2.6 explicit observable API

    Vue.observable = function _anonymous_107(obj) {
      var necooData = window.necooPush(arguments);
      observe(obj);
      return necooData.pushReturn(obj);
      ;
      ;
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function _anonymous_108(type) {
      var necooData = window.necooPush(arguments);
      Vue.options[type + 's'] = Object.create(null);
    }); // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.

    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);
  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });
  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      var necooData = window.necooPush(arguments);
      /* istanbul ignore next */

      return necooData.pushReturn(this.$vnode && this.$vnode.ssrContext);
      ;
      ;
    }
  }); // expose FunctionalRenderContext for ssr runtime helper installation

  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });
  Vue.version = '2.6.10';
  /*  */
  // these are reserved for web because they are directly compiled away
  // during template compilation

  var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

  var acceptValue = makeMap('input,textarea,option,select,progress');

  var mustUseProp = function _anonymous_109(tag, type, attr) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video');
    ;
    ;
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function _anonymous_110(key, value) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true');
    ;
    ;
  };

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function _anonymous_111(name) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(name.charAt(5) === ':' && name.slice(0, 5) === 'xlink');
    ;
    ;
  };

  var getXlinkProp = function _anonymous_112(name) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(isXlink(name) ? name.slice(6, name.length) : '');
    ;
    ;
  };

  var isFalsyAttrValue = function _anonymous_113(val) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(val == null || val === false);
    ;
    ;
  };
  /*  */


  function genClassForVnode(vnode) {
    var necooData = window.necooPush(arguments);
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;

    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }

    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }

    return necooData.pushReturn(renderClass(data.staticClass, data.class));
    ;
    ;
  }

  function mergeClassData(child, parent) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn({
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    });
    ;
    ;
  }

  function renderClass(staticClass, dynamicClass) {
    var necooData = window.necooPush(arguments);

    if (isDef(staticClass) || isDef(dynamicClass)) {
      return necooData.pushReturn(concat(staticClass, stringifyClass(dynamicClass)));
      ;
      ;
    }
    /* istanbul ignore next */


    return necooData.pushReturn('');
    ;
    ;
  }

  function concat(a, b) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(a ? b ? a + ' ' + b : a : b || '');
    ;
    ;
  }

  function stringifyClass(value) {
    var necooData = window.necooPush(arguments);

    if (Array.isArray(value)) {
      return necooData.pushReturn(stringifyArray(value));
      ;
      ;
    }

    if (isObject(value)) {
      return necooData.pushReturn(stringifyObject(value));
      ;
      ;
    }

    if (typeof value === 'string') {
      return necooData.pushReturn(val);
      ;
      ;
      ue;
    }
    /* istanbul ignore next */


    return necooData.pushReturn('');
    ;
    ;
  }

  function stringifyArray(value) {
    var necooData = window.necooPush(arguments);
    var res = '';
    var stringified;

    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }

        res += stringified;
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }

  function stringifyObject(value) {
    var necooData = window.necooPush(arguments);
    var res = '';

    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }

        res += key;
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }
  /*  */


  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };
  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.

  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function _anonymous_114(tag) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(tag === 'pre');
    ;
    ;
  };

  var isReservedTag = function _anonymous_115(tag) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(isHTMLTag(tag) || isSVG(tag));
    ;
    ;
  };

  function getTagNamespace(tag) {
    var necooData = window.necooPush(arguments);

    if (isSVG(tag)) {
      return necooData.pushReturn('svg');
      ;
      ;
    } // basic support for MathML
    // note it doesn't support other MathML elements being component roots


    if (tag === 'math') {
      return necooData.pushReturn('math');
      ;
      ;
    }
  }

  var unknownElementCache = Object.create(null);

  function isUnknownElement(tag) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore if */

    if (!inBrowser) {
      return necooData.pushReturn(true);
      ;
      ;
    }

    if (isReservedTag(tag)) {
      return necooData.pushReturn(false);
      ;
      ;
    }

    tag = tag.toLowerCase();
    /* istanbul ignore if */

    if (unknownElementCache[tag] != null) {
      return necooData.pushReturn(unknownElementCache[tag]);
      ;
      ;
    }

    var el = document.createElement(tag);

    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return necooData.pushReturn(unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement);
      ;
      ;
    } else {
      return necooData.pushReturn(unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
      ;
      ;
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');
  /*  */

  /**
   * Query an element selector if it's not an element already.
   */

  function query(el) {
    var necooData = window.necooPush(arguments);

    if (typeof el === 'string') {
      var selected = document.querySelector(el);

      if (!selected) {
        warn('Cannot find element: ' + el);
        return necooData.pushReturn(document.createElement('div'));
        ;
        ;
      }

      return necooData.pushReturn(selected);
      ;
      ;
    } else {
      return necooData.pushReturn(el);
      ;
      ;
    }
  }
  /*  */


  function createElement$1(tagName, vnode) {
    var necooData = window.necooPush(arguments);
    var elm = document.createElement(tagName);

    if (tagName !== 'select') {
      return necooData.pushReturn(elm);
      ;
      ;
    } // false or null will remove the attribute but undefined will not


    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }

    return necooData.pushReturn(elm);
    ;
    ;
  }

  function createElementNS(namespace, tagName) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(document.createElementNS(namespaceMap[namespace], tagName));
    ;
    ;
  }

  function createTextNode(text) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(document.createTextNode(text));
    ;
    ;
  }

  function createComment(text) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(document.createComment(text));
    ;
    ;
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    var necooData = window.necooPush(arguments);
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    var necooData = window.necooPush(arguments);
    node.removeChild(child);
  }

  function appendChild(node, child) {
    var necooData = window.necooPush(arguments);
    node.appendChild(child);
  }

  function parentNode(node) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(node.parentNode);
    ;
    ;
  }

  function nextSibling(node) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(node.nextSibling);
    ;
    ;
  }

  function tagName(node) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(node.tagName);
    ;
    ;
  }

  function setTextContent(node, text) {
    var necooData = window.necooPush(arguments);
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    var necooData = window.necooPush(arguments);
    node.setAttribute(scopeId, '');
  }

  var nodeOps =
  /*#__PURE__*/
  Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });
  /*  */

  var ref = {
    create: function create(_, vnode) {
      var necooData = window.necooPush(arguments);
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      var necooData = window.necooPush(arguments);

      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      var necooData = window.necooPush(arguments);
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var necooData = window.necooPush(arguments);
    var key = vnode.data.ref;

    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;

    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }
  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */


  var emptyNode = new VNode('', {}, []);
  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error)));
    ;
    ;
  }

  function sameInputType(a, b) {
    var necooData = window.necooPush(arguments);

    if (a.tag !== 'input') {
      return necooData.pushReturn(true);
      ;
      ;
    }

    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return necooData.pushReturn(typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB));
    ;
    ;
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var necooData = window.necooPush(arguments);
    var i, key;
    var map = {};

    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;

      if (isDef(key)) {
        map[key] = i;
      }
    }

    return necooData.pushReturn(map);
    ;
    ;
  }

  function createPatchFunction(backend) {
    var necooData = window.necooPush(arguments);
    var i, j;
    var cbs = {};
    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];

      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm));
      ;
      ;
    }

    function createRmCb(childElm, listeners) {
      var necooData = window.necooPush(arguments);

      function remove$$1() {
        var necooData = window.necooPush(arguments);

        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }

      remove$$1.listeners = listeners;
      return necooData.pushReturn(remove$$1);
      ;
      ;
    }

    function removeNode(el) {
      var necooData = window.necooPush(arguments);
      var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(!inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function _anonymous_116(ignore) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag);
        ;
        ;
      })) && config.isUnknownElement(vnode.tag));
      ;
      ;
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      var necooData = window.necooPush(arguments);

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check

      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;

      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }

          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);
        /* istanbul ignore if */

        {
          createChildren(vnode, children, insertedVnodeQueue);

          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }

          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var necooData = window.necooPush(arguments);
      var i = vnode.data;

      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false
          /* hydrating */
          );
        } // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.


        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);

          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }

          return necooData.pushReturn(true);
          ;
          ;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      var necooData = window.necooPush(arguments);

      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }

      vnode.elm = vnode.componentInstance.$el;

      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode); // make sure to invoke the insert hook

        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var necooData = window.necooPush(arguments);
      var i; // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.

      var innerNode = vnode;

      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;

        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }

          insertedVnodeQueue.push(innerNode);
          break;
        }
      } // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself


      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      var necooData = window.necooPush(arguments);

      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      var necooData = window.necooPush(arguments);

      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }

        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      var necooData = window.necooPush(arguments);

      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }

      return necooData.pushReturn(isDef(vnode.tag));
      ;
      ;
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      var necooData = window.necooPush(arguments);

      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }

      i = vnode.data.hook; // Reuse variable

      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }

        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.


    function setScope(vnode) {
      var necooData = window.necooPush(arguments);
      var i;

      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;

        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }

          ancestor = ancestor.parent;
        }
      } // for slot content they should also get the scopeId from the host instance.


      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      var necooData = window.necooPush(arguments);

      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var necooData = window.necooPush(arguments);
      var i, j;
      var data = vnode.data;

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }

        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }

      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      var necooData = window.necooPush(arguments);

      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];

        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      var necooData = window.necooPush(arguments);

      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;

        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        } // recursively invoke hooks on child component root node


        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }

        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }

        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var necooData = window.necooPush(arguments);
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions

      var canMove = !removeOnly;
      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }

          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];

            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }

      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var necooData = window.necooPush(arguments);
      var seenKeys = {};

      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;

        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      var necooData = window.necooPush(arguments);

      for (var i = start; i < end; i++) {
        var c = oldCh[i];

        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
      var necooData = window.necooPush(arguments);

      if (oldVnode === vnode) {
        return;
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }

        return;
      } // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.


      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;

      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;

      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }

        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }

      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }

          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }

          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      var necooData = window.necooPush(arguments); // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted

      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).

    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var necooData = window.necooPush(arguments);
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return necooData.pushReturn(true);
        ;
        ;
      } // assert node match


      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return necooData.pushReturn(false);
          ;
          ;
        }
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true
          /* hydrating */
          );
        }

        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return necooData.pushReturn(true);
          ;
          ;
        }
      }

      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }

                return necooData.pushReturn(false);
                ;
                ;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;

              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }

                childNode = childNode.nextSibling;
              } // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.


              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }

                return necooData.pushReturn(false);
                ;
                ;
              }
            }
          }
        }

        if (isDef(data)) {
          var fullInvoke = false;

          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }

          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }

      return necooData.pushReturn(true);
      ;
      ;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      var necooData = window.necooPush(arguments);

      if (isDef(vnode.tag)) {
        return necooData.pushReturn(vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase()));
        ;
        ;
      } else {
        return necooData.pushReturn(node.nodeType === (vnode.isComment ? 8 : 3));
        ;
        ;
      }
    }

    return necooData.pushReturn(function patch(oldVnode, vnode, hydrating, removeOnly) {
      var necooData = window.necooPush(arguments);

      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }

        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);

        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }

            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return necooData.pushReturn(oldVnode);
                ;
                ;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            } // either not server-rendered, or hydration failed.
            // create an empty node and replace it


            oldVnode = emptyNodeAt(oldVnode);
          } // replacing existing element


          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm); // create new node

          createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);

            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }

              ancestor.elm = vnode.elm;

              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                } // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.


                var insert = ancestor.data.hook.insert;

                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }

              ancestor = ancestor.parent;
            }
          } // destroy old node


          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return necooData.pushReturn(vnode.elm);
      ;
      ;
    });
    ;
    ;
  }
  /*  */


  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      var necooData = window.necooPush(arguments);
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    var necooData = window.necooPush(arguments);

    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var necooData = window.necooPush(arguments);
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;

    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];

      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);

        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);

        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function _anonymous_117() {
        var necooData = window.necooPush(arguments);

        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };

      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function _anonymous_118() {
        var necooData = window.necooPush(arguments);

        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var necooData = window.necooPush(arguments);
    var res = Object.create(null);

    if (!dirs) {
      // $flow-disable-line
      return necooData.pushReturn(res);
      ;
      ;
    }

    var i, dir;

    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];

      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }

      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    } // $flow-disable-line


    return necooData.pushReturn(res);
    ;
    ;
  }

  function getRawDirName(dir) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.'));
    ;
    ;
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var necooData = window.necooPush(arguments);
    var fn = dir.def && dir.def[hook];

    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];
  /*  */

  function updateAttrs(oldVnode, vnode) {
    var necooData = window.necooPush(arguments);
    var opts = vnode.componentOptions;

    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }

    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }

    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];

      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    } // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max

    /* istanbul ignore if */


    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }

    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    var necooData = window.necooPush(arguments);

    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    var necooData = window.necooPush(arguments);

    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.

      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
        var blocker = function _anonymous_119(e) {
          var necooData = window.necooPush(arguments);
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };

        el.addEventListener('input', blocker); // $flow-disable-line

        el.__ieph = true;
        /* IE placeholder patched */
      }

      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };
  /*  */

  function updateClass(oldVnode, vnode) {
    var necooData = window.necooPush(arguments);
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode); // handle transition classes

    var transitionClass = el._transitionClasses;

    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    } // set the class


    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };
  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var necooData = window.necooPush(arguments);
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);

      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;
            break;
          // "

          case 0x27:
            inSingle = true;
            break;
          // '

          case 0x60:
            inTemplateString = true;
            break;
          // `

          case 0x28:
            paren++;
            break;
          // (

          case 0x29:
            paren--;
            break;
          // )

          case 0x5B:
            square++;
            break;
          // [

          case 0x5D:
            square--;
            break;
          // ]

          case 0x7B:
            curly++;
            break;
          // {

          case 0x7D:
            curly--;
            break;
          // }
        }

        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0; // find first non-whitespace prev char

          for (; j >= 0; j--) {
            p = exp.charAt(j);

            if (p !== ' ') {
              break;
            }
          }

          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      var necooData = window.necooPush(arguments);
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return necooData.pushReturn(expression);
    ;
    ;
  }

  function wrapFilter(exp, filter) {
    var necooData = window.necooPush(arguments);
    var i = filter.indexOf('(');

    if (i < 0) {
      // _f: resolveFilter
      return necooData.pushReturn("_f(\"" + filter + "\")(" + exp + ")");
      ;
      ;
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return necooData.pushReturn("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args));
      ;
      ;
    }
  }
  /*  */

  /* eslint-disable no-unused-vars */


  function baseWarn(msg, range) {
    var necooData = window.necooPush(arguments);
    console.error("[Vue compiler]: " + msg);
  }
  /* eslint-enable no-unused-vars */


  function pluckModuleFunction(modules, key) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(modules ? modules.map(function _anonymous_120(m) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(m[key]);
      ;
      ;
    }).filter(function _anonymous_121(_) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(_);
      ;
      ;
    }) : []);
    ;
    ;
  }

  function addProp(el, name, value, range, dynamic) {
    var necooData = window.necooPush(arguments);
    (el.props || (el.props = [])).push(rangeSetItem({
      name: name,
      value: value,
      dynamic: dynamic
    }, range));
    el.plain = false;
  }

  function addAttr(el, name, value, range, dynamic) {
    var necooData = window.necooPush(arguments);
    var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({
      name: name,
      value: value,
      dynamic: dynamic
    }, range));
    el.plain = false;
  } // add a raw attr (use this in preTransforms)


  function addRawAttr(el, name, value, range) {
    var necooData = window.necooPush(arguments);
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({
      name: name,
      value: value
    }, range));
  }

  function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    var necooData = window.necooPush(arguments);
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker(symbol, name, dynamic) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name);
    ;
    ; // mark the event as captured
  }

  function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    var necooData = window.necooPush(arguments);
    modifiers = modifiers || emptyObject; // warn prevent and passive modifier

    /* istanbul ignore if */

    if (warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
    } // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.


    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    } // check capture modifier


    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }

    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */


    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;

    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({
      value: value.trim(),
      dynamic: dynamic
    }, range);

    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */

    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr(el, name) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name]);
    ;
    ;
  }

  function getBindingAttr(el, name, getStatic) {
    var necooData = window.necooPush(arguments);
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);

    if (dynamicValue != null) {
      return necooData.pushReturn(parseFilters(dynamicValue));
      ;
      ;
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);

      if (staticValue != null) {
        return necooData.pushReturn(JSON.stringify(staticValue));
        ;
        ;
      }
    }
  } // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.


  function getAndRemoveAttr(el, name, removeFromMap) {
    var necooData = window.necooPush(arguments);
    var val;

    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }

    if (removeFromMap) {
      delete el.attrsMap[name];
    }

    return val;
  }

  function getAndRemoveAttrByRegex(el, name) {
    var necooData = window.necooPush(arguments);
    var list = el.attrsList;

    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];

      if (name.test(attr.name)) {
        list.splice(i, 1);
        return necooData.pushReturn(attr);
        ;
        ;
      }
    }
  }

  function rangeSetItem(item, range) {
    var necooData = window.necooPush(arguments);

    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }

      if (range.end != null) {
        item.end = range.end;
      }
    }

    return necooData.pushReturn(item);
    ;
    ;
  }
  /*  */

  /**
   * Cross-platform code generation for component v-model
   */


  function genComponentModel(el, value, modifiers) {
    var necooData = window.necooPush(arguments);
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;
    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;

    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }

    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var assignment = genAssignmentCode(value, valueExpression);
    el.model = {
      value: "(" + value + ")",
      expression: JSON.stringify(value),
      callback: "function _anonymous_122(" + baseValueExpression + ") { window.necooPush(arguments);" + assignment + "}"
    };
  }
  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */


  function genAssignmentCode(value, assignment) {
    var necooData = window.necooPush(arguments);
    var res = parseModel(value);

    if (res.key === null) {
      return necooData.pushReturn(value + "=" + assignment);
      ;
      ;
    } else {
      return necooData.pushReturn("$set(" + res.exp + ", " + res.key + ", " + assignment + ")");
      ;
      ;
    }
  }
  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */


  var len, str, chr, index$1, expressionPos, expressionEndPos;

  function parseModel(val) {
    var necooData = window.necooPush(arguments); // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)

    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');

      if (index$1 > -1) {
        return necooData.pushReturn({
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        });
        ;
        ;
      } else {
        return necooData.pushReturn({
          exp: val,
          key: null
        });
        ;
        ;
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */

      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return necooData.pushReturn({
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    });
    ;
    ;
  }

  function next() {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(str.charCodeAt(++index$1));
    ;
    ;
  }

  function eof() {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(index$1 >= len);
    ;
    ;
  }

  function isStringStart(chr) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(chr === 0x22 || chr === 0x27);
    ;
    ;
  }

  function parseBracket(chr) {
    var necooData = window.necooPush(arguments);
    var inBracket = 1;
    expressionPos = index$1;

    while (!eof()) {
      chr = next();

      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }

      if (chr === 0x5B) {
        inBracket++;
      }

      if (chr === 0x5D) {
        inBracket--;
      }

      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var necooData = window.necooPush(arguments);
    var stringQuote = chr;

    while (!eof()) {
      chr = next();

      if (chr === stringQuote) {
        break;
      }
    }
  }
  /*  */


  var warn$1; // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.

  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    var necooData = window.necooPush(arguments);
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;
    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

      return necooData.pushReturn(false);
      ;
      ;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

      return necooData.pushReturn(false);
      ;
      ;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    } // ensure runtime directive metadata


    return necooData.pushReturn(true);
    ;
    ;
  }

  function genCheckboxModel(el, value, modifiers) {
    var necooData = window.necooPush(arguments);
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var necooData = window.necooPush(arguments);
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var necooData = window.necooPush(arguments);
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function _anonymous_123(o){return o.selected})" + ".map(function _anonymous_124(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";
    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var necooData = window.necooPush(arguments);
    var type = el.attrsMap.type; // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type

    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];

      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
      }
    }
    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
    var valueExpression = '$event.target.value';

    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }

    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);

    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);

    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }
  /*  */
  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.


  function normalizeEvents(on) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore if */

    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    } // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4

    /* istanbul ignore if */


    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1(event, handler, capture) {
    var necooData = window.necooPush(arguments);
    var _target = target$1; // save current target element in closure

    return necooData.pushReturn(function onceHandler() {
      var necooData = window.necooPush(arguments);
      var res = handler.apply(null, arguments);

      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    });
    ;
    ;
  } // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.


  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1(name, handler, capture, passive) {
    var necooData = window.necooPush(arguments); // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.

    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;

      handler = original._wrapper = function _anonymous_125(e) {
        var necooData = window.necooPush(arguments);

        if ( // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget || // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document) {
          return necooData.pushReturn(original.apply(this, arguments));
          ;
          ;
        }
      };
    }

    target$1.addEventListener(name, handler, supportsPassive ? {
      capture: capture,
      passive: passive
    } : capture);
  }

  function remove$2(name, handler, capture, _target) {
    var necooData = window.necooPush(arguments);

    (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    var necooData = window.necooPush(arguments);

    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }

    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };
  /*  */

  var svgContainer;

  function updateDOMProps(oldVnode, vnode) {
    var necooData = window.necooPush(arguments);

    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }

    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key]; // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)

      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }

        if (cur === oldProps[key]) {
          continue;
        } // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property


        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur; // avoid resetting cursor position when value is the same

        var strCur = isUndef(cur) ? '' : String(cur);

        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;

        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }

        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if ( // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  } // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(!elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal)));
    ;
    ;
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    var necooData = window.necooPush(arguments); // return necooData.pushReturn(true);;; when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value

    var notInFocus = true; // #6157
    // work around IE bug when accessing document.activeElement in an iframe

    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}

    return necooData.pushReturn(notInFocus && elm.value !== checkVal);
    ;
    ;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var necooData = window.necooPush(arguments);
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime

    if (isDef(modifiers)) {
      if (modifiers.number) {
        return necooData.pushReturn(toNumber(value) !== toNumber(newVal));
        ;
        ;
      }

      if (modifiers.trim) {
        return necooData.pushReturn(value.trim() !== newVal.trim());
        ;
        ;
      }
    }

    return necooData.pushReturn(value !== newVal);
    ;
    ;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };
  /*  */

  var parseStyleText = cached(function _anonymous_126(cssText) {
    var necooData = window.necooPush(arguments);
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function _anonymous_127(item) {
      var necooData = window.necooPush(arguments);

      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return necooData.pushReturn(res);
    ;
    ;
  }); // merge static and dynamic style data on the same vnode

  function normalizeStyleData(data) {
    var necooData = window.necooPush(arguments);
    var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it

    return necooData.pushReturn(data.staticStyle ? extend(data.staticStyle, style) : style);
    ;
    ;
  } // normalize possible array / string values into Object


  function normalizeStyleBinding(bindingStyle) {
    var necooData = window.necooPush(arguments);

    if (Array.isArray(bindingStyle)) {
      return necooData.pushReturn(toObject(bindingStyle));
      ;
      ;
    }

    if (typeof bindingStyle === 'string') {
      return necooData.pushReturn(parseStyleText(bindingStyle));
      ;
      ;
    }

    return necooData.pushReturn(bindingStyle);
    ;
    ;
  }
  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */


  function getStyle(vnode, checkChild) {
    var necooData = window.necooPush(arguments);
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;

      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;

        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;

    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }
  /*  */


  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;

  var setProp = function _anonymous_128(el, name, val) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore if */

    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);

      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];
  var emptyStyle;
  var normalize = cached(function _anonymous_129(prop) {
    var necooData = window.necooPush(arguments);
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);

    if (prop !== 'filter' && prop in emptyStyle) {
      return necooData.pushReturn(prop);
      ;
      ;
    }

    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;

      if (name in emptyStyle) {
        return necooData.pushReturn(name);
        ;
        ;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var necooData = window.necooPush(arguments);
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.

    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }

    for (name in newStyle) {
      cur = newStyle[name];

      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };
  /*  */

  var whitespaceRE = /\s+/;
  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */

  function addClass(el, cls) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore if */

    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function _anonymous_130(c) {
          var necooData = window.necooPush(arguments);
          return necooData.pushReturn(el.classList.add(c));
          ;
          ;
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";

      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }
  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */


  function removeClass(el, cls) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore if */

    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function _anonymous_131(c) {
          var necooData = window.necooPush(arguments);
          return necooData.pushReturn(el.classList.remove(c));
          ;
          ;
        });
      } else {
        el.classList.remove(cls);
      }

      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';

      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }

      cur = cur.trim();

      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }
  /*  */


  function resolveTransition(def$$1) {
    var necooData = window.necooPush(arguments);

    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */


    if (typeof def$$1 === 'object') {
      var res = {};

      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }

      extend(res, def$$1);
      return necooData.pushReturn(res);
      ;
      ;
    } else if (typeof def$$1 === 'string') {
      return necooData.pushReturn(autoCssTransition(def$$1));
      ;
      ;
    }
  }

  var autoCssTransition = cached(function _anonymous_132(name) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn({
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    });
    ;
    ;
  });
  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation'; // Transition property/event sniffing

  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';

  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }

    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  } // binding to window is necessary to make hot reload work in IE in strict mode


  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
  /* istanbul ignore next */
  function _anonymous_133(fn) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(fn());
    ;
    ;
  };

  function nextFrame(fn) {
    var necooData = window.necooPush(arguments);
    raf(function _anonymous_134() {
      var necooData = window.necooPush(arguments);
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var necooData = window.necooPush(arguments);
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    var necooData = window.necooPush(arguments);

    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }

    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var necooData = window.necooPush(arguments);
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;

    if (!type) {
      return necooData.pushReturn(cb());
      ;
      ;
    }

    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;

    var end = function _anonymous_135() {
      var necooData = window.necooPush(arguments);
      el.removeEventListener(event, onEnd);
      cb();
    };

    var onEnd = function _anonymous_136(e) {
      var necooData = window.necooPush(arguments);

      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };

    setTimeout(function _anonymous_137() {
      var necooData = window.necooPush(arguments);

      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var necooData = window.necooPush(arguments);
    var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */

    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }

    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return necooData.pushReturn({
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    });
    ;
    ;
  }

  function getTimeout(delays, durations) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore next */

    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return necooData.pushReturn(Math.max.apply(null, durations.map(function _anonymous_138(d, i) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(toMs(d) + toMs(delays[i]));
      ;
      ;
    })));
    ;
    ;
  } // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors


  function toMs(s) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(Number(s.slice(0, -1).replace(',', '.')) * 1000);
    ;
    ;
  }
  /*  */


  function enter(vnode, toggleDisplay) {
    var necooData = window.necooPush(arguments);
    var el = vnode.elm; // call leave callback now

    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;

      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data)) {
      return;
    }
    /* istanbul ignore if */


    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration; // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.

    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;

    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = el._enterCb = once(function _anonymous_139() {
      var necooData = window.necooPush(arguments);

      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }

        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }

      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function _anonymous_140() {
        var necooData = window.necooPush(arguments);
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];

        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }

        enterHook && enterHook(el, cb);
      });
    } // start enter transition


    beforeEnterHook && beforeEnterHook(el);

    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function _anonymous_141() {
        var necooData = window.necooPush(arguments);
        removeTransitionClass(el, startClass);

        if (!cb.cancelled) {
          addTransitionClass(el, toClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var necooData = window.necooPush(arguments);
    var el = vnode.elm; // call enter callback now

    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;

      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data) || el.nodeType !== 1) {
      return necooData.pushReturn(rm());
      ;
      ;
    }
    /* istanbul ignore if */


    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function _anonymous_142() {
      var necooData = window.necooPush(arguments);

      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }

      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }

        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }

      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      var necooData = window.necooPush(arguments); // the delayed leave may have already been cancelled

      if (cb.cancelled) {
        return;
      } // record leaving element


      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }

      beforeLeave && beforeLeave(el);

      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function _anonymous_143() {
          var necooData = window.necooPush(arguments);
          removeTransitionClass(el, leaveClass);

          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);

            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }

      leave && leave(el, cb);

      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  } // only used in dev mode


  function checkDuration(val, name, vnode) {
    var necooData = window.necooPush(arguments);

    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(typeof val === 'number' && !isNaN(val));
    ;
    ;
  }
  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function _anonymous_144(.length)
   */


  function getHookArgumentsLength(fn) {
    var necooData = window.necooPush(arguments);

    if (isUndef(fn)) {
      return necooData.pushReturn(false);
      ;
      ;
    }

    var invokerFns = fn.fns;

    if (isDef(invokerFns)) {
      // invoker
      return necooData.pushReturn(getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns));
      ;
      ;
    } else {
      return necooData.pushReturn((fn._length || fn.length) > 1);
      ;
      ;
    }
  }

  function _enter(_, vnode) {
    var necooData = window.necooPush(arguments);

    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      var necooData = window.necooPush(arguments);
      /* istanbul ignore else */

      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};
  var platformModules = [attrs, klass, events, domProps, style, transition];
  /*  */
  // the directive module should be applied last, after all
  // built-in modules have been applied.

  var modules = platformModules.concat(baseModules);
  var patch = createPatchFunction({
    nodeOps: nodeOps,
    modules: modules
  });
  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */

  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function _anonymous_145() {
      var necooData = window.necooPush(arguments);
      var el = document.activeElement;

      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      var necooData = window.necooPush(arguments);

      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function _anonymous_146() {
            var necooData = window.necooPush(arguments);
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }

        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;

        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.

          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */

          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      var necooData = window.necooPush(arguments);

      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.

        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);

        if (curOptions.some(function _anonymous_147(o, i) {
          var necooData = window.necooPush(arguments);
          return necooData.pushReturn(!looseEqual(o, prevOptions[i]));
          ;
          ;
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function _anonymous_148(v) {
            var necooData = window.necooPush(arguments);
            return necooData.pushReturn(hasNoMatchingOption(v, curOptions));
            ;
            ;
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    var necooData = window.necooPush(arguments);
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */

    if (isIE || isEdge) {
      setTimeout(function _anonymous_149() {
        var necooData = window.necooPush(arguments);
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var necooData = window.necooPush(arguments);
    var value = binding.value;
    var isMultiple = el.multiple;

    if (isMultiple && !Array.isArray(value)) {
      warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }

    var selected, option;

    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];

      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;

        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }

          return;
        }
      }
    }

    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(options.every(function _anonymous_150(o) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(!looseEqual(o, value));
      ;
      ;
    }));
    ;
    ;
  }

  function getValue(option) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn('_value' in option ? option._value : option.value);
    ;
    ;
  }

  function onCompositionStart(e) {
    var necooData = window.necooPush(arguments);
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    var necooData = window.necooPush(arguments); // prevent triggering an input event for no reason

    if (!e.target.composing) {
      return;
    }

    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var necooData = window.necooPush(arguments);
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }
  /*  */
  // recursively search for possible transition defined inside the component root


  function locateNode(vnode) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode);
    ;
    ;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var necooData = window.necooPush(arguments);
      var value = ref.value;
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function _anonymous_151() {
          var necooData = window.necooPush(arguments);
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },
    update: function update(el, ref, vnode) {
      var necooData = window.necooPush(arguments);
      var value = ref.value;
      var oldValue = ref.oldValue;
      /* istanbul ignore if */

      if (!value === !oldValue) {
        return;
      }

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;

      if (transition$$1) {
        vnode.data.show = true;

        if (value) {
          enter(vnode, function _anonymous_152() {
            var necooData = window.necooPush(arguments);
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function _anonymous_153() {
            var necooData = window.necooPush(arguments);
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },
    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      var necooData = window.necooPush(arguments);

      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };
  var platformDirectives = {
    model: directive,
    show: show
  };
  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  }; // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered

  function getRealChild(vnode) {
    var necooData = window.necooPush(arguments);
    var compOptions = vnode && vnode.componentOptions;

    if (compOptions && compOptions.Ctor.options.abstract) {
      return necooData.pushReturn(getRealChild(getFirstComponentChild(compOptions.children)));
      ;
      ;
    } else {
      return necooData.pushReturn(vnode);
      ;
      ;
    }
  }

  function extractTransitionData(comp) {
    var necooData = window.necooPush(arguments);
    var data = {};
    var options = comp.$options; // props

    for (var key in options.propsData) {
      data[key] = comp[key];
    } // events.
    // extract listeners and pass them directly to the transition methods


    var listeners = options._parentListeners;

    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }

    return necooData.pushReturn(data);
    ;
    ;
  }

  function placeholder(h, rawChild) {
    var necooData = window.necooPush(arguments);

    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return necooData.pushReturn(h('keep-alive', {
        props: rawChild.componentOptions.propsData
      }));
      ;
      ;
    }
  }

  function hasParentTransition(vnode) {
    var necooData = window.necooPush(arguments);

    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return necooData.pushReturn(true);
        ;
        ;
      }
    }
  }

  function isSameChild(child, oldChild) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(oldChild.key === child.key && oldChild.tag === child.tag);
    ;
    ;
  }

  var isNotTextNode = function _anonymous_154(c) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(c.tag || isAsyncPlaceholder(c));
    ;
    ;
  };

  var isVShowDirective = function _anonymous_155(d) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(d.name === 'show');
    ;
    ;
  };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,
    render: function render(h) {
      var necooData = window.necooPush(arguments);
      var this$1 = this;
      var children = this.$slots.default;

      if (!children) {
        return;
      } // filter out text nodes (possible whitespaces)


      children = children.filter(isNotTextNode);
      /* istanbul ignore if */

      if (!children.length) {
        return;
      } // warn multiple elements


      if (children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode; // warn invalid mode

      if (mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0]; // if this is a component root node and the component's
      // parent container node also has transition, skip.

      if (hasParentTransition(this.$vnode)) {
        return necooData.pushReturn(rawChild);
        ;
        ;
      } // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive


      var child = getRealChild(rawChild);
      /* istanbul ignore if */

      if (!child) {
        return necooData.pushReturn(rawChild);
        ;
        ;
      }

      if (this._leaving) {
        return necooData.pushReturn(placeholder(h, rawChild));
        ;
        ;
      } // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.


      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild); // mark v-show
      // so that the transition module can hand over the control to the directive

      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function _anonymous_156() {
            var necooData = window.necooPush(arguments);
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return necooData.pushReturn(placeholder(h, rawChild));
          ;
          ;
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return necooData.pushReturn(oldRawChild);
            ;
            ;
          }

          var delayedLeave;

          var performLeave = function _anonymous_157() {
            var necooData = window.necooPush(arguments);
            delayedLeave();
          };

          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function _anonymous_158(leave) {
            var necooData = window.necooPush(arguments);
            delayedLeave = leave;
          });
        }
      }

      return necooData.pushReturn(rawChild);
      ;
      ;
    }
  };
  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);
  delete props.mode;
  var TransitionGroup = {
    props: props,
    beforeMount: function beforeMount() {
      var necooData = window.necooPush(arguments);
      var this$1 = this;
      var update = this._update;

      this._update = function _anonymous_159(vnode, hydrating) {
        var necooData = window.necooPush(arguments);
        var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

        this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
        );

        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },
    render: function render(h) {
      var necooData = window.necooPush(arguments);
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];

        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;
            (c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];

        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();

          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }

        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return necooData.pushReturn(h(tag, null, children));
      ;
      ;
    },
    updated: function updated() {
      var necooData = window.necooPush(arguments);
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';

      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation); // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line

      this._reflow = document.body.offsetHeight;
      children.forEach(function _anonymous_160(c) {
        var necooData = window.necooPush(arguments);

        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            var necooData = window.necooPush(arguments);

            if (e && e.target !== el) {
              return;
            }

            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },
    methods: {
      hasMove: function hasMove(el, moveClass) {
        var necooData = window.necooPush(arguments);
        /* istanbul ignore if */

        if (!hasTransition) {
          return necooData.pushReturn(false);
          ;
          ;
        }
        /* istanbul ignore if */


        if (this._hasMove) {
          return necooData.pushReturn(this._hasMove);
          ;
          ;
        } // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.


        var clone = el.cloneNode();

        if (el._transitionClasses) {
          el._transitionClasses.forEach(function _anonymous_161(cls) {
            var necooData = window.necooPush(arguments);
            removeClass(clone, cls);
          });
        }

        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return necooData.pushReturn(this._hasMove = info.hasTransform);
        ;
        ;
      }
    }
  };

  function callPendingCbs(c) {
    var necooData = window.necooPush(arguments);
    /* istanbul ignore if */

    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */


    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    var necooData = window.necooPush(arguments);
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var necooData = window.necooPush(arguments);
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;

    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };
  /*  */
  // install platform specific utils

  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents); // install platform patch function

  Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

  Vue.prototype.$mount = function _anonymous_162(el, hydrating) {
    var necooData = window.necooPush(arguments);
    el = el && inBrowser ? query(el) : undefined;
    return necooData.pushReturn(mountComponent(this, el, hydrating));
    ;
    ;
  }; // devtools global hook

  /* istanbul ignore next */


  if (inBrowser) {
    setTimeout(function _anonymous_163() {
      var necooData = window.necooPush(arguments);

      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }

      if (config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }
  /*  */


  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var buildRegex = cached(function _anonymous_164(delimiters) {
    var necooData = window.necooPush(arguments);
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return necooData.pushReturn(new RegExp(open + '((?:.|\\n)+?)' + close, 'g'));
    ;
    ;
  });

  function parseText(text, delimiters) {
    var necooData = window.necooPush(arguments);
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;

    if (!tagRE.test(text)) {
      return;
    }

    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;

    while (match = tagRE.exec(text)) {
      index = match.index; // push text token

      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      } // tag token


      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({
        '@binding': exp
      });
      lastIndex = index + match[0].length;
    }

    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }

    return necooData.pushReturn({
      expression: tokens.join('+'),
      tokens: rawTokens
    });
    ;
    ;
  }
  /*  */


  function transformNode(el, options) {
    var necooData = window.necooPush(arguments);
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');

    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);

      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
      }
    }

    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }

    var classBinding = getBindingAttr(el, 'class', false
    /* getStatic */
    );

    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var necooData = window.necooPush(arguments);
    var data = '';

    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }

    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }

    return necooData.pushReturn(data);
    ;
    ;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };
  /*  */

  function transformNode$1(el, options) {
    var necooData = window.necooPush(arguments);
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');

    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);

        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false
    /* getStatic */
    );

    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var necooData = window.necooPush(arguments);
    var data = '';

    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }

    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }

    return necooData.pushReturn(data);
    ;
    ;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };
  /*  */

  var decoder;
  var he = {
    decode: function decode(html) {
      var necooData = window.necooPush(arguments);
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return necooData.pushReturn(decoder.textContent);
      ;
      ;
    }
  };
  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr'); // Elements that you can, intentionally, leave open
  // (and which close themselves)

  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'); // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content

  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');
  /**
   * Not type-checking this file because it's mostly vendor code.
   */
  // Regular Expressions for parsing tags and attributes

  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i; // #7298: escape - to avoid being pased as HTML comment when inlined in page

  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/; // Special Elements (can contain anything)

  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};
  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g; // #5992

  var isIgnoreNewlineTag = makeMap('pre,textarea', true);

  var shouldIgnoreFirstNewline = function _anonymous_165(tag, html) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(tag && isIgnoreNewlineTag(tag) && html[0] === '\n');
    ;
    ;
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var necooData = window.necooPush(arguments);
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return necooData.pushReturn(value.replace(re, function _anonymous_166(match) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(decodingMap[match]);
      ;
      ;
    }));
    ;
    ;
  }

  function parseHTML(html, options) {
    var necooData = window.necooPush(arguments);
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;

    while (html) {
      last = html; // Make sure we're not in a plaintext content element like script/style

      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');

        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }

              advance(commentEnd + 3);
              continue;
            }
          } // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment


          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          } // Doctype:


          var doctypeMatch = html.match(doctype);

          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          } // End tag:


          var endTagMatch = html.match(endTag);

          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          } // Start tag:


          var startTagMatch = parseStartTag();

          if (startTagMatch) {
            handleStartTag(startTagMatch);

            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }

            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;

        if (textEnd >= 0) {
          rest = html.slice(textEnd);

          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);

            if (next < 0) {
              break;
            }

            textEnd += next;
            rest = html.slice(textEnd);
          }

          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function _anonymous_167(all, text, endTag) {
          var necooData = window.necooPush(arguments);
          endTagLength = endTag.length;

          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }

          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }

          if (options.chars) {
            options.chars(text);
          }

          return necooData.pushReturn('');
          ;
          ;
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);

        if (!stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"", {
            start: index + html.length
          });
        }

        break;
      }
    } // Clean up any remaining tags


    parseEndTag();

    function advance(n) {
      var necooData = window.necooPush(arguments);
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var necooData = window.necooPush(arguments);
      var start = html.match(startTagOpen);

      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;

        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }

        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return necooData.pushReturn(match);
          ;
          ;
        }
      }
    }

    function handleStartTag(match) {
      var necooData = window.necooPush(arguments);
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }

        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;
      var l = match.attrs.length;
      var attrs = new Array(l);

      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };

        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({
          tag: tagName,
          lowerCasedTag: tagName.toLowerCase(),
          attrs: attrs,
          start: match.start,
          end: match.end
        });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var necooData = window.necooPush(arguments);
      var pos, lowerCasedTagName;

      if (start == null) {
        start = index;
      }

      if (end == null) {
        end = index;
      } // Find the closest opened tag of the same type


      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();

        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {
              start: stack[i].start,
              end: stack[i].end
            });
          }

          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        } // Remove the open elements from the stack


        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }

        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }
  /*  */


  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;
  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
  var slotRE = /^v-slot(:|$)|^#/;
  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;
  var invalidAttributeRE = /[\s"'<>\/=]/;
  var decodeHTMLCached = cached(he.decode);
  var emptySlotScopeToken = "_empty_"; // configurable state

  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement(tag, attrs, parent) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn({
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    });
    ;
    ;
  }
  /**
   * Convert HTML string to AST.
   */


  function parse(template, options) {
    var necooData = window.necooPush(arguments);
    warn$2 = options.warn || baseWarn;
    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;

    maybeComponent = function _anonymous_168(el) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(!!el.component || !isReservedTag(el.tag));
      ;
      ;
    };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;
    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg, range) {
      var necooData = window.necooPush(arguments);

      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement(element) {
      var necooData = window.necooPush(arguments);
      trimEndingWhitespace(element);

      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      } // tree management


      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
            start: element.start
          });
        }
      }

      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"';
            (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }

          currentParent.children.push(element);
          element.parent = currentParent;
        }
      } // final children cleanup
      // filter out scoped slots


      element.children = element.children.filter(function _anonymous_169(c) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(!c.slotScope);
        ;
        ;
      }); // remove trailing whitespace node again

      trimEndingWhitespace(element); // check pre state

      if (element.pre) {
        inVPre = false;
      }

      if (platformIsPreTag(element.tag)) {
        inPre = false;
      } // apply post-transforms


      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace(el) {
      var necooData = window.necooPush(arguments); // remove trailing whitespace node

      if (!inPre) {
        var lastNode;

        while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints(el) {
      var necooData = window.necooPush(arguments);

      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.', {
          start: el.start
        });
      }

      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start(tag, attrs, unary, start$1, end) {
        var necooData = window.necooPush(arguments); // check namespace.
        // inherit parent ns if there is one

        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag); // handle IE svg bug

        /* istanbul ignore if */

        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);

        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function _anonymous_170(cumulated, attr) {
              var necooData = window.necooPush(arguments);
              cumulated[attr.name] = attr;
              return necooData.pushReturn(cumulated);
              ;
              ;
            }, {});
          }

          attrs.forEach(function _anonymous_171(attr) {
            var necooData = window.necooPush(arguments);

            if (invalidAttributeRE.test(attr.name)) {
              warn$2("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              });
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.', {
            start: element.start
          });
        } // apply pre-transforms


        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);

          if (element.pre) {
            inVPre = true;
          }
        }

        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }

        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },
      end: function end(tag, start, end$1) {
        var necooData = window.necooPush(arguments);
        var element = stack[stack.length - 1]; // pop stack

        stack.length -= 1;
        currentParent = stack[stack.length - 1];

        if (options.outputSourceRange) {
          element.end = end$1;
        }

        closeElement(element);
      },
      chars: function chars(text, start, end) {
        var necooData = window.necooPush(arguments);

        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.', {
                start: start
              });
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.", {
                start: start
              });
            }
          }
          return;
        } // IE textarea placeholder bug

        /* istanbul ignore if */


        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }

        var children = currentParent.children;

        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }

        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }

          var res;
          var child;

          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }

          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }

            children.push(child);
          }
        }
      },
      comment: function comment(text, start, end) {
        var necooData = window.necooPush(arguments); // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored

        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };

          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }

          currentParent.children.push(child);
        }
      }
    });
    return necooData.pushReturn(root);
    ;
    ;
  }

  function processPre(el) {
    var necooData = window.necooPush(arguments);

    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var necooData = window.necooPush(arguments);
    var list = el.attrsList;
    var len = list.length;

    if (len) {
      var attrs = el.attrs = new Array(len);

      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };

        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    var necooData = window.necooPush(arguments);
    processKey(element); // determine whether this is a plain element after
    // removing structural attributes

    element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);

    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }

    processAttrs(element);
    return necooData.pushReturn(element);
    ;
    ;
  }

  function processKey(el) {
    var necooData = window.necooPush(arguments);
    var exp = getBindingAttr(el, 'key');

    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
        }

        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;

          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true
            /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var necooData = window.necooPush(arguments);
    var ref = getBindingAttr(el, 'ref');

    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var necooData = window.necooPush(arguments);
    var exp;

    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);

      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap['v-for']);
      }
    }
  }

  function parseFor(exp) {
    var necooData = window.necooPush(arguments);
    var inMatch = exp.match(forAliasRE);

    if (!inMatch) {
      return;
    }

    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);

    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }

    return necooData.pushReturn(res);
    ;
    ;
  }

  function processIf(el) {
    var necooData = window.necooPush(arguments);
    var exp = getAndRemoveAttr(el, 'v-if');

    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }

      var elseif = getAndRemoveAttr(el, 'v-else-if');

      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var necooData = window.necooPush(arguments);
    var prev = findPrevElement(parent.children);

    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
  }

  function findPrevElement(children) {
    var necooData = window.necooPush(arguments);
    var i = children.length;

    while (i--) {
      if (children[i].type === 1) {
        return necooData.pushReturn(children[i]);
        ;
        ;
      } else {
        if (children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
        }

        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    var necooData = window.necooPush(arguments);

    if (!el.ifConditions) {
      el.ifConditions = [];
    }

    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var necooData = window.necooPush(arguments);
    var once$$1 = getAndRemoveAttr(el, 'v-once');

    if (once$$1 != null) {
      el.once = true;
    }
  } // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">


  function processSlotContent(el) {
    var necooData = window.necooPush(arguments);
    var slotScope;

    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */

      if (slotScope) {
        warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
      }

      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
      }

      el.slotScope = slotScope;
    } // slot="xxx"


    var slotTarget = getBindingAttr(el, 'slot');

    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']); // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.

      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    } // 2.6 v-slot syntax


    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);

        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }

            if (el.parent && !maybeComponent(el.parent)) {
              warn$2("<template v-slot> can only appear at the root level inside " + "the receiving the component", el);
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);

        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
            }

            if (el.slotScope || el.slotTarget) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }

            if (el.scopedSlots) {
              warn$2("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
            }
          } // add the component's children to its default slot

          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function _anonymous_172(c) {
            var necooData = window.necooPush(arguments);

            if (!c.slotScope) {
              c.parent = slotContainer;
              return necooData.pushReturn(true);
              ;
              ;
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken; // remove children as they are returned from scopedSlots now

          el.children = []; // mark el non-plain so data gets generated

          el.plain = false;
        }
      }
    }
  }

  function getSlotName(binding) {
    var necooData = window.necooPush(arguments);
    var name = binding.name.replace(slotRE, '');

    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2("v-slot shorthand syntax requires a slot name.", binding);
      }
    }

    return necooData.pushReturn(dynamicArgRE.test(name) // dynamic [name]
    ? {
      name: name.slice(1, -1),
      dynamic: true // static name

    } : {
      name: "\"" + name + "\"",
      dynamic: false
    });
    ;
    ;
  } // handle <slot/> outlets


  function processSlotOutlet(el) {
    var necooData = window.necooPush(arguments);

    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');

      if (el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
      }
    }
  }

  function processComponent(el) {
    var necooData = window.necooPush(arguments);
    var binding;

    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }

    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var necooData = window.necooPush(arguments);
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;

    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;

      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true; // modifiers

        modifiers = parseModifiers(name.replace(dirRE, '')); // support .foo shorthand syntax for the .prop modifier

        if (modifiers) {
          name = name.replace(modifierRE, '');
        }

        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);

          if (isDynamic) {
            name = name.slice(1, -1);
          }

          if (value.trim().length === 0) {
            warn$2("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
          }

          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);

              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }

            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }

            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");

              if (!isDynamic) {
                addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);

                if (hyphenate(name) !== camelize(name)) {
                  addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                }
              } else {
                // handler w/ dynamic event name
                addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$2, list[i], true // dynamic
                );
              }
            }
          }

          if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);

          if (isDynamic) {
            name = name.slice(1, -1);
          }

          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else {
          // normal directives
          name = name.replace(dirRE, ''); // parse arg

          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;

          if (arg) {
            name = name.slice(0, -(arg.length + 1));

            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }

          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);

          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);

          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]); // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation

        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor(el) {
    var necooData = window.necooPush(arguments);
    var parent = el;

    while (parent) {
      if (parent.for !== undefined) {
        return necooData.pushReturn(true);
        ;
        ;
      }

      parent = parent.parent;
    }

    return necooData.pushReturn(false);
    ;
    ;
  }

  function parseModifiers(name) {
    var necooData = window.necooPush(arguments);
    var match = name.match(modifierRE);

    if (match) {
      var ret = {};
      match.forEach(function _anonymous_173(m) {
        var necooData = window.necooPush(arguments);
        ret[m.slice(1)] = true;
      });
      return necooData.pushReturn(ret);
      ;
      ;
    }
  }

  function makeAttrsMap(attrs) {
    var necooData = window.necooPush(arguments);
    var map = {};

    for (var i = 0, l = attrs.length; i < l; i++) {
      if (map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }

      map[attrs[i].name] = attrs[i].value;
    }

    return necooData.pushReturn(map);
    ;
    ;
  } // for script (e.g. type="x/template") or style, do not decode content


  function isTextTag(el) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(el.tag === 'script' || el.tag === 'style');
    ;
    ;
  }

  function isForbiddenTag(el) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript'));
    ;
    ;
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;
  /* istanbul ignore next */

  function guardIESVGBug(attrs) {
    var necooData = window.necooPush(arguments);
    var res = [];

    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];

      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }

  function checkForAliasModel(el, value) {
    var necooData = window.necooPush(arguments);
    var _el = el;

    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
      }

      _el = _el.parent;
    }
  }
  /*  */


  function preTransformNode(el, options) {
    var necooData = window.necooPush(arguments);

    if (el.tag === 'input') {
      var map = el.attrsMap;

      if (!map['v-model']) {
        return;
      }

      var typeBinding;

      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }

      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + map['v-bind'] + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true); // 1. checkbox

        var branch0 = cloneASTElement(el); // process for on the main node

        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed

        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        }); // 2. add radio else-if condition

        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        }); // 3. other

        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return necooData.pushReturn(branch0);
        ;
        ;
      }
    }
  }

  function cloneASTElement(el) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(createASTElement(el.tag, el.attrsList.slice(), el.parent));
    ;
    ;
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };
  var modules$1 = [klass$1, style$1, model$1];
  /*  */

  function text(el, dir) {
    var necooData = window.necooPush(arguments);

    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")", dir);
    }
  }
  /*  */


  function html(el, dir) {
    var necooData = window.necooPush(arguments);

    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")", dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };
  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };
  /*  */

  var isStaticKey;
  var isPlatformReservedTag;
  var genStaticKeysCached = cached(genStaticKeys$1);
  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */

  function optimize(root, options) {
    var necooData = window.necooPush(arguments);

    if (!root) {
      return;
    }

    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no; // first pass: mark all non-static nodes.

    markStatic$1(root); // second pass: mark static roots.

    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (keys ? ',' + keys : '')));
    ;
    ;
  }

  function markStatic$1(node) {
    var necooData = window.necooPush(arguments);
    node.static = isStatic(node);

    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }

      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);

        if (!child.static) {
          node.static = false;
        }
      }

      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);

          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    var necooData = window.necooPush(arguments);

    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      } // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.


      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }

      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }

      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    var necooData = window.necooPush(arguments);

    if (node.type === 2) {
      // expression
      return necooData.pushReturn(false);
      ;
      ;
    }

    if (node.type === 3) {
      // text
      return necooData.pushReturn(true);
      ;
      ;
    }

    return necooData.pushReturn(!!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey)));
    ;
    ;
  }

  function isDirectChildOfTemplateFor(node) {
    var necooData = window.necooPush(arguments);

    while (node.parent) {
      node = node.parent;

      if (node.tag !== 'template') {
        return necooData.pushReturn(false);
        ;
        ;
      }

      if (node.for) {
        return necooData.pushReturn(true);
        ;
        ;
      }
    }

    return necooData.pushReturn(false);
    ;
    ;
  }
  /*  */


  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/; // KeyboardEvent.keyCode aliases

  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  }; // KeyboardEvent.key aliases

  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  }; // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once

  var genGuard = function _anonymous_174(condition) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn("if(" + condition + ")return null;");
    ;
    ;
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative) {
    var necooData = window.necooPush(arguments);
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";

    for (var name in events) {
      var handlerCode = genHandler(events[name]);

      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }

    staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";

    if (dynamicHandlers) {
      return necooData.pushReturn(prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])");
      ;
      ;
    } else {
      return necooData.pushReturn(prefix + staticHandlers);
      ;
      ;
    }
  }

  function genHandler(handler) {
    var necooData = window.necooPush(arguments);

    if (!handler) {
      return necooData.pushReturn('function _anonymous_175(){}');
      ;
      ;
    }

    if (Array.isArray(handler)) {
      return necooData.pushReturn("[" + handler.map(function _anonymous_176(handler) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(genHandler(handler));
        ;
        ;
      }).join(',') + "]");
      ;
      ;
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return necooData.pushReturn(handler.value);
        ;
        ;
      }

      return necooData.pushReturn("function _anonymous_177($event){ window.necooPush(arguments);" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}");
      ;
      ; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];

      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key]; // left/right

          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function _anonymous_178(keyModifier) {
            var necooData = window.necooPush(arguments);
            return necooData.pushReturn(!modifiers[keyModifier]);
            ;
            ;
          }).map(function _anonymous_179(keyModifier) {
            var necooData = window.necooPush(arguments);
            return necooData.pushReturn("$event." + keyModifier + "Key");
            ;
            ;
          }).join('||'));
        } else {
          keys.push(key);
        }
      }

      if (keys.length) {
        code += genKeyFilter(keys);
      } // Make sure modifiers like prevent and stop get executed after key filtering


      if (genModifierCode) {
        code += genModifierCode;
      }

      var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
      return necooData.pushReturn("function _anonymous_180($event){ window.necooPush(arguments);" + code + handlerCode + "}");
      ;
      ;
    }
  }

  function genKeyFilter(keys) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn( // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join('&&') + ")return null;");
    ;
    ;
  }

  function genFilterCode(key) {
    var necooData = window.necooPush(arguments);
    var keyVal = parseInt(key, 10);

    if (keyVal) {
      return necooData.pushReturn("$event.keyCode!==" + keyVal);
      ;
      ;
    }

    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return necooData.pushReturn("_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")");
    ;
    ;
  }
  /*  */


  function on(el, dir) {
    var necooData = window.necooPush(arguments);

    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }

    el.wrapListeners = function _anonymous_181(code) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn("_g(" + code + "," + dir.value + ")");
      ;
      ;
    };
  }
  /*  */


  function bind$1(el, dir) {
    var necooData = window.necooPush(arguments);

    el.wrapData = function _anonymous_182(code) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn("_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")");
      ;
      ;
    };
  }
  /*  */


  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };
  /*  */

  var CodegenState = function CodegenState(options) {
    var necooData = window.necooPush(arguments);
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;

    this.maybeComponent = function _anonymous_183(el) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(!!el.component || !isReservedTag(el.tag));
      ;
      ;
    };

    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };

  function generate(ast, options) {
    var necooData = window.necooPush(arguments);
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return necooData.pushReturn({
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    });
    ;
    ;
  }

  function genElement(el, state) {
    var necooData = window.necooPush(arguments);

    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return necooData.pushReturn(genStatic(el, state));
      ;
      ;
    } else if (el.once && !el.onceProcessed) {
      return necooData.pushReturn(genOnce(el, state));
      ;
      ;
    } else if (el.for && !el.forProcessed) {
      return necooData.pushReturn(genFor(el, state));
      ;
      ;
    } else if (el.if && !el.ifProcessed) {
      return necooData.pushReturn(genIf(el, state));
      ;
      ;
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return necooData.pushReturn(genChildren(el, state) || 'void 0');
      ;
      ;
    } else if (el.tag === 'slot') {
      return necooData.pushReturn(genSlot(el, state));
      ;
      ;
    } else {
      // component or element
      var code;

      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;

        if (!el.plain || el.pre && state.maybeComponent(el)) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      } // module transforms


      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }

      return necooData.pushReturn(code);
      ;
      ;
    }
  } // hoist static sub-trees out


  function genStatic(el, state) {
    var necooData = window.necooPush(arguments);
    el.staticProcessed = true; // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.

    var originalPreState = state.pre;

    if (el.pre) {
      state.pre = el.pre;
    }

    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    state.pre = originalPreState;
    return necooData.pushReturn("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")");
    ;
    ;
  } // v-once


  function genOnce(el, state) {
    var necooData = window.necooPush(arguments);
    el.onceProcessed = true;

    if (el.if && !el.ifProcessed) {
      return necooData.pushReturn(genIf(el, state));
      ;
      ;
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;

      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }

        parent = parent.parent;
      }

      if (!key) {
        state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
        return necooData.pushReturn(genElement(el, state));
        ;
        ;
      }

      return necooData.pushReturn("_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")");
      ;
      ;
    } else {
      return necooData.pushReturn(genStatic(el, state));
      ;
      ;
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    var necooData = window.necooPush(arguments);
    el.ifProcessed = true; // avoid recursion

    return necooData.pushReturn(genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty));
    ;
    ;
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    var necooData = window.necooPush(arguments);

    if (!conditions.length) {
      return necooData.pushReturn(altEmpty || '_e()');
      ;
      ;
    }

    var condition = conditions.shift();

    if (condition.exp) {
      return necooData.pushReturn("(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty));
      ;
      ;
    } else {
      return necooData.pushReturn("" + genTernaryExp(condition.block));
      ;
      ;
    } // v-if with v-once should generate code like (a)?_m(0):_m(1)


    function genTernaryExp(el) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state));
      ;
      ;
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var necooData = window.necooPush(arguments);
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if (state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true
      /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion

    return necooData.pushReturn((altHelper || '_l') + "((" + exp + ")," + "function _anonymous_184(" + alias + iterator1 + iterator2 + "){ window.necooPush(arguments);" + "return " + (altGen || genElement)(el, state) + '})');
    ;
    ;
  }

  function genData$2(el, state) {
    var necooData = window.necooPush(arguments);
    var data = '{'; // directives first.
    // directives may mutate the el's other properties before they are generated.

    var dirs = genDirectives(el, state);

    if (dirs) {
      data += dirs + ',';
    } // key


    if (el.key) {
      data += "key:" + el.key + ",";
    } // ref


    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }

    if (el.refInFor) {
      data += "refInFor:true,";
    } // pre


    if (el.pre) {
      data += "pre:true,";
    } // record original tag name for components using "is" attribute


    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    } // module data generation functions


    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    } // attributes


    if (el.attrs) {
      data += "attrs:" + genProps(el.attrs) + ",";
    } // DOM props


    if (el.props) {
      data += "domProps:" + genProps(el.props) + ",";
    } // event handlers


    if (el.events) {
      data += genHandlers(el.events, false) + ",";
    }

    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true) + ",";
    } // slot target
    // only for non-scoped slots


    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    } // scoped slots


    if (el.scopedSlots) {
      data += genScopedSlots(el, el.scopedSlots, state) + ",";
    } // component v-model


    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    } // inline-template


    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);

      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }

    data = data.replace(/,$/, '') + '}'; // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.

    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
    } // v-bind data wrap


    if (el.wrapData) {
      data = el.wrapData(data);
    } // v-on data wrap


    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }

    return necooData.pushReturn(data);
    ;
    ;
  }

  function genDirectives(el, state) {
    var necooData = window.necooPush(arguments);
    var dirs = el.directives;

    if (!dirs) {
      return;
    }

    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;

    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];

      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }

      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }

    if (hasRuntime) {
      return necooData.pushReturn(res.slice(0, -1) + ']');
      ;
      ;
    }
  }

  function genInlineTemplate(el, state) {
    var necooData = window.necooPush(arguments);
    var ast = el.children[0];

    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn('Inline-template components must have exactly one child element.', {
        start: el.start
      });
    }

    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return necooData.pushReturn("inlineTemplate:{render:function _anonymous_185(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function _anonymous_186(code) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn("function _anonymous_187(){ window.necooPush(arguments);" + code + "}");
        ;
        ;
      }).join(',') + "]}");
      ;
      ;
    }
  }

  function genScopedSlots(el, slots, state) {
    var necooData = window.necooPush(arguments); // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...

    var needsForceUpdate = el.for || Object.keys(slots).some(function _anonymous_188(key) {
      var necooData = window.necooPush(arguments);
      var slot = slots[key];
      return necooData.pushReturn(slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      );
      ;
      ;
    }); // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.

    var needsKey = !!el.if; // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.

    if (!needsForceUpdate) {
      var parent = el.parent;

      while (parent) {
        if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
          needsForceUpdate = true;
          break;
        }

        if (parent.if) {
          needsKey = true;
        }

        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots).map(function _anonymous_189(key) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn(genScopedSlot(slots[key], state));
      ;
      ;
    }).join(',');
    return necooData.pushReturn("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")");
    ;
    ;
  }

  function hash(str) {
    var necooData = window.necooPush(arguments);
    var hash = 5381;
    var i = str.length;

    while (i) {
      hash = hash * 33 ^ str.charCodeAt(--i);
    }

    return necooData.pushReturn(hash >>> 0);
    ;
    ;
  }

  function containsSlotChild(el) {
    var necooData = window.necooPush(arguments);

    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true;
      }

      return necooData.pushReturn(el.children.some(containsSlotChild));
      ;
      ;
    }

    return false;
  }

  function genScopedSlot(el, state) {
    var necooData = window.necooPush(arguments);
    var isLegacySyntax = el.attrsMap['slot-scope'];

    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return necooData.pushReturn(genIf(el, state, genScopedSlot, "null"));
      ;
      ;
    }

    if (el.for && !el.forProcessed) {
      return necooData.pushReturn(genFor(el, state, genScopedSlot));
      ;
      ;
    }

    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function _anonymous_190(" + slotScope + "){ window.necooPush(arguments);" + "return " + (el.tag === 'template' ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}"; // reverse proxy v-slot without scope on this.$slots

    var reverseProxy = slotScope ? "" : ",proxy:true";
    return necooData.pushReturn("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}");
    ;
    ;
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var necooData = window.necooPush(arguments);
    var children = el.children;

    if (children.length) {
      var el$1 = children[0]; // optimize single v-for

      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
        return necooData.pushReturn("" + (altGenElement || genElement)(el$1, state) + normalizationType);
        ;
        ;
      }

      var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return necooData.pushReturn("[" + children.map(function _anonymous_191(c) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(gen(c, state));
        ;
        ;
      }).join(',') + "]" + (normalizationType$1 ? "," + normalizationType$1 : ''));
      ;
      ;
    }
  } // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed


  function getNormalizationType(children, maybeComponent) {
    var necooData = window.necooPush(arguments);
    var res = 0;

    for (var i = 0; i < children.length; i++) {
      var el = children[i];

      if (el.type !== 1) {
        continue;
      }

      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function _anonymous_192(c) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(needsNormalization(c.block));
        ;
        ;
      })) {
        res = 2;
        break;
      }

      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function _anonymous_193(c) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(maybeComponent(c.block));
        ;
        ;
      })) {
        res = 1;
      }
    }

    return necooData.pushReturn(res);
    ;
    ;
  }

  function needsNormalization(el) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(el.for !== undefined || el.tag === 'template' || el.tag === 'slot');
    ;
    ;
  }

  function genNode(node, state) {
    var necooData = window.necooPush(arguments);

    if (node.type === 1) {
      return necooData.pushReturn(genElement(node, state));
      ;
      ;
    } else if (node.type === 3 && node.isComment) {
      return necooData.pushReturn(genComment(node));
      ;
      ;
    } else {
      return necooData.pushReturn(genText(node));
      ;
      ;
    }
  }

  function genText(text) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn("_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")");
    ;
    ;
  }

  function genComment(comment) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn("_e(" + JSON.stringify(comment.text) + ")");
    ;
    ;
  }

  function genSlot(el, state) {
    var necooData = window.necooPush(arguments);
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function _anonymous_194(attr) {
      var necooData = window.necooPush(arguments);
      return necooData.pushReturn({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      });
      ;
      ;
    })) : null;
    var bind$$1 = el.attrsMap['v-bind'];

    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }

    if (attrs) {
      res += "," + attrs;
    }

    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }

    return necooData.pushReturn(res + ')');
    ;
    ;
  } // componentName is el.component, take it as argument to shun flow's pessimistic refinement


  function genComponent(componentName, el, state) {
    var necooData = window.necooPush(arguments);
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return necooData.pushReturn("_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")");
    ;
    ;
  }

  function genProps(props) {
    var necooData = window.necooPush(arguments);
    var staticProps = "";
    var dynamicProps = "";

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);

      if (prop.dynamic) {
        dynamicProps += prop.name + "," + value + ",";
      } else {
        staticProps += "\"" + prop.name + "\":" + value + ",";
      }
    }

    staticProps = "{" + staticProps.slice(0, -1) + "}";

    if (dynamicProps) {
      return necooData.pushReturn("_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])");
      ;
      ;
    } else {
      return necooData.pushReturn(staticProps);
      ;
      ;
    }
  } // #3895, #4268


  function transformSpecialNewlines(text) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029'));
    ;
    ;
  }
  /*  */
  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed


  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b'); // these unary operators should not be used as property/method names

  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'); // strip strings in expressions

  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g; // detect problematic expressions in a template

  function detectErrors(ast, warn) {
    var necooData = window.necooPush(arguments);

    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode(node, warn) {
    var necooData = window.necooPush(arguments);

    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];

          if (value) {
            var range = node.rawAttrsMap[name];

            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", warn, range);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", warn, range);
            }
          }
        }
      }

      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent(exp, text, warn, range) {
    var necooData = window.necooPush(arguments);
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);

    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
    }

    checkExpression(exp, text, warn, range);
  }

  function checkFor(node, text, warn, range) {
    var necooData = window.necooPush(arguments);
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier(ident, type, text, warn, range) {
    var necooData = window.necooPush(arguments);

    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
      }
    }
  }

  function checkExpression(exp, text, warn, range) {
    var necooData = window.necooPush(arguments);

    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

      if (keywordMatch) {
        warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
      } else {
        warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
      }
    }
  }
  /*  */


  var range = 2;

  function generateCodeFrame(source, start, end) {
    var necooData = window.necooPush(arguments);
    if (start === void 0) start = 0;
    if (end === void 0) end = source.length;
    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];

    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;

      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) {
            continue;
          }

          res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
          var lineLength = lines[j].length;

          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }

            count += lineLength + 1;
          }
        }

        break;
      }
    }

    return necooData.pushReturn(res.join('\n'));
    ;
    ;
  }

  function repeat$1(str, n) {
    var necooData = window.necooPush(arguments);
    var result = '';

    if (n > 0) {
      while (true) {
        // eslint-disable-line
        if (n & 1) {
          result += str;
        }

        n >>>= 1;

        if (n <= 0) {
          break;
        }

        str += str;
      }
    }

    return necooData.pushReturn(result);
    ;
    ;
  }
  /*  */


  function createFunction(code, errors) {
    var necooData = window.necooPush(arguments);

    try {
      return necooData.pushReturn(new Function(code));
      ;
      ;
    } catch (err) {
      errors.push({
        err: err,
        code: code
      });
      return necooData.pushReturn(noop);
      ;
      ;
    }
  }

  function createCompileToFunctionFn(compile) {
    var necooData = window.necooPush(arguments);
    var cache = Object.create(null);
    return necooData.pushReturn(function compileToFunctions(template, options, vm) {
      var necooData = window.necooPush(arguments);
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;
      /* istanbul ignore if */

      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      } // check cache

      var key = options.delimiters ? String(options.delimiters) + template : template;

      if (cache[key]) {
        return necooData.pushReturn(cache[key]);
        ;
        ;
      } // compile


      var compiled = compile(template, options); // check compilation errors/tips

      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function _anonymous_195(e) {
              var necooData = window.necooPush(arguments);
              warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
            });
          } else {
            warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function _anonymous_196(e) {
              var necooData = window.necooPush(arguments);
              return necooData.pushReturn("- " + e);
              ;
              ;
            }).join('\n') + '\n', vm);
          }
        }

        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function _anonymous_197(e) {
              var necooData = window.necooPush(arguments);
              return necooData.pushReturn(tip(e.msg, vm));
              ;
              ;
            });
          } else {
            compiled.tips.forEach(function _anonymous_198(msg) {
              var necooData = window.necooPush(arguments);
              return necooData.pushReturn(tip(msg, vm));
              ;
              ;
            });
          }
        }
      } // turn code into functions

      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function _anonymous_199(code) {
        var necooData = window.necooPush(arguments);
        return necooData.pushReturn(createFunction(code, fnGenErrors));
        ;
        ;
      }); // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use

      /* istanbul ignore if */

      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function _anonymous_200(ref) {
            var necooData = window.necooPush(arguments);
            var err = ref.err;
            var code = ref.code;
            return necooData.pushReturn(err.toString() + " in\n\n" + code + "\n");
            ;
            ;
          }).join('\n'), vm);
        }
      }
      return necooData.pushReturn(cache[key] = res);
      ;
      ;
    });
    ;
    ;
  }
  /*  */


  function createCompilerCreator(baseCompile) {
    var necooData = window.necooPush(arguments);
    return necooData.pushReturn(function createCompiler(baseOptions) {
      var necooData = window.necooPush(arguments);

      function compile(template, options) {
        var necooData = window.necooPush(arguments);
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function _anonymous_201(msg, range, tip) {
          var necooData = window.necooPush(arguments);
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function _anonymous_202(msg, range, tip) {
              var necooData = window.necooPush(arguments);
              var data = {
                msg: msg
              };

              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }

                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }

              (tip ? tips : errors).push(data);
            };
          } // merge custom modules


          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          } // merge custom directives


          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
          } // copy other options


          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;
        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return necooData.pushReturn(compiled);
        ;
        ;
      }

      return necooData.pushReturn({
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      });
      ;
      ;
    });
    ;
    ;
  }
  /*  */
  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.


  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var necooData = window.necooPush(arguments);
    var ast = parse(template.trim(), options);

    if (options.optimize !== false) {
      optimize(ast, options);
    }

    var code = generate(ast, options);
    return necooData.pushReturn({
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    });
    ;
    ;
  });
  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;
  /*  */
  // check whether current browser encodes a char inside attribute values

  var div;

  function getShouldDecode(href) {
    var necooData = window.necooPush(arguments);
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return necooData.pushReturn(div.innerHTML.indexOf('&#10;') > 0);
    ;
    ;
  } // #3663: IE encodes newlines inside attribute values while other browsers don't


  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false; // #6828: chrome encodes content in a[href]

  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
  /*  */

  var idToTemplate = cached(function _anonymous_203(id) {
    var necooData = window.necooPush(arguments);
    var el = query(id);
    return necooData.pushReturn(el && el.innerHTML);
    ;
    ;
  });
  var mount = Vue.prototype.$mount;

  Vue.prototype.$mount = function _anonymous_204(el, hydrating) {
    var necooData = window.necooPush(arguments);
    el = el && query(el);
    /* istanbul ignore if */

    if (el === document.body || el === document.documentElement) {
      warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return necooData.pushReturn(this);
      ;
      ;
    }

    var options = this.$options; // resolve template/el and convert to render function

    if (!options.render) {
      var template = options.template;

      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */

            if (!template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return necooData.pushReturn(this);
          ;
          ;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }

      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        /* istanbul ignore if */

        if (config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }

    return necooData.pushReturn(mount.call(this, el, hydrating));
    ;
    ;
  };
  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */


  function getOuterHTML(el) {
    var necooData = window.necooPush(arguments);

    if (el.outerHTML) {
      return necooData.pushReturn(el.outerHTML);
      ;
      ;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return necooData.pushReturn(container.innerHTML);
      ;
      ;
    }
  }

  Vue.compile = compileToFunctions;
  return necooData.pushReturn(Vue);
  ;
  ;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.35.3@webpack/buildin/global.js */ "./node_modules/_webpack@4.35.3@webpack/buildin/global.js"), __webpack_require__(/*! ./../../_timers-browserify@2.0.10@timers-browserify/main.js */ "./node_modules/_timers-browserify@2.0.10@timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/_webpack@4.35.3@webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/_webpack@4.35.3@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/vue/index.js":
/*!**************************!*\
  !*** ./src/vue/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@2.6.10@vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.less */ "./src/vue/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var stacktrace = __webpack_require__(/*! stacktrace-js */ "./node_modules/_stacktrace-js@2.0.0@stacktrace-js/stacktrace.js");

window.StackTrace = stacktrace;

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/_webpack@4.35.3@webpack/buildin/amd-options.js") ? define(['exports'], factory) : (global = global || self, factory(global.necoo = {}));
})(undefined, function (exports) {
  var lastTime = null;

  function initNecooData() {
    if (typeof window.necooData === 'undefined') {
      window.necooData = [];
    } // if (typeof window.necooIndex === 'undefined') {
    //     window.necooIndex = 0;
    // }


    if (!window.necooData[window.necooIndex] && window.necooIndex >= 0) {
      window.necooData[window.necooIndex] = [];
    }

    return window.necooIndex >= 0;
  }
  /**
   * 通过StackTrace获取报错堆栈
   */


  function getStackTrace() {
    var stack = {};
    var error = new Error();
    stack.sourceStack = error.stack;
    var trace = window.StackTrace ? window.StackTrace.getSync() : [];
    stack.stackTrace = trace.slice(2);
    return stack;
  }

  function getCallerFromSourceStack(sourceStack, calleeName) {
    // 为什么不用stackTrace.stackTrace呢？好像stackTrace.stackTrace会丢信息
    var callerName = null;
    var calleeIndex = 0;
    var callerIndex = calleeIndex + 1;

    if (sourceStack) {
      var stackArr = []; // slice(3) 把Error 、getStackTrace、necooPush去掉

      stackArr = sourceStack.split('  at ').slice(3);

      for (var i = 0; i < stackArr.length; i++) {
        var stack = stackArr[i];

        if (stack.indexOf(calleeName) > -1) {
          calleeIndex = i;
          callerIndex = calleeIndex + 1;
          break;
        }
      }

      stackArr.forEach(function (stack, index) {
        if (stack.indexOf('calleeName') > -1) {
          calleeIndex = index;
        }
      });

      if (stackArr[1]) {
        try {
          callerName = stackArr[1].split('eval at ')[1].split(' ')[0];
        } catch (e) {}
      } // for (var i = 0; i < stackArr.length; i++) {
      //     var nowStack = stackArr[i];
      //
      //     // if (nowStack.indexOf('<anonymous>') > -1 && flag === false) {
      //     //     flag = true;
      //     // }
      //     // else if (nowStack.indexOf('<anonymous>') === -1 && flag === true) {
      //     //     o['type'] = stackArr[i-1].trim().split(' ')[0];
      //     //     o['parentName'] = stackArr[i].trim().split(' ')[0];
      //     //     break;
      //     // }
      // }

    }

    return callerName;
  }

  function getCallerFromTrace(trace) {
    // 数字根据层级来定
    if (trace && trace.length > 3) {
      var calleeTrace = trace[3];
    }
  }

  function getObjectCallerName(callerName) {
    if (callerName && /\./.test(callerName)) {
      callerName = callerName.split('.').reverse() && callerName.split('.').reverse()[0];

      if (/ /.test(callerName)) {
        callerName = callerName.split(' ')[0];
      }

      return callerName;
    }

    return callerName;
  }

  function necooPush(args) {
    var callStack = {};
    var splitTime = 0;

    if (!lastTime) {
      lastTime = +new Date();
    } else {
      var now = +new Date();
      splitTime = now - lastTime;
      lastTime = now;
    }

    callStack.pushReturn = function (returnVal) {
      callStack.returnVal = returnVal;
      return returnVal;
    };

    if (!initNecooData()) {
      return callStack;
    }

    if (window.necooIndex >= 0) {
      try {
        var stackTrace = getStackTrace();
        var calleeName = null;
        var callerName = null;
        var grandFather = null;
        calleeName = args.callee && args.callee.name;
        callerName = args.callee.caller && args.callee.caller.name;

        if (!calleeName) {
          calleeName = args.callee && args.callee.prototype.name;
        }

        var callerStack3 = stackTrace.stackTrace[1] && stackTrace.stackTrace[1].functionName;
        var callerStack4 = stackTrace.stackTrace[2] && stackTrace.stackTrace[2].functionName;
        var callerStack5 = stackTrace.stackTrace[3] && stackTrace.stackTrace[3].functionName;
        grandFather = callerStack4;

        if (!callerName) {
          callerName = args.callee.caller && args.callee.caller.prototype && args.callee.caller.prototype.name;

          if (!callerName) {
            var caller = getCallerFromSourceStack(stackTrace.sourceStack, calleeName) || callerStack3;

            if (caller) {
              callerName = caller;
            } // get callerName from stackTrace

          }
        }

        if (callerName === 'anonymous') {
          // get callerName from stackTrace
          var caller = getCallerFromSourceStack(stackTrace.sourceStack, calleeName) || callerStack3;

          if (caller) {
            callerName = caller;
          }
        }

        if (callerName === 'Object.<anonymous>') {
          callerName = callerStack4;
          grandFather = callerStack5;
        }

        callStack = {
          name: getObjectCallerName(calleeName),
          showName: 'function: ' + calleeName,
          caller: getObjectCallerName(callerName),
          body: args.callee.toString(),
          arguments: args,
          splitTime: splitTime,
          callerInfo: {
            grandFather: getObjectCallerName(grandFather),
            stackTrace: stackTrace,
            father: stackTrace && typeof stackTrace.stackTrace[1] !== 'undefined' ? stackTrace.stackTrace[1] : null,
            self: stackTrace && typeof stackTrace.stackTrace[0] !== 'undefined' ? stackTrace.stackTrace[0] : null
          }
        };

        callStack.pushReturn = function (returnVal) {
          callStack.returnVal = returnVal;
          return returnVal;
        };

        window.necooData[window.necooIndex].push(callStack);
      } catch (e) {
        console.log('sorry for error', e);
      }
    }

    return callStack;
  }

  exports.necooPush = necooPush;

  if (window) {
    window.necooPush = necooPush;
  }
});


 // 写这个是表示从这里开始记录执行步骤

window.necooIndex = 0;
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  template: "<div class=\"layout\">{{message}}</div>",
  data: {
    message: 'Hello Vue!'
  }
});

/***/ }),

/***/ "./src/vue/style/index.less":
/*!**********************************!*\
  !*** ./src/vue/style/index.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.1.0@css-loader/dist/cjs.js!../../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./index.less */ "./node_modules/_css-loader@3.1.0@css-loader/dist/cjs.js!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/vue/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map