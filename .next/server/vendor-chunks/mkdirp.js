/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mkdirp";
exports.ids = ["vendor-chunks/mkdirp"];
exports.modules = {

/***/ "(ssr)/./node_modules/mkdirp/index.js":
/*!**************************************!*\
  !*** ./node_modules/mkdirp/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar _0777 = parseInt(\"0777\", 8);\nmodule.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;\nfunction mkdirP(p, opts, f, made) {\n    if (typeof opts === \"function\") {\n        f = opts;\n        opts = {};\n    } else if (!opts || typeof opts !== \"object\") {\n        opts = {\n            mode: opts\n        };\n    }\n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    if (mode === undefined) {\n        mode = _0777;\n    }\n    if (!made) made = null;\n    var cb = f || /* istanbul ignore next */ function() {};\n    p = path.resolve(p);\n    xfs.mkdir(p, mode, function(er) {\n        if (!er) {\n            made = made || p;\n            return cb(null, made);\n        }\n        switch(er.code){\n            case \"ENOENT\":\n                /* istanbul ignore if */ if (path.dirname(p) === p) return cb(er);\n                mkdirP(path.dirname(p), opts, function(er, made) {\n                    /* istanbul ignore if */ if (er) cb(er, made);\n                    else mkdirP(p, opts, cb, made);\n                });\n                break;\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                xfs.stat(p, function(er2, stat) {\n                    // if the stat fails, then that's super weird.\n                    // let the original error be the failure reason.\n                    if (er2 || !stat.isDirectory()) cb(er, made);\n                    else cb(null, made);\n                });\n                break;\n        }\n    });\n}\nmkdirP.sync = function sync(p, opts, made) {\n    if (!opts || typeof opts !== \"object\") {\n        opts = {\n            mode: opts\n        };\n    }\n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    if (mode === undefined) {\n        mode = _0777;\n    }\n    if (!made) made = null;\n    p = path.resolve(p);\n    try {\n        xfs.mkdirSync(p, mode);\n        made = made || p;\n    } catch (err0) {\n        switch(err0.code){\n            case \"ENOENT\":\n                made = sync(path.dirname(p), opts, made);\n                sync(p, opts, made);\n                break;\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                var stat;\n                try {\n                    stat = xfs.statSync(p);\n                } catch (err1) /* istanbul ignore next */ {\n                    throw err0;\n                }\n                /* istanbul ignore if */ if (!stat.isDirectory()) throw err0;\n                break;\n        }\n    }\n    return made;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWtkaXJwL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE9BQU9DLG1CQUFPQSxDQUFDO0FBQ25CLElBQUlDLEtBQUtELG1CQUFPQSxDQUFDO0FBQ2pCLElBQUlFLFFBQVFDLFNBQVMsUUFBUTtBQUU3QkMsT0FBT0MsT0FBTyxHQUFHQyxPQUFPQyxNQUFNLEdBQUdELE9BQU9BLE1BQU0sR0FBR0E7QUFFakQsU0FBU0EsT0FBUUUsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLENBQUMsRUFBRUMsSUFBSTtJQUM3QixJQUFJLE9BQU9GLFNBQVMsWUFBWTtRQUM1QkMsSUFBSUQ7UUFDSkEsT0FBTyxDQUFDO0lBQ1osT0FDSyxJQUFJLENBQUNBLFFBQVEsT0FBT0EsU0FBUyxVQUFVO1FBQ3hDQSxPQUFPO1lBQUVHLE1BQU1IO1FBQUs7SUFDeEI7SUFFQSxJQUFJRyxPQUFPSCxLQUFLRyxJQUFJO0lBQ3BCLElBQUlDLE1BQU1KLEtBQUtSLEVBQUUsSUFBSUE7SUFFckIsSUFBSVcsU0FBU0UsV0FBVztRQUNwQkYsT0FBT1Y7SUFDWDtJQUNBLElBQUksQ0FBQ1MsTUFBTUEsT0FBTztJQUVsQixJQUFJSSxLQUFLTCxLQUFLLHdCQUF3QixHQUFHLFlBQWE7SUFDdERGLElBQUlULEtBQUtpQixPQUFPLENBQUNSO0lBRWpCSyxJQUFJSSxLQUFLLENBQUNULEdBQUdJLE1BQU0sU0FBVU0sRUFBRTtRQUMzQixJQUFJLENBQUNBLElBQUk7WUFDTFAsT0FBT0EsUUFBUUg7WUFDZixPQUFPTyxHQUFHLE1BQU1KO1FBQ3BCO1FBQ0EsT0FBUU8sR0FBR0MsSUFBSTtZQUNYLEtBQUs7Z0JBQ0Qsc0JBQXNCLEdBQ3RCLElBQUlwQixLQUFLcUIsT0FBTyxDQUFDWixPQUFPQSxHQUFHLE9BQU9PLEdBQUdHO2dCQUNyQ1osT0FBT1AsS0FBS3FCLE9BQU8sQ0FBQ1osSUFBSUMsTUFBTSxTQUFVUyxFQUFFLEVBQUVQLElBQUk7b0JBQzVDLHNCQUFzQixHQUN0QixJQUFJTyxJQUFJSCxHQUFHRyxJQUFJUDt5QkFDVkwsT0FBT0UsR0FBR0MsTUFBTU0sSUFBSUo7Z0JBQzdCO2dCQUNBO1lBRUosNERBQTREO1lBQzVELDhEQUE4RDtZQUM5RCxhQUFhO1lBQ2I7Z0JBQ0lFLElBQUlRLElBQUksQ0FBQ2IsR0FBRyxTQUFVYyxHQUFHLEVBQUVELElBQUk7b0JBQzNCLDhDQUE4QztvQkFDOUMsZ0RBQWdEO29CQUNoRCxJQUFJQyxPQUFPLENBQUNELEtBQUtFLFdBQVcsSUFBSVIsR0FBR0csSUFBSVA7eUJBQ2xDSSxHQUFHLE1BQU1KO2dCQUNsQjtnQkFDQTtRQUNSO0lBQ0o7QUFDSjtBQUVBTCxPQUFPa0IsSUFBSSxHQUFHLFNBQVNBLEtBQU1oQixDQUFDLEVBQUVDLElBQUksRUFBRUUsSUFBSTtJQUN0QyxJQUFJLENBQUNGLFFBQVEsT0FBT0EsU0FBUyxVQUFVO1FBQ25DQSxPQUFPO1lBQUVHLE1BQU1IO1FBQUs7SUFDeEI7SUFFQSxJQUFJRyxPQUFPSCxLQUFLRyxJQUFJO0lBQ3BCLElBQUlDLE1BQU1KLEtBQUtSLEVBQUUsSUFBSUE7SUFFckIsSUFBSVcsU0FBU0UsV0FBVztRQUNwQkYsT0FBT1Y7SUFDWDtJQUNBLElBQUksQ0FBQ1MsTUFBTUEsT0FBTztJQUVsQkgsSUFBSVQsS0FBS2lCLE9BQU8sQ0FBQ1I7SUFFakIsSUFBSTtRQUNBSyxJQUFJWSxTQUFTLENBQUNqQixHQUFHSTtRQUNqQkQsT0FBT0EsUUFBUUg7SUFDbkIsRUFDQSxPQUFPa0IsTUFBTTtRQUNULE9BQVFBLEtBQUtQLElBQUk7WUFDYixLQUFLO2dCQUNEUixPQUFPYSxLQUFLekIsS0FBS3FCLE9BQU8sQ0FBQ1osSUFBSUMsTUFBTUU7Z0JBQ25DYSxLQUFLaEIsR0FBR0MsTUFBTUU7Z0JBQ2Q7WUFFSiw0REFBNEQ7WUFDNUQsOERBQThEO1lBQzlELGFBQWE7WUFDYjtnQkFDSSxJQUFJVTtnQkFDSixJQUFJO29CQUNBQSxPQUFPUixJQUFJYyxRQUFRLENBQUNuQjtnQkFDeEIsRUFDQSxPQUFPb0IsTUFBTSx3QkFBd0IsR0FBRztvQkFDcEMsTUFBTUY7Z0JBQ1Y7Z0JBQ0Esc0JBQXNCLEdBQ3RCLElBQUksQ0FBQ0wsS0FBS0UsV0FBVyxJQUFJLE1BQU1HO2dCQUMvQjtRQUNSO0lBQ0o7SUFFQSxPQUFPZjtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2QtdGltZXNoZWV0LWFuYWx5emVyLy4vbm9kZV9tb2R1bGVzL21rZGlycC9pbmRleC5qcz9iYmU2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBfMDc3NyA9IHBhcnNlSW50KCcwNzc3JywgOCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWtkaXJQLm1rZGlycCA9IG1rZGlyUC5ta2RpclAgPSBta2RpclA7XG5cbmZ1bmN0aW9uIG1rZGlyUCAocCwgb3B0cywgZiwgbWFkZSkge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmID0gb3B0cztcbiAgICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBlbHNlIGlmICghb3B0cyB8fCB0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0cyA9IHsgbW9kZTogb3B0cyB9O1xuICAgIH1cbiAgICBcbiAgICB2YXIgbW9kZSA9IG9wdHMubW9kZTtcbiAgICB2YXIgeGZzID0gb3B0cy5mcyB8fCBmcztcbiAgICBcbiAgICBpZiAobW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1vZGUgPSBfMDc3N1xuICAgIH1cbiAgICBpZiAoIW1hZGUpIG1hZGUgPSBudWxsO1xuICAgIFxuICAgIHZhciBjYiA9IGYgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZnVuY3Rpb24gKCkge307XG4gICAgcCA9IHBhdGgucmVzb2x2ZShwKTtcbiAgICBcbiAgICB4ZnMubWtkaXIocCwgbW9kZSwgZnVuY3Rpb24gKGVyKSB7XG4gICAgICAgIGlmICghZXIpIHtcbiAgICAgICAgICAgIG1hZGUgPSBtYWRlIHx8IHA7XG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgbWFkZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChlci5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdFTk9FTlQnOlxuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmRpcm5hbWUocCkgPT09IHApIHJldHVybiBjYihlcik7XG4gICAgICAgICAgICAgICAgbWtkaXJQKHBhdGguZGlybmFtZShwKSwgb3B0cywgZnVuY3Rpb24gKGVyLCBtYWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXIpIGNiKGVyLCBtYWRlKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBta2RpclAocCwgb3B0cywgY2IsIG1hZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiBhbnkgb3RoZXIgZXJyb3IsIGp1c3Qgc2VlIGlmIHRoZXJlJ3MgYSBkaXJcbiAgICAgICAgICAgIC8vIHRoZXJlIGFscmVhZHkuICBJZiBzbywgdGhlbiBob29yYXkhICBJZiBub3QsIHRoZW4gc29tZXRoaW5nXG4gICAgICAgICAgICAvLyBpcyBib3JrZWQuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHhmcy5zdGF0KHAsIGZ1bmN0aW9uIChlcjIsIHN0YXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHN0YXQgZmFpbHMsIHRoZW4gdGhhdCdzIHN1cGVyIHdlaXJkLlxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGhlIG9yaWdpbmFsIGVycm9yIGJlIHRoZSBmYWlsdXJlIHJlYXNvbi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyMiB8fCAhc3RhdC5pc0RpcmVjdG9yeSgpKSBjYihlciwgbWFkZSlcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjYihudWxsLCBtYWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5ta2RpclAuc3luYyA9IGZ1bmN0aW9uIHN5bmMgKHAsIG9wdHMsIG1hZGUpIHtcbiAgICBpZiAoIW9wdHMgfHwgdHlwZW9mIG9wdHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdHMgPSB7IG1vZGU6IG9wdHMgfTtcbiAgICB9XG4gICAgXG4gICAgdmFyIG1vZGUgPSBvcHRzLm1vZGU7XG4gICAgdmFyIHhmcyA9IG9wdHMuZnMgfHwgZnM7XG4gICAgXG4gICAgaWYgKG1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtb2RlID0gXzA3NzdcbiAgICB9XG4gICAgaWYgKCFtYWRlKSBtYWRlID0gbnVsbDtcblxuICAgIHAgPSBwYXRoLnJlc29sdmUocCk7XG5cbiAgICB0cnkge1xuICAgICAgICB4ZnMubWtkaXJTeW5jKHAsIG1vZGUpO1xuICAgICAgICBtYWRlID0gbWFkZSB8fCBwO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyMCkge1xuICAgICAgICBzd2l0Y2ggKGVycjAuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnRU5PRU5UJyA6XG4gICAgICAgICAgICAgICAgbWFkZSA9IHN5bmMocGF0aC5kaXJuYW1lKHApLCBvcHRzLCBtYWRlKTtcbiAgICAgICAgICAgICAgICBzeW5jKHAsIG9wdHMsIG1hZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiBhbnkgb3RoZXIgZXJyb3IsIGp1c3Qgc2VlIGlmIHRoZXJlJ3MgYSBkaXJcbiAgICAgICAgICAgIC8vIHRoZXJlIGFscmVhZHkuICBJZiBzbywgdGhlbiBob29yYXkhICBJZiBub3QsIHRoZW4gc29tZXRoaW5nXG4gICAgICAgICAgICAvLyBpcyBib3JrZWQuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhciBzdGF0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXQgPSB4ZnMuc3RhdFN5bmMocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIxKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICAgIGlmICghc3RhdC5pc0RpcmVjdG9yeSgpKSB0aHJvdyBlcnIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hZGU7XG59O1xuIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiZnMiLCJfMDc3NyIsInBhcnNlSW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1rZGlyUCIsIm1rZGlycCIsInAiLCJvcHRzIiwiZiIsIm1hZGUiLCJtb2RlIiwieGZzIiwidW5kZWZpbmVkIiwiY2IiLCJyZXNvbHZlIiwibWtkaXIiLCJlciIsImNvZGUiLCJkaXJuYW1lIiwic3RhdCIsImVyMiIsImlzRGlyZWN0b3J5Iiwic3luYyIsIm1rZGlyU3luYyIsImVycjAiLCJzdGF0U3luYyIsImVycjEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mkdirp/index.js\n");

/***/ })

};
;