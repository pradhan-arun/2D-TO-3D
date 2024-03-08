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
})({"2ZMt1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a79362a8177dfa8f";
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

},{}],"6V1YQ":[function(require,module,exports) {
var _three = require("three");
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
var _allImage = require("../assets/AllImage");
// Initialize Three.js
const scene = new _three.Scene();
const camera = new _three.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new _three.WebGLRenderer({
    canvas: document.getElementById("canvas")
});
renderer.setSize(window.innerWidth, window.innerHeight); // Adjust canvas size
camera.updateProjectionMatrix();
camera.position.z = 5;
const orbit = new (0, _orbitControls.OrbitControls)(camera, renderer.domElement);
orbit.enableRotate = true; // Allow rotation
orbit.enableZoom = true; // Allow zooming
orbit.enablePan = false; // Disable panning
var floatingValue = document.getElementsByClassName("floating-section")[0];
var sidebarValue = document.getElementsByClassName("sidebar")[0];
var modificationValue = document.getElementById("modification-container");
// Retrieve lines from local storage
const lines = JSON.parse(window.localStorage.getItem("lines"));
console.log("lines = ", lines);
const wallMeshes = lines.map((linePoints, index)=>{
    const mesh = createWallMesh(linePoints);
    mesh.rotation.x = -Math.PI / 2;
    mesh.name = "wall";
    return mesh;
});
wallMeshes.forEach((mesh)=>scene.add(mesh));
// Raycaster for click detection
const raycaster = new _three.Raycaster();
const mouse = new _three.Vector3();
let selectedMesh = null; // Initialize selectedMesh variable
var objectValue = null;
// Event listener for mouse click
window.addEventListener("dblclick", onMouseClick, false);
// Render loop
function animate() {
    requestAnimationFrame(animate);
    orbit.update();
    renderer.render(scene, camera);
}
animate();
// Shape selection handling
document.querySelectorAll(".shape-option").forEach((option)=>{
    option.addEventListener("click", function() {
        const shape = this.id;
        if (shape === "circle") // Call function to add circle to Three.js scene
        addCircle();
        else if (shape === "square") // Call function to add square to Three.js scene
        addSquare();
        else if (shape === "triangle") // Call function to add triangle to Three.js scene
        addTriangle();
    });
});
// Event listeners for position modification
document.getElementById("move-left").addEventListener("click", function() {
    objectValue.position.x -= 0.1;
});
document.getElementById("move-right").addEventListener("click", function() {
    objectValue.position.x += 0.1;
});
document.getElementById("move-up").addEventListener("click", function() {
    objectValue.position.y += 0.1;
});
document.getElementById("move-down").addEventListener("click", function() {
    objectValue.position.y -= 0.1;
});
document.getElementById("forward").addEventListener("click", function() {
    objectValue.position.z += 0.1;
});
document.getElementById("backward").addEventListener("click", function() {
    objectValue.position.z -= 0.1;
});
// Event listeners for rotation modification
document.getElementById("rotate-x-in").addEventListener("click", function() {
    if (objectValue) objectValue.rotation.x += 0.1; // Rotate around the X-axis
});
document.getElementById("rotate-x-desc").addEventListener("click", function() {
    if (objectValue) objectValue.rotation.x -= 0.1; // Rotate around the Y-axis
});
// Event listeners for rotation modification
document.getElementById("rotate-y-in").addEventListener("click", function() {
    if (objectValue) objectValue.rotation.y += 0.01; // Rotate around the X-axis
});
document.getElementById("rotate-y-desc").addEventListener("click", function() {
    if (objectValue) objectValue.rotation.y -= 0.1; // Rotate around the Y-axis
});
// Event listeners for rotation modification
document.getElementById("rotate-z-in").addEventListener("click", function() {
    if (objectValue) objectValue.rotation.z += 0.1; // Rotate around the X-axis
});
document.getElementById("rotate-z-desc").addEventListener("click", function() {
    if (objectValue) objectValue.rotation.z -= 0.1; // Rotate around the Y-axis
});
// Event listeners for size modification
document.getElementById("increase-size").addEventListener("click", function() {
    if (objectValue) objectValue.scale.x += 0.1; // Increase size by 10%
});
document.getElementById("decrease-size").addEventListener("click", function() {
    if (objectValue) objectValue.scale.x -= 0.1;
});
// Event listeners for size modification
document.getElementById("scale-z-in").addEventListener("click", function() {
    if (objectValue) objectValue.scale.z += 0.1; // Increase size by 10%
});
document.getElementById("scale-z-desc").addEventListener("click", function() {
    if (objectValue) objectValue.scale.z -= 0.1;
});
// Event listeners for scale modification
document.getElementById("scale-up").addEventListener("click", function() {
    if (objectValue) objectValue.scale.y += 0.1;
});
document.getElementById("scale-down").addEventListener("click", function() {
    if (objectValue) objectValue.scale.y -= 0.1;
});
// ALL FUNCTIONS
function createWallMesh(linePoints, addSpecial = false) {
    console.log("line page == ", linePoints);
    const shape = new _three.Shape(linePoints.map((point)=>new _three.Vector2(point.x / 200 * 2 - 1, -(point.y / 250) * 2 + 1)));
    const extrudeSettings = {
        depth: 2,
        bevelEnabled: false
    };
    const geometry = new _three.ExtrudeGeometry(shape, extrudeSettings);
    const material = new _three.MeshBasicMaterial({
        color: getRandomColor()
    }); // Assign random color to the wall
    const wallMesh = new _three.Mesh(geometry, material);
    wallMesh.name = "wall";
    // Create a group to hold both wall and square meshes
    const wallGroup = new _three.Group();
    wallGroup.add(wallMesh); // Add square mesh to the group
    return wallGroup;
}
// Function to generate random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++)color += letters[Math.floor(Math.random() * 16)];
    return color;
}
// Function to handle double click event
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    console.log("double clicked");
    mouse.x = event.clientX / window.innerWidth * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        // If the ray intersects with any object
        const clickedObject = intersects[0].object;
        console.log("clicked object == ", clickedObject);
        // Check if the clicked object is already selected
        if (clickedObject === selectedMesh) {
            // If already selected, deselect it and reset its properties
            if (selectedMesh.material.map === null) selectedMesh.material.color.setHex(originalColor);
            else selectedMesh.material.color.setHex(0xffffff);
            // Revert to original color
            selectedMesh = null; // Reset selectedMesh
            originalColor = null;
            objectValue = null; // Reset originalColor
            floatingValue.style.display = "none";
            modificationValue.style.display = "none";
            sidebarValue.style.display = "none";
        } else {
            // If not selected, select it and change its properties
            if (selectedMesh) {
                // If there is a previously selected mesh, reset its properties
                if (selectedMesh.material.map === null) selectedMesh.material.color.setHex(originalColor);
                else selectedMesh.material.color.setHex(0xffffff); // Revert previous selected mesh to original color
                if (selectedMesh.name === "window") selectedMesh.material.color.setHex(originalColor);
            }
            // Update the selected mesh and its properties
            selectedMesh = clickedObject;
            objectValue = clickedObject;
            originalColor = selectedMesh.material.color.getHex();
            selectedMesh.material.color.setHex(0xff0000); // Change color to indicate selection
            updateValue = false;
            console.log("clicked-------", clickedObject);
            console.log("floating value = ", modificationValue);
            if (clickedObject.name == "wall") {
                floatingValue.style.display = "block";
                sidebarValue.style.display = "block";
            } else {
                sidebarValue.style.display = "none";
                floatingValue.style.display = "block";
            }
            modificationValue.style.display = "flex";
        }
    } else // If no object is clicked, deselect any previously selected mesh
    if (selectedMesh) {
        if (selectedMesh.material.map === null) selectedMesh.material.color.setHex(originalColor);
        else selectedMesh.material.color.setHex(0xffffff); // Revert to original color
        floatingValue.style.display = "none";
        sidebarValue.style.display = "none";
        selectedMesh = null; // Reset selectedMesh
        originalColor = null;
        objectValue = null; // Reset originalColor
    }
}
// Function to add a circle to Three.js scene
function addCircle() {
    const circleGeometry = new _three.CircleGeometry(1, 32);
    const circleMaterial = new _three.MeshBasicMaterial({
        color: getRandomColor()
    });
    const circleMesh = new _three.Mesh(circleGeometry, circleMaterial);
    scene.add(circleMesh);
    showModifySection(circleMesh);
}
// Function to add a square to Three.js scene
function addSquare() {
    const squareGeometry = new _three.BoxGeometry(0.5, 0.5, 0.5);
    const squareMaterial = new _three.MeshBasicMaterial({
        color: 0x00ff00
    });
    const squareMesh = new _three.Mesh(squareGeometry, squareMaterial);
    console.log("add square is caled", checkIntersection());
    // squareMesh.opacity= 0;
    squareMesh.position.copy(calculateCenterPosition());
    squareMesh.name = "window";
    // objectValue.add(squareMesh);
    console.log("calcultate center = ", calculateCenterPosition());
    // checkIntersection();
    scene.add(squareMesh);
// showModifySection(squareMesh);
}
// Function to add a triangle to Three.js scene
function addTriangle() {
    const triangleGeometry = new _three.Geometry();
    triangleGeometry.vertices.push(new _three.Vector3(0, 1, 0));
    triangleGeometry.vertices.push(new _three.Vector3(-1, -1, 0));
    triangleGeometry.vertices.push(new _three.Vector3(1, -1, 0));
    triangleGeometry.faces.push(new _three.Face3(0, 1, 2));
    triangleGeometry.faces.push(new _three.Face3(2, 1, 0));
    const triangleMaterial = new _three.MeshBasicMaterial({
        color: 0x0000ff
    });
    const triangleMesh = new _three.Mesh(triangleGeometry, triangleMaterial);
    scene.add(triangleMesh);
// showModifySection(triangleMesh);
}
// Perform a raycast to check if the selected object is "hit" by the ray
function checkIntersection(selectedObject, position) {
    console.log("check intersection is called");
    const raycaster = new _three.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(objectValue);
    console.log("==================", intersects);
    return intersects.length > 0;
}
// Function to calculate the center position of an object
function calculateCenterPosition(object) {
    const boundingBox = new _three.Box3().setFromObject(objectValue);
    const center = new _three.Vector3();
    boundingBox.getCenter(center);
    return center;
}
// Show modify section for the selected shape
function showModifySection(selectedObject) {
    // Update shape position based on arrow key presses
    console.log("nothinggg - ", selectedObject);
    document.addEventListener("keydown", function(event) {
        const keyCode = event.keyCode;
        const step = 0.1; // Adjustment step size
        switch(keyCode){
            case 37:
                selectedObject.rotation.x -= step;
                break;
            case 39:
                selectedObject.rotation.x += step;
                break;
            case 38:
                selectedObject.rotation.y += step;
                break;
            case 40:
                selectedObject.rotation.y -= step;
                break;
        }
    });
}
//image add section
const images = document.querySelectorAll(".sidebar img");
images.forEach((image)=>{
    image.addEventListener("click", function() {
        var imagePath = this.getAttribute("id");
        console.log("image path is called", imagePath);
        console.log("image path is called", selectedMesh);
        imagePath = imagePath == "image1" ? (0, _allImage.image1) : imagePath == "image2" ? (0, _allImage.image2) : imagePath == "image3" ? (0, _allImage.image3) : imagePath == "image4" ? (0, _allImage.image4) : imagePath == "image5" ? (0, _allImage.image5) : (0, _allImage.image6);
        if (selectedMesh) {
            console.log("selected mesh === ", selectedMesh);
            // Ensure the geometry's UVs are set
            selectedMesh.uvsNeedUpdate = true;
            const newMaterial = new _three.MeshBasicMaterial({
                map: new _three.TextureLoader().load(imagePath),
                roughness: 0.75,
                metalness: 0.25,
                bumpScale: 0.009
            });
            // Set the material color to be fully transparent
            // newMaterial.transparent = true;
            // newMaterial.opacity = 0;
            selectedMesh.material = newMaterial;
            selectedMesh.material.needsUpdate = true;
        }
    });
});

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","../assets/AllImage":"h1oCP"}]},["2ZMt1","6V1YQ"], "6V1YQ", "parcelRequire20bc")

//# sourceMappingURL=3dview.177dfa8f.js.map
