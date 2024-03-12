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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n\n\nconst processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule, percentageAccepted)=>{\n    const normalHoursWorked = timeSheet.getCell(row, 16).value ? timeSheet.getCell(row, 16).value : \"0:00\";\n    console.log(normalHoursWorked, currentIntern);\n    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked;\n    const decimalHoursScheduled = simplifiedSchedule[weekName].interns[currentIntern];\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(normalHoursWorked);\n    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;\n    const totalInternHoursWorked = hoursWorkedMap.total.interns[currentIntern].normalHoursWorked;\n    hoursWorkedMap[weekName].total.percentageDifference = (hoursWorkedMap[weekName].total.totalHoursWorked / hoursWorkedMap[weekName].total.totalHoursScheduled * 100).toFixed(2);\n    if (!hoursWorkedMap.total.interns[currentIntern].ta) {\n        hoursWorkedMap.total.interns[currentIntern].ta = timeSheet.getCell(row, 3).value;\n    }\n    hoursWorkedMap.total.interns[currentIntern].normalHoursWorked = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(totalInternHoursWorked) + decimalHoursWorked);\n    hoursWorkedMap.total.interns[currentIntern].percentageDifference = ((0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoursWorkedMap.total.interns[currentIntern].normalHoursWorked) / (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoursWorkedMap.total.interns[currentIntern].normalHoursScheduled) * 100).toFixed(2);\n    hoursWorkedMap.total.total.totalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.total.percentageDifference = (hoursWorkedMap.total.total.totalHoursWorked / hoursWorkedMap.total.total.totalHoursScheduled * 100).toFixed(2);\n    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference;\n    if (percentageDifference < percentageAccepted) {\n        hoursWorkedMap[weekName].total.percentageAcceptedNumbers.numberBelowPercentageAccepted++;\n        if (weekName != \"total\") {\n            hoursWorkedMap.total.total.percentageAcceptedNumbers.numberBelowPercentageAccepted++;\n        }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (processHoursData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL3Byb2Nlc3NIb3Vyc0RhdGEuanN4IiwibWFwcGluZ3MiOiI7OztBQUE4QztBQUNBO0FBRTlDLE1BQU1FLG1CQUFtQixDQUFDQyxLQUFLQyxXQUFXQyxnQkFBZ0JDLGVBQWVDLFVBQVVDLG9CQUFvQkM7SUFDbkcsTUFBTUMsb0JBQW9CTixVQUFVTyxPQUFPLENBQUNSLEtBQUssSUFBSVMsS0FBSyxHQUFHUixVQUFVTyxPQUFPLENBQUNSLEtBQUssSUFBSVMsS0FBSyxHQUFHO0lBQ2hHQyxRQUFRQyxHQUFHLENBQUNKLG1CQUFrQko7SUFDOUJELGNBQWMsQ0FBQ0UsU0FBUyxDQUFDUSxPQUFPLENBQUNULGNBQWMsQ0FBQ0ksaUJBQWlCLEdBQUdBO0lBRXBFLE1BQU1NLHdCQUF3QlIsa0JBQWtCLENBQUNELFNBQVMsQ0FBQ1EsT0FBTyxDQUFDVCxjQUFjO0lBQ2pGLE1BQU1XLHFCQUFxQmpCLDJEQUFjQSxDQUFDVTtJQUcxQ0wsY0FBYyxDQUFDRSxTQUFTLENBQUNXLEtBQUssQ0FBQ0MsZ0JBQWdCLElBQUlGO0lBQ25ELE1BQU1HLHlCQUF5QmYsZUFBZWEsS0FBSyxDQUFDSCxPQUFPLENBQUNULGNBQWMsQ0FBQ0ksaUJBQWlCO0lBQzVGTCxjQUFjLENBQUNFLFNBQVMsQ0FBQ1csS0FBSyxDQUFDRyxvQkFBb0IsR0FBRyxDQUFDaEIsY0FBYyxDQUFDRSxTQUFTLENBQUNXLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdkLGNBQWMsQ0FBQ0UsU0FBUyxDQUFDVyxLQUFLLENBQUNJLG1CQUFtQixHQUFHLEdBQUUsRUFBR0MsT0FBTyxDQUFDO0lBRzNLLElBQUcsQ0FBQ2xCLGVBQWVhLEtBQUssQ0FBQ0gsT0FBTyxDQUFDVCxjQUFjLENBQUNrQixFQUFFLEVBQUM7UUFDL0NuQixlQUFlYSxLQUFLLENBQUNILE9BQU8sQ0FBQ1QsY0FBYyxDQUFDa0IsRUFBRSxHQUFHcEIsVUFBVU8sT0FBTyxDQUFDUixLQUFLLEdBQUdTLEtBQUs7SUFDcEY7SUFHQVAsZUFBZWEsS0FBSyxDQUFDSCxPQUFPLENBQUNULGNBQWMsQ0FBQ0ksaUJBQWlCLEdBQUdULDJEQUFjQSxDQUFDRCwyREFBY0EsQ0FBQ29CLDBCQUEwQkg7SUFFeEhaLGVBQWVhLEtBQUssQ0FBQ0gsT0FBTyxDQUFDVCxjQUFjLENBQUNlLG9CQUFvQixHQUFHLENBQUNyQiwyREFBY0EsQ0FBQ0ssZUFBZWEsS0FBSyxDQUFDSCxPQUFPLENBQUNULGNBQWMsQ0FBQ0ksaUJBQWlCLElBQzFJViwyREFBY0EsQ0FBQ0ssZUFBZWEsS0FBSyxDQUFDSCxPQUFPLENBQUNULGNBQWMsQ0FBQ21CLG9CQUFvQixJQUFJLEdBQUUsRUFBR0YsT0FBTyxDQUFDO0lBQ3RHbEIsZUFBZWEsS0FBSyxDQUFDQSxLQUFLLENBQUNDLGdCQUFnQixJQUFJRjtJQUMvQ1osZUFBZWEsS0FBSyxDQUFDQSxLQUFLLENBQUNHLG9CQUFvQixHQUFHLENBQUNoQixlQUFlYSxLQUFLLENBQUNBLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdkLGVBQWVhLEtBQUssQ0FBQ0EsS0FBSyxDQUFDSSxtQkFBbUIsR0FBRyxHQUFFLEVBQUdDLE9BQU8sQ0FBQztJQUUvSixNQUFNRix1QkFBdUIsQ0FBQ0oscUJBQXFCRCx3QkFBd0IsR0FBRSxFQUFHTyxPQUFPLENBQUM7SUFDeEZsQixjQUFjLENBQUNFLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDVCxjQUFjLENBQUNlLG9CQUFvQixHQUFHQTtJQUN2RSxJQUFJQSx1QkFBdUJaLG9CQUFvQjtRQUMzQ0osY0FBYyxDQUFDRSxTQUFTLENBQUNXLEtBQUssQ0FBQ1EseUJBQXlCLENBQUNDLDZCQUE2QjtRQUN0RixJQUFJcEIsWUFBWSxTQUFTO1lBQ3JCRixlQUFlYSxLQUFLLENBQUNBLEtBQUssQ0FBQ1EseUJBQXlCLENBQUNDLDZCQUE2QjtRQUN0RjtJQUVKO0FBQ0o7QUFFQSwrREFBZXpCLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9wcm9jZXNzSG91cnNEYXRhLmpzeD9kN2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBob3Vyc1RvRGVjaW1hbCBmcm9tIFwiLi9ob3Vyc1RvRGVjaW1hbFwiO1xuaW1wb3J0IGRlY2ltYWxUb0hvdXJzIGZyb20gXCIuL2RlY2ltYWxUb0hvdXJzXCI7XG5cbmNvbnN0IHByb2Nlc3NIb3Vyc0RhdGEgPSAocm93LCB0aW1lU2hlZXQsIGhvdXJzV29ya2VkTWFwLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCBub3JtYWxIb3Vyc1dvcmtlZCA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMTYpLnZhbHVlID8gdGltZVNoZWV0LmdldENlbGwocm93LCAxNikudmFsdWUgOiBcIjA6MDBcIjtcbiAgICBjb25zb2xlLmxvZyhub3JtYWxIb3Vyc1dvcmtlZCxjdXJyZW50SW50ZXJuKTtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5ub3JtYWxIb3Vyc1dvcmtlZCA9IG5vcm1hbEhvdXJzV29ya2VkO1xuXG4gICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dO1xuICAgIGNvbnN0IGRlY2ltYWxIb3Vyc1dvcmtlZCA9IGhvdXJzVG9EZWNpbWFsKG5vcm1hbEhvdXJzV29ya2VkKTtcblxuXG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGNvbnN0IHRvdGFsSW50ZXJuSG91cnNXb3JrZWQgPSBob3Vyc1dvcmtlZE1hcC50b3RhbC5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkO1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IChob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwudG90YWxIb3Vyc1dvcmtlZCAvIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC50b3RhbEhvdXJzU2NoZWR1bGVkICogMTAwKS50b0ZpeGVkKDIpO1xuXG5cbiAgICBpZighaG91cnNXb3JrZWRNYXAudG90YWwuaW50ZXJuc1tjdXJyZW50SW50ZXJuXS50YSl7XG4gICAgICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLmludGVybnNbY3VycmVudEludGVybl0udGEgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDMpLnZhbHVlXG4gICAgfVxuXG5cbiAgICBob3Vyc1dvcmtlZE1hcC50b3RhbC5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkID0gZGVjaW1hbFRvSG91cnMoaG91cnNUb0RlY2ltYWwodG90YWxJbnRlcm5Ib3Vyc1dvcmtlZCkgKyBkZWNpbWFsSG91cnNXb3JrZWQpO1xuXG4gICAgaG91cnNXb3JrZWRNYXAudG90YWwuaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IChob3Vyc1RvRGVjaW1hbChob3Vyc1dvcmtlZE1hcC50b3RhbC5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkKVxuICAgICAgICAvIGhvdXJzVG9EZWNpbWFsKGhvdXJzV29ya2VkTWFwLnRvdGFsLmludGVybnNbY3VycmVudEludGVybl0ubm9ybWFsSG91cnNTY2hlZHVsZWQpICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gKGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgLyBob3Vyc1dvcmtlZE1hcC50b3RhbC50b3RhbC50b3RhbEhvdXJzU2NoZWR1bGVkICogMTAwKS50b0ZpeGVkKDIpO1xuXG4gICAgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2UgPSAoZGVjaW1hbEhvdXJzV29ya2VkIC8gZGVjaW1hbEhvdXJzU2NoZWR1bGVkICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gcGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgaWYgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlIDwgcGVyY2VudGFnZUFjY2VwdGVkKSB7XG4gICAgICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC5wZXJjZW50YWdlQWNjZXB0ZWROdW1iZXJzLm51bWJlckJlbG93UGVyY2VudGFnZUFjY2VwdGVkKys7XG4gICAgICAgIGlmICh3ZWVrTmFtZSAhPSBcInRvdGFsXCIpIHtcbiAgICAgICAgICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsLnBlcmNlbnRhZ2VBY2NlcHRlZE51bWJlcnMubnVtYmVyQmVsb3dQZXJjZW50YWdlQWNjZXB0ZWQrKztcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzSG91cnNEYXRhOyJdLCJuYW1lcyI6WyJob3Vyc1RvRGVjaW1hbCIsImRlY2ltYWxUb0hvdXJzIiwicHJvY2Vzc0hvdXJzRGF0YSIsInJvdyIsInRpbWVTaGVldCIsImhvdXJzV29ya2VkTWFwIiwiY3VycmVudEludGVybiIsIndlZWtOYW1lIiwic2ltcGxpZmllZFNjaGVkdWxlIiwicGVyY2VudGFnZUFjY2VwdGVkIiwibm9ybWFsSG91cnNXb3JrZWQiLCJnZXRDZWxsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaW50ZXJucyIsImRlY2ltYWxIb3Vyc1NjaGVkdWxlZCIsImRlY2ltYWxIb3Vyc1dvcmtlZCIsInRvdGFsIiwidG90YWxIb3Vyc1dvcmtlZCIsInRvdGFsSW50ZXJuSG91cnNXb3JrZWQiLCJwZXJjZW50YWdlRGlmZmVyZW5jZSIsInRvdGFsSG91cnNTY2hlZHVsZWQiLCJ0b0ZpeGVkIiwidGEiLCJub3JtYWxIb3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRhZ2VBY2NlcHRlZE51bWJlcnMiLCJudW1iZXJCZWxvd1BlcmNlbnRhZ2VBY2NlcHRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/processHoursData.jsx\n"));

/***/ })

});