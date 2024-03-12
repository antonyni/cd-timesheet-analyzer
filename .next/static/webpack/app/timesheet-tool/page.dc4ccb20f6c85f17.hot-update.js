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

/***/ "(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx":
/*!***********************************************!*\
  !*** ./src/helpers/makeTimeSheetAnalysis.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _initializeHoursWorkedMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initializeHoursWorkedMap */ \"(app-pages-browser)/./src/helpers/initializeHoursWorkedMap.jsx\");\n/* harmony import */ var _populateHoursWorkedMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateHoursWorkedMap */ \"(app-pages-browser)/./src/helpers/populateHoursWorkedMap.jsx\");\n/* harmony import */ var _makeSheets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeSheets */ \"(app-pages-browser)/./src/helpers/makeSheets.jsx\");\n/* harmony import */ var _processChangeFromPreviousWeek__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processChangeFromPreviousWeek */ \"(app-pages-browser)/./src/helpers/processChangeFromPreviousWeek.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const taMap = {};\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    const hoursWorkedMap = {\n        total: {\n            total: {\n                totalHoursWorked: 0,\n                totalHoursScheduled: 0,\n                percentageAcceptedNumbers: {\n                    numberBelowPercentageAccepted: 0,\n                    totalNumberOfPercentages: 0\n                }\n            },\n            interns: {}\n        }\n    };\n    (0,_initializeHoursWorkedMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(hoursWorkedMap, simplifiedSchedule);\n    (0,_populateHoursWorkedMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted, taMap);\n    (0,_processChangeFromPreviousWeek__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hoursWorkedMap);\n    (0,_makeSheets__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(workbook, hoursWorkedMap, percentageAccepted, taMap);\n    console.log(hoursWorkedMap);\n    workbook.xlsx.writeBuffer().then((data)=>{\n        const blob = new Blob([\n            data\n        ]);\n        file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(blob, \"Timesheet Analysis.xlsx\");\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDMkI7QUFDSjtBQUN4QjtBQUNzQztBQUU1RSxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFFBQVEsQ0FBQztJQUNmLE1BQU1DLFdBQVcsSUFBSVgsNkNBQWdCO0lBQ3JDLE1BQU1hLGlCQUFpQjtRQUNuQkMsT0FBTztZQUNIQSxPQUFPO2dCQUNIQyxrQkFBa0I7Z0JBQ2xCQyxxQkFBcUI7Z0JBQ3JCQywyQkFBMkI7b0JBQ3ZCQywrQkFBK0I7b0JBQy9CQywwQkFBMEI7Z0JBQzlCO1lBQ0o7WUFDQUMsU0FBUyxDQUVUO1FBQ0o7SUFFSjtJQUVBbEIscUVBQXdCQSxDQUFDVyxnQkFBZ0JMO0lBQ3pDTCxtRUFBc0JBLENBQUNJLGdCQUFnQk0sZ0JBQWdCTCxvQkFBb0JDLG9CQUFvQkM7SUFDL0ZMLDBFQUE2QkEsQ0FBQ1E7SUFDOUJULHVEQUFVQSxDQUFDTyxVQUFVRSxnQkFBZ0JKLG9CQUFvQkM7SUFDekRXLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDWkYsU0FBU1ksSUFBSSxDQUFDQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsQ0FBQUE7UUFDN0IsTUFBTUMsT0FBTyxJQUFJQyxLQUFLO1lBQUNGO1NBQUs7UUFDNUJ6Qiw4Q0FBZ0IsQ0FBQzBCLE1BQU07SUFDM0I7QUFFSjtBQUVBLCtEQUFlckIscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3g/OTVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcidcbmltcG9ydCBpbml0aWFsaXplSG91cnNXb3JrZWRNYXAgZnJvbSAnLi9pbml0aWFsaXplSG91cnNXb3JrZWRNYXAnO1xuaW1wb3J0IHBvcHVsYXRlSG91cnNXb3JrZWRNYXAgZnJvbSAnLi9wb3B1bGF0ZUhvdXJzV29ya2VkTWFwJztcbmltcG9ydCBtYWtlU2hlZXRzIGZyb20gJy4vbWFrZVNoZWV0cyc7XG5pbXBvcnQgcHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsgZnJvbSAnLi9wcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2Vlayc7XG5cbmNvbnN0IG1ha2VUaW1lc2hlZXRBbmFseXNpcyA9ICh0aW1lc2hlZXRFeGNlbCwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCB0YU1hcCA9IHt9O1xuICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcbiAgICBjb25zdCBob3Vyc1dvcmtlZE1hcCA9IHtcbiAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgdG90YWxIb3Vyc1dvcmtlZDogMCxcbiAgICAgICAgICAgICAgICB0b3RhbEhvdXJzU2NoZWR1bGVkOiAwLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VBY2NlcHRlZE51bWJlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyQmVsb3dQZXJjZW50YWdlQWNjZXB0ZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQZXJjZW50YWdlczogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludGVybnM6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgIH07XG5cbiAgICBpbml0aWFsaXplSG91cnNXb3JrZWRNYXAoaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSk7XG4gICAgcG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCh0aW1lc2hlZXRFeGNlbCwgaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkLCB0YU1hcCk7XG4gICAgcHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsoaG91cnNXb3JrZWRNYXApO1xuICAgIG1ha2VTaGVldHMod29ya2Jvb2ssIGhvdXJzV29ya2VkTWFwLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHRhTWFwKTtcbiAgICBjb25zb2xlLmxvZyhob3Vyc1dvcmtlZE1hcCk7XG4gICAgd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0pO1xuICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIFwiVGltZXNoZWV0IEFuYWx5c2lzLnhsc3hcIik7XG4gICAgfSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVRpbWVzaGVldEFuYWx5c2lzOyJdLCJuYW1lcyI6WyJFeGNlbEpTIiwiRmlsZVNhdmVyIiwiaW5pdGlhbGl6ZUhvdXJzV29ya2VkTWFwIiwicG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCIsIm1ha2VTaGVldHMiLCJwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayIsIm1ha2VUaW1lc2hlZXRBbmFseXNpcyIsInRpbWVzaGVldEV4Y2VsIiwic2ltcGxpZmllZFNjaGVkdWxlIiwicGVyY2VudGFnZUFjY2VwdGVkIiwidGFNYXAiLCJ3b3JrYm9vayIsIldvcmtib29rIiwiaG91cnNXb3JrZWRNYXAiLCJ0b3RhbCIsInRvdGFsSG91cnNXb3JrZWQiLCJ0b3RhbEhvdXJzU2NoZWR1bGVkIiwicGVyY2VudGFnZUFjY2VwdGVkTnVtYmVycyIsIm51bWJlckJlbG93UGVyY2VudGFnZUFjY2VwdGVkIiwidG90YWxOdW1iZXJPZlBlcmNlbnRhZ2VzIiwiaW50ZXJucyIsImNvbnNvbGUiLCJsb2ciLCJ4bHN4Iiwid3JpdGVCdWZmZXIiLCJ0aGVuIiwiZGF0YSIsImJsb2IiLCJCbG9iIiwic2F2ZUFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});