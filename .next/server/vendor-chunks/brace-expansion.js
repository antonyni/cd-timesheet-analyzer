/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/brace-expansion";
exports.ids = ["vendor-chunks/brace-expansion"];
exports.modules = {

/***/ "(ssr)/./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var concatMap = __webpack_require__(/*! concat-map */ \"(ssr)/./node_modules/concat-map/index.js\");\nvar balanced = __webpack_require__(/*! balanced-match */ \"(ssr)/./node_modules/balanced-match/index.js\");\nmodule.exports = expandTop;\nvar escSlash = \"\\x00SLASH\" + Math.random() + \"\\x00\";\nvar escOpen = \"\\x00OPEN\" + Math.random() + \"\\x00\";\nvar escClose = \"\\x00CLOSE\" + Math.random() + \"\\x00\";\nvar escComma = \"\\x00COMMA\" + Math.random() + \"\\x00\";\nvar escPeriod = \"\\x00PERIOD\" + Math.random() + \"\\x00\";\nfunction numeric(str) {\n    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);\n}\nfunction escapeBraces(str) {\n    return str.split(\"\\\\\\\\\").join(escSlash).split(\"\\\\{\").join(escOpen).split(\"\\\\}\").join(escClose).split(\"\\\\,\").join(escComma).split(\"\\\\.\").join(escPeriod);\n}\nfunction unescapeBraces(str) {\n    return str.split(escSlash).join(\"\\\\\").split(escOpen).join(\"{\").split(escClose).join(\"}\").split(escComma).join(\",\").split(escPeriod).join(\".\");\n}\n// Basically just str.split(\",\"), but handling cases\n// where we have nested braced sections, which should be\n// treated as individual members, like {a,{b,c},d}\nfunction parseCommaParts(str) {\n    if (!str) return [\n        \"\"\n    ];\n    var parts = [];\n    var m = balanced(\"{\", \"}\", str);\n    if (!m) return str.split(\",\");\n    var pre = m.pre;\n    var body = m.body;\n    var post = m.post;\n    var p = pre.split(\",\");\n    p[p.length - 1] += \"{\" + body + \"}\";\n    var postParts = parseCommaParts(post);\n    if (post.length) {\n        p[p.length - 1] += postParts.shift();\n        p.push.apply(p, postParts);\n    }\n    parts.push.apply(parts, p);\n    return parts;\n}\nfunction expandTop(str) {\n    if (!str) return [];\n    // I don't know why Bash 4.3 does this, but it does.\n    // Anything starting with {} will have the first two bytes preserved\n    // but *only* at the top level, so {},a}b will not expand to anything,\n    // but a{},b}c will be expanded to [a}c,abc].\n    // One could argue that this is a bug in Bash, but since the goal of\n    // this module is to match Bash's rules, we escape a leading {}\n    if (str.substr(0, 2) === \"{}\") {\n        str = \"\\\\{\\\\}\" + str.substr(2);\n    }\n    return expand(escapeBraces(str), true).map(unescapeBraces);\n}\nfunction identity(e) {\n    return e;\n}\nfunction embrace(str) {\n    return \"{\" + str + \"}\";\n}\nfunction isPadded(el) {\n    return /^-?0\\d/.test(el);\n}\nfunction lte(i, y) {\n    return i <= y;\n}\nfunction gte(i, y) {\n    return i >= y;\n}\nfunction expand(str, isTop) {\n    var expansions = [];\n    var m = balanced(\"{\", \"}\", str);\n    if (!m || /\\$$/.test(m.pre)) return [\n        str\n    ];\n    var isNumericSequence = /^-?\\d+\\.\\.-?\\d+(?:\\.\\.-?\\d+)?$/.test(m.body);\n    var isAlphaSequence = /^[a-zA-Z]\\.\\.[a-zA-Z](?:\\.\\.-?\\d+)?$/.test(m.body);\n    var isSequence = isNumericSequence || isAlphaSequence;\n    var isOptions = m.body.indexOf(\",\") >= 0;\n    if (!isSequence && !isOptions) {\n        // {a},b}\n        if (m.post.match(/,.*\\}/)) {\n            str = m.pre + \"{\" + m.body + escClose + m.post;\n            return expand(str);\n        }\n        return [\n            str\n        ];\n    }\n    var n;\n    if (isSequence) {\n        n = m.body.split(/\\.\\./);\n    } else {\n        n = parseCommaParts(m.body);\n        if (n.length === 1) {\n            // x{{a,b}}y ==> x{a}y x{b}y\n            n = expand(n[0], false).map(embrace);\n            if (n.length === 1) {\n                var post = m.post.length ? expand(m.post, false) : [\n                    \"\"\n                ];\n                return post.map(function(p) {\n                    return m.pre + n[0] + p;\n                });\n            }\n        }\n    }\n    // at this point, n is the parts, and we know it's not a comma set\n    // with a single entry.\n    // no need to expand pre, since it is guaranteed to be free of brace-sets\n    var pre = m.pre;\n    var post = m.post.length ? expand(m.post, false) : [\n        \"\"\n    ];\n    var N;\n    if (isSequence) {\n        var x = numeric(n[0]);\n        var y = numeric(n[1]);\n        var width = Math.max(n[0].length, n[1].length);\n        var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;\n        var test = lte;\n        var reverse = y < x;\n        if (reverse) {\n            incr *= -1;\n            test = gte;\n        }\n        var pad = n.some(isPadded);\n        N = [];\n        for(var i = x; test(i, y); i += incr){\n            var c;\n            if (isAlphaSequence) {\n                c = String.fromCharCode(i);\n                if (c === \"\\\\\") c = \"\";\n            } else {\n                c = String(i);\n                if (pad) {\n                    var need = width - c.length;\n                    if (need > 0) {\n                        var z = new Array(need + 1).join(\"0\");\n                        if (i < 0) c = \"-\" + z + c.slice(1);\n                        else c = z + c;\n                    }\n                }\n            }\n            N.push(c);\n        }\n    } else {\n        N = concatMap(n, function(el) {\n            return expand(el, false);\n        });\n    }\n    for(var j = 0; j < N.length; j++){\n        for(var k = 0; k < post.length; k++){\n            var expansion = pre + N[j] + post[k];\n            if (!isTop || isSequence || expansion) expansions.push(expansion);\n        }\n    }\n    return expansions;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJhY2UtZXhwYW5zaW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFlBQVlDLG1CQUFPQSxDQUFDO0FBQ3hCLElBQUlDLFdBQVdELG1CQUFPQSxDQUFDO0FBRXZCRSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLElBQUlDLFdBQVcsY0FBVUMsS0FBS0MsTUFBTSxLQUFHO0FBQ3ZDLElBQUlDLFVBQVUsYUFBU0YsS0FBS0MsTUFBTSxLQUFHO0FBQ3JDLElBQUlFLFdBQVcsY0FBVUgsS0FBS0MsTUFBTSxLQUFHO0FBQ3ZDLElBQUlHLFdBQVcsY0FBVUosS0FBS0MsTUFBTSxLQUFHO0FBQ3ZDLElBQUlJLFlBQVksZUFBV0wsS0FBS0MsTUFBTSxLQUFHO0FBRXpDLFNBQVNLLFFBQVFDLEdBQUc7SUFDbEIsT0FBT0MsU0FBU0QsS0FBSyxPQUFPQSxNQUN4QkMsU0FBU0QsS0FBSyxNQUNkQSxJQUFJRSxVQUFVLENBQUM7QUFDckI7QUFFQSxTQUFTQyxhQUFhSCxHQUFHO0lBQ3ZCLE9BQU9BLElBQUlJLEtBQUssQ0FBQyxRQUFRQyxJQUFJLENBQUNiLFVBQ25CWSxLQUFLLENBQUMsT0FBT0MsSUFBSSxDQUFDVixTQUNsQlMsS0FBSyxDQUFDLE9BQU9DLElBQUksQ0FBQ1QsVUFDbEJRLEtBQUssQ0FBQyxPQUFPQyxJQUFJLENBQUNSLFVBQ2xCTyxLQUFLLENBQUMsT0FBT0MsSUFBSSxDQUFDUDtBQUMvQjtBQUVBLFNBQVNRLGVBQWVOLEdBQUc7SUFDekIsT0FBT0EsSUFBSUksS0FBSyxDQUFDWixVQUFVYSxJQUFJLENBQUMsTUFDckJELEtBQUssQ0FBQ1QsU0FBU1UsSUFBSSxDQUFDLEtBQ3BCRCxLQUFLLENBQUNSLFVBQVVTLElBQUksQ0FBQyxLQUNyQkQsS0FBSyxDQUFDUCxVQUFVUSxJQUFJLENBQUMsS0FDckJELEtBQUssQ0FBQ04sV0FBV08sSUFBSSxDQUFDO0FBQ25DO0FBR0Esb0RBQW9EO0FBQ3BELHdEQUF3RDtB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RU4sSUFBSyxJQUFJWixJQUFJYSxHQUFHZixLQUFLRSxHQUFHQyxJQUFJRCxLQUFLZ0IsS0FBTTtZQUNyQyxJQUFJSztZQUNKLElBQUlmLGlCQUFpQjtnQkFDbkJlLElBQUlDLE9BQU9DLFlBQVksQ0FBQ3ZCO2dCQUN4QixJQUFJcUIsTUFBTSxNQUNSQSxJQUFJO1lBQ1IsT0FBTztnQkFDTEEsSUFBSUMsT0FBT3RCO2dCQUNYLElBQUltQixLQUFLO29CQUNQLElBQUlLLE9BQU9WLFFBQVFPLEVBQUVwQyxNQUFNO29CQUMzQixJQUFJdUMsT0FBTyxHQUFHO3dCQUNaLElBQUlDLElBQUksSUFBSUMsTUFBTUYsT0FBTyxHQUFHaEQsSUFBSSxDQUFDO3dCQUNqQyxJQUFJd0IsSUFBSSxHQUNOcUIsSUFBSSxNQUFNSSxJQUFJSixFQUFFTSxLQUFLLENBQUM7NkJBRXRCTixJQUFJSSxJQUFJSjtvQkFDWjtnQkFDRjtZQUNGO1lBQ0FULEVBQUV4QixJQUFJLENBQUNpQztRQUNUO0lBQ0YsT0FBTztRQUNMVCxJQUFJdkQsVUFBVXNELEdBQUcsU0FBU2QsRUFBRTtZQUFJLE9BQU9OLE9BQU9NLElBQUk7UUFBTztJQUMzRDtJQUVBLElBQUssSUFBSStCLElBQUksR0FBR0EsSUFBSWhCLEVBQUUzQixNQUFNLEVBQUUyQyxJQUFLO1FBQ2pDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJOUMsS0FBS0UsTUFBTSxFQUFFNEMsSUFBSztZQUNwQyxJQUFJQyxZQUFZakQsTUFBTStCLENBQUMsQ0FBQ2dCLEVBQUUsR0FBRzdDLElBQUksQ0FBQzhDLEVBQUU7WUFDcEMsSUFBSSxDQUFDMUIsU0FBU0ksY0FBY3VCLFdBQzFCMUIsV0FBV2hCLElBQUksQ0FBQzBDO1FBQ3BCO0lBQ0Y7SUFFQSxPQUFPMUI7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NkLXRpbWVzaGVldC1hbmFseXplci8uL25vZGVfbW9kdWxlcy9icmFjZS1leHBhbnNpb24vaW5kZXguanM/MTVlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29uY2F0TWFwID0gcmVxdWlyZSgnY29uY2F0LW1hcCcpO1xudmFyIGJhbGFuY2VkID0gcmVxdWlyZSgnYmFsYW5jZWQtbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBhbmRUb3A7XG5cbnZhciBlc2NTbGFzaCA9ICdcXDBTTEFTSCcrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NPcGVuID0gJ1xcME9QRU4nK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjQ2xvc2UgPSAnXFwwQ0xPU0UnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjQ29tbWEgPSAnXFwwQ09NTUEnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjUGVyaW9kID0gJ1xcMFBFUklPRCcrTWF0aC5yYW5kb20oKSsnXFwwJztcblxuZnVuY3Rpb24gbnVtZXJpYyhzdHIpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0ciwgMTApID09IHN0clxuICAgID8gcGFyc2VJbnQoc3RyLCAxMClcbiAgICA6IHN0ci5jaGFyQ29kZUF0KDApO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVCcmFjZXMoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJ1xcXFxcXFxcJykuam9pbihlc2NTbGFzaClcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXHsnKS5qb2luKGVzY09wZW4pXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFx9Jykuam9pbihlc2NDbG9zZSlcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXCwnKS5qb2luKGVzY0NvbW1hKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcLicpLmpvaW4oZXNjUGVyaW9kKTtcbn1cblxuZnVuY3Rpb24gdW5lc2NhcGVCcmFjZXMoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoZXNjU2xhc2gpLmpvaW4oJ1xcXFwnKVxuICAgICAgICAgICAgLnNwbGl0KGVzY09wZW4pLmpvaW4oJ3snKVxuICAgICAgICAgICAgLnNwbGl0KGVzY0Nsb3NlKS5qb2luKCd9JylcbiAgICAgICAgICAgIC5zcGxpdChlc2NDb21tYSkuam9pbignLCcpXG4gICAgICAgICAgICAuc3BsaXQoZXNjUGVyaW9kKS5qb2luKCcuJyk7XG59XG5cblxuLy8gQmFzaWNhbGx5IGp1c3Qgc3RyLnNwbGl0KFwiLFwiKSwgYnV0IGhhbmRsaW5nIGNhc2VzXG4vLyB3aGVyZSB3ZSBoYXZlIG5lc3RlZCBicmFjZWQgc2VjdGlvbnMsIHdoaWNoIHNob3VsZCBiZVxuLy8gdHJlYXRlZCBhcyBpbmRpdmlkdWFsIG1lbWJlcnMsIGxpa2Uge2Ese2IsY30sZH1cbmZ1bmN0aW9uIHBhcnNlQ29tbWFQYXJ0cyhzdHIpIHtcbiAgaWYgKCFzdHIpXG4gICAgcmV0dXJuIFsnJ107XG5cbiAgdmFyIHBhcnRzID0gW107XG4gIHZhciBtID0gYmFsYW5jZWQoJ3snLCAnfScsIHN0cik7XG5cbiAgaWYgKCFtKVxuICAgIHJldHVybiBzdHIuc3BsaXQoJywnKTtcblxuICB2YXIgcHJlID0gbS5wcmU7XG4gIHZhciBib2R5ID0gbS5ib2R5O1xuICB2YXIgcG9zdCA9IG0ucG9zdDtcbiAgdmFyIHAgPSBwcmUuc3BsaXQoJywnKTtcblxuICBwW3AubGVuZ3RoLTFdICs9ICd7JyArIGJvZHkgKyAnfSc7XG4gIHZhciBwb3N0UGFydHMgPSBwYXJzZUNvbW1hUGFydHMocG9zdCk7XG4gIGlmIChwb3N0Lmxlbmd0aCkge1xuICAgIHBbcC5sZW5ndGgtMV0gKz0gcG9zdFBhcnRzLnNoaWZ0KCk7XG4gICAgcC5wdXNoLmFwcGx5KHAsIHBvc3RQYXJ0cyk7XG4gIH1cblxuICBwYXJ0cy5wdXNoLmFwcGx5KHBhcnRzLCBwKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRvcChzdHIpIHtcbiAgaWYgKCFzdHIpXG4gICAgcmV0dXJuIFtdO1xuXG4gIC8vIEkgZG9uJ3Qga25vdyB3aHkgQmFzaCA0LjMgZG9lcyB0aGlzLCBidXQgaXQgZG9lcy5cbiAgLy8gQW55dGhpbmcgc3RhcnRpbmcgd2l0aCB7fSB3aWxsIGhhdmUgdGhlIGZpcnN0IHR3byBieXRlcyBwcmVzZXJ2ZWRcbiAgLy8gYnV0ICpvbmx5KiBhdCB0aGUgdG9wIGxldmVsLCBzbyB7fSxhfWIgd2lsbCBub3QgZXhwYW5kIHRvIGFueXRoaW5nLFxuICAvLyBidXQgYXt9LGJ9YyB3aWxsIGJlIGV4cGFuZGVkIHRvIFthfWMsYWJjXS5cbiAgLy8gT25lIGNvdWxkIGFyZ3VlIHRoYXQgdGhpcyBpcyBhIGJ1ZyBpbiBCYXNoLCBidXQgc2luY2UgdGhlIGdvYWwgb2ZcbiAgLy8gdGhpcyBtb2R1bGUgaXMgdG8gbWF0Y2ggQmFzaCdzIHJ1bGVzLCB3ZSBlc2NhcGUgYSBsZWFkaW5nIHt9XG4gIGlmIChzdHIuc3Vic3RyKDAsIDIpID09PSAne30nKSB7XG4gICAgc3RyID0gJ1xcXFx7XFxcXH0nICsgc3RyLnN1YnN0cigyKTtcbiAgfVxuXG4gIHJldHVybiBleHBhbmQoZXNjYXBlQnJhY2VzKHN0ciksIHRydWUpLm1hcCh1bmVzY2FwZUJyYWNlcyk7XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5KGUpIHtcbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIGVtYnJhY2Uoc3RyKSB7XG4gIHJldHVybiAneycgKyBzdHIgKyAnfSc7XG59XG5mdW5jdGlvbiBpc1BhZGRlZChlbCkge1xuICByZXR1cm4gL14tPzBcXGQvLnRlc3QoZWwpO1xufVxuXG5mdW5jdGlvbiBsdGUoaSwgeSkge1xuICByZXR1cm4gaSA8PSB5O1xufVxuZnVuY3Rpb24gZ3RlKGksIHkpIHtcbiAgcmV0dXJuIGkgPj0geTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kKHN0ciwgaXNUb3ApIHtcbiAgdmFyIGV4cGFuc2lvbnMgPSBbXTtcblxuICB2YXIgbSA9IGJhbGFuY2VkKCd7JywgJ30nLCBzdHIpO1xuICBpZiAoIW0gfHwgL1xcJCQvLnRlc3QobS5wcmUpKSByZXR1cm4gW3N0cl07XG5cbiAgdmFyIGlzTnVtZXJpY1NlcXVlbmNlID0gL14tP1xcZCtcXC5cXC4tP1xcZCsoPzpcXC5cXC4tP1xcZCspPyQvLnRlc3QobS5ib2R5KTtcbiAgdmFyIGlzQWxwaGFTZXF1ZW5jZSA9IC9eW2EtekEtWl1cXC5cXC5bYS16QS1aXSg/OlxcLlxcLi0/XFxkKyk/JC8udGVzdChtLmJvZHkpO1xuICB2YXIgaXNTZXF1ZW5jZSA9IGlzTnVtZXJpY1NlcXVlbmNlIHx8IGlzQWxwaGFTZXF1ZW5jZTtcbiAgdmFyIGlzT3B0aW9ucyA9IG0uYm9keS5pbmRleE9mKCcsJykgPj0gMDtcbiAgaWYgKCFpc1NlcXVlbmNlICYmICFpc09wdGlvbnMpIHtcbiAgICAvLyB7YX0sYn1cbiAgICBpZiAobS5wb3N0Lm1hdGNoKC8sLipcXH0vKSkge1xuICAgICAgc3RyID0gbS5wcmUgKyAneycgKyBtLmJvZHkgKyBlc2NDbG9zZSArIG0ucG9zdDtcbiAgICAgIHJldHVybiBleHBhbmQoc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIFtzdHJdO1xuICB9XG5cbiAgdmFyIG47XG4gIGlmIChpc1NlcXVlbmNlKSB7XG4gICAgbiA9IG0uYm9keS5zcGxpdCgvXFwuXFwuLyk7XG4gIH0gZWxzZSB7XG4gICAgbiA9IHBhcnNlQ29tbWFQYXJ0cyhtLmJvZHkpO1xuICAgIGlmIChuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8geHt7YSxifX15ID09PiB4e2F9eSB4e2J9eVxuICAgICAgbiA9IGV4cGFuZChuWzBdLCBmYWxzZSkubWFwKGVtYnJhY2UpO1xuICAgICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBwb3N0ID0gbS5wb3N0Lmxlbmd0aFxuICAgICAgICAgID8gZXhwYW5kKG0ucG9zdCwgZmFsc2UpXG4gICAgICAgICAgOiBbJyddO1xuICAgICAgICByZXR1cm4gcG9zdC5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgICAgIHJldHVybiBtLnByZSArIG5bMF0gKyBwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhdCB0aGlzIHBvaW50LCBuIGlzIHRoZSBwYXJ0cywgYW5kIHdlIGtub3cgaXQncyBub3QgYSBjb21tYSBzZXRcbiAgLy8gd2l0aCBhIHNpbmdsZSBlbnRyeS5cblxuICAvLyBubyBuZWVkIHRvIGV4cGFuZCBwcmUsIHNpbmNlIGl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgZnJlZSBvZiBicmFjZS1zZXRzXG4gIHZhciBwcmUgPSBtLnByZTtcbiAgdmFyIHBvc3QgPSBtLnBvc3QubGVuZ3RoXG4gICAgPyBleHBhbmQobS5wb3N0LCBmYWxzZSlcbiAgICA6IFsnJ107XG5cbiAgdmFyIE47XG5cbiAgaWYgKGlzU2VxdWVuY2UpIHtcbiAgICB2YXIgeCA9IG51bWVyaWMoblswXSk7XG4gICAgdmFyIHkgPSBudW1lcmljKG5bMV0pO1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KG5bMF0ubGVuZ3RoLCBuWzFdLmxlbmd0aClcbiAgICB2YXIgaW5jciA9IG4ubGVuZ3RoID09IDNcbiAgICAgID8gTWF0aC5hYnMobnVtZXJpYyhuWzJdKSlcbiAgICAgIDogMTtcbiAgICB2YXIgdGVzdCA9IGx0ZTtcbiAgICB2YXIgcmV2ZXJzZSA9IHkgPCB4O1xuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBpbmNyICo9IC0xO1xuICAgICAgdGVzdCA9IGd0ZTtcbiAgICB9XG4gICAgdmFyIHBhZCA9IG4uc29tZShpc1BhZGRlZCk7XG5cbiAgICBOID0gW107XG5cbiAgICBmb3IgKHZhciBpID0geDsgdGVzdChpLCB5KTsgaSArPSBpbmNyKSB7XG4gICAgICB2YXIgYztcbiAgICAgIGlmIChpc0FscGhhU2VxdWVuY2UpIHtcbiAgICAgICAgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgICAgIGlmIChjID09PSAnXFxcXCcpXG4gICAgICAgICAgYyA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYyA9IFN0cmluZyhpKTtcbiAgICAgICAgaWYgKHBhZCkge1xuICAgICAgICAgIHZhciBuZWVkID0gd2lkdGggLSBjLmxlbmd0aDtcbiAgICAgICAgICBpZiAobmVlZCA+IDApIHtcbiAgICAgICAgICAgIHZhciB6ID0gbmV3IEFycmF5KG5lZWQgKyAxKS5qb2luKCcwJyk7XG4gICAgICAgICAgICBpZiAoaSA8IDApXG4gICAgICAgICAgICAgIGMgPSAnLScgKyB6ICsgYy5zbGljZSgxKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYyA9IHogKyBjO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgTi5wdXNoKGMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBOID0gY29uY2F0TWFwKG4sIGZ1bmN0aW9uKGVsKSB7IHJldHVybiBleHBhbmQoZWwsIGZhbHNlKSB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGogPSAwOyBqIDwgTi5sZW5ndGg7IGorKykge1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcG9zdC5sZW5ndGg7IGsrKykge1xuICAgICAgdmFyIGV4cGFuc2lvbiA9IHByZSArIE5bal0gKyBwb3N0W2tdO1xuICAgICAgaWYgKCFpc1RvcCB8fCBpc1NlcXVlbmNlIHx8IGV4cGFuc2lvbilcbiAgICAgICAgZXhwYW5zaW9ucy5wdXNoKGV4cGFuc2lvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4cGFuc2lvbnM7XG59XG5cbiJdLCJuYW1lcyI6WyJjb25jYXRNYXAiLCJyZXF1aXJlIiwiYmFsYW5jZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXhwYW5kVG9wIiwiZXNjU2xhc2giLCJNYXRoIiwicmFuZG9tIiwiZXNjT3BlbiIsImVzY0Nsb3NlIiwiZXNjQ29tbWEiLCJlc2NQZXJpb2QiLCJudW1lcmljIiwic3RyIiwicGFyc2VJbnQiLCJjaGFyQ29kZUF0IiwiZXNjYXBlQnJhY2VzIiwic3BsaXQiLCJqb2luIiwidW5lc2NhcGVCcmFjZXMiLCJwYXJzZUNvbW1hUGFydHMiLCJwYXJ0cyIsIm0iLCJwcmUiLCJib2R5IiwicG9zdCIsInAiLCJsZW5ndGgiLCJwb3N0UGFydHMiLCJzaGlmdCIsInB1c2giLCJhcHBseSIsInN1YnN0ciIsImV4cGFuZCIsIm1hcCIsImlkZW50aXR5IiwiZSIsImVtYnJhY2UiLCJpc1BhZGRlZCIsImVsIiwidGVzdCIsImx0ZSIsImkiLCJ5IiwiZ3RlIiwiaXNUb3AiLCJleHBhbnNpb25zIiwiaXNOdW1lcmljU2VxdWVuY2UiLCJpc0FscGhhU2VxdWVuY2UiLCJpc1NlcXVlbmNlIiwiaXNPcHRpb25zIiwiaW5kZXhPZiIsIm1hdGNoIiwibiIsIk4iLCJ4Iiwid2lkdGgiLCJtYXgiLCJpbmNyIiwiYWJzIiwicmV2ZXJzZSIsInBhZCIsInNvbWUiLCJjIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibmVlZCIsInoiLCJBcnJheSIsInNsaWNlIiwiaiIsImsiLCJleHBhbnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/brace-expansion/index.js\n");

/***/ })

};
;