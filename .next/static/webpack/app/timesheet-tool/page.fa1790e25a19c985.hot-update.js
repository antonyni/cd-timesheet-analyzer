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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    let hoursWorkedMap = {};\n    initializeHoursWorkedMap(hoursWorkedMap, simplifiedSchedule);\n    console.log(simplifiedSchedule);\n    populateHoursWorkedMap(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted);\n// processChangeFromPreviousWeek(workbook, hoursWorkedMap);\n// workbook.xlsx.writeBuffer().then(data => {\n//     const blob = new Blob([data]);\n//     FileSaver.saveAs(blob, \"Timesheet Analysis.xlsx\");\n// });\n};\nconst initializeHoursWorkedMap = (hoursWorkedMap, simplifiedSchedule)=>{\n    Object.keys(simplifiedSchedule).forEach((weekName)=>{\n        if (!hoursWorkedMap[weekName]) {\n            hoursWorkedMap[weekName] = {\n                total: {\n                    totalHoursWorked: 0,\n                    totalHoursScheduled: 0\n                },\n                interns: {}\n            };\n        }\n        Object.keys(simplifiedSchedule[weekName].interns).forEach((intern)=>{\n            const decimalHoursScheduled = simplifiedSchedule[weekName].interns[intern];\n            const normalHoursScheduled1 = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n            if (!hoursWorkedMap[weekName].interns[intern]) {\n                hoursWorkedMap[weekName].interns[intern] = {};\n            }\n            const currIntern = hoursWorkedMap[weekName].interns[intern];\n            currIntern.normalHoursWorked = \"00:00\";\n            currIntern.normalHoursScheduled = normalHoursScheduled1;\n            currIntern.percentageDifference = 0;\n            console.log(intern);\n            console.log(hoursWorkedMap[weekName].interns[intern]);\n            console.log(hoursWorkedMap[weekName].interns);\n        });\n        hoursWorkedMap[weekName].total.totalHoursScheduled = simplifiedSchedule[weekName].totalHoursScheduled;\n    });\n    console.log(hoursWorkedMap);\n};\nconst populateHoursWorkedMap = (timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted)=>{\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    const tempFirstName = timeSheet.getCell(2, 1).value;\n    const tempLastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = tempFirstName + \" \" + tempLastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const firstName = timeSheet.getCell(row, 1).value;\n        const lastName = timeSheet.getCell(row, 2).value;\n        if (firstName && firstName + \" \" + lastName != currentIntern) {\n            currentIntern = firstName + \" \" + lastName;\n        }\n        const date = timeSheet.getCell(row, 5).value;\n        if (date) {\n            const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n            if (hoursWorkedMap[weekName]) {\n                const currentWeek = hoursWorkedMap[weekName].interns;\n                if (currentWeek[currentIntern]) {\n                    processHoursData(row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule);\n                }\n            }\n        }\n    // populateRow(workBookData, currentInternData, percentageAccepted, row);\n    // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n    // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n    // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n    }\n    console.log(hoursWorkedMap);\n    console.log(simplifiedSchedule);\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Percent Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    changeFromPreviousWeek.width = 25;\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Total Percent Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n    totalPercentChange.width = 30;\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule)=>{\n    const normalHoursWorked1 = timeSheet.getCell(row, 15).value;\n    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked1;\n    const decimalHoursScheduled = simplifiedSchedule[weekName][currentIntern];\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked1);\n    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.totalHoursWorked += decimalHoursWorked;\n    const percentageDifference1 = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference1;\n};\nconst processChangeFromPreviousWeek = (workbook, hoursWorkedMap)=>{\n    workbook.eachSheet((worksheet)=>{\n        const currWeek = worksheet.name;\n        const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n        for(let row = 2; row <= worksheet.rowCount; row++){\n            const firstName = worksheet.getCell(row, 1).value;\n            const lastName = worksheet.getCell(row, 2).value;\n            const fullName = firstName + \" \" + lastName;\n            let percentageDifferenceOfPreviousWeek;\n            if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {\n                percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;\n            }\n            const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;\n            let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n            const currCell = worksheet.getCell(row, 6);\n            currCell.value = differenceFromWeeks;\n            if (currCell <= -15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"80e76060\"\n                    }\n                };\n            }\n            if (currCell > 15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"8042f58d\"\n                    }\n                };\n            }\n        }\n    });\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLElBQUlZLGlCQUFpQixDQUNyQjtJQUVBQyx5QkFBeUJELGdCQUFnQko7SUFDekNNLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDWlEsdUJBQXVCVCxnQkFBZ0JLLGdCQUFnQkosb0JBQW9CQztBQUUzRSwyREFBMkQ7QUFJM0QsNkNBQTZDO0FBQzdDLHFDQUFxQztBQUNyQyx5REFBeUQ7QUFDekQsTUFBTTtBQUVWO0FBRUEsTUFBTUksMkJBQTJCLENBQUNELGdCQUFnQko7SUFDOUNTLE9BQU9DLElBQUksQ0FBQ1Ysb0JBQW9CVyxPQUFPLENBQUMsQ0FBQ0M7UUFDckMsSUFBSSxDQUFDUixjQUFjLENBQUNRLFNBQVMsRUFBRTtZQUMzQlIsY0FBYyxDQUFDUSxTQUFTLEdBQUc7Z0JBQ3ZCQyxPQUFPO29CQUNIQyxrQkFBa0I7b0JBQ2xCQyxxQkFBcUI7Z0JBQ3pCO2dCQUNBQyxTQUFTLENBRVQ7WUFDSjtRQUNKO1FBR0FQLE9BQU9DLElBQUksQ0FBQ1Ysa0JBQWtCLENBQUNZLFNBQVMsQ0FBQ0ksT0FBTyxFQUFFTCxPQUFPLENBQUMsQ0FBQ007WUFDdkQsTUFBTUMsd0JBQXdCbEIsa0JBQWtCLENBQUNZLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPO1lBQzFFLE1BQU1FLHdCQUF1QnZCLDJEQUFjQSxDQUFDc0I7WUFDNUMsSUFBRyxDQUFDZCxjQUFjLENBQUNRLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPLEVBQUM7Z0JBQ3pDYixjQUFjLENBQUNRLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUNoRDtZQUVB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QUFNO1lBQVc7UUFDaEM7SUFDSjtBQUNKO0FBR0EsK0RBQWVuRixxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvbWFrZVRpbWVTaGVldEFuYWx5c2lzLmpzeD85NWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4Y2VsSlMgZnJvbSAnZXhjZWxqcydcbmltcG9ydCAqIGFzIEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xuaW1wb3J0IGhvdXJzVG9EZWNpbWFsIGZyb20gJy4vaG91cnNUb0RlY2ltYWwnO1xuaW1wb3J0IGdldERhdGVGcm9tU3RyaW5nIGZyb20gJy4vZ2V0RGF0ZUZyb21TdHJpbmcnO1xuaW1wb3J0IGRlY2ltYWxUb0hvdXJzIGZyb20gJy4vZGVjaW1hbFRvSG91cnMnO1xuaW1wb3J0IGdldFdlZWtCZWZvcmUgZnJvbSAnLi9nZXRXZWVrQmVmb3JlJztcblxuY29uc3QgbWFrZVRpbWVzaGVldEFuYWx5c2lzID0gKHRpbWVzaGVldEV4Y2VsLCBzaW1wbGlmaWVkU2NoZWR1bGUsIHBlcmNlbnRhZ2VBY2NlcHRlZCkgPT4ge1xuICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcbiAgICBsZXQgaG91cnNXb3JrZWRNYXAgPSB7XG4gICAgfTtcblxuICAgIGluaXRpYWxpemVIb3Vyc1dvcmtlZE1hcChob3Vyc1dvcmtlZE1hcCwgc2ltcGxpZmllZFNjaGVkdWxlKTtcbiAgICBjb25zb2xlLmxvZyhzaW1wbGlmaWVkU2NoZWR1bGUpO1xuICAgIHBvcHVsYXRlSG91cnNXb3JrZWRNYXAodGltZXNoZWV0RXhjZWwsIGhvdXJzV29ya2VkTWFwLCBzaW1wbGlmaWVkU2NoZWR1bGUsIHBlcmNlbnRhZ2VBY2NlcHRlZCk7XG5cbiAgICAvLyBwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2Vlayh3b3JrYm9vaywgaG91cnNXb3JrZWRNYXApO1xuXG5cblxuICAgIC8vIHdvcmtib29rLnhsc3gud3JpdGVCdWZmZXIoKS50aGVuKGRhdGEgPT4ge1xuICAgIC8vICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGFdKTtcbiAgICAvLyAgICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBcIlRpbWVzaGVldCBBbmFseXNpcy54bHN4XCIpO1xuICAgIC8vIH0pO1xuXG59XG5cbmNvbnN0IGluaXRpYWxpemVIb3Vyc1dvcmtlZE1hcCA9IChob3Vyc1dvcmtlZE1hcCwgc2ltcGxpZmllZFNjaGVkdWxlKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoc2ltcGxpZmllZFNjaGVkdWxlKS5mb3JFYWNoKCh3ZWVrTmFtZSkgPT4ge1xuICAgICAgICBpZiAoIWhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSkge1xuICAgICAgICAgICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdID0ge1xuICAgICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSG91cnNXb3JrZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSG91cnNTY2hlZHVsZWQ6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnRlcm5zOiB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cblxuICAgICAgICBPYmplY3Qua2V5cyhzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLmludGVybnMpLmZvckVhY2goKGludGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS5pbnRlcm5zW2ludGVybl07XG4gICAgICAgICAgICBjb25zdCBub3JtYWxIb3Vyc1NjaGVkdWxlZCA9IGRlY2ltYWxUb0hvdXJzKGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCk7XG4gICAgICAgICAgICBpZighaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXSl7XG4gICAgICAgICAgICAgICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJySW50ZXJuID0gaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXTtcbiAgICAgICAgICAgIGN1cnJJbnRlcm4ubm9ybWFsSG91cnNXb3JrZWQgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICBjdXJySW50ZXJuLm5vcm1hbEhvdXJzU2NoZWR1bGVkID0gbm9ybWFsSG91cnNTY2hlZHVsZWQ7XG4gICAgICAgICAgICBjdXJySW50ZXJuLnBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGludGVybik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tpbnRlcm5dKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zKTtcbiAgICAgICAgfSlcbiAgICAgICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsLnRvdGFsSG91cnNTY2hlZHVsZWQgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLnRvdGFsSG91cnNTY2hlZHVsZWQ7XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhob3Vyc1dvcmtlZE1hcCk7XG59XG5cbmNvbnN0IHBvcHVsYXRlSG91cnNXb3JrZWRNYXAgPSAodGltZXNoZWV0RXhjZWwsIGhvdXJzV29ya2VkTWFwLCBzaW1wbGlmaWVkU2NoZWR1bGUsIHBlcmNlbnRhZ2VBY2NlcHRlZCkgPT4ge1xuICAgIGNvbnN0IHRpbWVTaGVldCA9IHRpbWVzaGVldEV4Y2VsLmdldFdvcmtzaGVldChcIkFsbCBFbXBsb3llZXNcIik7XG5cbiAgICBjb25zdCB0ZW1wRmlyc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwoMiwgMSkudmFsdWU7XG4gICAgY29uc3QgdGVtcExhc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwoMiwgMikudmFsdWU7XG4gICAgbGV0IGN1cnJlbnRJbnRlcm4gPSB0ZW1wRmlyc3ROYW1lICsgXCIgXCIgKyB0ZW1wTGFzdE5hbWU7XG4gICAgZm9yIChsZXQgcm93ID0gMjsgcm93IDw9IHRpbWVTaGVldC5yb3dDb3VudDsgcm93KyspIHtcblxuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDEpLnZhbHVlO1xuICAgICAgICBjb25zdCBsYXN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMikudmFsdWU7XG4gICAgICAgIGlmIChmaXJzdE5hbWUgJiZcbiAgICAgICAgICAgIChmaXJzdE5hbWUgKyBcIiBcIiArIGxhc3ROYW1lICE9IGN1cnJlbnRJbnRlcm4pKSB7XG4gICAgICAgICAgICBjdXJyZW50SW50ZXJuID0gZmlyc3ROYW1lICsgXCIgXCIgKyBsYXN0TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gdGltZVNoZWV0LmdldENlbGwocm93LCA1KS52YWx1ZTtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWtOYW1lID0gZ2V0RGF0ZUZyb21TdHJpbmcodGltZVNoZWV0LmdldENlbGwocm93LCA1KS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRXZWVrW2N1cnJlbnRJbnRlcm5dKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NIb3Vyc0RhdGEocm93LCB0aW1lU2hlZXQsIGhvdXJzV29ya2VkTWFwLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcG9wdWxhdGVSb3cod29ya0Jvb2tEYXRhLCBjdXJyZW50SW50ZXJuRGF0YSwgcGVyY2VudGFnZUFjY2VwdGVkLCByb3cpO1xuICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCA5KS52YWx1ZSA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbDtcbiAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgMTApLnZhbHVlID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS50b3RhbFNjaGVkdWxlZEhvdXJzO1xuICAgICAgICAvLyBjdXJyU2hlZXQuZ2V0Q2VsbCgyLCAxMSkudmFsdWUgPSAoaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsIC8gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS50b3RhbFNjaGVkdWxlZEhvdXJzICogMTAwKS50b0ZpeGVkKDIpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGhvdXJzV29ya2VkTWFwKTtcbiAgICBjb25zb2xlLmxvZyhzaW1wbGlmaWVkU2NoZWR1bGUpXG59XG5cbmNvbnN0IHNldFVwTmV3U2hlZXQgPSAoaG91cnNXb3JrZWRNYXAsIHdlZWtOYW1lLCB3b3JrYm9vaykgPT4ge1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSA9IHt9O1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbCA9IDA7XG4gICAgY29uc3Qgc2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQod2Vla05hbWUpO1xuICAgIHNoZWV0LnZpZXdzID0gW3t9XTtcbiAgICBzaGVldC5wcm9wZXJ0aWVzLmRlZmF1bHRDb2xXaWR0aCA9IDE1O1xuICAgIHNoZWV0LnByb3BlcnRpZXMuZGVmYXVsdFJvd0hlaWdodCA9IDIwO1xuICAgIHNldFVwQ29sdW1ucyhzaGVldCk7XG59XG5cbmNvbnN0IHNldFVwQ29sdW1ucyA9ICh3b3Jrc2hlZXQpID0+IHtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEpO1xuICAgIGZpcnN0TmFtZS5oZWFkZXIgPSBcIkZpcnN0IE5hbWVcIjtcbiAgICBmaXJzdE5hbWUua2V5ID0gXCJmaXJzdE5hbWVcIjtcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gd29ya3NoZWV0LmdldENvbHVtbigyKTtcbiAgICBsYXN0TmFtZS5oZWFkZXIgPSBcIkxhc3QgTmFtZVwiO1xuICAgIGxhc3ROYW1lLmtleSA9IFwibGFzdE5hbWVcIjtcblxuICAgIGNvbnN0IGhvdXJzV29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbigzKTtcbiAgICBob3Vyc1dvcmtlZC5oZWFkZXIgPSBcIkhvdXJzIFdvcmtlZFwiO1xuICAgIGhvdXJzV29ya2VkLmtleSA9IFwiaG91cnNXb3JrZWRcIjtcblxuICAgIGNvbnN0IGhvdXJzU2NoZWR1bGVkID0gd29ya3NoZWV0LmdldENvbHVtbig0KTtcbiAgICBob3Vyc1NjaGVkdWxlZC5oZWFkZXIgPSBcIkhvdXJzIFNjaGVkdWxlZFwiO1xuICAgIGhvdXJzU2NoZWR1bGVkLmtleSA9IFwiaG91cnNTY2hlZHVsZWRcIjtcblxuXG4gICAgY29uc3QgcGVyY2VudFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNSk7XG4gICAgcGVyY2VudFdvcmtlZC5oZWFkZXIgPSBcIlBlcmNlbnQgV29ya2VkXCI7XG4gICAgcGVyY2VudFdvcmtlZC5rZXkgPSBcInBlcmNlbnRXb3JrZWRcIjtcblxuICAgIGNvbnN0IGNoYW5nZUZyb21QcmV2aW91c1dlZWsgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDYpO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsuaGVhZGVyID0gXCJQZXJjZW50IENoYW5nZSBmcm9tIExhc3QgV2Vla1wiO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsua2V5ID0gXCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrXCI7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay53aWR0aCA9IDI1O1xuXG4gICAgY29uc3QgdGFBc3NpZ25lZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNyk7XG4gICAgdGFBc3NpZ25lZC5oZWFkZXIgPSBcIlRBXCI7XG4gICAgdGFBc3NpZ25lZC5rZXkgPSBcInRhXCI7XG5cbiAgICBjb25zdCB0b3RhbFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oOSk7XG4gICAgdG90YWxXb3JrZWQuaGVhZGVyID0gXCJUb3RhbCBXb3JrZWRcIjtcbiAgICB0b3RhbFdvcmtlZC5rZXkgPSBcInRvdGFsV29ya2VkXCI7XG5cbiAgICBjb25zdCB0b3RhbFNjaGVkdWxlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTApO1xuICAgIHRvdGFsU2NoZWR1bGVkLmhlYWRlciA9IFwiVG90YWwgU2NoZWR1bGVkXCI7XG4gICAgdG90YWxTY2hlZHVsZWQua2V5ID0gXCJ0b3RhbFNjaGVkdWxlZFwiO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50V29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbigxMSk7XG4gICAgdG90YWxQZXJjZW50V29ya2VkLmhlYWRlciA9IFwiUGVyY2VudCBXb3JrZWRcIjtcbiAgICB0b3RhbFBlcmNlbnRXb3JrZWQua2V5ID0gXCJ0b3RhbFBlcmNlbnRXb3JrZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudENoYW5nZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTIpO1xuICAgIHRvdGFsUGVyY2VudENoYW5nZS5oZWFkZXIgPSBcIlRvdGFsIFBlcmNlbnQgQ2hhbmdlIGZyb20gTGFzdCBXZWVrXCI7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLmtleSA9IFwidG90YWxQZXJjZW50Q2hhbmdlXCI7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLndpZHRoID0gMzA7XG5cblxufVxuXG5jb25zdCBwb3B1bGF0ZVJvdyA9ICh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHJvdykgPT4ge1xuICAgIGNvbnN0IGN1cnJTaGVldCA9IHdvcmtCb29rRGF0YS53b3JrYm9vay5nZXRXb3Jrc2hlZXQod29ya0Jvb2tEYXRhLndlZWtOYW1lKTtcblxuICAgIGN1cnJTaGVldC5hZGRSb3coe1xuICAgICAgICBmaXJzdE5hbWU6IGN1cnJlbnRJbnRlcm5EYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGN1cnJlbnRJbnRlcm5EYXRhLmxhc3ROYW1lLFxuICAgICAgICBob3Vyc1dvcmtlZDogbm9ybWFsSG91cnNXb3JrZWQsXG4gICAgICAgIGhvdXJzU2NoZWR1bGVkOiBub3JtYWxIb3Vyc1NjaGVkdWxlZCxcbiAgICAgICAgcGVyY2VudFdvcmtlZDogcGVyY2VudGFnZURpZmZlcmVuY2UsXG5cbiAgICB9KVxuXG4gICAgY29sb3JQZXJjZW50YWdlQ2VsbChjdXJyU2hlZXQsIHBlcmNlbnRhZ2VBY2NlcHRlZCk7XG5cbn1cblxuY29uc3QgcHJvY2Vzc0hvdXJzRGF0YSA9IChyb3csIHRpbWVTaGVldCwgaG91cnNXb3JrZWRNYXAsIGN1cnJlbnRJbnRlcm4sIHdlZWtOYW1lLCBzaW1wbGlmaWVkU2NoZWR1bGUpID0+IHtcbiAgICBjb25zdCBub3JtYWxIb3Vyc1dvcmtlZCA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMTUpLnZhbHVlO1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkID0gbm9ybWFsSG91cnNXb3JrZWQ7XG5cbiAgICBjb25zdCBkZWNpbWFsSG91cnNTY2hlZHVsZWQgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdW2N1cnJlbnRJbnRlcm5dO1xuICAgIGNvbnN0IGRlY2ltYWxIb3Vyc1dvcmtlZCA9IGhvdXJzVG9EZWNpbWFsKG5vcm1hbEhvdXJzV29ya2VkKTtcblxuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC50b3RhbEhvdXJzV29ya2VkICs9IGRlY2ltYWxIb3Vyc1dvcmtlZDtcbiAgICBob3Vyc1dvcmtlZE1hcC50b3RhbC50b3RhbEhvdXJzV29ya2VkICs9IGRlY2ltYWxIb3Vyc1dvcmtlZDtcbiAgICBjb25zdCBwZXJjZW50YWdlRGlmZmVyZW5jZSA9IChkZWNpbWFsSG91cnNXb3JrZWQgLyBkZWNpbWFsSG91cnNTY2hlZHVsZWQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbY3VycmVudEludGVybl0ucGVyY2VudGFnZURpZmZlcmVuY2UgPSBwZXJjZW50YWdlRGlmZmVyZW5jZTtcbn1cblxuY29uc3QgcHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsgPSAod29ya2Jvb2ssIGhvdXJzV29ya2VkTWFwKSA9PiB7XG5cbiAgICB3b3JrYm9vay5lYWNoU2hlZXQoKHdvcmtzaGVldCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyV2VlayA9IHdvcmtzaGVldC5uYW1lO1xuICAgICAgICBjb25zdCBwcmV2V2VlayA9IGdldFdlZWtCZWZvcmUoY3VycldlZWspO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAyOyByb3cgPD0gd29ya3NoZWV0LnJvd0NvdW50OyByb3crKykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gd29ya3NoZWV0LmdldENlbGwocm93LCAxKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gd29ya3NoZWV0LmdldENlbGwocm93LCAyKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWU7XG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlaztcbiAgICAgICAgICAgIGlmIChob3Vyc1dvcmtlZE1hcFtwcmV2V2Vla10gJiYgaG91cnNXb3JrZWRNYXBbcHJldldlZWtdW2Z1bGxOYW1lXSkge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWsgPSBob3Vyc1dvcmtlZE1hcFtwcmV2V2Vla11bZnVsbE5hbWVdLnBlcmNlbnRhZ2VEaWZmZXJlbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2VPZkN1cnJlbnRXZWVrID0gaG91cnNXb3JrZWRNYXBbY3VycldlZWtdW2Z1bGxOYW1lXS5wZXJjZW50YWdlRGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBkaWZmZXJlbmNlRnJvbVdlZWtzID0gcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayA/XG4gICAgICAgICAgICAgICAgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayAtIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWspLnRvRml4ZWQoMikgOiBcIlwiO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyQ2VsbCA9IHdvcmtzaGVldC5nZXRDZWxsKHJvdywgNik7XG4gICAgICAgICAgICBjdXJyQ2VsbC52YWx1ZSA9IGRpZmZlcmVuY2VGcm9tV2Vla3M7XG5cbiAgICAgICAgICAgIGlmIChjdXJyQ2VsbCA8PSAtMTUpIHtcbiAgICAgICAgICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwZTc2MDYwJyB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyQ2VsbCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuY29uc3QgY29sb3JQZXJjZW50YWdlQ2VsbCA9IChjdXJyU2hlZXQsIHBlcmNlbnRhZ2VBY2NlcHRlZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJDZWxsID0gY3VyclNoZWV0LmdldENlbGwoY3VyclNoZWV0LnJvd0NvdW50LCA1KVxuICAgIGlmIChwYXJzZUZsb2F0KGN1cnJDZWxsKSA8IHBlcmNlbnRhZ2VBY2NlcHRlZCkge1xuICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwZTc2MDYwJyB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChwYXJzZUZsb2F0KGN1cnJDZWxsKSA+IDEwMCkge1xuICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwNDJmNThkJyB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VUaW1lc2hlZXRBbmFseXNpczsiXSwibmFtZXMiOlsiRXhjZWxKUyIsIkZpbGVTYXZlciIsImhvdXJzVG9EZWNpbWFsIiwiZ2V0RGF0ZUZyb21TdHJpbmciLCJkZWNpbWFsVG9Ib3VycyIsImdldFdlZWtCZWZvcmUiLCJtYWtlVGltZXNoZWV0QW5hbHlzaXMiLCJ0aW1lc2hlZXRFeGNlbCIsInNpbXBsaWZpZWRTY2hlZHVsZSIsInBlcmNlbnRhZ2VBY2NlcHRlZCIsIndvcmtib29rIiwiV29ya2Jvb2siLCJob3Vyc1dvcmtlZE1hcCIsImluaXRpYWxpemVIb3Vyc1dvcmtlZE1hcCIsImNvbnNvbGUiLCJsb2ciLCJwb3B1bGF0ZUhvdXJzV29ya2VkTWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ3ZWVrTmFtZSIsInRvdGFsIiwidG90YWxIb3Vyc1dvcmtlZCIsInRvdGFsSG91cnNTY2hlZHVsZWQiLCJpbnRlcm5zIiwiaW50ZXJuIiwiZGVjaW1hbEhvdXJzU2NoZWR1bGVkIiwibm9ybWFsSG91cnNTY2hlZHVsZWQiLCJjdXJySW50ZXJuIiwibm9ybWFsSG91cnNXb3JrZWQiLCJwZXJjZW50YWdlRGlmZmVyZW5jZSIsInRpbWVTaGVldCIsImdldFdvcmtzaGVldCIsInRlbXBGaXJzdE5hbWUiLCJnZXRDZWxsIiwidmFsdWUiLCJ0ZW1wTGFzdE5hbWUiLCJjdXJyZW50SW50ZXJuIiwicm93Iiwicm93Q291bnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGUiLCJjdXJyZW50V2VlayIsInByb2Nlc3NIb3Vyc0RhdGEiLCJzZXRVcE5ld1NoZWV0Iiwic2hlZXQiLCJhZGRXb3Jrc2hlZXQiLCJ2aWV3cyIsInByb3BlcnRpZXMiLCJkZWZhdWx0Q29sV2lkdGgiLCJkZWZhdWx0Um93SGVpZ2h0Iiwic2V0VXBDb2x1bW5zIiwid29ya3NoZWV0IiwiZ2V0Q29sdW1uIiwiaGVhZGVyIiwia2V5IiwiaG91cnNXb3JrZWQiLCJob3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRXb3JrZWQiLCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwid2lkdGgiLCJ0YUFzc2lnbmVkIiwidG90YWxXb3JrZWQiLCJ0b3RhbFNjaGVkdWxlZCIsInRvdGFsUGVyY2VudFdvcmtlZCIsInRvdGFsUGVyY2VudENoYW5nZSIsInBvcHVsYXRlUm93Iiwid29ya0Jvb2tEYXRhIiwiY3VycmVudEludGVybkRhdGEiLCJjdXJyU2hlZXQiLCJhZGRSb3ciLCJjb2xvclBlcmNlbnRhZ2VDZWxsIiwiZGVjaW1hbEhvdXJzV29ya2VkIiwidG9GaXhlZCIsInByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwiZWFjaFNoZWV0IiwiY3VycldlZWsiLCJuYW1lIiwicHJldldlZWsiLCJmdWxsTmFtZSIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWsiLCJwZXJjZW50YWdlRGlmZmVyZW5jZU9mQ3VycmVudFdlZWsiLCJkaWZmZXJlbmNlRnJvbVdlZWtzIiwiY3VyckNlbGwiLCJmaWxsIiwidHlwZSIsInBhdHRlcm4iLCJmZ0NvbG9yIiwiYXJnYiIsInBhcnNlRmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});