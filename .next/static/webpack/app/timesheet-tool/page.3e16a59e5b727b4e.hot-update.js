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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    let hoursWorkedMap = {};\n    hoursWorkedMap.total = 0;\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    let firstName = timeSheet.getCell(2, 1).value;\n    let lastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = firstName + \" \" + lastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const tempFirstName = timeSheet.getCell(row, 1).value;\n        const tempLastName = timeSheet.getCell(row, 2).value;\n        if (tempFirstName && tempFirstName + \" \" + tempLastName != currentIntern) {\n            currentIntern = tempFirstName + \" \" + tempLastName;\n            firstName = tempFirstName;\n            lastName = tempLastName;\n        }\n        const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n        const weekSchedule = simplifiedSchedule[weekName];\n        if (weekSchedule && weekSchedule[currentIntern]) {\n            if (!hoursWorkedMap[weekName]) {\n                setUpNewSheet(hoursWorkedMap, weekName, workbook);\n            }\n            const currentWeek = hoursWorkedMap[weekName];\n            if (!currentWeek[currentIntern]) {\n                const currentInternData = {\n                    fullName: currentIntern,\n                    firstName: firstName,\n                    lastName: lastName\n                };\n                const workBookData = {\n                    workbook: workbook,\n                    weekName: weekName,\n                    timeSheet: timeSheet,\n                    currentWeek: currentWeek,\n                    hoursWorkedMap: hoursWorkedMap,\n                    simplifiedSchedule: simplifiedSchedule\n                };\n                populateRow(workBookData, currentInternData, percentageAccepted, row);\n            // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n            // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n            // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n            }\n        }\n    }\n// workbook.xlsx.writeBuffer().then(data => {\n//     const blob = new Blob([data]);\n//     FileSaver.saveAs(blob, \"Timesheet Analysis.xlsx\");\n// });\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    const [normalHoursWorked, normalHoursScheduled, percentageDifference] = processHoursData(row, workBookData.timeSheet, workBookData.currentWeek, currentInternData.fullName, workBookData.weekName, workBookData.simplifiedSchedule);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, currentWeek, currentIntern, weekName, simplifiedSchedule)=>{\n    const potentialWorkHours = timeSheet.getCell(row, 15).value;\n    const workHours = potentialWorkHours ? potentialWorkHours : \"00:00\";\n    currentWeek[currentIntern] = {\n        hoursWorked: (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(workHours)\n    };\n    const decimalHoursScheduled = simplifiedSchedule[weekName][currentIntern];\n    const normalHoursScheduled = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n    const normalHoursWorked = workHours;\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked);\n    currentWeek.total += decimalHoursWorked;\n    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    currentWeek[currentIntern].percentageDifference = percentageDifference;\n    return [\n        normalHoursWorked,\n        normalHoursScheduled,\n        percentageDifference\n    ];\n};\nconst processChangeFromPreviousWeek = (workBookData, currentInternData)=>{\n    const currWeek = workBookData.weekName;\n    const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n    let percentageDifferenceOfPreviousWeek;\n    if (workBookData.hoursWorkedMap[prevWeek]) {\n        console.log(currWeek);\n        console.log(workBookData.hoursWorkedMap[currWeek]);\n        console.log(prevWeek);\n        console.log(workBookData.hoursWorkedMap[prevWeek]);\n        if (workBookData.hoursWorkedMap[prevWeek][currentInternData.fullName]) {\n            console.log(\"hi\");\n        }\n    }\n    const percentageDifferenceOfCurrentWeek = workBookData.hoursWorkedMap[currWeek][currentInternData.fullName].percentageDifference;\n    let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n    return differenceFromWeeks;\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLElBQUlZLGlCQUFpQixDQUFDO0lBQ3RCQSxlQUFlQyxLQUFLLEdBQUc7SUFFdkIsTUFBTUMsWUFBWVAsZUFBZVEsWUFBWSxDQUFDO0lBRTlDLElBQUlDLFlBQVlGLFVBQVVHLE9BQU8sQ0FBQyxHQUFHLEdBQUdDLEtBQUs7SUFDN0MsSUFBSUMsV0FBV0wsVUFBVUcsT0FBTyxDQUFDLEdBQUcsR0FBR0MsS0FBSztJQUM1QyxJQUFJRSxnQkFBZ0JKLFlBQVksTUFBTUc7SUFFdEMsSUFBSyxJQUFJRSxNQUFNLEdBQUdBLE9BQU9QLFVBQVVRLFFBQVEsRUFBRUQsTUFBTztRQUVoRCxNQUFNRSxnQkFBZ0JULFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3JELE1BQU1NLGVBQWVWLFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3BELElBQUlLLGlCQUNDQSxnQkFBZ0IsTUFBTUMsZ0JBQWdCSixlQUFnQjtZQUN2REEsZ0JBQWdCRyxnQkFBZ0IsTUFBTUM7WUFDdENSLFlBQVlPO1lBQ1pKLFdBQVdLO1FBQ2Y7UUFFQSxNQUFNQyxXQUFXdEIsOERBQWlCQSxDQUFDVyxVQUFVRyxPQUFPLENBQUNJLEtBQUssR0FBR0gsS0FBSztRQUNsRSxNQUFNUSxlQUFlbEIsa0JBQWtCLENBQUNpQixTQUFTO1FBRWpELElBQUlDLGdCQUFnQkEsWUFBWSxDQUFDTixjQUFjLEVBQUU7WUFDN0MsSUFBSSxDQUFDUixjQUFjLENBQUNhLFNBQVMsRUFBRTtnQkFDM0JFLGNBQWNmLGdCQUFnQmEsVUFBVWY7WUFDNUM7WUFF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R0FBRyxDQUFDSjtRQUNaRyxRQUFRQyxHQUFHLENBQUN2QyxhQUFhbkIsY0FBYyxDQUFDc0QsU0FBUztRQUNqREcsUUFBUUMsR0FBRyxDQUFDSDtRQUNaRSxRQUFRQyxHQUFHLENBQUN2QyxhQUFhbkIsY0FBYyxDQUFDdUQsU0FBUztRQUNqRCxJQUFHcEMsYUFBYW5CLGNBQWMsQ0FBQ3VELFNBQVMsQ0FBQ3RDLGtCQUFrQkMsUUFBUSxDQUFDLEVBQUM7WUFDakV1QyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUNBLE1BQU1DLG9DQUFvQ3hDLGFBQWFuQixjQUFjLENBQUNzRCxTQUFTLENBQUNyQyxrQkFBa0JDLFFBQVEsQ0FBQyxDQUFDMEIsb0JBQW9CO0lBQ2hJLElBQUlnQixzQkFBc0JKLHFDQUN0QixDQUFDRyxvQ0FBb0NILGtDQUFpQyxFQUFHSixPQUFPLENBQUMsS0FBSztJQUUxRixPQUFPUTtBQUNYO0FBRUEsTUFBTWIsc0JBQXNCLENBQUNOLFdBQVc1QztJQUNwQyxNQUFNZ0UsV0FBV3BCLFVBQVVwQyxPQUFPLENBQUNvQyxVQUFVL0IsUUFBUSxFQUFFO0lBQ3ZELElBQUlvRCxXQUFXRCxZQUFZaEUsb0JBQW9CO1FBQzNDZ0UsU0FBU0UsSUFBSSxHQUFHO1lBQ1pDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxTQUFTO2dCQUFFQyxNQUFNO1lBQVc7UUFDaEM7SUFDSjtJQUNBLElBQUlMLFdBQVdELFlBQVksS0FBSztRQUM1QkEsU0FBU0UsSUFBSSxHQUFHO1lBQ1pDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxTQUFTO2dCQUFFQyxNQUFNO1lBQVc7UUFDaEM7SUFDSjtBQUNKO0FBR0EsK0RBQWV6RSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvbWFrZVRpbWVTaGVldEFuYWx5c2lzLmpzeD85NWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4Y2VsSlMgZnJvbSAnZXhjZWxqcydcbmltcG9ydCAqIGFzIEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xuaW1wb3J0IGhvdXJzVG9EZWNpbWFsIGZyb20gJy4vaG91cnNUb0RlY2ltYWwnO1xuaW1wb3J0IGdldERhdGVGcm9tU3RyaW5nIGZyb20gJy4vZ2V0RGF0ZUZyb21TdHJpbmcnO1xuaW1wb3J0IGRlY2ltYWxUb0hvdXJzIGZyb20gJy4vZGVjaW1hbFRvSG91cnMnO1xuaW1wb3J0IGdldFdlZWtCZWZvcmUgZnJvbSAnLi9nZXRXZWVrQmVmb3JlJztcblxuY29uc3QgbWFrZVRpbWVzaGVldEFuYWx5c2lzID0gKHRpbWVzaGVldEV4Y2VsLCBzaW1wbGlmaWVkU2NoZWR1bGUsIHBlcmNlbnRhZ2VBY2NlcHRlZCkgPT4ge1xuICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcbiAgICBsZXQgaG91cnNXb3JrZWRNYXAgPSB7fTtcbiAgICBob3Vyc1dvcmtlZE1hcC50b3RhbCA9IDA7XG5cbiAgICBjb25zdCB0aW1lU2hlZXQgPSB0aW1lc2hlZXRFeGNlbC5nZXRXb3Jrc2hlZXQoXCJBbGwgRW1wbG95ZWVzXCIpO1xuXG4gICAgbGV0IGZpcnN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKDIsIDEpLnZhbHVlO1xuICAgIGxldCBsYXN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKDIsIDIpLnZhbHVlXG4gICAgbGV0IGN1cnJlbnRJbnRlcm4gPSBmaXJzdE5hbWUgKyBcIiBcIiArIGxhc3ROYW1lO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMjsgcm93IDw9IHRpbWVTaGVldC5yb3dDb3VudDsgcm93KyspIHtcblxuICAgICAgICBjb25zdCB0ZW1wRmlyc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwocm93LCAxKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGVtcExhc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwocm93LCAyKS52YWx1ZTtcbiAgICAgICAgaWYgKHRlbXBGaXJzdE5hbWUgJiZcbiAgICAgICAgICAgICh0ZW1wRmlyc3ROYW1lICsgXCIgXCIgKyB0ZW1wTGFzdE5hbWUgIT0gY3VycmVudEludGVybikpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbnRlcm4gPSB0ZW1wRmlyc3ROYW1lICsgXCIgXCIgKyB0ZW1wTGFzdE5hbWU7XG4gICAgICAgICAgICBmaXJzdE5hbWUgPSB0ZW1wRmlyc3ROYW1lO1xuICAgICAgICAgICAgbGFzdE5hbWUgPSB0ZW1wTGFzdE5hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdlZWtOYW1lID0gZ2V0RGF0ZUZyb21TdHJpbmcodGltZVNoZWV0LmdldENlbGwocm93LCA1KS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHdlZWtTY2hlZHVsZSA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV07XG5cbiAgICAgICAgaWYgKHdlZWtTY2hlZHVsZSAmJiB3ZWVrU2NoZWR1bGVbY3VycmVudEludGVybl0pIHtcbiAgICAgICAgICAgIGlmICghaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdKSB7XG4gICAgICAgICAgICAgICAgc2V0VXBOZXdTaGVldChob3Vyc1dvcmtlZE1hcCwgd2Vla05hbWUsIHdvcmtib29rKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFdlZWsgPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV07XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRXZWVrW2N1cnJlbnRJbnRlcm5dKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEludGVybkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiBjdXJyZW50SW50ZXJuLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtCb29rRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2Jvb2s6IHdvcmtib29rLFxuICAgICAgICAgICAgICAgICAgICB3ZWVrTmFtZTogd2Vla05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVTaGVldDogdGltZVNoZWV0LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2VlazogY3VycmVudFdlZWssXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzV29ya2VkTWFwOiBob3Vyc1dvcmtlZE1hcCxcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxpZmllZFNjaGVkdWxlOiBzaW1wbGlmaWVkU2NoZWR1bGUsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcG9wdWxhdGVSb3cod29ya0Jvb2tEYXRhLCBjdXJyZW50SW50ZXJuRGF0YSwgcGVyY2VudGFnZUFjY2VwdGVkLCByb3cpO1xuICAgICAgICAgICAgICAgIC8vIGN1cnJTaGVldC5nZXRDZWxsKDIsIDkpLnZhbHVlID0gaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsO1xuICAgICAgICAgICAgICAgIC8vIGN1cnJTaGVldC5nZXRDZWxsKDIsIDEwKS52YWx1ZSA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxTY2hlZHVsZWRIb3VycztcbiAgICAgICAgICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCAxMSkudmFsdWUgPSAoaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsIC8gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS50b3RhbFNjaGVkdWxlZEhvdXJzICogMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICAvLyB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCkudGhlbihkYXRhID0+IHtcbiAgICAvLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSk7XG4gICAgLy8gICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgXCJUaW1lc2hlZXQgQW5hbHlzaXMueGxzeFwiKTtcbiAgICAvLyB9KTtcblxufVxuXG5jb25zdCBzZXRVcE5ld1NoZWV0ID0gKGhvdXJzV29ya2VkTWFwLCB3ZWVrTmFtZSwgd29ya2Jvb2spID0+IHtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0gPSB7fTtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwgPSAwO1xuICAgIGNvbnN0IHNoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KHdlZWtOYW1lKTtcbiAgICBzaGVldC52aWV3cyA9IFt7fV07XG4gICAgc2hlZXQucHJvcGVydGllcy5kZWZhdWx0Q29sV2lkdGggPSAxNTtcbiAgICBzaGVldC5wcm9wZXJ0aWVzLmRlZmF1bHRSb3dIZWlnaHQgPSAyMDtcbiAgICBzZXRVcENvbHVtbnMoc2hlZXQpO1xufVxuXG5jb25zdCBzZXRVcENvbHVtbnMgPSAod29ya3NoZWV0KSA9PiB7XG4gICAgY29uc3QgZmlyc3ROYW1lID0gd29ya3NoZWV0LmdldENvbHVtbigxKTtcbiAgICBmaXJzdE5hbWUuaGVhZGVyID0gXCJGaXJzdCBOYW1lXCI7XG4gICAgZmlyc3ROYW1lLmtleSA9IFwiZmlyc3ROYW1lXCI7XG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMik7XG4gICAgbGFzdE5hbWUuaGVhZGVyID0gXCJMYXN0IE5hbWVcIjtcbiAgICBsYXN0TmFtZS5rZXkgPSBcImxhc3ROYW1lXCI7XG5cbiAgICBjb25zdCBob3Vyc1dvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMyk7XG4gICAgaG91cnNXb3JrZWQuaGVhZGVyID0gXCJIb3VycyBXb3JrZWRcIjtcbiAgICBob3Vyc1dvcmtlZC5rZXkgPSBcImhvdXJzV29ya2VkXCI7XG5cbiAgICBjb25zdCBob3Vyc1NjaGVkdWxlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNCk7XG4gICAgaG91cnNTY2hlZHVsZWQuaGVhZGVyID0gXCJIb3VycyBTY2hlZHVsZWRcIjtcbiAgICBob3Vyc1NjaGVkdWxlZC5rZXkgPSBcImhvdXJzU2NoZWR1bGVkXCI7XG5cblxuICAgIGNvbnN0IHBlcmNlbnRXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDUpO1xuICAgIHBlcmNlbnRXb3JrZWQuaGVhZGVyID0gXCJQZXJjZW50IFdvcmtlZFwiO1xuICAgIHBlcmNlbnRXb3JrZWQua2V5ID0gXCJwZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gd29ya3NoZWV0LmdldENvbHVtbig2KTtcbiAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrLmhlYWRlciA9IFwiQ2hhbmdlIGZyb20gTGFzdCBXZWVrXCI7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay5rZXkgPSBcImNoYW5nZUZyb21QcmV2aW91c1dlZWtcIjtcblxuICAgIGNvbnN0IHRhQXNzaWduZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDcpO1xuICAgIHRhQXNzaWduZWQuaGVhZGVyID0gXCJUQVwiO1xuICAgIHRhQXNzaWduZWQua2V5ID0gXCJ0YVwiO1xuXG4gICAgY29uc3QgdG90YWxXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDkpO1xuICAgIHRvdGFsV29ya2VkLmhlYWRlciA9IFwiVG90YWwgV29ya2VkXCI7XG4gICAgdG90YWxXb3JrZWQua2V5ID0gXCJ0b3RhbFdvcmtlZFwiO1xuXG4gICAgY29uc3QgdG90YWxTY2hlZHVsZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEwKTtcbiAgICB0b3RhbFNjaGVkdWxlZC5oZWFkZXIgPSBcIlRvdGFsIFNjaGVkdWxlZFwiO1xuICAgIHRvdGFsU2NoZWR1bGVkLmtleSA9IFwidG90YWxTY2hlZHVsZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTEpO1xuICAgIHRvdGFsUGVyY2VudFdvcmtlZC5oZWFkZXIgPSBcIlBlcmNlbnQgV29ya2VkXCI7XG4gICAgdG90YWxQZXJjZW50V29ya2VkLmtleSA9IFwidG90YWxQZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRDaGFuZ2UgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEyKTtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2UuaGVhZGVyID0gXCJDaGFuZ2UgZnJvbSBMYXN0IFdlZWtcIjtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2Uua2V5ID0gXCJ0b3RhbFBlcmNlbnRDaGFuZ2VcIjtcblxufVxuXG5jb25zdCBwb3B1bGF0ZVJvdyA9ICh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHJvdykgPT4ge1xuICAgIGNvbnN0IGN1cnJTaGVldCA9IHdvcmtCb29rRGF0YS53b3JrYm9vay5nZXRXb3Jrc2hlZXQod29ya0Jvb2tEYXRhLndlZWtOYW1lKTtcblxuICAgIGNvbnN0IFtub3JtYWxIb3Vyc1dvcmtlZCwgbm9ybWFsSG91cnNTY2hlZHVsZWQsIHBlcmNlbnRhZ2VEaWZmZXJlbmNlXSA9IHByb2Nlc3NIb3Vyc0RhdGEocm93LCB3b3JrQm9va0RhdGEudGltZVNoZWV0LCB3b3JrQm9va0RhdGEuY3VycmVudFdlZWssIGN1cnJlbnRJbnRlcm5EYXRhLmZ1bGxOYW1lLCB3b3JrQm9va0RhdGEud2Vla05hbWUsIHdvcmtCb29rRGF0YS5zaW1wbGlmaWVkU2NoZWR1bGUpO1xuXG5cbiAgICBjdXJyU2hlZXQuYWRkUm93KHtcbiAgICAgICAgZmlyc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5sYXN0TmFtZSxcbiAgICAgICAgaG91cnNXb3JrZWQ6IG5vcm1hbEhvdXJzV29ya2VkLFxuICAgICAgICBob3Vyc1NjaGVkdWxlZDogbm9ybWFsSG91cnNTY2hlZHVsZWQsXG4gICAgICAgIHBlcmNlbnRXb3JrZWQ6IHBlcmNlbnRhZ2VEaWZmZXJlbmNlLFxuXG4gICAgfSlcblxuICAgIGNvbG9yUGVyY2VudGFnZUNlbGwoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpO1xuXG59XG5cbmNvbnN0IHByb2Nlc3NIb3Vyc0RhdGEgPSAocm93LCB0aW1lU2hlZXQsIGN1cnJlbnRXZWVrLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlKSA9PiB7XG4gICAgY29uc3QgcG90ZW50aWFsV29ya0hvdXJzID0gdGltZVNoZWV0LmdldENlbGwocm93LCAxNSkudmFsdWU7XG4gICAgY29uc3Qgd29ya0hvdXJzID0gcG90ZW50aWFsV29ya0hvdXJzID8gcG90ZW50aWFsV29ya0hvdXJzIDogXCIwMDowMFwiO1xuXG4gICAgY3VycmVudFdlZWtbY3VycmVudEludGVybl0gPSB7IGhvdXJzV29ya2VkOiBob3Vyc1RvRGVjaW1hbCh3b3JrSG91cnMpIH07XG4gICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXVtjdXJyZW50SW50ZXJuXTtcbiAgICBjb25zdCBub3JtYWxIb3Vyc1NjaGVkdWxlZCA9IGRlY2ltYWxUb0hvdXJzKGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCk7XG5cbiAgICBjb25zdCBub3JtYWxIb3Vyc1dvcmtlZCA9IHdvcmtIb3VycztcbiAgICBjb25zdCBkZWNpbWFsSG91cnNXb3JrZWQgPSBob3Vyc1RvRGVjaW1hbChub3JtYWxIb3Vyc1dvcmtlZCk7XG4gICAgY3VycmVudFdlZWsudG90YWwgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gKGRlY2ltYWxIb3Vyc1dvcmtlZCAvIGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICBjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXS5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IHBlcmNlbnRhZ2VEaWZmZXJlbmNlO1xuICAgIHJldHVybiBbbm9ybWFsSG91cnNXb3JrZWQsIG5vcm1hbEhvdXJzU2NoZWR1bGVkLCBwZXJjZW50YWdlRGlmZmVyZW5jZV07XG59XG5cbmNvbnN0IHByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gKHdvcmtCb29rRGF0YSwgY3VycmVudEludGVybkRhdGEpID0+IHtcbiAgICBjb25zdCBjdXJyV2VlayA9IHdvcmtCb29rRGF0YS53ZWVrTmFtZTtcbiAgICBjb25zdCBwcmV2V2VlayA9IGdldFdlZWtCZWZvcmUoY3VycldlZWspO1xuICAgIGxldCBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrO1xuICAgIGlmICh3b3JrQm9va0RhdGEuaG91cnNXb3JrZWRNYXBbcHJldldlZWtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJXZWVrKTtcbiAgICAgICAgY29uc29sZS5sb2cod29ya0Jvb2tEYXRhLmhvdXJzV29ya2VkTWFwW2N1cnJXZWVrXSlcbiAgICAgICAgY29uc29sZS5sb2cocHJldldlZWspO1xuICAgICAgICBjb25zb2xlLmxvZyh3b3JrQm9va0RhdGEuaG91cnNXb3JrZWRNYXBbcHJldldlZWtdKVxuICAgICAgICBpZih3b3JrQm9va0RhdGEuaG91cnNXb3JrZWRNYXBbcHJldldlZWtdW2N1cnJlbnRJbnRlcm5EYXRhLmZ1bGxOYW1lXSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2VPZkN1cnJlbnRXZWVrID0gd29ya0Jvb2tEYXRhLmhvdXJzV29ya2VkTWFwW2N1cnJXZWVrXVtjdXJyZW50SW50ZXJuRGF0YS5mdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgbGV0IGRpZmZlcmVuY2VGcm9tV2Vla3MgPSBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrID9cbiAgICAgICAgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayAtIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWspLnRvRml4ZWQoMikgOiBcIlwiO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2VGcm9tV2Vla3M7XG59XG5cbmNvbnN0IGNvbG9yUGVyY2VudGFnZUNlbGwgPSAoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyQ2VsbCA9IGN1cnJTaGVldC5nZXRDZWxsKGN1cnJTaGVldC5yb3dDb3VudCwgNSlcbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPCBwZXJjZW50YWdlQWNjZXB0ZWQpIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPiAxMDApIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWtlVGltZXNoZWV0QW5hbHlzaXM7Il0sIm5hbWVzIjpbIkV4Y2VsSlMiLCJGaWxlU2F2ZXIiLCJob3Vyc1RvRGVjaW1hbCIsImdldERhdGVGcm9tU3RyaW5nIiwiZGVjaW1hbFRvSG91cnMiLCJnZXRXZWVrQmVmb3JlIiwibWFrZVRpbWVzaGVldEFuYWx5c2lzIiwidGltZXNoZWV0RXhjZWwiLCJzaW1wbGlmaWVkU2NoZWR1bGUiLCJwZXJjZW50YWdlQWNjZXB0ZWQiLCJ3b3JrYm9vayIsIldvcmtib29rIiwiaG91cnNXb3JrZWRNYXAiLCJ0b3RhbCIsInRpbWVTaGVldCIsImdldFdvcmtzaGVldCIsImZpcnN0TmFtZSIsImdldENlbGwiLCJ2YWx1ZSIsImxhc3ROYW1lIiwiY3VycmVudEludGVybiIsInJvdyIsInJvd0NvdW50IiwidGVtcEZpcnN0TmFtZSIsInRlbXBMYXN0TmFtZSIsIndlZWtOYW1lIiwid2Vla1NjaGVkdWxlIiwic2V0VXBOZXdTaGVldCIsImN1cnJlbnRXZWVrIiwiY3VycmVudEludGVybkRhdGEiLCJmdWxsTmFtZSIsIndvcmtCb29rRGF0YSIsInBvcHVsYXRlUm93Iiwic2hlZXQiLCJhZGRXb3Jrc2hlZXQiLCJ2aWV3cyIsInByb3BlcnRpZXMiLCJkZWZhdWx0Q29sV2lkdGgiLCJkZWZhdWx0Um93SGVpZ2h0Iiwic2V0VXBDb2x1bW5zIiwid29ya3NoZWV0IiwiZ2V0Q29sdW1uIiwiaGVhZGVyIiwia2V5IiwiaG91cnNXb3JrZWQiLCJob3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRXb3JrZWQiLCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwidGFBc3NpZ25lZCIsInRvdGFsV29ya2VkIiwidG90YWxTY2hlZHVsZWQiLCJ0b3RhbFBlcmNlbnRXb3JrZWQiLCJ0b3RhbFBlcmNlbnRDaGFuZ2UiLCJjdXJyU2hlZXQiLCJub3JtYWxIb3Vyc1dvcmtlZCIsIm5vcm1hbEhvdXJzU2NoZWR1bGVkIiwicGVyY2VudGFnZURpZmZlcmVuY2UiLCJwcm9jZXNzSG91cnNEYXRhIiwiYWRkUm93IiwiY29sb3JQZXJjZW50YWdlQ2VsbCIsInBvdGVudGlhbFdvcmtIb3VycyIsIndvcmtIb3VycyIsImRlY2ltYWxIb3Vyc1NjaGVkdWxlZCIsImRlY2ltYWxIb3Vyc1dvcmtlZCIsInRvRml4ZWQiLCJwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayIsImN1cnJXZWVrIiwicHJldldlZWsiLCJwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrIiwiY29uc29sZSIsImxvZyIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayIsImRpZmZlcmVuY2VGcm9tV2Vla3MiLCJjdXJyQ2VsbCIsInBhcnNlRmxvYXQiLCJmaWxsIiwidHlwZSIsInBhdHRlcm4iLCJmZ0NvbG9yIiwiYXJnYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});