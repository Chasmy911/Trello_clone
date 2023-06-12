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
})({"gEwwu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
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
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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

},{}],"1SICI":[function(require,module,exports) {
var _headertimeJs = require("./headertime.js");
var _helperJs = require("./helper.js");
var _createtodoitemJs = require("./createtodoitem.js");
var _rendertodoitemJs = require("./rendertodoitem.js");
// header time
(0, _headertimeJs.getTime)();
// create main block
const mainContainer = document.getElementById("main_block");
const modalBlockContainer = document.getElementById("main");
const todoBlock = document.createElement("div");
const progressBlock = document.createElement("div");
const doneBlock = document.createElement("div");
const todoBlockHeader = document.createElement("div");
const progressBlockHeader = document.createElement("div");
const doneBlockHeader = document.createElement("div");
const todoBlockHeaderTitle = document.createElement("h2");
const progressBlockHeaderTitle = document.createElement("h2");
const doneBlockHeaderTitle = document.createElement("h2");
const todoBlockHeaderAmount = document.createElement("div");
const progressBlockHeaderAmount = document.createElement("div");
const doneBlockHeaderAmount = document.createElement("div");
const todoBlockContainer = document.createElement("div");
const progressBlockContainer = document.createElement("div");
const doneBlockContainer = document.createElement("div");
const todoBlockBtn = document.createElement("button");
const doneBlockBtn = document.createElement("button");
mainContainer.append(todoBlock, progressBlock, doneBlock);
todoBlock.append(todoBlockHeader, todoBlockContainer, todoBlockBtn);
progressBlock.append(progressBlockHeader, progressBlockContainer);
doneBlock.append(doneBlockHeader, doneBlockContainer, doneBlockBtn);
todoBlockHeader.append(todoBlockHeaderTitle, todoBlockHeaderAmount);
progressBlockHeader.append(progressBlockHeaderTitle, progressBlockHeaderAmount);
doneBlockHeader.append(doneBlockHeaderTitle, doneBlockHeaderAmount);
todoBlock.classList.add("todoBlock");
progressBlock.classList.add("progressBlock");
doneBlock.classList.add("doneBlock");
todoBlockHeader.classList.add("todoBlockHeader");
progressBlockHeader.classList.add("progressBlockHeader");
doneBlockHeader.classList.add("doneBlockHeader");
todoBlockContainer.classList.add("todoBlockContainer");
progressBlockContainer.classList.add("progressBlockContainer");
doneBlockContainer.classList.add("doneBlockContainer");
todoBlockBtn.classList.add("todoBlockBtn");
doneBlockBtn.classList.add("doneBlockBtn");
todoBlockHeaderAmount.classList.add("todoBlockHeaderAmount");
progressBlockHeaderAmount.classList.add("progressBlockHeaderAmount");
doneBlockHeaderAmount.classList.add("doneBlockHeaderAmount");
todoBlockHeaderTitle.innerText = "TODO:";
progressBlockHeaderTitle.innerText = "IN PROGRESS:";
doneBlockHeaderTitle.innerText = "DONE:";
todoBlockBtn.innerText = "ADD TODO";
doneBlockBtn.innerText = "DELETE ALL";
//create modal window
const modalContainer = document.createElement("div");
const modalBtnContainer = document.createElement("div");
const modalTitle = document.createElement("input");
const modalDescr = document.createElement("textarea");
const modalUser = document.createElement("div");
const modalCancelBtn = document.createElement("button");
const modalAddBtn = document.createElement("button");
modalTitle.setAttribute("placeholder", "Title");
modalDescr.setAttribute("placeholder", "Description");
modalBlockContainer.append(modalContainer);
modalContainer.append(modalTitle, modalDescr, modalBtnContainer);
modalBtnContainer.append(modalUser, modalCancelBtn, modalAddBtn);
modalUser.innerText = "Select user";
modalCancelBtn.innerText = "Cancel";
modalAddBtn.innerText = "Confirm";
modalContainer.classList.add("modalContainer");
modalTitle.classList.add("modalTitle");
modalDescr.classList.add("modalDescr");
modalBtnContainer.classList.add("modalBtnContainer");
modalCancelBtn.classList.add("modalCancelBtn");
modalAddBtn.classList.add("modalAddBtn");
todoBlockBtn.addEventListener("click", ()=>{
    (0, _helperJs.showAddModal)(modalContainer);
    (0, _helperJs.hideAddModal)(doneModalContainer);
    (0, _helperJs.hideAddModal)(lengthModalContainer);
});
modalCancelBtn.addEventListener("click", ()=>{
    modalTitle.value = "";
    modalDescr.value = "";
    (0, _helperJs.hideAddModal)(modalContainer);
});
//create todo
let todoArr = [];
let progressArr = [];
let doneArr = [];
let savedTodoArr = JSON.parse(localStorage.getItem("todoArr")) || [];
let savedProgressArr = JSON.parse(localStorage.getItem("progressArr")) || [];
let savedDoneArr = JSON.parse(localStorage.getItem("doneArr")) || [];
todoBlockHeaderAmount.innerText = todoArr.length;
progressBlockHeaderAmount.innerText = progressArr.length;
doneBlockHeaderAmount.innerText = doneArr.length;
const handleTodo = ()=>{
    const todoItem = (0, _createtodoitemJs.createTodoItem)(modalTitle.value, modalDescr.value);
    if (modalTitle.value && modalDescr.value) {
        modalTitle.value = "";
        modalDescr.value = "";
        (0, _helperJs.hideAddModal)(modalContainer);
    }
    if (!todoItem) return;
    todoArr.push(todoItem);
    const itemContainer = (0, _rendertodoitemJs.renderTodoItem)(todoBlockContainer, todoItem);
    todoBtnFunction(itemContainer);
    (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
    (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
};
const handleProgressTodo = (todoItem)=>{
    progressArr.push(todoItem);
    const progressitemContainer = (0, _rendertodoitemJs.renderTodoItem)(progressBlockContainer, todoItem);
    (0, _helperJs.changeStyletoProgress)(progressitemContainer);
    progressBtnFunction(progressitemContainer);
    (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
    (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
};
modalAddBtn.addEventListener("click", handleTodo);
const todoBtnFunction = (itemBlock)=>{
    itemBlock.addEventListener("click", (event)=>{
        if (event.target.dataset.name === "closeBtn") {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();
            todoArr = todoArr.filter((todo)=>+todoID !== +todo.id);
            (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
        }
    });
    itemBlock.addEventListener("click", (event)=>{
        if (event.target.dataset.name === "moveToProgress") {
            if (progressArr.length > 3) {
                (0, _helperJs.showAddModal)(lengthModalContainer);
                (0, _helperJs.hideAddModal)(doneModalContainer);
                (0, _helperJs.hideAddModal)(modalContainer);
            } else {
                const todoID = itemBlock.dataset.todoid;
                event.currentTarget.remove();
                let item = todoArr.find((todo)=>+todoID === +todo.id);
                todoArr = todoArr.filter((todo)=>+todoID !== +todo.id);
                (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
                handleProgressTodo(item);
                (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
                console.log(progressArr.length);
            }
        }
    });
};
const progressBtnFunction = (itemBlock)=>{
    itemBlock.addEventListener("click", (event)=>{
        if (event.target.dataset.name === "moveToTodo") {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();
            let todoItem = progressArr.find((todo)=>+todoID === +todo.id);
            const itemContainer = (0, _rendertodoitemJs.renderTodoItem)(todoBlockContainer, todoItem);
            todoBtnFunction(itemContainer);
            todoArr.push(todoItem);
            progressArr = progressArr.filter((todo)=>+todoID !== +todo.id);
            (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
        }
    });
    itemBlock.addEventListener("click", (event)=>{
        if (event.target.dataset.name === "moveToDone") {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();
            let item = progressArr.find((todo)=>+todoID === +todo.id);
            const itemContainer = (0, _rendertodoitemJs.renderTodoItem)(doneBlockContainer, item);
            doneArr.push(item);
            doneBtnFunction(itemContainer);
            progressArr = progressArr.filter((todo)=>+todoID !== +todo.id);
            (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
        }
    });
};
const doneBtnFunction = (itemBlock)=>{
    itemBlock.addEventListener("click", (event)=>{
        if (event.target.dataset.name === "closeBtn") {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();
            doneArr = doneArr.filter((todo)=>+todoID !== +todo.id);
            (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
        }
    });
};
// done modal btn 
const doneModalContainer = document.createElement("div");
const doneModalBtnContainer = document.createElement("div");
const doneModalTitle = document.createElement("div");
const doneModalYesBtn = document.createElement("button");
const doneModalNoBtn = document.createElement("button");
modalBlockContainer.append(doneModalContainer);
doneModalContainer.append(doneModalTitle, doneModalBtnContainer);
doneModalBtnContainer.append(doneModalYesBtn, doneModalNoBtn);
doneModalNoBtn.innerText = "No";
doneModalYesBtn.innerText = "Yes";
doneModalContainer.classList.add("modalDoneContainer");
doneModalTitle.classList.add("doneModalTitle");
doneModalBtnContainer.classList.add("doneModalBtnContainer");
doneModalYesBtn.classList.add("doneModalYesBtn");
doneModalNoBtn.classList.add("doneModalNoBtn");
doneModalTitle.innerText = "Are you sure?";
doneBlockBtn.addEventListener("click", ()=>{
    if (!doneArr.length) return;
    (0, _helperJs.showAddModal)(doneModalContainer);
    (0, _helperJs.hideAddModal)(modalContainer);
    (0, _helperJs.hideAddModal)(lengthModalContainer);
    doneModalNoBtn.addEventListener("click", ()=>{
        (0, _helperJs.hideAddModal)(doneModalContainer);
    });
    doneModalYesBtn.addEventListener("click", ()=>{
        doneBlockContainer.innerHTML = "";
        doneArr.length = 0;
        (0, _helperJs.updateLocalStorage)(todoArr, progressArr, doneArr);
        (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
        (0, _helperJs.hideAddModal)(doneModalContainer);
    });
});
//length modal
const lengthModalContainer = document.createElement("div");
const lengthModalTitle = document.createElement("div");
const lengthModalBtn = document.createElement("button");
modalBlockContainer.append(lengthModalContainer);
lengthModalContainer.append(lengthModalTitle, lengthModalBtn);
lengthModalBtn.innerText = "Ok";
lengthModalContainer.classList.add("lengthModalContainer");
lengthModalTitle.classList.add("lengthModalTitle");
lengthModalBtn.classList.add("lengthModalBtn");
lengthModalTitle.innerText = "You can't do more than 6 things at the same time";
lengthModalBtn.addEventListener("click", ()=>{
    (0, _helperJs.hideAddModal)(lengthModalContainer);
});
if (savedTodoArr.length) for (let todo of savedTodoArr){
    todoArr.push(todo);
    const itemContainer = (0, _rendertodoitemJs.renderTodoItem)(todoBlockContainer, todo);
    todoBtnFunction(itemContainer);
    (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
}
if (savedProgressArr.length) for (let todo of savedProgressArr)handleProgressTodo(todo);
if (savedDoneArr.length) for (let todo of savedDoneArr){
    doneArr.push(todo);
    const itemContainer = (0, _rendertodoitemJs.renderTodoItem)(doneBlockContainer, todo);
    doneBtnFunction(itemContainer);
    (0, _helperJs.getAmount)(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
}

},{"./headertime.js":"aJ4Uq","./helper.js":"lVRAz","./createtodoitem.js":"kfXSB","./rendertodoitem.js":"31aQR"}],"aJ4Uq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTime", ()=>getTime);
const getTime = ()=>{
    const timeContainer = document.querySelector(".header__time");
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeContainer.textContent = currentTime;
    setTimeout(getTime, 1000);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showAddModal", ()=>showAddModal);
parcelHelpers.export(exports, "hideAddModal", ()=>hideAddModal);
parcelHelpers.export(exports, "updateLocalStorage", ()=>updateLocalStorage);
parcelHelpers.export(exports, "getAmount", ()=>getAmount);
parcelHelpers.export(exports, "changeStyletoProgress", ()=>changeStyletoProgress);
parcelHelpers.export(exports, "changeStyletoDone", ()=>changeStyletoDone);
const showAddModal = (container)=>{
    container.classList.add("activeModal");
};
const hideAddModal = (container)=>{
    container.classList.remove("activeModal");
};
const updateLocalStorage = (todoarray, progressarray, donearray)=>{
    localStorage.setItem("todoArr", JSON.stringify(todoarray));
    localStorage.setItem("progressArr", JSON.stringify(progressarray));
    localStorage.setItem("doneArr", JSON.stringify(donearray));
};
const getAmount = (todoAmount, todoArr, progressAmount, progressArr, doneAmount, doneArr)=>{
    todoAmount.innerText = todoArr.length;
    progressAmount.innerText = progressArr.length;
    doneAmount.innerText = doneArr.length;
};
const changeStyletoProgress = (itemBlock)=>{
    itemBlock.classList.add("moveToProgressStyle");
};
const changeStyletoDone = (itemBlock)=>{
    itemBlock.classList.add("moveToDoneStyle ");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfXSB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTodoItem", ()=>createTodoItem);
const createTodoItem = (modalTitleValue, modalDescrValue)=>{
    if (!modalTitleValue || !modalDescrValue) return;
    const date = new Date();
    const title = modalTitleValue;
    const descr = modalDescrValue;
    const todoItem = {
        title,
        descr,
        data: date.toLocaleDateString(),
        id: Date.now()
    };
    return todoItem;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31aQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTodoItem", ()=>renderTodoItem);
const renderTodoItem = (container, obj)=>{
    const itemBlock = document.createElement("div");
    const itemBlockHeader = document.createElement("div");
    const itemBlockMain = document.createElement("div");
    const itemBlockFooter = document.createElement("div");
    const title = document.createElement("div");
    const descr = document.createElement("div");
    const user = document.createElement("div");
    const time = document.createElement("div");
    const btnContainer = document.createElement("div");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const moveToProgressBtn = document.createElement("button");
    container.append(itemBlock);
    itemBlock.append(itemBlockHeader, itemBlockMain, itemBlockFooter);
    itemBlockHeader.append(title, btnContainer);
    itemBlockFooter.append(user, time);
    title.innerText = obj.title;
    descr.innerText = obj.descr;
    user.innerText = "User1";
    time.innerText = obj.data;
    delBtn.setAttribute("data-name", "closeBtn");
    itemBlock.setAttribute("data-todoid", obj.id);
    moveToProgressBtn.setAttribute("data-name", "moveToProgress");
    itemBlock.classList.add("itemBlock");
    itemBlockHeader.classList.add("itemBlockHeader");
    title.classList.add("title");
    itemBlockMain.classList.add("itemBlockMain");
    itemBlockFooter.classList.add("itemBlockFooter");
    btnContainer.classList.add("btnContainer");
    editBtn.classList.add("editBtn");
    delBtn.classList.add("delBtn");
    moveToProgressBtn.classList.add("moveToProgressBtn");
    if (container.classList.contains("todoBlockContainer")) {
        btnContainer.append(editBtn, delBtn);
        itemBlockMain.append(descr, moveToProgressBtn);
        moveToProgressBtn.innerText = ">";
        editBtn.innerText = "Edit";
        delBtn.innerText = "Delete";
    } else if (container.classList.contains("progressBlockContainer")) {
        btnContainer.append(editBtn, delBtn);
        itemBlockMain.append(descr);
        editBtn.innerText = "BACK";
        delBtn.innerText = "COMPLETE";
        editBtn.setAttribute("data-name", "moveToTodo");
        delBtn.setAttribute("data-name", "moveToDone");
    } else {
        btnContainer.append(delBtn);
        itemBlock.classList.add("moveToDoneStyle");
        itemBlockMain.append(descr);
        delBtn.innerText = "DELETE";
    }
    return itemBlock;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gEwwu","1SICI"], "1SICI", "parcelRequire1fb0")

//# sourceMappingURL=index.18dbc454.js.map
