/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-indexof-polyfill";
exports.ids = ["vendor-chunks/buffer-indexof-polyfill"];
exports.modules = {

/***/ "(ssr)/./node_modules/buffer-indexof-polyfill/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/buffer-indexof-polyfill/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar initBuffer = __webpack_require__(/*! ./init-buffer */ \"(ssr)/./node_modules/buffer-indexof-polyfill/init-buffer.js\");\nif (!Buffer.prototype.indexOf) {\n    Buffer.prototype.indexOf = function(value, offset) {\n        offset = offset || 0;\n        // Always wrap the input as a Buffer so that this method will support any\n        // data type such as array octet, string or buffer.\n        if (typeof value === \"string\" || value instanceof String) {\n            value = initBuffer(value);\n        } else if (typeof value === \"number\" || value instanceof Number) {\n            value = initBuffer([\n                value\n            ]);\n        }\n        var len = value.length;\n        for(var i = offset; i <= this.length - len; i++){\n            var mismatch = false;\n            for(var j = 0; j < len; j++){\n                if (this[i + j] != value[j]) {\n                    mismatch = true;\n                    break;\n                }\n            }\n            if (!mismatch) {\n                return i;\n            }\n        }\n        return -1;\n    };\n}\nfunction bufferLastIndexOf(value, offset) {\n    // Always wrap the input as a Buffer so that this method will support any\n    // data type such as array octet, string or buffer.\n    if (typeof value === \"string\" || value instanceof String) {\n        value = initBuffer(value);\n    } else if (typeof value === \"number\" || value instanceof Number) {\n        value = initBuffer([\n            value\n        ]);\n    }\n    var len = value.length;\n    offset = offset || this.length - len;\n    for(var i = offset; i >= 0; i--){\n        var mismatch = false;\n        for(var j = 0; j < len; j++){\n            if (this[i + j] != value[j]) {\n                mismatch = true;\n                break;\n            }\n        }\n        if (!mismatch) {\n            return i;\n        }\n    }\n    return -1;\n}\nif (Buffer.prototype.lastIndexOf) {\n    // check Buffer#lastIndexOf is usable: https://github.com/nodejs/node/issues/4604\n    if (initBuffer(\"ABC\").lastIndexOf(\"ABC\") === -1) Buffer.prototype.lastIndexOf = bufferLastIndexOf;\n} else {\n    Buffer.prototype.lastIndexOf = bufferLastIndexOf;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWluZGV4b2YtcG9seWZpbGwvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQyxrRkFBZTtBQUV4QyxJQUFJLENBQUNDLE9BQU9DLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFO0lBQzNCRixPQUFPQyxTQUFTLENBQUNDLE9BQU8sR0FBRyxTQUFVQyxLQUFLLEVBQUVDLE1BQU07UUFDOUNBLFNBQVNBLFVBQVU7UUFFbkIseUVBQXlFO1FBQ3pFLG1EQUFtRDtRQUNuRCxJQUFJLE9BQU9ELFVBQVUsWUFBWUEsaUJBQWlCRSxRQUFRO1lBQ3RERixRQUFRTCxXQUFXSztRQUN2QixPQUFPLElBQUksT0FBT0EsVUFBVSxZQUFZQSxpQkFBaUJHLFFBQVE7WUFDN0RILFFBQVFMLFdBQVc7Z0JBQUVLO2FBQU87UUFDaEM7UUFFQSxJQUFJSSxNQUFNSixNQUFNSyxNQUFNO1FBRXRCLElBQUssSUFBSUMsSUFBSUwsUUFBUUssS0FBSyxJQUFJLENBQUNELE1BQU0sR0FBR0QsS0FBS0UsSUFBSztZQUM5QyxJQUFJQyxXQUFXO1lBQ2YsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlKLEtBQUtJLElBQUs7Z0JBQzFCLElBQUksSUFBSSxDQUFDRixJQUFJRSxFQUFFLElBQUlSLEtBQUssQ0FBQ1EsRUFBRSxFQUFFO29CQUN6QkQsV0FBVztvQkFDWDtnQkFDSjtZQUNKO1lBRUEsSUFBSSxDQUFDQSxVQUFVO2dCQUNYLE9BQU9EO1lBQ1g7UUFDSjtRQUVBLE9BQU8sQ0FBQztJQUNaO0FBQ0o7QUFFQSxTQUFTRyxrQkFBbUJULEtBQUssRUFBRUMsTUFBTTtJQUVyQyx5RUFBeUU7SUFDekUsbURBQW1EO0lBQ25ELElBQUksT0FBT0QsVUFBVSxZQUFZQSxpQkFBaUJFLFFBQVE7UUFDdERGLFFBQVFMLFdBQVdLO0lBQ3ZCLE9BQU8sSUFBSSxPQUFPQSxVQUFVLFlBQVlBLGlCQUFpQkcsUUFBUTtRQUM3REgsUUFBUUwsV0FBVztZQUFFSztTQUFPO0lBQ2hDO0lBRUEsSUFBSUksTUFBTUosTUFBTUssTUFBTTtJQUN0QkosU0FBU0EsVUFBVSxJQUFJLENBQUNJLE1BQU0sR0FBR0Q7SUFFakMsSUFBSyxJQUFJRSxJQUFJTCxRQUFRSyxLQUFLLEdBQUdBLElBQUs7UUFDOUIsSUFBSUMsV0FBVztRQUNmLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSixLQUFLSSxJQUFLO1lBQzFCLElBQUksSUFBSSxDQUFDRixJQUFJRSxFQUFFLElBQUlSLEtBQUssQ0FBQ1EsRUFBRSxFQUFFO2dCQUN6QkQsV0FBVztnQkFDWDtZQUNKO1FBQ0o7UUFFQSxJQUFJLENBQUNBLFVBQVU7WUFDWCxPQUFPRDtRQUNYO0lBQ0o7SUFFQSxPQUFPLENBQUM7QUFDWjtBQUdBLElBQUlULE9BQU9DLFNBQVMsQ0FBQ1ksV0FBVyxFQUFFO0lBQzlCLGlGQUFpRjtJQUNqRixJQUFJZixXQUFXLE9BQU9lLFdBQVcsQ0FBRSxXQUFXLENBQUMsR0FDM0NiLE9BQU9DLFNBQVMsQ0FBQ1ksV0FBVyxHQUFHRDtBQUN2QyxPQUFPO0lBQ0haLE9BQU9DLFNBQVMsQ0FBQ1ksV0FBVyxHQUFHRDtBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NkLXRpbWVzaGVldC1hbmFseXplci8uL25vZGVfbW9kdWxlcy9idWZmZXItaW5kZXhvZi1wb2x5ZmlsbC9pbmRleC5qcz8yMTM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIGluaXRCdWZmZXIgPSByZXF1aXJlKFwiLi9pbml0LWJ1ZmZlclwiKTtcblxuaWYgKCFCdWZmZXIucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICBCdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgICAvLyBBbHdheXMgd3JhcCB0aGUgaW5wdXQgYXMgYSBCdWZmZXIgc28gdGhhdCB0aGlzIG1ldGhvZCB3aWxsIHN1cHBvcnQgYW55XG4gICAgICAgIC8vIGRhdGEgdHlwZSBzdWNoIGFzIGFycmF5IG9jdGV0LCBzdHJpbmcgb3IgYnVmZmVyLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGluaXRCdWZmZXIodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiB8fCB2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgICAgICAgICAgdmFsdWUgPSBpbml0QnVmZmVyKFsgdmFsdWUgXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQ7IGkgPD0gdGhpcy5sZW5ndGggLSBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIG1pc21hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbaSArIGpdICE9IHZhbHVlW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1pc21hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVmZmVyTGFzdEluZGV4T2YgKHZhbHVlLCBvZmZzZXQpIHtcblxuICAgIC8vIEFsd2F5cyB3cmFwIHRoZSBpbnB1dCBhcyBhIEJ1ZmZlciBzbyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgc3VwcG9ydCBhbnlcbiAgICAvLyBkYXRhIHR5cGUgc3VjaCBhcyBhcnJheSBvY3RldCwgc3RyaW5nIG9yIGJ1ZmZlci5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHZhbHVlID0gaW5pdEJ1ZmZlcih2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgfHwgdmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICAgICAgdmFsdWUgPSBpbml0QnVmZmVyKFsgdmFsdWUgXSk7XG4gICAgfVxuXG4gICAgdmFyIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgdGhpcy5sZW5ndGggLSBsZW47XG5cbiAgICBmb3IgKHZhciBpID0gb2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgbWlzbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaSArIGpdICE9IHZhbHVlW2pdKSB7XG4gICAgICAgICAgICAgICAgbWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtaXNtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG59XG5cblxuaWYgKEJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YpIHtcbiAgICAvLyBjaGVjayBCdWZmZXIjbGFzdEluZGV4T2YgaXMgdXNhYmxlOiBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzQ2MDRcbiAgICBpZiAoaW5pdEJ1ZmZlcihcIkFCQ1wiKS5sYXN0SW5kZXhPZiAoXCJBQkNcIikgPT09IC0xKVxuICAgICAgICBCdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gYnVmZmVyTGFzdEluZGV4T2Y7XG59IGVsc2Uge1xuICAgIEJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBidWZmZXJMYXN0SW5kZXhPZjtcbn1cbiJdLCJuYW1lcyI6WyJpbml0QnVmZmVyIiwicmVxdWlyZSIsIkJ1ZmZlciIsInByb3RvdHlwZSIsImluZGV4T2YiLCJ2YWx1ZSIsIm9mZnNldCIsIlN0cmluZyIsIk51bWJlciIsImxlbiIsImxlbmd0aCIsImkiLCJtaXNtYXRjaCIsImoiLCJidWZmZXJMYXN0SW5kZXhPZiIsImxhc3RJbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/buffer-indexof-polyfill/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/buffer-indexof-polyfill/init-buffer.js":
/*!*************************************************************!*\
  !*** ./node_modules/buffer-indexof-polyfill/init-buffer.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("module.exports = function initBuffer(val) {\n    // assume old version\n    var nodeVersion = process && process.version ? process.version : \"v5.0.0\";\n    var major = nodeVersion.split(\".\")[0].replace(\"v\", \"\");\n    return major < 6 ? new Buffer(val) : Buffer.from(val);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZC10aW1lc2hlZXQtYW5hbHl6ZXIvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWluZGV4b2YtcG9seWZpbGwvaW5pdC1idWZmZXIuanM/YzQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaXRCdWZmZXIodmFsKSB7XG4gIC8vIGFzc3VtZSBvbGQgdmVyc2lvblxuICAgIHZhciBub2RlVmVyc2lvbiA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9uID8gcHJvY2Vzcy52ZXJzaW9uIDogXCJ2NS4wLjBcIjtcbiAgICB2YXIgbWFqb3IgPSBub2RlVmVyc2lvbi5zcGxpdChcIi5cIilbMF0ucmVwbGFjZShcInZcIiwgXCJcIik7XG4gICAgcmV0dXJuIG1ham9yIDwgNlxuICAgICAgPyBuZXcgQnVmZmVyKHZhbClcbiAgICAgIDogQnVmZmVyLmZyb20odmFsKTtcbn07Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0QnVmZmVyIiwidmFsIiwibm9kZVZlcnNpb24iLCJwcm9jZXNzIiwidmVyc2lvbiIsIm1ham9yIiwic3BsaXQiLCJyZXBsYWNlIiwiQnVmZmVyIiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxXQUFXQyxHQUFHO0lBQ3RDLHFCQUFxQjtJQUNuQixJQUFJQyxjQUFjQyxXQUFXQSxRQUFRQyxPQUFPLEdBQUdELFFBQVFDLE9BQU8sR0FBRztJQUNqRSxJQUFJQyxRQUFRSCxZQUFZSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLEtBQUs7SUFDbkQsT0FBT0YsUUFBUSxJQUNYLElBQUlHLE9BQU9QLE9BQ1hPLE9BQU9DLElBQUksQ0FBQ1I7QUFDcEIiLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWluZGV4b2YtcG9seWZpbGwvaW5pdC1idWZmZXIuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/buffer-indexof-polyfill/init-buffer.js\n");

/***/ })

};
;