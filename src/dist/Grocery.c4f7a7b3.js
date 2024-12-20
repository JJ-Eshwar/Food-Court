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
})({"aa1zk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "be0da552c4f7a7b3";
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

},{"6d18d6bd340e7473":"3FsDI","74ad5ea14201648c":"7i2ML"}],"2CCQ0":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3b38 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3b38.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _groceries = require("./Groceries");
var _groceriesDefault = parcelHelpers.interopDefault(_groceries);
var _reactRouterDom = require("react-router-dom");
var _shimmer = require("./Shimmer");
var _shimmerDefault = parcelHelpers.interopDefault(_shimmer);
var _groceryContext = require("../utils/GroceryContext");
var _groceryContextDefault = parcelHelpers.interopDefault(_groceryContext);
var _s = $RefreshSig$();
const Grocery = ()=>{
    _s();
    const { data } = (0, _react.useContext)((0, _groceryContextDefault.default));
    const [searchTerm, setSearchTerm] = (0, _react.useState)("");
    const [filteredData, setFilteredData] = (0, _react.useState)(data);
    (0, _react.useEffect)(()=>{
        setFilteredData(data); // Initialize filteredData with the original data
    }, [
        data
    ]);
    const handleSearch = ()=>{
        if (searchTerm.trim() === "") setFilteredData(data); // If search term is empty, show all data
        else {
            const filtered = data.filter((item)=>item.displayName.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredData(filtered);
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "bg-gray-100 min-h-screen py-12",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "text-center font-bold text-3xl mb-8",
                children: "10 Min Delivery"
            }, void 0, false, {
                fileName: "src/components/Grocery.js",
                lineNumber: 29,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        type: "text",
                        placeholder: "Search for Groceries",
                        className: "border border-black rounded p-2 mr-2",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value)
                    }, void 0, false, {
                        fileName: "src/components/Grocery.js",
                        lineNumber: 31,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "border border-black rounded p-2 bg-blue-500 text-white",
                        onClick: handleSearch,
                        children: "Search"
                    }, void 0, false, {
                        fileName: "src/components/Grocery.js",
                        lineNumber: 38,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Grocery.js",
                lineNumber: 30,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "container mx-auto",
                children: filteredData.length > 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                    children: filteredData.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                            to: "/Groceries/" + item.nodeId,
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _groceriesDefault.default), {
                                displayName: item.displayName,
                                imageId: item.imageId,
                                items: item
                            }, index, false, {
                                fileName: "src/components/Grocery.js",
                                lineNumber: 53,
                                columnNumber: 33
                            }, undefined)
                        }, item.nodeId, false, {
                            fileName: "src/components/Grocery.js",
                            lineNumber: 49,
                            columnNumber: 29
                        }, undefined))
                }, void 0, false, {
                    fileName: "src/components/Grocery.js",
                    lineNumber: 47,
                    columnNumber: 21
                }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerDefault.default), {}, void 0, false, {
                    fileName: "src/components/Grocery.js",
                    lineNumber: 63,
                    columnNumber: 21
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Grocery.js",
                lineNumber: 45,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Grocery.js",
        lineNumber: 28,
        columnNumber: 9
    }, undefined);
};
_s(Grocery, "6LNGABoqfsPUfHlK9hGNtzCMvDE=");
_c = Grocery;
exports.default = Grocery;
var _c;
$RefreshReg$(_c, "Grocery");

  $parcel$ReactRefreshHelpers$3b38.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","./Groceries":"kRAQK","react-router-dom":"9xmpe","./Shimmer":"g6ZGj","../utils/GroceryContext":"igwfF"}],"kRAQK":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1c25 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1c25.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _constant = require("../utils/constant");
const Groceries = ({ displayName, imageId })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                className: "w-full h-40 object-cover rounded-lg mb-4",
                src: (0, _constant.IMG_CDN_URL) + imageId,
                alt: displayName
            }, void 0, false, {
                fileName: "src/components/Groceries.js",
                lineNumber: 6,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "text-lg font-bold",
                children: displayName
            }, void 0, false, {
                fileName: "src/components/Groceries.js",
                lineNumber: 11,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Groceries.js",
        lineNumber: 5,
        columnNumber: 5
    }, undefined);
};
_c = Groceries;
exports.default = Groceries;
var _c;
$RefreshReg$(_c, "Groceries");

  $parcel$ReactRefreshHelpers$1c25.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../utils/constant":"6mqGZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"igwfF":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$0593 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$0593.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _groceryData = require("./GroceryData");
