// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"scripts/bulma-carousel.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.bulmaCarousel = t() : e.bulmaCarousel = t();
}("undefined" != typeof self ? self : this, function () {
  return function (n) {
    var i = {};

    function s(e) {
      if (i[e]) return i[e].exports;
      var t = i[e] = {
        i: e,
        l: !1,
        exports: {}
      };
      return n[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
    }

    return s.m = n, s.c = i, s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: n
      });
    }, s.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return s.d(t, "a", t), t;
    }, s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "", s(s.s = 0);
  }([function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(1),
        r = n(2),
        o = function () {
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      return function (e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      };
    }();

    var a = "carousel:ready",
        l = "carousel:slide:before",
        u = "carousel:slide:after",
        h = Symbol("onSwipeStart"),
        c = Symbol("onSwipeMove"),
        d = Symbol("onSwipeEnd"),
        f = !1;

    try {
      var s = Object.defineProperty({}, "passive", {
        get: function get() {
          f = !0;
        }
      });
      window.addEventListener("testPassive", null, s), window.removeEventListener("testPassive", null, s);
    } catch (e) {}

    var v = function (e) {
      function s(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, s);

        var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
        }(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));

        if (n.element = "string" == typeof e ? document.querySelector(e) : e, !n.element) throw new Error("An invalid selector or non-DOM node has been provided.");
        return n._clickEvents = ["click"], n.options = Object.assign({}, r.a, t), n.element.dataset.autoplay && (n.options.autoplay = n.element.dataset.autoplay), n.element.dataset.delay && (n.options.delay = n.element.dataset.delay), n.element.dataset.size && !n.element.classList.contains("carousel-animate-fade") && (n.options.size = n.element.dataset.size), n.element.classList.contains("carousel-animate-fade") && (n.options.size = 1), n.forceHiddenNavigation = !1, n[h] = n[h].bind(n), n[c] = n[c].bind(n), n[d] = n[d].bind(n), n.init(), n;
      }

      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(s, i["a"]), o(s, [{
        key: "init",
        value: function value() {
          this.container = this.element.querySelector(".carousel-container"), this.items = this.element.querySelectorAll(".carousel-item"), this.currentItem = {
            element: this.element,
            node: this.element.querySelector(".carousel-item.is-active"),
            pos: -1
          }, this.currentItem.pos = this.currentItem.node ? Array.from(this.items).indexOf(this.currentItem.node) : -1, this.currentItem.node || (this.currentItem.node = this.items[0], this.currentItem.node.classList.add("is-active"), this.currentItem.pos = 0), this.forceHiddenNavigation = this.items.length <= 1;
          var e = this.element.querySelectorAll("img");
          [].forEach.call(e, function (e) {
            e.setAttribute("draggable", !1);
          }), this._resize(), this._setOrder(), this._initNavigation(), this._bindEvents(), this.options.autoplay && this._autoPlay(this.options.delay), this.emit(a, this.currentItem);
        }
      }, {
        key: "_resize",
        value: function value() {
          var t = this,
              e = window.getComputedStyle(this.element),
              n = parseInt(e.getPropertyValue("width"), 10);

          if (1 < this.options.size && (this.options.size >= Array.from(this.items).length ? this.offset = 0 : this.offset = n / this.options.size, this.container.style.left = 0 - this.offset + "px", this.container.style.transform = "translateX(" + this.offset + "px)", [].forEach.call(this.items, function (e) {
            e.style.flexBasis = t.offset + "px";
          })), this.element.classList.contains("carousel-animate-fade") && this.items.length) {
            var i = this.items[0].querySelector("img"),
                s = 1;
            i.naturalWidth ? (s = n / i.naturalWidth, this.container.style.height = i.naturalHeight * s + "px") : i.onload = function () {
              s = n / i.naturalWidth, t.container.style.height = i.naturalHeight * s + "px";
            };
          }
        }
      }, {
        key: "_bindEvents",
        value: function value() {
          var t = this;
          this.previousControl && this._clickEvents.forEach(function (e) {
            t.previousControl.addEventListener(e, function (e) {
              f || e.preventDefault(), t._autoPlayInterval && (clearInterval(t._autoPlayInterval), t._autoPlay(t.optionsdelay)), t._slide("previous");
            }, !!f && {
              passive: !0
            });
          }), this.nextControl && this._clickEvents.forEach(function (e) {
            t.nextControl.addEventListener(e, function (e) {
              f || e.preventDefault(), t._autoPlayInterval && (clearInterval(t._autoPlayInterval), t._autoPlay(t.options.delay)), t._slide("next");
            }, !!f && {
              passive: !0
            });
          }), this.element.addEventListener("touchstart", this[h], !!f && {
            passive: !0
          }), this.element.addEventListener("mousedown", this[h], !!f && {
            passive: !0
          }), this.element.addEventListener("touchmove", this[c], !!f && {
            passive: !0
          }), this.element.addEventListener("mousemove", this[c], !!f && {
            passive: !0
          }), this.element.addEventListener("touchend", this[d], !!f && {
            passive: !0
          }), this.element.addEventListener("mouseup", this[d], !!f && {
            passive: !0
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          this.element.removeEventListener("touchstart", this[h], !!f && {
            passive: !0
          }), this.element.removeEventListener("mousedown", this[h], !!f && {
            passive: !0
          }), this.element.removeEventListener("touchmove", this[c], !!f && {
            passive: !0
          }), this.element.removeEventListener("mousemove", this[c], !!f && {
            passive: !0
          }), this.element.removeEventListener("touchend", this[d], !!f && {
            passive: !0
          }), this.element.removeEventListener("mouseup", this[d], !!f && {
            passive: !0
          });
        }
      }, {
        key: h,
        value: function value(e) {
          f || e.preventDefault(), e = "changedTouches" in (e = e || window.event) ? e.changedTouches[0] : e, this._touch = {
            start: {
              time: new Date().getTime(),
              x: e.pageX,
              y: e.pageY
            },
            dist: {
              x: 0,
              y: 0
            }
          };
        }
      }, {
        key: c,
        value: function value(e) {
          f || e.preventDefault();
        }
      }, {
        key: d,
        value: function value(e) {
          f || e.preventDefault(), e = "changedTouches" in (e = e || window.event) ? e.changedTouches[0] : e, this._touch.dist = {
            x: e.pageX - this._touch.start.x,
            y: e.pageY - this._touch.start.y
          }, this._handleGesture();
        }
      }, {
        key: "_handleGesture",
        value: function value() {
          new Date().getTime() - this._touch.start.time <= this.options.allowedTime && Math.abs(this._touch.dist.x) >= this.options.threshold && Math.abs(this._touch.dist.y) <= this.options.restraint && (this._touch.dist.x < 0 ? this._slide("next") : this._slide("previous"));
        }
      }, {
        key: "_initNavigation",
        value: function value() {
          this.previousControl = this.element.querySelector(".carousel-nav-left"), this.nextControl = this.element.querySelector(".carousel-nav-right"), (this.items.length <= 1 || this.forceHiddenNavigation) && (this.container && (this.container.style.left = "0"), this.previousControl && (this.previousControl.style.display = "none"), this.nextControl && (this.nextControl.style.display = "none"));
        }
      }, {
        key: "_setOrder",
        value: function value() {
          this.currentItem.node.style.order = "1", this.currentItem.node.style.zIndex = "1";
          var e,
              t = this.currentItem.node,
              n = void 0,
              i = void 0;

          for (n = i = 2, e = Array.from(this.items).length; 2 <= e ? i <= e : e <= i; n = 2 <= e ? ++i : --i) {
            (t = this._next(t)).style.order = "" + n % Array.from(this.items).length, t.style.zIndex = "0";
          }
        }
      }, {
        key: "_next",
        value: function value(e) {
          return e.nextElementSibling ? e.nextElementSibling : this.items[0];
        }
      }, {
        key: "_previous",
        value: function value(e) {
          return e.previousElementSibling ? e.previousElementSibling : this.items[this.items.length - 1];
        }
      }, {
        key: "_slide",
        value: function value() {
          var e = this,
              t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "next";
          this.items.length && (this.oldItemNode = this.currentItem.node, this.emit(l, this.currentItem), "previous" === t ? (this.currentItem.node = this._previous(this.currentItem.node), this.element.classList.contains("carousel-animate-fade") || (this.element.classList.add("is-reversing"), this.container.style.transform = "translateX(" + -Math.abs(this.offset) + "px)")) : (this.currentItem.node = this._next(this.currentItem.node), this.element.classList.remove("is-reversing"), this.container.style.transform = "translateX(" + Math.abs(this.offset) + "px)"), this.currentItem.node.classList.add("is-active"), this.oldItemNode.classList.remove("is-active"), this.element.classList.remove("carousel-animated"), setTimeout(function () {
            e.element.classList.add("carousel-animated");
          }, 50), this._setOrder(), this.emit(u, this.currentItem));
        }
      }, {
        key: "_autoPlay",
        value: function value() {
          var e = this,
              t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 5e3;
          this._autoPlayInterval = setInterval(function () {
            e._slide("next");
          }, t);
        }
      }], [{
        key: "attach",
        value: function value() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".carousel, .hero-carousel",
              t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              n = new Array(),
              i = document.querySelectorAll(e);
          return [].forEach.call(i, function (e) {
            setTimeout(function () {
              n.push(new s(e, t));
            }, 100);
          }), n;
        }
      }]), s;
    }();

    t.default = v;
  }, function (e, t, n) {
    "use strict";

    var i = function () {
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      return function (e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      };
    }();

    var s = function () {
      function t() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._listeners = new Map(e), this._middlewares = new Map();
      }

      return i(t, [{
        key: "listenerCount",
        value: function value(e) {
          return this._listeners.has(e) ? this._listeners.get(e).length : 0;
        }
      }, {
        key: "removeListeners",
        value: function value() {
          var t = this,
              e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
              n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          null !== e ? Array.isArray(e) ? name.forEach(function (e) {
            return t.removeListeners(e, n);
          }) : (this._listeners.delete(e), n && this.removeMiddleware(e)) : this._listeners = new Map();
        }
      }, {
        key: "middleware",
        value: function value(e, t) {
          var n = this;
          Array.isArray(e) ? name.forEach(function (e) {
            return n.middleware(e, t);
          }) : (Array.isArray(this._middlewares.get(e)) || this._middlewares.set(e, []), this._middlewares.get(e).push(t));
        }
      }, {
        key: "removeMiddleware",
        value: function value() {
          var t = this,
              e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
          null !== e ? Array.isArray(e) ? name.forEach(function (e) {
            return t.removeMiddleware(e);
          }) : this._middlewares.delete(e) : this._middlewares = new Map();
        }
      }, {
        key: "on",
        value: function value(e, t) {
          var n = this,
              i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
          if (Array.isArray(e)) e.forEach(function (e) {
            return n.on(e, t);
          });else {
            var s = (e = e.toString()).split(/,|, | /);
            1 < s.length ? s.forEach(function (e) {
              return n.on(e, t);
            }) : (Array.isArray(this._listeners.get(e)) || this._listeners.set(e, []), this._listeners.get(e).push({
              once: i,
              callback: t
            }));
          }
        }
      }, {
        key: "once",
        value: function value(e, t) {
          this.on(e, t, !0);
        }
      }, {
        key: "emit",
        value: function value(n, i) {
          var s = this,
              r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
          n = n.toString();

          var o = this._listeners.get(n),
              a = null,
              l = 0,
              u = r;

          if (Array.isArray(o)) for (o.forEach(function (e, t) {
            r || (a = s._middlewares.get(n), Array.isArray(a) ? (a.forEach(function (e) {
              e(i, function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                null !== e && (i = e), l++;
              }, n);
            }), l >= a.length && (u = !0)) : u = !0), u && (e.once && (o[t] = null), e.callback(i));
          }); -1 !== o.indexOf(null);) {
            o.splice(o.indexOf(null), 1);
          }
        }
      }]), t;
    }();

    t.a = s;
  }, function (e, t, n) {
    "use strict";

    t.a = {
      size: 1,
      autoplay: !1,
      delay: 5e3,
      threshold: 50,
      restraint: 100,
      allowedTime: 500
    };
  }]).default;
});
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52182" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/bulma-carousel.min.js"], null)
//# sourceMappingURL=/bulma-carousel.min.00569d43.map