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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(12);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__);


Nova.booting(function (Vue, router, store) {
  Vue.component('tabs', __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__["Tabs"]);
  Vue.component('tab', __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__["Tab"]);
  router.addRoutes([{
    name: 'invoicer',
    path: '/invoicer',
    component: __webpack_require__(3)
  }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-tabs"] = factory();
	else
		root["VueTabs"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(24);
var toPrimitive = __webpack_require__(26);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./components/Tab'), require('./components/Tabs'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Tab, global.Tabs);
        global.index = mod.exports;
    }
})(this, function (exports, _Tab, _Tabs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Tabs = exports.Tab = undefined;

    var _Tab2 = _interopRequireDefault(_Tab);

    var _Tabs2 = _interopRequireDefault(_Tabs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        install: function install(Vue) {
            Vue.component('tab', _Tab2.default);
            Vue.component('tabs', _Tabs2.default);
        }
    };
    exports.Tab = _Tab2.default;
    exports.Tabs = _Tabs2.default;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(10),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.Tab = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        props: {
            id: { default: null },
            name: { required: true },
            prefix: { default: '' },
            suffix: { default: '' },
            isDisabled: { default: false }
        },

        data: function data() {
            return {
                isActive: false,
                isVisible: true
            };
        },

        computed: {
            header: function header() {
                return this.prefix + this.name + this.suffix;
            },
            computedId: function computedId() {
                return this.id ? this.id : this.name.toLowerCase().replace(/ /g, '-');
            },
            hash: function hash() {
                if (this.isDisabled) {
                    return '#';
                }

                return '#' + this.computedId;
            }
        }
    };
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "tabs-component-panel",
    attrs: {
      "aria-hidden": !_vm.isActive,
      "id": _vm.computedId,
      "role": "tabpanel"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(29),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../expiringStorage'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.expiringStorage);
        global.Tabs = mod.exports;
    }
})(this, function (exports, _expiringStorage) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _expiringStorage2 = _interopRequireDefault(_expiringStorage);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        props: {
            cacheLifetime: {
                default: 5
            },
            options: {
                type: Object,
                required: false,
                default: function _default() {
                    return {
                        useUrlFragment: true,
                        defaultTabHash: null
                    };
                }
            }
        },

        data: function data() {
            return {
                tabs: [],
                activeTabHash: '',
                activeTabIndex: 0,
                lastActiveTabHash: ''
            };
        },

        computed: {
            storageKey: function storageKey() {
                return 'vue-tabs-component.cache.' + window.location.host + window.location.pathname;
            }
        },

        created: function created() {
            this.tabs = this.$children;
        },
        mounted: function mounted() {
            var _this = this;

            window.addEventListener('hashchange', function () {
                return _this.selectTab(window.location.hash);
            });

            if (this.findTab(window.location.hash)) {
                this.selectTab(window.location.hash);
                return;
            }

            var previousSelectedTabHash = _expiringStorage2.default.get(this.storageKey);

            if (this.findTab(previousSelectedTabHash)) {
                this.selectTab(previousSelectedTabHash);
                return;
            }

            if (this.options.defaultTabHash !== null && this.findTab("#" + this.options.defaultTabHash)) {
                this.selectTab("#" + this.options.defaultTabHash);
                return;
            }

            if (this.tabs.length) {
                this.selectTab(this.tabs[0].hash);
            }
        },


        methods: {
            findTab: function findTab(hash) {
                return this.tabs.find(function (tab) {
                    return tab.hash === hash;
                });
            },
            selectTab: function selectTab(selectedTabHash, event) {
                // See if we should store the hash in the url fragment.
                if (event && !this.options.useUrlFragment) {
                    event.preventDefault();
                }

                var selectedTab = this.findTab(selectedTabHash);

                if (!selectedTab) {
                    return;
                }

                if (selectedTab.isDisabled) {
                    event.preventDefault();
                    return;
                }

                if (this.lastActiveTabHash === selectedTab.hash) {
                    this.$emit('clicked', { tab: selectedTab });
                    return;
                }

                this.tabs.forEach(function (tab) {
                    tab.isActive = tab.hash === selectedTab.hash;
                });

                this.$emit('changed', { tab: selectedTab });

                this.activeTabHash = selectedTab.hash;
                this.activeTabIndex = this.getTabIndex(selectedTabHash);

                this.lastActiveTabHash = this.activeTabHash = selectedTab.hash;

                _expiringStorage2.default.set(this.storageKey, selectedTab.hash, this.cacheLifetime);
            },
            setTabVisible: function setTabVisible(hash, visible) {
                var tab = this.findTab(hash);

                if (!tab) {
                    return;
                }

                tab.isVisible = visible;

                if (tab.isActive) {
                    // If tab is active, set a different one as active.
                    tab.isActive = visible;

                    this.tabs.every(function (tab, index, array) {
                        if (tab.isVisible) {
                            tab.isActive = true;

                            return false;
                        }

                        return true;
                    });
                }
            },
            getTabIndex: function getTabIndex(hash) {
                var tab = this.findTab(hash);

                return this.tabs.indexOf(tab);
            },
            getTabHash: function getTabHash(index) {
                var _this2 = this;

                var tab = this.tabs.find(function (tab) {
                    return _this2.tabs.indexOf(tab) === index;
                });

                if (!tab) {
                    return;
                }

                return tab.hash;
            },
            getActiveTab: function getActiveTab() {
                return this.findTab(this.activeTabHash);
            },
            getActiveTabIndex: function getActiveTabIndex() {
                return this.getTabIndex(this.activeTabHash);
            }
        }
    };
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(14), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.classCallCheck, global.createClass);
        global.expiringStorage = mod.exports;
    }
})(this, function (exports, _classCallCheck2, _createClass2) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    var _createClass3 = _interopRequireDefault(_createClass2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var ExpiringStorage = function () {
        function ExpiringStorage() {
            (0, _classCallCheck3.default)(this, ExpiringStorage);
        }

        (0, _createClass3.default)(ExpiringStorage, [{
            key: "get",
            value: function get(key) {
                var cached = JSON.parse(localStorage.getItem(key));

                if (!cached) {
                    return null;
                }

                var expires = new Date(cached.expires);

                if (expires < new Date()) {
                    localStorage.removeItem(key);
                    return null;
                }

                return cached.value;
            }
        }, {
            key: "set",
            value: function set(key, value, lifeTimeInMinutes) {
                var currentTime = new Date().getTime();

                var expires = new Date(currentTime + lifeTimeInMinutes * 60000);

                localStorage.setItem(key, JSON.stringify({ value: value, expires: expires }));
            }
        }]);
        return ExpiringStorage;
    }();

    exports.default = new ExpiringStorage();
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(16);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(19);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(4);
var ctx = __webpack_require__(20);
var hide = __webpack_require__(22);
var has = __webpack_require__(28);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(21);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(27);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tabs-component"
  }, [_c('ul', {
    staticClass: "tabs-component-tabs",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l((_vm.tabs), function(tab, i) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (tab.isVisible),
        expression: "tab.isVisible"
      }],
      key: i,
      staticClass: "tabs-component-tab",
      class: {
        'is-active': tab.isActive, 'is-disabled': tab.isDisabled
      },
      attrs: {
        "role": "presentation"
      }
    }, [_c('a', {
      staticClass: "tabs-component-tab-a",
      attrs: {
        "aria-controls": tab.hash,
        "aria-selected": tab.isActive,
        "href": tab.hash,
        "role": "tab"
      },
      domProps: {
        "innerHTML": _vm._s(tab.header)
      },
      on: {
        "click": function($event) {
          _vm.selectTab(tab.hash, $event)
        }
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "tabs-component-panels"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(11)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("290c3e45", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(8)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            general: {},
            documents: {
                attach_to: []
            },
            status: {},
            item: {
                image: null,
                imageUrl: null
            }
        };
    },
    mounted: function mounted() {
        this.loadDefaultSetting();
    },

    methods: {
        loadDefaultSetting: function loadDefaultSetting() {
            var _this = this;

            Nova.request().get("/nova-vendor/invoicer/default-setting").then(function (response) {
                //console.log(response.data.documents)
                _this.general = response.data.general;
                _this.documents = response.data.documents;
                _this.status = response.data.status;
            }).catch(function () {
                return _this.error = true;
            });
        },
        updateSetting: function updateSetting() {
            var _this2 = this;

            Nova.request().put("/nova-vendor/invoicer/update-setting", { general: this.general, documents: this.documents, status: this.status, image: this.item.imageUrl }).then(function (response) {
                console.log(response.data);
                // this.general = response.data.general
                // this.documents = response.data.documents
                // this.status = response.data.status
                _this2.$toasted.success(response.data, {
                    duration: 1000
                    // onComplete : () => window.location.reload(true)
                });
            }).catch(function () {
                return _this2.error = true;
            });
        },
        onChange: function onChange(e) {
            var file = e.target.files[0];
            this.image = file;
            this.item.imageUrl = URL.createObjectURL(file);
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("heading", { staticClass: "mb-6" }, [_vm._v("Invoicer Tool")]),
      _vm._v(" "),
      _c(
        "tabs",
        [
          _c("tab", { attrs: { name: "General" } }, [
            _c("div", { staticClass: "card overflow-hidden" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateSetting($event)
                    }
                  }
                },
                [
                  _c("div", [
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "inline-block text-80 h-9 pt-2" },
                          [_vm._v("\nHow do you want to view the PDF?")]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-sm leading-normal text-80 italic"
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.general.spdf,
                                expression: "general.spdf"
                              }
                            ],
                            staticClass: "form-control form-select",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.general,
                                  "spdf",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "download" } }, [
                              _vm._v(
                                "\n                                           Download The Pdf\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "browser-tab" } }, [
                              _vm._v(
                                "\n                                           Open the pdf in new window/tab\n                                        "
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "inline-block text-80 h-9 pt-2" },
                          [_vm._v("Choose a template")]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-sm leading-normal text-80 italic"
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.general.template,
                                expression: "general.template"
                              }
                            ],
                            staticClass: "form-control form-select",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.general,
                                  "template",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "simple" } }, [
                              _vm._v(
                                "\n                                            Simple\n                                        "
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "inline-block text-80 h-9 pt-2" },
                          [_vm._v("Paper Size")]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-sm leading-normal text-80 italic"
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.general.paper_size,
                                expression: "general.paper_size"
                              }
                            ],
                            staticClass: "form-control form-select",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.general,
                                  "paper_size",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "a4" } }, [
                              _vm._v(
                                "\n                                            A4\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "letter" } }, [
                              _vm._v(
                                "\n                                            Letter\n                                        "
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Test Mode\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.general.test_mode,
                              expression: "general.test_mode"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(_vm.general.test_mode)
                              ? _vm._i(_vm.general.test_mode, null) > -1
                              : _vm.general.test_mode
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.general.test_mode,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.general,
                                      "test_mode",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.general,
                                      "test_mode",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.general, "test_mode", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        With test mode enabled, any document generated will always use the latest settings, rather than using the settings as configured at the time the document was first created.\nNote: invoice numbers and dates are not affected by this setting and will still be generated.\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Extended currency symbol support\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.general.extended_currency_symbol,
                              expression: "general.extended_currency_symbol"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.general.extended_currency_symbol
                            )
                              ? _vm._i(
                                  _vm.general.extended_currency_symbol,
                                  null
                                ) > -1
                              : _vm.general.extended_currency_symbol
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.general.extended_currency_symbol,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.general,
                                      "extended_currency_symbol",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.general,
                                      "extended_currency_symbol",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.general,
                                  "extended_currency_symbol",
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Enable this if your currency symbol is not displaying properly\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40 " }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Enable font subsetting\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.general.front_subsetting,
                              expression: "general.front_subsetting"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(_vm.general.front_subsetting)
                              ? _vm._i(_vm.general.front_subsetting, null) > -1
                              : _vm.general.front_subsetting
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.general.front_subsetting,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.general,
                                      "front_subsetting",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.general,
                                      "front_subsetting",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.general, "front_subsetting", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Font subsetting can reduce file size by only including the characters that are used in the PDF, but limits the ability to edit PDF files later. Recommended if you're using an Asian font.\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "profile_photo" }
                          },
                          [
                            _vm._v(
                              "\n                                        Shop Header/Logo\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/4 px-8 py-6" }, [
                        _c("span", { staticClass: "form-file mr-4" }, [
                          _c("input", {
                            staticClass: "form-file-input select-none",
                            attrs: {
                              dusk: "profile_photo",
                              type: "file",
                              id: "file-profile_photo",
                              name: "name",
                              accept: "image/*"
                            },
                            on: { change: _vm.onChange }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass:
                                "form-file-btn btn btn-default btn-primary select-none",
                              attrs: { for: "file-profile_photo" }
                            },
                            [
                              _vm._v(
                                "\n                                    Choose File\n                                  "
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c("img", {
                          staticClass: "align-bottom w-8 h-8 rounded-full",
                          staticStyle: { "object-fit": "cover" },
                          attrs: {
                            src:
                              "https://www.gravatar.com/avatar/59a60f10561531f5719b98b55f37b481?s=300"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "inline-block text-80 h-9 pt-2" },
                          [_vm._v("Shop Name")]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-sm leading-normal text-80 italic"
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.general.shop_name,
                              expression: "general.shop_name"
                            }
                          ],
                          staticClass:
                            "w-full form-control form-input form-input-bordered",
                          attrs: {
                            placeholder: "Year of copyrighting",
                            type: "year"
                          },
                          domProps: { value: _vm.general.shop_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.general,
                                "shop_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/5 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "excerpt" }
                          },
                          [
                            _vm._v(
                              "\n                                        Shop Address\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "py-6 px-8 w-4/5" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.general.shop_address,
                              expression: "general.shop_address"
                            }
                          ],
                          staticClass:
                            "w-full form-control form-input form-input-bordered py-3 h-auto",
                          attrs: { rows: "5", placeholder: "Shop Address" },
                          domProps: { value: _vm.general.shop_address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.general,
                                "shop_address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/5 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "excerpt" }
                          },
                          [
                            _vm._v(
                              "\n                                        Footer: terms & conditions, policies, etc.\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "py-6 px-8 w-4/5" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.general.footer_terms_policies,
                              expression: "general.footer_terms_policies"
                            }
                          ],
                          staticClass:
                            "w-full form-control form-input form-input-bordered py-3 h-auto",
                          attrs: {
                            rows: "3",
                            placeholder:
                              "Footer: terms & conditions, policies, etc."
                          },
                          domProps: {
                            value: _vm.general.footer_terms_policies
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.general,
                                "footer_terms_policies",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-20 remove-last-margin-bottom leading-normal w-full py-4 px-8"
                        },
                        [
                          _c("h3", [_vm._v("Extra template fields")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "help-text help-text mt-2" },
                            [
                              _vm._v(
                                "\n                                        These are used for the (optional) footer columns in the Modern (Premium) template, but can also be used for other elements in your custom template\n                                    "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg-30 flex px-8 py-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "ml-auto btn btn-default btn-primary mr-3",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                                Update Setting\n                            "
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tab", { attrs: { name: "Document" } }, [
            _c("div", { staticClass: "card overflow-hidden" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateSetting($event)
                    }
                  }
                },
                [
                  _c("div", [
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Enable\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.documents.enable,
                              expression: "documents.enable"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", id: "active" },
                          domProps: {
                            checked: Array.isArray(_vm.documents.enable)
                              ? _vm._i(_vm.documents.enable, null) > -1
                              : _vm.documents.enable
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.documents.enable,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "enable",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "enable",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.documents, "enable", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        With test mode enabled, any document generated will always use the latest settings, rather than using the settings as configured at the time the document was first created.\nNote: invoice numbers and dates are not affected by this setting and will still be generated.\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "inline-block text-80 h-9 pt-2" },
                          [_vm._v("Attach to:")]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-sm leading-normal text-80 italic"
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "flex items-center select-none mt-2" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.documents.attach_to,
                                  expression: "documents.attach_to"
                                }
                              ],
                              staticClass: "checkbox mr-2",
                              attrs: {
                                id: "new_order",
                                type: "checkbox",
                                value: "new_order"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.documents.attach_to)
                                  ? _vm._i(
                                      _vm.documents.attach_to,
                                      "new_order"
                                    ) > -1
                                  : _vm.documents.attach_to
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.documents.attach_to,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "new_order",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.documents, "attach_to", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(
                              " New order (Admin email)\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "flex items-center select-none mt-2" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.documents.attach_to,
                                  expression: "documents.attach_to"
                                }
                              ],
                              staticClass: "checkbox mr-2",
                              attrs: {
                                id: "cancelled_order",
                                type: "checkbox",
                                value: "cancelled_order"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.documents.attach_to)
                                  ? _vm._i(
                                      _vm.documents.attach_to,
                                      "cancelled_order"
                                    ) > -1
                                  : _vm.documents.attach_to
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.documents.attach_to,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "cancelled_order",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.documents, "attach_to", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(
                              "Cancelled order\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "flex items-center select-none mt-2" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.documents.attach_to,
                                  expression: "documents.attach_to"
                                }
                              ],
                              staticClass: "checkbox mr-2",
                              attrs: {
                                id: "failed_order",
                                type: "checkbox",
                                value: "failed_order"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.documents.attach_to)
                                  ? _vm._i(
                                      _vm.documents.attach_to,
                                      "failed_order"
                                    ) > -1
                                  : _vm.documents.attach_to
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.documents.attach_to,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "failed_order",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.documents, "attach_to", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(
                              "Failed order\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "flex items-center select-none mt-2" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.documents.attach_to,
                                  expression: "documents.attach_to"
                                }
                              ],
                              staticClass: "checkbox mr-2",
                              attrs: {
                                id: "order_on_hold",
                                type: "checkbox",
                                value: "order_on_hold"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.documents.attach_to)
                                  ? _vm._i(
                                      _vm.documents.attach_to,
                                      "order_on_hold"
                                    ) > -1
                                  : _vm.documents.attach_to
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.documents.attach_to,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "order_on_hold",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.documents,
                                          "attach_to",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.documents, "attach_to", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(
                              " Order on-hold\n                                    "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Display shipping address\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.documents.display_shipping_address,
                              expression: "documents.display_shipping_address"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.documents.display_shipping_address
                            )
                              ? _vm._i(
                                  _vm.documents.display_shipping_address,
                                  null
                                ) > -1
                              : _vm.documents.display_shipping_address
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.documents.display_shipping_address,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "display_shipping_address",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "display_shipping_address",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.documents,
                                  "display_shipping_address",
                                  $$c
                                )
                              }
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Display email address\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.documents.display_email_address,
                              expression: "documents.display_email_address"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.documents.display_email_address
                            )
                              ? _vm._i(
                                  _vm.documents.display_email_address,
                                  null
                                ) > -1
                              : _vm.documents.display_email_address
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.documents.display_email_address,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "display_email_address",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "display_email_address",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.documents,
                                  "display_email_address",
                                  $$c
                                )
                              }
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Display phone number\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.documents.display_phone_number,
                              expression: "documents.display_phone_number"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.documents.display_phone_number
                            )
                              ? _vm._i(
                                  _vm.documents.display_phone_number,
                                  null
                                ) > -1
                              : _vm.documents.display_phone_number
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.documents.display_phone_number,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "display_phone_number",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "display_phone_number",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.documents,
                                  "display_phone_number",
                                  $$c
                                )
                              }
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "inline-block text-80 h-9 pt-2" },
                          [_vm._v("Display invoice date")]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-sm leading-normal text-80 italic"
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.documents.display_invoice_date,
                                expression: "documents.display_invoice_date"
                              }
                            ],
                            staticClass: "form-control form-select",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.documents,
                                  "display_invoice_date",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "no" } }, [
                              _vm._v(
                                "\n                                           No\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "invoice_date" } }, [
                              _vm._v(
                                "\n                                           Invoice Date\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "order_date" } }, [
                              _vm._v(
                                "\n                                           Order Date\n                                        "
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          { staticClass: "inline-block text-80 h-9 pt-2" },
                          [_vm._v("Display invoice number")]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-sm leading-normal text-80 italic"
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.documents.display_phone_number,
                                expression: "documents.display_phone_number"
                              }
                            ],
                            staticClass: "form-control form-select",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.documents,
                                  "display_phone_number",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "no" } }, [
                              _vm._v(
                                "\n                                           No\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "invoice_number" } },
                              [
                                _vm._v(
                                  "\n                                           Invoice Number\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "order_number" } }, [
                              _vm._v(
                                "\n                                           Order Number\n                                        "
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Enable invoice number column in the orders list\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value:
                                _vm.documents
                                  .enable_invoice_number_column_oder_list,
                              expression:
                                "documents.enable_invoice_number_column_oder_list"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.documents
                                .enable_invoice_number_column_oder_list
                            )
                              ? _vm._i(
                                  _vm.documents
                                    .enable_invoice_number_column_oder_list,
                                  null
                                ) > -1
                              : _vm.documents
                                  .enable_invoice_number_column_oder_list
                          },
                          on: {
                            change: function($event) {
                              var $$a =
                                  _vm.documents
                                    .enable_invoice_number_column_oder_list,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "enable_invoice_number_column_oder_list",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "enable_invoice_number_column_oder_list",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.documents,
                                  "enable_invoice_number_column_oder_list",
                                  $$c
                                )
                              }
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Disable for free products\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.documents.disable_for_free_products,
                              expression: "documents.disable_for_free_products"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.documents.disable_for_free_products
                            )
                              ? _vm._i(
                                  _vm.documents.disable_for_free_products,
                                  null
                                ) > -1
                              : _vm.documents.disable_for_free_products
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.documents.disable_for_free_products,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "disable_for_free_products",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.documents,
                                      "disable_for_free_products",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.documents,
                                  "disable_for_free_products",
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Disable automatic creation/attachment when only free products are ordered\n                                    "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg-30 flex px-8 py-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "ml-auto btn btn-default btn-primary mr-3",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                                Update Setting\n                            "
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tab", { attrs: { name: "Status" } }, [
            _c("div", { staticClass: "card overflow-hidden" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateSetting($event)
                    }
                  }
                },
                [
                  _c("div", [
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Legacy mode\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.status.legacy_mode,
                              expression: "status.legacy_mode"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(_vm.status.legacy_mode)
                              ? _vm._i(_vm.status.legacy_mode, null) > -1
                              : _vm.status.legacy_mode
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.status.legacy_mode,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.status,
                                      "legacy_mode",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.status,
                                      "legacy_mode",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.status, "legacy_mode", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Legacy mode ensures compatibility with templates and filters from previous versions.\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Allow guest access\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.status.allow_guest_access,
                              expression: "status.allow_guest_access"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.status.allow_guest_access
                            )
                              ? _vm._i(_vm.status.allow_guest_access, null) > -1
                              : _vm.status.allow_guest_access
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.status.allow_guest_access,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.status,
                                      "allow_guest_access",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.status,
                                      "allow_guest_access",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.status, "allow_guest_access", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Enable this to allow customers that purchase without an account to access their PDF with a unique key\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Calculate document numbers (slow)\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.status.calculate_document_number,
                              expression: "status.calculate_document_number"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox", name: "Active" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.status.calculate_document_number
                            )
                              ? _vm._i(
                                  _vm.status.calculate_document_number,
                                  null
                                ) > -1
                              : _vm.status.calculate_document_number
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.status.calculate_document_number,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.status,
                                      "calculate_document_number",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.status,
                                      "calculate_document_number",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.status,
                                  "calculate_document_number",
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Document numbers (such as invoice numbers) are generated using AUTO_INCREMENT by default. Use this setting if your database auto increments with more than 1.\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Enable debug output\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.status.enable_debug_output,
                              expression: "status.enable_debug_output"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.status.enable_debug_output
                            )
                              ? _vm._i(_vm.status.enable_debug_output, null) >
                                -1
                              : _vm.status.enable_debug_output
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.status.enable_debug_output,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.status,
                                      "enable_debug_output",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.status,
                                      "enable_debug_output",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.status, "enable_debug_output", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Enable this option to output plugin errors if you're getting a blank page or other PDF generation issues\nCaution! This setting may reveal errors (from other plugins) in other places on your site too, therefor this is not recommended to leave it enabled on live sites.\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex border-b border-40" }, [
                      _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "inline-block text-80 pt-2 leading-tight",
                            attrs: { for: "active" }
                          },
                          [
                            _vm._v(
                              "\n                                       Output to HTML\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-3/4 px-8 py-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.status.output_to_html,
                              expression: "status.output_to_html"
                            }
                          ],
                          staticClass: "checkbox mt-2",
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.status.output_to_html)
                              ? _vm._i(_vm.status.output_to_html, null) > -1
                              : _vm.status.output_to_html
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.status.output_to_html,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.status,
                                      "output_to_html",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.status,
                                      "output_to_html",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.status, "output_to_html", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-text help-text mt-2" }, [
                          _vm._v(
                            "\n                                        Send the template output as HTML to the browser instead of creating a PDF.\n                                    "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg-30 flex px-8 py-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "ml-auto btn btn-default btn-primary mr-3",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                                Update Setting\n                            "
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);