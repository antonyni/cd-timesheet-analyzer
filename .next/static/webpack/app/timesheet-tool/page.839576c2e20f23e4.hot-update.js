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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    let hoursWorkedMap = {};\n    hoursWorkedMap.total = 0;\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    let firstName = timeSheet.getCell(2, 1).value;\n    let lastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = firstName + \" \" + lastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const tempFirstName = timeSheet.getCell(row, 1).value;\n        const tempLastName = timeSheet.getCell(row, 2).value;\n        if (tempFirstName && tempFirstName + \" \" + tempLastName != currentIntern) {\n            currentIntern = tempFirstName + \" \" + tempLastName;\n            firstName = tempFirstName;\n            lastName = tempLastName;\n        }\n        const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n        const weekSchedule = simplifiedSchedule[weekName];\n        if (weekSchedule && weekSchedule[currentIntern]) {\n            if (!hoursWorkedMap[weekName]) {\n                setUpNewSheet(hoursWorkedMap, weekName, workbook);\n            }\n            const currentWeek = hoursWorkedMap[weekName];\n            if (!currentWeek[currentIntern]) {\n                const currentInternData = {\n                    fullName: currentIntern,\n                    firstName: firstName,\n                    lastName: lastName\n                };\n                const workBookData = {\n                    workbook: workbook,\n                    weekName: weekName,\n                    timeSheet: timeSheet,\n                    currentWeek: currentWeek,\n                    hoursWorkedMap: hoursWorkedMap,\n                    simplifiedSchedule: simplifiedSchedule\n                };\n                populateRow(workBookData, currentInternData, percentageAccepted, row);\n            // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n            // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n            // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n            }\n        }\n    }\n    workbook.eachSheet((worksheet)=>{\n        const currWeek = worksheet.name;\n        for(let row = 2; row < worksheet.rowCount; row++){\n            const firstName = worksheet.getCell(row, 1).value;\n            const lastName = worksheet.getCell(row, 2).value;\n            const fullName = firstName + \" \" + lastName;\n            processChangeFromPreviousWeek(currWeek, worksheet, fullName, row, hoursWorkedMap);\n        }\n    });\n    workbook.xlsx.writeBuffer().then((data)=>{\n        const blob = new Blob([\n            data\n        ]);\n        file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(blob, \"Timesheet Analysis.xlsx\");\n    });\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    const [normalHoursWorked, normalHoursScheduled, percentageDifference] = processHoursData(row, workBookData.timeSheet, workBookData.currentWeek, currentInternData.fullName, workBookData.weekName, workBookData.simplifiedSchedule);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, currentWeek, currentIntern, weekName, simplifiedSchedule)=>{\n    const potentialWorkHours = timeSheet.getCell(row, 15).value;\n    const workHours = potentialWorkHours ? potentialWorkHours : \"00:00\";\n    currentWeek[currentIntern] = {\n        hoursWorked: (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(workHours)\n    };\n    const decimalHoursScheduled = simplifiedSchedule[weekName][currentIntern];\n    const normalHoursScheduled = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n    const normalHoursWorked = workHours;\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked);\n    currentWeek.total += decimalHoursWorked;\n    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    currentWeek[currentIntern].percentageDifference = percentageDifference;\n    return [\n        normalHoursWorked,\n        normalHoursScheduled,\n        percentageDifference\n    ];\n};\nconst processChangeFromPreviousWeek = (currWeek, worksheet, fullName, row, hoursWorkedMap)=>{\n    const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n    let percentageDifferenceOfPreviousWeek;\n    if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {\n        percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;\n    }\n    const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;\n    let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n    const currCell = worksheet.getCell(row, 6);\n    currCell.value = differenceFromWeeks;\n    if (currCell <= -15) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (currCell > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n    return differenceFromWeeks;\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLElBQUlZLGlCQUFpQixDQUFDO0lBQ3RCQSxlQUFlQyxLQUFLLEdBQUc7SUFFdkIsTUFBTUMsWUFBWVAsZUFBZVEsWUFBWSxDQUFDO0lBRTlDLElBQUlDLFlBQVlGLFVBQVVHLE9BQU8sQ0FBQyxHQUFHLEdBQUdDLEtBQUs7SUFDN0MsSUFBSUMsV0FBV0wsVUFBVUcsT0FBTyxDQUFDLEdBQUcsR0FBR0MsS0FBSztJQUM1QyxJQUFJRSxnQkFBZ0JKLFlBQVksTUFBTUc7SUFFdEMsSUFBSyxJQUFJRSxNQUFNLEdBQUdBLE9BQU9QLFVBQVVRLFFBQVEsRUFBRUQsTUFBTztRQUVoRCxNQUFNRSxnQkFBZ0JULFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3JELE1BQU1NLGVBQWVWLFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3BELElBQUlLLGlCQUNDQSxnQkFBZ0IsTUFBTUMsZ0JBQWdCSixlQUFnQjtZQUN2REEsZ0JBQWdCRyxnQkFBZ0IsTUFBTUM7WUFDdENSLFlBQVlPO1lBQ1pKLFdBQVdLO1FBQ2Y7UUFFQSxNQUFNQyxXQUFXdEIsOERBQWlCQSxDQUFDVyxVQUFVRyxPQUFPLENBQUNJLEtBQUssR0FBR0gsS0FBSztRQUNsRSxNQUFNUSxlQUFlbEIsa0JBQWtCLENBQUNpQixTQUFTO1FBRWpELElBQUlDLGdCQUFnQkEsWUFBWSxDQUFDTixjQUFjLEVBQUU7WUFDN0MsSUFBSSxDQUFDUixjQUFjLENBQUNhLFNBQVMsRUFBRTtnQkFDM0JFLGNBQWNmLGdCQUFnQmEsVUFBVWY7WUFDNUM7WUFF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QUVBLE1BQU1ULHNCQUFzQixDQUFDTixXQUFXdkQ7SUFDcEMsTUFBTXVFLFdBQVdoQixVQUFVL0MsT0FBTyxDQUFDK0MsVUFBVTFDLFFBQVEsRUFBRTtJQUN2RCxJQUFJZ0UsV0FBV04sWUFBWXZFLG9CQUFvQjtRQUMzQ3VFLFNBQVNDLElBQUksR0FBRztZQUNaQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsU0FBUztnQkFBRUMsTUFBTTtZQUFXO1FBQ2hDO0lBQ0o7SUFDQSxJQUFJQyxXQUFXTixZQUFZLEtBQUs7UUFDNUJBLFNBQVNDLElBQUksR0FBRztZQUNaQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsU0FBUztnQkFBRUMsTUFBTTtZQUFXO1FBQ2hDO0lBQ0o7QUFDSjtBQUdBLCtEQUFlL0UscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3g/OTVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcidcbmltcG9ydCBob3Vyc1RvRGVjaW1hbCBmcm9tICcuL2hvdXJzVG9EZWNpbWFsJztcbmltcG9ydCBnZXREYXRlRnJvbVN0cmluZyBmcm9tICcuL2dldERhdGVGcm9tU3RyaW5nJztcbmltcG9ydCBkZWNpbWFsVG9Ib3VycyBmcm9tICcuL2RlY2ltYWxUb0hvdXJzJztcbmltcG9ydCBnZXRXZWVrQmVmb3JlIGZyb20gJy4vZ2V0V2Vla0JlZm9yZSc7XG5cbmNvbnN0IG1ha2VUaW1lc2hlZXRBbmFseXNpcyA9ICh0aW1lc2hlZXRFeGNlbCwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XG4gICAgbGV0IGhvdXJzV29ya2VkTWFwID0ge307XG4gICAgaG91cnNXb3JrZWRNYXAudG90YWwgPSAwO1xuXG4gICAgY29uc3QgdGltZVNoZWV0ID0gdGltZXNoZWV0RXhjZWwuZ2V0V29ya3NoZWV0KFwiQWxsIEVtcGxveWVlc1wiKTtcblxuICAgIGxldCBmaXJzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbCgyLCAxKS52YWx1ZTtcbiAgICBsZXQgbGFzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbCgyLCAyKS52YWx1ZVxuICAgIGxldCBjdXJyZW50SW50ZXJuID0gZmlyc3ROYW1lICsgXCIgXCIgKyBsYXN0TmFtZTtcblxuICAgIGZvciAobGV0IHJvdyA9IDI7IHJvdyA8PSB0aW1lU2hlZXQucm93Q291bnQ7IHJvdysrKSB7XG5cbiAgICAgICAgY29uc3QgdGVtcEZpcnN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMSkudmFsdWU7XG4gICAgICAgIGNvbnN0IHRlbXBMYXN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMikudmFsdWU7XG4gICAgICAgIGlmICh0ZW1wRmlyc3ROYW1lICYmXG4gICAgICAgICAgICAodGVtcEZpcnN0TmFtZSArIFwiIFwiICsgdGVtcExhc3ROYW1lICE9IGN1cnJlbnRJbnRlcm4pKSB7XG4gICAgICAgICAgICBjdXJyZW50SW50ZXJuID0gdGVtcEZpcnN0TmFtZSArIFwiIFwiICsgdGVtcExhc3ROYW1lO1xuICAgICAgICAgICAgZmlyc3ROYW1lID0gdGVtcEZpcnN0TmFtZTtcbiAgICAgICAgICAgIGxhc3ROYW1lID0gdGVtcExhc3ROYW1lXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ZWVrTmFtZSA9IGdldERhdGVGcm9tU3RyaW5nKHRpbWVTaGVldC5nZXRDZWxsKHJvdywgNSkudmFsdWUpO1xuICAgICAgICBjb25zdCB3ZWVrU2NoZWR1bGUgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdO1xuXG4gICAgICAgIGlmICh3ZWVrU2NoZWR1bGUgJiYgd2Vla1NjaGVkdWxlW2N1cnJlbnRJbnRlcm5dKSB7XG4gICAgICAgICAgICBpZiAoIWhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSkge1xuICAgICAgICAgICAgICAgIHNldFVwTmV3U2hlZXQoaG91cnNXb3JrZWRNYXAsIHdlZWtOYW1lLCB3b3JrYm9vayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXZWVrID0gaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnRlcm5EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogY3VycmVudEludGVybixcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrQm9va0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtib29rOiB3b3JrYm9vayxcbiAgICAgICAgICAgICAgICAgICAgd2Vla05hbWU6IHdlZWtOYW1lLFxuICAgICAgICAgICAgICAgICAgICB0aW1lU2hlZXQ6IHRpbWVTaGVldCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdlZWs6IGN1cnJlbnRXZWVrLFxuICAgICAgICAgICAgICAgICAgICBob3Vyc1dvcmtlZE1hcDogaG91cnNXb3JrZWRNYXAsXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsaWZpZWRTY2hlZHVsZTogc2ltcGxpZmllZFNjaGVkdWxlLFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvcHVsYXRlUm93KHdvcmtCb29rRGF0YSwgY3VycmVudEludGVybkRhdGEsIHBlcmNlbnRhZ2VBY2NlcHRlZCwgcm93KTtcbiAgICAgICAgICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCA5KS52YWx1ZSA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbDtcbiAgICAgICAgICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCAxMCkudmFsdWUgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLnRvdGFsU2NoZWR1bGVkSG91cnM7XG4gICAgICAgICAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgMTEpLnZhbHVlID0gKGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbCAvIHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxTY2hlZHVsZWRIb3VycyAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIHdvcmtib29rLmVhY2hTaGVldCgod29ya3NoZWV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJXZWVrID0gd29ya3NoZWV0Lm5hbWU7XG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMjsgcm93IDwgd29ya3NoZWV0LnJvd0NvdW50OyByb3crKykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gd29ya3NoZWV0LmdldENlbGwocm93LCAxKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gd29ya3NoZWV0LmdldENlbGwocm93LCAyKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWU7XG4gICAgICAgICAgICBwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayhjdXJyV2Vlaywgd29ya3NoZWV0LCBmdWxsTmFtZSwgcm93LCBob3Vyc1dvcmtlZE1hcCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSk7XG4gICAgICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgXCJUaW1lc2hlZXQgQW5hbHlzaXMueGxzeFwiKTtcbiAgICB9KTtcblxufVxuXG5jb25zdCBzZXRVcE5ld1NoZWV0ID0gKGhvdXJzV29ya2VkTWFwLCB3ZWVrTmFtZSwgd29ya2Jvb2spID0+IHtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0gPSB7fTtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwgPSAwO1xuICAgIGNvbnN0IHNoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KHdlZWtOYW1lKTtcbiAgICBzaGVldC52aWV3cyA9IFt7fV07XG4gICAgc2hlZXQucHJvcGVydGllcy5kZWZhdWx0Q29sV2lkdGggPSAxNTtcbiAgICBzaGVldC5wcm9wZXJ0aWVzLmRlZmF1bHRSb3dIZWlnaHQgPSAyMDtcbiAgICBzZXRVcENvbHVtbnMoc2hlZXQpO1xufVxuXG5jb25zdCBzZXRVcENvbHVtbnMgPSAod29ya3NoZWV0KSA9PiB7XG4gICAgY29uc3QgZmlyc3ROYW1lID0gd29ya3NoZWV0LmdldENvbHVtbigxKTtcbiAgICBmaXJzdE5hbWUuaGVhZGVyID0gXCJGaXJzdCBOYW1lXCI7XG4gICAgZmlyc3ROYW1lLmtleSA9IFwiZmlyc3ROYW1lXCI7XG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMik7XG4gICAgbGFzdE5hbWUuaGVhZGVyID0gXCJMYXN0IE5hbWVcIjtcbiAgICBsYXN0TmFtZS5rZXkgPSBcImxhc3ROYW1lXCI7XG5cbiAgICBjb25zdCBob3Vyc1dvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMyk7XG4gICAgaG91cnNXb3JrZWQuaGVhZGVyID0gXCJIb3VycyBXb3JrZWRcIjtcbiAgICBob3Vyc1dvcmtlZC5rZXkgPSBcImhvdXJzV29ya2VkXCI7XG5cbiAgICBjb25zdCBob3Vyc1NjaGVkdWxlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNCk7XG4gICAgaG91cnNTY2hlZHVsZWQuaGVhZGVyID0gXCJIb3VycyBTY2hlZHVsZWRcIjtcbiAgICBob3Vyc1NjaGVkdWxlZC5rZXkgPSBcImhvdXJzU2NoZWR1bGVkXCI7XG5cblxuICAgIGNvbnN0IHBlcmNlbnRXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDUpO1xuICAgIHBlcmNlbnRXb3JrZWQuaGVhZGVyID0gXCJQZXJjZW50IFdvcmtlZFwiO1xuICAgIHBlcmNlbnRXb3JrZWQua2V5ID0gXCJwZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gd29ya3NoZWV0LmdldENvbHVtbig2KTtcbiAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrLmhlYWRlciA9IFwiQ2hhbmdlIGZyb20gTGFzdCBXZWVrXCI7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay5rZXkgPSBcImNoYW5nZUZyb21QcmV2aW91c1dlZWtcIjtcblxuICAgIGNvbnN0IHRhQXNzaWduZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDcpO1xuICAgIHRhQXNzaWduZWQuaGVhZGVyID0gXCJUQVwiO1xuICAgIHRhQXNzaWduZWQua2V5ID0gXCJ0YVwiO1xuXG4gICAgY29uc3QgdG90YWxXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDkpO1xuICAgIHRvdGFsV29ya2VkLmhlYWRlciA9IFwiVG90YWwgV29ya2VkXCI7XG4gICAgdG90YWxXb3JrZWQua2V5ID0gXCJ0b3RhbFdvcmtlZFwiO1xuXG4gICAgY29uc3QgdG90YWxTY2hlZHVsZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEwKTtcbiAgICB0b3RhbFNjaGVkdWxlZC5oZWFkZXIgPSBcIlRvdGFsIFNjaGVkdWxlZFwiO1xuICAgIHRvdGFsU2NoZWR1bGVkLmtleSA9IFwidG90YWxTY2hlZHVsZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTEpO1xuICAgIHRvdGFsUGVyY2VudFdvcmtlZC5oZWFkZXIgPSBcIlBlcmNlbnQgV29ya2VkXCI7XG4gICAgdG90YWxQZXJjZW50V29ya2VkLmtleSA9IFwidG90YWxQZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRDaGFuZ2UgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEyKTtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2UuaGVhZGVyID0gXCJDaGFuZ2UgZnJvbSBMYXN0IFdlZWtcIjtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2Uua2V5ID0gXCJ0b3RhbFBlcmNlbnRDaGFuZ2VcIjtcblxufVxuXG5jb25zdCBwb3B1bGF0ZVJvdyA9ICh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHJvdykgPT4ge1xuICAgIGNvbnN0IGN1cnJTaGVldCA9IHdvcmtCb29rRGF0YS53b3JrYm9vay5nZXRXb3Jrc2hlZXQod29ya0Jvb2tEYXRhLndlZWtOYW1lKTtcblxuICAgIGNvbnN0IFtub3JtYWxIb3Vyc1dvcmtlZCwgbm9ybWFsSG91cnNTY2hlZHVsZWQsIHBlcmNlbnRhZ2VEaWZmZXJlbmNlXSA9IHByb2Nlc3NIb3Vyc0RhdGEocm93LCB3b3JrQm9va0RhdGEudGltZVNoZWV0LCB3b3JrQm9va0RhdGEuY3VycmVudFdlZWssIGN1cnJlbnRJbnRlcm5EYXRhLmZ1bGxOYW1lLCB3b3JrQm9va0RhdGEud2Vla05hbWUsIHdvcmtCb29rRGF0YS5zaW1wbGlmaWVkU2NoZWR1bGUpO1xuXG5cbiAgICBjdXJyU2hlZXQuYWRkUm93KHtcbiAgICAgICAgZmlyc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5sYXN0TmFtZSxcbiAgICAgICAgaG91cnNXb3JrZWQ6IG5vcm1hbEhvdXJzV29ya2VkLFxuICAgICAgICBob3Vyc1NjaGVkdWxlZDogbm9ybWFsSG91cnNTY2hlZHVsZWQsXG4gICAgICAgIHBlcmNlbnRXb3JrZWQ6IHBlcmNlbnRhZ2VEaWZmZXJlbmNlLFxuXG4gICAgfSlcblxuICAgIGNvbG9yUGVyY2VudGFnZUNlbGwoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpO1xuXG59XG5cbmNvbnN0IHByb2Nlc3NIb3Vyc0RhdGEgPSAocm93LCB0aW1lU2hlZXQsIGN1cnJlbnRXZWVrLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlKSA9PiB7XG4gICAgY29uc3QgcG90ZW50aWFsV29ya0hvdXJzID0gdGltZVNoZWV0LmdldENlbGwocm93LCAxNSkudmFsdWU7XG4gICAgY29uc3Qgd29ya0hvdXJzID0gcG90ZW50aWFsV29ya0hvdXJzID8gcG90ZW50aWFsV29ya0hvdXJzIDogXCIwMDowMFwiO1xuXG4gICAgY3VycmVudFdlZWtbY3VycmVudEludGVybl0gPSB7IGhvdXJzV29ya2VkOiBob3Vyc1RvRGVjaW1hbCh3b3JrSG91cnMpIH07XG4gICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXVtjdXJyZW50SW50ZXJuXTtcbiAgICBjb25zdCBub3JtYWxIb3Vyc1NjaGVkdWxlZCA9IGRlY2ltYWxUb0hvdXJzKGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCk7XG5cbiAgICBjb25zdCBub3JtYWxIb3Vyc1dvcmtlZCA9IHdvcmtIb3VycztcbiAgICBjb25zdCBkZWNpbWFsSG91cnNXb3JrZWQgPSBob3Vyc1RvRGVjaW1hbChub3JtYWxIb3Vyc1dvcmtlZCk7XG4gICAgY3VycmVudFdlZWsudG90YWwgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gKGRlY2ltYWxIb3Vyc1dvcmtlZCAvIGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICBjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXS5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IHBlcmNlbnRhZ2VEaWZmZXJlbmNlO1xuICAgIHJldHVybiBbbm9ybWFsSG91cnNXb3JrZWQsIG5vcm1hbEhvdXJzU2NoZWR1bGVkLCBwZXJjZW50YWdlRGlmZmVyZW5jZV07XG59XG5cbmNvbnN0IHByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gKGN1cnJXZWVrLCB3b3Jrc2hlZXQsIGZ1bGxOYW1lLCByb3csIGhvdXJzV29ya2VkTWFwKSA9PiB7XG4gICAgY29uc3QgcHJldldlZWsgPSBnZXRXZWVrQmVmb3JlKGN1cnJXZWVrKTtcbiAgICBsZXQgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlaztcbiAgICBpZiAoaG91cnNXb3JrZWRNYXBbcHJldldlZWtdICYmIGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtmdWxsTmFtZV0pIHtcbiAgICAgICAgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayA9IGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtmdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgfVxuICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW2N1cnJXZWVrXVtmdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgbGV0IGRpZmZlcmVuY2VGcm9tV2Vla3MgPSBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrID9cbiAgICAgICAgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayAtIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWspLnRvRml4ZWQoMikgOiBcIlwiO1xuXG4gICAgY29uc3QgY3VyckNlbGwgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDYpO1xuICAgIGN1cnJDZWxsLnZhbHVlID0gZGlmZmVyZW5jZUZyb21XZWVrcztcblxuICAgIGlmIChjdXJyQ2VsbCA8PSAtMTUpIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoY3VyckNlbGwgPiAxMDApIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBkaWZmZXJlbmNlRnJvbVdlZWtzO1xufVxuXG5jb25zdCBjb2xvclBlcmNlbnRhZ2VDZWxsID0gKGN1cnJTaGVldCwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3QgY3VyckNlbGwgPSBjdXJyU2hlZXQuZ2V0Q2VsbChjdXJyU2hlZXQucm93Q291bnQsIDUpXG4gICAgaWYgKHBhcnNlRmxvYXQoY3VyckNlbGwpIDwgcGVyY2VudGFnZUFjY2VwdGVkKSB7XG4gICAgICAgIGN1cnJDZWxsLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgZmdDb2xvcjogeyBhcmdiOiAnODBlNzYwNjAnIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHBhcnNlRmxvYXQoY3VyckNlbGwpID4gMTAwKSB7XG4gICAgICAgIGN1cnJDZWxsLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgZmdDb2xvcjogeyBhcmdiOiAnODA0MmY1OGQnIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVRpbWVzaGVldEFuYWx5c2lzOyJdLCJuYW1lcyI6WyJFeGNlbEpTIiwiRmlsZVNhdmVyIiwiaG91cnNUb0RlY2ltYWwiLCJnZXREYXRlRnJvbVN0cmluZyIsImRlY2ltYWxUb0hvdXJzIiwiZ2V0V2Vla0JlZm9yZSIsIm1ha2VUaW1lc2hlZXRBbmFseXNpcyIsInRpbWVzaGVldEV4Y2VsIiwic2ltcGxpZmllZFNjaGVkdWxlIiwicGVyY2VudGFnZUFjY2VwdGVkIiwid29ya2Jvb2siLCJXb3JrYm9vayIsImhvdXJzV29ya2VkTWFwIiwidG90YWwiLCJ0aW1lU2hlZXQiLCJnZXRXb3Jrc2hlZXQiLCJmaXJzdE5hbWUiLCJnZXRDZWxsIiwidmFsdWUiLCJsYXN0TmFtZSIsImN1cnJlbnRJbnRlcm4iLCJyb3ciLCJyb3dDb3VudCIsInRlbXBGaXJzdE5hbWUiLCJ0ZW1wTGFzdE5hbWUiLCJ3ZWVrTmFtZSIsIndlZWtTY2hlZHVsZSIsInNldFVwTmV3U2hlZXQiLCJjdXJyZW50V2VlayIsImN1cnJlbnRJbnRlcm5EYXRhIiwiZnVsbE5hbWUiLCJ3b3JrQm9va0RhdGEiLCJwb3B1bGF0ZVJvdyIsImVhY2hTaGVldCIsIndvcmtzaGVldCIsImN1cnJXZWVrIiwibmFtZSIsInByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwieGxzeCIsIndyaXRlQnVmZmVyIiwidGhlbiIsImRhdGEiLCJibG9iIiwiQmxvYiIsInNhdmVBcyIsInNoZWV0IiwiYWRkV29ya3NoZWV0Iiwidmlld3MiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdENvbFdpZHRoIiwiZGVmYXVsdFJvd0hlaWdodCIsInNldFVwQ29sdW1ucyIsImdldENvbHVtbiIsImhlYWRlciIsImtleSIsImhvdXJzV29ya2VkIiwiaG91cnNTY2hlZHVsZWQiLCJwZXJjZW50V29ya2VkIiwiY2hhbmdlRnJvbVByZXZpb3VzV2VlayIsInRhQXNzaWduZWQiLCJ0b3RhbFdvcmtlZCIsInRvdGFsU2NoZWR1bGVkIiwidG90YWxQZXJjZW50V29ya2VkIiwidG90YWxQZXJjZW50Q2hhbmdlIiwiY3VyclNoZWV0Iiwibm9ybWFsSG91cnNXb3JrZWQiLCJub3JtYWxIb3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlIiwicHJvY2Vzc0hvdXJzRGF0YSIsImFkZFJvdyIsImNvbG9yUGVyY2VudGFnZUNlbGwiLCJwb3RlbnRpYWxXb3JrSG91cnMiLCJ3b3JrSG91cnMiLCJkZWNpbWFsSG91cnNTY2hlZHVsZWQiLCJkZWNpbWFsSG91cnNXb3JrZWQiLCJ0b0ZpeGVkIiwicHJldldlZWsiLCJwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrIiwicGVyY2VudGFnZURpZmZlcmVuY2VPZkN1cnJlbnRXZWVrIiwiZGlmZmVyZW5jZUZyb21XZWVrcyIsImN1cnJDZWxsIiwiZmlsbCIsInR5cGUiLCJwYXR0ZXJuIiwiZmdDb2xvciIsImFyZ2IiLCJwYXJzZUZsb2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});