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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    let hoursWorkedMap = {};\n    hoursWorkedMap.total = 0;\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    let firstName = timeSheet.getCell(2, 1).value;\n    let lastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = firstName + \" \" + lastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const tempFirstName = timeSheet.getCell(row, 1).value;\n        const tempLastName = timeSheet.getCell(row, 2).value;\n        if (tempFirstName && tempFirstName + \" \" + tempLastName != currentIntern) {\n            currentIntern = tempFirstName + \" \" + tempLastName;\n            firstName = tempFirstName;\n            lastName = tempLastName;\n        }\n        const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n        const weekSchedule = simplifiedSchedule[weekName];\n        if (weekSchedule && weekSchedule[currentIntern]) {\n            if (!hoursWorkedMap[weekName]) {\n                setUpNewSheet(hoursWorkedMap, weekName, workbook);\n            }\n            const currentWeek = hoursWorkedMap[weekName];\n            if (!currentWeek[currentIntern]) {\n                const currentInternData = {\n                    fullName: currentIntern,\n                    firstName: firstName,\n                    lastName: lastName\n                };\n                const workBookData = {\n                    workbook: workbook,\n                    weekName: weekName,\n                    timeSheet: timeSheet,\n                    currentWeek: currentWeek,\n                    hoursWorkedMap: hoursWorkedMap,\n                    simplifiedSchedule: simplifiedSchedule\n                };\n                populateRow(workBookData, currentInternData, percentageAccepted, row);\n            // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n            // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n            // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n            }\n        }\n    }\n// workbook.xlsx.writeBuffer().then(data => {\n//     const blob = new Blob([data]);\n//     FileSaver.saveAs(blob, \"Timesheet Analysis.xlsx\");\n// });\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    const [normalHoursWorked, normalHoursScheduled, percentageDifference] = processHoursData(row, workBookData.timeSheet, workBookData.currentWeek, currentInternData.fullName, workBookData.weekName, workBookData.simplifiedSchedule);\n    const percentChangeFromPreviousWeek = processChangeFromPreviousWeek(workBookData, currentInternData);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference,\n        changeFromPreviousWeek: percentChangeFromPreviousWeek\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, currentWeek, currentIntern, weekName, simplifiedSchedule)=>{\n    const potentialWorkHours = timeSheet.getCell(row, 15).value;\n    const workHours = potentialWorkHours ? potentialWorkHours : \"00:00\";\n    currentWeek[currentIntern] = {\n        hoursWorked: (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(workHours)\n    };\n    const decimalHoursScheduled = simplifiedSchedule[weekName][currentIntern];\n    const normalHoursScheduled = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n    const normalHoursWorked = workHours;\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked);\n    currentWeek.total += decimalHoursWorked;\n    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    currentWeek[currentIntern].percentageDifference = percentageDifference;\n    return [\n        normalHoursWorked,\n        normalHoursScheduled,\n        percentageDifference\n    ];\n};\nconst processChangeFromPreviousWeek = (workBookData, currentInternData)=>{\n    const hoursWorkedMap = workBookData.hoursWorkedMap;\n    const currWeek = workBookData.weekName;\n    const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n    const currName = currentInternData.firstName + \" \" + currentInternData.lastName;\n    console.log(currentInternData.firstName);\n    let percentageDifferenceOfPreviousWeek;\n    if (hoursWorkedMap[prevWeek]) {\n        if (hoursWorkedMap[prevWeek][currentInternData.fullName]) {\n            console.log(\"hi\");\n        }\n    // percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][currentInternData.fullName].percentageDifference;\n    }\n    const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][currentInternData.fullName].percentageDifference;\n    let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n    return differenceFromWeeks;\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLElBQUlZLGlCQUFpQixDQUFDO0lBQ3RCQSxlQUFlQyxLQUFLLEdBQUc7SUFFdkIsTUFBTUMsWUFBWVAsZUFBZVEsWUFBWSxDQUFDO0lBRTlDLElBQUlDLFlBQVlGLFVBQVVHLE9BQU8sQ0FBQyxHQUFHLEdBQUdDLEtBQUs7SUFDN0MsSUFBSUMsV0FBV0wsVUFBVUcsT0FBTyxDQUFDLEdBQUcsR0FBR0MsS0FBSztJQUM1QyxJQUFJRSxnQkFBZ0JKLFlBQVksTUFBTUc7SUFFdEMsSUFBSyxJQUFJRSxNQUFNLEdBQUdBLE9BQU9QLFVBQVVRLFFBQVEsRUFBRUQsTUFBTztRQUVoRCxNQUFNRSxnQkFBZ0JULFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3JELE1BQU1NLGVBQWVWLFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3BELElBQUlLLGlCQUNDQSxnQkFBZ0IsTUFBTUMsZ0JBQWdCSixlQUFnQjtZQUN2REEsZ0JBQWdCRyxnQkFBZ0IsTUFBTUM7WUFDdENSLFlBQVlPO1lBQ1pKLFdBQVdLO1FBQ2Y7UUFFQSxNQUFNQyxXQUFXdEIsOERBQWlCQSxDQUFDVyxVQUFVRyxPQUFPLENBQUNJLEtBQUssR0FBR0gsS0FBSztRQUNsRSxNQUFNUSxlQUFlbEIsa0JBQWtCLENBQUNpQixTQUFTO1FBRWpELElBQUlDLGdCQUFnQkEsWUFBWSxDQUFDTixjQUFjLEVBQUU7WUFDN0MsSUFBSSxDQUFDUixjQUFjLENBQUNhLFNBQVMsRUFBRTtnQkFDM0JFLGNBQWNmLGdCQUFnQmEsVUFBVWY7WUFDNUM7WUFF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Vy9ELDBEQUFhQSxDQUFDOEQ7SUFDL0IsTUFBTUUsV0FBV3hDLGtCQUFrQmIsU0FBUyxHQUFHLE1BQU1hLGtCQUFrQlYsUUFBUTtJQUMvRW1ELFFBQVFDLEdBQUcsQ0FBQzFDLGtCQUFrQmIsU0FBUztJQUN2QyxJQUFJd0Q7SUFDSixJQUFJNUQsY0FBYyxDQUFDd0QsU0FBUyxFQUFHO1FBQzNCLElBQUd4RCxjQUFjLENBQUN3RCxTQUFTLENBQUN2QyxrQkFBa0JDLFFBQVEsQ0FBQyxFQUFDO1lBQ3BEd0MsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0Esa0hBQWtIO0lBQ3RIO0lBQ0EsTUFBTUUsb0NBQW9DN0QsY0FBYyxDQUFDdUQsU0FBUyxDQUFDdEMsa0JBQWtCQyxRQUFRLENBQUMsQ0FBQzBCLG9CQUFvQjtJQUNuSCxJQUFJa0Isc0JBQXNCRixxQ0FDdEIsQ0FBQ0Msb0NBQW9DRCxrQ0FBaUMsRUFBR04sT0FBTyxDQUFDLEtBQUs7SUFFMUYsT0FBT1E7QUFDWDtBQUVBLE1BQU1iLHNCQUFzQixDQUFDUixXQUFXNUM7SUFDcEMsTUFBTWtFLFdBQVd0QixVQUFVcEMsT0FBTyxDQUFDb0MsVUFBVS9CLFFBQVEsRUFBRTtJQUN2RCxJQUFJc0QsV0FBV0QsWUFBWWxFLG9CQUFvQjtRQUMzQ2tFLFNBQVNFLElBQUksR0FBRztZQUNaQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsU0FBUztnQkFBRUMsTUFBTTtZQUFXO1FBQ2hDO0lBQ0o7SUFDQSxJQUFJTCxXQUFXRCxZQUFZLEtBQUs7UUFDNUJBLFNBQVNFLElBQUksR0FBRztZQUNaQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsU0FBUztnQkFBRUMsTUFBTTtZQUFXO1FBQ2hDO0lBQ0o7QUFDSjtBQUdBLCtEQUFlM0UscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3g/OTVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcidcbmltcG9ydCBob3Vyc1RvRGVjaW1hbCBmcm9tICcuL2hvdXJzVG9EZWNpbWFsJztcbmltcG9ydCBnZXREYXRlRnJvbVN0cmluZyBmcm9tICcuL2dldERhdGVGcm9tU3RyaW5nJztcbmltcG9ydCBkZWNpbWFsVG9Ib3VycyBmcm9tICcuL2RlY2ltYWxUb0hvdXJzJztcbmltcG9ydCBnZXRXZWVrQmVmb3JlIGZyb20gJy4vZ2V0V2Vla0JlZm9yZSc7XG5cbmNvbnN0IG1ha2VUaW1lc2hlZXRBbmFseXNpcyA9ICh0aW1lc2hlZXRFeGNlbCwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XG4gICAgbGV0IGhvdXJzV29ya2VkTWFwID0ge307XG4gICAgaG91cnNXb3JrZWRNYXAudG90YWwgPSAwO1xuXG4gICAgY29uc3QgdGltZVNoZWV0ID0gdGltZXNoZWV0RXhjZWwuZ2V0V29ya3NoZWV0KFwiQWxsIEVtcGxveWVlc1wiKTtcblxuICAgIGxldCBmaXJzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbCgyLCAxKS52YWx1ZTtcbiAgICBsZXQgbGFzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbCgyLCAyKS52YWx1ZVxuICAgIGxldCBjdXJyZW50SW50ZXJuID0gZmlyc3ROYW1lICsgXCIgXCIgKyBsYXN0TmFtZTtcblxuICAgIGZvciAobGV0IHJvdyA9IDI7IHJvdyA8PSB0aW1lU2hlZXQucm93Q291bnQ7IHJvdysrKSB7XG5cbiAgICAgICAgY29uc3QgdGVtcEZpcnN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMSkudmFsdWU7XG4gICAgICAgIGNvbnN0IHRlbXBMYXN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMikudmFsdWU7XG4gICAgICAgIGlmICh0ZW1wRmlyc3ROYW1lICYmXG4gICAgICAgICAgICAodGVtcEZpcnN0TmFtZSArIFwiIFwiICsgdGVtcExhc3ROYW1lICE9IGN1cnJlbnRJbnRlcm4pKSB7XG4gICAgICAgICAgICBjdXJyZW50SW50ZXJuID0gdGVtcEZpcnN0TmFtZSArIFwiIFwiICsgdGVtcExhc3ROYW1lO1xuICAgICAgICAgICAgZmlyc3ROYW1lID0gdGVtcEZpcnN0TmFtZTtcbiAgICAgICAgICAgIGxhc3ROYW1lID0gdGVtcExhc3ROYW1lXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ZWVrTmFtZSA9IGdldERhdGVGcm9tU3RyaW5nKHRpbWVTaGVldC5nZXRDZWxsKHJvdywgNSkudmFsdWUpO1xuICAgICAgICBjb25zdCB3ZWVrU2NoZWR1bGUgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdO1xuXG4gICAgICAgIGlmICh3ZWVrU2NoZWR1bGUgJiYgd2Vla1NjaGVkdWxlW2N1cnJlbnRJbnRlcm5dKSB7XG4gICAgICAgICAgICBpZiAoIWhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSkge1xuICAgICAgICAgICAgICAgIHNldFVwTmV3U2hlZXQoaG91cnNXb3JrZWRNYXAsIHdlZWtOYW1lLCB3b3JrYm9vayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXZWVrID0gaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnRlcm5EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogY3VycmVudEludGVybixcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrQm9va0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtib29rOiB3b3JrYm9vayxcbiAgICAgICAgICAgICAgICAgICAgd2Vla05hbWU6IHdlZWtOYW1lLFxuICAgICAgICAgICAgICAgICAgICB0aW1lU2hlZXQ6IHRpbWVTaGVldCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdlZWs6IGN1cnJlbnRXZWVrLFxuICAgICAgICAgICAgICAgICAgICBob3Vyc1dvcmtlZE1hcDogaG91cnNXb3JrZWRNYXAsXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsaWZpZWRTY2hlZHVsZTogc2ltcGxpZmllZFNjaGVkdWxlLFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvcHVsYXRlUm93KHdvcmtCb29rRGF0YSwgY3VycmVudEludGVybkRhdGEsIHBlcmNlbnRhZ2VBY2NlcHRlZCwgcm93KTtcbiAgICAgICAgICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCA5KS52YWx1ZSA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbDtcbiAgICAgICAgICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCAxMCkudmFsdWUgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLnRvdGFsU2NoZWR1bGVkSG91cnM7XG4gICAgICAgICAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgMTEpLnZhbHVlID0gKGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbCAvIHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxTY2hlZHVsZWRIb3VycyAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgLy8gd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpLnRoZW4oZGF0YSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0pO1xuICAgIC8vICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIFwiVGltZXNoZWV0IEFuYWx5c2lzLnhsc3hcIik7XG4gICAgLy8gfSk7XG5cbn1cblxuY29uc3Qgc2V0VXBOZXdTaGVldCA9IChob3Vyc1dvcmtlZE1hcCwgd2Vla05hbWUsIHdvcmtib29rKSA9PiB7XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdID0ge307XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsID0gMDtcbiAgICBjb25zdCBzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCh3ZWVrTmFtZSk7XG4gICAgc2hlZXQudmlld3MgPSBbe31dO1xuICAgIHNoZWV0LnByb3BlcnRpZXMuZGVmYXVsdENvbFdpZHRoID0gMTU7XG4gICAgc2hlZXQucHJvcGVydGllcy5kZWZhdWx0Um93SGVpZ2h0ID0gMjA7XG4gICAgc2V0VXBDb2x1bW5zKHNoZWV0KTtcbn1cblxuY29uc3Qgc2V0VXBDb2x1bW5zID0gKHdvcmtzaGVldCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMSk7XG4gICAgZmlyc3ROYW1lLmhlYWRlciA9IFwiRmlyc3QgTmFtZVwiO1xuICAgIGZpcnN0TmFtZS5rZXkgPSBcImZpcnN0TmFtZVwiO1xuXG4gICAgY29uc3QgbGFzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDIpO1xuICAgIGxhc3ROYW1lLmhlYWRlciA9IFwiTGFzdCBOYW1lXCI7XG4gICAgbGFzdE5hbWUua2V5ID0gXCJsYXN0TmFtZVwiO1xuXG4gICAgY29uc3QgaG91cnNXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDMpO1xuICAgIGhvdXJzV29ya2VkLmhlYWRlciA9IFwiSG91cnMgV29ya2VkXCI7XG4gICAgaG91cnNXb3JrZWQua2V5ID0gXCJob3Vyc1dvcmtlZFwiO1xuXG4gICAgY29uc3QgaG91cnNTY2hlZHVsZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDQpO1xuICAgIGhvdXJzU2NoZWR1bGVkLmhlYWRlciA9IFwiSG91cnMgU2NoZWR1bGVkXCI7XG4gICAgaG91cnNTY2hlZHVsZWQua2V5ID0gXCJob3Vyc1NjaGVkdWxlZFwiO1xuXG5cbiAgICBjb25zdCBwZXJjZW50V29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbig1KTtcbiAgICBwZXJjZW50V29ya2VkLmhlYWRlciA9IFwiUGVyY2VudCBXb3JrZWRcIjtcbiAgICBwZXJjZW50V29ya2VkLmtleSA9IFwicGVyY2VudFdvcmtlZFwiO1xuXG4gICAgY29uc3QgY2hhbmdlRnJvbVByZXZpb3VzV2VlayA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNik7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay5oZWFkZXIgPSBcIkNoYW5nZSBmcm9tIExhc3QgV2Vla1wiO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsua2V5ID0gXCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrXCI7XG5cbiAgICBjb25zdCB0YUFzc2lnbmVkID0gd29ya3NoZWV0LmdldENvbHVtbig3KTtcbiAgICB0YUFzc2lnbmVkLmhlYWRlciA9IFwiVEFcIjtcbiAgICB0YUFzc2lnbmVkLmtleSA9IFwidGFcIjtcblxuICAgIGNvbnN0IHRvdGFsV29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbig5KTtcbiAgICB0b3RhbFdvcmtlZC5oZWFkZXIgPSBcIlRvdGFsIFdvcmtlZFwiO1xuICAgIHRvdGFsV29ya2VkLmtleSA9IFwidG90YWxXb3JrZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsU2NoZWR1bGVkID0gd29ya3NoZWV0LmdldENvbHVtbigxMCk7XG4gICAgdG90YWxTY2hlZHVsZWQuaGVhZGVyID0gXCJUb3RhbCBTY2hlZHVsZWRcIjtcbiAgICB0b3RhbFNjaGVkdWxlZC5rZXkgPSBcInRvdGFsU2NoZWR1bGVkXCI7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDExKTtcbiAgICB0b3RhbFBlcmNlbnRXb3JrZWQuaGVhZGVyID0gXCJQZXJjZW50IFdvcmtlZFwiO1xuICAgIHRvdGFsUGVyY2VudFdvcmtlZC5rZXkgPSBcInRvdGFsUGVyY2VudFdvcmtlZFwiO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50Q2hhbmdlID0gd29ya3NoZWV0LmdldENvbHVtbigxMik7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLmhlYWRlciA9IFwiQ2hhbmdlIGZyb20gTGFzdCBXZWVrXCI7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLmtleSA9IFwidG90YWxQZXJjZW50Q2hhbmdlXCI7XG5cbn1cblxuY29uc3QgcG9wdWxhdGVSb3cgPSAod29ya0Jvb2tEYXRhLCBjdXJyZW50SW50ZXJuRGF0YSwgcGVyY2VudGFnZUFjY2VwdGVkLCByb3cpID0+IHtcbiAgICBjb25zdCBjdXJyU2hlZXQgPSB3b3JrQm9va0RhdGEud29ya2Jvb2suZ2V0V29ya3NoZWV0KHdvcmtCb29rRGF0YS53ZWVrTmFtZSk7XG5cbiAgICBjb25zdCBbbm9ybWFsSG91cnNXb3JrZWQsIG5vcm1hbEhvdXJzU2NoZWR1bGVkLCBwZXJjZW50YWdlRGlmZmVyZW5jZV0gPSBwcm9jZXNzSG91cnNEYXRhKHJvdywgd29ya0Jvb2tEYXRhLnRpbWVTaGVldCwgd29ya0Jvb2tEYXRhLmN1cnJlbnRXZWVrLCBjdXJyZW50SW50ZXJuRGF0YS5mdWxsTmFtZSwgd29ya0Jvb2tEYXRhLndlZWtOYW1lLCB3b3JrQm9va0RhdGEuc2ltcGxpZmllZFNjaGVkdWxlKTtcblxuICAgIGNvbnN0IHBlcmNlbnRDaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gcHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsod29ya0Jvb2tEYXRhLCBjdXJyZW50SW50ZXJuRGF0YSk7XG5cbiAgICBjdXJyU2hlZXQuYWRkUm93KHtcbiAgICAgICAgZmlyc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5sYXN0TmFtZSxcbiAgICAgICAgaG91cnNXb3JrZWQ6IG5vcm1hbEhvdXJzV29ya2VkLFxuICAgICAgICBob3Vyc1NjaGVkdWxlZDogbm9ybWFsSG91cnNTY2hlZHVsZWQsXG4gICAgICAgIHBlcmNlbnRXb3JrZWQ6IHBlcmNlbnRhZ2VEaWZmZXJlbmNlLFxuICAgICAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrOiBwZXJjZW50Q2hhbmdlRnJvbVByZXZpb3VzV2VlayxcblxuICAgIH0pXG5cbiAgICBjb2xvclBlcmNlbnRhZ2VDZWxsKGN1cnJTaGVldCwgcGVyY2VudGFnZUFjY2VwdGVkKTtcblxufVxuXG5jb25zdCBwcm9jZXNzSG91cnNEYXRhID0gKHJvdywgdGltZVNoZWV0LCBjdXJyZW50V2VlaywgY3VycmVudEludGVybiwgd2Vla05hbWUsIHNpbXBsaWZpZWRTY2hlZHVsZSkgPT4ge1xuICAgIGNvbnN0IHBvdGVudGlhbFdvcmtIb3VycyA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMTUpLnZhbHVlO1xuICAgIGNvbnN0IHdvcmtIb3VycyA9IHBvdGVudGlhbFdvcmtIb3VycyA/IHBvdGVudGlhbFdvcmtIb3VycyA6IFwiMDA6MDBcIjtcblxuICAgIGN1cnJlbnRXZWVrW2N1cnJlbnRJbnRlcm5dID0geyBob3Vyc1dvcmtlZDogaG91cnNUb0RlY2ltYWwod29ya0hvdXJzKSB9O1xuICAgIGNvbnN0IGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV1bY3VycmVudEludGVybl07XG4gICAgY29uc3Qgbm9ybWFsSG91cnNTY2hlZHVsZWQgPSBkZWNpbWFsVG9Ib3VycyhkZWNpbWFsSG91cnNTY2hlZHVsZWQpO1xuXG4gICAgY29uc3Qgbm9ybWFsSG91cnNXb3JrZWQgPSB3b3JrSG91cnM7XG4gICAgY29uc3QgZGVjaW1hbEhvdXJzV29ya2VkID0gaG91cnNUb0RlY2ltYWwobm9ybWFsSG91cnNXb3JrZWQpO1xuICAgIGN1cnJlbnRXZWVrLnRvdGFsICs9IGRlY2ltYWxIb3Vyc1dvcmtlZDtcbiAgICBjb25zdCBwZXJjZW50YWdlRGlmZmVyZW5jZSA9IChkZWNpbWFsSG91cnNXb3JrZWQgLyBkZWNpbWFsSG91cnNTY2hlZHVsZWQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgY3VycmVudFdlZWtbY3VycmVudEludGVybl0ucGVyY2VudGFnZURpZmZlcmVuY2UgPSBwZXJjZW50YWdlRGlmZmVyZW5jZTtcbiAgICByZXR1cm4gW25vcm1hbEhvdXJzV29ya2VkLCBub3JtYWxIb3Vyc1NjaGVkdWxlZCwgcGVyY2VudGFnZURpZmZlcmVuY2VdO1xufVxuXG5jb25zdCBwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayA9ICh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhKSA9PiB7XG4gICAgY29uc3QgaG91cnNXb3JrZWRNYXAgPSB3b3JrQm9va0RhdGEuaG91cnNXb3JrZWRNYXA7XG4gICAgY29uc3QgY3VycldlZWsgPSB3b3JrQm9va0RhdGEud2Vla05hbWU7XG4gICAgY29uc3QgcHJldldlZWsgPSBnZXRXZWVrQmVmb3JlKGN1cnJXZWVrKTtcbiAgICBjb25zdCBjdXJyTmFtZSA9IGN1cnJlbnRJbnRlcm5EYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgY3VycmVudEludGVybkRhdGEubGFzdE5hbWU7XG4gICAgY29uc29sZS5sb2coY3VycmVudEludGVybkRhdGEuZmlyc3ROYW1lKTtcbiAgICBsZXQgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlaztcbiAgICBpZiAoaG91cnNXb3JrZWRNYXBbcHJldldlZWtdICkge1xuICAgICAgICBpZihob3Vyc1dvcmtlZE1hcFtwcmV2V2Vla11bY3VycmVudEludGVybkRhdGEuZnVsbE5hbWVdKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayA9IGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtjdXJyZW50SW50ZXJuRGF0YS5mdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgfVxuICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW2N1cnJXZWVrXVtjdXJyZW50SW50ZXJuRGF0YS5mdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgbGV0IGRpZmZlcmVuY2VGcm9tV2Vla3MgPSBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrID9cbiAgICAgICAgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayAtIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWspLnRvRml4ZWQoMikgOiBcIlwiO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2VGcm9tV2Vla3M7XG59XG5cbmNvbnN0IGNvbG9yUGVyY2VudGFnZUNlbGwgPSAoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyQ2VsbCA9IGN1cnJTaGVldC5nZXRDZWxsKGN1cnJTaGVldC5yb3dDb3VudCwgNSlcbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPCBwZXJjZW50YWdlQWNjZXB0ZWQpIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPiAxMDApIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWtlVGltZXNoZWV0QW5hbHlzaXM7Il0sIm5hbWVzIjpbIkV4Y2VsSlMiLCJGaWxlU2F2ZXIiLCJob3Vyc1RvRGVjaW1hbCIsImdldERhdGVGcm9tU3RyaW5nIiwiZGVjaW1hbFRvSG91cnMiLCJnZXRXZWVrQmVmb3JlIiwibWFrZVRpbWVzaGVldEFuYWx5c2lzIiwidGltZXNoZWV0RXhjZWwiLCJzaW1wbGlmaWVkU2NoZWR1bGUiLCJwZXJjZW50YWdlQWNjZXB0ZWQiLCJ3b3JrYm9vayIsIldvcmtib29rIiwiaG91cnNXb3JrZWRNYXAiLCJ0b3RhbCIsInRpbWVTaGVldCIsImdldFdvcmtzaGVldCIsImZpcnN0TmFtZSIsImdldENlbGwiLCJ2YWx1ZSIsImxhc3ROYW1lIiwiY3VycmVudEludGVybiIsInJvdyIsInJvd0NvdW50IiwidGVtcEZpcnN0TmFtZSIsInRlbXBMYXN0TmFtZSIsIndlZWtOYW1lIiwid2Vla1NjaGVkdWxlIiwic2V0VXBOZXdTaGVldCIsImN1cnJlbnRXZWVrIiwiY3VycmVudEludGVybkRhdGEiLCJmdWxsTmFtZSIsIndvcmtCb29rRGF0YSIsInBvcHVsYXRlUm93Iiwic2hlZXQiLCJhZGRXb3Jrc2hlZXQiLCJ2aWV3cyIsInByb3BlcnRpZXMiLCJkZWZhdWx0Q29sV2lkdGgiLCJkZWZhdWx0Um93SGVpZ2h0Iiwic2V0VXBDb2x1bW5zIiwid29ya3NoZWV0IiwiZ2V0Q29sdW1uIiwiaGVhZGVyIiwia2V5IiwiaG91cnNXb3JrZWQiLCJob3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRXb3JrZWQiLCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwidGFBc3NpZ25lZCIsInRvdGFsV29ya2VkIiwidG90YWxTY2hlZHVsZWQiLCJ0b3RhbFBlcmNlbnRXb3JrZWQiLCJ0b3RhbFBlcmNlbnRDaGFuZ2UiLCJjdXJyU2hlZXQiLCJub3JtYWxIb3Vyc1dvcmtlZCIsIm5vcm1hbEhvdXJzU2NoZWR1bGVkIiwicGVyY2VudGFnZURpZmZlcmVuY2UiLCJwcm9jZXNzSG91cnNEYXRhIiwicGVyY2VudENoYW5nZUZyb21QcmV2aW91c1dlZWsiLCJwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayIsImFkZFJvdyIsImNvbG9yUGVyY2VudGFnZUNlbGwiLCJwb3RlbnRpYWxXb3JrSG91cnMiLCJ3b3JrSG91cnMiLCJkZWNpbWFsSG91cnNTY2hlZHVsZWQiLCJkZWNpbWFsSG91cnNXb3JrZWQiLCJ0b0ZpeGVkIiwiY3VycldlZWsiLCJwcmV2V2VlayIsImN1cnJOYW1lIiwiY29uc29sZSIsImxvZyIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWsiLCJwZXJjZW50YWdlRGlmZmVyZW5jZU9mQ3VycmVudFdlZWsiLCJkaWZmZXJlbmNlRnJvbVdlZWtzIiwiY3VyckNlbGwiLCJwYXJzZUZsb2F0IiwiZmlsbCIsInR5cGUiLCJwYXR0ZXJuIiwiZmdDb2xvciIsImFyZ2IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});