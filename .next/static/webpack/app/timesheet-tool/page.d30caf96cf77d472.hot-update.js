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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    const hoursWorkedMap = {};\n    initializeHoursWorkedMap(hoursWorkedMap, simplifiedSchedule);\n    populateHoursWorkedMap(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted);\n    console.log(hoursWorkedMap);\n    processChangeFromPreviousWeek(workbook, hoursWorkedMap);\n// workbook.xlsx.writeBuffer().then(data => {\n//     const blob = new Blob([data]);\n//     FileSaver.saveAs(blob, \"Timesheet Analysis.xlsx\");\n// });\n};\nconst initializeHoursWorkedMap = (hoursWorkedMap, simplifiedSchedule)=>{\n    Object.keys(simplifiedSchedule).forEach((weekName)=>{\n        if (!hoursWorkedMap[weekName]) {\n            hoursWorkedMap[weekName] = {\n                total: {\n                    totalHoursWorked: 0,\n                    totalHoursScheduled: 0\n                },\n                interns: {}\n            };\n        }\n        Object.keys(simplifiedSchedule[weekName].interns).forEach((intern)=>{\n            const decimalHoursScheduled = simplifiedSchedule[weekName].interns[intern];\n            const normalHoursScheduled1 = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n            if (!hoursWorkedMap[weekName].interns[intern]) {\n                hoursWorkedMap[weekName].interns[intern] = {};\n            }\n            const currIntern = hoursWorkedMap[weekName].interns[intern];\n            currIntern.normalHoursWorked = \"00:00\";\n            currIntern.normalHoursScheduled = normalHoursScheduled1;\n            currIntern.percentageDifference = 0;\n        });\n        hoursWorkedMap[weekName].total.totalHoursScheduled = simplifiedSchedule[weekName].totalHoursScheduled;\n    });\n};\nconst populateHoursWorkedMap = (timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted)=>{\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    const tempFirstName = timeSheet.getCell(2, 1).value;\n    const tempLastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = tempFirstName + \" \" + tempLastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const firstName = timeSheet.getCell(row, 1).value;\n        const lastName = timeSheet.getCell(row, 2).value;\n        if (firstName && firstName + \" \" + lastName != currentIntern) {\n            currentIntern = firstName + \" \" + lastName;\n        }\n        const date = timeSheet.getCell(row, 5).value;\n        if (date) {\n            const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n            if (hoursWorkedMap[weekName]) {\n                const currentWeek = hoursWorkedMap[weekName].interns;\n                if (currentWeek[currentIntern] && currentWeek[currentIntern].normalHoursWorked == \"00:00\") {\n                    processHoursData(row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule);\n                }\n            }\n        }\n    // populateRow(workBookData, currentInternData, percentageAccepted, row);\n    // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n    // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n    // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n    }\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Percent Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    changeFromPreviousWeek.width = 25;\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Total Percent Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n    totalPercentChange.width = 30;\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule)=>{\n    const normalHoursWorked1 = timeSheet.getCell(row, 15).value ? timeSheet.getCell(row, 15).value : \"00:00\";\n    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked1;\n    const decimalHoursScheduled = simplifiedSchedule[weekName].interns[currentIntern];\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked1);\n    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.totalHoursWorked += decimalHoursWorked;\n    const percentageDifference1 = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference1;\n};\nconst processChangeFromPreviousWeek = (workbook, hoursWorkedMap)=>{\n    workbook.eachSheet((worksheet)=>{\n        const currWeek = worksheet.name;\n        const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n        for(let row = 2; row <= worksheet.rowCount; row++){\n            const firstName = worksheet.getCell(row, 1).value;\n            const lastName = worksheet.getCell(row, 2).value;\n            const fullName = firstName + \" \" + lastName;\n            let percentageDifferenceOfPreviousWeek;\n            if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {\n                percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;\n            }\n            const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;\n            let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n            const currCell = worksheet.getCell(row, 6);\n            currCell.value = differenceFromWeeks;\n            if (currCell <= -15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"80e76060\"\n                    }\n                };\n            }\n            if (currCell > 15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"8042f58d\"\n                    }\n                };\n            }\n        }\n    });\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLE1BQU1ZLGlCQUFpQixDQUN2QjtJQUVBQyx5QkFBeUJELGdCQUFnQko7SUFDekNNLHVCQUF1QlAsZ0JBQWdCSyxnQkFBZ0JKLG9CQUFvQkM7SUFDM0VNLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWkssOEJBQThCUCxVQUFVRTtBQUl4Qyw2Q0FBNkM7QUFDN0MscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUN6RCxNQUFNO0FBRVY7QUFFQSxNQUFNQywyQkFBMkIsQ0FBQ0QsZ0JBQWdCSjtJQUM5Q1UsT0FBT0MsSUFBSSxDQUFDWCxvQkFBb0JZLE9BQU8sQ0FBQyxDQUFDQztRQUNyQyxJQUFJLENBQUNULGNBQWMsQ0FBQ1MsU0FBUyxFQUFFO1lBQzNCVCxjQUFjLENBQUNTLFNBQVMsR0FBRztnQkFDdkJDLE9BQU87b0JBQ0hDLGtCQUFrQjtvQkFDbEJDLHFCQUFxQjtnQkFDekI7Z0JBQ0FDLFNBQVMsQ0FFVDtZQUNKO1FBQ0o7UUFHQVAsT0FBT0MsSUFBSSxDQUFDWCxrQkFBa0IsQ0FBQ2EsU0FBUyxDQUFDSSxPQUFPLEVBQUVMLE9BQU8sQ0FBQyxDQUFDTTtZQUN2RCxNQUFNQyx3QkFBd0JuQixrQkFBa0IsQ0FBQ2EsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU87WUFDMUUsTUFBTUUsd0JBQXVCeEIsMkRBQWNBLENBQUN1QjtZQUM1QyxJQUFJLENBQUNmLGNBQWMsQ0FBQ1MsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU8sRUFBRTtnQkFDM0NkLGNBQWMsQ0FBQ1MsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU8sR0FBRyxDQUFDO1lB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QW5hbHlzaXMuanN4Pzk1YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXG5pbXBvcnQgaG91cnNUb0RlY2ltYWwgZnJvbSAnLi9ob3Vyc1RvRGVjaW1hbCc7XG5pbXBvcnQgZ2V0RGF0ZUZyb21TdHJpbmcgZnJvbSAnLi9nZXREYXRlRnJvbVN0cmluZyc7XG5pbXBvcnQgZGVjaW1hbFRvSG91cnMgZnJvbSAnLi9kZWNpbWFsVG9Ib3Vycyc7XG5pbXBvcnQgZ2V0V2Vla0JlZm9yZSBmcm9tICcuL2dldFdlZWtCZWZvcmUnO1xuXG5jb25zdCBtYWtlVGltZXNoZWV0QW5hbHlzaXMgPSAodGltZXNoZWV0RXhjZWwsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xuICAgIGNvbnN0IGhvdXJzV29ya2VkTWFwID0ge1xuICAgIH07XG5cbiAgICBpbml0aWFsaXplSG91cnNXb3JrZWRNYXAoaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSk7XG4gICAgcG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCh0aW1lc2hlZXRFeGNlbCwgaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKTtcbiAgICBjb25zb2xlLmxvZyhob3Vyc1dvcmtlZE1hcCk7XG4gICAgcHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsod29ya2Jvb2ssIGhvdXJzV29ya2VkTWFwKTtcblxuXG5cbiAgICAvLyB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCkudGhlbihkYXRhID0+IHtcbiAgICAvLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSk7XG4gICAgLy8gICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgXCJUaW1lc2hlZXQgQW5hbHlzaXMueGxzeFwiKTtcbiAgICAvLyB9KTtcblxufVxuXG5jb25zdCBpbml0aWFsaXplSG91cnNXb3JrZWRNYXAgPSAoaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHNpbXBsaWZpZWRTY2hlZHVsZSkuZm9yRWFjaCgod2Vla05hbWUpID0+IHtcbiAgICAgICAgaWYgKCFob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0pIHtcbiAgICAgICAgICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbEhvdXJzV29ya2VkOiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEhvdXJzU2NoZWR1bGVkOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZXJuczoge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgT2JqZWN0LmtleXMoc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS5pbnRlcm5zKS5mb3JFYWNoKChpbnRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsSG91cnNTY2hlZHVsZWQgPSBkZWNpbWFsVG9Ib3VycyhkZWNpbWFsSG91cnNTY2hlZHVsZWQpO1xuICAgICAgICAgICAgaWYgKCFob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dKSB7XG4gICAgICAgICAgICAgICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJySW50ZXJuID0gaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXTtcbiAgICAgICAgICAgIGN1cnJJbnRlcm4ubm9ybWFsSG91cnNXb3JrZWQgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICBjdXJySW50ZXJuLm5vcm1hbEhvdXJzU2NoZWR1bGVkID0gbm9ybWFsSG91cnNTY2hlZHVsZWQ7XG4gICAgICAgICAgICBjdXJySW50ZXJuLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gMDtcbiAgICAgICAgfSlcbiAgICAgICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsLnRvdGFsSG91cnNTY2hlZHVsZWQgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLnRvdGFsSG91cnNTY2hlZHVsZWQ7XG4gICAgfSlcbn1cblxuY29uc3QgcG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCA9ICh0aW1lc2hlZXRFeGNlbCwgaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3QgdGltZVNoZWV0ID0gdGltZXNoZWV0RXhjZWwuZ2V0V29ya3NoZWV0KFwiQWxsIEVtcGxveWVlc1wiKTtcblxuICAgIGNvbnN0IHRlbXBGaXJzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbCgyLCAxKS52YWx1ZTtcbiAgICBjb25zdCB0ZW1wTGFzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbCgyLCAyKS52YWx1ZTtcbiAgICBsZXQgY3VycmVudEludGVybiA9IHRlbXBGaXJzdE5hbWUgKyBcIiBcIiArIHRlbXBMYXN0TmFtZTtcbiAgICBmb3IgKGxldCByb3cgPSAyOyByb3cgPD0gdGltZVNoZWV0LnJvd0NvdW50OyByb3crKykge1xuXG4gICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMSkudmFsdWU7XG4gICAgICAgIGNvbnN0IGxhc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwocm93LCAyKS52YWx1ZTtcbiAgICAgICAgaWYgKGZpcnN0TmFtZSAmJlxuICAgICAgICAgICAgKGZpcnN0TmFtZSArIFwiIFwiICsgbGFzdE5hbWUgIT0gY3VycmVudEludGVybikpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbnRlcm4gPSBmaXJzdE5hbWUgKyBcIiBcIiArIGxhc3ROYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDUpLnZhbHVlO1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgd2Vla05hbWUgPSBnZXREYXRlRnJvbVN0cmluZyh0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDUpLnZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXZWVrID0gaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnM7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFdlZWtbY3VycmVudEludGVybl0gJiYgY3VycmVudFdlZWtbY3VycmVudEludGVybl0ubm9ybWFsSG91cnNXb3JrZWQgPT0gXCIwMDowMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NIb3Vyc0RhdGEocm93LCB0aW1lU2hlZXQsIGhvdXJzV29ya2VkTWFwLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcG9wdWxhdGVSb3cod29ya0Jvb2tEYXRhLCBjdXJyZW50SW50ZXJuRGF0YSwgcGVyY2VudGFnZUFjY2VwdGVkLCByb3cpO1xuICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCA5KS52YWx1ZSA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbDtcbiAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgMTApLnZhbHVlID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS50b3RhbFNjaGVkdWxlZEhvdXJzO1xuICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCAxMSkudmFsdWUgPSAoaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsIC8gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS50b3RhbFNjaGVkdWxlZEhvdXJzICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIH1cblxufVxuXG5jb25zdCBzZXRVcE5ld1NoZWV0ID0gKGhvdXJzV29ya2VkTWFwLCB3ZWVrTmFtZSwgd29ya2Jvb2spID0+IHtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0gPSB7fTtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwgPSAwO1xuICAgIGNvbnN0IHNoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KHdlZWtOYW1lKTtcbiAgICBzaGVldC52aWV3cyA9IFt7fV07XG4gICAgc2hlZXQucHJvcGVydGllcy5kZWZhdWx0Q29sV2lkdGggPSAxNTtcbiAgICBzaGVldC5wcm9wZXJ0aWVzLmRlZmF1bHRSb3dIZWlnaHQgPSAyMDtcbiAgICBzZXRVcENvbHVtbnMoc2hlZXQpO1xufVxuXG5jb25zdCBzZXRVcENvbHVtbnMgPSAod29ya3NoZWV0KSA9PiB7XG4gICAgY29uc3QgZmlyc3ROYW1lID0gd29ya3NoZWV0LmdldENvbHVtbigxKTtcbiAgICBmaXJzdE5hbWUuaGVhZGVyID0gXCJGaXJzdCBOYW1lXCI7XG4gICAgZmlyc3ROYW1lLmtleSA9IFwiZmlyc3ROYW1lXCI7XG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMik7XG4gICAgbGFzdE5hbWUuaGVhZGVyID0gXCJMYXN0IE5hbWVcIjtcbiAgICBsYXN0TmFtZS5rZXkgPSBcImxhc3ROYW1lXCI7XG5cbiAgICBjb25zdCBob3Vyc1dvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMyk7XG4gICAgaG91cnNXb3JrZWQuaGVhZGVyID0gXCJIb3VycyBXb3JrZWRcIjtcbiAgICBob3Vyc1dvcmtlZC5rZXkgPSBcImhvdXJzV29ya2VkXCI7XG5cbiAgICBjb25zdCBob3Vyc1NjaGVkdWxlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNCk7XG4gICAgaG91cnNTY2hlZHVsZWQuaGVhZGVyID0gXCJIb3VycyBTY2hlZHVsZWRcIjtcbiAgICBob3Vyc1NjaGVkdWxlZC5rZXkgPSBcImhvdXJzU2NoZWR1bGVkXCI7XG5cblxuICAgIGNvbnN0IHBlcmNlbnRXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDUpO1xuICAgIHBlcmNlbnRXb3JrZWQuaGVhZGVyID0gXCJQZXJjZW50IFdvcmtlZFwiO1xuICAgIHBlcmNlbnRXb3JrZWQua2V5ID0gXCJwZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gd29ya3NoZWV0LmdldENvbHVtbig2KTtcbiAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrLmhlYWRlciA9IFwiUGVyY2VudCBDaGFuZ2UgZnJvbSBMYXN0IFdlZWtcIjtcbiAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrLmtleSA9IFwiY2hhbmdlRnJvbVByZXZpb3VzV2Vla1wiO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsud2lkdGggPSAyNTtcblxuICAgIGNvbnN0IHRhQXNzaWduZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDcpO1xuICAgIHRhQXNzaWduZWQuaGVhZGVyID0gXCJUQVwiO1xuICAgIHRhQXNzaWduZWQua2V5ID0gXCJ0YVwiO1xuXG4gICAgY29uc3QgdG90YWxXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDkpO1xuICAgIHRvdGFsV29ya2VkLmhlYWRlciA9IFwiVG90YWwgV29ya2VkXCI7XG4gICAgdG90YWxXb3JrZWQua2V5ID0gXCJ0b3RhbFdvcmtlZFwiO1xuXG4gICAgY29uc3QgdG90YWxTY2hlZHVsZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEwKTtcbiAgICB0b3RhbFNjaGVkdWxlZC5oZWFkZXIgPSBcIlRvdGFsIFNjaGVkdWxlZFwiO1xuICAgIHRvdGFsU2NoZWR1bGVkLmtleSA9IFwidG90YWxTY2hlZHVsZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTEpO1xuICAgIHRvdGFsUGVyY2VudFdvcmtlZC5oZWFkZXIgPSBcIlBlcmNlbnQgV29ya2VkXCI7XG4gICAgdG90YWxQZXJjZW50V29ya2VkLmtleSA9IFwidG90YWxQZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRDaGFuZ2UgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEyKTtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2UuaGVhZGVyID0gXCJUb3RhbCBQZXJjZW50IENoYW5nZSBmcm9tIExhc3QgV2Vla1wiO1xuICAgIHRvdGFsUGVyY2VudENoYW5nZS5rZXkgPSBcInRvdGFsUGVyY2VudENoYW5nZVwiO1xuICAgIHRvdGFsUGVyY2VudENoYW5nZS53aWR0aCA9IDMwO1xuXG5cbn1cblxuY29uc3QgcG9wdWxhdGVSb3cgPSAod29ya0Jvb2tEYXRhLCBjdXJyZW50SW50ZXJuRGF0YSwgcGVyY2VudGFnZUFjY2VwdGVkLCByb3cpID0+IHtcbiAgICBjb25zdCBjdXJyU2hlZXQgPSB3b3JrQm9va0RhdGEud29ya2Jvb2suZ2V0V29ya3NoZWV0KHdvcmtCb29rRGF0YS53ZWVrTmFtZSk7XG5cbiAgICBjdXJyU2hlZXQuYWRkUm93KHtcbiAgICAgICAgZmlyc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5sYXN0TmFtZSxcbiAgICAgICAgaG91cnNXb3JrZWQ6IG5vcm1hbEhvdXJzV29ya2VkLFxuICAgICAgICBob3Vyc1NjaGVkdWxlZDogbm9ybWFsSG91cnNTY2hlZHVsZWQsXG4gICAgICAgIHBlcmNlbnRXb3JrZWQ6IHBlcmNlbnRhZ2VEaWZmZXJlbmNlLFxuXG4gICAgfSlcblxuICAgIGNvbG9yUGVyY2VudGFnZUNlbGwoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpO1xuXG59XG5cbmNvbnN0IHByb2Nlc3NIb3Vyc0RhdGEgPSAocm93LCB0aW1lU2hlZXQsIGhvdXJzV29ya2VkTWFwLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsSG91cnNXb3JrZWQgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDE1KS52YWx1ZSA/IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMTUpLnZhbHVlIDogXCIwMDowMFwiO1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkID0gbm9ybWFsSG91cnNXb3JrZWQ7XG5cbiAgICBjb25zdCBkZWNpbWFsSG91cnNTY2hlZHVsZWQgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLmludGVybnNbY3VycmVudEludGVybl07XG4gICAgY29uc3QgZGVjaW1hbEhvdXJzV29ya2VkID0gaG91cnNUb0RlY2ltYWwobm9ybWFsSG91cnNXb3JrZWQpO1xuXG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsLnRvdGFsSG91cnNXb3JrZWQgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gKGRlY2ltYWxIb3Vyc1dvcmtlZCAvIGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IHBlcmNlbnRhZ2VEaWZmZXJlbmNlO1xufVxuXG5jb25zdCBwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayA9ICh3b3JrYm9vaywgaG91cnNXb3JrZWRNYXApID0+IHtcblxuICAgIHdvcmtib29rLmVhY2hTaGVldCgod29ya3NoZWV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJXZWVrID0gd29ya3NoZWV0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHByZXZXZWVrID0gZ2V0V2Vla0JlZm9yZShjdXJyV2Vlayk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDI7IHJvdyA8PSB3b3Jrc2hlZXQucm93Q291bnQ7IHJvdysrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDEpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrO1xuICAgICAgICAgICAgaWYgKGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXSAmJiBob3Vyc1dvcmtlZE1hcFtwcmV2V2Vla11bZnVsbE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayA9IGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtmdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlRGlmZmVyZW5jZU9mQ3VycmVudFdlZWsgPSBob3Vyc1dvcmtlZE1hcFtjdXJyV2Vla11bZnVsbE5hbWVdLnBlcmNlbnRhZ2VEaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IGRpZmZlcmVuY2VGcm9tV2Vla3MgPSBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrID9cbiAgICAgICAgICAgICAgICAocGVyY2VudGFnZURpZmZlcmVuY2VPZkN1cnJlbnRXZWVrIC0gcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlaykudG9GaXhlZCgyKSA6IFwiXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJDZWxsID0gd29ya3NoZWV0LmdldENlbGwocm93LCA2KTtcbiAgICAgICAgICAgIGN1cnJDZWxsLnZhbHVlID0gZGlmZmVyZW5jZUZyb21XZWVrcztcblxuICAgICAgICAgICAgaWYgKGN1cnJDZWxsIDw9IC0xNSkge1xuICAgICAgICAgICAgICAgIGN1cnJDZWxsLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgZmdDb2xvcjogeyBhcmdiOiAnODBlNzYwNjAnIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJDZWxsID4gMTUpIHtcbiAgICAgICAgICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwNDJmNThkJyB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5jb25zdCBjb2xvclBlcmNlbnRhZ2VDZWxsID0gKGN1cnJTaGVldCwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3QgY3VyckNlbGwgPSBjdXJyU2hlZXQuZ2V0Q2VsbChjdXJyU2hlZXQucm93Q291bnQsIDUpXG4gICAgaWYgKHBhcnNlRmxvYXQoY3VyckNlbGwpIDwgcGVyY2VudGFnZUFjY2VwdGVkKSB7XG4gICAgICAgIGN1cnJDZWxsLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgZmdDb2xvcjogeyBhcmdiOiAnODBlNzYwNjAnIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHBhcnNlRmxvYXQoY3VyckNlbGwpID4gMTAwKSB7XG4gICAgICAgIGN1cnJDZWxsLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgZmdDb2xvcjogeyBhcmdiOiAnODA0MmY1OGQnIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVRpbWVzaGVldEFuYWx5c2lzOyJdLCJuYW1lcyI6WyJFeGNlbEpTIiwiRmlsZVNhdmVyIiwiaG91cnNUb0RlY2ltYWwiLCJnZXREYXRlRnJvbVN0cmluZyIsImRlY2ltYWxUb0hvdXJzIiwiZ2V0V2Vla0JlZm9yZSIsIm1ha2VUaW1lc2hlZXRBbmFseXNpcyIsInRpbWVzaGVldEV4Y2VsIiwic2ltcGxpZmllZFNjaGVkdWxlIiwicGVyY2VudGFnZUFjY2VwdGVkIiwid29ya2Jvb2siLCJXb3JrYm9vayIsImhvdXJzV29ya2VkTWFwIiwiaW5pdGlhbGl6ZUhvdXJzV29ya2VkTWFwIiwicG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwid2Vla05hbWUiLCJ0b3RhbCIsInRvdGFsSG91cnNXb3JrZWQiLCJ0b3RhbEhvdXJzU2NoZWR1bGVkIiwiaW50ZXJucyIsImludGVybiIsImRlY2ltYWxIb3Vyc1NjaGVkdWxlZCIsIm5vcm1hbEhvdXJzU2NoZWR1bGVkIiwiY3VyckludGVybiIsIm5vcm1hbEhvdXJzV29ya2VkIiwicGVyY2VudGFnZURpZmZlcmVuY2UiLCJ0aW1lU2hlZXQiLCJnZXRXb3Jrc2hlZXQiLCJ0ZW1wRmlyc3ROYW1lIiwiZ2V0Q2VsbCIsInZhbHVlIiwidGVtcExhc3ROYW1lIiwiY3VycmVudEludGVybiIsInJvdyIsInJvd0NvdW50IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkYXRlIiwiY3VycmVudFdlZWsiLCJwcm9jZXNzSG91cnNEYXRhIiwic2V0VXBOZXdTaGVldCIsInNoZWV0IiwiYWRkV29ya3NoZWV0Iiwidmlld3MiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdENvbFdpZHRoIiwiZGVmYXVsdFJvd0hlaWdodCIsInNldFVwQ29sdW1ucyIsIndvcmtzaGVldCIsImdldENvbHVtbiIsImhlYWRlciIsImtleSIsImhvdXJzV29ya2VkIiwiaG91cnNTY2hlZHVsZWQiLCJwZXJjZW50V29ya2VkIiwiY2hhbmdlRnJvbVByZXZpb3VzV2VlayIsIndpZHRoIiwidGFBc3NpZ25lZCIsInRvdGFsV29ya2VkIiwidG90YWxTY2hlZHVsZWQiLCJ0b3RhbFBlcmNlbnRXb3JrZWQiLCJ0b3RhbFBlcmNlbnRDaGFuZ2UiLCJwb3B1bGF0ZVJvdyIsIndvcmtCb29rRGF0YSIsImN1cnJlbnRJbnRlcm5EYXRhIiwiY3VyclNoZWV0IiwiYWRkUm93IiwiY29sb3JQZXJjZW50YWdlQ2VsbCIsImRlY2ltYWxIb3Vyc1dvcmtlZCIsInRvRml4ZWQiLCJlYWNoU2hlZXQiLCJjdXJyV2VlayIsIm5hbWUiLCJwcmV2V2VlayIsImZ1bGxOYW1lIiwicGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayIsImRpZmZlcmVuY2VGcm9tV2Vla3MiLCJjdXJyQ2VsbCIsImZpbGwiLCJ0eXBlIiwicGF0dGVybiIsImZnQ29sb3IiLCJhcmdiIiwicGFyc2VGbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});