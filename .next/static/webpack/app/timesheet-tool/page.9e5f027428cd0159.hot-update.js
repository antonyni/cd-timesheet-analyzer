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

/***/ "(app-pages-browser)/./src/helpers/processHoursData.jsx":
/*!******************************************!*\
  !*** ./src/helpers/processHoursData.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n\n\nconst processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule, percentageAccepted)=>{\n    const normalHoursWorked = timeSheet.getCell(row, 16).value ? timeSheet.getCell(row, 16).value : \"0:00\";\n    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked;\n    const decimalHoursScheduled = simplifiedSchedule[weekName].interns[currentIntern];\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(normalHoursWorked);\n    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;\n    const totalInternHoursWorked = hoursWorkedMap.total.interns[currentIntern].normalHoursWorked;\n    hoursWorkedMap[weekName].total.percentageDifference = (hoursWorkedMap[weekName].total.totalHoursWorked / hoursWorkedMap[weekName].total.totalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap.total.interns[currentIntern].normalHoursWorked = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(totalInternHoursWorked) + decimalHoursWorked);\n    hoursWorkedMap.total.interns[currentIntern].percentageDifference = ((0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoursWorkedMap.total.interns[currentIntern].normalHoursWorked) / (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoursWorkedMap.total.interns[currentIntern].normalHoursScheduled) * 100).toFixed(2);\n    hoursWorkedMap.total.total.totalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.total.percentageDifference = (hoursWorkedMap.total.total.totalHoursWorked / hoursWorkedMap.total.total.totalHoursScheduled * 100).toFixed(2);\n    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference;\n    if (percentageDifference < percentageAccepted) {\n        hoursWorkedMap[weekName].total.percentageAcceptedNumbers.numberBelowPercentageAccepted++;\n        if (weekName != \"total\") {\n            hoursWorkedMap.total.total.percentageAcceptedNumbers.numberBelowPercentageAccepted++;\n        }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (processHoursData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL3Byb2Nlc3NIb3Vyc0RhdGEuanN4IiwibWFwcGluZ3MiOiI7OztBQUE4QztBQUNBO0FBRTlDLE1BQU1FLG1CQUFtQixDQUFDQyxLQUFLQyxXQUFXQyxnQkFBZ0JDLGVBQWVDLFVBQVVDLG9CQUFvQkM7SUFDbkcsTUFBTUMsb0JBQW9CTixVQUFVTyxPQUFPLENBQUNSLEtBQUssSUFBSVMsS0FBSyxHQUFHUixVQUFVTyxPQUFPLENBQUNSLEtBQUssSUFBSVMsS0FBSyxHQUFHO0lBQ2hHUCxjQUFjLENBQUNFLFNBQVMsQ0FBQ00sT0FBTyxDQUFDUCxjQUFjLENBQUNJLGlCQUFpQixHQUFHQTtJQUVwRSxNQUFNSSx3QkFBd0JOLGtCQUFrQixDQUFDRCxTQUFTLENBQUNNLE9BQU8sQ0FBQ1AsY0FBYztJQUNqRixNQUFNUyxxQkFBcUJmLDJEQUFjQSxDQUFDVTtJQUcxQ0wsY0FBYyxDQUFDRSxTQUFTLENBQUNTLEtBQUssQ0FBQ0MsZ0JBQWdCLElBQUlGO0lBQ25ELE1BQU1HLHlCQUF5QmIsZUFBZVcsS0FBSyxDQUFDSCxPQUFPLENBQUNQLGNBQWMsQ0FBQ0ksaUJBQWlCO0lBQzVGTCxjQUFjLENBQUNFLFNBQVMsQ0FBQ1MsS0FBSyxDQUFDRyxvQkFBb0IsR0FBRyxDQUFDZCxjQUFjLENBQUNFLFNBQVMsQ0FBQ1MsS0FBSyxDQUFDQyxnQkFBZ0IsR0FBR1osY0FBYyxDQUFDRSxTQUFTLENBQUNTLEtBQUssQ0FBQ0ksbUJBQW1CLEdBQUcsR0FBRSxFQUFHQyxPQUFPLENBQUM7SUFJM0toQixlQUFlVyxLQUFLLENBQUNILE9BQU8sQ0FBQ1AsY0FBYyxDQUFDSSxpQkFBaUIsR0FBR1QsMkRBQWNBLENBQUNELDJEQUFjQSxDQUFDa0IsMEJBQTBCSDtJQUV4SFYsZUFBZVcsS0FBSyxDQUFDSCxPQUFPLENBQUNQLGNBQWMsQ0FBQ2Esb0JBQW9CLEdBQUcsQ0FBQ25CLDJEQUFjQSxDQUFDSyxlQUFlVyxLQUFLLENBQUNILE9BQU8sQ0FBQ1AsY0FBYyxDQUFDSSxpQkFBaUIsSUFDMUlWLDJEQUFjQSxDQUFDSyxlQUFlVyxLQUFLLENBQUNILE9BQU8sQ0FBQ1AsY0FBYyxDQUFDZ0Isb0JBQW9CLElBQUksR0FBRSxFQUFHRCxPQUFPLENBQUM7SUFDdEdoQixlQUFlVyxLQUFLLENBQUNBLEtBQUssQ0FBQ0MsZ0JBQWdCLElBQUlGO0lBQy9DVixlQUFlVyxLQUFLLENBQUNBLEtBQUssQ0FBQ0csb0JBQW9CLEdBQUcsQ0FBQ2QsZUFBZVcsS0FBSyxDQUFDQSxLQUFLLENBQUNDLGdCQUFnQixHQUFHWixlQUFlVyxLQUFLLENBQUNBLEtBQUssQ0FBQ0ksbUJBQW1CLEdBQUcsR0FBRSxFQUFHQyxPQUFPLENBQUM7SUFFL0osTUFBTUYsdUJBQXVCLENBQUNKLHFCQUFxQkQsd0JBQXdCLEdBQUUsRUFBR08sT0FBTyxDQUFDO0lBQ3hGaEIsY0FBYyxDQUFDRSxTQUFTLENBQUNNLE9BQU8sQ0FBQ1AsY0FBYyxDQUFDYSxvQkFBb0IsR0FBR0E7SUFDdkUsSUFBSUEsdUJBQXVCVixvQkFBb0I7UUFDM0NKLGNBQWMsQ0FBQ0UsU0FBUyxDQUFDUyxLQUFLLENBQUNPLHlCQUF5QixDQUFDQyw2QkFBNkI7UUFDdEYsSUFBSWpCLFlBQVksU0FBUztZQUNyQkYsZUFBZVcsS0FBSyxDQUFDQSxLQUFLLENBQUNPLHlCQUF5QixDQUFDQyw2QkFBNkI7UUFDdEY7SUFFSjtBQUNKO0FBRUEsK0RBQWV0QixnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvcHJvY2Vzc0hvdXJzRGF0YS5qc3g/ZDdjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG91cnNUb0RlY2ltYWwgZnJvbSBcIi4vaG91cnNUb0RlY2ltYWxcIjtcbmltcG9ydCBkZWNpbWFsVG9Ib3VycyBmcm9tIFwiLi9kZWNpbWFsVG9Ib3Vyc1wiO1xuXG5jb25zdCBwcm9jZXNzSG91cnNEYXRhID0gKHJvdywgdGltZVNoZWV0LCBob3Vyc1dvcmtlZE1hcCwgY3VycmVudEludGVybiwgd2Vla05hbWUsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsSG91cnNXb3JrZWQgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDE2KS52YWx1ZSA/IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMTYpLnZhbHVlIDogXCIwOjAwXCI7XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbY3VycmVudEludGVybl0ubm9ybWFsSG91cnNXb3JrZWQgPSBub3JtYWxIb3Vyc1dvcmtlZDtcblxuICAgIGNvbnN0IGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0uaW50ZXJuc1tjdXJyZW50SW50ZXJuXTtcbiAgICBjb25zdCBkZWNpbWFsSG91cnNXb3JrZWQgPSBob3Vyc1RvRGVjaW1hbChub3JtYWxIb3Vyc1dvcmtlZCk7XG5cblxuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC50b3RhbEhvdXJzV29ya2VkICs9IGRlY2ltYWxIb3Vyc1dvcmtlZDtcbiAgICBjb25zdCB0b3RhbEludGVybkhvdXJzV29ya2VkID0gaG91cnNXb3JrZWRNYXAudG90YWwuaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5ub3JtYWxIb3Vyc1dvcmtlZDtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwucGVyY2VudGFnZURpZmZlcmVuY2UgPSAoaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgLyBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwudG90YWxIb3Vyc1NjaGVkdWxlZCAqIDEwMCkudG9GaXhlZCgyKTtcblxuXG5cbiAgICBob3Vyc1dvcmtlZE1hcC50b3RhbC5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkID0gZGVjaW1hbFRvSG91cnMoaG91cnNUb0RlY2ltYWwodG90YWxJbnRlcm5Ib3Vyc1dvcmtlZCkgKyBkZWNpbWFsSG91cnNXb3JrZWQpO1xuXG4gICAgaG91cnNXb3JrZWRNYXAudG90YWwuaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IChob3Vyc1RvRGVjaW1hbChob3Vyc1dvcmtlZE1hcC50b3RhbC5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkKVxuICAgICAgICAvIGhvdXJzVG9EZWNpbWFsKGhvdXJzV29ya2VkTWFwLnRvdGFsLmludGVybnNbY3VycmVudEludGVybl0ubm9ybWFsSG91cnNTY2hlZHVsZWQpICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gKGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgLyBob3Vyc1dvcmtlZE1hcC50b3RhbC50b3RhbC50b3RhbEhvdXJzU2NoZWR1bGVkICogMTAwKS50b0ZpeGVkKDIpO1xuXG4gICAgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2UgPSAoZGVjaW1hbEhvdXJzV29ya2VkIC8gZGVjaW1hbEhvdXJzU2NoZWR1bGVkICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gcGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgaWYgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlIDwgcGVyY2VudGFnZUFjY2VwdGVkKSB7XG4gICAgICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC5wZXJjZW50YWdlQWNjZXB0ZWROdW1iZXJzLm51bWJlckJlbG93UGVyY2VudGFnZUFjY2VwdGVkKys7XG4gICAgICAgIGlmICh3ZWVrTmFtZSAhPSBcInRvdGFsXCIpIHtcbiAgICAgICAgICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnBlcmNlbnRhZ2VBY2NlcHRlZE51bWJlcnMubnVtYmVyQmVsb3dQZXJjZW50YWdlQWNjZXB0ZWQrKztcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzSG91cnNEYXRhOyJdLCJuYW1lcyI6WyJob3Vyc1RvRGVjaW1hbCIsImRlY2ltYWxUb0hvdXJzIiwicHJvY2Vzc0hvdXJzRGF0YSIsInJvdyIsInRpbWVTaGVldCIsImhvdXJzV29ya2VkTWFwIiwiY3VycmVudEludGVybiIsIndlZWtOYW1lIiwic2ltcGxpZmllZFNjaGVkdWxlIiwicGVyY2VudGFnZUFjY2VwdGVkIiwibm9ybWFsSG91cnNXb3JrZWQiLCJnZXRDZWxsIiwidmFsdWUiLCJpbnRlcm5zIiwiZGVjaW1hbEhvdXJzU2NoZWR1bGVkIiwiZGVjaW1hbEhvdXJzV29ya2VkIiwidG90YWwiLCJ0b3RhbEhvdXJzV29ya2VkIiwidG90YWxJbnRlcm5Ib3Vyc1dvcmtlZCIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlIiwidG90YWxIb3Vyc1NjaGVkdWxlZCIsInRvRml4ZWQiLCJub3JtYWxIb3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRhZ2VBY2NlcHRlZE51bWJlcnMiLCJudW1iZXJCZWxvd1BlcmNlbnRhZ2VBY2NlcHRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/processHoursData.jsx\n"));

/***/ })

});