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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var readable_web_to_node_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! readable-web-to-node-stream */ \"(app-pages-browser)/./node_modules/readable-web-to-node-stream/lib/index.js\");\n\n\nconst handleMultiFileUpload = async (event, setWorkbook)=>{\n    if (event.target.files) {\n        const workbookArray = [];\n        const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n        const fileArray = event.target.files;\n        const stream = new readable_web_to_node_stream__WEBPACK_IMPORTED_MODULE_1__.ReadableWebToNodeStream(fileArray[0].stream());\n        await workbook.csv.read(stream);\n        const worksheet = workbook.worksheets[0];\n        console.log(worksheet.getCell(1, 1).value);\n    // for(const file of fileArray){\n    //     const reader = new FileReader();\n    // if (file) {\n    //     reader.readAsArrayBuffer(event.target.files[0]);\n    // }\n    // reader.onload = (e) => {\n    //     const data = new Uint8Array(e.target.result);\n    //     const workbook = new ExcelJS.Workbook();\n    //     workbook.xlsx.load(data).then(()=>{\n    //         console.log(workbook);\n    //         workbookArray.push(workbook);\n    //     })\n    // };\n    // }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleMultiFileUpload);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2hhbmRsZU11bHRpRmlsZVVwbG9hZC5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUFrQztBQUNvQztBQUV0RSxNQUFNRSx3QkFBd0IsT0FBT0MsT0FBT0M7SUFDeEMsSUFBSUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLEVBQUU7UUFDcEIsTUFBTUMsZ0JBQWdCLEVBQUU7UUFDeEIsTUFBTUMsV0FBVyxJQUFJUiw2Q0FBZ0I7UUFDckMsTUFBTVUsWUFBWVAsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQ3BDLE1BQU1LLFNBQVMsSUFBSVYsZ0ZBQXVCQSxDQUN0Q1MsU0FBUyxDQUFDLEVBQUUsQ0FBQ0MsTUFBTTtRQUV2QixNQUFNSCxTQUFTSSxHQUFHLENBQUNDLElBQUksQ0FBQ0Y7UUFDeEIsTUFBTUcsWUFBWU4sU0FBU08sVUFBVSxDQUFDLEVBQUU7UUFDeENDLFFBQVFDLEdBQUcsQ0FBQ0gsVUFBVUksT0FBTyxDQUFDLEdBQUUsR0FBR0MsS0FBSztJQUd4QyxnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCx1REFBdUQ7SUFDdkQsSUFBSTtJQUNKLDJCQUEyQjtJQUMzQixvREFBb0Q7SUFDcEQsK0NBQStDO0lBQy9DLDBDQUEwQztJQUMxQyxpQ0FBaUM7SUFDakMsd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCxLQUFLO0lBRUwsSUFBSTtJQUVSO0FBQ0o7QUFFQSwrREFBZWpCLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9oYW5kbGVNdWx0aUZpbGVVcGxvYWQuanN4PzgwNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xuaW1wb3J0IHsgUmVhZGFibGVXZWJUb05vZGVTdHJlYW0gfSBmcm9tIFwicmVhZGFibGUtd2ViLXRvLW5vZGUtc3RyZWFtXCI7XG5cbmNvbnN0IGhhbmRsZU11bHRpRmlsZVVwbG9hZCA9IGFzeW5jIChldmVudCwgc2V0V29ya2Jvb2spID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHdvcmtib29rQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xuICAgICAgICBjb25zdCBmaWxlQXJyYXkgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBSZWFkYWJsZVdlYlRvTm9kZVN0cmVhbShcbiAgICAgICAgICAgIGZpbGVBcnJheVswXS5zdHJlYW0oKVxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB3b3JrYm9vay5jc3YucmVhZChzdHJlYW0pO1xuICAgICAgICBjb25zdCB3b3Jrc2hlZXQgPSB3b3JrYm9vay53b3Jrc2hlZXRzWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyh3b3Jrc2hlZXQuZ2V0Q2VsbCgxLDEpLnZhbHVlKTtcblxuXG4gICAgICAgIC8vIGZvcihjb25zdCBmaWxlIG9mIGZpbGVBcnJheSl7XG4gICAgICAgIC8vICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAvLyBpZiAoZmlsZSkge1xuICAgICAgICAvLyAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgLy8gICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcbiAgICAgICAgLy8gICAgIHdvcmtib29rLnhsc3gubG9hZChkYXRhKS50aGVuKCgpPT57XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cod29ya2Jvb2spO1xuICAgICAgICAvLyAgICAgICAgIHdvcmtib29rQXJyYXkucHVzaCh3b3JrYm9vayk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlTXVsdGlGaWxlVXBsb2FkOyJdLCJuYW1lcyI6WyJFeGNlbEpTIiwiUmVhZGFibGVXZWJUb05vZGVTdHJlYW0iLCJoYW5kbGVNdWx0aUZpbGVVcGxvYWQiLCJldmVudCIsInNldFdvcmtib29rIiwidGFyZ2V0IiwiZmlsZXMiLCJ3b3JrYm9va0FycmF5Iiwid29ya2Jvb2siLCJXb3JrYm9vayIsImZpbGVBcnJheSIsInN0cmVhbSIsImNzdiIsInJlYWQiLCJ3b3Jrc2hlZXQiLCJ3b3Jrc2hlZXRzIiwiY29uc29sZSIsImxvZyIsImdldENlbGwiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/handleMultiFileUpload.jsx\n"));

/***/ })

});