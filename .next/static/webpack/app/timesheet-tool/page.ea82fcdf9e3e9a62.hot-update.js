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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    const hoursWorkedMap = {};\n    initializeHoursWorkedMap(hoursWorkedMap, simplifiedSchedule);\n    populateHoursWorkedMap(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted);\n    console.log(hoursWorkedMap);\n    processChangeFromPreviousWeek(workbook, hoursWorkedMap);\n// workbook.xlsx.writeBuffer().then(data => {\n//     const blob = new Blob([data]);\n//     FileSaver.saveAs(blob, \"Timesheet Analysis.xlsx\");\n// });\n};\nconst initializeHoursWorkedMap = (hoursWorkedMap, simplifiedSchedule)=>{\n    Object.keys(simplifiedSchedule).forEach((weekName)=>{\n        if (!hoursWorkedMap[weekName]) {\n            hoursWorkedMap[weekName] = {\n                total: {\n                    totalHoursWorked: 0,\n                    totalHoursScheduled: 0\n                },\n                interns: {}\n            };\n        }\n        Object.keys(simplifiedSchedule[weekName].interns).forEach((intern)=>{\n            const decimalHoursScheduled = simplifiedSchedule[weekName].interns[intern];\n            const normalHoursScheduled1 = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n            if (!hoursWorkedMap[weekName].interns[intern]) {\n                hoursWorkedMap[weekName].interns[intern] = {};\n            }\n            const currIntern = hoursWorkedMap[weekName].interns[intern];\n            currIntern.normalHoursWorked = \"00:00\";\n            currIntern.normalHoursScheduled = normalHoursScheduled1;\n            currIntern.percentageDifference = 0;\n        });\n        hoursWorkedMap[weekName].total.totalHoursScheduled = simplifiedSchedule[weekName].totalHoursScheduled;\n    });\n};\nconst populateHoursWorkedMap = (timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted)=>{\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    const tempFirstName = timeSheet.getCell(2, 1).value;\n    const tempLastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = tempFirstName + \" \" + tempLastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const firstName = timeSheet.getCell(row, 1).value;\n        const lastName = timeSheet.getCell(row, 2).value;\n        if (firstName && firstName + \" \" + lastName != currentIntern) {\n            currentIntern = firstName + \" \" + lastName;\n        }\n        const date = timeSheet.getCell(row, 5).value;\n        if (date) {\n            const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n            if (hoursWorkedMap[weekName]) {\n                const currentWeek = hoursWorkedMap[weekName].interns;\n                if (currentWeek[currentIntern] && currentWeek[currentIntern].normalHoursWorked == \"00:00\") {\n                    processHoursData(row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule);\n                }\n            }\n        }\n    // populateRow(workBookData, currentInternData, percentageAccepted, row);\n    // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n    // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n    // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n    }\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Percent Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    changeFromPreviousWeek.width = 25;\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Total Percent Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n    totalPercentChange.width = 30;\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule)=>{\n    const normalHoursWorked1 = timeSheet.getCell(row, 15).value ? timeSheet.getCell(row, 15).value : \"00:00\";\n    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked1;\n    const decimalHoursScheduled = simplifiedSchedule[weekName].interns[currentIntern];\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked1);\n    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.interns[currentIntern].normalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.total.totalHoursWorked += decimalHoursWorked;\n    const percentageDifference1 = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference1;\n};\nconst processChangeFromPreviousWeek = (workbook, hoursWorkedMap)=>{\n    workbook.eachSheet((worksheet)=>{\n        const currWeek = worksheet.name;\n        const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n        for(let row = 2; row <= worksheet.rowCount; row++){\n            const firstName = worksheet.getCell(row, 1).value;\n            const lastName = worksheet.getCell(row, 2).value;\n            const fullName = firstName + \" \" + lastName;\n            let percentageDifferenceOfPreviousWeek;\n            if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {\n                percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;\n            }\n            const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;\n            let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n            const currCell = worksheet.getCell(row, 6);\n            currCell.value = differenceFromWeeks;\n            if (currCell <= -15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"80e76060\"\n                    }\n                };\n            }\n            if (currCell > 15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"8042f58d\"\n                    }\n                };\n            }\n        }\n    });\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLE1BQU1ZLGlCQUFpQixDQUN2QjtJQUVBQyx5QkFBeUJELGdCQUFnQko7SUFDekNNLHVCQUF1QlAsZ0JBQWdCSyxnQkFBZ0JKLG9CQUFvQkM7SUFDM0VNLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWkssOEJBQThCUCxVQUFVRTtBQUV4Qyw2Q0FBNkM7QUFDN0MscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUN6RCxNQUFNO0FBRVY7QUFFQSxNQUFNQywyQkFBMkIsQ0FBQ0QsZ0JBQWdCSjtJQUM5Q1UsT0FBT0MsSUFBSSxDQUFDWCxvQkFBb0JZLE9BQU8sQ0FBQyxDQUFDQztRQUNyQyxJQUFJLENBQUNULGNBQWMsQ0FBQ1MsU0FBUyxFQUFFO1lBQzNCVCxjQUFjLENBQUNTLFNBQVMsR0FBRztnQkFDdkJDLE9BQU87b0JBQ0hDLGtCQUFrQjtvQkFDbEJDLHFCQUFxQjtnQkFDekI7Z0JBQ0FDLFNBQVMsQ0FFVDtZQUNKO1FBQ0o7UUFHQVAsT0FBT0MsSUFBSSxDQUFDWCxrQkFBa0IsQ0FBQ2EsU0FBUyxDQUFDSSxPQUFPLEVBQUVMLE9BQU8sQ0FBQyxDQUFDTTtZQUN2RCxNQUFNQyx3QkFBd0JuQixrQkFBa0IsQ0FBQ2EsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU87WUFDMUUsTUFBTUUsd0JBQXVCeEIsMkRBQWNBLENBQUN1QjtZQUM1QyxJQUFJLENBQUNmLGNBQWMsQ0FBQ1MsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU8sRUFBRTtnQkFDM0NkLGNBQWMsQ0FBQ1MsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU8sR0FBRyxDQUFDO1lB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ZW5GLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9tYWtlVGltZVNoZWV0QW5hbHlzaXMuanN4Pzk1YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXG5pbXBvcnQgaG91cnNUb0RlY2ltYWwgZnJvbSAnLi9ob3Vyc1RvRGVjaW1hbCc7XG5pbXBvcnQgZ2V0RGF0ZUZyb21TdHJpbmcgZnJvbSAnLi9nZXREYXRlRnJvbVN0cmluZyc7XG5pbXBvcnQgZGVjaW1hbFRvSG91cnMgZnJvbSAnLi9kZWNpbWFsVG9Ib3Vycyc7XG5pbXBvcnQgZ2V0V2Vla0JlZm9yZSBmcm9tICcuL2dldFdlZWtCZWZvcmUnO1xuXG5jb25zdCBtYWtlVGltZXNoZWV0QW5hbHlzaXMgPSAodGltZXNoZWV0RXhjZWwsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xuICAgIGNvbnN0IGhvdXJzV29ya2VkTWFwID0ge1xuICAgIH07XG5cbiAgICBpbml0aWFsaXplSG91cnNXb3JrZWRNYXAoaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSk7XG4gICAgcG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCh0aW1lc2hlZXRFeGNlbCwgaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKTtcbiAgICBjb25zb2xlLmxvZyhob3Vyc1dvcmtlZE1hcCk7XG4gICAgcHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsod29ya2Jvb2ssIGhvdXJzV29ya2VkTWFwKTtcblxuICAgIC8vIHdvcmtib29rLnhsc3gud3JpdGVCdWZmZXIoKS50aGVuKGRhdGEgPT4ge1xuICAgIC8vICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGFdKTtcbiAgICAvLyAgICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBcIlRpbWVzaGVldCBBbmFseXNpcy54bHN4XCIpO1xuICAgIC8vIH0pO1xuXG59XG5cbmNvbnN0IGluaXRpYWxpemVIb3Vyc1dvcmtlZE1hcCA9IChob3Vyc1dvcmtlZE1hcCwgc2ltcGxpZmllZFNjaGVkdWxlKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoc2ltcGxpZmllZFNjaGVkdWxlKS5mb3JFYWNoKCh3ZWVrTmFtZSkgPT4ge1xuICAgICAgICBpZiAoIWhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSkge1xuICAgICAgICAgICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdID0ge1xuICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSG91cnNXb3JrZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSG91cnNTY2hlZHVsZWQ6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnRlcm5zOiB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cblxuICAgICAgICBPYmplY3Qua2V5cyhzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLmludGVybnMpLmZvckVhY2goKGludGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS5pbnRlcm5zW2ludGVybl07XG4gICAgICAgICAgICBjb25zdCBub3JtYWxIb3Vyc1NjaGVkdWxlZCA9IGRlY2ltYWxUb0hvdXJzKGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCk7XG4gICAgICAgICAgICBpZiAoIWhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2ludGVybl0pIHtcbiAgICAgICAgICAgICAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJJbnRlcm4gPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dO1xuICAgICAgICAgICAgY3VyckludGVybi5ub3JtYWxIb3Vyc1dvcmtlZCA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIGN1cnJJbnRlcm4ubm9ybWFsSG91cnNTY2hlZHVsZWQgPSBub3JtYWxIb3Vyc1NjaGVkdWxlZDtcbiAgICAgICAgICAgIGN1cnJJbnRlcm4ucGVyY2VudGFnZURpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9KVxuICAgICAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwudG90YWxIb3Vyc1NjaGVkdWxlZCA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxIb3Vyc1NjaGVkdWxlZDtcbiAgICB9KVxufVxuXG5jb25zdCBwb3B1bGF0ZUhvdXJzV29ya2VkTWFwID0gKHRpbWVzaGVldEV4Y2VsLCBob3Vyc1dvcmtlZE1hcCwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCB0aW1lU2hlZXQgPSB0aW1lc2hlZXRFeGNlbC5nZXRXb3Jrc2hlZXQoXCJBbGwgRW1wbG95ZWVzXCIpO1xuXG4gICAgY29uc3QgdGVtcEZpcnN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKDIsIDEpLnZhbHVlO1xuICAgIGNvbnN0IHRlbXBMYXN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKDIsIDIpLnZhbHVlO1xuICAgIGxldCBjdXJyZW50SW50ZXJuID0gdGVtcEZpcnN0TmFtZSArIFwiIFwiICsgdGVtcExhc3ROYW1lO1xuICAgIGZvciAobGV0IHJvdyA9IDI7IHJvdyA8PSB0aW1lU2hlZXQucm93Q291bnQ7IHJvdysrKSB7XG5cbiAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwocm93LCAxKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbGFzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDIpLnZhbHVlO1xuICAgICAgICBpZiAoZmlyc3ROYW1lICYmXG4gICAgICAgICAgICAoZmlyc3ROYW1lICsgXCIgXCIgKyBsYXN0TmFtZSAhPSBjdXJyZW50SW50ZXJuKSkge1xuICAgICAgICAgICAgY3VycmVudEludGVybiA9IGZpcnN0TmFtZSArIFwiIFwiICsgbGFzdE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgNSkudmFsdWU7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrTmFtZSA9IGdldERhdGVGcm9tU3RyaW5nKHRpbWVTaGVldC5nZXRDZWxsKHJvdywgNSkudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFdlZWsgPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJucztcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXSAmJiBjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXS5ub3JtYWxIb3Vyc1dvcmtlZCA9PSBcIjAwOjAwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0hvdXJzRGF0YShyb3csIHRpbWVTaGVldCwgaG91cnNXb3JrZWRNYXAsIGN1cnJlbnRJbnRlcm4sIHdlZWtOYW1lLCBzaW1wbGlmaWVkU2NoZWR1bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwb3B1bGF0ZVJvdyh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHJvdyk7XG4gICAgICAgIC8vIGN1cnJTaGVldC5nZXRDZWxsKDIsIDkpLnZhbHVlID0gaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsO1xuICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCAxMCkudmFsdWUgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLnRvdGFsU2NoZWR1bGVkSG91cnM7XG4gICAgICAgIC8vIGN1cnJTaGVldC5nZXRDZWxsKDIsIDExKS52YWx1ZSA9IChob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwgLyBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLnRvdGFsU2NoZWR1bGVkSG91cnMgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgfVxuXG59XG5cbmNvbnN0IHNldFVwTmV3U2hlZXQgPSAoaG91cnNXb3JrZWRNYXAsIHdlZWtOYW1lLCB3b3JrYm9vaykgPT4ge1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSA9IHt9O1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbCA9IDA7XG4gICAgY29uc3Qgc2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQod2Vla05hbWUpO1xuICAgIHNoZWV0LnZpZXdzID0gW3t9XTtcbiAgICBzaGVldC5wcm9wZXJ0aWVzLmRlZmF1bHRDb2xXaWR0aCA9IDE1O1xuICAgIHNoZWV0LnByb3BlcnRpZXMuZGVmYXVsdFJvd0hlaWdodCA9IDIwO1xuICAgIHNldFVwQ29sdW1ucyhzaGVldCk7XG59XG5cbmNvbnN0IHNldFVwQ29sdW1ucyA9ICh3b3Jrc2hlZXQpID0+IHtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEpO1xuICAgIGZpcnN0TmFtZS5oZWFkZXIgPSBcIkZpcnN0IE5hbWVcIjtcbiAgICBmaXJzdE5hbWUua2V5ID0gXCJmaXJzdE5hbWVcIjtcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gd29ya3NoZWV0LmdldENvbHVtbigyKTtcbiAgICBsYXN0TmFtZS5oZWFkZXIgPSBcIkxhc3QgTmFtZVwiO1xuICAgIGxhc3ROYW1lLmtleSA9IFwibGFzdE5hbWVcIjtcblxuICAgIGNvbnN0IGhvdXJzV29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbigzKTtcbiAgICBob3Vyc1dvcmtlZC5oZWFkZXIgPSBcIkhvdXJzIFdvcmtlZFwiO1xuICAgIGhvdXJzV29ya2VkLmtleSA9IFwiaG91cnNXb3JrZWRcIjtcblxuICAgIGNvbnN0IGhvdXJzU2NoZWR1bGVkID0gd29ya3NoZWV0LmdldENvbHVtbig0KTtcbiAgICBob3Vyc1NjaGVkdWxlZC5oZWFkZXIgPSBcIkhvdXJzIFNjaGVkdWxlZFwiO1xuICAgIGhvdXJzU2NoZWR1bGVkLmtleSA9IFwiaG91cnNTY2hlZHVsZWRcIjtcblxuXG4gICAgY29uc3QgcGVyY2VudFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNSk7XG4gICAgcGVyY2VudFdvcmtlZC5oZWFkZXIgPSBcIlBlcmNlbnQgV29ya2VkXCI7XG4gICAgcGVyY2VudFdvcmtlZC5rZXkgPSBcInBlcmNlbnRXb3JrZWRcIjtcblxuICAgIGNvbnN0IGNoYW5nZUZyb21QcmV2aW91c1dlZWsgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDYpO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsuaGVhZGVyID0gXCJQZXJjZW50IENoYW5nZSBmcm9tIExhc3QgV2Vla1wiO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsua2V5ID0gXCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrXCI7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay53aWR0aCA9IDI1O1xuXG4gICAgY29uc3QgdGFBc3NpZ25lZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNyk7XG4gICAgdGFBc3NpZ25lZC5oZWFkZXIgPSBcIlRBXCI7XG4gICAgdGFBc3NpZ25lZC5rZXkgPSBcInRhXCI7XG5cbiAgICBjb25zdCB0b3RhbFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oOSk7XG4gICAgdG90YWxXb3JrZWQuaGVhZGVyID0gXCJUb3RhbCBXb3JrZWRcIjtcbiAgICB0b3RhbFdvcmtlZC5rZXkgPSBcInRvdGFsV29ya2VkXCI7XG5cbiAgICBjb25zdCB0b3RhbFNjaGVkdWxlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTApO1xuICAgIHRvdGFsU2NoZWR1bGVkLmhlYWRlciA9IFwiVG90YWwgU2NoZWR1bGVkXCI7XG4gICAgdG90YWxTY2hlZHVsZWQua2V5ID0gXCJ0b3RhbFNjaGVkdWxlZFwiO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50V29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbigxMSk7XG4gICAgdG90YWxQZXJjZW50V29ya2VkLmhlYWRlciA9IFwiUGVyY2VudCBXb3JrZWRcIjtcbiAgICB0b3RhbFBlcmNlbnRXb3JrZWQua2V5ID0gXCJ0b3RhbFBlcmNlbnRXb3JrZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudENoYW5nZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTIpO1xuICAgIHRvdGFsUGVyY2VudENoYW5nZS5oZWFkZXIgPSBcIlRvdGFsIFBlcmNlbnQgQ2hhbmdlIGZyb20gTGFzdCBXZWVrXCI7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLmtleSA9IFwidG90YWxQZXJjZW50Q2hhbmdlXCI7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLndpZHRoID0gMzA7XG5cblxufVxuXG5jb25zdCBwb3B1bGF0ZVJvdyA9ICh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHJvdykgPT4ge1xuICAgIGNvbnN0IGN1cnJTaGVldCA9IHdvcmtCb29rRGF0YS53b3JrYm9vay5nZXRXb3Jrc2hlZXQod29ya0Jvb2tEYXRhLndlZWtOYW1lKTtcblxuICAgIGN1cnJTaGVldC5hZGRSb3coe1xuICAgICAgICBmaXJzdE5hbWU6IGN1cnJlbnRJbnRlcm5EYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGN1cnJlbnRJbnRlcm5EYXRhLmxhc3ROYW1lLFxuICAgICAgICBob3Vyc1dvcmtlZDogbm9ybWFsSG91cnNXb3JrZWQsXG4gICAgICAgIGhvdXJzU2NoZWR1bGVkOiBub3JtYWxIb3Vyc1NjaGVkdWxlZCxcbiAgICAgICAgcGVyY2VudFdvcmtlZDogcGVyY2VudGFnZURpZmZlcmVuY2UsXG5cbiAgICB9KVxuXG4gICAgY29sb3JQZXJjZW50YWdlQ2VsbChjdXJyU2hlZXQsIHBlcmNlbnRhZ2VBY2NlcHRlZCk7XG5cbn1cblxuY29uc3QgcHJvY2Vzc0hvdXJzRGF0YSA9IChyb3csIHRpbWVTaGVldCwgaG91cnNXb3JrZWRNYXAsIGN1cnJlbnRJbnRlcm4sIHdlZWtOYW1lLCBzaW1wbGlmaWVkU2NoZWR1bGUpID0+IHtcbiAgICBjb25zdCBub3JtYWxIb3Vyc1dvcmtlZCA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMTUpLnZhbHVlID8gdGltZVNoZWV0LmdldENlbGwocm93LCAxNSkudmFsdWUgOiBcIjAwOjAwXCI7XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbY3VycmVudEludGVybl0ubm9ybWFsSG91cnNXb3JrZWQgPSBub3JtYWxIb3Vyc1dvcmtlZDtcblxuICAgIGNvbnN0IGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0uaW50ZXJuc1tjdXJyZW50SW50ZXJuXTtcbiAgICBjb25zdCBkZWNpbWFsSG91cnNXb3JrZWQgPSBob3Vyc1RvRGVjaW1hbChub3JtYWxIb3Vyc1dvcmtlZCk7XG5cbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwudG90YWxIb3Vyc1dvcmtlZCArPSBkZWNpbWFsSG91cnNXb3JrZWQ7XG4gICAgaG91cnNXb3JrZWRNYXAudG90YWwuaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5ub3JtYWxIb3Vyc1dvcmtlZCArPSBkZWNpbWFsSG91cnNXb3JrZWQ7XG4gICAgaG91cnNXb3JrZWRNYXAudG90YWwudG90YWwudG90YWxIb3Vyc1dvcmtlZCArPSBkZWNpbWFsSG91cnNXb3JrZWQ7XG4gICAgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2UgPSAoZGVjaW1hbEhvdXJzV29ya2VkIC8gZGVjaW1hbEhvdXJzU2NoZWR1bGVkICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gcGVyY2VudGFnZURpZmZlcmVuY2U7XG59XG5cbmNvbnN0IHByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gKHdvcmtib29rLCBob3Vyc1dvcmtlZE1hcCkgPT4ge1xuXG4gICAgd29ya2Jvb2suZWFjaFNoZWV0KCh3b3Jrc2hlZXQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycldlZWsgPSB3b3Jrc2hlZXQubmFtZTtcbiAgICAgICAgY29uc3QgcHJldldlZWsgPSBnZXRXZWVrQmVmb3JlKGN1cnJXZWVrKTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMjsgcm93IDw9IHdvcmtzaGVldC5yb3dDb3VudDsgcm93KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9IHdvcmtzaGVldC5nZXRDZWxsKHJvdywgMSkudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9IHdvcmtzaGVldC5nZXRDZWxsKHJvdywgMikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWs7XG4gICAgICAgICAgICBpZiAoaG91cnNXb3JrZWRNYXBbcHJldldlZWtdICYmIGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtmdWxsTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrID0gaG91cnNXb3JrZWRNYXBbcHJldldlZWtdW2Z1bGxOYW1lXS5wZXJjZW50YWdlRGlmZmVyZW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW2N1cnJXZWVrXVtmdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgZGlmZmVyZW5jZUZyb21XZWVrcyA9IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWsgP1xuICAgICAgICAgICAgICAgIChwZXJjZW50YWdlRGlmZmVyZW5jZU9mQ3VycmVudFdlZWsgLSBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrKS50b0ZpeGVkKDIpIDogXCJcIjtcblxuICAgICAgICAgICAgY29uc3QgY3VyckNlbGwgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDYpO1xuICAgICAgICAgICAgY3VyckNlbGwudmFsdWUgPSBkaWZmZXJlbmNlRnJvbVdlZWtzO1xuXG4gICAgICAgICAgICBpZiAoY3VyckNlbGwgPD0gLTE1KSB7XG4gICAgICAgICAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VyckNlbGwgPiAxNSkge1xuICAgICAgICAgICAgICAgIGN1cnJDZWxsLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgZmdDb2xvcjogeyBhcmdiOiAnODA0MmY1OGQnIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmNvbnN0IGNvbG9yUGVyY2VudGFnZUNlbGwgPSAoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyQ2VsbCA9IGN1cnJTaGVldC5nZXRDZWxsKGN1cnJTaGVldC5yb3dDb3VudCwgNSlcbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPCBwZXJjZW50YWdlQWNjZXB0ZWQpIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPiAxMDApIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWtlVGltZXNoZWV0QW5hbHlzaXM7Il0sIm5hbWVzIjpbIkV4Y2VsSlMiLCJGaWxlU2F2ZXIiLCJob3Vyc1RvRGVjaW1hbCIsImdldERhdGVGcm9tU3RyaW5nIiwiZGVjaW1hbFRvSG91cnMiLCJnZXRXZWVrQmVmb3JlIiwibWFrZVRpbWVzaGVldEFuYWx5c2lzIiwidGltZXNoZWV0RXhjZWwiLCJzaW1wbGlmaWVkU2NoZWR1bGUiLCJwZXJjZW50YWdlQWNjZXB0ZWQiLCJ3b3JrYm9vayIsIldvcmtib29rIiwiaG91cnNXb3JrZWRNYXAiLCJpbml0aWFsaXplSG91cnNXb3JrZWRNYXAiLCJwb3B1bGF0ZUhvdXJzV29ya2VkTWFwIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ3ZWVrTmFtZSIsInRvdGFsIiwidG90YWxIb3Vyc1dvcmtlZCIsInRvdGFsSG91cnNTY2hlZHVsZWQiLCJpbnRlcm5zIiwiaW50ZXJuIiwiZGVjaW1hbEhvdXJzU2NoZWR1bGVkIiwibm9ybWFsSG91cnNTY2hlZHVsZWQiLCJjdXJySW50ZXJuIiwibm9ybWFsSG91cnNXb3JrZWQiLCJwZXJjZW50YWdlRGlmZmVyZW5jZSIsInRpbWVTaGVldCIsImdldFdvcmtzaGVldCIsInRlbXBGaXJzdE5hbWUiLCJnZXRDZWxsIiwidmFsdWUiLCJ0ZW1wTGFzdE5hbWUiLCJjdXJyZW50SW50ZXJuIiwicm93Iiwicm93Q291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGUiLCJjdXJyZW50V2VlayIsInByb2Nlc3NIb3Vyc0RhdGEiLCJzZXRVcE5ld1NoZWV0Iiwic2hlZXQiLCJhZGRXb3Jrc2hlZXQiLCJ2aWV3cyIsInByb3BlcnRpZXMiLCJkZWZhdWx0Q29sV2lkdGgiLCJkZWZhdWx0Um93SGVpZ2h0Iiwic2V0VXBDb2x1bW5zIiwid29ya3NoZWV0IiwiZ2V0Q29sdW1uIiwiaGVhZGVyIiwia2V5IiwiaG91cnNXb3JrZWQiLCJob3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRXb3JrZWQiLCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwid2lkdGgiLCJ0YUFzc2lnbmVkIiwidG90YWxXb3JrZWQiLCJ0b3RhbFNjaGVkdWxlZCIsInRvdGFsUGVyY2VudFdvcmtlZCIsInRvdGFsUGVyY2VudENoYW5nZSIsInBvcHVsYXRlUm93Iiwid29ya0Jvb2tEYXRhIiwiY3VycmVudEludGVybkRhdGEiLCJjdXJyU2hlZXQiLCJhZGRSb3ciLCJjb2xvclBlcmNlbnRhZ2VDZWxsIiwiZGVjaW1hbEhvdXJzV29ya2VkIiwidG9GaXhlZCIsImVhY2hTaGVldCIsImN1cnJXZWVrIiwibmFtZSIsInByZXZXZWVrIiwiZnVsbE5hbWUiLCJwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrIiwicGVyY2VudGFnZURpZmZlcmVuY2VPZkN1cnJlbnRXZWVrIiwiZGlmZmVyZW5jZUZyb21XZWVrcyIsImN1cnJDZWxsIiwiZmlsbCIsInR5cGUiLCJwYXR0ZXJuIiwiZmdDb2xvciIsImFyZ2IiLCJwYXJzZUZsb2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});