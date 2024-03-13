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
})({"5uTtK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1b58e7f570a1b721";
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
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
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
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

},{}],"7mqRv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OrbitControls", ()=>OrbitControls);
var _three = require("three");
// OrbitControls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move
const _changeEvent = {
    type: "change"
};
const _startEvent = {
    type: "start"
};
const _endEvent = {
    type: "end"
};
const _ray = new (0, _three.Ray)();
const _plane = new (0, _three.Plane)();
const TILT_LIMIT = Math.cos(70 * (0, _three.MathUtils).DEG2RAD);
class OrbitControls extends (0, _three.EventDispatcher) {
    constructor(object, domElement){
        super();
        this.object = object;
        this.domElement = domElement;
        this.domElement.style.touchAction = "none"; // disable touch scroll
        // Set to false to disable this control
        this.enabled = true;
        // "target" sets the location of focus, where the object orbits around
        this.target = new (0, _three.Vector3)();
        // Sets the 3D cursor (similar to Blender), from which the maxTargetRadius takes effect
        this.cursor = new (0, _three.Vector3)();
        // How far you can dolly in and out ( PerspectiveCamera only )
        this.minDistance = 0;
        this.maxDistance = Infinity;
        // How far you can zoom in and out ( OrthographicCamera only )
        this.minZoom = 0;
        this.maxZoom = Infinity;
        // Limit camera target within a spherical area around the cursor
        this.minTargetRadius = 0;
        this.maxTargetRadius = Infinity;
        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians
        // How far you can orbit horizontally, upper and lower limits.
        // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
        this.minAzimuthAngle = -Infinity; // radians
        this.maxAzimuthAngle = Infinity; // radians
        // Set to true to enable damping (inertia)
        // If damping is enabled, you must call controls.update() in your animation loop
        this.enableDamping = false;
        this.dampingFactor = 0.05;
        // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
        // Set to false to disable zooming
        this.enableZoom = true;
        this.zoomSpeed = 1.0;
        // Set to false to disable rotating
        this.enableRotate = true;
        this.rotateSpeed = 1.0;
        // Set to false to disable panning
        this.enablePan = true;
        this.panSpeed = 1.0;
        this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
        this.keyPanSpeed = 7.0; // pixels moved per arrow key push
        this.zoomToCursor = false;
        // Set to true to automatically rotate around the target
        // If auto-rotate is enabled, you must call controls.update() in your animation loop
        this.autoRotate = false;
        this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60
        // The four arrow keys
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        };
        // Mouse buttons
        this.mouseButtons = {
            LEFT: (0, _three.MOUSE).ROTATE,
            MIDDLE: (0, _three.MOUSE).DOLLY,
            RIGHT: (0, _three.MOUSE).PAN
        };
        // Touch fingers
        this.touches = {
            ONE: (0, _three.TOUCH).ROTATE,
            TWO: (0, _three.TOUCH).DOLLY_PAN
        };
        // for reset
        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.zoom0 = this.object.zoom;
        // the target DOM element for key events
        this._domElementKeyEvents = null;
        //
        // public methods
        //
        this.getPolarAngle = function() {
            return spherical.phi;
        };
        this.getAzimuthalAngle = function() {
            return spherical.theta;
        };
        this.getDistance = function() {
            return this.object.position.distanceTo(this.target);
        };
        this.listenToKeyEvents = function(domElement) {
            domElement.addEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = domElement;
        };
        this.stopListenToKeyEvents = function() {
            this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = null;
        };
        this.saveState = function() {
            scope.target0.copy(scope.target);
            scope.position0.copy(scope.object.position);
            scope.zoom0 = scope.object.zoom;
        };
        this.reset = function() {
            scope.target.copy(scope.target0);
            scope.object.position.copy(scope.position0);
            scope.object.zoom = scope.zoom0;
            scope.object.updateProjectionMatrix();
            scope.dispatchEvent(_changeEvent);
            scope.update();
            state = STATE.NONE;
        };
        // this method is exposed, but perhaps it would be better if we can make it private...
        this.update = function() {
            const offset = new (0, _three.Vector3)();
            // so camera.up is the orbit axis
            const quat = new (0, _three.Quaternion)().setFromUnitVectors(object.up, new (0, _three.Vector3)(0, 1, 0));
            const quatInverse = quat.clone().invert();
            const lastPosition = new (0, _three.Vector3)();
            const lastQuaternion = new (0, _three.Quaternion)();
            const lastTargetPosition = new (0, _three.Vector3)();
            const twoPI = 2 * Math.PI;
            return function update(deltaTime = null) {
                const position = scope.object.position;
                offset.copy(position).sub(scope.target);
                // rotate offset to "y-axis-is-up" space
                offset.applyQuaternion(quat);
                // angle from z-axis around y-axis
                spherical.setFromVector3(offset);
                if (scope.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle(deltaTime));
                if (scope.enableDamping) {
                    spherical.theta += sphericalDelta.theta * scope.dampingFactor;
                    spherical.phi += sphericalDelta.phi * scope.dampingFactor;
                } else {
                    spherical.theta += sphericalDelta.theta;
                    spherical.phi += sphericalDelta.phi;
                }
                // restrict theta to be between desired limits
                let min = scope.minAzimuthAngle;
                let max = scope.maxAzimuthAngle;
                if (isFinite(min) && isFinite(max)) {
                    if (min < -Math.PI) min += twoPI;
                    else if (min > Math.PI) min -= twoPI;
                    if (max < -Math.PI) max += twoPI;
                    else if (max > Math.PI) max -= twoPI;
                    if (min <= max) spherical.theta = Math.max(min, Math.min(max, spherical.theta));
                    else spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
                }
                // restrict phi to be between desired limits
                spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
                spherical.makeSafe();
                // move target to panned location
                if (scope.enableDamping === true) scope.target.addScaledVector(panOffset, scope.dampingFactor);
                else scope.target.add(panOffset);
                // Limit the target distance from the cursor to create a sphere around the center of interest
                scope.target.sub(scope.cursor);
                scope.target.clampLength(scope.minTargetRadius, scope.maxTargetRadius);
                scope.target.add(scope.cursor);
                // adjust the camera position based on zoom only if we're not zooming to the cursor or if it's an ortho camera
                // we adjust zoom later in these cases
                if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) spherical.radius = clampDistance(spherical.radius);
                else spherical.radius = clampDistance(spherical.radius * scale);
                offset.setFromSpherical(spherical);
                // rotate offset back to "camera-up-vector-is-up" space
                offset.applyQuaternion(quatInverse);
                position.copy(scope.target).add(offset);
                scope.object.lookAt(scope.target);
                if (scope.enableDamping === true) {
                    sphericalDelta.theta *= 1 - scope.dampingFactor;
                    sphericalDelta.phi *= 1 - scope.dampingFactor;
                    panOffset.multiplyScalar(1 - scope.dampingFactor);
                } else {
                    sphericalDelta.set(0, 0, 0);
                    panOffset.set(0, 0, 0);
                }
                // adjust camera position
                let zoomChanged = false;
                if (scope.zoomToCursor && performCursorZoom) {
                    let newRadius = null;
                    if (scope.object.isPerspectiveCamera) {
                        // move the camera down the pointer ray
                        // this method avoids floating point error
                        const prevRadius = offset.length();
                        newRadius = clampDistance(prevRadius * scale);
                        const radiusDelta = prevRadius - newRadius;
                        scope.object.position.addScaledVector(dollyDirection, radiusDelta);
                        scope.object.updateMatrixWorld();
                    } else if (scope.object.isOrthographicCamera) {
                        // adjust the ortho camera position based on zoom changes
                        const mouseBefore = new (0, _three.Vector3)(mouse.x, mouse.y, 0);
                        mouseBefore.unproject(scope.object);
                        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                        scope.object.updateProjectionMatrix();
                        zoomChanged = true;
                        const mouseAfter = new (0, _three.Vector3)(mouse.x, mouse.y, 0);
                        mouseAfter.unproject(scope.object);
                        scope.object.position.sub(mouseAfter).add(mouseBefore);
                        scope.object.updateMatrixWorld();
                        newRadius = offset.length();
                    } else {
                        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
                        scope.zoomToCursor = false;
                    }
                    // handle the placement of the target
                    if (newRadius !== null) {
                        if (this.screenSpacePanning) // position the orbit target in front of the new camera position
                        scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
                        else {
                            // get the ray and translation plane to compute target
                            _ray.origin.copy(scope.object.position);
                            _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
                            // if the camera is 20 degrees above the horizon then don't adjust the focus target to avoid
                            // extremely large values
                            if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) object.lookAt(scope.target);
                            else {
                                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                                _ray.intersectPlane(_plane, scope.target);
                            }
                        }
                    }
                } else if (scope.object.isOrthographicCamera) {
                    zoomChanged = scale !== 1;
                    if (zoomChanged) {
                        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                        scope.object.updateProjectionMatrix();
                    }
                }
                scale = 1;
                performCursorZoom = false;
                // update condition is:
                // min(camera displacement, camera rotation in radians)^2 > EPS
                // using small-angle approximation cos(x/2) = 1 - x^2 / 8
                if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS || lastTargetPosition.distanceToSquared(scope.target) > 0) {
                    scope.dispatchEvent(_changeEvent);
                    lastPosition.copy(scope.object.position);
                    lastQuaternion.copy(scope.object.quaternion);
                    lastTargetPosition.copy(scope.target);
                    return true;
                }
                return false;
            };
        }();
        this.dispose = function() {
            scope.domElement.removeEventListener("contextmenu", onContextMenu);
            scope.domElement.removeEventListener("pointerdown", onPointerDown);
            scope.domElement.removeEventListener("pointercancel", onPointerUp);
            scope.domElement.removeEventListener("wheel", onMouseWheel);
            scope.domElement.removeEventListener("pointermove", onPointerMove);
            scope.domElement.removeEventListener("pointerup", onPointerUp);
            if (scope._domElementKeyEvents !== null) {
                scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
                scope._domElementKeyEvents = null;
            }
        //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
        };
        //
        // internals
        //
        const scope = this;
        const STATE = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let state = STATE.NONE;
        const EPS = 0.000001;
        // current position in spherical coordinates
        const spherical = new (0, _three.Spherical)();
        const sphericalDelta = new (0, _three.Spherical)();
        let scale = 1;
        const panOffset = new (0, _three.Vector3)();
        const rotateStart = new (0, _three.Vector2)();
        const rotateEnd = new (0, _three.Vector2)();
        const rotateDelta = new (0, _three.Vector2)();
        const panStart = new (0, _three.Vector2)();
        const panEnd = new (0, _three.Vector2)();
        const panDelta = new (0, _three.Vector2)();
        const dollyStart = new (0, _three.Vector2)();
        const dollyEnd = new (0, _three.Vector2)();
        const dollyDelta = new (0, _three.Vector2)();
        const dollyDirection = new (0, _three.Vector3)();
        const mouse = new (0, _three.Vector2)();
        let performCursorZoom = false;
        const pointers = [];
        const pointerPositions = {};
        let controlActive = false;
        function getAutoRotationAngle(deltaTime) {
            if (deltaTime !== null) return 2 * Math.PI / 60 * scope.autoRotateSpeed * deltaTime;
            else return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
        }
        function getZoomScale(delta) {
            const normalizedDelta = Math.abs(delta * 0.01);
            return Math.pow(0.95, scope.zoomSpeed * normalizedDelta);
        }
        function rotateLeft(angle) {
            sphericalDelta.theta -= angle;
        }
        function rotateUp(angle) {
            sphericalDelta.phi -= angle;
        }
        const panLeft = function() {
            const v = new (0, _three.Vector3)();
            return function panLeft(distance, objectMatrix) {
                v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
                v.multiplyScalar(-distance);
                panOffset.add(v);
            };
        }();
        const panUp = function() {
            const v = new (0, _three.Vector3)();
            return function panUp(distance, objectMatrix) {
                if (scope.screenSpacePanning === true) v.setFromMatrixColumn(objectMatrix, 1);
                else {
                    v.setFromMatrixColumn(objectMatrix, 0);
                    v.crossVectors(scope.object.up, v);
                }
                v.multiplyScalar(distance);
                panOffset.add(v);
            };
        }();
        // deltaX and deltaY are in pixels; right and down are positive
        const pan = function() {
            const offset = new (0, _three.Vector3)();
            return function pan(deltaX, deltaY) {
                const element = scope.domElement;
                if (scope.object.isPerspectiveCamera) {
                    // perspective
                    const position = scope.object.position;
                    offset.copy(position).sub(scope.target);
                    let targetDistance = offset.length();
                    // half of the fov is center to top of screen
                    targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
                    // we use only clientHeight here so aspect ratio does not distort speed
                    panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
                    panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
                } else if (scope.object.isOrthographicCamera) {
                    // orthographic
                    panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
                    panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
                } else {
                    // camera neither orthographic nor perspective
                    console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
                    scope.enablePan = false;
                }
            };
        }();
        function dollyOut(dollyScale) {
            if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) scale /= dollyScale;
            else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
                scope.enableZoom = false;
            }
        }
        function dollyIn(dollyScale) {
            if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) scale *= dollyScale;
            else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
                scope.enableZoom = false;
            }
        }
        function updateZoomParameters(x, y) {
            if (!scope.zoomToCursor) return;
            performCursorZoom = true;
            const rect = scope.domElement.getBoundingClientRect();
            const dx = x - rect.left;
            const dy = y - rect.top;
            const w = rect.width;
            const h = rect.height;
            mouse.x = dx / w * 2 - 1;
            mouse.y = -(dy / h) * 2 + 1;
            dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
        }
        function clampDistance(dist) {
            return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
        }
        //
        // event callbacks - update the object state
        //
        function handleMouseDownRotate(event) {
            rotateStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownDolly(event) {
            updateZoomParameters(event.clientX, event.clientX);
            dollyStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownPan(event) {
            panStart.set(event.clientX, event.clientY);
        }
        function handleMouseMoveRotate(event) {
            rotateEnd.set(event.clientX, event.clientY);
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height
            rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            rotateStart.copy(rotateEnd);
            scope.update();
        }
        function handleMouseMoveDolly(event) {
            dollyEnd.set(event.clientX, event.clientY);
            dollyDelta.subVectors(dollyEnd, dollyStart);
            if (dollyDelta.y > 0) dollyOut(getZoomScale(dollyDelta.y));
            else if (dollyDelta.y < 0) dollyIn(getZoomScale(dollyDelta.y));
            dollyStart.copy(dollyEnd);
            scope.update();
        }
        function handleMouseMovePan(event) {
            panEnd.set(event.clientX, event.clientY);
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
            scope.update();
        }
        function handleMouseWheel(event) {
            updateZoomParameters(event.clientX, event.clientY);
            if (event.deltaY < 0) dollyIn(getZoomScale(event.deltaY));
            else if (event.deltaY > 0) dollyOut(getZoomScale(event.deltaY));
            scope.update();
        }
        function handleKeyDown(event) {
            let needsUpdate = false;
            switch(event.code){
                case scope.keys.UP:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateUp(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(0, scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.BOTTOM:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateUp(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(0, -scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.LEFT:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateLeft(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
                case scope.keys.RIGHT:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateLeft(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(-scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
            }
            if (needsUpdate) {
                // prevent the browser from scrolling on cursor keys
                event.preventDefault();
                scope.update();
            }
        }
        function handleTouchStartRotate(event) {
            if (pointers.length === 1) rotateStart.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                rotateStart.set(x, y);
            }
        }
        function handleTouchStartPan(event) {
            if (pointers.length === 1) panStart.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                panStart.set(x, y);
            }
        }
        function handleTouchStartDolly(event) {
            const position = getSecondPointerPosition(event);
            const dx = event.pageX - position.x;
            const dy = event.pageY - position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyStart.set(0, distance);
        }
        function handleTouchStartDollyPan(event) {
            if (scope.enableZoom) handleTouchStartDolly(event);
            if (scope.enablePan) handleTouchStartPan(event);
        }
        function handleTouchStartDollyRotate(event) {
            if (scope.enableZoom) handleTouchStartDolly(event);
            if (scope.enableRotate) handleTouchStartRotate(event);
        }
        function handleTouchMoveRotate(event) {
            if (pointers.length == 1) rotateEnd.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                rotateEnd.set(x, y);
            }
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height
            rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            rotateStart.copy(rotateEnd);
        }
        function handleTouchMovePan(event) {
            if (pointers.length === 1) panEnd.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                panEnd.set(x, y);
            }
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
        }
        function handleTouchMoveDolly(event) {
            const position = getSecondPointerPosition(event);
            const dx = event.pageX - position.x;
            const dy = event.pageY - position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyEnd.set(0, distance);
            dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
            dollyOut(dollyDelta.y);
            dollyStart.copy(dollyEnd);
            const centerX = (event.pageX + position.x) * 0.5;
            const centerY = (event.pageY + position.y) * 0.5;
            updateZoomParameters(centerX, centerY);
        }
        function handleTouchMoveDollyPan(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enablePan) handleTouchMovePan(event);
        }
        function handleTouchMoveDollyRotate(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enableRotate) handleTouchMoveRotate(event);
        }
        //
        // event handlers - FSM: listen for events and reset state
        //
        function onPointerDown(event) {
            if (scope.enabled === false) return;
            if (pointers.length === 0) {
                scope.domElement.setPointerCapture(event.pointerId);
                scope.domElement.addEventListener("pointermove", onPointerMove);
                scope.domElement.addEventListener("pointerup", onPointerUp);
            }
            //
            addPointer(event);
            if (event.pointerType === "touch") onTouchStart(event);
            else onMouseDown(event);
        }
        function onPointerMove(event) {
            if (scope.enabled === false) return;
            if (event.pointerType === "touch") onTouchMove(event);
            else onMouseMove(event);
        }
        function onPointerUp(event) {
            removePointer(event);
            switch(pointers.length){
                case 0:
                    scope.domElement.releasePointerCapture(event.pointerId);
                    scope.domElement.removeEventListener("pointermove", onPointerMove);
                    scope.domElement.removeEventListener("pointerup", onPointerUp);
                    scope.dispatchEvent(_endEvent);
                    state = STATE.NONE;
                    break;
                case 1:
                    const pointerId = pointers[0];
                    const position = pointerPositions[pointerId];
                    // minimal placeholder event - allows state correction on pointer-up
                    onTouchStart({
                        pointerId: pointerId,
                        pageX: position.x,
                        pageY: position.y
                    });
                    break;
            }
        }
        function onMouseDown(event) {
            let mouseAction;
            switch(event.button){
                case 0:
                    mouseAction = scope.mouseButtons.LEFT;
                    break;
                case 1:
                    mouseAction = scope.mouseButtons.MIDDLE;
                    break;
                case 2:
                    mouseAction = scope.mouseButtons.RIGHT;
                    break;
                default:
                    mouseAction = -1;
            }
            switch(mouseAction){
                case (0, _three.MOUSE).DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseDownDolly(event);
                    state = STATE.DOLLY;
                    break;
                case (0, _three.MOUSE).ROTATE:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    } else {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    }
                    break;
                case (0, _three.MOUSE).PAN:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    } else {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) scope.dispatchEvent(_startEvent);
        }
        function onMouseMove(event) {
            switch(state){
                case STATE.ROTATE:
                    if (scope.enableRotate === false) return;
                    handleMouseMoveRotate(event);
                    break;
                case STATE.DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseMoveDolly(event);
                    break;
                case STATE.PAN:
                    if (scope.enablePan === false) return;
                    handleMouseMovePan(event);
                    break;
            }
        }
        function onMouseWheel(event) {
            if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;
            event.preventDefault();
            scope.dispatchEvent(_startEvent);
            handleMouseWheel(customWheelEvent(event));
            scope.dispatchEvent(_endEvent);
        }
        function customWheelEvent(event) {
            const mode = event.deltaMode;
            // minimal wheel event altered to meet delta-zoom demand
            const newEvent = {
                clientX: event.clientX,
                clientY: event.clientY,
                deltaY: event.deltaY
            };
            switch(mode){
                case 1:
                    newEvent.deltaY *= 16;
                    break;
                case 2:
                    newEvent.deltaY *= 100;
                    break;
            }
            // detect if event was triggered by pinching
            if (event.ctrlKey && !controlActive) newEvent.deltaY *= 10;
            return newEvent;
        }
        function interceptControlDown(event) {
            if (event.key === "Control") {
                controlActive = true;
                const document = scope.domElement.getRootNode(); // offscreen canvas compatibility
                document.addEventListener("keyup", interceptControlUp, {
                    passive: true,
                    capture: true
                });
            }
        }
        function interceptControlUp(event) {
            if (event.key === "Control") {
                controlActive = false;
                const document = scope.domElement.getRootNode(); // offscreen canvas compatibility
                document.removeEventListener("keyup", interceptControlUp, {
                    passive: true,
                    capture: true
                });
            }
        }
        function onKeyDown(event) {
            if (scope.enabled === false || scope.enablePan === false) return;
            handleKeyDown(event);
        }
        function onTouchStart(event) {
            trackPointer(event);
            switch(pointers.length){
                case 1:
                    switch(scope.touches.ONE){
                        case (0, _three.TOUCH).ROTATE:
                            if (scope.enableRotate === false) return;
                            handleTouchStartRotate(event);
                            state = STATE.TOUCH_ROTATE;
                            break;
                        case (0, _three.TOUCH).PAN:
                            if (scope.enablePan === false) return;
                            handleTouchStartPan(event);
                            state = STATE.TOUCH_PAN;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                case 2:
                    switch(scope.touches.TWO){
                        case (0, _three.TOUCH).DOLLY_PAN:
                            if (scope.enableZoom === false && scope.enablePan === false) return;
                            handleTouchStartDollyPan(event);
                            state = STATE.TOUCH_DOLLY_PAN;
                            break;
                        case (0, _three.TOUCH).DOLLY_ROTATE:
                            if (scope.enableZoom === false && scope.enableRotate === false) return;
                            handleTouchStartDollyRotate(event);
                            state = STATE.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) scope.dispatchEvent(_startEvent);
        }
        function onTouchMove(event) {
            trackPointer(event);
            switch(state){
                case STATE.TOUCH_ROTATE:
                    if (scope.enableRotate === false) return;
                    handleTouchMoveRotate(event);
                    scope.update();
                    break;
                case STATE.TOUCH_PAN:
                    if (scope.enablePan === false) return;
                    handleTouchMovePan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_PAN:
                    if (scope.enableZoom === false && scope.enablePan === false) return;
                    handleTouchMoveDollyPan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_ROTATE:
                    if (scope.enableZoom === false && scope.enableRotate === false) return;
                    handleTouchMoveDollyRotate(event);
                    scope.update();
                    break;
                default:
                    state = STATE.NONE;
            }
        }
        function onContextMenu(event) {
            if (scope.enabled === false) return;
            event.preventDefault();
        }
        function addPointer(event) {
            pointers.push(event.pointerId);
        }
        function removePointer(event) {
            delete pointerPositions[event.pointerId];
            for(let i = 0; i < pointers.length; i++)if (pointers[i] == event.pointerId) {
                pointers.splice(i, 1);
                return;
            }
        }
        function trackPointer(event) {
            let position = pointerPositions[event.pointerId];
            if (position === undefined) {
                position = new (0, _three.Vector2)();
                pointerPositions[event.pointerId] = position;
            }
            position.set(event.pageX, event.pageY);
        }
        function getSecondPointerPosition(event) {
            const pointerId = event.pointerId === pointers[0] ? pointers[1] : pointers[0];
            return pointerPositions[pointerId];
        }
        //
        scope.domElement.addEventListener("contextmenu", onContextMenu);
        scope.domElement.addEventListener("pointerdown", onPointerDown);
        scope.domElement.addEventListener("pointercancel", onPointerUp);
        scope.domElement.addEventListener("wheel", onMouseWheel, {
            passive: false
        });
        const document = scope.domElement.getRootNode(); // offscreen canvas compatibility
        document.addEventListener("keydown", interceptControlDown, {
            passive: true,
            capture: true
        });
        // force an update at start
        this.update();
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"8ppW9"}],"h1oCP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "image1", ()=>(0, _image1JpegDefault.default));
parcelHelpers.export(exports, "image2", ()=>(0, _image2JpegDefault.default));
parcelHelpers.export(exports, "image3", ()=>(0, _image3JpegDefault.default));
parcelHelpers.export(exports, "image4", ()=>(0, _image4JpegDefault.default));
parcelHelpers.export(exports, "image5", ()=>(0, _image5JpegDefault.default));
parcelHelpers.export(exports, "image6", ()=>(0, _image6JpegDefault.default));
parcelHelpers.export(exports, "image7", ()=>(0, _image7JpegDefault.default));
var _image1Jpeg = require("./image1.jpeg");
var _image1JpegDefault = parcelHelpers.interopDefault(_image1Jpeg);
var _image2Jpeg = require("./image2.jpeg");
var _image2JpegDefault = parcelHelpers.interopDefault(_image2Jpeg);
var _image3Jpeg = require("./image3.jpeg");
var _image3JpegDefault = parcelHelpers.interopDefault(_image3Jpeg);
var _image4Jpeg = require("./image4.jpeg");
var _image4JpegDefault = parcelHelpers.interopDefault(_image4Jpeg);
var _image5Jpeg = require("./image5.jpeg");
var _image5JpegDefault = parcelHelpers.interopDefault(_image5Jpeg);
var _image6Jpeg = require("./image6.jpeg");
var _image6JpegDefault = parcelHelpers.interopDefault(_image6Jpeg);
var _image7Jpeg = require("./image7.jpeg");
var _image7JpegDefault = parcelHelpers.interopDefault(_image7Jpeg);

},{"./image1.jpeg":"18bFU","./image2.jpeg":"bgWu5","./image3.jpeg":"lYrM2","./image4.jpeg":"aj7c9","./image5.jpeg":"5luNB","./image6.jpeg":"03A9s","./image7.jpeg":"e5KA6","@parcel/transformer-js/src/esmodule-helpers.js":"8ppW9"}],"18bFU":[function(require,module,exports) {
module.exports = require("e4424ff030c12573").getBundleURL("2lzh9") + "image1.206f1365.jpeg" + "?" + Date.now();

},{"e4424ff030c12573":"b1aeW"}],"b1aeW":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bgWu5":[function(require,module,exports) {
module.exports = require("b924bd357e257090").getBundleURL("2lzh9") + "image2.f46f058f.jpeg" + "?" + Date.now();

},{"b924bd357e257090":"b1aeW"}],"lYrM2":[function(require,module,exports) {
module.exports = require("b5aff85e34f55508").getBundleURL("2lzh9") + "image3.008f485a.jpeg" + "?" + Date.now();

},{"b5aff85e34f55508":"b1aeW"}],"aj7c9":[function(require,module,exports) {
module.exports = require("9fd7a90f33354e0").getBundleURL("2lzh9") + "image4.aac5712b.jpeg" + "?" + Date.now();

},{"9fd7a90f33354e0":"b1aeW"}],"5luNB":[function(require,module,exports) {
module.exports = require("6310080edcc2d04a").getBundleURL("2lzh9") + "image5.be7a053c.jpeg" + "?" + Date.now();

},{"6310080edcc2d04a":"b1aeW"}],"03A9s":[function(require,module,exports) {
module.exports = require("dd6de9040ee4ddf0").getBundleURL("2lzh9") + "image6.28197e47.jpeg" + "?" + Date.now();

},{"dd6de9040ee4ddf0":"b1aeW"}],"e5KA6":[function(require,module,exports) {
module.exports = require("48d1044bf81c0f5e").getBundleURL("2lzh9") + "image7.7e7d4f0a.jpeg" + "?" + Date.now();

},{"48d1044bf81c0f5e":"b1aeW"}],"7wM6b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TransformControls", ()=>TransformControls);
parcelHelpers.export(exports, "TransformControlsGizmo", ()=>TransformControlsGizmo);
parcelHelpers.export(exports, "TransformControlsPlane", ()=>TransformControlsPlane);
var _three = require("three");
const _raycaster = new (0, _three.Raycaster)();
const _tempVector = new (0, _three.Vector3)();
const _tempVector2 = new (0, _three.Vector3)();
const _tempQuaternion = new (0, _three.Quaternion)();
const _unit = {
    X: new (0, _three.Vector3)(1, 0, 0),
    Y: new (0, _three.Vector3)(0, 1, 0),
    Z: new (0, _three.Vector3)(0, 0, 1)
};
const _changeEvent = {
    type: "change"
};
const _mouseDownEvent = {
    type: "mouseDown"
};
const _mouseUpEvent = {
    type: "mouseUp",
    mode: null
};
const _objectChangeEvent = {
    type: "objectChange"
};
class TransformControls extends (0, _three.Object3D) {
    constructor(camera, domElement){
        super();
        if (domElement === undefined) {
            console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.');
            domElement = document;
        }
        this.isTransformControls = true;
        this.visible = false;
        this.domElement = domElement;
        this.domElement.style.touchAction = "none"; // disable touch scroll
        const _gizmo = new TransformControlsGizmo();
        this._gizmo = _gizmo;
        this.add(_gizmo);
        const _plane = new TransformControlsPlane();
        this._plane = _plane;
        this.add(_plane);
        const scope = this;
        // Defined getter, setter and store for a property
        function defineProperty(propName, defaultValue) {
            let propValue = defaultValue;
            Object.defineProperty(scope, propName, {
                get: function() {
                    return propValue !== undefined ? propValue : defaultValue;
                },
                set: function(value) {
                    if (propValue !== value) {
                        propValue = value;
                        _plane[propName] = value;
                        _gizmo[propName] = value;
                        scope.dispatchEvent({
                            type: propName + "-changed",
                            value: value
                        });
                        scope.dispatchEvent(_changeEvent);
                    }
                }
            });
            scope[propName] = defaultValue;
            _plane[propName] = defaultValue;
            _gizmo[propName] = defaultValue;
        }
        // Define properties with getters/setter
        // Setting the defined property will automatically trigger change event
        // Defined properties are passed down to gizmo and plane
        defineProperty("camera", camera);
        defineProperty("object", undefined);
        defineProperty("enabled", true);
        defineProperty("axis", null);
        defineProperty("mode", "translate");
        defineProperty("translationSnap", null);
        defineProperty("rotationSnap", null);
        defineProperty("scaleSnap", null);
        defineProperty("space", "world");
        defineProperty("size", 1);
        defineProperty("dragging", false);
        defineProperty("showX", true);
        defineProperty("showY", true);
        defineProperty("showZ", true);
        // Reusable utility variables
        const worldPosition = new (0, _three.Vector3)();
        const worldPositionStart = new (0, _three.Vector3)();
        const worldQuaternion = new (0, _three.Quaternion)();
        const worldQuaternionStart = new (0, _three.Quaternion)();
        const cameraPosition = new (0, _three.Vector3)();
        const cameraQuaternion = new (0, _three.Quaternion)();
        const pointStart = new (0, _three.Vector3)();
        const pointEnd = new (0, _three.Vector3)();
        const rotationAxis = new (0, _three.Vector3)();
        const rotationAngle = 0;
        const eye = new (0, _three.Vector3)();
        // TODO: remove properties unused in plane and gizmo
        defineProperty("worldPosition", worldPosition);
        defineProperty("worldPositionStart", worldPositionStart);
        defineProperty("worldQuaternion", worldQuaternion);
        defineProperty("worldQuaternionStart", worldQuaternionStart);
        defineProperty("cameraPosition", cameraPosition);
        defineProperty("cameraQuaternion", cameraQuaternion);
        defineProperty("pointStart", pointStart);
        defineProperty("pointEnd", pointEnd);
        defineProperty("rotationAxis", rotationAxis);
        defineProperty("rotationAngle", rotationAngle);
        defineProperty("eye", eye);
        this._offset = new (0, _three.Vector3)();
        this._startNorm = new (0, _three.Vector3)();
        this._endNorm = new (0, _three.Vector3)();
        this._cameraScale = new (0, _three.Vector3)();
        this._parentPosition = new (0, _three.Vector3)();
        this._parentQuaternion = new (0, _three.Quaternion)();
        this._parentQuaternionInv = new (0, _three.Quaternion)();
        this._parentScale = new (0, _three.Vector3)();
        this._worldScaleStart = new (0, _three.Vector3)();
        this._worldQuaternionInv = new (0, _three.Quaternion)();
        this._worldScale = new (0, _three.Vector3)();
        this._positionStart = new (0, _three.Vector3)();
        this._quaternionStart = new (0, _three.Quaternion)();
        this._scaleStart = new (0, _three.Vector3)();
        this._getPointer = getPointer.bind(this);
        this._onPointerDown = onPointerDown.bind(this);
        this._onPointerHover = onPointerHover.bind(this);
        this._onPointerMove = onPointerMove.bind(this);
        this._onPointerUp = onPointerUp.bind(this);
        this.domElement.addEventListener("pointerdown", this._onPointerDown);
        this.domElement.addEventListener("pointermove", this._onPointerHover);
        this.domElement.addEventListener("pointerup", this._onPointerUp);
    }
    // updateMatrixWorld  updates key transformation variables
    updateMatrixWorld() {
        if (this.object !== undefined) {
            this.object.updateMatrixWorld();
            if (this.object.parent === null) console.error("TransformControls: The attached 3D object must be a part of the scene graph.");
            else this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale);
            this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale);
            this._parentQuaternionInv.copy(this._parentQuaternion).invert();
            this._worldQuaternionInv.copy(this.worldQuaternion).invert();
        }
        this.camera.updateMatrixWorld();
        this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale);
        if (this.camera.isOrthographicCamera) this.camera.getWorldDirection(this.eye).negate();
        else this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize();
        super.updateMatrixWorld(this);
    }
    pointerHover(pointer) {
        if (this.object === undefined || this.dragging === true) return;
        _raycaster.setFromCamera(pointer, this.camera);
        const intersect = intersectObjectWithRay(this._gizmo.picker[this.mode], _raycaster);
        if (intersect) this.axis = intersect.object.name;
        else this.axis = null;
    }
    pointerDown(pointer) {
        if (this.object === undefined || this.dragging === true || pointer.button !== 0) return;
        if (this.axis !== null) {
            _raycaster.setFromCamera(pointer, this.camera);
            const planeIntersect = intersectObjectWithRay(this._plane, _raycaster, true);
            if (planeIntersect) {
                this.object.updateMatrixWorld();
                this.object.parent.updateMatrixWorld();
                this._positionStart.copy(this.object.position);
                this._quaternionStart.copy(this.object.quaternion);
                this._scaleStart.copy(this.object.scale);
                this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart);
                this.pointStart.copy(planeIntersect.point).sub(this.worldPositionStart);
            }
            this.dragging = true;
            _mouseDownEvent.mode = this.mode;
            this.dispatchEvent(_mouseDownEvent);
        }
    }
    pointerMove(pointer) {
        const axis = this.axis;
        const mode = this.mode;
        const object = this.object;
        let space = this.space;
        if (mode === "scale") space = "local";
        else if (axis === "E" || axis === "XYZE" || axis === "XYZ") space = "world";
        if (object === undefined || axis === null || this.dragging === false || pointer.button !== -1) return;
        _raycaster.setFromCamera(pointer, this.camera);
        const planeIntersect = intersectObjectWithRay(this._plane, _raycaster, true);
        if (!planeIntersect) return;
        this.pointEnd.copy(planeIntersect.point).sub(this.worldPositionStart);
        if (mode === "translate") {
            // Apply translate
            this._offset.copy(this.pointEnd).sub(this.pointStart);
            if (space === "local" && axis !== "XYZ") this._offset.applyQuaternion(this._worldQuaternionInv);
            if (axis.indexOf("X") === -1) this._offset.x = 0;
            if (axis.indexOf("Y") === -1) this._offset.y = 0;
            if (axis.indexOf("Z") === -1) this._offset.z = 0;
            if (space === "local" && axis !== "XYZ") this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale);
            else this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale);
            object.position.copy(this._offset).add(this._positionStart);
            // Apply translation snap
            if (this.translationSnap) {
                if (space === "local") {
                    object.position.applyQuaternion(_tempQuaternion.copy(this._quaternionStart).invert());
                    if (axis.search("X") !== -1) object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
                    if (axis.search("Y") !== -1) object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
                    if (axis.search("Z") !== -1) object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
                    object.position.applyQuaternion(this._quaternionStart);
                }
                if (space === "world") {
                    if (object.parent) object.position.add(_tempVector.setFromMatrixPosition(object.parent.matrixWorld));
                    if (axis.search("X") !== -1) object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
                    if (axis.search("Y") !== -1) object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
                    if (axis.search("Z") !== -1) object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
                    if (object.parent) object.position.sub(_tempVector.setFromMatrixPosition(object.parent.matrixWorld));
                }
            }
        } else if (mode === "scale") {
            if (axis.search("XYZ") !== -1) {
                let d = this.pointEnd.length() / this.pointStart.length();
                if (this.pointEnd.dot(this.pointStart) < 0) d *= -1;
                _tempVector2.set(d, d, d);
            } else {
                _tempVector.copy(this.pointStart);
                _tempVector2.copy(this.pointEnd);
                _tempVector.applyQuaternion(this._worldQuaternionInv);
                _tempVector2.applyQuaternion(this._worldQuaternionInv);
                _tempVector2.divide(_tempVector);
                if (axis.search("X") === -1) _tempVector2.x = 1;
                if (axis.search("Y") === -1) _tempVector2.y = 1;
                if (axis.search("Z") === -1) _tempVector2.z = 1;
            }
            // Apply scale
            object.scale.copy(this._scaleStart).multiply(_tempVector2);
            if (this.scaleSnap) {
                if (axis.search("X") !== -1) object.scale.x = Math.round(object.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
                if (axis.search("Y") !== -1) object.scale.y = Math.round(object.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
                if (axis.search("Z") !== -1) object.scale.z = Math.round(object.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
            }
        } else if (mode === "rotate") {
            this._offset.copy(this.pointEnd).sub(this.pointStart);
            const ROTATION_SPEED = 20 / this.worldPosition.distanceTo(_tempVector.setFromMatrixPosition(this.camera.matrixWorld));
            let _inPlaneRotation = false;
            if (axis === "XYZE") {
                this.rotationAxis.copy(this._offset).cross(this.eye).normalize();
                this.rotationAngle = this._offset.dot(_tempVector.copy(this.rotationAxis).cross(this.eye)) * ROTATION_SPEED;
            } else if (axis === "X" || axis === "Y" || axis === "Z") {
                this.rotationAxis.copy(_unit[axis]);
                _tempVector.copy(_unit[axis]);
                if (space === "local") _tempVector.applyQuaternion(this.worldQuaternion);
                _tempVector.cross(this.eye);
                // When _tempVector is 0 after cross with this.eye the vectors are parallel and should use in-plane rotation logic.
                if (_tempVector.length() === 0) _inPlaneRotation = true;
                else this.rotationAngle = this._offset.dot(_tempVector.normalize()) * ROTATION_SPEED;
            }
            if (axis === "E" || _inPlaneRotation) {
                this.rotationAxis.copy(this.eye);
                this.rotationAngle = this.pointEnd.angleTo(this.pointStart);
                this._startNorm.copy(this.pointStart).normalize();
                this._endNorm.copy(this.pointEnd).normalize();
                this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1;
            }
            // Apply rotation snap
            if (this.rotationSnap) this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap;
            // Apply rotate
            if (space === "local" && axis !== "E" && axis !== "XYZE") {
                object.quaternion.copy(this._quaternionStart);
                object.quaternion.multiply(_tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize();
            } else {
                this.rotationAxis.applyQuaternion(this._parentQuaternionInv);
                object.quaternion.copy(_tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle));
                object.quaternion.multiply(this._quaternionStart).normalize();
            }
        }
        this.dispatchEvent(_changeEvent);
        this.dispatchEvent(_objectChangeEvent);
    }
    pointerUp(pointer) {
        if (pointer.button !== 0) return;
        if (this.dragging && this.axis !== null) {
            _mouseUpEvent.mode = this.mode;
            this.dispatchEvent(_mouseUpEvent);
        }
        this.dragging = false;
        this.axis = null;
    }
    dispose() {
        this.domElement.removeEventListener("pointerdown", this._onPointerDown);
        this.domElement.removeEventListener("pointermove", this._onPointerHover);
        this.domElement.removeEventListener("pointermove", this._onPointerMove);
        this.domElement.removeEventListener("pointerup", this._onPointerUp);
        this.traverse(function(child) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
        });
    }
    // Set current object
    attach(object) {
        this.object = object;
        this.visible = true;
        return this;
    }
    // Detach from object
    detach() {
        this.object = undefined;
        this.visible = false;
        this.axis = null;
        return this;
    }
    reset() {
        if (!this.enabled) return;
        if (this.dragging) {
            this.object.position.copy(this._positionStart);
            this.object.quaternion.copy(this._quaternionStart);
            this.object.scale.copy(this._scaleStart);
            this.dispatchEvent(_changeEvent);
            this.dispatchEvent(_objectChangeEvent);
            this.pointStart.copy(this.pointEnd);
        }
    }
    getRaycaster() {
        return _raycaster;
    }
    // TODO: deprecate
    getMode() {
        return this.mode;
    }
    setMode(mode) {
        this.mode = mode;
    }
    setTranslationSnap(translationSnap) {
        this.translationSnap = translationSnap;
    }
    setRotationSnap(rotationSnap) {
        this.rotationSnap = rotationSnap;
    }
    setScaleSnap(scaleSnap) {
        this.scaleSnap = scaleSnap;
    }
    setSize(size) {
        this.size = size;
    }
    setSpace(space) {
        this.space = space;
    }
}
// mouse / touch event handlers
function getPointer(event) {
    if (this.domElement.ownerDocument.pointerLockElement) return {
        x: 0,
        y: 0,
        button: event.button
    };
    else {
        const rect = this.domElement.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left) / rect.width * 2 - 1,
            y: -(event.clientY - rect.top) / rect.height * 2 + 1,
            button: event.button
        };
    }
}
function onPointerHover(event) {
    if (!this.enabled) return;
    switch(event.pointerType){
        case "mouse":
        case "pen":
            this.pointerHover(this._getPointer(event));
            break;
    }
}
function onPointerDown(event) {
    if (!this.enabled) return;
    if (!document.pointerLockElement) this.domElement.setPointerCapture(event.pointerId);
    this.domElement.addEventListener("pointermove", this._onPointerMove);
    this.pointerHover(this._getPointer(event));
    this.pointerDown(this._getPointer(event));
}
function onPointerMove(event) {
    if (!this.enabled) return;
    this.pointerMove(this._getPointer(event));
}
function onPointerUp(event) {
    if (!this.enabled) return;
    this.domElement.releasePointerCapture(event.pointerId);
    this.domElement.removeEventListener("pointermove", this._onPointerMove);
    this.pointerUp(this._getPointer(event));
}
function intersectObjectWithRay(object, raycaster, includeInvisible) {
    const allIntersections = raycaster.intersectObject(object, true);
    for(let i = 0; i < allIntersections.length; i++){
        if (allIntersections[i].object.visible || includeInvisible) return allIntersections[i];
    }
    return false;
}
//
// Reusable utility variables
const _tempEuler = new (0, _three.Euler)();
const _alignVector = new (0, _three.Vector3)(0, 1, 0);
const _zeroVector = new (0, _three.Vector3)(0, 0, 0);
const _lookAtMatrix = new (0, _three.Matrix4)();
const _tempQuaternion2 = new (0, _three.Quaternion)();
const _identityQuaternion = new (0, _three.Quaternion)();
const _dirVector = new (0, _three.Vector3)();
const _tempMatrix = new (0, _three.Matrix4)();
const _unitX = new (0, _three.Vector3)(1, 0, 0);
const _unitY = new (0, _three.Vector3)(0, 1, 0);
const _unitZ = new (0, _three.Vector3)(0, 0, 1);
const _v1 = new (0, _three.Vector3)();
const _v2 = new (0, _three.Vector3)();
const _v3 = new (0, _three.Vector3)();
class TransformControlsGizmo extends (0, _three.Object3D) {
    constructor(){
        super();
        this.isTransformControlsGizmo = true;
        this.type = "TransformControlsGizmo";
        // shared materials
        const gizmoMaterial = new (0, _three.MeshBasicMaterial)({
            depthTest: false,
            depthWrite: false,
            fog: false,
            toneMapped: false,
            transparent: true
        });
        const gizmoLineMaterial = new (0, _three.LineBasicMaterial)({
            depthTest: false,
            depthWrite: false,
            fog: false,
            toneMapped: false,
            transparent: true
        });
        // Make unique material for each axis/color
        const matInvisible = gizmoMaterial.clone();
        matInvisible.opacity = 0.15;
        const matHelper = gizmoLineMaterial.clone();
        matHelper.opacity = 0.5;
        const matRed = gizmoMaterial.clone();
        matRed.color.setHex(0xff0000);
        const matGreen = gizmoMaterial.clone();
        matGreen.color.setHex(0x00ff00);
        const matBlue = gizmoMaterial.clone();
        matBlue.color.setHex(0x0000ff);
        const matRedTransparent = gizmoMaterial.clone();
        matRedTransparent.color.setHex(0xff0000);
        matRedTransparent.opacity = 0.5;
        const matGreenTransparent = gizmoMaterial.clone();
        matGreenTransparent.color.setHex(0x00ff00);
        matGreenTransparent.opacity = 0.5;
        const matBlueTransparent = gizmoMaterial.clone();
        matBlueTransparent.color.setHex(0x0000ff);
        matBlueTransparent.opacity = 0.5;
        const matWhiteTransparent = gizmoMaterial.clone();
        matWhiteTransparent.opacity = 0.25;
        const matYellowTransparent = gizmoMaterial.clone();
        matYellowTransparent.color.setHex(0xffff00);
        matYellowTransparent.opacity = 0.25;
        const matYellow = gizmoMaterial.clone();
        matYellow.color.setHex(0xffff00);
        const matGray = gizmoMaterial.clone();
        matGray.color.setHex(0x787878);
        // reusable geometry
        const arrowGeometry = new (0, _three.CylinderGeometry)(0, 0.04, 0.1, 12);
        arrowGeometry.translate(0, 0.05, 0);
        const scaleHandleGeometry = new (0, _three.BoxGeometry)(0.08, 0.08, 0.08);
        scaleHandleGeometry.translate(0, 0.04, 0);
        const lineGeometry = new (0, _three.BufferGeometry)();
        lineGeometry.setAttribute("position", new (0, _three.Float32BufferAttribute)([
            0,
            0,
            0,
            1,
            0,
            0
        ], 3));
        const lineGeometry2 = new (0, _three.CylinderGeometry)(0.0075, 0.0075, 0.5, 3);
        lineGeometry2.translate(0, 0.25, 0);
        function CircleGeometry(radius, arc) {
            const geometry = new (0, _three.TorusGeometry)(radius, 0.0075, 3, 64, arc * Math.PI * 2);
            geometry.rotateY(Math.PI / 2);
            geometry.rotateX(Math.PI / 2);
            return geometry;
        }
        // Special geometry for transform helper. If scaled with position vector it spans from [0,0,0] to position
        function TranslateHelperGeometry() {
            const geometry = new (0, _three.BufferGeometry)();
            geometry.setAttribute("position", new (0, _three.Float32BufferAttribute)([
                0,
                0,
                0,
                1,
                1,
                1
            ], 3));
            return geometry;
        }
        // Gizmo definitions - custom hierarchy definitions for setupGizmo() function
        const gizmoTranslate = {
            X: [
                [
                    new (0, _three.Mesh)(arrowGeometry, matRed),
                    [
                        0.5,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ],
                [
                    new (0, _three.Mesh)(arrowGeometry, matRed),
                    [
                        -0.5,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI / 2
                    ]
                ],
                [
                    new (0, _three.Mesh)(lineGeometry2, matRed),
                    [
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ]
            ],
            Y: [
                [
                    new (0, _three.Mesh)(arrowGeometry, matGreen),
                    [
                        0,
                        0.5,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(arrowGeometry, matGreen),
                    [
                        0,
                        -0.5,
                        0
                    ],
                    [
                        Math.PI,
                        0,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(lineGeometry2, matGreen)
                ]
            ],
            Z: [
                [
                    new (0, _three.Mesh)(arrowGeometry, matBlue),
                    [
                        0,
                        0,
                        0.5
                    ],
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(arrowGeometry, matBlue),
                    [
                        0,
                        0,
                        -0.5
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(lineGeometry2, matBlue),
                    null,
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ],
            XYZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.OctahedronGeometry)(0.1, 0), matWhiteTransparent.clone()),
                    [
                        0,
                        0,
                        0
                    ]
                ]
            ],
            XY: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.15, 0.15, 0.01), matBlueTransparent.clone()),
                    [
                        0.15,
                        0.15,
                        0
                    ]
                ]
            ],
            YZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.15, 0.15, 0.01), matRedTransparent.clone()),
                    [
                        0,
                        0.15,
                        0.15
                    ],
                    [
                        0,
                        Math.PI / 2,
                        0
                    ]
                ]
            ],
            XZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.15, 0.15, 0.01), matGreenTransparent.clone()),
                    [
                        0.15,
                        0,
                        0.15
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ]
        };
        const pickerTranslate = {
            X: [
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0.3,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ],
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        -0.3,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI / 2
                    ]
                ]
            ],
            Y: [
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        0.3,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        -0.3,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI
                    ]
                ]
            ],
            Z: [
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        0,
                        0.3
                    ],
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        0,
                        -0.3
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ],
            XYZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.OctahedronGeometry)(0.2, 0), matInvisible)
                ]
            ],
            XY: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.2, 0.2, 0.01), matInvisible),
                    [
                        0.15,
                        0.15,
                        0
                    ]
                ]
            ],
            YZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.2, 0.2, 0.01), matInvisible),
                    [
                        0,
                        0.15,
                        0.15
                    ],
                    [
                        0,
                        Math.PI / 2,
                        0
                    ]
                ]
            ],
            XZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.2, 0.2, 0.01), matInvisible),
                    [
                        0.15,
                        0,
                        0.15
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ]
        };
        const helperTranslate = {
            START: [
                [
                    new (0, _three.Mesh)(new (0, _three.OctahedronGeometry)(0.01, 2), matHelper),
                    null,
                    null,
                    null,
                    "helper"
                ]
            ],
            END: [
                [
                    new (0, _three.Mesh)(new (0, _three.OctahedronGeometry)(0.01, 2), matHelper),
                    null,
                    null,
                    null,
                    "helper"
                ]
            ],
            DELTA: [
                [
                    new (0, _three.Line)(TranslateHelperGeometry(), matHelper),
                    null,
                    null,
                    null,
                    "helper"
                ]
            ],
            X: [
                [
                    new (0, _three.Line)(lineGeometry, matHelper.clone()),
                    [
                        -1000,
                        0,
                        0
                    ],
                    null,
                    [
                        1e6,
                        1,
                        1
                    ],
                    "helper"
                ]
            ],
            Y: [
                [
                    new (0, _three.Line)(lineGeometry, matHelper.clone()),
                    [
                        0,
                        -1000,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI / 2
                    ],
                    [
                        1e6,
                        1,
                        1
                    ],
                    "helper"
                ]
            ],
            Z: [
                [
                    new (0, _three.Line)(lineGeometry, matHelper.clone()),
                    [
                        0,
                        0,
                        -1000
                    ],
                    [
                        0,
                        -Math.PI / 2,
                        0
                    ],
                    [
                        1e6,
                        1,
                        1
                    ],
                    "helper"
                ]
            ]
        };
        const gizmoRotate = {
            XYZE: [
                [
                    new (0, _three.Mesh)(CircleGeometry(0.5, 1), matGray),
                    null,
                    [
                        0,
                        Math.PI / 2,
                        0
                    ]
                ]
            ],
            X: [
                [
                    new (0, _three.Mesh)(CircleGeometry(0.5, 0.5), matRed)
                ]
            ],
            Y: [
                [
                    new (0, _three.Mesh)(CircleGeometry(0.5, 0.5), matGreen),
                    null,
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ]
            ],
            Z: [
                [
                    new (0, _three.Mesh)(CircleGeometry(0.5, 0.5), matBlue),
                    null,
                    [
                        0,
                        Math.PI / 2,
                        0
                    ]
                ]
            ],
            E: [
                [
                    new (0, _three.Mesh)(CircleGeometry(0.75, 1), matYellowTransparent),
                    null,
                    [
                        0,
                        Math.PI / 2,
                        0
                    ]
                ]
            ]
        };
        const helperRotate = {
            AXIS: [
                [
                    new (0, _three.Line)(lineGeometry, matHelper.clone()),
                    [
                        -1000,
                        0,
                        0
                    ],
                    null,
                    [
                        1e6,
                        1,
                        1
                    ],
                    "helper"
                ]
            ]
        };
        const pickerRotate = {
            XYZE: [
                [
                    new (0, _three.Mesh)(new (0, _three.SphereGeometry)(0.25, 10, 8), matInvisible)
                ]
            ],
            X: [
                [
                    new (0, _three.Mesh)(new (0, _three.TorusGeometry)(0.5, 0.1, 4, 24), matInvisible),
                    [
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        -Math.PI / 2,
                        -Math.PI / 2
                    ]
                ]
            ],
            Y: [
                [
                    new (0, _three.Mesh)(new (0, _three.TorusGeometry)(0.5, 0.1, 4, 24), matInvisible),
                    [
                        0,
                        0,
                        0
                    ],
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ],
            Z: [
                [
                    new (0, _three.Mesh)(new (0, _three.TorusGeometry)(0.5, 0.1, 4, 24), matInvisible),
                    [
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ]
            ],
            E: [
                [
                    new (0, _three.Mesh)(new (0, _three.TorusGeometry)(0.75, 0.1, 2, 24), matInvisible)
                ]
            ]
        };
        const gizmoScale = {
            X: [
                [
                    new (0, _three.Mesh)(scaleHandleGeometry, matRed),
                    [
                        0.5,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ],
                [
                    new (0, _three.Mesh)(lineGeometry2, matRed),
                    [
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ],
                [
                    new (0, _three.Mesh)(scaleHandleGeometry, matRed),
                    [
                        -0.5,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI / 2
                    ]
                ]
            ],
            Y: [
                [
                    new (0, _three.Mesh)(scaleHandleGeometry, matGreen),
                    [
                        0,
                        0.5,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(lineGeometry2, matGreen)
                ],
                [
                    new (0, _three.Mesh)(scaleHandleGeometry, matGreen),
                    [
                        0,
                        -0.5,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI
                    ]
                ]
            ],
            Z: [
                [
                    new (0, _three.Mesh)(scaleHandleGeometry, matBlue),
                    [
                        0,
                        0,
                        0.5
                    ],
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(lineGeometry2, matBlue),
                    [
                        0,
                        0,
                        0
                    ],
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(scaleHandleGeometry, matBlue),
                    [
                        0,
                        0,
                        -0.5
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ],
            XY: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.15, 0.15, 0.01), matBlueTransparent),
                    [
                        0.15,
                        0.15,
                        0
                    ]
                ]
            ],
            YZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.15, 0.15, 0.01), matRedTransparent),
                    [
                        0,
                        0.15,
                        0.15
                    ],
                    [
                        0,
                        Math.PI / 2,
                        0
                    ]
                ]
            ],
            XZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.15, 0.15, 0.01), matGreenTransparent),
                    [
                        0.15,
                        0,
                        0.15
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ],
            XYZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.1, 0.1, 0.1), matWhiteTransparent.clone())
                ]
            ]
        };
        const pickerScale = {
            X: [
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0.3,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        -Math.PI / 2
                    ]
                ],
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        -0.3,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI / 2
                    ]
                ]
            ],
            Y: [
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        0.3,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        -0.3,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI
                    ]
                ]
            ],
            Z: [
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        0,
                        0.3
                    ],
                    [
                        Math.PI / 2,
                        0,
                        0
                    ]
                ],
                [
                    new (0, _three.Mesh)(new (0, _three.CylinderGeometry)(0.2, 0, 0.6, 4), matInvisible),
                    [
                        0,
                        0,
                        -0.3
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ],
            XY: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.2, 0.2, 0.01), matInvisible),
                    [
                        0.15,
                        0.15,
                        0
                    ]
                ]
            ],
            YZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.2, 0.2, 0.01), matInvisible),
                    [
                        0,
                        0.15,
                        0.15
                    ],
                    [
                        0,
                        Math.PI / 2,
                        0
                    ]
                ]
            ],
            XZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.2, 0.2, 0.01), matInvisible),
                    [
                        0.15,
                        0,
                        0.15
                    ],
                    [
                        -Math.PI / 2,
                        0,
                        0
                    ]
                ]
            ],
            XYZ: [
                [
                    new (0, _three.Mesh)(new (0, _three.BoxGeometry)(0.2, 0.2, 0.2), matInvisible),
                    [
                        0,
                        0,
                        0
                    ]
                ]
            ]
        };
        const helperScale = {
            X: [
                [
                    new (0, _three.Line)(lineGeometry, matHelper.clone()),
                    [
                        -1000,
                        0,
                        0
                    ],
                    null,
                    [
                        1e6,
                        1,
                        1
                    ],
                    "helper"
                ]
            ],
            Y: [
                [
                    new (0, _three.Line)(lineGeometry, matHelper.clone()),
                    [
                        0,
                        -1000,
                        0
                    ],
                    [
                        0,
                        0,
                        Math.PI / 2
                    ],
                    [
                        1e6,
                        1,
                        1
                    ],
                    "helper"
                ]
            ],
            Z: [
                [
                    new (0, _three.Line)(lineGeometry, matHelper.clone()),
                    [
                        0,
                        0,
                        -1000
                    ],
                    [
                        0,
                        -Math.PI / 2,
                        0
                    ],
                    [
                        1e6,
                        1,
                        1
                    ],
                    "helper"
                ]
            ]
        };
        // Creates an Object3D with gizmos described in custom hierarchy definition.
        function setupGizmo(gizmoMap) {
            const gizmo = new (0, _three.Object3D)();
            for(const name in gizmoMap)for(let i = gizmoMap[name].length; i--;){
                const object = gizmoMap[name][i][0].clone();
                const position = gizmoMap[name][i][1];
                const rotation = gizmoMap[name][i][2];
                const scale = gizmoMap[name][i][3];
                const tag = gizmoMap[name][i][4];
                // name and tag properties are essential for picking and updating logic.
                object.name = name;
                object.tag = tag;
                if (position) object.position.set(position[0], position[1], position[2]);
                if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);
                if (scale) object.scale.set(scale[0], scale[1], scale[2]);
                object.updateMatrix();
                const tempGeometry = object.geometry.clone();
                tempGeometry.applyMatrix4(object.matrix);
                object.geometry = tempGeometry;
                object.renderOrder = Infinity;
                object.position.set(0, 0, 0);
                object.rotation.set(0, 0, 0);
                object.scale.set(1, 1, 1);
                gizmo.add(object);
            }
            return gizmo;
        }
        // Gizmo creation
        this.gizmo = {};
        this.picker = {};
        this.helper = {};
        this.add(this.gizmo["translate"] = setupGizmo(gizmoTranslate));
        this.add(this.gizmo["rotate"] = setupGizmo(gizmoRotate));
        this.add(this.gizmo["scale"] = setupGizmo(gizmoScale));
        this.add(this.picker["translate"] = setupGizmo(pickerTranslate));
        this.add(this.picker["rotate"] = setupGizmo(pickerRotate));
        this.add(this.picker["scale"] = setupGizmo(pickerScale));
        this.add(this.helper["translate"] = setupGizmo(helperTranslate));
        this.add(this.helper["rotate"] = setupGizmo(helperRotate));
        this.add(this.helper["scale"] = setupGizmo(helperScale));
        // Pickers should be hidden always
        this.picker["translate"].visible = false;
        this.picker["rotate"].visible = false;
        this.picker["scale"].visible = false;
    }
    // updateMatrixWorld will update transformations and appearance of individual handles
    updateMatrixWorld(force) {
        const space = this.mode === "scale" ? "local" : this.space; // scale always oriented to local rotation
        const quaternion = space === "local" ? this.worldQuaternion : _identityQuaternion;
        // Show only gizmos for current transform mode
        this.gizmo["translate"].visible = this.mode === "translate";
        this.gizmo["rotate"].visible = this.mode === "rotate";
        this.gizmo["scale"].visible = this.mode === "scale";
        this.helper["translate"].visible = this.mode === "translate";
        this.helper["rotate"].visible = this.mode === "rotate";
        this.helper["scale"].visible = this.mode === "scale";
        let handles = [];
        handles = handles.concat(this.picker[this.mode].children);
        handles = handles.concat(this.gizmo[this.mode].children);
        handles = handles.concat(this.helper[this.mode].children);
        for(let i = 0; i < handles.length; i++){
            const handle = handles[i];
            // hide aligned to camera
            handle.visible = true;
            handle.rotation.set(0, 0, 0);
            handle.position.copy(this.worldPosition);
            let factor;
            if (this.camera.isOrthographicCamera) factor = (this.camera.top - this.camera.bottom) / this.camera.zoom;
            else factor = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7);
            handle.scale.set(1, 1, 1).multiplyScalar(factor * this.size / 4);
            // TODO: simplify helpers and consider decoupling from gizmo
            if (handle.tag === "helper") {
                handle.visible = false;
                if (handle.name === "AXIS") {
                    handle.visible = !!this.axis;
                    if (this.axis === "X") {
                        _tempQuaternion.setFromEuler(_tempEuler.set(0, 0, 0));
                        handle.quaternion.copy(quaternion).multiply(_tempQuaternion);
                        if (Math.abs(_alignVector.copy(_unitX).applyQuaternion(quaternion).dot(this.eye)) > 0.9) handle.visible = false;
                    }
                    if (this.axis === "Y") {
                        _tempQuaternion.setFromEuler(_tempEuler.set(0, 0, Math.PI / 2));
                        handle.quaternion.copy(quaternion).multiply(_tempQuaternion);
                        if (Math.abs(_alignVector.copy(_unitY).applyQuaternion(quaternion).dot(this.eye)) > 0.9) handle.visible = false;
                    }
                    if (this.axis === "Z") {
                        _tempQuaternion.setFromEuler(_tempEuler.set(0, Math.PI / 2, 0));
                        handle.quaternion.copy(quaternion).multiply(_tempQuaternion);
                        if (Math.abs(_alignVector.copy(_unitZ).applyQuaternion(quaternion).dot(this.eye)) > 0.9) handle.visible = false;
                    }
                    if (this.axis === "XYZE") {
                        _tempQuaternion.setFromEuler(_tempEuler.set(0, Math.PI / 2, 0));
                        _alignVector.copy(this.rotationAxis);
                        handle.quaternion.setFromRotationMatrix(_lookAtMatrix.lookAt(_zeroVector, _alignVector, _unitY));
                        handle.quaternion.multiply(_tempQuaternion);
                        handle.visible = this.dragging;
                    }
                    if (this.axis === "E") handle.visible = false;
                } else if (handle.name === "START") {
                    handle.position.copy(this.worldPositionStart);
                    handle.visible = this.dragging;
                } else if (handle.name === "END") {
                    handle.position.copy(this.worldPosition);
                    handle.visible = this.dragging;
                } else if (handle.name === "DELTA") {
                    handle.position.copy(this.worldPositionStart);
                    handle.quaternion.copy(this.worldQuaternionStart);
                    _tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1);
                    _tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert());
                    handle.scale.copy(_tempVector);
                    handle.visible = this.dragging;
                } else {
                    handle.quaternion.copy(quaternion);
                    if (this.dragging) handle.position.copy(this.worldPositionStart);
                    else handle.position.copy(this.worldPosition);
                    if (this.axis) handle.visible = this.axis.search(handle.name) !== -1;
                }
                continue;
            }
            // Align handles to current local or world rotation
            handle.quaternion.copy(quaternion);
            if (this.mode === "translate" || this.mode === "scale") {
                // Hide translate and scale axis facing the camera
                const AXIS_HIDE_THRESHOLD = 0.99;
                const PLANE_HIDE_THRESHOLD = 0.2;
                if (handle.name === "X") {
                    if (Math.abs(_alignVector.copy(_unitX).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_THRESHOLD) {
                        handle.scale.set(1e-10, 1e-10, 1e-10);
                        handle.visible = false;
                    }
                }
                if (handle.name === "Y") {
                    if (Math.abs(_alignVector.copy(_unitY).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_THRESHOLD) {
                        handle.scale.set(1e-10, 1e-10, 1e-10);
                        handle.visible = false;
                    }
                }
                if (handle.name === "Z") {
                    if (Math.abs(_alignVector.copy(_unitZ).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_THRESHOLD) {
                        handle.scale.set(1e-10, 1e-10, 1e-10);
                        handle.visible = false;
                    }
                }
                if (handle.name === "XY") {
                    if (Math.abs(_alignVector.copy(_unitZ).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_THRESHOLD) {
                        handle.scale.set(1e-10, 1e-10, 1e-10);
                        handle.visible = false;
                    }
                }
                if (handle.name === "YZ") {
                    if (Math.abs(_alignVector.copy(_unitX).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_THRESHOLD) {
                        handle.scale.set(1e-10, 1e-10, 1e-10);
                        handle.visible = false;
                    }
                }
                if (handle.name === "XZ") {
                    if (Math.abs(_alignVector.copy(_unitY).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_THRESHOLD) {
                        handle.scale.set(1e-10, 1e-10, 1e-10);
                        handle.visible = false;
                    }
                }
            } else if (this.mode === "rotate") {
                // Align handles to current local or world rotation
                _tempQuaternion2.copy(quaternion);
                _alignVector.copy(this.eye).applyQuaternion(_tempQuaternion.copy(quaternion).invert());
                if (handle.name.search("E") !== -1) handle.quaternion.setFromRotationMatrix(_lookAtMatrix.lookAt(this.eye, _zeroVector, _unitY));
                if (handle.name === "X") {
                    _tempQuaternion.setFromAxisAngle(_unitX, Math.atan2(-_alignVector.y, _alignVector.z));
                    _tempQuaternion.multiplyQuaternions(_tempQuaternion2, _tempQuaternion);
                    handle.quaternion.copy(_tempQuaternion);
                }
                if (handle.name === "Y") {
                    _tempQuaternion.setFromAxisAngle(_unitY, Math.atan2(_alignVector.x, _alignVector.z));
                    _tempQuaternion.multiplyQuaternions(_tempQuaternion2, _tempQuaternion);
                    handle.quaternion.copy(_tempQuaternion);
                }
                if (handle.name === "Z") {
                    _tempQuaternion.setFromAxisAngle(_unitZ, Math.atan2(_alignVector.y, _alignVector.x));
                    _tempQuaternion.multiplyQuaternions(_tempQuaternion2, _tempQuaternion);
                    handle.quaternion.copy(_tempQuaternion);
                }
            }
            // Hide disabled axes
            handle.visible = handle.visible && (handle.name.indexOf("X") === -1 || this.showX);
            handle.visible = handle.visible && (handle.name.indexOf("Y") === -1 || this.showY);
            handle.visible = handle.visible && (handle.name.indexOf("Z") === -1 || this.showZ);
            handle.visible = handle.visible && (handle.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ);
            // highlight selected axis
            handle.material._color = handle.material._color || handle.material.color.clone();
            handle.material._opacity = handle.material._opacity || handle.material.opacity;
            handle.material.color.copy(handle.material._color);
            handle.material.opacity = handle.material._opacity;
            if (this.enabled && this.axis) {
                if (handle.name === this.axis) {
                    handle.material.color.setHex(0xffff00);
                    handle.material.opacity = 1.0;
                } else if (this.axis.split("").some(function(a) {
                    return handle.name === a;
                })) {
                    handle.material.color.setHex(0xffff00);
                    handle.material.opacity = 1.0;
                }
            }
        }
        super.updateMatrixWorld(force);
    }
}
//
class TransformControlsPlane extends (0, _three.Mesh) {
    constructor(){
        super(new (0, _three.PlaneGeometry)(100000, 100000, 2, 2), new (0, _three.MeshBasicMaterial)({
            visible: false,
            wireframe: true,
            side: (0, _three.DoubleSide),
            transparent: true,
            opacity: 0.1,
            toneMapped: false
        }));
        this.isTransformControlsPlane = true;
        this.type = "TransformControlsPlane";
    }
    updateMatrixWorld(force) {
        let space = this.space;
        this.position.copy(this.worldPosition);
        if (this.mode === "scale") space = "local"; // scale always oriented to local rotation
        _v1.copy(_unitX).applyQuaternion(space === "local" ? this.worldQuaternion : _identityQuaternion);
        _v2.copy(_unitY).applyQuaternion(space === "local" ? this.worldQuaternion : _identityQuaternion);
        _v3.copy(_unitZ).applyQuaternion(space === "local" ? this.worldQuaternion : _identityQuaternion);
        // Align the plane for current transform mode, axis and space.
        _alignVector.copy(_v2);
        switch(this.mode){
            case "translate":
            case "scale":
                switch(this.axis){
                    case "X":
                        _alignVector.copy(this.eye).cross(_v1);
                        _dirVector.copy(_v1).cross(_alignVector);
                        break;
                    case "Y":
                        _alignVector.copy(this.eye).cross(_v2);
                        _dirVector.copy(_v2).cross(_alignVector);
                        break;
                    case "Z":
                        _alignVector.copy(this.eye).cross(_v3);
                        _dirVector.copy(_v3).cross(_alignVector);
                        break;
                    case "XY":
                        _dirVector.copy(_v3);
                        break;
                    case "YZ":
                        _dirVector.copy(_v1);
                        break;
                    case "XZ":
                        _alignVector.copy(_v3);
                        _dirVector.copy(_v2);
                        break;
                    case "XYZ":
                    case "E":
                        _dirVector.set(0, 0, 0);
                        break;
                }
                break;
            case "rotate":
            default:
                // special case for rotate
                _dirVector.set(0, 0, 0);
        }
        if (_dirVector.length() === 0) // If in rotate mode, make the plane parallel to camera
        this.quaternion.copy(this.cameraQuaternion);
        else {
            _tempMatrix.lookAt(_tempVector.set(0, 0, 0), _dirVector, _alignVector);
            this.quaternion.setFromRotationMatrix(_tempMatrix);
        }
        super.updateMatrixWorld(force);
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"8ppW9"}],"6xUSB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var Stats = function() {
    var mode = 0;
    var container = document.createElement("div");
    container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
    container.addEventListener("click", function(event) {
        event.preventDefault();
        showPanel(++mode % container.children.length);
    }, false);
    //
    function addPanel(panel) {
        container.appendChild(panel.dom);
        return panel;
    }
    function showPanel(id) {
        for(var i = 0; i < container.children.length; i++)container.children[i].style.display = i === id ? "block" : "none";
        mode = id;
    }
    //
    var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
    var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
    var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
    showPanel(0);
    return {
        REVISION: 16,
        dom: container,
        addPanel: addPanel,
        showPanel: showPanel,
        begin: function() {
            beginTime = (performance || Date).now();
        },
        end: function() {
            frames++;
            var time = (performance || Date).now();
            msPanel.update(time - beginTime, 200);
            if (time >= prevTime + 1000) {
                fpsPanel.update(frames * 1000 / (time - prevTime), 100);
                prevTime = time;
                frames = 0;
                if (memPanel) {
                    var memory = performance.memory;
                    memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
                }
            }
            return time;
        },
        update: function() {
            beginTime = this.end();
        },
        // Backwards Compatibility
        domElement: container,
        setMode: showPanel
    };
};
Stats.Panel = function(name, fg, bg) {
    var min = Infinity, max = 0, round = Math.round;
    var PR = round(window.devicePixelRatio || 1);
    var WIDTH = 80 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;
    var canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.cssText = "width:80px;height:48px";
    var context = canvas.getContext("2d");
    context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
    context.textBaseline = "top";
    context.fillStyle = bg;
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = fg;
    context.fillText(name, TEXT_X, TEXT_Y);
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    context.fillStyle = bg;
    context.globalAlpha = 0.9;
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    return {
        dom: canvas,
        update: function(value, maxValue) {
            min = Math.min(min, value);
            max = Math.max(max, value);
            context.fillStyle = bg;
            context.globalAlpha = 1;
            context.fillRect(0, 0, WIDTH, GRAPH_Y);
            context.fillStyle = fg;
            context.fillText(round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
            context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
            context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
            context.fillStyle = bg;
            context.globalAlpha = 0.9;
            context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
        }
    };
};
exports.default = Stats;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8ppW9"}]},["5uTtK"], null, "parcelRequire20bc")

//# sourceMappingURL=3dview.70a1b721.js.map
