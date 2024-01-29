/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/chainsaw";
exports.ids = ["vendor-chunks/chainsaw"];
exports.modules = {

/***/ "(ssr)/./node_modules/chainsaw/index.js":
/*!****************************************!*\
  !*** ./node_modules/chainsaw/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Traverse = __webpack_require__(/*! traverse */ \"(ssr)/./node_modules/traverse/index.js\");\nvar EventEmitter = (__webpack_require__(/*! events */ \"events\").EventEmitter);\nmodule.exports = Chainsaw;\nfunction Chainsaw(builder) {\n    var saw = Chainsaw.saw(builder, {});\n    var r = builder.call(saw.handlers, saw);\n    if (r !== undefined) saw.handlers = r;\n    saw.record();\n    return saw.chain();\n}\n;\nChainsaw.light = function ChainsawLight(builder) {\n    var saw = Chainsaw.saw(builder, {});\n    var r = builder.call(saw.handlers, saw);\n    if (r !== undefined) saw.handlers = r;\n    return saw.chain();\n};\nChainsaw.saw = function(builder, handlers) {\n    var saw = new EventEmitter;\n    saw.handlers = handlers;\n    saw.actions = [];\n    saw.chain = function() {\n        var ch = Traverse(saw.handlers).map(function(node) {\n            if (this.isRoot) return node;\n            var ps = this.path;\n            if (typeof node === \"function\") {\n                this.update(function() {\n                    saw.actions.push({\n                        path: ps,\n                        args: [].slice.call(arguments)\n                    });\n                    return ch;\n                });\n            }\n        });\n        process.nextTick(function() {\n            saw.emit(\"begin\");\n            saw.next();\n        });\n        return ch;\n    };\n    saw.pop = function() {\n        return saw.actions.shift();\n    };\n    saw.next = function() {\n        var action = saw.pop();\n        if (!action) {\n            saw.emit(\"end\");\n        } else if (!action.trap) {\n            var node = saw.handlers;\n            action.path.forEach(function(key) {\n                node = node[key];\n            });\n            node.apply(saw.handlers, action.args);\n        }\n    };\n    saw.nest = function(cb) {\n        var args = [].slice.call(arguments, 1);\n        var autonext = true;\n        if (typeof cb === \"boolean\") {\n            var autonext = cb;\n            cb = args.shift();\n        }\n        var s = Chainsaw.saw(builder, {});\n        var r = builder.call(s.handlers, s);\n        if (r !== undefined) s.handlers = r;\n        // If we are recording...\n        if (\"undefined\" !== typeof saw.step) {\n            // ... our children should, too\n            s.record();\n        }\n        cb.apply(s.chain(), args);\n        if (autonext !== false) s.on(\"end\", saw.next);\n    };\n    saw.record = function() {\n        upgradeChainsaw(saw);\n    };\n    [\n        \"trap\",\n        \"down\",\n        \"jump\"\n    ].forEach(function(method) {\n        saw[method] = function() {\n            throw new Error(\"To use the trap, down and jump features, please \" + \"call record() first to start recording actions.\");\n        };\n    });\n    return saw;\n};\nfunction upgradeChainsaw(saw) {\n    saw.step = 0;\n    // override pop\n    saw.pop = function() {\n        return saw.actions[saw.step++];\n    };\n    saw.trap = function(name, cb) {\n        var ps = Array.isArray(name) ? name : [\n            name\n        ];\n        saw.actions.push({\n            path: ps,\n            step: saw.step,\n            cb: cb,\n            trap: true\n        });\n    };\n    saw.down = function(name) {\n        var ps = (Array.isArray(name) ? name : [\n            name\n        ]).join(\"/\");\n        var i = saw.actions.slice(saw.step).map(function(x) {\n            if (x.trap && x.step <= saw.step) return false;\n            return x.path.join(\"/\") == ps;\n        }).indexOf(true);\n        if (i >= 0) saw.step += i;\n        else saw.step = saw.actions.length;\n        var act = saw.actions[saw.step - 1];\n        if (act && act.trap) {\n            // It's a trap!\n            saw.step = act.step;\n            act.cb();\n        } else saw.next();\n    };\n    saw.jump = function(step) {\n        saw.step = step;\n        saw.next();\n    };\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbkIsSUFBSW9DLElBQUksRUFBRXpCLEdBQUcsQ0FBQyxTQUFVb0MsQ0FBQztZQUMvQyxJQUFJQSxFQUFFbkIsSUFBSSxJQUFJbUIsRUFBRVgsSUFBSSxJQUFJcEMsSUFBSW9DLElBQUksRUFBRSxPQUFPO1lBQ3pDLE9BQU9XLEVBQUVoQyxJQUFJLENBQUM4QixJQUFJLENBQUMsUUFBUS9CO1FBQy9CLEdBQUdrQyxPQUFPLENBQUM7UUFFWCxJQUFJRixLQUFLLEdBQUc5QyxJQUFJb0MsSUFBSSxJQUFJVTthQUNuQjlDLElBQUlvQyxJQUFJLEdBQUdwQyxJQUFJUyxPQUFPLENBQUN3QyxNQUFNO1FBRWxDLElBQUlDLE1BQU1sRCxJQUFJUyxPQUFPLENBQUNULElBQUlvQyxJQUFJLEdBQUcsRUFBRTtRQUNuQyxJQUFJYyxPQUFPQSxJQUFJdEIsSUFBSSxFQUFFO1lBQ2pCLGVBQWU7WUFDZjVCLElBQUlvQyxJQUFJLEdBQUdjLElBQUlkLElBQUk7WUFDbkJjLElBQUlqQixFQUFFO1FBQ1YsT0FDS2pDLElBQUl3QixJQUFJO0lBQ2pCO0lBRUF4QixJQUFJbUQsSUFBSSxHQUFHLFNBQVVmLElBQUk7UUFDckJwQyxJQUFJb0MsSUFBSSxHQUFHQTtRQUNYcEMsSUFBSXdCLElBQUk7SUFDWjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2QtdGltZXNoZWV0LWFuYWx5emVyLy4vbm9kZV9tb2R1bGVzL2NoYWluc2F3L2luZGV4LmpzPzIwNzgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFRyYXZlcnNlID0gcmVxdWlyZSgndHJhdmVyc2UnKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhaW5zYXc7XG5mdW5jdGlvbiBDaGFpbnNhdyAoYnVpbGRlcikge1xuICAgIHZhciBzYXcgPSBDaGFpbnNhdy5zYXcoYnVpbGRlciwge30pO1xuICAgIHZhciByID0gYnVpbGRlci5jYWxsKHNhdy5oYW5kbGVycywgc2F3KTtcbiAgICBpZiAociAhPT0gdW5kZWZpbmVkKSBzYXcuaGFuZGxlcnMgPSByO1xuICAgIHNhdy5yZWNvcmQoKTtcbiAgICByZXR1cm4gc2F3LmNoYWluKCk7XG59O1xuXG5DaGFpbnNhdy5saWdodCA9IGZ1bmN0aW9uIENoYWluc2F3TGlnaHQgKGJ1aWxkZXIpIHtcbiAgICB2YXIgc2F3ID0gQ2hhaW5zYXcuc2F3KGJ1aWxkZXIsIHt9KTtcbiAgICB2YXIgciA9IGJ1aWxkZXIuY2FsbChzYXcuaGFuZGxlcnMsIHNhdyk7XG4gICAgaWYgKHIgIT09IHVuZGVmaW5lZCkgc2F3LmhhbmRsZXJzID0gcjtcbiAgICByZXR1cm4gc2F3LmNoYWluKCk7XG59O1xuXG5DaGFpbnNhdy5zYXcgPSBmdW5jdGlvbiAoYnVpbGRlciwgaGFuZGxlcnMpIHtcbiAgICB2YXIgc2F3ID0gbmV3IEV2ZW50RW1pdHRlcjtcbiAgICBzYXcuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICBzYXcuYWN0aW9ucyA9IFtdO1xuXG4gICAgc2F3LmNoYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2ggPSBUcmF2ZXJzZShzYXcuaGFuZGxlcnMpLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSb290KSByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIHZhciBwcyA9IHRoaXMucGF0aDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzYXcuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggOiBwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgOiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzYXcuZW1pdCgnYmVnaW4nKTtcbiAgICAgICAgICAgIHNhdy5uZXh0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaDtcbiAgICB9O1xuXG4gICAgc2F3LnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNhdy5hY3Rpb25zLnNoaWZ0KCk7XG4gICAgfTtcblxuICAgIHNhdy5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gc2F3LnBvcCgpO1xuXG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICBzYXcuZW1pdCgnZW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWFjdGlvbi50cmFwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHNhdy5oYW5kbGVycztcbiAgICAgICAgICAgIGFjdGlvbi5wYXRoLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBub2RlID0gbm9kZVtrZXldIH0pO1xuICAgICAgICAgICAgbm9kZS5hcHBseShzYXcuaGFuZGxlcnMsIGFjdGlvbi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzYXcubmVzdCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIGF1dG9uZXh0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHZhciBhdXRvbmV4dCA9IGNiO1xuICAgICAgICAgICAgY2IgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcyA9IENoYWluc2F3LnNhdyhidWlsZGVyLCB7fSk7XG4gICAgICAgIHZhciByID0gYnVpbGRlci5jYWxsKHMuaGFuZGxlcnMsIHMpO1xuXG4gICAgICAgIGlmIChyICE9PSB1bmRlZmluZWQpIHMuaGFuZGxlcnMgPSByO1xuXG4gICAgICAgIC8vIElmIHdlIGFyZSByZWNvcmRpbmcuLi5cbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBzYXcuc3RlcCkge1xuICAgICAgICAgICAgLy8gLi4uIG91ciBjaGlsZHJlbiBzaG91bGQsIHRvb1xuICAgICAgICAgICAgcy5yZWNvcmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNiLmFwcGx5KHMuY2hhaW4oKSwgYXJncyk7XG4gICAgICAgIGlmIChhdXRvbmV4dCAhPT0gZmFsc2UpIHMub24oJ2VuZCcsIHNhdy5uZXh0KTtcbiAgICB9O1xuXG4gICAgc2F3LnJlY29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBncmFkZUNoYWluc2F3KHNhdyk7XG4gICAgfTtcblxuICAgIFsndHJhcCcsICdkb3duJywgJ2p1bXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgc2F3W21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUbyB1c2UgdGhlIHRyYXAsIGRvd24gYW5kIGp1bXAgZmVhdHVyZXMsIHBsZWFzZSBcIitcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGwgcmVjb3JkKCkgZmlyc3QgdG8gc3RhcnQgcmVjb3JkaW5nIGFjdGlvbnMuXCIpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNhdztcbn07XG5cbmZ1bmN0aW9uIHVwZ3JhZGVDaGFpbnNhdyhzYXcpIHtcbiAgICBzYXcuc3RlcCA9IDA7XG5cbiAgICAvLyBvdmVycmlkZSBwb3BcbiAgICBzYXcucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2F3LmFjdGlvbnNbc2F3LnN0ZXArK107XG4gICAgfTtcblxuICAgIHNhdy50cmFwID0gZnVuY3Rpb24gKG5hbWUsIGNiKSB7XG4gICAgICAgIHZhciBwcyA9IEFycmF5LmlzQXJyYXkobmFtZSkgPyBuYW1lIDogW25hbWVdO1xuICAgICAgICBzYXcuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHBhdGggOiBwcyxcbiAgICAgICAgICAgIHN0ZXAgOiBzYXcuc3RlcCxcbiAgICAgICAgICAgIGNiIDogY2IsXG4gICAgICAgICAgICB0cmFwIDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2F3LmRvd24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgcHMgPSAoQXJyYXkuaXNBcnJheShuYW1lKSA/IG5hbWUgOiBbbmFtZV0pLmpvaW4oJy8nKTtcbiAgICAgICAgdmFyIGkgPSBzYXcuYWN0aW9ucy5zbGljZShzYXcuc3RlcCkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBpZiAoeC50cmFwICYmIHguc3RlcCA8PSBzYXcuc3RlcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHgucGF0aC5qb2luKCcvJykgPT0gcHM7XG4gICAgICAgIH0pLmluZGV4T2YodHJ1ZSk7XG5cbiAgICAgICAgaWYgKGkgPj0gMCkgc2F3LnN0ZXAgKz0gaTtcbiAgICAgICAgZWxzZSBzYXcuc3RlcCA9IHNhdy5hY3Rpb25zLmxlbmd0aDtcblxuICAgICAgICB2YXIgYWN0ID0gc2F3LmFjdGlvbnNbc2F3LnN0ZXAgLSAxXTtcbiAgICAgICAgaWYgKGFjdCAmJiBhY3QudHJhcCkge1xuICAgICAgICAgICAgLy8gSXQncyBhIHRyYXAhXG4gICAgICAgICAgICBzYXcuc3RlcCA9IGFjdC5zdGVwO1xuICAgICAgICAgICAgYWN0LmNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBzYXcubmV4dCgpO1xuICAgIH07XG5cbiAgICBzYXcuanVtcCA9IGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgICAgIHNhdy5zdGVwID0gc3RlcDtcbiAgICAgICAgc2F3Lm5leHQoKTtcbiAgICB9O1xufTtcbiJdLCJuYW1lcyI6WyJUcmF2ZXJzZSIsInJlcXVpcmUiLCJFdmVudEVtaXR0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2hhaW5zYXciLCJidWlsZGVyIiwic2F3IiwiciIsImNhbGwiLCJoYW5kbGVycyIsInVuZGVmaW5lZCIsInJlY29yZCIsImNoYWluIiwibGlnaHQiLCJDaGFpbnNhd0xpZ2h0IiwiYWN0aW9ucyIsImNoIiwibWFwIiwibm9kZSIsImlzUm9vdCIsInBzIiwicGF0aCIsInVwZGF0ZSIsInB1c2giLCJhcmdzIiwic2xpY2UiLCJhcmd1bWVudHMiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJlbWl0IiwibmV4dCIsInBvcCIsInNoaWZ0IiwiYWN0aW9uIiwidHJhcCIsImZvckVhY2giLCJrZXkiLCJhcHBseSIsIm5lc3QiLCJjYiIsImF1dG9uZXh0IiwicyIsInN0ZXAiLCJvbiIsInVwZ3JhZGVDaGFpbnNhdyIsIm1ldGhvZCIsIkVycm9yIiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsImRvd24iLCJqb2luIiwiaSIsIngiLCJpbmRleE9mIiwibGVuZ3RoIiwiYWN0IiwianVtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/chainsaw/index.js\n");

/***/ })

};
;