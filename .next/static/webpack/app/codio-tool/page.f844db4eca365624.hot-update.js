"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/codio-tool/page",{

/***/ "(app-pages-browser)/./src/helpers/handleMultiFileUpload.jsx":
/*!***********************************************!*\
  !*** ./src/helpers/handleMultiFileUpload.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var readable_web_to_node_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! readable-web-to-node-stream */ \"(app-pages-browser)/./node_modules/readable-web-to-node-stream/lib/index.js\");\n\n\nconst handleMultiFileUpload = async (event, setWorkbook)=>{\n    if (event.target.files) {\n        const workbookArray = [];\n        const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n        const fileArray = event.target.files;\n        const stream = new readable_web_to_node_stream__WEBPACK_IMPORTED_MODULE_1__.ReadableWebToNodeStream(fileArray[0].stream());\n        console.log(stream);\n        await workbook.csv.read(stream);\n        const worksheet = workbook.worksheets[0];\n        console.log(worksheet.getCell(1, 1).value);\n    // for(const file of fileArray){\n    //     const reader = new FileReader();\n    // if (file) {\n    //     reader.readAsArrayBuffer(event.target.files[0]);\n    // }\n    // reader.onload = (e) => {\n    //     const data = new Uint8Array(e.target.result);\n    //     const workbook = new ExcelJS.Workbook();\n    //     workbook.xlsx.load(data).then(()=>{\n    //         console.log(workbook);\n    //         workbookArray.push(workbook);\n    //     })\n    // };\n    // }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleMultiFileUpload);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2hhbmRsZU11bHRpRmlsZVVwbG9hZC5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUFrQztBQUNvQztBQUV0RSxNQUFNRSx3QkFBd0IsT0FBT0MsT0FBT0M7SUFDeEMsSUFBSUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLEVBQUU7UUFDcEIsTUFBTUMsZ0JBQWdCLEVBQUU7UUFDeEIsTUFBTUMsV0FBVyxJQUFJUiw2Q0FBZ0I7UUFDckMsTUFBTVUsWUFBWVAsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQ3BDLE1BQU1LLFNBQVMsSUFBSVYsZ0ZBQXVCQSxDQUN0Q1MsU0FBUyxDQUFDLEVBQUUsQ0FBQ0MsTUFBTTtRQUV2QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE1BQU1ILFNBQVNNLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDSjtRQUN4QixNQUFNSyxZQUFZUixTQUFTUyxVQUFVLENBQUMsRUFBRTtRQUN4Q0wsUUFBUUMsR0FBRyxDQUFDRyxVQUFVRSxPQUFPLENBQUMsR0FBRSxHQUFHQyxLQUFLO0lBR3hDLGdDQUFnQztJQUNoQyx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHVEQUF1RDtJQUN2RCxJQUFJO0lBQ0osMkJBQTJCO0lBQzNCLG9EQUFvRDtJQUNwRCwrQ0FBK0M7SUFDL0MsMENBQTBDO0lBQzFDLGlDQUFpQztJQUNqQyx3Q0FBd0M7SUFDeEMsU0FBUztJQUNULEtBQUs7SUFFTCxJQUFJO0lBRVI7QUFDSjtBQUVBLCtEQUFlakIscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL2hhbmRsZU11bHRpRmlsZVVwbG9hZC5qc3g/ODA1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnXG5pbXBvcnQgeyBSZWFkYWJsZVdlYlRvTm9kZVN0cmVhbSB9IGZyb20gXCJyZWFkYWJsZS13ZWItdG8tbm9kZS1zdHJlYW1cIjtcblxuY29uc3QgaGFuZGxlTXVsdGlGaWxlVXBsb2FkID0gYXN5bmMgKGV2ZW50LCBzZXRXb3JrYm9vaykgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMpIHtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2tBcnJheSA9IFtdO1xuICAgICAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XG4gICAgICAgIGNvbnN0IGZpbGVBcnJheSA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IFJlYWRhYmxlV2ViVG9Ob2RlU3RyZWFtKFxuICAgICAgICAgICAgZmlsZUFycmF5WzBdLnN0cmVhbSgpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cmVhbSk7XG4gICAgICAgIGF3YWl0IHdvcmtib29rLmNzdi5yZWFkKHN0cmVhbSk7XG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLndvcmtzaGVldHNbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKHdvcmtzaGVldC5nZXRDZWxsKDEsMSkudmFsdWUpO1xuXG5cbiAgICAgICAgLy8gZm9yKGNvbnN0IGZpbGUgb2YgZmlsZUFycmF5KXtcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIC8vIGlmIChmaWxlKSB7XG4gICAgICAgIC8vICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAvLyAgICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xuICAgICAgICAvLyAgICAgd29ya2Jvb2sueGxzeC5sb2FkKGRhdGEpLnRoZW4oKCk9PntcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh3b3JrYm9vayk7XG4gICAgICAgIC8vICAgICAgICAgd29ya2Jvb2tBcnJheS5wdXNoKHdvcmtib29rKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVNdWx0aUZpbGVVcGxvYWQ7Il0sIm5hbWVzIjpbIkV4Y2VsSlMiLCJSZWFkYWJsZVdlYlRvTm9kZVN0cmVhbSIsImhhbmRsZU11bHRpRmlsZVVwbG9hZCIsImV2ZW50Iiwic2V0V29ya2Jvb2siLCJ0YXJnZXQiLCJmaWxlcyIsIndvcmtib29rQXJyYXkiLCJ3b3JrYm9vayIsIldvcmtib29rIiwiZmlsZUFycmF5Iiwic3RyZWFtIiwiY29uc29sZSIsImxvZyIsImNzdiIsInJlYWQiLCJ3b3Jrc2hlZXQiLCJ3b3Jrc2hlZXRzIiwiZ2V0Q2VsbCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/handleMultiFileUpload.jsx\n"));

/***/ })

});