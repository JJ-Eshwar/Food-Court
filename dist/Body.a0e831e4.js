// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lv5og":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "298b2e9aa0e831e4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"3FsDI","74ad5ea14201648c":"7i2ML"}],"8yaV8":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$0606 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$0606.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _client = require("react-dom/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _mockdataJs = require("../utils/mockdata.js");
var _mockdataJsDefault = parcelHelpers.interopDefault(_mockdataJs);
var _restaurantCardJs = require("./RestaurantCard.js");
var _restaurantCardJsDefault = parcelHelpers.interopDefault(_restaurantCardJs);
var _shimmerJs = require("./Shimmer.js");
var _shimmerJsDefault = parcelHelpers.interopDefault(_shimmerJs);
var _reactRouterDom = require("react-router-dom");
var _restaurantMenuJs = require("./RestaurantMenu.js");
var _restaurantMenuJsDefault = parcelHelpers.interopDefault(_restaurantMenuJs);
var _s = $RefreshSig$();
const Body = ()=>{
    _s();
    const [listOfrestaurants, setListOfRestaurant] = (0, _react.useState)([]);
    const [searchText, setSearchText] = (0, _react.useState)("");
    const [allRestaurants, setAllRestaurants] = (0, _react.useState)([]);
    const [filteredRestaurant, setfilteredRestaurant] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // console.log("data",data.data.cards.card[2].data.data.cards)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // return listOfrestaurants.length == 0 ? <Shimmer /> : (
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "container mx-auto py-6 px-4 min-h-screen",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "btn1 filter  justify-center items-center space-x-5 pt-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "search",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                type: "text",
                                placeholder: "Search for restaurants",
                                className: " border border-gray-300 rounded-lg px-4 py-2 w-1/6 focus:outline-none focus:ring-2",
                                value: searchText,
                                onChange: (e)=>{
                                    setSearchText(e.target.value);
                                }
                            }, void 0, false, {
                                fileName: "src/components/Body.js",
                                lineNumber: 48,
                                columnNumber: 21
                            }, undefined),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Body.js",
                        lineNumber: 47,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "search-box flex",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "search-btn btn    px-4 py-2 rounded-lg  focus:outline-none focus:ring-2",
                            onClick: ()=>{
                                const filteredRestaurant = listOfrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setfilteredRestaurant(filteredRestaurant);
                            },
                            children: "Search"
                        }, void 0, false, {
                            fileName: "src/components/Body.js",
                            lineNumber: 53,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Body.js",
                        lineNumber: 52,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: " filtering-btn  btn  text-black  px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 ",
                        onClick: ()=>{
                            const filteredList = listOfrestaurants.filter((res)=>res.info.avgRating > 4);
                            setListOfRestaurant(filteredList);
                        },
                        children: "Top Rated Restaurants"
                    }, void 0, false, {
                        fileName: "src/components/Body.js",
                        lineNumber: 61,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Body.js",
                lineNumber: 46,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "res-container flex pl-30 flex-wrap gap-4 mt-8",
                children: filteredRestaurant.map((restaurant)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        className: "cardLink",
                        to: `/restaurant/${restaurant.info.id}`,
                        children: [
                            " ",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantCardJsDefault.default), {
                                resData: restaurant
                            }, void 0, false, {
                                fileName: "src/components/Body.js",
                                lineNumber: 78,
                                columnNumber: 23
                            }, undefined)
                        ]
                    }, restaurant.info.id, true, {
                        fileName: "src/components/Body.js",
                        lineNumber: 74,
                        columnNumber: 19
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/Body.js",
                lineNumber: 71,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Body.js",
        lineNumber: 45,
        columnNumber: 9
    }, undefined);
};
_s(Body, "FlToEpo5KV1x9NwdOqthO1QHAwo=");
_c = Body;
exports.default = Body;
var _c;
$RefreshReg$(_c, "Body");

  $parcel$ReactRefreshHelpers$0606.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react/jsx-dev-runtime":"iTorj","react":"21dqq","react-dom/client":"lOjBx","../utils/mockdata.js":"3drqL","./RestaurantCard.js":"bMboU","./Shimmer.js":"g6ZGj","react-router-dom":"9xmpe","./RestaurantMenu.js":"8PuJ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3drqL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const restaurantList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "74453",
            name: "Domino's Pizza",
            uuid: "87727dbd-7f2b-4857-9763-359624165845",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: [
                "Pizzas"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "\u20B9400 FOR TWO",
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            slaString: "45 MINS",
            lastMileTravel: 0,
            slugs: {
                restaurant: "dominos-pizza-majura-nondh-test_surat",
                city: "surat"
            },
            cityState: "21",
            address: "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
            locality: "Bhatar Road",
            parentId: 2456,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "2.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "74453",
                deliveryTime: 45,
                minDeliveryTime: 45,
                maxDeliveryTime: 45,
                lastMileTravel: 0,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "410476",
            name: "The Brooklyn Creamery - Healthy Ice Cream",
            uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
            city: "21",
            area: "althan bhatar",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "ldtibwymvzehvmdwl8la",
            cuisines: [
                "Desserts",
                "Ice Cream",
                "Healthy Food"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "\u20B9200 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 6.300000190734863,
            slugs: {
                restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
            locality: "Adajan FC",
            parentId: 236673,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "410476",
                deliveryTime: 31,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 6.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.4",
            totalRatings: 100,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "81094",
            name: "Richie Rich Juices & Shakes",
            uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
            city: "21",
            area: "Athwa",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
            cuisines: [
                "Ice Cream"
            ],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "\u20B9250 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 5.599999904632568,
            slugs: {
                restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
            locality: "Parle Point",
            parentId: 771,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "5.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "81094",
                deliveryTime: 30,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 5.599999904632568,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 500,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "311443",
            name: "Siddhi Icecream & Thick Shake",
            uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
            city: "21",
            area: "Nanpura",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "spd3y5gok3vvwqulgmda",
            cuisines: [
                "Ice Cream",
                "Juices",
                "Desserts",
                "Beverages"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "\u20B9200 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 3,
            slugs: {
                restaurant: "siddhi-icecream-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
            locality: "Athwa",
            parentId: 387846,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "311443",
                deliveryTime: 30,
                minDeliveryTime: 25,
                maxDeliveryTime: 35,
                lastMileTravel: 3,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.5",
            totalRatings: 100,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "307070",
            name: "Pizza Pie",
            uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
            city: "21",
            area: "Nanpura",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "bvr70adr30ejyr5ua79k",
            cuisines: [
                "Pizzas"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "\u20B9300 FOR TWO",
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 4,
            slugs: {
                restaurant: "pizza-pie-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
            locality: "Nanpura",
            parentId: 158854,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "307070",
                deliveryTime: 37,
                minDeliveryTime: 35,
                maxDeliveryTime: 45,
                lastMileTravel: 4,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 50,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "76858",
            name: "Feeling Hungry",
            uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
            cuisines: [
                "Chinese",
                "North Indian",
                "Biryani"
            ],
            tags: [],
            costForTwo: 2000,
            costForTwoString: "\u20B920 FOR TWO",
            deliveryTime: 35,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 3.700000047683716,
            slugs: {
                restaurant: "feeling-hungry-adajan-gam-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
            locality: "Royal Residency, Adajan Gam",
            parentId: 79237,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "3.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "76858",
                deliveryTime: 35,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 3.700000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.2",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "617279",
            name: "Malaxmi Fast Food",
            uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
            city: "21",
            area: "Adajan",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "agkm7cflq72tkualhstb",
            cuisines: [
                "Fast Food",
                "Pizzas",
                "Snacks",
                "Beverages"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "\u20B9200 FOR TWO",
            deliveryTime: 44,
            minDeliveryTime: 40,
            maxDeliveryTime: 50,
            slaString: "40-50 MINS",
            lastMileTravel: 9.100000381469727,
            slugs: {
                restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
                city: "surat"
            },
            cityState: "21",
            address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
            locality: "Palanpur Food Zone",
            parentId: 373635,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "9.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "617279",
                deliveryTime: 44,
                minDeliveryTime: 40,
                maxDeliveryTime: 50,
                lastMileTravel: 9.100000381469727,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 20,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "469264",
            name: "Dessert House",
            uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "jegpumsjcmomksbr2sxr",
            cuisines: [
                "Desserts",
                "Ice Cream"
            ],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "\u20B9150 FOR TWO",
            deliveryTime: 27,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
                restaurant: "dessert-house-piplod-piplod",
                city: "surat"
            },
            cityState: "21",
            address: "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
            locality: "Piplod",
            parentId: 71430,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "469264",
                deliveryTime: 27,
                minDeliveryTime: 25,
                maxDeliveryTime: 35,
                lastMileTravel: 6.199999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.5",
            totalRatings: 0,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "395204",
            name: "McDonald's Gourmet Burger Collection",
            uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
            city: "21",
            area: "Piplod",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
            cuisines: [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "\u20B9500 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 8.199999809265137,
            slugs: {
                restaurant: "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
                city: "surat"
            },
            cityState: "21",
            address: "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
            locality: "Valentine Cinema",
            parentId: 10761,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "8.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "395204",
                deliveryTime: 31,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 8.199999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 100,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "193541",
            name: "Behrouz Biryani",
            uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
            city: "21",
            area: "Adajan Patiya",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "craozjakzx7sll2uracb",
            cuisines: [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "North Indian",
                "Persian",
                "Desserts"
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "\u20B9500 FOR TWO",
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 55,
            slaString: "45-55 MINS",
            lastMileTravel: 6.400000095367432,
            slugs: {
                restaurant: "behrouz-biryani-adajan-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
            locality: "Nr Navyug College, Rander Road",
            parentId: 1803,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "193541",
                deliveryTime: 49,
                minDeliveryTime: 45,
                maxDeliveryTime: 55,
                lastMileTravel: 6.400000095367432,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.3",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "475510",
            name: "Momos House",
            uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "vmold2zualdrrypxcvue",
            cuisines: [
                "Fast Food"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "\u20B9200 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
                restaurant: "momo\u2019s-house-piplod-piplod",
                city: "surat"
            },
            cityState: "21",
            address: "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
            locality: "Vesu",
            parentId: 15884,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "475510",
                deliveryTime: 31,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 6.199999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 0,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "127596",
            name: "Sabir Chicken",
            uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
            city: "21",
            area: "Chowk Bazar",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "kilrdjqt8chduasii5ni",
            cuisines: [
                "North Indian",
                "Biryani"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "\u20B9300 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 4.300000190734863,
            slugs: {
                restaurant: "sabir-chicken-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
            locality: "Chowk Bazar",
            parentId: 173978,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "4.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "127596",
                deliveryTime: 30,
                minDeliveryTime: 25,
                maxDeliveryTime: 35,
                lastMileTravel: 4.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 5000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "64656",
            name: "Mahesh Pav Bhaji",
            uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
            city: "21",
            area: "Adajan",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
            cuisines: [
                "Desserts",
                "Chinese",
                "South Indian",
                "Ice Cream",
                "Pizzas"
            ],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "\u20B9250 FOR TWO",
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 6.900000095367432,
            slugs: {
                restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
            locality: "Adajan Gam",
            parentId: 6553,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "30% off",
                shortDescriptionList: [
                    {
                        meta: "30% off | Use JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "30% off up to \u20B9150 on orders above \u20B9400 | Use code JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "30% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "30% off up to \u20B9150 on orders above \u20B9400 | Use code JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.9 kms",
            hasSurge: false,
            sla: {
                restaurantId: "64656",
                deliveryTime: 36,
                minDeliveryTime: 35,
                maxDeliveryTime: 45,
                lastMileTravel: 6.900000095367432,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 10000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "255204",
            name: "The Dango Cake Shop",
            uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
            city: "21",
            area: "Galaxy Circle",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "mnvfpsoealkflze4e5qi",
            cuisines: [
                "Bakery"
            ],
            tags: [],
            costForTwo: 27000,
            costForTwoString: "\u20B9270 FOR TWO",
            deliveryTime: 34,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 7.699999809265137,
            slugs: {
                restaurant: "twisted-cake-live-cake-adajan-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "44 La Victoria, galaxy circle pal Surat",
            locality: "Galaxy Circle",
            parentId: 207513,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "7.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "255204",
                deliveryTime: 34,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 7.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 50,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "664656",
            name: "Cheezylicious Cafe",
            uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
            cuisines: [
                "Cafe",
                "Fast Food",
                "Chinese",
                "Snacks",
                "Italian",
                "Mexican"
            ],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "\u20B9150 FOR TWO",
            deliveryTime: 38,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 7.599999904632568,
            slugs: {
                restaurant: "cheezylicious-cafe-piplod-piplod-2",
                city: "surat"
            },
            cityState: "21",
            address: "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
            locality: "Dream heritage",
            parentId: 59292,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "7.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "664656",
                deliveryTime: 38,
                minDeliveryTime: 35,
                maxDeliveryTime: 45,
                lastMileTravel: 7.599999904632568,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 0,
            new: true
        },
        subtype: "basic"
    }
];
exports.default = restaurantList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMboU":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ffb1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ffb1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withPromotedLabel", ()=>withPromotedLabel);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _constantJs = require("../utils/constant.js");
var _shimmerJs = require("./Shimmer.js");
var _shimmerJsDefault = parcelHelpers.interopDefault(_shimmerJs);
var _shimmer = require("./Shimmer");
const RestaurantCard = (props)=>{
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, area, lastMileTravelString, avgRating, deliveryTime, costForTwoString } = resData?.info;
    const ratingColor = avgRating >= 4 ? "bg-green-500" : avgRating >= 3 ? "bg-yellow-500" : "bg-red-500";
    return resData == null ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmer.MenuShimmer), {}, void 0, false, {
        fileName: "src/components/RestaurantCard.js",
        lineNumber: 10,
        columnNumber: 9
    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "res-card w-50 rounded-lg h-60 border-2 hover:border-3",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                className: "card-img h-40 w-full rounded-lg bg-white cursor-pointer object-cover shadow-lg",
                alt: name,
                src: (0, _constantJs.CDN_URL) + cloudinaryImageId
            }, void 0, false, {
                fileName: "src/components/RestaurantCard.js",
                lineNumber: 14,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "text-xl font-bold text-gray-800 truncate",
                        children: name
                    }, void 0, false, {
                        fileName: "src/components/RestaurantCard.js",
                        lineNumber: 17,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                        className: "text-sm text-gray-600 ",
                        children: cuisines.join(", ")
                    }, void 0, false, {
                        fileName: "src/components/RestaurantCard.js",
                        lineNumber: 18,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex items-center justify-between pt-4 pl-2 text-white text-sm",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "flex items-center  px-2 py-1 rounded bg-green-500" // Apply ratingColor here
                            ,
                            children: avgRating
                        }, void 0, false, {
                            fileName: "src/components/RestaurantCard.js",
                            lineNumber: 21,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/RestaurantCard.js",
                        lineNumber: 20,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/RestaurantCard.js",
                lineNumber: 16,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/RestaurantCard.js",
        lineNumber: 13,
        columnNumber: 9
    }, undefined);
};
_c = RestaurantCard;
const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                    className: "absolute bg-black text-white m-2 p-2 rounded-lg",
                    children: "Promoted"
                }, void 0, false, {
                    fileName: "src/components/RestaurantCard.js",
                    lineNumber: 41,
                    columnNumber: 17
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RestaurantCard, {
                    ...props
                }, void 0, false, {
                    fileName: "src/components/RestaurantCard.js",
                    lineNumber: 42,
                    columnNumber: 17
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/RestaurantCard.js",
            lineNumber: 40,
            columnNumber: 13
        }, undefined);
    };
};
exports.default = RestaurantCard;
var _c;
$RefreshReg$(_c, "RestaurantCard");

  $parcel$ReactRefreshHelpers$ffb1.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../utils/constant.js":"6mqGZ","./Shimmer.js":"g6ZGj","./Shimmer":"g6ZGj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["lv5og","1xC6H"], null, "parcelRequireefef")

//# sourceMappingURL=Body.a0e831e4.js.map
