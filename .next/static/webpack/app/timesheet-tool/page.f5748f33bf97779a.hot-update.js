"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/timesheet-tool/page",{

/***/ "(app-pages-browser)/./src/helpers/handleFileUploadExcelJS.jsx":
/*!*************************************************!*\
  !*** ./src/helpers/handleFileUploadExcelJS.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handleFileUploadExcelJS = (event, setWorkbook)=>{\n    if (event.target.files) {\n        const file = event.target.files[0];\n        const reader = new FileReader();\n        if (event.target.files[0]) {\n            reader.readAsArrayBuffer(file);\n        }\n        reader.onload = (e)=>{\n            const data = new Uint8Array(e.target.result);\n            const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook().xlsx.load(data);\n            console.log(workbook);\n        // setWorkbook(workbook);\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleFileUploadExcelJS);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2hhbmRsZUZpbGVVcGxvYWRFeGNlbEpTLmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFFbEMsTUFBTUMsMEJBQTBCLENBQUNDLE9BQU9DO0lBQ3BDLElBQUlELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1FBQ3BCLE1BQU1DLE9BQU9KLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDbEMsTUFBTUUsU0FBUyxJQUFJQztRQUNuQixJQUFJTixNQUFNRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDdkJFLE9BQU9FLGlCQUFpQixDQUFDSDtRQUM3QjtRQUNBQyxPQUFPRyxNQUFNLEdBQUcsQ0FBQ0M7WUFDYixNQUFNQyxPQUFPLElBQUlDLFdBQVdGLEVBQUVQLE1BQU0sQ0FBQ1UsTUFBTTtZQUMzQyxNQUFNQyxXQUFXLElBQUlmLDZDQUFnQixHQUFHaUIsSUFBSSxDQUFDQyxJQUFJLENBQUNOO1lBQ2xETyxRQUFRQyxHQUFHLENBQUNMO1FBRVoseUJBQXlCO1FBQzdCO0lBRUo7QUFDSjtBQUVBLCtEQUFlZCx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvaGFuZGxlRmlsZVVwbG9hZEV4Y2VsSlMuanN4PzY1YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xuXG5jb25zdCBoYW5kbGVGaWxlVXBsb2FkRXhjZWxKUyA9IChldmVudCwgc2V0V29ya2Jvb2spID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpLnhsc3gubG9hZChkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmtib29rKTtcblxuICAgICAgICAgICAgLy8gc2V0V29ya2Jvb2sod29ya2Jvb2spO1xuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVGaWxlVXBsb2FkRXhjZWxKUzsiXSwibmFtZXMiOlsiRXhjZWxKUyIsImhhbmRsZUZpbGVVcGxvYWRFeGNlbEpTIiwiZXZlbnQiLCJzZXRXb3JrYm9vayIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIm9ubG9hZCIsImUiLCJkYXRhIiwiVWludDhBcnJheSIsInJlc3VsdCIsIndvcmtib29rIiwiV29ya2Jvb2siLCJ4bHN4IiwibG9hZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/handleFileUploadExcelJS.jsx\n"));

/***/ })

});