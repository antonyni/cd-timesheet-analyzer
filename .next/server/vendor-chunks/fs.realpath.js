/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fs.realpath";
exports.ids = ["vendor-chunks/fs.realpath"];
exports.modules = {

/***/ "(ssr)/./node_modules/fs.realpath/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fs.realpath/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = realpath;\nrealpath.realpath = realpath;\nrealpath.sync = realpathSync;\nrealpath.realpathSync = realpathSync;\nrealpath.monkeypatch = monkeypatch;\nrealpath.unmonkeypatch = unmonkeypatch;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar origRealpath = fs.realpath;\nvar origRealpathSync = fs.realpathSync;\nvar version = process.version;\nvar ok = /^v[0-5]\\./.test(version);\nvar old = __webpack_require__(/*! ./old.js */ \"(ssr)/./node_modules/fs.realpath/old.js\");\nfunction newError(er) {\n    return er && er.syscall === \"realpath\" && (er.code === \"ELOOP\" || er.code === \"ENOMEM\" || er.code === \"ENAMETOOLONG\");\n}\nfunction realpath(p, cache, cb) {\n    if (ok) {\n        return origRealpath(p, cache, cb);\n    }\n    if (typeof cache === \"function\") {\n        cb = cache;\n        cache = null;\n    }\n    origRealpath(p, cache, function(er, result) {\n        if (newError(er)) {\n            old.realpath(p, cache, cb);\n        } else {\n            cb(er, result);\n        }\n    });\n}\nfunction realpathSync(p, cache) {\n    if (ok) {\n        return origRealpathSync(p, cache);\n    }\n    try {\n        return origRealpathSync(p, cache);\n    } catch (er) {\n        if (newError(er)) {\n            return old.realpathSync(p, cache);\n        } else {\n            throw er;\n        }\n    }\n}\nfunction monkeypatch() {\n    fs.realpath = realpath;\n    fs.realpathSync = realpathSync;\n}\nfunction unmonkeypatch() {\n    fs.realpath = origRealpath;\n    fs.realpathSync = origRealpathSync;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnMucmVhbHBhdGgvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFDakJBLFNBQVNBLFFBQVEsR0FBR0E7QUFDcEJBLFNBQVNDLElBQUksR0FBR0M7QUFDaEJGLFNBQVNFLFlBQVksR0FBR0E7QUFDeEJGLFNBQVNHLFdBQVcsR0FBR0E7QUFDdkJILFNBQVNJLGFBQWEsR0FBR0E7QUFFekIsSUFBSUMsS0FBS0MsbUJBQU9BLENBQUM7QUFDakIsSUFBSUMsZUFBZUYsR0FBR0wsUUFBUTtBQUM5QixJQUFJUSxtQkFBbUJILEdBQUdILFlBQVk7QUFFdEMsSUFBSU8sVUFBVUMsUUFBUUQsT0FBTztBQUM3QixJQUFJRSxLQUFLLFlBQVlDLElBQUksQ0FBQ0g7QUFDMUIsSUFBSUksTUFBTVAsbUJBQU9BLENBQUM7QUFFbEIsU0FBU1EsU0FBVUMsRUFBRTtJQUNuQixPQUFPQSxNQUFNQSxHQUFHQyxPQUFPLEtBQUssY0FDMUJELENBQUFBLEdBQUdFLElBQUksS0FBSyxXQUNaRixHQUFHRSxJQUFJLEtBQUssWUFDWkYsR0FBR0UsSUFBSSxLQUFLLGNBQWE7QUFFN0I7QUFFQSxTQUFTakIsU0FBVWtCLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxFQUFFO0lBQzdCLElBQUlULElBQUk7UUFDTixPQUFPSixhQUFhVyxHQUFHQyxPQUFPQztJQUNoQztJQUVBLElBQUksT0FBT0QsVUFBVSxZQUFZO1FBQy9CQyxLQUFLRDtRQUNMQSxRQUFRO0lBQ1Y7SUFDQVosYUFBYVcsR0FBR0MsT0FBTyxTQUFVSixFQUFFLEVBQUVNLE1BQU07UUFDekMsSUFBSVAsU0FBU0MsS0FBSztZQUNoQkYsSUFBSWIsUUFBUSxDQUFDa0IsR0FBR0MsT0FBT0M7UUFDekIsT0FBTztZQUNMQSxHQUFHTCxJQUFJTTtRQUNUO0lBQ0Y7QUFDRjtBQUVBLFNBQVNuQixhQUFjZ0IsQ0FBQyxFQUFFQyxLQUFLO0lBQzdCLElBQUlSLElBQUk7UUFDTixPQUFPSCxpQkFBaUJVLEdBQUdDO0lBQzdCO0lBRUEsSUFBSTtRQUNGLE9BQU9YLGlCQUFpQlUsR0FBR0M7SUFDN0IsRUFBRSxPQUFPSixJQUFJO1FBQ1gsSUFBSUQsU0FBU0MsS0FBSztZQUNoQixPQUFPRixJQUFJWCxZQUFZLENBQUNnQixHQUFHQztRQUM3QixPQUFPO1lBQ0wsTUFBTUo7UUFDUjtJQUNGO0FBQ0Y7QUFFQSxTQUFTWjtJQUNQRSxHQUFHTCxRQUFRLEdBQUdBO0lBQ2RLLEdBQUdILFlBQVksR0FBR0E7QUFDcEI7QUFFQSxTQUFTRTtJQUNQQyxHQUFHTCxRQUFRLEdBQUdPO0lBQ2RGLEdBQUdILFlBQVksR0FBR007QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZC10aW1lc2hlZXQtYW5hbHl6ZXIvLi9ub2RlX21vZHVsZXMvZnMucmVhbHBhdGgvaW5kZXguanM/MTZiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlYWxwYXRoXG5yZWFscGF0aC5yZWFscGF0aCA9IHJlYWxwYXRoXG5yZWFscGF0aC5zeW5jID0gcmVhbHBhdGhTeW5jXG5yZWFscGF0aC5yZWFscGF0aFN5bmMgPSByZWFscGF0aFN5bmNcbnJlYWxwYXRoLm1vbmtleXBhdGNoID0gbW9ua2V5cGF0Y2hcbnJlYWxwYXRoLnVubW9ua2V5cGF0Y2ggPSB1bm1vbmtleXBhdGNoXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcbnZhciBvcmlnUmVhbHBhdGggPSBmcy5yZWFscGF0aFxudmFyIG9yaWdSZWFscGF0aFN5bmMgPSBmcy5yZWFscGF0aFN5bmNcblxudmFyIHZlcnNpb24gPSBwcm9jZXNzLnZlcnNpb25cbnZhciBvayA9IC9edlswLTVdXFwuLy50ZXN0KHZlcnNpb24pXG52YXIgb2xkID0gcmVxdWlyZSgnLi9vbGQuanMnKVxuXG5mdW5jdGlvbiBuZXdFcnJvciAoZXIpIHtcbiAgcmV0dXJuIGVyICYmIGVyLnN5c2NhbGwgPT09ICdyZWFscGF0aCcgJiYgKFxuICAgIGVyLmNvZGUgPT09ICdFTE9PUCcgfHxcbiAgICBlci5jb2RlID09PSAnRU5PTUVNJyB8fFxuICAgIGVyLmNvZGUgPT09ICdFTkFNRVRPT0xPTkcnXG4gIClcbn1cblxuZnVuY3Rpb24gcmVhbHBhdGggKHAsIGNhY2hlLCBjYikge1xuICBpZiAob2spIHtcbiAgICByZXR1cm4gb3JpZ1JlYWxwYXRoKHAsIGNhY2hlLCBjYilcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2FjaGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGNhY2hlXG4gICAgY2FjaGUgPSBudWxsXG4gIH1cbiAgb3JpZ1JlYWxwYXRoKHAsIGNhY2hlLCBmdW5jdGlvbiAoZXIsIHJlc3VsdCkge1xuICAgIGlmIChuZXdFcnJvcihlcikpIHtcbiAgICAgIG9sZC5yZWFscGF0aChwLCBjYWNoZSwgY2IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKGVyLCByZXN1bHQpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWFscGF0aFN5bmMgKHAsIGNhY2hlKSB7XG4gIGlmIChvaykge1xuICAgIHJldHVybiBvcmlnUmVhbHBhdGhTeW5jKHAsIGNhY2hlKVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gb3JpZ1JlYWxwYXRoU3luYyhwLCBjYWNoZSlcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBpZiAobmV3RXJyb3IoZXIpKSB7XG4gICAgICByZXR1cm4gb2xkLnJlYWxwYXRoU3luYyhwLCBjYWNoZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9ua2V5cGF0Y2ggKCkge1xuICBmcy5yZWFscGF0aCA9IHJlYWxwYXRoXG4gIGZzLnJlYWxwYXRoU3luYyA9IHJlYWxwYXRoU3luY1xufVxuXG5mdW5jdGlvbiB1bm1vbmtleXBhdGNoICgpIHtcbiAgZnMucmVhbHBhdGggPSBvcmlnUmVhbHBhdGhcbiAgZnMucmVhbHBhdGhTeW5jID0gb3JpZ1JlYWxwYXRoU3luY1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFscGF0aCIsInN5bmMiLCJyZWFscGF0aFN5bmMiLCJtb25rZXlwYXRjaCIsInVubW9ua2V5cGF0Y2giLCJmcyIsInJlcXVpcmUiLCJvcmlnUmVhbHBhdGgiLCJvcmlnUmVhbHBhdGhTeW5jIiwidmVyc2lvbiIsInByb2Nlc3MiLCJvayIsInRlc3QiLCJvbGQiLCJuZXdFcnJvciIsImVyIiwic3lzY2FsbCIsImNvZGUiLCJwIiwiY2FjaGUiLCJjYiIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/fs.realpath/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/fs.realpath/old.js":
/*!*****************************************!*\
  !*** ./node_modules/fs.realpath/old.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\nvar pathModule = __webpack_require__(/*! path */ \"path\");\nvar isWindows = process.platform === \"win32\";\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n// JavaScript implementation of realpath, ported from node pre-v6\nvar DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);\nfunction rethrow() {\n    // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and\n    // is fairly slow to generate.\n    var callback;\n    if (DEBUG) {\n        var backtrace = new Error;\n        callback = debugCallback;\n    } else callback = missingCallback;\n    return callback;\n    function debugCallback(err) {\n        if (err) {\n            backtrace.message = err.message;\n            err = backtrace;\n            missingCallback(err);\n        }\n    }\n    function missingCallback(err) {\n        if (err) {\n            if (process.throwDeprecation) throw err; // Forgot a callback but don't know where? Use NODE_DEBUG=fs\n            else if (!process.noDeprecation) {\n                var msg = \"fs: missing callback \" + (err.stack || err.message);\n                if (process.traceDeprecation) console.trace(msg);\n                else console.error(msg);\n            }\n        }\n    }\n}\nfunction maybeCallback(cb) {\n    return typeof cb === \"function\" ? cb : rethrow();\n}\nvar normalize = pathModule.normalize;\n// Regexp that finds the next partion of a (partial) path\n// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']\nif (isWindows) {\n    var nextPartRe = /(.*?)(?:[\\/\\\\]+|$)/g;\n} else {\n    var nextPartRe = /(.*?)(?:[\\/]+|$)/g;\n}\n// Regex to find the device root, including trailing slash. E.g. 'c:\\\\'.\nif (isWindows) {\n    var splitRootRe = /^(?:[a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/][^\\\\\\/]+)?[\\\\\\/]*/;\n} else {\n    var splitRootRe = /^[\\/]*/;\n}\nexports.realpathSync = function realpathSync(p, cache) {\n    // make p is absolute\n    p = pathModule.resolve(p);\n    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {\n        return cache[p];\n    }\n    var original = p, seenLinks = {}, knownHard = {};\n    // current character position in p\n    var pos;\n    // the partial path so far, including a trailing slash if any\n    var current;\n    // the partial path without a trailing slash (except when pointing at a root)\n    var base;\n    // the partial path scanned in the previous round, with slash\n    var previous;\n    start();\n    function start() {\n        // Skip over roots\n        var m = splitRootRe.exec(p);\n        pos = m[0].length;\n        current = m[0];\n        base = m[0];\n        previous = \"\";\n        // On windows, check that the root exists. On unix there is no need.\n        if (isWindows && !knownHard[base]) {\n            fs.lstatSync(base);\n            knownHard[base] = true;\n        }\n    }\n    // walk down the path, swapping out linked pathparts for their real\n    // values\n    // NB: p.length changes.\n    while(pos < p.length){\n        // find the next part\n        nextPartRe.lastIndex = pos;\n        var result = nextPartRe.exec(p);\n        previous = current;\n        current += result[0];\n        base = previous + result[1];\n        pos = nextPartRe.lastIndex;\n        // continue if not a symlink\n        if (knownHard[base] || cache && cache[base] === base) {\n            continue;\n        }\n        var resolvedLink;\n        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {\n            // some known symbolic link.  no need to stat again.\n            resolvedLink = cache[base];\n        } else {\n            var stat = fs.lstatSync(base);\n            if (!stat.isSymbolicLink()) {\n                knownHard[base] = true;\n                if (cache) cache[base] = base;\n                continue;\n            }\n            // read the link if it wasn't read before\n            // dev/ino always return 0 on windows, so skip the check.\n            var linkTarget = null;\n            if (!isWindows) {\n                var id = stat.dev.toString(32) + \":\" + stat.ino.toString(32);\n                if (seenLinks.hasOwnProperty(id)) {\n                    linkTarget = seenLinks[id];\n                }\n            }\n            if (linkTarget === null) {\n                fs.statSync(base);\n                linkTarget = fs.readlinkSync(base);\n            }\n            resolvedLink = pathModule.resolve(previous, linkTarget);\n            // track this, if given a cache.\n            if (cache) cache[base] = resolvedLink;\n            if (!isWindows) seenLinks[id] = linkTarget;\n        }\n        // resolve the link, then start over\n        p = pathModule.resolve(resolvedLink, p.slice(pos));\n        start();\n    }\n    if (cache) cache[original] = p;\n    return p;\n};\nexports.realpath = function realpath(p, cache, cb) {\n    if (typeof cb !== \"function\") {\n        cb = maybeCallback(cache);\n        cache = null;\n    }\n    // make p is absolute\n    p = pathModule.resolve(p);\n    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {\n        return process.nextTick(cb.bind(null, null, cache[p]));\n    }\n    var original = p, seenLinks = {}, knownHard = {};\n    // current character position in p\n    var pos;\n    // the partial path so far, including a trailing slash if any\n    var current;\n    // the partial path without a trailing slash (except when pointing at a root)\n    var base;\n    // the partial path scanned in the previous round, with slash\n    var previous;\n    start();\n    function start() {\n        // Skip over roots\n        var m = splitRootRe.exec(p);\n        pos = m[0].length;\n        current = m[0];\n        base = m[0];\n        previous = \"\";\n        // On windows, check that the root exists. On unix there is no need.\n        if (isWindows && !knownHard[base]) {\n            fs.lstat(base, function(err) {\n                if (err) return cb(err);\n                knownHard[base] = true;\n                LOOP();\n            });\n        } else {\n            process.nextTick(LOOP);\n        }\n    }\n    // walk down the path, swapping out linked pathparts for their real\n    // values\n    function LOOP() {\n        // stop if scanned past end of path\n        if (pos >= p.length) {\n            if (cache) cache[original] = p;\n            return cb(null, p);\n        }\n        // find the next part\n        nextPartRe.lastIndex = pos;\n        var result = nextPartRe.exec(p);\n        previous = current;\n        current += result[0];\n        base = previous + result[1];\n        pos = nextPartRe.lastIndex;\n        // continue if not a symlink\n        if (knownHard[base] || cache && cache[base] === base) {\n            return process.nextTick(LOOP);\n        }\n        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {\n            // known symbolic link.  no need to stat again.\n            return gotResolvedLink(cache[base]);\n        }\n        return fs.lstat(base, gotStat);\n    }\n    function gotStat(err, stat) {\n        if (err) return cb(err);\n        // if not a symlink, skip to the next path part\n        if (!stat.isSymbolicLink()) {\n            knownHard[base] = true;\n            if (cache) cache[base] = base;\n            return process.nextTick(LOOP);\n        }\n        // stat & read the link if not read before\n        // call gotTarget as soon as the link target is known\n        // dev/ino always return 0 on windows, so skip the check.\n        if (!isWindows) {\n            var id = stat.dev.toString(32) + \":\" + stat.ino.toString(32);\n            if (seenLinks.hasOwnProperty(id)) {\n                return gotTarget(null, seenLinks[id], base);\n            }\n        }\n        fs.stat(base, function(err) {\n            if (err) return cb(err);\n            fs.readlink(base, function(err, target) {\n                if (!isWindows) seenLinks[id] = target;\n                gotTarget(err, target);\n            });\n        });\n    }\n    function gotTarget(err, target, base) {\n        if (err) return cb(err);\n        var resolvedLink = pathModule.resolve(previous, target);\n        if (cache) cache[base] = resolvedLink;\n        gotResolvedLink(resolvedLink);\n    }\n    function gotResolvedLink(resolvedLink) {\n        // resolve the link, then start over\n        p = pathModule.resolve(resolvedLink, p.slice(pos));\n        start();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnMucmVhbHBhdGgvb2xkLmpzIiwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0YsMEVBQTBFO0FBQzFFLGdFQUFnRTtBQUNoRSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxxRUFBcUU7QUFDckUsd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUseURBQXlEO0FBQ3pELEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUsNkRBQTZEO0FBQzdELDRFQUE0RTtBQUM1RSwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBQ3hFLDRFQUE0RTtBQUM1RSx5Q0FBeUM7QUFFekMsSUFBSUEsYUFBYUMsbUJBQU9BLENBQUM7QUFDekIsSUFBSUMsWUFBWUMsUUFBUUMsUUFBUSxLQUFLO0FBQ3JDLElBQUlDLEtBQUtKLG1CQUFPQSxDQUFDO0FBRWpCLGlFQUFpRTtBQUVqRSxJQUFJSyxRQUFRSCxRQUFRSSxHQUFHLENBQUNDLFVBQVUsSUFBSSxLQUFLQyxJQUFJLENBQUNOLFFBQVFJLEdBQUcsQ0FBQ0MsVUFBVTtBQUV0RSxTQUFTRTtJQUNQLDRFQUE0RTtJQUM1RSw4QkFBOEI7SUFDOUIsSUFBSUM7SUFDSixJQUFJTCxPQUFPO1FBQ1QsSUFBSU0sWUFBWSxJQUFJQztRQUNwQkYsV0FBV0c7SUFDYixPQUNFSCxXQUFXSTtJQUViLE9BQU9KO0lBRVAsU0FBU0csY0FBY0UsR0FBRztRQUN4QixJQUFJQSxLQUFLO1lBQ1BKLFVBQVVLLE9BQU8sR0FBR0QsSUFBSUMsT0FBTztZQUMvQkQsTUFBTUo7WUFDTkcsZ0JBQWdCQztRQUNsQjtJQUNGO0lBRUEsU0FBU0QsZ0JBQWdCQyxHQUFHO1FBQzFCLElBQUlBLEtBQUs7WUFDUCxJQUFJYixRQUFRZSxnQkFBZ0IsRUFDMUIsTUFBTUYsS0FBTSw0REFBNEQ7aUJBQ3JFLElBQUksQ0FBQ2IsUUFBUWdCLGFBQWEsRUFBRTtnQkFDL0IsSUFBSUMsTUFBTSwwQkFB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QyxPQUFPLENBQUNXLFVBQVU0QjtRQUNoRCxJQUFJeEMsT0FBT0EsS0FBSyxDQUFDVyxLQUFLLEdBQUdTO1FBQ3pCZ0IsZ0JBQWdCaEI7SUFDbEI7SUFFQSxTQUFTZ0IsZ0JBQWdCaEIsWUFBWTtRQUNuQyxvQ0FBb0M7UUFDcENyQixJQUFJakMsV0FBV21DLE9BQU8sQ0FBQ21CLGNBQWNyQixFQUFFK0IsS0FBSyxDQUFDckI7UUFDN0NJO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NkLXRpbWVzaGVldC1hbmFseXplci8uL25vZGVfbW9kdWxlcy9mcy5yZWFscGF0aC9vbGQuanM/MWFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIHBhdGhNb2R1bGUgPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbi8vIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgcmVhbHBhdGgsIHBvcnRlZCBmcm9tIG5vZGUgcHJlLXY2XG5cbnZhciBERUJVRyA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiYgL2ZzLy50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpO1xuXG5mdW5jdGlvbiByZXRocm93KCkge1xuICAvLyBPbmx5IGVuYWJsZSBpbiBkZWJ1ZyBtb2RlLiBBIGJhY2t0cmFjZSB1c2VzIH4xMDAwIGJ5dGVzIG9mIGhlYXAgc3BhY2UgYW5kXG4gIC8vIGlzIGZhaXJseSBzbG93IHRvIGdlbmVyYXRlLlxuICB2YXIgY2FsbGJhY2s7XG4gIGlmIChERUJVRykge1xuICAgIHZhciBiYWNrdHJhY2UgPSBuZXcgRXJyb3I7XG4gICAgY2FsbGJhY2sgPSBkZWJ1Z0NhbGxiYWNrO1xuICB9IGVsc2VcbiAgICBjYWxsYmFjayA9IG1pc3NpbmdDYWxsYmFjaztcblxuICByZXR1cm4gY2FsbGJhY2s7XG5cbiAgZnVuY3Rpb24gZGVidWdDYWxsYmFjayhlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBiYWNrdHJhY2UubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICAgICAgZXJyID0gYmFja3RyYWNlO1xuICAgICAgbWlzc2luZ0NhbGxiYWNrKGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWlzc2luZ0NhbGxiYWNrKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pXG4gICAgICAgIHRocm93IGVycjsgIC8vIEZvcmdvdCBhIGNhbGxiYWNrIGJ1dCBkb24ndCBrbm93IHdoZXJlPyBVc2UgTk9ERV9ERUJVRz1mc1xuICAgICAgZWxzZSBpZiAoIXByb2Nlc3Mubm9EZXByZWNhdGlvbikge1xuICAgICAgICB2YXIgbXNnID0gJ2ZzOiBtaXNzaW5nIGNhbGxiYWNrICcgKyAoZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICAgICAgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbilcbiAgICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1heWJlQ2FsbGJhY2soY2IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IGNiIDogcmV0aHJvdygpO1xufVxuXG52YXIgbm9ybWFsaXplID0gcGF0aE1vZHVsZS5ub3JtYWxpemU7XG5cbi8vIFJlZ2V4cCB0aGF0IGZpbmRzIHRoZSBuZXh0IHBhcnRpb24gb2YgYSAocGFydGlhbCkgcGF0aFxuLy8gcmVzdWx0IGlzIFtiYXNlX3dpdGhfc2xhc2gsIGJhc2VdLCBlLmcuIFsnc29tZWRpci8nLCAnc29tZWRpciddXG5pZiAoaXNXaW5kb3dzKSB7XG4gIHZhciBuZXh0UGFydFJlID0gLyguKj8pKD86W1xcL1xcXFxdK3wkKS9nO1xufSBlbHNlIHtcbiAgdmFyIG5leHRQYXJ0UmUgPSAvKC4qPykoPzpbXFwvXSt8JCkvZztcbn1cblxuLy8gUmVnZXggdG8gZmluZCB0aGUgZGV2aWNlIHJvb3QsIGluY2x1ZGluZyB0cmFpbGluZyBzbGFzaC4gRS5nLiAnYzpcXFxcJy5cbmlmIChpc1dpbmRvd3MpIHtcbiAgdmFyIHNwbGl0Um9vdFJlID0gL14oPzpbYS16QS1aXTp8W1xcXFxcXC9dezJ9W15cXFxcXFwvXStbXFxcXFxcL11bXlxcXFxcXC9dKyk/W1xcXFxcXC9dKi87XG59IGVsc2Uge1xuICB2YXIgc3BsaXRSb290UmUgPSAvXltcXC9dKi87XG59XG5cbmV4cG9ydHMucmVhbHBhdGhTeW5jID0gZnVuY3Rpb24gcmVhbHBhdGhTeW5jKHAsIGNhY2hlKSB7XG4gIC8vIG1ha2UgcCBpcyBhYnNvbHV0ZVxuICBwID0gcGF0aE1vZHVsZS5yZXNvbHZlKHApO1xuXG4gIGlmIChjYWNoZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIHApKSB7XG4gICAgcmV0dXJuIGNhY2hlW3BdO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsID0gcCxcbiAgICAgIHNlZW5MaW5rcyA9IHt9LFxuICAgICAga25vd25IYXJkID0ge307XG5cbiAgLy8gY3VycmVudCBjaGFyYWN0ZXIgcG9zaXRpb24gaW4gcFxuICB2YXIgcG9zO1xuICAvLyB0aGUgcGFydGlhbCBwYXRoIHNvIGZhciwgaW5jbHVkaW5nIGEgdHJhaWxpbmcgc2xhc2ggaWYgYW55XG4gIHZhciBjdXJyZW50O1xuICAvLyB0aGUgcGFydGlhbCBwYXRoIHdpdGhvdXQgYSB0cmFpbGluZyBzbGFzaCAoZXhjZXB0IHdoZW4gcG9pbnRpbmcgYXQgYSByb290KVxuICB2YXIgYmFzZTtcbiAgLy8gdGhlIHBhcnRpYWwgcGF0aCBzY2FubmVkIGluIHRoZSBwcmV2aW91cyByb3VuZCwgd2l0aCBzbGFzaFxuICB2YXIgcHJldmlvdXM7XG5cbiAgc3RhcnQoKTtcblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAvLyBTa2lwIG92ZXIgcm9vdHNcbiAgICB2YXIgbSA9IHNwbGl0Um9vdFJlLmV4ZWMocCk7XG4gICAgcG9zID0gbVswXS5sZW5ndGg7XG4gICAgY3VycmVudCA9IG1bMF07XG4gICAgYmFzZSA9IG1bMF07XG4gICAgcHJldmlvdXMgPSAnJztcblxuICAgIC8vIE9uIHdpbmRvd3MsIGNoZWNrIHRoYXQgdGhlIHJvb3QgZXhpc3RzLiBPbiB1bml4IHRoZXJlIGlzIG5vIG5lZWQuXG4gICAgaWYgKGlzV2luZG93cyAmJiAha25vd25IYXJkW2Jhc2VdKSB7XG4gICAgICBmcy5sc3RhdFN5bmMoYmFzZSk7XG4gICAgICBrbm93bkhhcmRbYmFzZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHdhbGsgZG93biB0aGUgcGF0aCwgc3dhcHBpbmcgb3V0IGxpbmtlZCBwYXRocGFydHMgZm9yIHRoZWlyIHJlYWxcbiAgLy8gdmFsdWVzXG4gIC8vIE5COiBwLmxlbmd0aCBjaGFuZ2VzLlxuICB3aGlsZSAocG9zIDwgcC5sZW5ndGgpIHtcbiAgICAvLyBmaW5kIHRoZSBuZXh0IHBhcnRcbiAgICBuZXh0UGFydFJlLmxhc3RJbmRleCA9IHBvcztcbiAgICB2YXIgcmVzdWx0ID0gbmV4dFBhcnRSZS5leGVjKHApO1xuICAgIHByZXZpb3VzID0gY3VycmVudDtcbiAgICBjdXJyZW50ICs9IHJlc3VsdFswXTtcbiAgICBiYXNlID0gcHJldmlvdXMgKyByZXN1bHRbMV07XG4gICAgcG9zID0gbmV4dFBhcnRSZS5sYXN0SW5kZXg7XG5cbiAgICAvLyBjb250aW51ZSBpZiBub3QgYSBzeW1saW5rXG4gICAgaWYgKGtub3duSGFyZFtiYXNlXSB8fCAoY2FjaGUgJiYgY2FjaGVbYmFzZV0gPT09IGJhc2UpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWRMaW5rO1xuICAgIGlmIChjYWNoZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGJhc2UpKSB7XG4gICAgICAvLyBzb21lIGtub3duIHN5bWJvbGljIGxpbmsuICBubyBuZWVkIHRvIHN0YXQgYWdhaW4uXG4gICAgICByZXNvbHZlZExpbmsgPSBjYWNoZVtiYXNlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YXQgPSBmcy5sc3RhdFN5bmMoYmFzZSk7XG4gICAgICBpZiAoIXN0YXQuaXNTeW1ib2xpY0xpbmsoKSkge1xuICAgICAgICBrbm93bkhhcmRbYmFzZV0gPSB0cnVlO1xuICAgICAgICBpZiAoY2FjaGUpIGNhY2hlW2Jhc2VdID0gYmFzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlYWQgdGhlIGxpbmsgaWYgaXQgd2Fzbid0IHJlYWQgYmVmb3JlXG4gICAgICAvLyBkZXYvaW5vIGFsd2F5cyByZXR1cm4gMCBvbiB3aW5kb3dzLCBzbyBza2lwIHRoZSBjaGVjay5cbiAgICAgIHZhciBsaW5rVGFyZ2V0ID0gbnVsbDtcbiAgICAgIGlmICghaXNXaW5kb3dzKSB7XG4gICAgICAgIHZhciBpZCA9IHN0YXQuZGV2LnRvU3RyaW5nKDMyKSArICc6JyArIHN0YXQuaW5vLnRvU3RyaW5nKDMyKTtcbiAgICAgICAgaWYgKHNlZW5MaW5rcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICBsaW5rVGFyZ2V0ID0gc2VlbkxpbmtzW2lkXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGxpbmtUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgZnMuc3RhdFN5bmMoYmFzZSk7XG4gICAgICAgIGxpbmtUYXJnZXQgPSBmcy5yZWFkbGlua1N5bmMoYmFzZSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlZExpbmsgPSBwYXRoTW9kdWxlLnJlc29sdmUocHJldmlvdXMsIGxpbmtUYXJnZXQpO1xuICAgICAgLy8gdHJhY2sgdGhpcywgaWYgZ2l2ZW4gYSBjYWNoZS5cbiAgICAgIGlmIChjYWNoZSkgY2FjaGVbYmFzZV0gPSByZXNvbHZlZExpbms7XG4gICAgICBpZiAoIWlzV2luZG93cykgc2VlbkxpbmtzW2lkXSA9IGxpbmtUYXJnZXQ7XG4gICAgfVxuXG4gICAgLy8gcmVzb2x2ZSB0aGUgbGluaywgdGhlbiBzdGFydCBvdmVyXG4gICAgcCA9IHBhdGhNb2R1bGUucmVzb2x2ZShyZXNvbHZlZExpbmssIHAuc2xpY2UocG9zKSk7XG4gICAgc3RhcnQoKTtcbiAgfVxuXG4gIGlmIChjYWNoZSkgY2FjaGVbb3JpZ2luYWxdID0gcDtcblxuICByZXR1cm4gcDtcbn07XG5cblxuZXhwb3J0cy5yZWFscGF0aCA9IGZ1bmN0aW9uIHJlYWxwYXRoKHAsIGNhY2hlLCBjYikge1xuICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBtYXliZUNhbGxiYWNrKGNhY2hlKTtcbiAgICBjYWNoZSA9IG51bGw7XG4gIH1cblxuICAvLyBtYWtlIHAgaXMgYWJzb2x1dGVcbiAgcCA9IHBhdGhNb2R1bGUucmVzb2x2ZShwKTtcblxuICBpZiAoY2FjaGUgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBwKSkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNiLmJpbmQobnVsbCwgbnVsbCwgY2FjaGVbcF0pKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbCA9IHAsXG4gICAgICBzZWVuTGlua3MgPSB7fSxcbiAgICAgIGtub3duSGFyZCA9IHt9O1xuXG4gIC8vIGN1cnJlbnQgY2hhcmFjdGVyIHBvc2l0aW9uIGluIHBcbiAgdmFyIHBvcztcbiAgLy8gdGhlIHBhcnRpYWwgcGF0aCBzbyBmYXIsIGluY2x1ZGluZyBhIHRyYWlsaW5nIHNsYXNoIGlmIGFueVxuICB2YXIgY3VycmVudDtcbiAgLy8gdGhlIHBhcnRpYWwgcGF0aCB3aXRob3V0IGEgdHJhaWxpbmcgc2xhc2ggKGV4Y2VwdCB3aGVuIHBvaW50aW5nIGF0IGEgcm9vdClcbiAgdmFyIGJhc2U7XG4gIC8vIHRoZSBwYXJ0aWFsIHBhdGggc2Nhbm5lZCBpbiB0aGUgcHJldmlvdXMgcm91bmQsIHdpdGggc2xhc2hcbiAgdmFyIHByZXZpb3VzO1xuXG4gIHN0YXJ0KCk7XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgLy8gU2tpcCBvdmVyIHJvb3RzXG4gICAgdmFyIG0gPSBzcGxpdFJvb3RSZS5leGVjKHApO1xuICAgIHBvcyA9IG1bMF0ubGVuZ3RoO1xuICAgIGN1cnJlbnQgPSBtWzBdO1xuICAgIGJhc2UgPSBtWzBdO1xuICAgIHByZXZpb3VzID0gJyc7XG5cbiAgICAvLyBPbiB3aW5kb3dzLCBjaGVjayB0aGF0IHRoZSByb290IGV4aXN0cy4gT24gdW5peCB0aGVyZSBpcyBubyBuZWVkLlxuICAgIGlmIChpc1dpbmRvd3MgJiYgIWtub3duSGFyZFtiYXNlXSkge1xuICAgICAgZnMubHN0YXQoYmFzZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuICAgICAgICBrbm93bkhhcmRbYmFzZV0gPSB0cnVlO1xuICAgICAgICBMT09QKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhMT09QKTtcbiAgICB9XG4gIH1cblxuICAvLyB3YWxrIGRvd24gdGhlIHBhdGgsIHN3YXBwaW5nIG91dCBsaW5rZWQgcGF0aHBhcnRzIGZvciB0aGVpciByZWFsXG4gIC8vIHZhbHVlc1xuICBmdW5jdGlvbiBMT09QKCkge1xuICAgIC8vIHN0b3AgaWYgc2Nhbm5lZCBwYXN0IGVuZCBvZiBwYXRoXG4gICAgaWYgKHBvcyA+PSBwLmxlbmd0aCkge1xuICAgICAgaWYgKGNhY2hlKSBjYWNoZVtvcmlnaW5hbF0gPSBwO1xuICAgICAgcmV0dXJuIGNiKG51bGwsIHApO1xuICAgIH1cblxuICAgIC8vIGZpbmQgdGhlIG5leHQgcGFydFxuICAgIG5leHRQYXJ0UmUubGFzdEluZGV4ID0gcG9zO1xuICAgIHZhciByZXN1bHQgPSBuZXh0UGFydFJlLmV4ZWMocCk7XG4gICAgcHJldmlvdXMgPSBjdXJyZW50O1xuICAgIGN1cnJlbnQgKz0gcmVzdWx0WzBdO1xuICAgIGJhc2UgPSBwcmV2aW91cyArIHJlc3VsdFsxXTtcbiAgICBwb3MgPSBuZXh0UGFydFJlLmxhc3RJbmRleDtcblxuICAgIC8vIGNvbnRpbnVlIGlmIG5vdCBhIHN5bWxpbmtcbiAgICBpZiAoa25vd25IYXJkW2Jhc2VdIHx8IChjYWNoZSAmJiBjYWNoZVtiYXNlXSA9PT0gYmFzZSkpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKExPT1ApO1xuICAgIH1cblxuICAgIGlmIChjYWNoZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGJhc2UpKSB7XG4gICAgICAvLyBrbm93biBzeW1ib2xpYyBsaW5rLiAgbm8gbmVlZCB0byBzdGF0IGFnYWluLlxuICAgICAgcmV0dXJuIGdvdFJlc29sdmVkTGluayhjYWNoZVtiYXNlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZzLmxzdGF0KGJhc2UsIGdvdFN0YXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ290U3RhdChlcnIsIHN0YXQpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcblxuICAgIC8vIGlmIG5vdCBhIHN5bWxpbmssIHNraXAgdG8gdGhlIG5leHQgcGF0aCBwYXJ0XG4gICAgaWYgKCFzdGF0LmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICAgIGtub3duSGFyZFtiYXNlXSA9IHRydWU7XG4gICAgICBpZiAoY2FjaGUpIGNhY2hlW2Jhc2VdID0gYmFzZTtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKExPT1ApO1xuICAgIH1cblxuICAgIC8vIHN0YXQgJiByZWFkIHRoZSBsaW5rIGlmIG5vdCByZWFkIGJlZm9yZVxuICAgIC8vIGNhbGwgZ290VGFyZ2V0IGFzIHNvb24gYXMgdGhlIGxpbmsgdGFyZ2V0IGlzIGtub3duXG4gICAgLy8gZGV2L2lubyBhbHdheXMgcmV0dXJuIDAgb24gd2luZG93cywgc28gc2tpcCB0aGUgY2hlY2suXG4gICAgaWYgKCFpc1dpbmRvd3MpIHtcbiAgICAgIHZhciBpZCA9IHN0YXQuZGV2LnRvU3RyaW5nKDMyKSArICc6JyArIHN0YXQuaW5vLnRvU3RyaW5nKDMyKTtcbiAgICAgIGlmIChzZWVuTGlua3MuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgIHJldHVybiBnb3RUYXJnZXQobnVsbCwgc2VlbkxpbmtzW2lkXSwgYmFzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZzLnN0YXQoYmFzZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcblxuICAgICAgZnMucmVhZGxpbmsoYmFzZSwgZnVuY3Rpb24oZXJyLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCFpc1dpbmRvd3MpIHNlZW5MaW5rc1tpZF0gPSB0YXJnZXQ7XG4gICAgICAgIGdvdFRhcmdldChlcnIsIHRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvdFRhcmdldChlcnIsIHRhcmdldCwgYmFzZSkge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuXG4gICAgdmFyIHJlc29sdmVkTGluayA9IHBhdGhNb2R1bGUucmVzb2x2ZShwcmV2aW91cywgdGFyZ2V0KTtcbiAgICBpZiAoY2FjaGUpIGNhY2hlW2Jhc2VdID0gcmVzb2x2ZWRMaW5rO1xuICAgIGdvdFJlc29sdmVkTGluayhyZXNvbHZlZExpbmspO1xuICB9XG5cbiAgZnVuY3Rpb24gZ290UmVzb2x2ZWRMaW5rKHJlc29sdmVkTGluaykge1xuICAgIC8vIHJlc29sdmUgdGhlIGxpbmssIHRoZW4gc3RhcnQgb3ZlclxuICAgIHAgPSBwYXRoTW9kdWxlLnJlc29sdmUocmVzb2x2ZWRMaW5rLCBwLnNsaWNlKHBvcykpO1xuICAgIHN0YXJ0KCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicGF0aE1vZHVsZSIsInJlcXVpcmUiLCJpc1dpbmRvd3MiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJmcyIsIkRFQlVHIiwiZW52IiwiTk9ERV9ERUJVRyIsInRlc3QiLCJyZXRocm93IiwiY2FsbGJhY2siLCJiYWNrdHJhY2UiLCJFcnJvciIsImRlYnVnQ2FsbGJhY2siLCJtaXNzaW5nQ2FsbGJhY2siLCJlcnIiLCJtZXNzYWdlIiwidGhyb3dEZXByZWNhdGlvbiIsIm5vRGVwcmVjYXRpb24iLCJtc2ciLCJzdGFjayIsInRyYWNlRGVwcmVjYXRpb24iLCJjb25zb2xlIiwidHJhY2UiLCJlcnJvciIsIm1heWJlQ2FsbGJhY2siLCJjYiIsIm5vcm1hbGl6ZSIsIm5leHRQYXJ0UmUiLCJzcGxpdFJvb3RSZSIsImV4cG9ydHMiLCJyZWFscGF0aFN5bmMiLCJwIiwiY2FjaGUiLCJyZXNvbHZlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwib3JpZ2luYWwiLCJzZWVuTGlua3MiLCJrbm93bkhhcmQiLCJwb3MiLCJjdXJyZW50IiwiYmFzZSIsInByZXZpb3VzIiwic3RhcnQiLCJtIiwiZXhlYyIsImxlbmd0aCIsImxzdGF0U3luYyIsImxhc3RJbmRleCIsInJlc3VsdCIsInJlc29sdmVkTGluayIsInN0YXQiLCJpc1N5bWJvbGljTGluayIsImxpbmtUYXJnZXQiLCJpZCIsImRldiIsInRvU3RyaW5nIiwiaW5vIiwic3RhdFN5bmMiLCJyZWFkbGlua1N5bmMiLCJzbGljZSIsInJlYWxwYXRoIiwibmV4dFRpY2siLCJiaW5kIiwibHN0YXQiLCJMT09QIiwiZ290UmVzb2x2ZWRMaW5rIiwiZ290U3RhdCIsImdvdFRhcmdldCIsInJlYWRsaW5rIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/fs.realpath/old.js\n");

/***/ })

};
;