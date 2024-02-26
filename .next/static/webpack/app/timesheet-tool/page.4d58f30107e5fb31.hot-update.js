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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    const test = {\n        hi: {\n            bye: {\n                try: 4\n            }\n        }\n    };\n    console.log(test);\n    test.hi.bye.try = 5;\n    let hoursWorkedMap = {};\n    initializeHoursWorkedMap(hoursWorkedMap, simplifiedSchedule);\n    console.log(JSON.parse(JSON.stringify(hoursWorkedMap)));\n    populateHoursWorkedMap(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted);\n// processChangeFromPreviousWeek(workbook, hoursWorkedMap);\n// workbook.xlsx.writeBuffer().then(data => {\n//     const blob = new Blob([data]);\n//     FileSaver.saveAs(blob, \"Timesheet Analysis.xlsx\");\n// });\n};\nconst initializeHoursWorkedMap = (hoursWorkedMap, simplifiedSchedule)=>{\n    Object.keys(simplifiedSchedule).forEach((weekName)=>{\n        if (!hoursWorkedMap[weekName]) {\n            hoursWorkedMap[weekName] = {\n                total: {\n                    totalHoursWorked: 0,\n                    totalHoursScheduled: 0\n                },\n                interns: {}\n            };\n        }\n        Object.keys(simplifiedSchedule[weekName].interns).forEach((intern)=>{\n            const decimalHoursScheduled = simplifiedSchedule[weekName].interns[intern];\n            const normalHoursScheduled1 = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n            if (!hoursWorkedMap[weekName].interns[intern]) {\n                hoursWorkedMap[weekName].interns[intern] = {};\n            }\n            const currIntern = hoursWorkedMap[weekName].interns[intern];\n            currIntern.normalHoursWorked = \"00:00\";\n            currIntern.normalHoursScheduled = normalHoursScheduled1;\n            currIntern.percentageDifference = 0;\n        });\n        hoursWorkedMap[weekName].total.totalHoursScheduled = simplifiedSchedule[weekName].totalHoursScheduled;\n    });\n};\nconst populateHoursWorkedMap = (timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted)=>{\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    const tempFirstName = timeSheet.getCell(2, 1).value;\n    const tempLastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = tempFirstName + \" \" + tempLastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const firstName = timeSheet.getCell(row, 1).value;\n        const lastName = timeSheet.getCell(row, 2).value;\n        if (firstName && firstName + \" \" + lastName != currentIntern) {\n            currentIntern = firstName + \" \" + lastName;\n        }\n        const date = timeSheet.getCell(row, 5).value;\n        if (date) {\n            const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n            if (hoursWorkedMap[weekName]) {\n                const currentWeek = hoursWorkedMap[weekName].interns;\n                if (currentWeek[currentIntern]) {\n                    processHoursData(row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule);\n                }\n            }\n        }\n    // populateRow(workBookData, currentInternData, percentageAccepted, row);\n    // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n    // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n    // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n    }\n    console.log(hoursWorkedMap);\n    console.log(simplifiedSchedule);\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Percent Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    changeFromPreviousWeek.width = 25;\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Total Percent Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n    totalPercentChange.width = 30;\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule)=>{\n    const normalHoursWorked1 = timeSheet.getCell(row, 15).value;\n    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked1;\n    const decimalHoursScheduled = simplifiedSchedule[weekName][currentIntern];\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked1);\n    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.totalHoursWorked += decimalHoursWorked;\n    const percentageDifference1 = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference1;\n};\nconst processChangeFromPreviousWeek = (workbook, hoursWorkedMap)=>{\n    workbook.eachSheet((worksheet)=>{\n        const currWeek = worksheet.name;\n        const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n        for(let row = 2; row <= worksheet.rowCount; row++){\n            const firstName = worksheet.getCell(row, 1).value;\n            const lastName = worksheet.getCell(row, 2).value;\n            const fullName = firstName + \" \" + lastName;\n            let percentageDifferenceOfPreviousWeek;\n            if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {\n                percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;\n            }\n            const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;\n            let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n            const currCell = worksheet.getCell(row, 6);\n            currCell.value = differenceFromWeeks;\n            if (currCell <= -15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"80e76060\"\n                    }\n                };\n            }\n            if (currCell > 15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"8042f58d\"\n                    }\n                };\n            }\n        }\n    });\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBRXJDLE1BQU1ZLE9BQU87UUFBQ0MsSUFBRztZQUFDQyxLQUFJO2dCQUFDQyxLQUFJO1lBQUM7UUFBQztJQUFDO0lBQzlCQyxRQUFRQyxHQUFHLENBQUNMO0lBQ1pBLEtBQUtDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLEdBQUc7SUFDbEIsSUFBSUcsaUJBQWlCLENBQ3JCO0lBRUFDLHlCQUF5QkQsZ0JBQWdCVjtJQUN6Q1EsUUFBUUMsR0FBRyxDQUFDRyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ0o7SUFDdENLLHVCQUF1QmhCLGdCQUFnQlcsZ0JBQWdCVixvQkFBb0JDO0FBRTNFLDJEQUEyRDtBQUkzRCw2Q0FBNkM7QUFDN0MscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUN6RCxNQUFNO0FBRVY7QUFFQSxNQUFNVSwyQkFBMkIsQ0FBQ0QsZ0JBQWdCVjtJQUM5Q2dCLE9BQU9DLElBQUksQ0FBQ2pCLG9CQUFvQmtCLE9BQU8sQ0FBQyxDQUFDQztRQUNyQyxJQUFJLENBQUNULGNBQWMsQ0FBQ1MsU0FBUyxFQUFFO1lBQzNCVCxjQUFjLENBQUNTLFNBQVMsR0FBRztnQkFDdkJDLE9BQU87b0JBQ0hDLGtCQUFrQjtvQkFDbEJDLHFCQUFxQjtnQkFDekI7Z0JBQ0FDLFNBQVMsQ0FFVDtZQUNKO1FBQ0o7UUFHQVAsT0FBT0MsSUFBSSxDQUFDakIsa0JBQWtCLENBQUNtQixTQUFTLENBQUNJLE9BQU8sRUFBRUwsT0FBTyxDQUFDLENBQUNNO1lBQ3ZELE1BQU1DLHdCQUF3QnpCLGtCQUFrQixDQUFDbUIsU0FBUyxDQUFDSSxP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QUFTO1lBQ1RDLFNBQVM7Z0JBQUVDLE1BQU07WUFBVztRQUNoQztJQUNKO0FBQ0o7QUFHQSwrREFBZTFGLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9tYWtlVGltZVNoZWV0QW5hbHlzaXMuanN4Pzk1YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXG5pbXBvcnQgaG91cnNUb0RlY2ltYWwgZnJvbSAnLi9ob3Vyc1RvRGVjaW1hbCc7XG5pbXBvcnQgZ2V0RGF0ZUZyb21TdHJpbmcgZnJvbSAnLi9nZXREYXRlRnJvbVN0cmluZyc7XG5pbXBvcnQgZGVjaW1hbFRvSG91cnMgZnJvbSAnLi9kZWNpbWFsVG9Ib3Vycyc7XG5pbXBvcnQgZ2V0V2Vla0JlZm9yZSBmcm9tICcuL2dldFdlZWtCZWZvcmUnO1xuXG5jb25zdCBtYWtlVGltZXNoZWV0QW5hbHlzaXMgPSAodGltZXNoZWV0RXhjZWwsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xuXG4gICAgY29uc3QgdGVzdCA9IHtoaTp7YnllOnt0cnk6NH19fTtcbiAgICBjb25zb2xlLmxvZyh0ZXN0KTtcbiAgICB0ZXN0LmhpLmJ5ZS50cnkgPSA1O1xuICAgIGxldCBob3Vyc1dvcmtlZE1hcCA9IHtcbiAgICB9O1xuXG4gICAgaW5pdGlhbGl6ZUhvdXJzV29ya2VkTWFwKGhvdXJzV29ya2VkTWFwLCBzaW1wbGlmaWVkU2NoZWR1bGUpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaG91cnNXb3JrZWRNYXApKSk7XG4gICAgcG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCh0aW1lc2hlZXRFeGNlbCwgaG91cnNXb3JrZWRNYXAsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKTtcblxuICAgIC8vIHByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrKHdvcmtib29rLCBob3Vyc1dvcmtlZE1hcCk7XG5cblxuXG4gICAgLy8gd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpLnRoZW4oZGF0YSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0pO1xuICAgIC8vICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIFwiVGltZXNoZWV0IEFuYWx5c2lzLnhsc3hcIik7XG4gICAgLy8gfSk7XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZUhvdXJzV29ya2VkTWFwID0gKGhvdXJzV29ya2VkTWFwLCBzaW1wbGlmaWVkU2NoZWR1bGUpID0+IHtcbiAgICBPYmplY3Qua2V5cyhzaW1wbGlmaWVkU2NoZWR1bGUpLmZvckVhY2goKHdlZWtOYW1lKSA9PiB7XG4gICAgICAgIGlmICghaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdKSB7XG4gICAgICAgICAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIb3Vyc1dvcmtlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIb3Vyc1NjaGVkdWxlZDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGludGVybnM6IHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuXG4gICAgICAgIE9iamVjdC5rZXlzKHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0uaW50ZXJucykuZm9yRWFjaCgoaW50ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNpbWFsSG91cnNTY2hlZHVsZWQgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXTtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbEhvdXJzU2NoZWR1bGVkID0gZGVjaW1hbFRvSG91cnMoZGVjaW1hbEhvdXJzU2NoZWR1bGVkKTtcbiAgICAgICAgICAgIGlmKCFob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dKXtcbiAgICAgICAgICAgICAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJJbnRlcm4gPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dO1xuICAgICAgICAgICAgY3VyckludGVybi5ub3JtYWxIb3Vyc1dvcmtlZCA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIGN1cnJJbnRlcm4ubm9ybWFsSG91cnNTY2hlZHVsZWQgPSBub3JtYWxIb3Vyc1NjaGVkdWxlZDtcbiAgICAgICAgICAgIGN1cnJJbnRlcm4ucGVyY2VudGFnZURpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9KVxuICAgICAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwudG90YWxIb3Vyc1NjaGVkdWxlZCA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxIb3Vyc1NjaGVkdWxlZDtcbiAgICB9KVxufVxuXG5jb25zdCBwb3B1bGF0ZUhvdXJzV29ya2VkTWFwID0gKHRpbWVzaGVldEV4Y2VsLCBob3Vyc1dvcmtlZE1hcCwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCB0aW1lU2hlZXQgPSB0aW1lc2hlZXRFeGNlbC5nZXRXb3Jrc2hlZXQoXCJBbGwgRW1wbG95ZWVzXCIpO1xuXG4gICAgY29uc3QgdGVtcEZpcnN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKDIsIDEpLnZhbHVlO1xuICAgIGNvbnN0IHRlbXBMYXN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKDIsIDIpLnZhbHVlO1xuICAgIGxldCBjdXJyZW50SW50ZXJuID0gdGVtcEZpcnN0TmFtZSArIFwiIFwiICsgdGVtcExhc3ROYW1lO1xuICAgIGZvciAobGV0IHJvdyA9IDI7IHJvdyA8PSB0aW1lU2hlZXQucm93Q291bnQ7IHJvdysrKSB7XG5cbiAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwocm93LCAxKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbGFzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDIpLnZhbHVlO1xuICAgICAgICBpZiAoZmlyc3ROYW1lICYmXG4gICAgICAgICAgICAoZmlyc3ROYW1lICsgXCIgXCIgKyBsYXN0TmFtZSAhPSBjdXJyZW50SW50ZXJuKSkge1xuICAgICAgICAgICAgY3VycmVudEludGVybiA9IGZpcnN0TmFtZSArIFwiIFwiICsgbGFzdE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgNSkudmFsdWU7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrTmFtZSA9IGdldERhdGVGcm9tU3RyaW5nKHRpbWVTaGVldC5nZXRDZWxsKHJvdywgNSkudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFdlZWsgPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJucztcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzSG91cnNEYXRhKHJvdywgdGltZVNoZWV0LCBob3Vyc1dvcmtlZE1hcCwgY3VycmVudEludGVybiwgd2Vla05hbWUsIHNpbXBsaWZpZWRTY2hlZHVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBvcHVsYXRlUm93KHdvcmtCb29rRGF0YSwgY3VycmVudEludGVybkRhdGEsIHBlcmNlbnRhZ2VBY2NlcHRlZCwgcm93KTtcbiAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgOSkudmFsdWUgPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWw7XG4gICAgICAgIC8vIGN1cnJTaGVldC5nZXRDZWxsKDIsIDEwKS52YWx1ZSA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxTY2hlZHVsZWRIb3VycztcbiAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgMTEpLnZhbHVlID0gKGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbCAvIHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxTY2hlZHVsZWRIb3VycyAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhob3Vyc1dvcmtlZE1hcCk7XG4gICAgY29uc29sZS5sb2coc2ltcGxpZmllZFNjaGVkdWxlKVxufVxuXG5jb25zdCBzZXRVcE5ld1NoZWV0ID0gKGhvdXJzV29ya2VkTWFwLCB3ZWVrTmFtZSwgd29ya2Jvb2spID0+IHtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0gPSB7fTtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwgPSAwO1xuICAgIGNvbnN0IHNoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KHdlZWtOYW1lKTtcbiAgICBzaGVldC52aWV3cyA9IFt7fV07XG4gICAgc2hlZXQucHJvcGVydGllcy5kZWZhdWx0Q29sV2lkdGggPSAxNTtcbiAgICBzaGVldC5wcm9wZXJ0aWVzLmRlZmF1bHRSb3dIZWlnaHQgPSAyMDtcbiAgICBzZXRVcENvbHVtbnMoc2hlZXQpO1xufVxuXG5jb25zdCBzZXRVcENvbHVtbnMgPSAod29ya3NoZWV0KSA9PiB7XG4gICAgY29uc3QgZmlyc3ROYW1lID0gd29ya3NoZWV0LmdldENvbHVtbigxKTtcbiAgICBmaXJzdE5hbWUuaGVhZGVyID0gXCJGaXJzdCBOYW1lXCI7XG4gICAgZmlyc3ROYW1lLmtleSA9IFwiZmlyc3ROYW1lXCI7XG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMik7XG4gICAgbGFzdE5hbWUuaGVhZGVyID0gXCJMYXN0IE5hbWVcIjtcbiAgICBsYXN0TmFtZS5rZXkgPSBcImxhc3ROYW1lXCI7XG5cbiAgICBjb25zdCBob3Vyc1dvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMyk7XG4gICAgaG91cnNXb3JrZWQuaGVhZGVyID0gXCJIb3VycyBXb3JrZWRcIjtcbiAgICBob3Vyc1dvcmtlZC5rZXkgPSBcImhvdXJzV29ya2VkXCI7XG5cbiAgICBjb25zdCBob3Vyc1NjaGVkdWxlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNCk7XG4gICAgaG91cnNTY2hlZHVsZWQuaGVhZGVyID0gXCJIb3VycyBTY2hlZHVsZWRcIjtcbiAgICBob3Vyc1NjaGVkdWxlZC5rZXkgPSBcImhvdXJzU2NoZWR1bGVkXCI7XG5cblxuICAgIGNvbnN0IHBlcmNlbnRXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDUpO1xuICAgIHBlcmNlbnRXb3JrZWQuaGVhZGVyID0gXCJQZXJjZW50IFdvcmtlZFwiO1xuICAgIHBlcmNlbnRXb3JrZWQua2V5ID0gXCJwZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gd29ya3NoZWV0LmdldENvbHVtbig2KTtcbiAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrLmhlYWRlciA9IFwiUGVyY2VudCBDaGFuZ2UgZnJvbSBMYXN0IFdlZWtcIjtcbiAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrLmtleSA9IFwiY2hhbmdlRnJvbVByZXZpb3VzV2Vla1wiO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsud2lkdGggPSAyNTtcblxuICAgIGNvbnN0IHRhQXNzaWduZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDcpO1xuICAgIHRhQXNzaWduZWQuaGVhZGVyID0gXCJUQVwiO1xuICAgIHRhQXNzaWduZWQua2V5ID0gXCJ0YVwiO1xuXG4gICAgY29uc3QgdG90YWxXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDkpO1xuICAgIHRvdGFsV29ya2VkLmhlYWRlciA9IFwiVG90YWwgV29ya2VkXCI7XG4gICAgdG90YWxXb3JrZWQua2V5ID0gXCJ0b3RhbFdvcmtlZFwiO1xuXG4gICAgY29uc3QgdG90YWxTY2hlZHVsZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEwKTtcbiAgICB0b3RhbFNjaGVkdWxlZC5oZWFkZXIgPSBcIlRvdGFsIFNjaGVkdWxlZFwiO1xuICAgIHRvdGFsU2NoZWR1bGVkLmtleSA9IFwidG90YWxTY2hlZHVsZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTEpO1xuICAgIHRvdGFsUGVyY2VudFdvcmtlZC5oZWFkZXIgPSBcIlBlcmNlbnQgV29ya2VkXCI7XG4gICAgdG90YWxQZXJjZW50V29ya2VkLmtleSA9IFwidG90YWxQZXJjZW50V29ya2VkXCI7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRDaGFuZ2UgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEyKTtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2UuaGVhZGVyID0gXCJUb3RhbCBQZXJjZW50IENoYW5nZSBmcm9tIExhc3QgV2Vla1wiO1xuICAgIHRvdGFsUGVyY2VudENoYW5nZS5rZXkgPSBcInRvdGFsUGVyY2VudENoYW5nZVwiO1xuICAgIHRvdGFsUGVyY2VudENoYW5nZS53aWR0aCA9IDMwO1xuXG5cbn1cblxuY29uc3QgcG9wdWxhdGVSb3cgPSAod29ya0Jvb2tEYXRhLCBjdXJyZW50SW50ZXJuRGF0YSwgcGVyY2VudGFnZUFjY2VwdGVkLCByb3cpID0+IHtcbiAgICBjb25zdCBjdXJyU2hlZXQgPSB3b3JrQm9va0RhdGEud29ya2Jvb2suZ2V0V29ya3NoZWV0KHdvcmtCb29rRGF0YS53ZWVrTmFtZSk7XG5cbiAgICBjdXJyU2hlZXQuYWRkUm93KHtcbiAgICAgICAgZmlyc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5sYXN0TmFtZSxcbiAgICAgICAgaG91cnNXb3JrZWQ6IG5vcm1hbEhvdXJzV29ya2VkLFxuICAgICAgICBob3Vyc1NjaGVkdWxlZDogbm9ybWFsSG91cnNTY2hlZHVsZWQsXG4gICAgICAgIHBlcmNlbnRXb3JrZWQ6IHBlcmNlbnRhZ2VEaWZmZXJlbmNlLFxuXG4gICAgfSlcblxuICAgIGNvbG9yUGVyY2VudGFnZUNlbGwoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpO1xuXG59XG5cbmNvbnN0IHByb2Nlc3NIb3Vyc0RhdGEgPSAocm93LCB0aW1lU2hlZXQsIGhvdXJzV29ya2VkTWFwLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsSG91cnNXb3JrZWQgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDE1KS52YWx1ZTtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5ub3JtYWxIb3Vyc1dvcmtlZCA9IG5vcm1hbEhvdXJzV29ya2VkO1xuXG4gICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXVtjdXJyZW50SW50ZXJuXTtcbiAgICBjb25zdCBkZWNpbWFsSG91cnNXb3JrZWQgPSBob3Vyc1RvRGVjaW1hbChub3JtYWxIb3Vyc1dvcmtlZCk7XG5cbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwudG90YWxIb3Vyc1dvcmtlZCArPSBkZWNpbWFsSG91cnNXb3JrZWQ7XG4gICAgaG91cnNXb3JrZWRNYXAudG90YWwudG90YWxIb3Vyc1dvcmtlZCArPSBkZWNpbWFsSG91cnNXb3JrZWQ7XG4gICAgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2UgPSAoZGVjaW1hbEhvdXJzV29ya2VkIC8gZGVjaW1hbEhvdXJzU2NoZWR1bGVkICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gcGVyY2VudGFnZURpZmZlcmVuY2U7XG59XG5cbmNvbnN0IHByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gKHdvcmtib29rLCBob3Vyc1dvcmtlZE1hcCkgPT4ge1xuXG4gICAgd29ya2Jvb2suZWFjaFNoZWV0KCh3b3Jrc2hlZXQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycldlZWsgPSB3b3Jrc2hlZXQubmFtZTtcbiAgICAgICAgY29uc3QgcHJldldlZWsgPSBnZXRXZWVrQmVmb3JlKGN1cnJXZWVrKTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMjsgcm93IDw9IHdvcmtzaGVldC5yb3dDb3VudDsgcm93KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9IHdvcmtzaGVldC5nZXRDZWxsKHJvdywgMSkudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9IHdvcmtzaGVldC5nZXRDZWxsKHJvdywgMikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWs7XG4gICAgICAgICAgICBpZiAoaG91cnNXb3JrZWRNYXBbcHJldldlZWtdICYmIGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtmdWxsTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrID0gaG91cnNXb3JrZWRNYXBbcHJldldlZWtdW2Z1bGxOYW1lXS5wZXJjZW50YWdlRGlmZmVyZW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW2N1cnJXZWVrXVtmdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgZGlmZmVyZW5jZUZyb21XZWVrcyA9IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWsgP1xuICAgICAgICAgICAgICAgIChwZXJjZW50YWdlRGlmZmVyZW5jZU9mQ3VycmVudFdlZWsgLSBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrKS50b0ZpeGVkKDIpIDogXCJcIjtcblxuICAgICAgICAgICAgY29uc3QgY3VyckNlbGwgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDYpO1xuICAgICAgICAgICAgY3VyckNlbGwudmFsdWUgPSBkaWZmZXJlbmNlRnJvbVdlZWtzO1xuXG4gICAgICAgICAgICBpZiAoY3VyckNlbGwgPD0gLTE1KSB7XG4gICAgICAgICAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VyckNlbGwgPiAxNSkge1xuICAgICAgICAgICAgICAgIGN1cnJDZWxsLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgZmdDb2xvcjogeyBhcmdiOiAnODA0MmY1OGQnIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmNvbnN0IGNvbG9yUGVyY2VudGFnZUNlbGwgPSAoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyQ2VsbCA9IGN1cnJTaGVldC5nZXRDZWxsKGN1cnJTaGVldC5yb3dDb3VudCwgNSlcbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPCBwZXJjZW50YWdlQWNjZXB0ZWQpIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPiAxMDApIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWtlVGltZXNoZWV0QW5hbHlzaXM7Il0sIm5hbWVzIjpbIkV4Y2VsSlMiLCJGaWxlU2F2ZXIiLCJob3Vyc1RvRGVjaW1hbCIsImdldERhdGVGcm9tU3RyaW5nIiwiZGVjaW1hbFRvSG91cnMiLCJnZXRXZWVrQmVmb3JlIiwibWFrZVRpbWVzaGVldEFuYWx5c2lzIiwidGltZXNoZWV0RXhjZWwiLCJzaW1wbGlmaWVkU2NoZWR1bGUiLCJwZXJjZW50YWdlQWNjZXB0ZWQiLCJ3b3JrYm9vayIsIldvcmtib29rIiwidGVzdCIsImhpIiwiYnllIiwidHJ5IiwiY29uc29sZSIsImxvZyIsImhvdXJzV29ya2VkTWFwIiwiaW5pdGlhbGl6ZUhvdXJzV29ya2VkTWFwIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicG9wdWxhdGVIb3Vyc1dvcmtlZE1hcCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwid2Vla05hbWUiLCJ0b3RhbCIsInRvdGFsSG91cnNXb3JrZWQiLCJ0b3RhbEhvdXJzU2NoZWR1bGVkIiwiaW50ZXJucyIsImludGVybiIsImRlY2ltYWxIb3Vyc1NjaGVkdWxlZCIsIm5vcm1hbEhvdXJzU2NoZWR1bGVkIiwiY3VyckludGVybiIsIm5vcm1hbEhvdXJzV29ya2VkIiwicGVyY2VudGFnZURpZmZlcmVuY2UiLCJ0aW1lU2hlZXQiLCJnZXRXb3Jrc2hlZXQiLCJ0ZW1wRmlyc3ROYW1lIiwiZ2V0Q2VsbCIsInZhbHVlIiwidGVtcExhc3ROYW1lIiwiY3VycmVudEludGVybiIsInJvdyIsInJvd0NvdW50IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkYXRlIiwiY3VycmVudFdlZWsiLCJwcm9jZXNzSG91cnNEYXRhIiwic2V0VXBOZXdTaGVldCIsInNoZWV0IiwiYWRkV29ya3NoZWV0Iiwidmlld3MiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdENvbFdpZHRoIiwiZGVmYXVsdFJvd0hlaWdodCIsInNldFVwQ29sdW1ucyIsIndvcmtzaGVldCIsImdldENvbHVtbiIsImhlYWRlciIsImtleSIsImhvdXJzV29ya2VkIiwiaG91cnNTY2hlZHVsZWQiLCJwZXJjZW50V29ya2VkIiwiY2hhbmdlRnJvbVByZXZpb3VzV2VlayIsIndpZHRoIiwidGFBc3NpZ25lZCIsInRvdGFsV29ya2VkIiwidG90YWxTY2hlZHVsZWQiLCJ0b3RhbFBlcmNlbnRXb3JrZWQiLCJ0b3RhbFBlcmNlbnRDaGFuZ2UiLCJwb3B1bGF0ZVJvdyIsIndvcmtCb29rRGF0YSIsImN1cnJlbnRJbnRlcm5EYXRhIiwiY3VyclNoZWV0IiwiYWRkUm93IiwiY29sb3JQZXJjZW50YWdlQ2VsbCIsImRlY2ltYWxIb3Vyc1dvcmtlZCIsInRvRml4ZWQiLCJwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2VlayIsImVhY2hTaGVldCIsImN1cnJXZWVrIiwibmFtZSIsInByZXZXZWVrIiwiZnVsbE5hbWUiLCJwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrIiwicGVyY2VudGFnZURpZmZlcmVuY2VPZkN1cnJlbnRXZWVrIiwiZGlmZmVyZW5jZUZyb21XZWVrcyIsImN1cnJDZWxsIiwiZmlsbCIsInR5cGUiLCJwYXR0ZXJuIiwiZmdDb2xvciIsImFyZ2IiLCJwYXJzZUZsb2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});