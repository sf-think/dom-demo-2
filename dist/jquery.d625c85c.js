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
})({"ZC2/":[function(require,module,exports) {
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.$ = window.jQuery = function (selectorOrArrayOrTemplate) {
  var elements = void 0;
  if (typeof selectorOrArrayOrTemplate === "string") {
    if (selectorOrArrayOrTemplate[0] === "<") {
      elements = [createElement(selectorOrArrayOrTemplate)];
    } else {
      elements = document.querySelectorAll(selectorOrArrayOrTemplate);
    }
  } else if (selectorOrArrayOrTemplate instanceof Array) {
    elements = selectorOrArrayOrTemplate;
  }

  function createElement(string) {
    var container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  }
  // 创建 api 对象，对象的 __proto__ 为 jQuery.prototype
  var api = Object.create(jQuery.prototype);
  console.dir(api);

  // api.elements = elements
  // api.oldApi = selectorOrArrayOrTemplate.oldApi
  Object.assign(api, {
    elements: elements,
    oldApi: selectorOrArrayOrTemplate.oldApi
  });

  return api;
};
jQuery.fn = jQuery.prototype = {
  constructor: jQuery,
  jquery: true,
  get: function get(index) {
    return this.elements[index];
  },
  appendTo: function appendTo(node) {
    if (node instanceof Element) {
      this.each(function (el) {
        return node.appendChild(el);
      });
    } else if (node.jquery === true) {
      this.each(function (el) {
        return node.get(0).appendChild(el);
      });
    }
  },
  append: function append(children) {
    var _this = this;

    if (children instanceof Element) {
      this.get(0).appendChild(children);
    } else if (children instanceof HTMLCollection) {
      for (var i = 0; i < children.length; i++) {
        this.get(0).appendChild(children[i]);
      }
    } else if (children.jquery === true) {
      children.each(function (node) {
        return _this.get(0).appendChild(node);
      });
    }
  },
  addClass: function addClass(className) {
    for (var i = 0; i < this.elements.length; i++) {
      var element = this.elements[i];
      element.classList.add(className);
    }
    return this;
  },
  find: function find(selector) {
    var array = [];
    for (var i = 0; i < this.elements.length; i++) {
      var elements2 = Array.from(this.elements[i].querySelectorAll(selector));
      array = array.concat(this.elements2);
    }
    array.oldApi = this;
    return jQuery(array);
  },
  parent: function parent() {
    var array = [];
    this.each(function (node) {
      if (array.indexOf(node.parentNode) === -1) {
        array.push(node.parentNode);
      }
    });
    return jQuery(array);
  },
  children: function children() {
    var array = [];
    this.each(function (node) {
      array.push.apply(array, _toConsumableArray(node.children));
    });
    return jQuery(array);
  },
  each: function each(fn) {
    for (var i = 0; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i);
    }
    return this;
  },
  print: function print() {
    console.log(this.elements);
  },
  end: function end() {
    return this.oldApi;
  }
};
},{}]},{},["ZC2/"], null)
//# sourceMappingURL=jquery.d625c85c.map