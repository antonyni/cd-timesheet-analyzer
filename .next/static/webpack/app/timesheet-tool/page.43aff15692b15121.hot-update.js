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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    const hoursWorkedMap = {};\n    initializeHoursWorkedMap(hoursWorkedMap, simplifiedSchedule);\n    populateHoursWorkedMap(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted);\n    console.log(hoursWorkedMap);\n    processChangeFromPreviousWeek(workbook, hoursWorkedMap);\n// workbook.xlsx.writeBuffer().then(data => {\n//     const blob = new Blob([data]);\n//     FileSaver.saveAs(blob, \"Timesheet Analysis.xlsx\");\n// });\n};\nconst initializeHoursWorkedMap = (hoursWorkedMap, simplifiedSchedule)=>{\n    Object.keys(simplifiedSchedule).forEach((weekName)=>{\n        if (!hoursWorkedMap[weekName]) {\n            hoursWorkedMap[weekName] = {\n                total: {\n                    totalHoursWorked: 0,\n                    totalHoursScheduled: 0\n                },\n                interns: {}\n            };\n        }\n        Object.keys(simplifiedSchedule[weekName].interns).forEach((intern)=>{\n            const decimalHoursScheduled = simplifiedSchedule[weekName].interns[intern];\n            const normalHoursScheduled1 = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n            if (!hoursWorkedMap[weekName].interns[intern]) {\n                hoursWorkedMap[weekName].interns[intern] = {};\n            }\n            const currIntern = hoursWorkedMap[weekName].interns[intern];\n            currIntern.normalHoursWorked = \"00:00\";\n            currIntern.normalHoursScheduled = normalHoursScheduled1;\n            currIntern.percentageDifference = 0;\n        });\n        hoursWorkedMap[weekName].total.totalHoursScheduled = simplifiedSchedule[weekName].totalHoursScheduled;\n    });\n};\nconst populateHoursWorkedMap = (timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted)=>{\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    const tempFirstName = timeSheet.getCell(2, 1).value;\n    const tempLastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = tempFirstName + \" \" + tempLastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const firstName = timeSheet.getCell(row, 1).value;\n        const lastName = timeSheet.getCell(row, 2).value;\n        if (firstName && firstName + \" \" + lastName != currentIntern) {\n            currentIntern = firstName + \" \" + lastName;\n        }\n        const date = timeSheet.getCell(row, 5).value;\n        if (date) {\n            const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n            if (hoursWorkedMap[weekName]) {\n                const currentWeek = hoursWorkedMap[weekName].interns;\n                if (currentWeek[currentIntern] && currentWeek[currentIntern].normalHoursWorked == \"00:00\") {\n                    processHoursData(row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule);\n                }\n            }\n        }\n    // populateRow(workBookData, currentInternData, percentageAccepted, row);\n    // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n    // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n    // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n    }\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Percent Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    changeFromPreviousWeek.width = 25;\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Total Percent Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n    totalPercentChange.width = 30;\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule)=>{\n    const normalHoursWorked1 = timeSheet.getCell(row, 15).value ? timeSheet.getCell(row, 15).value : \"00:00\";\n    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked1;\n    const decimalHoursScheduled = simplifiedSchedule[weekName].interns[currentIntern];\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked1);\n    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;\n    hoursWorkedMap.total.total.totalHoursWorked += decimalHoursWorked;\n    const percentageDifference1 = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference1;\n};\nconst processChangeFromPreviousWeek = (workbook, hoursWorkedMap)=>{\n    workbook.eachSheet((worksheet)=>{\n        const currWeek = worksheet.name;\n        const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n        for(let row = 2; row <= worksheet.rowCount; row++){\n            const firstName = worksheet.getCell(row, 1).value;\n            const lastName = worksheet.getCell(row, 2).value;\n            const fullName = firstName + \" \" + lastName;\n            let percentageDifferenceOfPreviousWeek;\n            if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {\n                percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;\n            }\n            const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;\n            let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n            const currCell = worksheet.getCell(row, 6);\n            currCell.value = differenceFromWeeks;\n            if (currCell <= -15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"80e76060\"\n                    }\n                };\n            }\n            if (currCell > 15) {\n                currCell.fill = {\n                    type: \"pattern\",\n                    pattern: \"solid\",\n                    fgColor: {\n                        argb: \"8042f58d\"\n                    }\n                };\n            }\n        }\n    });\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLE1BQU1ZLGlCQUFpQixDQUN2QjtJQUVBQyx5QkFBeUJELGdCQUFnQko7SUFDekNNLHVCQUF1QlAsZ0JBQWdCSyxnQkFBZ0JKLG9CQUFvQkM7SUFDM0VNLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWkssOEJBQThCUCxVQUFVRTtBQUV4Qyw2Q0FBNkM7QUFDN0MscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUN6RCxNQUFNO0FBRVY7QUFFQSxNQUFNQywyQkFBMkIsQ0FBQ0QsZ0JBQWdCSjtJQUM5Q1UsT0FBT0MsSUFBSSxDQUFDWCxvQkFBb0JZLE9BQU8sQ0FBQyxDQUFDQztRQUNyQyxJQUFJLENBQUNULGNBQWMsQ0FBQ1MsU0FBUyxFQUFFO1lBQzNCVCxjQUFjLENBQUNTLFNBQVMsR0FBRztnQkFDdkJDLE9BQU87b0JBQ0hDLGtCQUFrQjtvQkFDbEJDLHFCQUFxQjtnQkFDekI7Z0JBQ0FDLFNBQVMsQ0FFVDtZQUNKO1FBQ0o7UUFHQVAsT0FBT0MsSUFBSSxDQUFDWCxrQkFBa0IsQ0FBQ2EsU0FBUyxDQUFDSSxPQUFPLEVBQUVMLE9BQU8sQ0FBQyxDQUFDTTtZQUN2RCxNQUFNQyx3QkFBd0JuQixrQkFBa0IsQ0FBQ2EsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU87WUFDMUUsTUFBTUUsd0JBQXVCeEIsMkRBQWNBLENBQUN1QjtZQUM1QyxJQUFJLENBQUNmLGNBQWMsQ0FBQ1MsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU8sRUFBRTtnQkFDM0NkLGNBQWMsQ0FBQ1MsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU8sR0FBRyxDQUFDO1lBQ2hEO1lBRUEsTUFBTUcsYUFBYWpCLGNBQWMsQ0FBQ1MsU0FBUyxDQUFDSSxPQUFPLENBQUNDLE9BQU87WUFDM0RHLFdBQVdDLGlCQUFpQixHQUFHO1lBQy9CRCxXQUFXRCxvQkFBb0IsR0FBR0E7WUFDbENDLFdBQVdFLG9CQUFvQixHQUFHO1FBQ3RDO1FBQ0FuQixjQUFjLENBQUNTLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDRSxtQkFBbUIsR0FBR2hCLGtCQUFrQixDQUFDYSxTQUFTLENBQUNHLG1CQUFtQjtJQUN6RztBQUNKO0FBRUEsTUFBTVYseUJBQXlCLENBQUNQLGdCQUFnQkssZ0JBQWdCSixvQkFBb0JDO0lBQ2hGLE1BQU11QixZQUFZekIsZUFBZTBCLFlBQVksQ0FBQztJQUU5QyxNQUFNQyxnQkFBZ0JGLFVBQVVHLE9BQU8sQ0FBQyxHQUFHLEdBQUdDLEtBQUs7SUFDbkQsTUFBTUMsZUFBZUwsVUFBVUcsT0FBTyxDQUFDLEdBQUcsR0FBR0MsS0FBSztJQUNsRCxJQUFJRSxnQkFBZ0JKLGdCQUFnQixNQUFNRztJQUMxQyxJQUFLLElBQUlFLE1BQU0sR0FBR0EsT0FBT1AsVUFBVVEsUUFBUSxFQUFFRCxNQUFPO1FBRWhELE1BQU1FLFlBQVlULFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ2pELE1BQU1NLFdBQVdWLFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ2hELElBQUlLLGFBQ0NBLFlBQVksTUFBTUMsWUFBWUosZUFBZ0I7WUFDL0NBLGdCQUFnQkcsWUFBWSxNQUFNQztRQUN0QztRQUNBLE1BQU1DLE9BQU9YLFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQzVDLElBQUlPLE1BQU07WUFDTixNQUFNdEIsV0FBV2xCLDhEQUFpQkEsQ0FBQzZCLFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1lBRWxFLElBQUl4QixjQUFjLENBQUNTLFNBQVMsRUFBRTtnQkFDMUIsTUFBTXVCLGNBQWNoQyxjQUFjLENBQUNTLFNBQVMsQ0FBQ0ksT0FBTztnQkFFcEQsSUFBSW1CLFdBQVcsQ0FBQ04sY0FBYyxJQUFJTSxXQUFXLENBQUNOLGNBQWMsQ0FBQ1IsaUJBQWlCLElBQUksU0FBUztvQkFDdkZlLGlCQUFpQk4sS0FBS1AsV0FBV3BCLGdCQUFnQjBCLGVBQWVqQixVQUFVYjtnQkFDOUU7WUFDSjtRQUNKO0lBQ0EseUVBQXlFO0lBQ3pFLGtFQUFrRTtJQUNsRSxxRkFBcUY7SUFDckYseUlBQXlJO0lBQzdJO0FBRUo7QUFFQSxNQUFNc0MsZ0JBQWdCLENBQUNsQyxnQkFBZ0JTLFVBQVVYO0lBQzdDRSxjQUFjLENBQUNTLFNBQVMsR0FBRyxDQUFDO0lBQzVCVCxjQUFjLENBQUNTLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHO0lBQ2pDLE1BQU15QixRQUFRckMsU0FBU3NDLFlBQVksQ0FBQzNCO0lBQ3BDMEIsTUFBTUUsS0FBSyxHQUFHO1FBQUMsQ0FBQztLQUFFO0lBQ2xCRixNQUFNRyxVQUFVLENBQUNDLGVBQWUsR0FBRztJQUNuQ0osTUFBTUcsVUFBVSxDQUFDRSxnQkFBZ0IsR0FBRztJQUNwQ0MsYUFBYU47QUFDakI7QUFFQSxNQUFNTSxlQUFlLENBQUNDO0lBQ2xCLE1BQU1iLFlBQVlhLFVBQVVDLFNBQVMsQ0FBQztJQUN0Q2QsVUFBVWUsTUFBTSxHQUFHO0lBQ25CZixVQUFVZ0IsR0FBRyxHQUFHO0lBRWhCLE1BQU1mLFdBQVdZLFVBQVVDLFNBQVMsQ0FBQztJQUNyQ2IsU0FBU2MsTUFBTSxHQUFHO0lBQ2xCZCxTQUFTZSxHQUFHLEdBQUc7SUFFZixNQUFNQyxjQUFjSixVQUFVQyxTQUFTLENBQUM7SUFDeENHLFlBQVlGLE1BQU0sR0FBRztJQUNyQkUsWUFBWUQsR0FBRyxHQUFHO0lBRWxCLE1BQU1FLGlCQUFpQkwsVUFBVUMsU0FBUyxDQUFDO0lBQzNDSSxlQUFlSCxNQUFNLEdBQUc7SUFDeEJHLGVBQWVGLEdBQUcsR0FBRztJQUdyQixNQUFNRyxnQkFBZ0JOLFVBQVVDLFNBQVMsQ0FBQztJQUMxQ0ssY0FBY0osTUFBTSxHQUFHO0lBQ3ZCSSxjQUFjSCxHQUFHLEdBQUc7SUFFcEIsTUFBTUkseUJBQXlCUCxVQUFVQyxTQUFTLENBQUM7SUFDbkRNLHVCQUF1QkwsTUFBTSxHQUFHO0lBQ2hDSyx1QkFBdUJKLEdBQUcsR0FBRztJQUM3QkksdUJBQXVCQyxLQUFLLEdBQUc7SUFFL0IsTUFBTUMsYUFBYVQsVUFBVUMsU0FBUyxDQUFDO0lBQ3ZDUSxXQUFXUCxNQUFNLEdBQUc7SUFDcEJPLFdBQVdOLEdBQUcsR0FBRztJQUVqQixNQUFNTyxjQUFjVixVQUFVQyxTQUFTLENBQUM7SUFDeENTLFlBQVlSLE1BQU0sR0FBRztJQUNyQlEsWUFBWVAsR0FBRyxHQUFHO0lBRWxCLE1BQU1RLGlCQUFpQlgsVUFBVUMsU0FBUyxDQUFDO0lBQzNDVSxlQUFlVCxNQUFNLEdBQUc7SUFDeEJTLGVBQWVSLEdBQUcsR0FBRztJQUVyQixNQUFNUyxxQkFBcUJaLFVBQVVDLFNBQVMsQ0FBQztJQUMvQ1csbUJBQW1CVixNQUFNLEdBQUc7SUFDNUJVLG1CQUFtQlQsR0FBRyxHQUFHO0lBRXpCLE1BQU1VLHFCQUFxQmIsVUFBVUMsU0FBUyxDQUFDO0lBQy9DWSxtQkFBbUJYLE1BQU0sR0FBRztJQUM1QlcsbUJBQW1CVixHQUFHLEdBQUc7SUFDekJVLG1CQUFtQkwsS0FBSyxHQUFHO0FBRy9CO0FBRUEsTUFBTU0sY0FBYyxDQUFDQyxjQUFjQyxtQkFBbUI3RCxvQkFBb0I4QjtJQUN0RSxNQUFNZ0MsWUFBWUYsYUFBYTNELFFBQVEsQ0FBQ3VCLFlBQVksQ0FBQ29DLGFBQWFoRCxRQUFRO0lBRTFFa0QsVUFBVUMsTUFBTSxDQUFDO1FBQ2IvQixXQUFXNkIsa0JBQWtCN0IsU0FBUztRQUN0Q0MsVUFBVTRCLGtCQUFrQjVCLFFBQVE7UUFDcENnQixhQUFhNUI7UUFDYjZCLGdCQUFnQi9CO1FBQ2hCZ0MsZUFBZTdCO0lBRW5CO0lBRUEwQyxvQkFBb0JGLFdBQVc5RDtBQUVuQztBQUVBLE1BQU1vQyxtQkFBbUIsQ0FBQ04sS0FBS1AsV0FBV3BCLGdCQUFnQjBCLGVBQWVqQixVQUFVYjtJQUMvRSxNQUFNc0IscUJBQW9CRSxVQUFVRyxPQUFPLENBQUNJLEtBQUssSUFBSUgsS0FBSyxHQUFHSixVQUFVRyxPQUFPLENBQUNJLEtBQUssSUFBSUgsS0FBSyxHQUFHO0lBQ2hHeEIsY0FBYyxDQUFDUyxTQUFTLENBQUNJLE9BQU8sQ0FBQ2EsY0FBYyxDQUFDUixpQkFBaUIsR0FBR0E7SUFFcEUsTUFBTUgsd0JBQXdCbkIsa0JBQWtCLENBQUNhLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDYSxjQUFjO0lBQ2pGLE1BQU1vQyxxQkFBcUJ4RSwyREFBY0EsQ0FBQzRCO0lBRTFDbEIsY0FBYyxDQUFDUyxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsZ0JBQWdCLElBQUltRDtJQUNuRDlELGVBQWVVLEtBQUssQ0FBQ0EsS0FBSyxDQUFDQyxnQkFBZ0IsSUFBSW1EO0lBQy9DLE1BQU0zQyx3QkFBdUIsQ0FBQzJDLHFCQUFxQi9DLHdCQUF3QixHQUFFLEVBQUdnRCxPQUFPLENBQUM7SUFDeEYvRCxjQUFjLENBQUNTLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDYSxjQUFjLENBQUNQLG9CQUFvQixHQUFHQTtBQUMzRTtBQUVBLE1BQU1kLGdDQUFnQyxDQUFDUCxVQUFVRTtJQUU3Q0YsU0FBU2tFLFNBQVMsQ0FBQyxDQUFDdEI7UUFDaEIsTUFBTXVCLFdBQVd2QixVQUFVd0IsSUFBSTtRQUMvQixNQUFNQyxXQUFXMUUsMERBQWFBLENBQUN3RTtRQUMvQixJQUFLLElBQUl0QyxNQUFNLEdBQUdBLE9BQU9lLFVBQVVkLFFBQVEsRUFBRUQsTUFBTztZQUNoRCxNQUFNRSxZQUFZYSxVQUFVbkIsT0FBTyxDQUFDSSxLQUFLLEdBQUdILEtBQUs7WUFDakQsTUFBTU0sV0FBV1ksVUFBVW5CLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1lBQ2hELE1BQU00QyxXQUFXdkMsWUFBWSxNQUFNQztZQUNuQyxJQUFJdUM7WUFDSixJQUFJckUsY0FBYyxDQUFDbUUsU0FBUyxJQUFJbkUsY0FBYyxDQUFDbUUsU0FBUyxDQUFDQyxTQUFTLEVBQUU7Z0JBQ2hFQyxxQ0FBcUNyRSxjQUFjLENBQUNtRSxTQUFTLENBQUNDLFNBQVMsQ0FBQ2pELG9CQUFvQjtZQUNoRztZQUNBLE1BQU1tRCxvQ0FBb0N0RSxjQUFjLENBQUNpRSxTQUFTLENBQUNHLFNBQVMsQ0FBQ2pELG9CQUFvQjtZQUNqRyxJQUFJb0Qsc0JBQXNCRixxQ0FDdEIsQ0FBQ0Msb0NBQW9DRCxrQ0FBaUMsRUFBR04sT0FBTyxDQUFDLEtBQUs7WUFFMUYsTUFBTVMsV0FBVzlCLFVBQVVuQixPQUFPLENBQUNJLEtBQUs7WUFDeEM2QyxTQUFTaEQsS0FBSyxHQUFHK0M7WUFFakIsSUFBSUMsWUFBWSxDQUFDLElBQUk7Z0JBQ2pCQSxTQUFTQyxJQUFJLEdBQUc7b0JBQ1pDLE1BQU07b0JBQ05DLFNBQVM7b0JBQ1RDLFNBQVM7d0JBQUVDLE1BQU07b0JBQVc7Z0JBQ2hDO1lBQ0o7WUFDQSxJQUFJTCxXQUFXLElBQUk7Z0JBQ2ZBLFNBQVNDLElBQUksR0FBRztvQkFDWkMsTUFBTTtvQkFDTkMsU0FBUztvQkFDVEMsU0FBUzt3QkFBRUMsTUFBTTtvQkFBVztnQkFDaEM7WUFDSjtRQUVKO0lBQ0o7QUFFSjtBQUVBLE1BQU1oQixzQkFBc0IsQ0FBQ0YsV0FBVzlEO0lBQ3BDLE1BQU0yRSxXQUFXYixVQUFVcEMsT0FBTyxDQUFDb0MsVUFBVS9CLFFBQVEsRUFBRTtJQUN2RCxJQUFJa0QsV0FBV04sWUFBWTNFLG9CQUFvQjtRQUMzQzJFLFNBQVNDLElBQUksR0FBRztZQUNaQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsU0FBUztnQkFBRUMsTUFBTTtZQUFXO1FBQ2hDO0lBQ0o7SUFDQSxJQUFJQyxXQUFXTixZQUFZLEtBQUs7UUFDNUJBLFNBQVNDLElBQUksR0FBRztZQUNaQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsU0FBUztnQkFBRUMsTUFBTTtZQUFXO1FBQ2hDO0lBQ0o7QUFDSjtBQUdBLCtEQUFlbkYscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3g/OTVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcidcbmltcG9ydCBob3Vyc1RvRGVjaW1hbCBmcm9tICcuL2hvdXJzVG9EZWNpbWFsJztcbmltcG9ydCBnZXREYXRlRnJvbVN0cmluZyBmcm9tICcuL2dldERhdGVGcm9tU3RyaW5nJztcbmltcG9ydCBkZWNpbWFsVG9Ib3VycyBmcm9tICcuL2RlY2ltYWxUb0hvdXJzJztcbmltcG9ydCBnZXRXZWVrQmVmb3JlIGZyb20gJy4vZ2V0V2Vla0JlZm9yZSc7XG5cbmNvbnN0IG1ha2VUaW1lc2hlZXRBbmFseXNpcyA9ICh0aW1lc2hlZXRFeGNlbCwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XG4gICAgY29uc3QgaG91cnNXb3JrZWRNYXAgPSB7XG4gICAgfTtcblxuICAgIGluaXRpYWxpemVIb3Vyc1dvcmtlZE1hcChob3Vyc1dvcmtlZE1hcCwgc2ltcGxpZmllZFNjaGVkdWxlKTtcbiAgICBwb3B1bGF0ZUhvdXJzV29ya2VkTWFwKHRpbWVzaGVldEV4Y2VsLCBob3Vyc1dvcmtlZE1hcCwgc2ltcGxpZmllZFNjaGVkdWxlLCBwZXJjZW50YWdlQWNjZXB0ZWQpO1xuICAgIGNvbnNvbGUubG9nKGhvdXJzV29ya2VkTWFwKTtcbiAgICBwcm9jZXNzQ2hhbmdlRnJvbVByZXZpb3VzV2Vlayh3b3JrYm9vaywgaG91cnNXb3JrZWRNYXApO1xuXG4gICAgLy8gd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpLnRoZW4oZGF0YSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0pO1xuICAgIC8vICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIFwiVGltZXNoZWV0IEFuYWx5c2lzLnhsc3hcIik7XG4gICAgLy8gfSk7XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZUhvdXJzV29ya2VkTWFwID0gKGhvdXJzV29ya2VkTWFwLCBzaW1wbGlmaWVkU2NoZWR1bGUpID0+IHtcbiAgICBPYmplY3Qua2V5cyhzaW1wbGlmaWVkU2NoZWR1bGUpLmZvckVhY2goKHdlZWtOYW1lKSA9PiB7XG4gICAgICAgIGlmICghaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdKSB7XG4gICAgICAgICAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIb3Vyc1dvcmtlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIb3Vyc1NjaGVkdWxlZDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGludGVybnM6IHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuXG4gICAgICAgIE9iamVjdC5rZXlzKHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0uaW50ZXJucykuZm9yRWFjaCgoaW50ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNpbWFsSG91cnNTY2hlZHVsZWQgPSBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXTtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbEhvdXJzU2NoZWR1bGVkID0gZGVjaW1hbFRvSG91cnMoZGVjaW1hbEhvdXJzU2NoZWR1bGVkKTtcbiAgICAgICAgICAgIGlmICghaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbaW50ZXJuXSkge1xuICAgICAgICAgICAgICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2ludGVybl0gPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VyckludGVybiA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zW2ludGVybl07XG4gICAgICAgICAgICBjdXJySW50ZXJuLm5vcm1hbEhvdXJzV29ya2VkID0gXCIwMDowMFwiO1xuICAgICAgICAgICAgY3VyckludGVybi5ub3JtYWxIb3Vyc1NjaGVkdWxlZCA9IG5vcm1hbEhvdXJzU2NoZWR1bGVkO1xuICAgICAgICAgICAgY3VyckludGVybi5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIH0pXG4gICAgICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC50b3RhbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS50b3RhbEhvdXJzU2NoZWR1bGVkO1xuICAgIH0pXG59XG5cbmNvbnN0IHBvcHVsYXRlSG91cnNXb3JrZWRNYXAgPSAodGltZXNoZWV0RXhjZWwsIGhvdXJzV29ya2VkTWFwLCBzaW1wbGlmaWVkU2NoZWR1bGUsIHBlcmNlbnRhZ2VBY2NlcHRlZCkgPT4ge1xuICAgIGNvbnN0IHRpbWVTaGVldCA9IHRpbWVzaGVldEV4Y2VsLmdldFdvcmtzaGVldChcIkFsbCBFbXBsb3llZXNcIik7XG5cbiAgICBjb25zdCB0ZW1wRmlyc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwoMiwgMSkudmFsdWU7XG4gICAgY29uc3QgdGVtcExhc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwoMiwgMikudmFsdWU7XG4gICAgbGV0IGN1cnJlbnRJbnRlcm4gPSB0ZW1wRmlyc3ROYW1lICsgXCIgXCIgKyB0ZW1wTGFzdE5hbWU7XG4gICAgZm9yIChsZXQgcm93ID0gMjsgcm93IDw9IHRpbWVTaGVldC5yb3dDb3VudDsgcm93KyspIHtcblxuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDEpLnZhbHVlO1xuICAgICAgICBjb25zdCBsYXN0TmFtZSA9IHRpbWVTaGVldC5nZXRDZWxsKHJvdywgMikudmFsdWU7XG4gICAgICAgIGlmIChmaXJzdE5hbWUgJiZcbiAgICAgICAgICAgIChmaXJzdE5hbWUgKyBcIiBcIiArIGxhc3ROYW1lICE9IGN1cnJlbnRJbnRlcm4pKSB7XG4gICAgICAgICAgICBjdXJyZW50SW50ZXJuID0gZmlyc3ROYW1lICsgXCIgXCIgKyBsYXN0TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gdGltZVNoZWV0LmdldENlbGwocm93LCA1KS52YWx1ZTtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWtOYW1lID0gZ2V0RGF0ZUZyb21TdHJpbmcodGltZVNoZWV0LmdldENlbGwocm93LCA1KS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS5pbnRlcm5zO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRXZWVrW2N1cnJlbnRJbnRlcm5dICYmIGN1cnJlbnRXZWVrW2N1cnJlbnRJbnRlcm5dLm5vcm1hbEhvdXJzV29ya2VkID09IFwiMDA6MDBcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzSG91cnNEYXRhKHJvdywgdGltZVNoZWV0LCBob3Vyc1dvcmtlZE1hcCwgY3VycmVudEludGVybiwgd2Vla05hbWUsIHNpbXBsaWZpZWRTY2hlZHVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBvcHVsYXRlUm93KHdvcmtCb29rRGF0YSwgY3VycmVudEludGVybkRhdGEsIHBlcmNlbnRhZ2VBY2NlcHRlZCwgcm93KTtcbiAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgOSkudmFsdWUgPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWw7XG4gICAgICAgIC8vIGN1cnJTaGVldC5nZXRDZWxsKDIsIDEwKS52YWx1ZSA9IHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxTY2hlZHVsZWRIb3VycztcbiAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgMTEpLnZhbHVlID0gKGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbCAvIHNpbXBsaWZpZWRTY2hlZHVsZVt3ZWVrTmFtZV0udG90YWxTY2hlZHVsZWRIb3VycyAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICB9XG5cbn1cblxuY29uc3Qgc2V0VXBOZXdTaGVldCA9IChob3Vyc1dvcmtlZE1hcCwgd2Vla05hbWUsIHdvcmtib29rKSA9PiB7XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdID0ge307XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLnRvdGFsID0gMDtcbiAgICBjb25zdCBzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCh3ZWVrTmFtZSk7XG4gICAgc2hlZXQudmlld3MgPSBbe31dO1xuICAgIHNoZWV0LnByb3BlcnRpZXMuZGVmYXVsdENvbFdpZHRoID0gMTU7XG4gICAgc2hlZXQucHJvcGVydGllcy5kZWZhdWx0Um93SGVpZ2h0ID0gMjA7XG4gICAgc2V0VXBDb2x1bW5zKHNoZWV0KTtcbn1cblxuY29uc3Qgc2V0VXBDb2x1bW5zID0gKHdvcmtzaGVldCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMSk7XG4gICAgZmlyc3ROYW1lLmhlYWRlciA9IFwiRmlyc3QgTmFtZVwiO1xuICAgIGZpcnN0TmFtZS5rZXkgPSBcImZpcnN0TmFtZVwiO1xuXG4gICAgY29uc3QgbGFzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDIpO1xuICAgIGxhc3ROYW1lLmhlYWRlciA9IFwiTGFzdCBOYW1lXCI7XG4gICAgbGFzdE5hbWUua2V5ID0gXCJsYXN0TmFtZVwiO1xuXG4gICAgY29uc3QgaG91cnNXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDMpO1xuICAgIGhvdXJzV29ya2VkLmhlYWRlciA9IFwiSG91cnMgV29ya2VkXCI7XG4gICAgaG91cnNXb3JrZWQua2V5ID0gXCJob3Vyc1dvcmtlZFwiO1xuXG4gICAgY29uc3QgaG91cnNTY2hlZHVsZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDQpO1xuICAgIGhvdXJzU2NoZWR1bGVkLmhlYWRlciA9IFwiSG91cnMgU2NoZWR1bGVkXCI7XG4gICAgaG91cnNTY2hlZHVsZWQua2V5ID0gXCJob3Vyc1NjaGVkdWxlZFwiO1xuXG5cbiAgICBjb25zdCBwZXJjZW50V29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbig1KTtcbiAgICBwZXJjZW50V29ya2VkLmhlYWRlciA9IFwiUGVyY2VudCBXb3JrZWRcIjtcbiAgICBwZXJjZW50V29ya2VkLmtleSA9IFwicGVyY2VudFdvcmtlZFwiO1xuXG4gICAgY29uc3QgY2hhbmdlRnJvbVByZXZpb3VzV2VlayA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNik7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay5oZWFkZXIgPSBcIlBlcmNlbnQgQ2hhbmdlIGZyb20gTGFzdCBXZWVrXCI7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay5rZXkgPSBcImNoYW5nZUZyb21QcmV2aW91c1dlZWtcIjtcbiAgICBjaGFuZ2VGcm9tUHJldmlvdXNXZWVrLndpZHRoID0gMjU7XG5cbiAgICBjb25zdCB0YUFzc2lnbmVkID0gd29ya3NoZWV0LmdldENvbHVtbig3KTtcbiAgICB0YUFzc2lnbmVkLmhlYWRlciA9IFwiVEFcIjtcbiAgICB0YUFzc2lnbmVkLmtleSA9IFwidGFcIjtcblxuICAgIGNvbnN0IHRvdGFsV29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbig5KTtcbiAgICB0b3RhbFdvcmtlZC5oZWFkZXIgPSBcIlRvdGFsIFdvcmtlZFwiO1xuICAgIHRvdGFsV29ya2VkLmtleSA9IFwidG90YWxXb3JrZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsU2NoZWR1bGVkID0gd29ya3NoZWV0LmdldENvbHVtbigxMCk7XG4gICAgdG90YWxTY2hlZHVsZWQuaGVhZGVyID0gXCJUb3RhbCBTY2hlZHVsZWRcIjtcbiAgICB0b3RhbFNjaGVkdWxlZC5rZXkgPSBcInRvdGFsU2NoZWR1bGVkXCI7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRXb3JrZWQgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDExKTtcbiAgICB0b3RhbFBlcmNlbnRXb3JrZWQuaGVhZGVyID0gXCJQZXJjZW50IFdvcmtlZFwiO1xuICAgIHRvdGFsUGVyY2VudFdvcmtlZC5rZXkgPSBcInRvdGFsUGVyY2VudFdvcmtlZFwiO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50Q2hhbmdlID0gd29ya3NoZWV0LmdldENvbHVtbigxMik7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLmhlYWRlciA9IFwiVG90YWwgUGVyY2VudCBDaGFuZ2UgZnJvbSBMYXN0IFdlZWtcIjtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2Uua2V5ID0gXCJ0b3RhbFBlcmNlbnRDaGFuZ2VcIjtcbiAgICB0b3RhbFBlcmNlbnRDaGFuZ2Uud2lkdGggPSAzMDtcblxuXG59XG5cbmNvbnN0IHBvcHVsYXRlUm93ID0gKHdvcmtCb29rRGF0YSwgY3VycmVudEludGVybkRhdGEsIHBlcmNlbnRhZ2VBY2NlcHRlZCwgcm93KSA9PiB7XG4gICAgY29uc3QgY3VyclNoZWV0ID0gd29ya0Jvb2tEYXRhLndvcmtib29rLmdldFdvcmtzaGVldCh3b3JrQm9va0RhdGEud2Vla05hbWUpO1xuXG4gICAgY3VyclNoZWV0LmFkZFJvdyh7XG4gICAgICAgIGZpcnN0TmFtZTogY3VycmVudEludGVybkRhdGEuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogY3VycmVudEludGVybkRhdGEubGFzdE5hbWUsXG4gICAgICAgIGhvdXJzV29ya2VkOiBub3JtYWxIb3Vyc1dvcmtlZCxcbiAgICAgICAgaG91cnNTY2hlZHVsZWQ6IG5vcm1hbEhvdXJzU2NoZWR1bGVkLFxuICAgICAgICBwZXJjZW50V29ya2VkOiBwZXJjZW50YWdlRGlmZmVyZW5jZSxcblxuICAgIH0pXG5cbiAgICBjb2xvclBlcmNlbnRhZ2VDZWxsKGN1cnJTaGVldCwgcGVyY2VudGFnZUFjY2VwdGVkKTtcblxufVxuXG5jb25zdCBwcm9jZXNzSG91cnNEYXRhID0gKHJvdywgdGltZVNoZWV0LCBob3Vyc1dvcmtlZE1hcCwgY3VycmVudEludGVybiwgd2Vla05hbWUsIHNpbXBsaWZpZWRTY2hlZHVsZSkgPT4ge1xuICAgIGNvbnN0IG5vcm1hbEhvdXJzV29ya2VkID0gdGltZVNoZWV0LmdldENlbGwocm93LCAxNSkudmFsdWUgPyB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDE1KS52YWx1ZSA6IFwiMDA6MDBcIjtcbiAgICBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0uaW50ZXJuc1tjdXJyZW50SW50ZXJuXS5ub3JtYWxIb3Vyc1dvcmtlZCA9IG5vcm1hbEhvdXJzV29ya2VkO1xuXG4gICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS5pbnRlcm5zW2N1cnJlbnRJbnRlcm5dO1xuICAgIGNvbnN0IGRlY2ltYWxIb3Vyc1dvcmtlZCA9IGhvdXJzVG9EZWNpbWFsKG5vcm1hbEhvdXJzV29ya2VkKTtcblxuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbC50b3RhbEhvdXJzV29ya2VkICs9IGRlY2ltYWxIb3Vyc1dvcmtlZDtcbiAgICBob3Vyc1dvcmtlZE1hcC50b3RhbC50b3RhbC50b3RhbEhvdXJzV29ya2VkICs9IGRlY2ltYWxIb3Vyc1dvcmtlZDtcbiAgICBjb25zdCBwZXJjZW50YWdlRGlmZmVyZW5jZSA9IChkZWNpbWFsSG91cnNXb3JrZWQgLyBkZWNpbWFsSG91cnNTY2hlZHVsZWQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgaG91cnNXb3JrZWRNYXBbd2Vla05hbWVdLmludGVybnNbY3VycmVudEludGVybl0ucGVyY2VudGFnZURpZmZlcmVuY2UgPSBwZXJjZW50YWdlRGlmZmVyZW5jZTtcbn1cblxuY29uc3QgcHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsgPSAod29ya2Jvb2ssIGhvdXJzV29ya2VkTWFwKSA9PiB7XG5cbiAgICB3b3JrYm9vay5lYWNoU2hlZXQoKHdvcmtzaGVldCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyV2VlayA9IHdvcmtzaGVldC5uYW1lO1xuICAgICAgICBjb25zdCBwcmV2V2VlayA9IGdldFdlZWtCZWZvcmUoY3VycldlZWspO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAyOyByb3cgPD0gd29ya3NoZWV0LnJvd0NvdW50OyByb3crKykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gd29ya3NoZWV0LmdldENlbGwocm93LCAxKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gd29ya3NoZWV0LmdldENlbGwocm93LCAyKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWU7XG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlaztcbiAgICAgICAgICAgIGlmIChob3Vyc1dvcmtlZE1hcFtwcmV2V2Vla10gJiYgaG91cnNXb3JrZWRNYXBbcHJldldlZWtdW2Z1bGxOYW1lXSkge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWsgPSBob3Vyc1dvcmtlZE1hcFtwcmV2V2Vla11bZnVsbE5hbWVdLnBlcmNlbnRhZ2VEaWZmZXJlbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZURpZmZlcmVuY2VPZkN1cnJlbnRXZWVrID0gaG91cnNXb3JrZWRNYXBbY3VycldlZWtdW2Z1bGxOYW1lXS5wZXJjZW50YWdlRGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBkaWZmZXJlbmNlRnJvbVdlZWtzID0gcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayA/XG4gICAgICAgICAgICAgICAgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayAtIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWspLnRvRml4ZWQoMikgOiBcIlwiO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyQ2VsbCA9IHdvcmtzaGVldC5nZXRDZWxsKHJvdywgNik7XG4gICAgICAgICAgICBjdXJyQ2VsbC52YWx1ZSA9IGRpZmZlcmVuY2VGcm9tV2Vla3M7XG5cbiAgICAgICAgICAgIGlmIChjdXJyQ2VsbCA8PSAtMTUpIHtcbiAgICAgICAgICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGF0dGVybicsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwZTc2MDYwJyB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyQ2VsbCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuY29uc3QgY29sb3JQZXJjZW50YWdlQ2VsbCA9IChjdXJyU2hlZXQsIHBlcmNlbnRhZ2VBY2NlcHRlZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJDZWxsID0gY3VyclNoZWV0LmdldENlbGwoY3VyclNoZWV0LnJvd0NvdW50LCA1KVxuICAgIGlmIChwYXJzZUZsb2F0KGN1cnJDZWxsKSA8IHBlcmNlbnRhZ2VBY2NlcHRlZCkge1xuICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwZTc2MDYwJyB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChwYXJzZUZsb2F0KGN1cnJDZWxsKSA+IDEwMCkge1xuICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwNDJmNThkJyB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VUaW1lc2hlZXRBbmFseXNpczsiXSwibmFtZXMiOlsiRXhjZWxKUyIsIkZpbGVTYXZlciIsImhvdXJzVG9EZWNpbWFsIiwiZ2V0RGF0ZUZyb21TdHJpbmciLCJkZWNpbWFsVG9Ib3VycyIsImdldFdlZWtCZWZvcmUiLCJtYWtlVGltZXNoZWV0QW5hbHlzaXMiLCJ0aW1lc2hlZXRFeGNlbCIsInNpbXBsaWZpZWRTY2hlZHVsZSIsInBlcmNlbnRhZ2VBY2NlcHRlZCIsIndvcmtib29rIiwiV29ya2Jvb2siLCJob3Vyc1dvcmtlZE1hcCIsImluaXRpYWxpemVIb3Vyc1dvcmtlZE1hcCIsInBvcHVsYXRlSG91cnNXb3JrZWRNYXAiLCJjb25zb2xlIiwibG9nIiwicHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIndlZWtOYW1lIiwidG90YWwiLCJ0b3RhbEhvdXJzV29ya2VkIiwidG90YWxIb3Vyc1NjaGVkdWxlZCIsImludGVybnMiLCJpbnRlcm4iLCJkZWNpbWFsSG91cnNTY2hlZHVsZWQiLCJub3JtYWxIb3Vyc1NjaGVkdWxlZCIsImN1cnJJbnRlcm4iLCJub3JtYWxIb3Vyc1dvcmtlZCIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlIiwidGltZVNoZWV0IiwiZ2V0V29ya3NoZWV0IiwidGVtcEZpcnN0TmFtZSIsImdldENlbGwiLCJ2YWx1ZSIsInRlbXBMYXN0TmFtZSIsImN1cnJlbnRJbnRlcm4iLCJyb3ciLCJyb3dDb3VudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGF0ZSIsImN1cnJlbnRXZWVrIiwicHJvY2Vzc0hvdXJzRGF0YSIsInNldFVwTmV3U2hlZXQiLCJzaGVldCIsImFkZFdvcmtzaGVldCIsInZpZXdzIiwicHJvcGVydGllcyIsImRlZmF1bHRDb2xXaWR0aCIsImRlZmF1bHRSb3dIZWlnaHQiLCJzZXRVcENvbHVtbnMiLCJ3b3Jrc2hlZXQiLCJnZXRDb2x1bW4iLCJoZWFkZXIiLCJrZXkiLCJob3Vyc1dvcmtlZCIsImhvdXJzU2NoZWR1bGVkIiwicGVyY2VudFdvcmtlZCIsImNoYW5nZUZyb21QcmV2aW91c1dlZWsiLCJ3aWR0aCIsInRhQXNzaWduZWQiLCJ0b3RhbFdvcmtlZCIsInRvdGFsU2NoZWR1bGVkIiwidG90YWxQZXJjZW50V29ya2VkIiwidG90YWxQZXJjZW50Q2hhbmdlIiwicG9wdWxhdGVSb3ciLCJ3b3JrQm9va0RhdGEiLCJjdXJyZW50SW50ZXJuRGF0YSIsImN1cnJTaGVldCIsImFkZFJvdyIsImNvbG9yUGVyY2VudGFnZUNlbGwiLCJkZWNpbWFsSG91cnNXb3JrZWQiLCJ0b0ZpeGVkIiwiZWFjaFNoZWV0IiwiY3VycldlZWsiLCJuYW1lIiwicHJldldlZWsiLCJmdWxsTmFtZSIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWsiLCJwZXJjZW50YWdlRGlmZmVyZW5jZU9mQ3VycmVudFdlZWsiLCJkaWZmZXJlbmNlRnJvbVdlZWtzIiwiY3VyckNlbGwiLCJmaWxsIiwidHlwZSIsInBhdHRlcm4iLCJmZ0NvbG9yIiwiYXJnYiIsInBhcnNlRmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});