var _groceryDataDefault = parcelHelpers.interopDefault(_groceryData);
var _grocery = require("../components/Grocery");
var _groceryDefault = parcelHelpers.interopDefault(_grocery);
const GroceryContext = /*#__PURE__*/ (0, _react.createContext)({
    data: (0, _groceryDataDefault.default)?.[0]?.data?.widgets?.[1]?.data
});
exports.default = GroceryContext;

  $parcel$ReactRefreshHelpers$0593.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","./GroceryData":"ghlRW","../components/Grocery":"2CCQ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"ghlRW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const GroceryList = [
    {
        data: {
            storeId: "1386816",
            slaString: "19 Mins",
            serviceability: "SERVICEABLE",
            serviceabilityMessage: "<b>It's late night !</b> A nominal fee might be applied to compensate your delivery partner's effort",
            serviceabilityIcon: "InstamartAssets/TestImages/latenighttest.png",
            nextAvailableSlot: "",
            serviceabilityType: "FAST_SERVICEABLE",
            serviceabilityComms: {
                text: "Late night needs? Our Delivery Partners have you covered all night.",
                icon: "2da39980029f0733308dee34b439fcc3",
                autoCloseTime: 5,
                background: {
                    color: "linear-gradient(180deg, #ffffff  100%, #ffffff  0%)"
                },
                textColor: "text_Med_Emphasis"
            },
            storeDetails: {
                id: "1386816",
                name: "Instamart",
                address: "Ground Floor, Plot Nos. 10, 11 and 12 situated at Upperpally Village, Rajendra nagar Mandal, Ranga Reddy District, Telangana 500030",
                description: "",
                active: true,
                priority: 2,
                locality: "Rajendra nagar Mandal",
                categories: [
                    {
                        id: 52,
                        name: "Instamart"
                    }
                ],
                tags: [],
                sources: [
                    {
                        source: {
                            id: 6,
                            name: "Offline Sourced"
                        },
                        id_in_source: "MUSTHAVE_455005"
                    }
                ],
                badges: [],
                maxAllowedItemsInCart: 200,
                maxAllowedCartWeightInGrams: 40000,
                maxAllowedCartVolumeInCc: 100000,
                minimumOrderValueInRs: 0,
                subCategoryTypeMaxAllowedWeights: {},
                discountInfo: {
                    couponLessDiscounts: [
                        {
                            description: "",
                            short_description: "",
                            discount_type: "PERCENT",
                            logo_id: "40a9e5523990184d722051d65f24dfb9",
                            title: "10% off upto \u20B950 on Dettol items",
                            sub_title: "10% off upto \u20B950 on Dettol items worth \u20B9350 or more",
                            tnc: [
                                "Valid only on Dettol items worth \u20B9350 or more",
                                "The cart can have other items too but the discount will be valid only on Dettol items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 16, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 50,
                            valid_till: "2024-06-16T18:29:00.000+0000",
                            offer_id: "3cd9348d-00e3-40c5-85e4-7504d6f94c5c",
                            minimum_order_value: 350,
                            discount_value: 10,
                            nudge: {
                                message: "Save atleast \u20B935 extra by adding Dettol items worth \u20B9{0} more. No coupon needed.",
                                logoId: "fc3043071200f8bda31d0fbdf5835b77",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=97424&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Dettol items worth \u20B9350",
                                header: ""
                            },
                            prev_mov_text: "Save atleast \u20B935 extra by adding Dettol items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Dettol items worth \u20B9350",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Dettol items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "PERCENT",
                            logo_id: "InstamartAssets/5881.png?updatedAt=1718284932046",
                            title: "Flat 5% off on Bombae items",
                            sub_title: "Flat 5% off on Bombae items worth \u20B9299 or more",
                            tnc: [
                                "Valid only on Bombae items worth \u20B9299 or more",
                                "The cart can have other items too but the discount will be valid only on Bombae items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 10000,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "d43e51e9-6f35-4ebd-8d7f-7550a2373d29",
                            minimum_order_value: 299,
                            discount_value: 5,
                            nudge: {
                                message: "Save atleast \u20B914 extra by adding Bombae items worth \u20B9{0} more. No coupon needed.",
                                logoId: "InstamartAssets/5882.png?updatedAt=1718284932570",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=115287&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Bombae items worth \u20B9299",
                                header: ""
                            },
                            prev_mov_text: "Save atleast \u20B914 extra by adding Bombae items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Bombae items worth \u20B9299",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Bombae items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "PERCENT",
                            logo_id: "InstamartAssets/4954%20(1).png?updatedAt=1716208259679",
                            title: "Flat 5% off on Open Secret items",
                            sub_title: "Flat 5% off on Open Secret items worth \u20B9250 or more",
                            tnc: [
                                "Valid only on Open Secret items worth \u20B9250 or more",
                                "The cart can have other items too but the discount will be valid only on Open Secret items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 10000,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "9cc274c8-7828-4ad9-a2c9-ea6013c5d1a0",
                            minimum_order_value: 250,
                            discount_value: 5,
                            nudge: {
                                message: "Save atleast \u20B912 extra by adding Open Secret items worth \u20B9{0} more. No coupon needed.",
                                logoId: "InstamartAssets/4955%20(1).png?updatedAt=1716208259605",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=111651&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Open Secret items worth \u20B9250",
                                header: ""
                            },
                            prev_mov_text: "Save atleast \u20B912 extra by adding Open Secret items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Open Secret items worth \u20B9250",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Open Secret items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "PERCENT",
                            logo_id: "99e5a6473068b4097904f79dcb8dc10c",
                            title: "Flat 5% off on Soulflower items",
                            sub_title: "Flat 5% off on Soulflower items worth \u20B9499 or more",
                            tnc: [
                                "Valid only on Soulflower items worth \u20B9499 or more",
                                "The cart can have other items too but the discount will be valid only on Soulflower items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 10000,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "52e1fa1c-169b-42f6-b4e4-16b871aaa401",
                            minimum_order_value: 499,
                            discount_value: 5,
                            nudge: {
                                message: "Save atleast \u20B924 extra by adding Soulflower items worth \u20B9{0} more. No coupon needed.",
                                logoId: "6287a617b8d9bc2dda29f7cb1f3b7ccc",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=103299&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Soulflower items worth \u20B9499",
                                header: ""
                            },
                            prev_mov_text: "Save atleast \u20B924 extra by adding Soulflower items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Soulflower items worth \u20B9499",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Soulflower items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "PERCENT",
                            logo_id: "596b1bb10b8e19df0bfcd9465597baf9",
                            title: "5% off upto \u20B950 on Mamaearth items",
                            sub_title: "5% off upto \u20B950 on Mamaearth items",
                            tnc: [
                                "Valid only on Mamaearth items",
                                "The cart can have other items too but the discount will be valid only on  Mamaearth items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 50,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "0dacc2da-ab98-489e-a00f-cfa0c0124c21",
                            minimum_order_value: 1,
                            discount_value: 5,
                            nudge: {
                                message: "Save atleast \u20B90 extra by adding Mamaearth items worth \u20B9{0} more. No coupon needed.",
                                logoId: "InstamartAssets/5156.png?updatedAt=1716208259609",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=114997&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Mamaearth items worth \u20B91",
                                header: ""
                            },
                            prev_mov_text: "Save atleast \u20B90 extra by adding Mamaearth items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Mamaearth items worth \u20B91",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Mamaearth items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "PERCENT",
                            logo_id: "InstamartAssets/5860.png?updatedAt=1718035339671",
                            title: "5% off upto \u20B950 on Derma Co. items",
                            sub_title: "5% off upto \u20B950 on Derma Co. items",
                            tnc: [
                                "Valid only on Derma Co. items",
                                "The cart can have other items too but the discount will be valid only on  Derma Co. items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 50,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "413411aa-9184-49ab-a393-45e1a16073c5",
                            minimum_order_value: 1,
                            discount_value: 5,
                            nudge: {
                                message: "Save atleast \u20B90 extra by adding The Derma Co items worth \u20B9{0} more. No coupon needed.",
                                logoId: "InstamartAssets/5861.png?updatedAt=1718035339814",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=114998&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding The Derma Co items worth \u20B91",
                                header: ""
                            },
                            prev_mov_text: "Save atleast \u20B90 extra by adding The Derma Co items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding The Derma Co items worth \u20B91",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add The Derma Co items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "PERCENT",
                            logo_id: "InstamartAssets/5877.png?updatedAt=1718284932354",
                            title: "Flat 5% off on Bombay shaving company items",
                            sub_title: "Flat 5% off on Bombay shaving company items worth \u20B9299 or more",
                            tnc: [
                                "Valid only on Bombay shaving company items worth \u20B9299 or more",
                                "The cart can have other items too but the discount will be valid only on Bombay shaving company items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 10000,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "cbff9a1e-c51d-4a6d-a4ed-dd38762ad108",
                            minimum_order_value: 299,
                            discount_value: 5,
                            nudge: {
                                message: "Save atleast \u20B914 extra by adding Bombay Shaving Company items worth \u20B9{0} more. No coupon needed.",
                                logoId: "InstamartAssets/5878.png?updatedAt=1718284932771",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=115286&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Bombay Shaving Company items worth \u20B9299",
                                header: ""
                            },
                            prev_mov_text: "Save atleast \u20B914 extra by adding Bombay Shaving Company items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Bombay Shaving Company items worth \u20B9299",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Bombay Shaving Company items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "FLAT",
                            logo_id: "795766251fd9c5359d519554afe0e051",
                            title: "Flat \u20B950 off on Plush items",
                            sub_title: "Flat \u20B950 off on Plush items worth \u20B9449 or more",
                            tnc: [
                                "Valid only on Plush items worth \u20B9449 or more",
                                "The cart can have other items too but the discount will be valid only on Plush items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 50,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "20e155d0-bcae-4257-ae6c-7a4da2aa3a37",
                            minimum_order_value: 449,
                            discount_value: 50,
                            nudge: {
                                message: "Get extra \u20B950 off by adding Plush items worth \u20B9{0} more. No coupon needed.",
                                logoId: "e5ef365ab879dbc806b83d65829b4780",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=101962&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Plush items worth \u20B9449",
                                header: ""
                            },
                            prev_mov_text: "Get extra \u20B950 off by adding Plush items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Plush items worth \u20B9449",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Plush items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "FLAT",
                            logo_id: "400bcee73a43a6d6a7381a898d75c999",
                            title: "Flat \u20B950 off on Nua items",
                            sub_title: "Flat \u20B950 off on Nua items worth \u20B9499 or more",
                            tnc: [
                                "Valid only on Nua items worth \u20B9499 or more",
                                "The cart can have other items too but the discount will be valid only on Nua items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 50,
                            valid_till: "2024-06-30T18:29:00.000+0000",
                            offer_id: "00feed1f-2b56-4e83-a4da-0ab861623e4f",
                            minimum_order_value: 499,
                            discount_value: 50,
                            nudge: {
                                message: "Get extra \u20B950 off by adding Nua items worth \u20B9{0} more. No coupon needed.",
                                logoId: "efb2016f05dcc8490fc2039203500487",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=89442&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Nua items worth \u20B9499",
                                header: ""
                            },
                            prev_mov_text: "Get extra \u20B950 off by adding Nua items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Nua items worth \u20B9499",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Nua items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        },
                        {
                            description: "",
                            short_description: "",
                            discount_type: "FLAT",
                            logo_id: "73db05ecebb8f19dbfc809a7e3973c5e",
                            title: "Flat \u20B950 off on Red Bull items",
                            sub_title: "Flat \u20B950 off on Red Bull items worth \u20B9499 or more",
                            tnc: [
                                "Valid only on Selected Red Bull items worth \u20B9499 or more",
                                "The cart can have other items too but the discount will be valid only on Selected Red Bull items",
                                "Limited period offer",
                                "Offer valid once per user",
                                "Valid only on Instamart",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 15, 2024 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            discount_cap: 50,
                            valid_till: "2024-06-15T18:29:00.000+0000",
                            offer_id: "d6ccdca6-2764-4433-993a-bb9233bf9801",
                            minimum_order_value: 499,
                            discount_value: 50,
                            nudge: {
                                message: "Get extra \u20B950 off by adding Red Bull items worth \u20B9{0} more. No coupon needed.",
                                logoId: "2ab0c9fc134e518c876690a6004e9a02",
                                threshold: 50,
                                frequency: 35,
                                timeout: 10000,
                                cta: {
                                    text: "View Items",
                                    link: "/instamart/collection-listing?collectionId=106250&storeId=1386816&disable_view_offer=true"
                                }
                            },
                            success_dialog: {
                                title: "You saved \u20B9{0}!",
                                message: "You got extra \u20B9{0} off on your bill by adding Red Bull items worth \u20B9499",
                                header: ""
                            },
                            prev_mov_text: "Get extra \u20B950 off by adding Red Bull items worth \u20B9{0} more. No coupon needed.",
                            post_mov_text: "You got extra \u20B9{0} off on your bill by adding Red Bull items worth \u20B9499",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "",
                            inclusive_offer_tag: {
                                text: "View Offer",
                                avail_msg: "Add Red Bull items worth \u20B9{0} more to avail this offer.",
                                pre_mov_text: "Offer will be auto-applied on the bill",
                                post_mov_text: "Offer auto-applied on the bill"
                            },
                            discount_on_type: "CART"
                        }
                    ],
                    superOffer: false,
                    discounts: [
                        {
                            description: "Get free delivery on orders above \u20B9499",
                            short_description: "Free Delivery above \u20B9499",
                            discount_type: "PERCENT",
                            logo_id: "w03c3dtgopc4qvtqgntr",
                            title: "Free Delivery on orders above \u20B9499",
                            sub_title: "Get free delivery on orders above \u20B9499",
                            tnc: [
                                "Other T&Cs may apply",
                                "Offer valid till Jun 03, 2025 23:59 PM"
                            ],
                            coupon_code: "",
                            super_offer: false,
                            minimum_order_value: 49900,
                            prev_mov_text: "Add items worth \u20B9{differenceFromMov} more and get <b>FREE DELIVERY</b>",
                            post_mov_text: "Yay! You have unlocked <b>FREE DELIVERY!</b>",
                            groups_info: {
                                exclusionGroupsInfo: {},
                                message: ""
                            },
                            pre_display_threshold_text: "You have <b>FREE DELIVERY</b> on order above \u20B9499!",
                            discount_on_type: "DELIVERY"
                        },
                        {
                            description: "Use GOOGLEPAY | Orders above \u20B9150",
                            short_description: "Up to \u20B9250 cashback",
                            discount_type: "FLAT",
                            logo_id: "IM%20Alliance%20Logos/GPay%20400x400.png",
                            title: "Get up to \u20B9250 cashback when you pay with RuPay Credit Card on UPI on Google Pay",
                            sub_title: "Up to \u20B9250 cashback when you pay with RuPay Credit Card on UPI via Google Pay on transactions above \u20B9150",
                            tnc: [
                                "Applicable on transactions made using RuPay Credit Card on UPI on Google Pay",
                                "Offer valid once per user during the campaign period",
                                "Valid on the minimum net transaction amount of \u20B9150 & above",
                                "Assured cashback between \u20B915 to \u20B9250 will be available in the form of a scratch card in the Google Pay Rewards section",
                                "Other T&Cs may apply",
                                "Offer valid till Jun 30, 2024 23:59 PM"
                            ],
                            coupon_code: "GOOGLEPAY",
                            super_offer: false,
                            minimum_order_value: 15000,
                            prev_mov_text: "",
                            post_mov_text: "",
                            groups_info: {
                                exclusionGroupsInfo: {
                                    LRIG: {
                                        message: "Certain items are excluded as per regulatory and manufacturer policies"
                                    }
                                },
                                message: "Certain items are excluded as per regulatory and manufacturer policies"
                            },
                            pre_display_threshold_text: "",
                            discount_on_type: "CART"
                        }
                    ]
                },
                metadata: {
                    unstructured_enabled: false,
                    user_verification_required: false,
                    guaranteed_delivery: false
                },
                lastOrderTimestamp: 0,
                inStockItems: 0,
                deliverySlots: [],
                invoiceDetails: {
                    invoice_entity_name: ""
                },
                bulkCartConstraints: {
                    minWeightInGrams: 15000,
                    minItemCount: 200
                },
                slottedDeliveryAvailable: false,
                unstructuredEnabled: false,
                partner: true,
                sellerName: "",
                sellerFssaiAuthorisedAddress: "GF, Plot Nos. 10, 11,12 Upperpally Village, Rajendra nagar, Ranga Reddy District, Telangana 500030",
                sellerFssaiNumber: "20230928105182562",
                lat_long: "17.355878,78.419877",
                phone_numbers: "7036491942",
                is_verified: true,
                is_partner: true,
                image_id: "",
                product_categories: [],
                store_chain: {
                    id: 229,
                    name: "Instamart"
                },
                store_document: {
                    fssai_license_no: "",
                    drug_license_no: "",
                    gstin_number: "36AAJCK2497B1ZH",
                    liquor_license_no: "",
                    fssai_reference_no: "20230928105182562",
                    fssai_registered_business_entity_name: "Kwickbox Retail Private Limited",
                    fssai_authorised_premises_address: "GF, Plot Nos. 10, 11,12 Upperpally Village, Rajendra nagar, Ranga Reddy District, Telangana 500030"
                },
                popular_category: {
                    id: 52,
                    name: "Instamart"
                }
            },
            superData: {
                userStatus: "INVALID_SUPER"
            },
            available: true,
            widgets: [
                {
                    collectionId: 1,
                    layoutId: 3990,
                    id: 107017,
                    active: 1,
                    widgetInfo: {
                        widgetType: "NxM_BANNER",
                        title: "Instamart",
                        fallbackTitle: "",
                        affordance: false,
                        autoScrollTime: -1,
                        description: "",
                        analytics: {
                            objectValue: null,
                            context: "{}",
                            impressionObjectName: "impression-menu-widget",
                            clickObjectName: "click-cta",
                            extraFields: {
                                widgetId: "107017"
                            }
                        },
                        row: 1,
                        column: 1,
                        aspectRatio: {
                            width: "360",
                            height: "380"
                        },
                        carouselWidgetType: "INSTAMART_FAST_SERVICEABLE_MASTHEAD",
                        minimumBanner: 1,
                        fullGrid: true,
                        orientation: "VERTICAL",
                        fullMonetized: false,
                        clickable: false,
                        fitToWidth: false,
                        dataProvider: "CAROUSEL",
                        isMasthead: true
                    },
                    data: [
                        {
                            bannerId: 766353,
                            creativeId: "rng/md/carousel/production/d261ea9bd68db7895e2508e8866e7f12",
                            entityType: "static",
                            entityId: "N/A",
                            page: "STORES_MENU",
                            cappingEnabled: false,
                            widgetData: {
                                widgetType: "INSTAMART_FAST_SERVICEABLE_MASTHEAD",
                                backgroundColor: "#FFF6FB",
                                dividerColor: "#FFFFFF",
                                theme: "light",
                                altText: "Fast Serviceable",
                                altTextCTA: "Fast Serviceable"
                            },
                            metadata: {
                                offerText: null
                            },
                            creativeType: "IMAGE",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-banner",
                                clickObjectName: "click-banner",
                                extraFields: {
                                    bannerId: "766353"
                                }
                            }
                        }
                    ],
                    type: "NxM_BANNER",
                    priority: 1,
                    widgetTimeSlotInfo: {
                        alwaysActive: true,
                        widgetSlotDayListMap: null
                    },
                    segments: []
                },
                {
                    collectionId: 1,
                    layoutId: 3990,
                    id: 112266,
                    active: 1,
                    widgetInfo: {
                        widgetType: "TAXONOMY",
                        header: null,
                        title: "Shop by category",
                        fallbackTitle: "",
                        affordance: false,
                        autoScrollTime: -1,
                        description: "",
                        widgetStyles: null,
                        cities: [],
                        widgetIdentifier: null,
                        analytics: {
                            objectValue: null,
                            context: "{}",
                            impressionObjectName: "impression-menu-widget",
                            clickObjectName: "click-cta",
                            extraFields: {
                                widgetId: "112266"
                            }
                        },
                        taxonomyType: "All Listing",
                        platformTaxonomyMap: {
                            "Swiggy-Android": "All Listing"
                        },
                        backgroundColor: "#ffffff",
                        preExpansionCtaText: "",
                        postExpansionCtaText: "",
                        preExpansionRowCount: 4,
                        columnCount: 4
                    },
                    data: [
                        {
                            nodeId: "5f2c18a68ac42c7d7c3efee2",
                            nodeType: "2",
                            displayName: "Fresh Vegetables",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efee5",
                                    nodeType: "1",
                                    displayName: "Fresh Vegetables",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER__FRESH VEGETABLES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "3e346856b1ae40d2c87ef71a515ee80a",
                                    productCount: 126,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efee9",
                                    nodeType: "1",
                                    displayName: "Leafy and Seasonings",
                                    price: 15,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER__LEAFY AND SEASONINGS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "lyoroz8bib2nzayrbxwu",
                                    productCount: 47,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65292c97cb190a00011b8f20",
                                    nodeType: "1",
                                    displayName: "Exotic Vegetables",
                                    price: 30,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "nshfziwjldwihnnmizxi",
                                    productCount: 31,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "61360b168ac42c7f24025bcb",
                                    nodeType: "1",
                                    displayName: "Festive Essentials",
                                    price: 20,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER__FLOWERS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "hledvzf17rtauuhh3atg",
                                    productCount: 20,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65bde14d568d19000164dd91",
                                    nodeType: "1",
                                    displayName: "Flowers & Plants",
                                    price: 12,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "b4927e51ec8807a4570a34b34acd80ba",
                                    productCount: 11,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6461dca33b00c90af0733c58",
                                    nodeType: "1",
                                    displayName: "New Arrivals",
                                    price: 35,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/3/8/9d0784d1-8efe-48b3-980b-8c488227b5de_eda5280c-890b-4663-9a63-e92e1138e84f",
                                    productCount: 81,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65254585f21c30000162289d",
                                    nodeType: "1",
                                    displayName: "Mangoes & Melons",
                                    price: 22,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/3/7/25a96244-98ce-4db4-b9db-71e7126f4e0a_83fa0980-1979-4381-8712-48f91efb3e0e",
                                    productCount: 22,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efee6",
                                    nodeType: "1",
                                    displayName: "Fresh Cuts and Salads",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER__RECIPE MIXES AND CUTS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "bd0aef6befee1575f129aaef4a16d76e",
                                    productCount: 51,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "60d2cbaa8ac42c7f24024829",
                                    nodeType: "1",
                                    displayName: "Certified Organics",
                                    price: 28,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER__CERTIFIED ORGANICS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "fen6wkhlijaxd2hzkckk",
                                    productCount: 31,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efee4",
                                    nodeType: "1",
                                    displayName: "Fresh Fruits",
                                    price: 23,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER__FRESH FRUITS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/4/10/7e69ee83-c2cf-4ec4-8846-f29cfbc245e1_b93013a9-c9c1-4dd8-b146-97e4c98b3a81",
                                    productCount: 73,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65292c82595bca00013e774a",
                                    nodeType: "1",
                                    displayName: "Exotic Fruits",
                                    price: 27,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "0deb120fa1781361c746c8e4e3da30e1",
                                    productCount: 23,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "63be995d6dfe1809ebf68d9f",
                                    nodeType: "1",
                                    displayName: "Regional Favorites",
                                    price: 24,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_FnV_REGIONAL FAVORITES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "0f78792031a3c6dcb85ce6d18b18192e",
                                    productCount: 24,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64b6300024e6a80001864d9e",
                                    nodeType: "1",
                                    displayName: "Frozen Vegetables",
                                    price: 15,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "06c34608d011bded237d94a96ecdf5d7",
                                    productCount: 15,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "610bd61a8ac42c7f240251a6",
                                    nodeType: "1",
                                    displayName: "Hydroponics",
                                    price: 8,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HYDROPONIC"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "exmgboyfwfuqufogrvja",
                                    productCount: 3,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/0a688af1-1bb4-4a55-8128-31fc79cc9ad0_6d0abb9a-daff-4fbe-a1c9-2dddb6ae6717",
                            productCount: 558,
                            textColor: "#428C38",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Fresh Vegetables",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "64a65d43cde3560001c8cf33",
                            nodeType: "2",
                            displayName: "Fresh Fruits",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "64a65d9c643fa300019cd11f",
                                    nodeType: "1",
                                    displayName: "Fresh Fruits",
                                    price: 23,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/4/10/7e69ee83-c2cf-4ec4-8846-f29cfbc245e1_b93013a9-c9c1-4dd8-b146-97e4c98b3a81",
                                    productCount: 72,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6525456f827fc30001e8d853",
                                    nodeType: "1",
                                    displayName: "Mangoes & Melons",
                                    price: 22,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/3/7/25a96244-98ce-4db4-b9db-71e7126f4e0a_83fa0980-1979-4381-8712-48f91efb3e0e",
                                    productCount: 22,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65292c03c8d44800018583c1",
                                    nodeType: "1",
                                    displayName: "Exotic Fruits",
                                    price: 27,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "0deb120fa1781361c746c8e4e3da30e1",
                                    productCount: 23,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a6733d643fa300019cd12b",
                                    nodeType: "1",
                                    displayName: "Festive Essentials",
                                    price: 20,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "2d8b07f7270473d3ca9411b8d2953660",
                                    productCount: 20,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65bde1bfc3896900018eb39b",
                                    nodeType: "1",
                                    displayName: "Flowers & Plants",
                                    price: 12,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "b4927e51ec8807a4570a34b34acd80ba",
                                    productCount: 11,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a67383643fa300019cd12c",
                                    nodeType: "1",
                                    displayName: "New Arrivals",
                                    price: 35,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/3/8/9d0784d1-8efe-48b3-980b-8c488227b5de_eda5280c-890b-4663-9a63-e92e1138e84f",
                                    productCount: 81,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a6705fc6c4c700011466c5",
                                    nodeType: "1",
                                    displayName: "Fresh Cuts and Juices",
                                    price: 18,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "371d0bbf14e5d349e815ee09f33c1203",
                                    productCount: 52,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a661b6643fa300019cd122",
                                    nodeType: "1",
                                    displayName: "Fresh Vegetables",
                                    price: 25,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "3e346856b1ae40d2c87ef71a515ee80a",
                                    productCount: 126,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a666c3cde3560001c8cf35",
                                    nodeType: "1",
                                    displayName: "Leafy and Seasonings",
                                    price: 15,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "ae3880253fed0d032da2d88653e250a5",
                                    productCount: 47,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a66934643fa300019cd127",
                                    nodeType: "1",
                                    displayName: "Certified Organics",
                                    price: 28,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "fa79f6f95ddca413255008f265e288fb",
                                    productCount: 31,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65292bf2595bca00013e7749",
                                    nodeType: "1",
                                    displayName: "Exotic Vegetables",
                                    price: 30,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "nshfziwjldwihnnmizxi",
                                    productCount: 31,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a6722ecde3560001c8cf3a",
                                    nodeType: "1",
                                    displayName: "Regional Favorites",
                                    price: 24,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "83b5734dc917288ad228e68e02ac7f28",
                                    productCount: 24,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/85df9d8f-175f-4e3a-8945-468bf6317eee_eb9bf247-f2d1-413d-9cf5-48bc870b222f",
                            productCount: 540,
                            textColor: "#428C38",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Fresh Fruits",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "5f2c18a68ac42c7d7c3efeeb",
                            nodeType: "2",
                            displayName: "Dairy, Bread and Eggs",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efeec",
                                    nodeType: "1",
                                    displayName: "Bestsellers",
                                    price: 23,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_BESTSELLERS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "kfunc9vo928k4vpexoa7",
                                    productCount: 36,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efef1",
                                    nodeType: "1",
                                    displayName: "Bread and Buns",
                                    price: 17,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_BREAD AND BUNS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "3d69a3cf504a5db50d6bd0c2d20a34f8",
                                    productCount: 50,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efeed",
                                    nodeType: "1",
                                    displayName: "Milk",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_MILK"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "qncqgfyvo3w30e1gjquk",
                                    productCount: 37,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efeee",
                                    nodeType: "1",
                                    displayName: "Curd and Yogurts",
                                    price: 20,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_CURD AND YOGURTS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "a2794b3299724174eebf6064dfdd8973",
                                    productCount: 37,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65e994afe0c0d90001a7bc34",
                                    nodeType: "1",
                                    displayName: "Milkshakes and More",
                                    price: 30,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/3/7/fd69de9e-e71c-4ef3-87cc-5bcd9a49c546_723192bc-88e2-482b-b657-7508dca91dc5",
                                    productCount: 105,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65e994dd9ac4d600018f10f3",
                                    nodeType: "1",
                                    displayName: "Lassi and Buttermilk",
                                    price: 15,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/3/7/ce1be316-48de-401e-98a6-0f97299f1b5b_3c04981f-8d14-4199-8287-1081df603ae4",
                                    productCount: 25,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efef0",
                                    nodeType: "1",
                                    displayName: "Paneer and Cream",
                                    price: 28,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_PANEER AND CREAM"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "pesjmnw7ixh8bcayl1hc",
                                    productCount: 34,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efeef",
                                    nodeType: "1",
                                    displayName: "Eggs",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_EGGS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "t9trhm7wywggilyhqnib",
                                    productCount: 24,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "63295a6a8d655009acce3708",
                                    nodeType: "1",
                                    displayName: "Cheese",
                                    price: 22,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_CHEESE"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "gasxaw3upvibhnyvpw2f",
                                    productCount: 47,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3efef2",
                                    nodeType: "1",
                                    displayName: "Butter",
                                    price: 19,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_BUTTER"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "tcwpheykeluk7jlozuco",
                                    productCount: 14,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "61b6e68936324011970cc249",
                                    nodeType: "1",
                                    displayName: "Dairy Alternatives",
                                    price: 21,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_DBE_DAIRY ALTERNATIVES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "xdj0ebfh9rkm7qfqsdov",
                                    productCount: 35,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64eefb457fa84a000163e77b",
                                    nodeType: "1",
                                    displayName: "Indian Breads",
                                    price: 16,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "9603f49d93883877e186ff02fa74742b",
                                    productCount: 18,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6413f50deb2f7c0986b34ff0",
                                    nodeType: "1",
                                    displayName: "Milk Based Drinks",
                                    price: 27,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "j2d0bzjahsheccfd4z3v",
                                    productCount: 136,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/ce6b51d4-0a5d-46c1-9f56-1a0d410c6e3f_d1e4f024-7ee2-4b7c-a12d-158f856a8aa2",
                            productCount: 598,
                            textColor: "#CA7B65",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Dairy, Bread and Eggs",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "6188a892b6244b11ebb4efa0",
                            nodeType: "2",
                            displayName: "Rice, Atta and Dals",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "6188b14336324011970cae1c",
                                    nodeType: "1",
                                    displayName: "Top Deals",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_BESTSELLERS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "hrqbgznktsn55vfvwfu4",
                                    productCount: 110,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188aa7cb6244b11ebb4efa1",
                                    nodeType: "1",
                                    displayName: "Atta",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_ATTA"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "o6navjm6cgygp2ucsv6g",
                                    productCount: 44,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188ac7ab6244b11ebb4efa3",
                                    nodeType: "1",
                                    displayName: "Rice",
                                    price: 30,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_RICE_AND_CEREALS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "ccdiwznl2rgdsm2kqzya",
                                    productCount: 143,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188abaa36324011970cae19",
                                    nodeType: "1",
                                    displayName: "Other Flours",
                                    price: 22,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_OTHER FLOURS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "qqf0gnsuihmoph8txrsa",
                                    productCount: 104,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6332e9c3bd2a5509887e7620",
                                    nodeType: "1",
                                    displayName: "Poha & Other Cereals",
                                    price: 16,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_RAD_RICE AND CEREALS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "vwy3weg5kphbk9i07ztu",
                                    productCount: 51,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188accf36324011970cae1b",
                                    nodeType: "1",
                                    displayName: "Toor, Moong and Chana Dal",
                                    price: 19,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_TOOR MOONG AND CHANA DAL"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "nbilx02absyh9ddxshtw",
                                    productCount: 66,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188b0b5b6244b11ebb4efa4",
                                    nodeType: "1",
                                    displayName: "Other Pulses",
                                    price: 21,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_OTHER PULSES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "uy5zto1xmhenltazyzv3",
                                    productCount: 105,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "640ae34aed052209b1028cac",
                                    nodeType: "1",
                                    displayName: "Ready to Cook",
                                    price: 24,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "712e95f3247a001324045475dda8cb83",
                                    productCount: 16,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188b1e8b6244b11ebb4efa6",
                                    nodeType: "1",
                                    displayName: "Organic and Healthy",
                                    price: 27,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_ORGANIC AND HEALTHY"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "gbeyvxsy7tdnx6odfqkt",
                                    productCount: 128,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6217555f8059b609e86d07a0",
                                    nodeType: "1",
                                    displayName: "Newly Added",
                                    price: 20,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_ARD_NEWLY ADDED"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "iiea6peg5vmq0owewvd0",
                                    productCount: 16,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/db6c3340-4b90-4716-947b-ae3437c04a14_f17a2585-e93f-4545-9992-e8a8e44b5ddb",
                            productCount: 783,
                            textColor: "#008161",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Rice, Atta and Dals",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "6188c3f3b6244b11ebb4efab",
                            nodeType: "2",
                            displayName: "Masalas and Dry Fruits",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "6188c41cb6244b11ebb4efac",
                                    nodeType: "1",
                                    displayName: "Top Deals",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_BESTSELLERS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "gipowyouauwa2f52bhuw",
                                    productCount: 141,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188c570b6244b11ebb4efae",
                                    nodeType: "1",
                                    displayName: "Dry Fruits and Nuts",
                                    price: 30,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_DRY FRUITS AND NUTS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "hyjcwnidr8ileyl3j2xk",
                                    productCount: 312,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6628ed7908159f0001252ce4",
                                    nodeType: "1",
                                    displayName: "Flavoured Nuts",
                                    price: 18,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/4/24/c5bc783a-a5a3-4851-a76a-fa89a2a1878b_01e78759-5250-4e43-a9d0-c85d1352e0d6",
                                    productCount: 82,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188c4c236324011970cae23",
                                    nodeType: "1",
                                    displayName: "Masalas and Pastes",
                                    price: 28,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_MASALA AND PASTES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "511f8acccf7838f1045569840784600c",
                                    productCount: 282,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188c54fb6244b11ebb4efad",
                                    nodeType: "1",
                                    displayName: "Salt, Sugar and Jaggery",
                                    price: 20,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_SALT SUGAR AND JAGGERY"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "pz9bvuuhx5pyq5ie2sat",
                                    productCount: 86,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6561c207343ea600015d71b7",
                                    nodeType: "1",
                                    displayName: "Dates & Seeds",
                                    price: 22,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/4/23/5b25d75c-e824-41a7-8431-9c38e48f818e_5908fa62-9f8e-4de9-acdf-e646432b32f3",
                                    productCount: 52,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68a2fc6c4c700011466d0",
                                    nodeType: "1",
                                    displayName: "Whole Spices",
                                    price: 26,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "551ee0c862c40385dbd99a065afc3df9",
                                    productCount: 216,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68ac58613ba000162e1fe",
                                    nodeType: "1",
                                    displayName: "Herbs & Seasoning",
                                    price: 23,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "94f55182bfdb8c4232388f69da8336ff",
                                    productCount: 54,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188c8a4b6244b11ebb4efaf",
                                    nodeType: "1",
                                    displayName: "Organic and Healthy",
                                    price: 27,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_ORGANIC AND HEALTHY"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "togzskai6ozkqmzhufo6",
                                    productCount: 95,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "61d4149fb6244b11ebb515e5",
                                    nodeType: "1",
                                    displayName: "Pickles and Chutney",
                                    price: 19,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_PICKLES AND CHUTNEY"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "mpkpzrtwun4m3bhgve5v",
                                    productCount: 67,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188c8c136324011970cae27",
                                    nodeType: "1",
                                    displayName: "Papad and Fryums",
                                    price: 17,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_PAPAD AND FRYUMS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "8c944416a6b0fcf878eb14d64a418f63",
                                    productCount: 34,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6188c59136324011970cae25",
                                    nodeType: "1",
                                    displayName: "Sauces and Vinegar",
                                    price: 21,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_OMM_SAUCES AND VINEGAR"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "uikmlsmqej5vjmttn4x8",
                                    productCount: 89,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "653b95ef595bca00013e781a",
                                    nodeType: "1",
                                    displayName: "Gift Packs",
                                    price: 32,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "c38b70cb657ea68bee7fc62b14391290",
                                    productCount: 1,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/c3e3892b-6644-432a-ae05-8a74727ca815_f9c97608-571f-43fd-b4f9-c2aaafd9bd88",
                            productCount: 1511,
                            textColor: "#D9414A",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Masalas and Dry Fruits",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "64a68b79cde3560001c8cf41",
                            nodeType: "2",
                            displayName: "Oils and Ghee",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "64a68bfa643fa300019cd134",
                                    nodeType: "1",
                                    displayName: "Top Deals",
                                    price: 25,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "gipowyouauwa2f52bhuw",
                                    productCount: 68,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68cbc8613ba000162e200",
                                    nodeType: "1",
                                    displayName: "Sunflower & Other Oils",
                                    price: 30,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "c20c3ca6156c30e862a179c04e261fee",
                                    productCount: 52,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68d37c6c4c700011466d1",
                                    nodeType: "1",
                                    displayName: "Mustard Oils",
                                    price: 18,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "5bf33a044aa177149eba276fe5f190ca",
                                    productCount: 18,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68d7fcde3560001c8cf42",
                                    nodeType: "1",
                                    displayName: "Ghee",
                                    price: 22,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "b28132245b57436ce5b3d02a293458e1",
                                    productCount: 72,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68db28613ba000162e201",
                                    nodeType: "1",
                                    displayName: "Blended Oils",
                                    price: 15,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "8023507deb8e98fca040f79f27a1ab89",
                                    productCount: 12,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68e0fc6c4c700011466d2",
                                    nodeType: "1",
                                    displayName: "Rice Bran Oils",
                                    price: 20,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "65ff7209b6e3f76f69d94706d2bd74a7",
                                    productCount: 10,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68e7d643fa300019cd136",
                                    nodeType: "1",
                                    displayName: "Olive Oils",
                                    price: 28,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "a12b34e9ecbbc5699f617f83cf06c08d",
                                    productCount: 29,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a68f1e643fa300019cd138",
                                    nodeType: "1",
                                    displayName: "Soyabean Oils",
                                    price: 18,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "c20c3ca6156c30e862a179c04e261fee",
                                    productCount: 4,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64a6900a643fa300019cd13a",
                                    nodeType: "1",
                                    displayName: "Cold-pressed Oils",
                                    price: 35,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "4e0fa4f0559ff508c698a2f2915cadc0",
                                    productCount: 5,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/1b399bee-38d3-4d59-a5b9-d81099257cab_0cdaa02f-7e62-4f79-a5d9-727abe1d16a5",
                            productCount: 270,
                            textColor: "#CC8C33",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Oils and Ghee",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "5f2c18a68ac42c7d7c3eff13",
                            nodeType: "2",
                            displayName: "Munchies",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff14",
                                    nodeType: "1",
                                    displayName: "Top Deals",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_BESTSELLERS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "bflsgxtast67jy6z36y4",
                                    productCount: 48,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff15",
                                    nodeType: "1",
                                    displayName: "Chips and Crisps",
                                    price: 30,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "bac69dba7fd65b491c29356e65d03af3",
                                    productCount: 273,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6448d4b65ae3460a397364f7",
                                    nodeType: "1",
                                    displayName: "Nachos",
                                    price: 18,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "3d5ff61fc7fbade91df5f85020af061e",
                                    productCount: 48,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6448d3214fdc240989426766",
                                    nodeType: "1",
                                    displayName: "Puffs and Crunchies",
                                    price: 22,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "4610d958afb619060a8adcedee311158",
                                    productCount: 113,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff17",
                                    nodeType: "1",
                                    displayName: "Bhujia and Namkeens",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_NAMKEEN AND NUTS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "8f2dfa0220f41933c9f2c2686abb0f78",
                                    productCount: 134,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "63be918733707d09f7414fc7",
                                    nodeType: "1",
                                    displayName: "Nuts and Makhana",
                                    price: 28,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_NUTS AND MAKHANA"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "39e248b763e0b960d1325966b3338bbb",
                                    productCount: 141,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "63be929e6dfe1809ebf68d97",
                                    nodeType: "1",
                                    displayName: "Indian Snacks",
                                    price: 30,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_INDIAN SNACKS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "abef7e2c31403c435d0bf9c85dbce367",
                                    productCount: 70,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2cf77579e93b591ec6b7cb",
                                    nodeType: "1",
                                    displayName: "Popcorn",
                                    price: 22,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_POPCORN"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "185d01743d391bd4308e347c0900918b",
                                    productCount: 72,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6333fbee13677d09df50d15b",
                                    nodeType: "1",
                                    displayName: "Healthy Snacking",
                                    price: 24,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_HEALTHY SNACKING"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "5df4caec70f57b3341bd50369ef8ae27",
                                    productCount: 61,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6538d3cf595bca00013e77eb",
                                    nodeType: "1",
                                    displayName: "Protein Chips",
                                    price: 28,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "06649cec68778e054be354d10297a23e",
                                    productCount: 41,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "62c52dfcfb65cc09a0c7286d",
                                    nodeType: "1",
                                    displayName: "Value Packs",
                                    price: 20,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_VALUE PACKS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "btrmsegnvmut4758sist",
                                    productCount: 22,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f80517e79e93b591ec71209",
                                    nodeType: "1",
                                    displayName: "Newly Added",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_NEWLY ADDED"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "iiea6peg5vmq0owewvd0",
                                    productCount: 12,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6009627779e93b591ec7257d",
                                    nodeType: "1",
                                    displayName: "Frozen Munchies",
                                    price: 35,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Munchies_FROZEN MUNCHIES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "u8ox1duknwrlzecxej9e",
                                    productCount: 110,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/2ead57e4-00b3-4525-91b2-9eb37a4be375_eee95c8a-e736-42ed-ab86-46add6ffe374",
                            productCount: 1145,
                            textColor: "#E87835",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Munchies",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "5f2c18a68ac42c7d7c3eff19",
                            nodeType: "2",
                            displayName: "Sweet Tooth",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff1a",
                                    nodeType: "1",
                                    displayName: "Top Deals",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_BESTSELLERS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "kfunc9vo928k4vpexoa7",
                                    productCount: 102,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "640ae538f0234209c403f489",
                                    nodeType: "1",
                                    displayName: "Family Packs",
                                    price: 30,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "f4b21e443f3ca865b1d05eb362f12c71",
                                    productCount: 102,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "640ae547ed052209b1028cb4",
                                    nodeType: "1",
                                    displayName: "Cones, Bars & Cups",
                                    price: 28,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "f8226d200519eaf7c0fcca292a610551",
                                    productCount: 136,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff1c",
                                    nodeType: "1",
                                    displayName: "Chocolates",
                                    price: 35,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_CHOCOLATES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "aj2y0c5tu1o8dnkji5ny",
                                    productCount: 274,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "6284c3dc40a2340975ce6103",
                                    nodeType: "1",
                                    displayName: "Shared Packs",
                                    price: 22,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_SHARED PACKS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "f42bb4e898d0483869d8e972e77297a2",
                                    productCount: 44,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff1e",
                                    nodeType: "1",
                                    displayName: "Indian Sweets",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_INDIAN SWEETS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "53b83b74d25cc31f922bfc3b860c4bd4",
                                    productCount: 75,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "64f990547c9514000199d541",
                                    nodeType: "1",
                                    displayName: "Dark Chocolates",
                                    price: 20,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "21743a74d57c9ac0baa1acb440556e8f",
                                    productCount: 50,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff1d",
                                    nodeType: "1",
                                    displayName: "Candies and Gums",
                                    price: 22,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_CANDIES AND GUMS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "f8d5cad4484a9dd1c62a22d772f54b33",
                                    productCount: 96,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "62de5b2f0108cb0a060d38b5",
                                    nodeType: "1",
                                    displayName: "Baking and Dessert Mix",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_BAKING AND DESSERT MIX"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "8e30960200cc6376dbb701dd9b8e3fdb",
                                    productCount: 63,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f3e609b8ac42c7d7c3f82fa",
                                    nodeType: "1",
                                    displayName: "Cookies and Cakes",
                                    price: 28,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_COOKIES AND CAKES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "rlukx5d45ak8n77uzcug",
                                    productCount: 90,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f2c18a68ac42c7d7c3eff1f",
                                    nodeType: "1",
                                    displayName: "Flavoured Yogurts",
                                    price: 30,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_FLAVOURED YOGURTS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "hrz77tmun4uthhxrbqfg",
                                    productCount: 17,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "633fb8f90d9d1909eec6517d",
                                    nodeType: "1",
                                    displayName: "Guilt-Free Desserts",
                                    price: 32,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "bnguut2uwmagb9t19t3b",
                                    productCount: 56,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "62c52ef5fb65cc09a0c7286f",
                                    nodeType: "1",
                                    displayName: "Value Packs",
                                    price: 20,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_VALUE PACKS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "btrmsegnvmut4758sist",
                                    productCount: 43,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "5f8053478ac42c7d7c3f98d1",
                                    nodeType: "1",
                                    displayName: "Newly Added",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CD_NEWLY ADDED"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "iiea6peg5vmq0owewvd0",
                                    productCount: 19,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/9314636d-dcb2-468b-bdad-9170f4133e14_00e24371-61a6-4ab5-98e9-552bb94d2557",
                            productCount: 1167,
                            textColor: "#564CBF",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Sweet Tooth",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "6274b3c7cb212f098003cf6b",
                            nodeType: "2",
                            displayName: "Cold Drinks and Juices",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "6274b5c540a2340975ce574e",
                                    "nodeType": "1",
                                    "displayName": "Top Deals",
                                    "price": 25,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_BESTSELLERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "kfunc9vo928k4vpexoa7",
                                    "productCount": 51,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b5f8cb212f098003cf72",
                                    "nodeType": "1",
                                    "displayName": "Soft Drinks",
                                    "price": 30,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_SOFT DRINKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "uk9gru1rd1l2vtuodrlx",
                                    "productCount": 155,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b635467345099d9d3746",
                                    "nodeType": "1",
                                    "displayName": "Energy Drinks",
                                    "price": 28,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_ENERGY DRINKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "vwkyc3lbcvz4e9nful4n",
                                    "productCount": 59,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b651cb212f098003cf74",
                                    "nodeType": "1",
                                    "displayName": "Juices and Fruit Drinks",
                                    "price": 35,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_JUICES AND FRUIT DRINKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "s4rut5bqvkdjfnpxfqmh",
                                    "productCount": 177,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b6ff40a2340975ce5751",
                                    "nodeType": "1",
                                    "displayName": "Soda and Mixers",
                                    "price": 20,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_SODA AND MIXERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "xksokzjaqnbocajql73i",
                                    "productCount": 125,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "62c52e658130f409fa0e6921",
                                    "nodeType": "1",
                                    "displayName": "Party Packs",
                                    "price": 22,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_VALUE PACKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "NI_CATALOG/IMAGES/CIW/2024/5/30/813f61f1-cec2-457d-b94d-9c102e83f586_32ab13f9-9499-457f-ab94-d0abec46216b",
                                    "productCount": 77,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b7b740a2340975ce5752",
                                    "nodeType": "1",
                                    "displayName": "Water and Ice Cubes",
                                    "price": 18,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_WATER AND ICE CUBES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "dxicu74bs8px5dq05prg",
                                    "productCount": 26,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6555efe3e2be650001853966",
                                    "nodeType": "1",
                                    "displayName": "Ice Tea & Cold Coffee",
                                    "price": 24,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "579f6a7d8ae461327d1d182496795323",
                                    "productCount": 51,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6555f035cdb0ac00012ddcba",
                                    "nodeType": "1",
                                    "displayName": "Non Alcoholic Beverages",
                                    "price": 15,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/29/1dfeb30d-4de9-42b4-b4f6-31d4b33e220c_03d341d7-ac68-4225-b280-41b701954578",
                                    "productCount": 13,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b7e1cb212f098003cf78",
                                    "nodeType": "1",
                                    "displayName": "Milk Based Drinks",
                                    "price": 28,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_MILK BASED DRINKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ul33drugr1jiltm2whot",
                                    "productCount": 160,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b879467345099d9d374c",
                                    "nodeType": "1",
                                    "displayName": "Instant Drink Mixes",
                                    "price": 32,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_INSTANT DRINK MIXES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "xntorad0tl8eltfuki5c",
                                    "productCount": 47,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6274b8b4467345099d9d374d",
                                    "nodeType": "1",
                                    "displayName": "Newly Added",
                                    "price": 18,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CDJ_NEWLY ADDED"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "iiea6peg5vmq0owewvd0",
                                    "productCount": 32,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/8344b7d1-c41a-4225-8b1d-8a2de011780a_0b366fdd-d4ab-467e-9349-c8ec57f65cda",
                            productCount: 973,
                            textColor: "#E87835",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Cold Drinks and Juices",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "61651ae1f909db209da878f7",
                            nodeType: "2",
                            displayName: "Biscuits and Cakes",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "61651b14f909db209da878f8",
                                    "nodeType": "1",
                                    "displayName": "Top Deals",
                                    "price": 25,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_BESTSELLERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "kfunc9vo928k4vpexoa7",
                                    "productCount": 75,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61651bc8f909db209da878fa",
                                    "nodeType": "1",
                                    "displayName": "Cookies",
                                    "price": 30,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_COOKIES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "mx1hslplh2nluc1zslxv",
                                    "productCount": 128,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61651baaf909db209da878f9",
                                    "nodeType": "1",
                                    "displayName": "Cream Biscuits",
                                    "price": 20,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_CREAM BISCUITS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "olsaioklh5fd0ncwbhdv",
                                    "productCount": 41,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6308b25958a6780a0a5cf09a",
                                    "nodeType": "1",
                                    "displayName": "Cakes and Pies",
                                    "price": 35,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_CAKES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "301ca4c656c2a349d7054947059eea3f",
                                    "productCount": 96,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61651bf0f909db209da878fb",
                                    "nodeType": "1",
                                    "displayName": "Marie and Digestive",
                                    "price": 22,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_MARIE AND DIGESTIVE"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "unq8c52p5cen3vww0kwp",
                                    "productCount": 32,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61651c65f909db209da878fc",
                                    "nodeType": "1",
                                    "displayName": "Salted and Plain",
                                    "price": 18,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_SALTED AND PLAIN"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "grvl5olqlsmdiq8dw2nm",
                                    "productCount": 47,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61651c3bcf6b722719672b06",
                                    "nodeType": "1",
                                    "displayName": "Rusk",
                                    "price": 16,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_RUSK"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ojhvrw0geuu36yx3uean",
                                    "productCount": 14,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61651c8ef909db209da878fd",
                                    "nodeType": "1",
                                    "displayName": "Wafers",
                                    "price": 24,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_WAFERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "jm5lyeihbk1vwk1cvvhe",
                                    "productCount": 31,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "62c52e2e8130f409fa0e6920",
                                    "nodeType": "1",
                                    "displayName": "Value Packs",
                                    "price": 19,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_VALUE PACKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "btrmsegnvmut4758sist",
                                    "productCount": 15,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "621760d78059b609e86d07ad",
                                    "nodeType": "1",
                                    "displayName": "Newly Added",
                                    "price": 17,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Biscuits_NEWLY ADDED"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "iiea6peg5vmq0owewvd0",
                                    "productCount": 6,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6334000b13677d09df50d15e",
                                    "nodeType": "1",
                                    "displayName": "Healthy Snacking",
                                    "price": 21,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "pwi94egfn5e6qwibpghe",
                                    "productCount": 30,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/c1d3779d-9b01-4853-8cad-99185e39c933_a0e15a76-ea59-47e6-a98e-0bb4dfc40600",
                            productCount: 515,
                            textColor: "#A33A83",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Biscuits and Cakes",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "5f2c18a68ac42c7d7c3eff21",
                            nodeType: "2",
                            displayName: "Instant and Frozen Food",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "62fc8d0a36e7b60a3fcff736",
                                    "nodeType": "1",
                                    "displayName": "Top Deals",
                                    "price": 25,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_BESTSELLERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "kfunc9vo928k4vpexoa7",
                                    "productCount": 50,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f2c18a68ac42c7d7c3eff23",
                                    "nodeType": "1",
                                    "displayName": "Noodles and Vermicelli",
                                    "price": 30,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_NOODLES AND VERMICELLI"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "qzl7xbnqw6e9yycbobjb",
                                    "productCount": 178,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "62c69d108130f409fa0e69f8",
                                    "nodeType": "1",
                                    "displayName": "Pasta and Soups",
                                    "price": 35,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_PASTA AND SOUPS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "gc0shp0o5fxpf6lgpopk",
                                    "productCount": 97,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "602b64808ac42c7d7c3fb2c1",
                                    "nodeType": "1",
                                    "displayName": "Non Veg - Frozen",
                                    "price": 40,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_NON VEG - FROZEN"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "k5rogn3gf0kre28e7pyt",
                                    "productCount": 126,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f2d397b79e93b591ec6d7f3",
                                    "nodeType": "1",
                                    "displayName": "Batter and Breakfast",
                                    "price": 28,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_BATTER AND BREAKFAST"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "od4ynmyelvyrqrgca4xw",
                                    "productCount": 57,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f2d3b7779e93b591ec6d7f4",
                                    "nodeType": "1",
                                    "displayName": "Veg - Frozen",
                                    "price": 38,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_VEG - FROZEN"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "u8ox1duknwrlzecxej9e",
                                    "productCount": 171,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f2d3ddd79e93b591ec6d7f6",
                                    "nodeType": "1",
                                    "displayName": "Ready to Eat",
                                    "price": 32,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_READY TO EAT"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ul5a5tnustkcy4czkkjv",
                                    "productCount": 56,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f2d377179e93b591ec6d7f1",
                                    "nodeType": "1",
                                    "displayName": "Baking and Dessert Mix",
                                    "price": 22,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_BAKING AND DESSERT MIX"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "jezdtqttz5hnj9ncngt0",
                                    "productCount": 89,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f8050d08ac42c7d7c3f98cd",
                                    "nodeType": "1",
                                    "displayName": "Newly Added",
                                    "price": 18,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_IF_NEWLY ADDED"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "iiea6peg5vmq0owewvd0",
                                    "productCount": 7,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61af3f6db6244b11ebb4febf",
                                    "nodeType": "1",
                                    "displayName": "Plant Based Meat",
                                    "price": 45,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "jsyykcahm4pmooao07uk",
                                    "productCount": 18,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6333ffd713677d09df50d15d",
                                    "nodeType": "1",
                                    "displayName": "Healthy Eats",
                                    "price": 20,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "nkxzapdt5h7mux2voni9",
                                    "productCount": 23,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/67be61b3-99b4-4037-823c-a2cf0155b0af_00bd4c81-9099-4868-be16-0fdeb382a8dc",
                            productCount: 872,
                            textColor: "#BF933D",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Instant and Frozen Food",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "5f9acee88ac42c7d7c3fa222",
                            nodeType: "2",
                            displayName: "Meat and Seafood",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "5f9baab08ac42c7d7c3fa281",
                                    "nodeType": "1",
                                    "displayName": "Top Deals",
                                    "price": 15,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_BESTSELLERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "kfunc9vo928k4vpexoa7",
                                    "productCount": 19,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6404624ed579460a195ccdb8",
                                    "nodeType": "1",
                                    "displayName": "Chicken",
                                    "price": 30,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "f92995ec04ad73e30178e75568f45b36",
                                    "productCount": 8,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "640462a502179509a0a958c4",
                                    "nodeType": "1",
                                    "displayName": "Fish and Seafood",
                                    "price": 35,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "31df30b094e4b2a1d6cdb4088558fdc0",
                                    "productCount": 6,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6404627a02179509a0a958c3",
                                    "nodeType": "1",
                                    "displayName": "Mutton",
                                    "price": 50,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "2c5ae97aff1f2b19f42502fed1469070",
                                    "productCount": 2,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61ceb20cb6244b11ebb513b5",
                                    "nodeType": "1",
                                    "displayName": "Frozen Meat",
                                    "price": 40,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_FROZEN MEAT"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "cdfjqjqf628cnvyntwsr",
                                    "productCount": 2,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f9ad09d79e93b591ec718ec",
                                    "nodeType": "1",
                                    "displayName": "Eggs",
                                    "price": 5,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_EGGS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "qtmxcw5q09xljh8uux6q",
                                    "productCount": 24,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f9acfa28ac42c7d7c3fa224",
                                    "nodeType": "1",
                                    "displayName": "Marinated",
                                    "price": 25,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_MARINATED"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "gu65qjuahfobhhiiu503",
                                    "productCount": 1,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f9ad00179e93b591ec718eb",
                                    "nodeType": "1",
                                    "displayName": "Cold Cuts",
                                    "price": 12,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_COLD CUTS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ehjw5qj0azy4elnkgdeh",
                                    "productCount": 27,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61af3d37b6244b11ebb4febe",
                                    "nodeType": "1",
                                    "displayName": "Plant Based Meat",
                                    "price": 18,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_PLANT BASED MEAT"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "jsyykcahm4pmooao07uk",
                                    "productCount": 14,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f9ad03f8ac42c7d7c3fa225",
                                    "nodeType": "1",
                                    "displayName": "Frozen",
                                    "price": 8,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_FROZEN"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "x4lfpvajchxwkee4kgsi",
                                    "productCount": 63,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f9ad0b079e93b591ec718ed",
                                    "nodeType": "1",
                                    "displayName": "Masalas",
                                    "price": 10,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_MASALAS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "j24qjzdw2gmzoxj6w8wq",
                                    "productCount": 10,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "61a5c38cb6244b11ebb4f948",
                                    "nodeType": "1",
                                    "displayName": "Paste and Spreads",
                                    "price": 6,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_Meat_PASTE AND SPREADS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "fzov1bk3fgokafn13m7j",
                                    "productCount": 2,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "62308692707fb109efe83df6",
                                    "nodeType": "1",
                                    "displayName": "Newly Added",
                                    "price": 7,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "iiea6peg5vmq0owewvd0",
                                    "productCount": 1,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/e33d8321-cb8c-4732-9149-beb834eb24e4_8cee91b0-a380-43bb-90cf-9346a322ebeb",
                            productCount: 179,
                            textColor: "#BA5E23",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Meat and Seafood",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "639d58afbab88e09e85bec0d",
                            nodeType: "2",
                            displayName: "Cereals and Breakfast",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "63b7dc8e6230e109a9714dcb",
                                    "nodeType": "1",
                                    "displayName": "Bestsellers",
                                    "price": 15,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_BESTSELLERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "cfa937c0605bfcf4836ca55dcd54b811",
                                    "productCount": 43,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d599f9b930b09fbb24c3d",
                                    "nodeType": "1",
                                    "displayName": "Batters & Mixes",
                                    "price": 20,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_BAKING AND DESSERT MIXES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "b1db5bec6970667db3519798ed546e0d",
                                    "productCount": 53,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d58d64a232c09b574677c",
                                    "nodeType": "1",
                                    "displayName": "Flakes",
                                    "price": 12,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_FLAKES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "70748618c59fba8d407b26c70789c834",
                                    "productCount": 25,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5907bab88e09e85bec0e",
                                    "nodeType": "1",
                                    "displayName": "Oats",
                                    "price": 18,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_OATS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "8fb28dde9f56f7598624b7ad324593e4",
                                    "productCount": 50,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d592d1555a809f1267d3d",
                                    "nodeType": "1",
                                    "displayName": "Kids Cereals",
                                    "price": 10,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_KIDS CEREALS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "1a71cd921c3c251110db00a259191131",
                                    "productCount": 25,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d59571555a809f1267d3e",
                                    "nodeType": "1",
                                    "displayName": "Muesli & Granola",
                                    "price": 22,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_MUESLI AND GRANOLA"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "45d340aec343b65d2422b9d6d627f221",
                                    "productCount": 63,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d597abab88e09e85bec0f",
                                    "nodeType": "1",
                                    "displayName": "Energy Bars",
                                    "price": 25,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_ENERGY BARS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "c5dca3df6d2a80ff3f98edf22429b87b",
                                    "productCount": 72,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d59e44a232c09b574677d",
                                    "nodeType": "1",
                                    "displayName": "Honey & Cider Vinegar",
                                    "price": 30,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_HONEY AND ACV"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "fdd5474c7734817a6986c3c3ecb3008a",
                                    "productCount": 26,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5a079b930b09fbb24c3e",
                                    "nodeType": "1",
                                    "displayName": "Peanut Butters",
                                    "price": 18,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_PEANUT BUTTERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "bf9352e463b9a4753139fd7bd48016a2",
                                    "productCount": 66,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5c1c9b930b09fbb24c3f",
                                    "nodeType": "1",
                                    "displayName": "Pancake Mixes",
                                    "price": 8,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "7de51067d513bcef6ab6224efb37b717",
                                    "productCount": 25,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5a254a232c09b574677e",
                                    "nodeType": "1",
                                    "displayName": "Jams",
                                    "price": 7,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_JAMS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "978c787c5c785057f95caa77e9d066ef",
                                    "productCount": 9,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5a7abab88e09e85bec10",
                                    "nodeType": "1",
                                    "displayName": "Juices & Fruit Drinks",
                                    "price": 15,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CB_JUICES AND FRUIT DRINKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "zg5jakkzzrztz1tp8rcy",
                                    "productCount": 171,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5adc4a232c09b574677f",
                                    "nodeType": "1",
                                    "displayName": "Hot Beverages",
                                    "price": 10,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "vaysc4yap2yzdfypckvk",
                                    "productCount": 327,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/ed1b860f-4fc6-421e-ace8-3c2bde3fc676_3404cf52-d2ad-43db-a349-0846871ddcfa",
                            productCount: 955,
                            textColor: "#DE3533",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Cereals and Breakfast",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "639d5c5e9b930b09fbb24c40",
                            nodeType: "2",
                            displayName: "Sauces and Spreads",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "63b7dccb6230e109a9714dcc",
                                    "nodeType": "1",
                                    "displayName": "Bestsellers",
                                    "price": 15,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_BESTSELLERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "cfa937c0605bfcf4836ca55dcd54b811",
                                    "productCount": 41,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5c724a232c09b5746780",
                                    "nodeType": "1",
                                    "displayName": "Tomato & Chilli Ketchups",
                                    "price": 10,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_TOMATO AND CHILLI KETCHUPS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ebe7f6fef86f344041b9ef19c7856a10",
                                    "productCount": 17,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5c924a232c09b5746781",
                                    "nodeType": "1",
                                    "displayName": "Spreads & Dips",
                                    "price": 12,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_SPREADS AND DIPS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "051458c647958106f0f70aba2d518fd2",
                                    "productCount": 76,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5cb74a232c09b5746782",
                                    "nodeType": "1",
                                    "displayName": "Chocolate Spreads",
                                    "price": 8,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_CHOCOLATE SPREADS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "d27fc9b93ef35d605bf0a475fb26c2a3",
                                    "productCount": 12,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5cdc1555a809f1267d3f",
                                    "nodeType": "1",
                                    "displayName": "Peanut Butters",
                                    "price": 14,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_PEANUT BUTTERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "bf9352e463b9a4753139fd7bd48016a2",
                                    "productCount": 69,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5d0c1555a809f1267d40",
                                    "nodeType": "1",
                                    "displayName": "Cooking Sauces",
                                    "price": 11,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_COOKING SAUCES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "a5f5c8276aaa94550f5aa891d7a44864",
                                    "productCount": 32,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5d3ebab88e09e85bec11",
                                    "nodeType": "1",
                                    "displayName": "Asian Sauces",
                                    "price": 13,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_ASIAN SAUCES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "a8b41b5f3825fd526352a67cea56a837",
                                    "productCount": 28,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d5d60bab88e09e85bec12",
                                    "nodeType": "1",
                                    "displayName": "Jams",
                                    "price": 9,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SS_ASIAN SAUCES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "978c787c5c785057f95caa77e9d066ef",
                                    "productCount": 9,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/977de398-06fe-4d77-bc77-55158c438dad_9aa7f78a-9590-4625-88e7-520cc29ae3f7",
                            productCount: 284,
                            textColor: "#DE3533",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Sauces and Spreads",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "5f2c18a68ac42c7d7c3eff08",
                            nodeType: "2",
                            displayName: "Tea, Coffee and More",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "5f2c18a68ac42c7d7c3eff09",
                                    "nodeType": "1",
                                    "displayName": "Top Deals",
                                    "price": 20,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_TCM_BESTSELLERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "hrqbgznktsn55vfvwfu4",
                                    "productCount": 48,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5f2c18a68ac42c7d7c3eff0f",
                                    "nodeType": "1",
                                    "displayName": "Tea",
                                    "price": 12,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_TCM_BLACK TEA"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "uawk8x6zq9xbhmmh5fxl",
                                    "productCount": 75,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6139f7308ac42c7f24025d4e",
                                    "nodeType": "1",
                                    "displayName": "Instant Coffee",
                                    "price": 15,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "be2455377be093fbe4e462f4ba0779f1",
                                    "productCount": 94,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "65b0c5a771e80f000122b911",
                                    "nodeType": "1",
                                    "displayName": "Filter & Ground Coffee",
                                    "price": 18,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "5ba84411e4eb8fee2ffeab6a507ed5d2",
                                    "productCount": 31,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "62de5a164f5f140a5dda459a",
                                    "nodeType": "1",
                                    "displayName": "Green and Herbal Tea",
                                    "price": 14,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_TCM_GREEN AND HERBAL TEA"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "mhukzfanraf3amxubv0d",
                                    "productCount": 60,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6560502118499d0001dbbab1",
                                    "nodeType": "1",
                                    "displayName": "Fruit Syrups and Powders",
                                    "price": 8,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "846880ff8d341e397d4cb0fd789dc89e",
                                    "productCount": 29,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "655c83b777d2440001e477d5",
                                    "nodeType": "1",
                                    "displayName": "Choco Syrups & Powders",
                                    "price": 9,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "gpsokppxsfmbu5t6k8oe",
                                    "productCount": 18,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "655de2ca2a75e100010fbaf1",
                                    "nodeType": "1",
                                    "displayName": "Drink Mixes",
                                    "price": 11,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "8f2dbf4558a603a132e7b5ecd358789b",
                                    "productCount": 39,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6560503aa6fa010001ec7564",
                                    "nodeType": "1",
                                    "displayName": "Adult Nutrition",
                                    "price": 25,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "7c48b309dffd1b1470ab7b7c0f7d590e",
                                    "productCount": 17,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "655c83e4c5888400018d056a",
                                    "nodeType": "1",
                                    "displayName": "Protein Powders",
                                    "price": 30,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "1ca8795dc13461fca1f65ddd7b23c3ab",
                                    "productCount": 19,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "65b2194ac3896900018eb32f",
                                    "nodeType": "1",
                                    "displayName": "Premixes",
                                    "price": 22,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "a2937c484374404cf86bdc478abb512c",
                                    "productCount": 10,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/23/f087b141-68ed-4309-8b27-4a48e5d74b2b_2122c99a-e742-4fdd-9132-b43c370fd2b9",
                            productCount: 440,
                            textColor: "#B61C36",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Tea, Coffee and More",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "6188ce7eb6244b11ebb4efb7",
                            nodeType: "2",
                            displayName: "Cleaning Essentials",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "639d4a511555a809f1267d24",
                                    "nodeType": "1",
                                    "displayName": "Detergent Powder & Bar",
                                    "price": 10,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CE_DETERGENT POWDER AND BAR"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "dc44170957addc8d7652c5157cfa7c28",
                                    "productCount": 47,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4a8c4a232c09b5746760",
                                    "nodeType": "1",
                                    "displayName": "Liquid Detergents",
                                    "price": 12,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CE_LIQUID DETERGENTS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "78e31c0c465b4c998d50522997aed685",
                                    "productCount": 63,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6195f54436324011970cb30e",
                                    "nodeType": "1",
                                    "displayName": "Surface Cleaners",
                                    "price": 15,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CE_SURFACE CLEANERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "qwxgpubfuah4bcnuenrs",
                                    "productCount": 122,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6188e36936324011970cae2f",
                                    "nodeType": "1",
                                    "displayName": "Utensil Cleaners",
                                    "price": 11,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CE_UTENSILS AND KITCHEN CLEANING"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "lbr9js07omgcwvymksj6",
                                    "productCount": 101,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6195f58836324011970cb30f",
                                    "nodeType": "1",
                                    "displayName": "Toilet Cleaners",
                                    "price": 13,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CE_TOILET CLEANERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ohzva1wgoyt9yyrmrjf2",
                                    "productCount": 69,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6188cec6b6244b11ebb4efb8",
                                    "nodeType": "1",
                                    "displayName": "Fabric Care",
                                    "price": 14,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_FABRIC_CARE"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "70f51d0dcc17d581b6fe3fcf770b9f7e",
                                    "productCount": 32,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4ccc9b930b09fbb24c22",
                                    "nodeType": "1",
                                    "displayName": "Scrub & Sponge",
                                    "price": 9,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "621c92cb58047fe693fab722c3d1fc0b",
                                    "productCount": 50,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4d0e9b930b09fbb24c25",
                                    "nodeType": "1",
                                    "displayName": "Cleaning Supplies",
                                    "price": 16,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CE_CLEANING SUPPLIES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ff754314bcba5acdea5c94a1cd25d2b7",
                                    "productCount": 59,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4e071555a809f1267d28",
                                    "nodeType": "1",
                                    "displayName": "Hand Wash & Sanitizers",
                                    "price": 8,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_CE_HANDWASH AND SANITIZERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "548ab2f0980004768bec2afb2b152463",
                                    "productCount": 42,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/7c574228-ae92-4199-a45b-dfc3229c09e7_69a4ac73-d9f5-498b-a5cc-40afd90ee4b0",
                            productCount: 585,
                            textColor: "#1380CA",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Cleaning Essentials",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "639c61fa9b930b09fbb24c0c",
                            nodeType: "2",
                            displayName: "Pharma and Hygiene",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "639c6213bab88e09e85bebd6",
                                    "nodeType": "1",
                                    "displayName": "Feminine Hygiene",
                                    "price": 10,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HW_FEMININE HYGIENE"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "ea6375f9af94178ab6e5667bf113d7ff",
                                    "productCount": 103,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639c623f4a232c09b574674a",
                                    "nodeType": "1",
                                    "displayName": "Oral Care",
                                    "price": 8,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HW_ORAL CARE"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "mwktu6wlkg62emyfb4kv",
                                    "productCount": 110,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639c62c14a232c09b574674b",
                                    "nodeType": "1",
                                    "displayName": "Sexual Wellness",
                                    "price": 15,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HW_SEXUAL WELLNESS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "09dfe4c92599ec988068ae6853dff498",
                                    "productCount": 112,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639c63194a232c09b574674c",
                                    "nodeType": "1",
                                    "displayName": "Hand Wash & Sanitizers",
                                    "price": 9,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HW_HANDWASH AND SANITIZERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "548ab2f0980004768bec2afb2b152463",
                                    "productCount": 44,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639c6374bab88e09e85bebd9",
                                    "nodeType": "1",
                                    "displayName": "Basic Pharma",
                                    "price": 12,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HW_BASIC PHARMA"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "b3faad47d29a37d5ac5ec43c4997f725",
                                    "productCount": 63,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639c63a2bab88e09e85bebda",
                                    "nodeType": "1",
                                    "displayName": "Vitamins & Digestives",
                                    "price": 11,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HW_VITAMINS AND DIGESTIVES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "bfdf9278ac0b7f75adb5dc9aa63f6fbc",
                                    "productCount": 80,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639c6400bab88e09e85bebdb",
                                    "nodeType": "1",
                                    "displayName": "Wound Care & Pain",
                                    "price": 14,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_HW_WOUND CARE AND PAIN"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "437e8096d3d6bd74a6a3ae04c2ac8c6d",
                                    "productCount": 52,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "65fbeeb5e0c0d90001a7bdac",
                                    "nodeType": "1",
                                    "displayName": "Hair Removal",
                                    "price": 13,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "NI_CATALOG/IMAGES/CIW/2024/3/12/1fa9d925-1a29-4916-aaf2-089304e8a3cc_d0d7f1c8-d949-4a4e-97a3-1fea8dd69368",
                                    "productCount": 48,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/9/4e5eec2b-4797-4a93-989a-71b0f5958a3f_cae7e951-fc56-4886-86dd-f583e2373c52",
                            productCount: 612,
                            textColor: "#555559",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Pharma and Hygiene",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "639c64cb4a232c09b574674d",
                            nodeType: "2",
                            displayName: "Bath, Body and Hair",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            "nodes": [
                                {
                                    "nodeId": "639c64ec9b930b09fbb24c0e",
                                    "nodeType": "1",
                                    "displayName": "Shampoo & Conditioner",
                                    "price": 12,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_SHAMPOO AND CONDITIONER"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "f4cfec4529003343c34e39442b9b5358",
                                    "productCount": 198,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639c652f9b930b09fbb24c10",
                                    "nodeType": "1",
                                    "displayName": "Soap",
                                    "price": 5,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_SOAP"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "9c81bcef058ad64991bc20b8454b0f8d",
                                    "productCount": 107,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4e74bab88e09e85bebf1",
                                    "nodeType": "1",
                                    "displayName": "Shower Gel",
                                    "price": 8,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_SHOWER GEL"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "fe6320423fbcfb5df065ef013b92c598",
                                    "productCount": 106,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4eef1555a809f1267d2a",
                                    "nodeType": "1",
                                    "displayName": "Face Wash & Scrub",
                                    "price": 7,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_FACE WASH AND SCRUB"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "7fa0c41ea199c6c4441b3910748713fe",
                                    "productCount": 134,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4f2fbab88e09e85bebf3",
                                    "nodeType": "1",
                                    "displayName": "Perfume Deo & Talc",
                                    "price": 10,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_PERFUME DEO AND TALC"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "b98991b578aaf99860eff83e9973dee6",
                                    "productCount": 173,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4fcbbab88e09e85bebf4",
                                    "nodeType": "1",
                                    "displayName": "Face Cream",
                                    "price": 9,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_FACE CREAM"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "1d732fe038d379dc3a7d4d21661fe65b",
                                    "productCount": 129,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4f9b1555a809f1267d2c",
                                    "nodeType": "1",
                                    "displayName": "Hair Oil & Serum",
                                    "price": 11,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_HAIR OIL AND SERUM"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "e72297642e60de28e458f39684b2ccf2",
                                    "productCount": 75,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639d4f579b930b09fbb24c29",
                                    "nodeType": "1",
                                    "displayName": "Body Lotion",
                                    "price": 6,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BBH_BODY LOTION"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "06d4aa97ce2999838af59b04985f1ce6",
                                    "productCount": 91,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/e50a580b-4bd7-449a-af9e-fbf01ea18843_e5e21b56-781f-4ccd-b431-a343a23fecb3",
                            productCount: 1013,
                            textColor: "#414FC9",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Bath, Body and Hair",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "5fe447498ac42c7d7c3fab55",
                            nodeType: "2",
                            displayName: "Paan Corner",
                            description: null,
                            tags: [
                                "AGE_RESTRICTION_SMOKING"
                            ],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: true,
                            "nodes": [
                                {
                                    "nodeId": "5fe447d079e93b591ec72190",
                                    "nodeType": "1",
                                    "displayName": "Cigarettes",
                                    "price": 8,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_PC_CIGARETTES",
                                        "ANDROID_RESTRICTED_CATEGORY"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "16edfd1ec4735fa8963c79d487cca589",
                                    "productCount": 41,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5fe448ee79e93b591ec72195",
                                    "nodeType": "1",
                                    "displayName": "Smoking Accessories",
                                    "price": 15,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_PC_SMOKING ACCESSORIES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "11df27cd1e9f4216622380d8b4d47db0",
                                    "productCount": 35,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "64be245f64973d00019375f5",
                                    "nodeType": "1",
                                    "displayName": "Hookah Accessories",
                                    "price": 20,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "y2mba9pu7tgixrxoutrq",
                                    "productCount": 11,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639ff97e9b930b09fbb24cd4",
                                    "nodeType": "1",
                                    "displayName": "Paan and Mouth Fresheners",
                                    "price": 5,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_PC_FRESH PAAN AND MORE"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "e676c80f0b06881fde6e1b6a98a46519",
                                    "productCount": 25,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "639ff8e04a232c09b574680f",
                                    "nodeType": "1",
                                    "displayName": "Mint and Gums",
                                    "price": 3,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_PC_MOUTH FRESHENERS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "b98ba369c568c51ca913e32d7227b778",
                                    "productCount": 21,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "5fe447868ac42c7d7c3fab57",
                                    "nodeType": "1",
                                    "displayName": "Nicotine Alternatives",
                                    "price": 10,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_PC_NICOTINE ALTERNATIVES"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "7cfe13b6ee510afb05f85e8b0611ee29",
                                    "productCount": 12,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6482d0a11153d50b3cbbd9f6",
                                    "nodeType": "1",
                                    "displayName": "Chocolates",
                                    "price": 4,
                                    "description": null,
                                    "tags": [],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "9cbcd4dec5ae7d81e0929457ce36ef6a",
                                    "productCount": 44,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6013abed8ac42c7d7c3fb0b6",
                                    "nodeType": "1",
                                    "displayName": "Snacks",
                                    "price": 6,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_PC_SNACKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "uhvilhzliszty3ni3c62",
                                    "productCount": 108,
                                    "textColor": null,
                                    "analytics": null
                                },
                                {
                                    "nodeId": "6013ab0d8ac42c7d7c3fb0b4",
                                    "nodeType": "1",
                                    "displayName": "Drinks",
                                    "price": 7,
                                    "description": null,
                                    "tags": [
                                        "INSTAMART_L2_CAROUSEL_BANNER_PC_DRINKS"
                                    ],
                                    "enableUnstructuredOrderFlow": false,
                                    "ageConsentRequired": false,
                                    "nodes": null,
                                    "imageId": "7ad8329e795b1fd5979af8c89bb12888",
                                    "productCount": 77,
                                    "textColor": null,
                                    "analytics": null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/0798c1d0-34e0-4f87-a7eb-38183c69d743_7cb04bf5-5a28-49dd-b2cc-672650059671",
                            productCount: 983,
                            textColor: "#DC272C",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Home and Kitchen",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "639d570f1555a809f1267d3b",
                            nodeType: "2",
                            displayName: "Office and Electricals",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "639d57cf4a232c09b574677a",
                                    nodeType: "1",
                                    displayName: "Mobile Accessories",
                                    price: 15,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_MOBILE ACCESSORIES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "9732eb1db9e766fe5ebed47d0768eea7",
                                    productCount: 252,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "655f18d2a6fa010001ec7532",
                                    nodeType: "1",
                                    displayName: "Home Appliances",
                                    price: 30,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "58820c38d7bc43973041928aab49a2c5",
                                    productCount: 33,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d57324a232c09b5746776",
                                    nodeType: "1",
                                    displayName: "Stationery",
                                    price: 10,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_STATIONERY"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "zivjnixf3qsiazxiw3k0",
                                    productCount: 337,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65604f31cdeffc0001012018",
                                    nodeType: "1",
                                    displayName: "Audio Store",
                                    price: 25,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "fe2be3c52dd1e9c81da25f0ce843641b",
                                    productCount: 46,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "65604f4618499d0001dbbaaf",
                                    nodeType: "1",
                                    displayName: "Smart Watch",
                                    price: 50,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "c12c1e3dc4b3612f62b50330f0a56b9f",
                                    productCount: 44,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d57599b930b09fbb24c38",
                                    nodeType: "1",
                                    displayName: "Batteries",
                                    price: 5,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_BATTERIES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "15c3ce21772102557eae8d4f3a2b8cef",
                                    productCount: 34,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d57854a232c09b5746778",
                                    nodeType: "1",
                                    displayName: "Bulbs & Electricals",
                                    price: 20,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_BULBS AND LIGHTS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "79818840e8f1d5edfe507045e3fa091b",
                                    productCount: 42,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d57aabab88e09e85bec0b",
                                    nodeType: "1",
                                    displayName: "Basic Electrical",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_BASIC ELECTRICALS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "a3410f65c45b5b9ec4e4c9299c6c237a",
                                    productCount: 45,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d5829bab88e09e85bec0c",
                                    nodeType: "1",
                                    displayName: "Grooming Appliances",
                                    price: 35,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_GROOMING APPLIANCES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "af41a88fdaec27258244c5d21fa969da",
                                    productCount: 26,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d584d4a232c09b574677b",
                                    nodeType: "1",
                                    displayName: "Toys & Games",
                                    price: 12,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_TOYS AND GAMES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "6086ed9d04450b3be8a93a147a33f539",
                                    productCount: 386,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d587a9b930b09fbb24c3a",
                                    nodeType: "1",
                                    displayName: "Party Needs",
                                    price: 8,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_SE_PARTY NEEDS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "c1319a2a1d01c8473a2b250ec3c950a4",
                                    productCount: 19,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "664dd9157cb0200001154568",
                                    nodeType: "1",
                                    displayName: "Computer Accessories",
                                    price: 40,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/5/22/ff1da810-8afc-4a41-b0f9-3bd13d5fdc58_cb09c0c7-5f27-4d45-90e3-3b176176aff9",
                                    productCount: 28,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "664dd9947cb0200001154569",
                                    nodeType: "1",
                                    displayName: "Health Care Appliances",
                                    price: 32,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/5/22/1c7e6f39-2f1a-4864-975c-10593fe52c6f_466780ac-62ff-43a8-bbd2-f5f28912b849",
                                    productCount: 6,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "664dd9fa7cb020000115456a",
                                    nodeType: "1",
                                    displayName: "Kitchen Appliances",
                                    price: 28,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/5/22/1343a2b8-7465-43fc-8fcf-ba1d1d829ca9_dc04042f-d534-4c26-905e-eb3604b3064a",
                                    productCount: 22,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "664dda4e7cb020000115456b",
                                    nodeType: "1",
                                    displayName: "Powerbanks and Chargers",
                                    price: 45,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "NI_CATALOG/IMAGES/CIW/2024/5/22/2beefae5-a158-4692-9548-e1544f54daa2_eacb3b31-740e-47d1-bef0-1522af673af3",
                                    productCount: 37,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/22/e2f8a4f3-aad4-446d-994e-8e2481661937_7552c2b7-78bf-42c6-b988-b94b3e1015dc",
                            productCount: 1357,
                            textColor: "#555559",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Office and Electricals",
                                    widgetId: "112266"
                                }
                            }
                        },
                        {
                            nodeId: "639d526c9b930b09fbb24c2f",
                            nodeType: "2",
                            displayName: "Baby Care",
                            description: null,
                            tags: [],
                            enableUnstructuredOrderFlow: false,
                            ageConsentRequired: false,
                            nodes: [
                                {
                                    nodeId: "639d52861555a809f1267d30",
                                    nodeType: "1",
                                    displayName: "Baby Food and Formula",
                                    price: 25,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BABY CARE_BABY FOOD AND FORMULA"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "335fa125a176e2e5bcb22cd850b066a6",
                                    productCount: 47,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d52b41555a809f1267d31",
                                    nodeType: "1",
                                    displayName: "Diapers & Wipes",
                                    price: 30,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BABY CARE_DIAPERS AND WIPES"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "41c11e269a58841d12d4ad0aed4f6a26",
                                    productCount: 108,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d52e11555a809f1267d32",
                                    nodeType: "1",
                                    displayName: "Bath & Hair",
                                    price: 15,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BABY CARE_BATH AND HAIR"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "b9a159cec2e2ee358fbfe97f15a9ee35",
                                    productCount: 20,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d53089b930b09fbb24c30",
                                    nodeType: "1",
                                    displayName: "Skin Care",
                                    price: 18,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BABY CARE_SKIN CARE"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "caaaf444503dbd54bd32af484292cde9",
                                    productCount: 13,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d532e9b930b09fbb24c31",
                                    nodeType: "1",
                                    displayName: "Baby Pharma",
                                    price: 22,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BABY CARE_BABY PHARMA"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "c38b6e30504e66e3f79db0594ac042b5",
                                    productCount: 12,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d53b19b930b09fbb24c32",
                                    nodeType: "1",
                                    displayName: "Oral Care",
                                    price: 10,
                                    description: null,
                                    tags: [],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "81cc3e3fcc693051183be1f35ac8d387",
                                    productCount: 16,
                                    textColor: null,
                                    analytics: null
                                },
                                {
                                    nodeId: "639d53fe4a232c09b574676e",
                                    nodeType: "1",
                                    displayName: "Baby Accessories",
                                    price: 12,
                                    description: null,
                                    tags: [
                                        "INSTAMART_L2_CAROUSEL_BANNER_BABY CARE_FEEDING NEEDS"
                                    ],
                                    enableUnstructuredOrderFlow: false,
                                    ageConsentRequired: false,
                                    nodes: null,
                                    imageId: "1b9a2a226d259feda33fd1f738f94673",
                                    productCount: 11,
                                    textColor: null,
                                    analytics: null
                                }
                            ],
                            imageId: "NI_CATALOG/IMAGES/CIW/2024/4/2/84be94e2-53ad-451b-aeda-58538d5e3cc4_8c0cc6f4-9722-49ad-9ebe-6cc41d4b8d87",
                            productCount: 227,
                            textColor: "#4A1A3D",
                            analytics: {
                                objectValue: null,
                                context: "{}",
                                impressionObjectName: "impression-category",
                                clickObjectName: "click-category",
                                extraFields: {
                                    l1NodeVal: "Baby Care",
                                    widgetId: "112266"
                                }
                            }
                        }
                    ],
                    type: "TAXONOMY",
                    priority: 4,
                    widgetTimeSlotInfo: {
                        alwaysActive: true,
                        widgetSlotDayListMap: null
                    },
                    segments: []
                },
                {
                    collectionId: 1,
                    layoutId: 3990,
                    id: 107041,
                    active: 1,
                    widgetInfo: {
                        widgetType: "INSTAMART_SELLER_INFO",
                        title: "In partnership with Kwickbox Retail Private Limited",
                        fallbackTitle: "",
                        affordance: false,
                        autoScrollTime: -1,
                        description: "FSSAI license no: 20230928105182562",
                        cities: [],
                        analytics: {
                            objectValue: null,
                            context: "{}",
                            impressionObjectName: "impression-menu-widget",
                            clickObjectName: "click-cta",
                            extraFields: {
                                widgetId: "107041"
                            }
                        },
                        imageId: "/InstamartAssets/Partnership.png",
                        subTitle: "GF, Plot Nos. 10, 11,12 Upperpally Village, Rajendra nagar, Ranga Reddy District, Telangana 500030"
                    },
                    data: null,
                    type: "INSTAMART_SELLER_INFO",
                    priority: 26,
                    widgetTimeSlotInfo: {
                        alwaysActive: true,
                        widgetSlotDayListMap: null
                    },
                    segments: []
                }
            ],
            headerMessageType: "NON_GUARANTEED_DELIVERY",
            hasMoreWidgets: false,
            layoutId: 3990,
            serviceLine: "INSTAMART",
            requestId: "dfa0bb6e-e966-4bb7-81b7-fc1a161978da"
        },
        statusCode: 0
    }
];
exports.default = GroceryList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aa1zk","1xC6H"], null, "parcelRequireefef")

//# sourceMappingURL=Grocery.c4f7a7b3.js.map
