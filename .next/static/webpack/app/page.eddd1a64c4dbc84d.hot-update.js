"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/page.css\");\n/* harmony import */ var _components_UploadExcel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/UploadExcel */ \"(app-pages-browser)/./src/components/UploadExcel.jsx\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"(app-pages-browser)/./node_modules/date-fns/getWeek.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst Home = ()=>{\n    console.log(date_fns__WEBPACK_IMPORTED_MODULE_4__.getWeek(new Date(\"2023-1-31\"), {\n        weekStartsOn: 0\n    }));\n    if (navigator) {\n        // if geolocation is supported by the users browser\n        if (navigator.geolocation) {\n            // get the current users location\n            navigator.geolocation.getCurrentPosition((position)=>{\n                // save the geolocation coordinates in two variables\n                const { latitude, longitude } = position.coords;\n                console.log(latitude, longitude);\n            // update the value of userlocation variable\n            }, // if there was an error getting the users location\n            (error)=>{\n                console.error(\"Error getting user location:\", error);\n            });\n        } else {\n            console.error(\"Geolocation is not supported by this browser.\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"excel helper\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UploadExcel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/page.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDOEI7QUFDWDtBQUMrQjtBQUNaO0FBQ3RDLE1BQU1HLE9BQU87SUFDWEMsUUFBUUMsR0FBRyxDQUFDSCw2Q0FBa0IsQ0FBQyxJQUFJSyxLQUFLLGNBQWE7UUFBQ0MsY0FBYTtJQUFDO0lBR3BFLElBQUdDLFdBQVU7UUFDWCxtREFBbUQ7UUFDbkQsSUFBSUEsVUFBVUMsV0FBVyxFQUFFO1lBQ3pCLGlDQUFpQztZQUNqQ0QsVUFBVUMsV0FBVyxDQUFDQyxrQkFBa0IsQ0FDdEMsQ0FBQ0M7Z0JBQ0Msb0RBQW9EO2dCQUNwRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUdGLFNBQVNHLE1BQU07Z0JBQy9DWCxRQUFRQyxHQUFHLENBQUNRLFVBQVNDO1lBQ3JCLDRDQUE0QztZQUM5QyxHQUNBLG1EQUFtRDtZQUNuRCxDQUFDRTtnQkFDQ1osUUFBUVksS0FBSyxDQUFDLGdDQUFnQ0E7WUFDaEQ7UUFFSixPQUVLO1lBQ0haLFFBQVFZLEtBQUssQ0FBQztRQUNoQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2pCLCtEQUFXQTs7Ozs7Ozs7Ozs7QUFLbEI7S0FsQ01FO0FBb0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0ICcuL3BhZ2UuY3NzJ1xuaW1wb3J0IFVwbG9hZEV4Y2VsIGZyb20gJ0AvY29tcG9uZW50cy9VcGxvYWRFeGNlbCdcbmltcG9ydCAqIGFzIERhdGVIZWxwZXIgZnJvbSAnZGF0ZS1mbnMnXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhEYXRlSGVscGVyLmdldFdlZWsobmV3IERhdGUoXCIyMDIzLTEtMzFcIikse3dlZWtTdGFydHNPbjowfSkpO1xuXG5cbiAgaWYobmF2aWdhdG9yKXtcbiAgICAvLyBpZiBnZW9sb2NhdGlvbiBpcyBzdXBwb3J0ZWQgYnkgdGhlIHVzZXJzIGJyb3dzZXJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgdXNlcnMgbG9jYXRpb25cbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIC8vIHNhdmUgdGhlIGdlb2xvY2F0aW9uIGNvb3JkaW5hdGVzIGluIHR3byB2YXJpYWJsZXNcbiAgICAgICAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICAgICAgICBjb25zb2xlLmxvZyhsYXRpdHVkZSxsb25naXR1ZGUpO1xuICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb2YgdXNlcmxvY2F0aW9uIHZhcmlhYmxlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGlmIHRoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIHRoZSB1c2VycyBsb2NhdGlvblxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHVzZXIgbG9jYXRpb246JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICAvLyBpZiBnZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSB1c2VycyBicm93c2VyXG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiA+XG4gICAgICA8aDE+ZXhjZWwgaGVscGVyPC9oMT5cbiAgICAgIDxVcGxvYWRFeGNlbC8+XG4gICAgICBcblxuICAgIDwvbWFpbj4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkltYWdlIiwiVXBsb2FkRXhjZWwiLCJEYXRlSGVscGVyIiwiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRXZWVrIiwiRGF0ZSIsIndlZWtTdGFydHNPbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvb3JkcyIsImVycm9yIiwibWFpbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});