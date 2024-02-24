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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ \"(app-pages-browser)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ \"(app-pages-browser)/./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursToDecimal */ \"(app-pages-browser)/./src/helpers/hoursToDecimal.jsx\");\n/* harmony import */ var _getDateFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDateFromString */ \"(app-pages-browser)/./src/helpers/getDateFromString.jsx\");\n/* harmony import */ var _decimalToHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimalToHours */ \"(app-pages-browser)/./src/helpers/decimalToHours.jsx\");\n/* harmony import */ var _getWeekBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeekBefore */ \"(app-pages-browser)/./src/helpers/getWeekBefore.jsx\");\n\n\n\n\n\n\nconst makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted)=>{\n    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();\n    let hoursWorkedMap = {};\n    hoursWorkedMap.total = 0;\n    const timeSheet = timesheetExcel.getWorksheet(\"All Employees\");\n    let firstName = timeSheet.getCell(2, 1).value;\n    let lastName = timeSheet.getCell(2, 2).value;\n    let currentIntern = firstName + \" \" + lastName;\n    for(let row = 2; row <= timeSheet.rowCount; row++){\n        const tempFirstName = timeSheet.getCell(row, 1).value;\n        const tempLastName = timeSheet.getCell(row, 2).value;\n        if (tempFirstName && tempFirstName + \" \" + tempLastName != currentIntern) {\n            currentIntern = tempFirstName + \" \" + tempLastName;\n            firstName = tempFirstName;\n            lastName = tempLastName;\n        }\n        const weekName = (0,_getDateFromString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(timeSheet.getCell(row, 5).value);\n        const weekSchedule = simplifiedSchedule[weekName];\n        if (weekSchedule && weekSchedule[currentIntern]) {\n            if (!hoursWorkedMap[weekName]) {\n                setUpNewSheet(hoursWorkedMap, weekName, workbook);\n            }\n            const currentWeek = hoursWorkedMap[weekName];\n            if (!currentWeek[currentIntern]) {\n                const currentInternData = {\n                    fullName: currentIntern,\n                    firstName: firstName,\n                    lastName: lastName\n                };\n                const workBookData = {\n                    workbook: workbook,\n                    weekName: weekName,\n                    timeSheet: timeSheet,\n                    currentWeek: currentWeek,\n                    hoursWorkedMap: hoursWorkedMap,\n                    simplifiedSchedule: simplifiedSchedule\n                };\n                populateRow(workBookData, currentInternData, percentageAccepted, row);\n            // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;\n            // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;\n            // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);\n            }\n        }\n    }\n    workbook.eachSheet((worksheet)=>{\n        const currWeek = worksheet.name;\n        for(let row = 2; row <= worksheet.rowCount; row++){\n            const firstName = worksheet.getCell(row, 1).value;\n            const lastName = worksheet.getCell(row, 2).value;\n            const fullName = firstName + \" \" + lastName;\n            processChangeFromPreviousWeek(currWeek, worksheet, fullName, row, hoursWorkedMap);\n        }\n    });\n    workbook.xlsx.writeBuffer().then((data)=>{\n        const blob = new Blob([\n            data\n        ]);\n        file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(blob, \"Timesheet Analysis.xlsx\");\n    });\n};\nconst setUpNewSheet = (hoursWorkedMap, weekName, workbook)=>{\n    hoursWorkedMap[weekName] = {};\n    hoursWorkedMap[weekName].total = 0;\n    const sheet = workbook.addWorksheet(weekName);\n    sheet.views = [\n        {}\n    ];\n    sheet.properties.defaultColWidth = 15;\n    sheet.properties.defaultRowHeight = 20;\n    setUpColumns(sheet);\n};\nconst setUpColumns = (worksheet)=>{\n    const firstName = worksheet.getColumn(1);\n    firstName.header = \"First Name\";\n    firstName.key = \"firstName\";\n    const lastName = worksheet.getColumn(2);\n    lastName.header = \"Last Name\";\n    lastName.key = \"lastName\";\n    const hoursWorked = worksheet.getColumn(3);\n    hoursWorked.header = \"Hours Worked\";\n    hoursWorked.key = \"hoursWorked\";\n    const hoursScheduled = worksheet.getColumn(4);\n    hoursScheduled.header = \"Hours Scheduled\";\n    hoursScheduled.key = \"hoursScheduled\";\n    const percentWorked = worksheet.getColumn(5);\n    percentWorked.header = \"Percent Worked\";\n    percentWorked.key = \"percentWorked\";\n    const changeFromPreviousWeek = worksheet.getColumn(6);\n    changeFromPreviousWeek.header = \"Percent Change from Last Week\";\n    changeFromPreviousWeek.key = \"changeFromPreviousWeek\";\n    changeFromPreviousWeek.width = 30;\n    const taAssigned = worksheet.getColumn(7);\n    taAssigned.header = \"TA\";\n    taAssigned.key = \"ta\";\n    const totalWorked = worksheet.getColumn(9);\n    totalWorked.header = \"Total Worked\";\n    totalWorked.key = \"totalWorked\";\n    const totalScheduled = worksheet.getColumn(10);\n    totalScheduled.header = \"Total Scheduled\";\n    totalScheduled.key = \"totalScheduled\";\n    const totalPercentWorked = worksheet.getColumn(11);\n    totalPercentWorked.header = \"Percent Worked\";\n    totalPercentWorked.key = \"totalPercentWorked\";\n    const totalPercentChange = worksheet.getColumn(12);\n    totalPercentChange.header = \"Total Percent Change from Last Week\";\n    totalPercentChange.key = \"totalPercentChange\";\n    totalPercentChange.width = 35;\n};\nconst populateRow = (workBookData, currentInternData, percentageAccepted, row)=>{\n    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);\n    const [normalHoursWorked, normalHoursScheduled, percentageDifference] = processHoursData(row, workBookData.timeSheet, workBookData.currentWeek, currentInternData.fullName, workBookData.weekName, workBookData.simplifiedSchedule);\n    currSheet.addRow({\n        firstName: currentInternData.firstName,\n        lastName: currentInternData.lastName,\n        hoursWorked: normalHoursWorked,\n        hoursScheduled: normalHoursScheduled,\n        percentWorked: percentageDifference\n    });\n    colorPercentageCell(currSheet, percentageAccepted);\n};\nconst processHoursData = (row, timeSheet, currentWeek, currentIntern, weekName, simplifiedSchedule)=>{\n    const potentialWorkHours = timeSheet.getCell(row, 15).value;\n    const workHours = potentialWorkHours ? potentialWorkHours : \"00:00\";\n    currentWeek[currentIntern] = {\n        hoursWorked: (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(workHours)\n    };\n    const decimalHoursScheduled = simplifiedSchedule[weekName][currentIntern];\n    const normalHoursScheduled = (0,_decimalToHours__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(decimalHoursScheduled);\n    const normalHoursWorked = workHours;\n    const decimalHoursWorked = (0,_hoursToDecimal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(normalHoursWorked);\n    currentWeek.total += decimalHoursWorked;\n    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);\n    currentWeek[currentIntern].percentageDifference = percentageDifference;\n    return [\n        normalHoursWorked,\n        normalHoursScheduled,\n        percentageDifference\n    ];\n};\nconst processChangeFromPreviousWeek = (currWeek, worksheet, fullName, row, hoursWorkedMap)=>{\n    const prevWeek = (0,_getWeekBefore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currWeek);\n    let percentageDifferenceOfPreviousWeek;\n    if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {\n        percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;\n    }\n    const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;\n    let differenceFromWeeks = percentageDifferenceOfPreviousWeek ? (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : \"\";\n    const currCell = worksheet.getCell(row, 6);\n    currCell.value = differenceFromWeeks;\n    if (currCell <= -15) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (currCell > 15) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n    return differenceFromWeeks;\n};\nconst colorPercentageCell = (currSheet, percentageAccepted)=>{\n    const currCell = currSheet.getCell(currSheet.rowCount, 5);\n    if (parseFloat(currCell) < percentageAccepted) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"80e76060\"\n            }\n        };\n    }\n    if (parseFloat(currCell) > 100) {\n        currCell.fill = {\n            type: \"pattern\",\n            pattern: \"solid\",\n            fgColor: {\n                argb: \"8042f58d\"\n            }\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTimesheetAnalysis);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL21ha2VUaW1lU2hlZXRBbmFseXNpcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDTztBQUNNO0FBQ047QUFDRjtBQUU1QyxNQUFNTSx3QkFBd0IsQ0FBQ0MsZ0JBQWdCQyxvQkFBb0JDO0lBQy9ELE1BQU1DLFdBQVcsSUFBSVYsNkNBQWdCO0lBQ3JDLElBQUlZLGlCQUFpQixDQUFDO0lBQ3RCQSxlQUFlQyxLQUFLLEdBQUc7SUFFdkIsTUFBTUMsWUFBWVAsZUFBZVEsWUFBWSxDQUFDO0lBRTlDLElBQUlDLFlBQVlGLFVBQVVHLE9BQU8sQ0FBQyxHQUFHLEdBQUdDLEtBQUs7SUFDN0MsSUFBSUMsV0FBV0wsVUFBVUcsT0FBTyxDQUFDLEdBQUcsR0FBR0MsS0FBSztJQUM1QyxJQUFJRSxnQkFBZ0JKLFlBQVksTUFBTUc7SUFFdEMsSUFBSyxJQUFJRSxNQUFNLEdBQUdBLE9BQU9QLFVBQVVRLFFBQVEsRUFBRUQsTUFBTztRQUVoRCxNQUFNRSxnQkFBZ0JULFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3JELE1BQU1NLGVBQWVWLFVBQVVHLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHSCxLQUFLO1FBQ3BELElBQUlLLGlCQUNDQSxnQkFBZ0IsTUFBTUMsZ0JBQWdCSixlQUFnQjtZQUN2REEsZ0JBQWdCRyxnQkFBZ0IsTUFBTUM7WUFDdENSLFlBQVlPO1lBQ1pKLFdBQVdLO1FBQ2Y7UUFFQSxNQUFNQyxXQUFXdEIsOERBQWlCQSxDQUFDVyxVQUFVRyxPQUFPLENBQUNJLEtBQUssR0FBR0gsS0FBSztRQUNsRSxNQUFNUSxlQUFlbEIsa0JBQWtCLENBQUNpQixTQUFTO1FBRWpELElBQUlDLGdCQUFnQkEsWUFBWSxDQUFDTixjQUFjLEVBQUU7WUFDN0MsSUFBSSxDQUFDUixjQUFjLENBQUNhLFNBQVMsRUFBRTtnQkFDM0JFLGNBQWNmLGdCQUFnQmEsVUFBVWY7WUFDNUM7WUFF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QUFTO2dCQUFFQyxNQUFNO1lBQVc7UUFDaEM7SUFDSjtJQUVBLE9BQU9OO0FBQ1g7QUFFQSxNQUFNVCxzQkFBc0IsQ0FBQ04sV0FBV3hEO0lBQ3BDLE1BQU13RSxXQUFXaEIsVUFBVWhELE9BQU8sQ0FBQ2dELFVBQVUzQyxRQUFRLEVBQUU7SUFDdkQsSUFBSWlFLFdBQVdOLFlBQVl4RSxvQkFBb0I7UUFDM0N3RSxTQUFTQyxJQUFJLEdBQUc7WUFDWkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLFNBQVM7Z0JBQUVDLE1BQU07WUFBVztRQUNoQztJQUNKO0lBQ0EsSUFBSUMsV0FBV04sWUFBWSxLQUFLO1FBQzVCQSxTQUFTQyxJQUFJLEdBQUc7WUFDWkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLFNBQVM7Z0JBQUVDLE1BQU07WUFBVztRQUNoQztJQUNKO0FBQ0o7QUFHQSwrREFBZWhGLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9tYWtlVGltZVNoZWV0QW5hbHlzaXMuanN4Pzk1YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXG5pbXBvcnQgaG91cnNUb0RlY2ltYWwgZnJvbSAnLi9ob3Vyc1RvRGVjaW1hbCc7XG5pbXBvcnQgZ2V0RGF0ZUZyb21TdHJpbmcgZnJvbSAnLi9nZXREYXRlRnJvbVN0cmluZyc7XG5pbXBvcnQgZGVjaW1hbFRvSG91cnMgZnJvbSAnLi9kZWNpbWFsVG9Ib3Vycyc7XG5pbXBvcnQgZ2V0V2Vla0JlZm9yZSBmcm9tICcuL2dldFdlZWtCZWZvcmUnO1xuXG5jb25zdCBtYWtlVGltZXNoZWV0QW5hbHlzaXMgPSAodGltZXNoZWV0RXhjZWwsIHNpbXBsaWZpZWRTY2hlZHVsZSwgcGVyY2VudGFnZUFjY2VwdGVkKSA9PiB7XG4gICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xuICAgIGxldCBob3Vyc1dvcmtlZE1hcCA9IHt9O1xuICAgIGhvdXJzV29ya2VkTWFwLnRvdGFsID0gMDtcblxuICAgIGNvbnN0IHRpbWVTaGVldCA9IHRpbWVzaGVldEV4Y2VsLmdldFdvcmtzaGVldChcIkFsbCBFbXBsb3llZXNcIik7XG5cbiAgICBsZXQgZmlyc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwoMiwgMSkudmFsdWU7XG4gICAgbGV0IGxhc3ROYW1lID0gdGltZVNoZWV0LmdldENlbGwoMiwgMikudmFsdWVcbiAgICBsZXQgY3VycmVudEludGVybiA9IGZpcnN0TmFtZSArIFwiIFwiICsgbGFzdE5hbWU7XG5cbiAgICBmb3IgKGxldCByb3cgPSAyOyByb3cgPD0gdGltZVNoZWV0LnJvd0NvdW50OyByb3crKykge1xuXG4gICAgICAgIGNvbnN0IHRlbXBGaXJzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDEpLnZhbHVlO1xuICAgICAgICBjb25zdCB0ZW1wTGFzdE5hbWUgPSB0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDIpLnZhbHVlO1xuICAgICAgICBpZiAodGVtcEZpcnN0TmFtZSAmJlxuICAgICAgICAgICAgKHRlbXBGaXJzdE5hbWUgKyBcIiBcIiArIHRlbXBMYXN0TmFtZSAhPSBjdXJyZW50SW50ZXJuKSkge1xuICAgICAgICAgICAgY3VycmVudEludGVybiA9IHRlbXBGaXJzdE5hbWUgKyBcIiBcIiArIHRlbXBMYXN0TmFtZTtcbiAgICAgICAgICAgIGZpcnN0TmFtZSA9IHRlbXBGaXJzdE5hbWU7XG4gICAgICAgICAgICBsYXN0TmFtZSA9IHRlbXBMYXN0TmFtZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2Vla05hbWUgPSBnZXREYXRlRnJvbVN0cmluZyh0aW1lU2hlZXQuZ2V0Q2VsbChyb3csIDUpLnZhbHVlKTtcbiAgICAgICAgY29uc3Qgd2Vla1NjaGVkdWxlID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXTtcblxuICAgICAgICBpZiAod2Vla1NjaGVkdWxlICYmIHdlZWtTY2hlZHVsZVtjdXJyZW50SW50ZXJuXSkge1xuICAgICAgICAgICAgaWYgKCFob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzZXRVcE5ld1NoZWV0KGhvdXJzV29ya2VkTWFwLCB3ZWVrTmFtZSwgd29ya2Jvb2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXTtcbiAgICAgICAgICAgIGlmICghY3VycmVudFdlZWtbY3VycmVudEludGVybl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWU6IGN1cnJlbnRJbnRlcm4sXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya0Jvb2tEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICB3b3JrYm9vazogd29ya2Jvb2ssXG4gICAgICAgICAgICAgICAgICAgIHdlZWtOYW1lOiB3ZWVrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGltZVNoZWV0OiB0aW1lU2hlZXQsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXZWVrOiBjdXJyZW50V2VlayxcbiAgICAgICAgICAgICAgICAgICAgaG91cnNXb3JrZWRNYXA6IGhvdXJzV29ya2VkTWFwLFxuICAgICAgICAgICAgICAgICAgICBzaW1wbGlmaWVkU2NoZWR1bGU6IHNpbXBsaWZpZWRTY2hlZHVsZSxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVJvdyh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHJvdyk7XG4gICAgICAgICAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgOSkudmFsdWUgPSBob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWw7XG4gICAgICAgICAgICAgICAgLy8gY3VyclNoZWV0LmdldENlbGwoMiwgMTApLnZhbHVlID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXS50b3RhbFNjaGVkdWxlZEhvdXJzO1xuICAgICAgICAgICAgICAgIC8vIGN1cnJTaGVldC5nZXRDZWxsKDIsIDExKS52YWx1ZSA9IChob3Vyc1dvcmtlZE1hcFt3ZWVrTmFtZV0udG90YWwgLyBzaW1wbGlmaWVkU2NoZWR1bGVbd2Vla05hbWVdLnRvdGFsU2NoZWR1bGVkSG91cnMgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB3b3JrYm9vay5lYWNoU2hlZXQoKHdvcmtzaGVldCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyV2VlayA9IHdvcmtzaGVldC5uYW1lO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDI7IHJvdyA8PSB3b3Jrc2hlZXQucm93Q291bnQ7IHJvdysrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDEpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZTtcbiAgICAgICAgICAgIHByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrKGN1cnJXZWVrLCB3b3Jrc2hlZXQsIGZ1bGxOYW1lLCByb3csIGhvdXJzV29ya2VkTWFwKTtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIHdvcmtib29rLnhsc3gud3JpdGVCdWZmZXIoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGFdKTtcbiAgICAgICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBcIlRpbWVzaGVldCBBbmFseXNpcy54bHN4XCIpO1xuICAgIH0pO1xuXG59XG5cbmNvbnN0IHNldFVwTmV3U2hlZXQgPSAoaG91cnNXb3JrZWRNYXAsIHdlZWtOYW1lLCB3b3JrYm9vaykgPT4ge1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXSA9IHt9O1xuICAgIGhvdXJzV29ya2VkTWFwW3dlZWtOYW1lXS50b3RhbCA9IDA7XG4gICAgY29uc3Qgc2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQod2Vla05hbWUpO1xuICAgIHNoZWV0LnZpZXdzID0gW3t9XTtcbiAgICBzaGVldC5wcm9wZXJ0aWVzLmRlZmF1bHRDb2xXaWR0aCA9IDE1O1xuICAgIHNoZWV0LnByb3BlcnRpZXMuZGVmYXVsdFJvd0hlaWdodCA9IDIwO1xuICAgIHNldFVwQ29sdW1ucyhzaGVldCk7XG59XG5cbmNvbnN0IHNldFVwQ29sdW1ucyA9ICh3b3Jrc2hlZXQpID0+IHtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDEpO1xuICAgIGZpcnN0TmFtZS5oZWFkZXIgPSBcIkZpcnN0IE5hbWVcIjtcbiAgICBmaXJzdE5hbWUua2V5ID0gXCJmaXJzdE5hbWVcIjtcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gd29ya3NoZWV0LmdldENvbHVtbigyKTtcbiAgICBsYXN0TmFtZS5oZWFkZXIgPSBcIkxhc3QgTmFtZVwiO1xuICAgIGxhc3ROYW1lLmtleSA9IFwibGFzdE5hbWVcIjtcblxuICAgIGNvbnN0IGhvdXJzV29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbigzKTtcbiAgICBob3Vyc1dvcmtlZC5oZWFkZXIgPSBcIkhvdXJzIFdvcmtlZFwiO1xuICAgIGhvdXJzV29ya2VkLmtleSA9IFwiaG91cnNXb3JrZWRcIjtcblxuICAgIGNvbnN0IGhvdXJzU2NoZWR1bGVkID0gd29ya3NoZWV0LmdldENvbHVtbig0KTtcbiAgICBob3Vyc1NjaGVkdWxlZC5oZWFkZXIgPSBcIkhvdXJzIFNjaGVkdWxlZFwiO1xuICAgIGhvdXJzU2NoZWR1bGVkLmtleSA9IFwiaG91cnNTY2hlZHVsZWRcIjtcblxuXG4gICAgY29uc3QgcGVyY2VudFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNSk7XG4gICAgcGVyY2VudFdvcmtlZC5oZWFkZXIgPSBcIlBlcmNlbnQgV29ya2VkXCI7XG4gICAgcGVyY2VudFdvcmtlZC5rZXkgPSBcInBlcmNlbnRXb3JrZWRcIjtcblxuICAgIGNvbnN0IGNoYW5nZUZyb21QcmV2aW91c1dlZWsgPSB3b3Jrc2hlZXQuZ2V0Q29sdW1uKDYpO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsuaGVhZGVyID0gXCJQZXJjZW50IENoYW5nZSBmcm9tIExhc3QgV2Vla1wiO1xuICAgIGNoYW5nZUZyb21QcmV2aW91c1dlZWsua2V5ID0gXCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrXCI7XG4gICAgY2hhbmdlRnJvbVByZXZpb3VzV2Vlay53aWR0aCA9IDMwO1xuXG4gICAgY29uc3QgdGFBc3NpZ25lZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oNyk7XG4gICAgdGFBc3NpZ25lZC5oZWFkZXIgPSBcIlRBXCI7XG4gICAgdGFBc3NpZ25lZC5rZXkgPSBcInRhXCI7XG5cbiAgICBjb25zdCB0b3RhbFdvcmtlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oOSk7XG4gICAgdG90YWxXb3JrZWQuaGVhZGVyID0gXCJUb3RhbCBXb3JrZWRcIjtcbiAgICB0b3RhbFdvcmtlZC5rZXkgPSBcInRvdGFsV29ya2VkXCI7XG5cbiAgICBjb25zdCB0b3RhbFNjaGVkdWxlZCA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTApO1xuICAgIHRvdGFsU2NoZWR1bGVkLmhlYWRlciA9IFwiVG90YWwgU2NoZWR1bGVkXCI7XG4gICAgdG90YWxTY2hlZHVsZWQua2V5ID0gXCJ0b3RhbFNjaGVkdWxlZFwiO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50V29ya2VkID0gd29ya3NoZWV0LmdldENvbHVtbigxMSk7XG4gICAgdG90YWxQZXJjZW50V29ya2VkLmhlYWRlciA9IFwiUGVyY2VudCBXb3JrZWRcIjtcbiAgICB0b3RhbFBlcmNlbnRXb3JrZWQua2V5ID0gXCJ0b3RhbFBlcmNlbnRXb3JrZWRcIjtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudENoYW5nZSA9IHdvcmtzaGVldC5nZXRDb2x1bW4oMTIpO1xuICAgIHRvdGFsUGVyY2VudENoYW5nZS5oZWFkZXIgPSBcIlRvdGFsIFBlcmNlbnQgQ2hhbmdlIGZyb20gTGFzdCBXZWVrXCI7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLmtleSA9IFwidG90YWxQZXJjZW50Q2hhbmdlXCI7XG4gICAgdG90YWxQZXJjZW50Q2hhbmdlLndpZHRoID0gMzU7XG5cblxufVxuXG5jb25zdCBwb3B1bGF0ZVJvdyA9ICh3b3JrQm9va0RhdGEsIGN1cnJlbnRJbnRlcm5EYXRhLCBwZXJjZW50YWdlQWNjZXB0ZWQsIHJvdykgPT4ge1xuICAgIGNvbnN0IGN1cnJTaGVldCA9IHdvcmtCb29rRGF0YS53b3JrYm9vay5nZXRXb3Jrc2hlZXQod29ya0Jvb2tEYXRhLndlZWtOYW1lKTtcblxuICAgIGNvbnN0IFtub3JtYWxIb3Vyc1dvcmtlZCwgbm9ybWFsSG91cnNTY2hlZHVsZWQsIHBlcmNlbnRhZ2VEaWZmZXJlbmNlXSA9IHByb2Nlc3NIb3Vyc0RhdGEocm93LCB3b3JrQm9va0RhdGEudGltZVNoZWV0LCB3b3JrQm9va0RhdGEuY3VycmVudFdlZWssIGN1cnJlbnRJbnRlcm5EYXRhLmZ1bGxOYW1lLCB3b3JrQm9va0RhdGEud2Vla05hbWUsIHdvcmtCb29rRGF0YS5zaW1wbGlmaWVkU2NoZWR1bGUpO1xuXG5cbiAgICBjdXJyU2hlZXQuYWRkUm93KHtcbiAgICAgICAgZmlyc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBjdXJyZW50SW50ZXJuRGF0YS5sYXN0TmFtZSxcbiAgICAgICAgaG91cnNXb3JrZWQ6IG5vcm1hbEhvdXJzV29ya2VkLFxuICAgICAgICBob3Vyc1NjaGVkdWxlZDogbm9ybWFsSG91cnNTY2hlZHVsZWQsXG4gICAgICAgIHBlcmNlbnRXb3JrZWQ6IHBlcmNlbnRhZ2VEaWZmZXJlbmNlLFxuXG4gICAgfSlcblxuICAgIGNvbG9yUGVyY2VudGFnZUNlbGwoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpO1xuXG59XG5cbmNvbnN0IHByb2Nlc3NIb3Vyc0RhdGEgPSAocm93LCB0aW1lU2hlZXQsIGN1cnJlbnRXZWVrLCBjdXJyZW50SW50ZXJuLCB3ZWVrTmFtZSwgc2ltcGxpZmllZFNjaGVkdWxlKSA9PiB7XG4gICAgY29uc3QgcG90ZW50aWFsV29ya0hvdXJzID0gdGltZVNoZWV0LmdldENlbGwocm93LCAxNSkudmFsdWU7XG4gICAgY29uc3Qgd29ya0hvdXJzID0gcG90ZW50aWFsV29ya0hvdXJzID8gcG90ZW50aWFsV29ya0hvdXJzIDogXCIwMDowMFwiO1xuXG4gICAgY3VycmVudFdlZWtbY3VycmVudEludGVybl0gPSB7IGhvdXJzV29ya2VkOiBob3Vyc1RvRGVjaW1hbCh3b3JrSG91cnMpIH07XG4gICAgY29uc3QgZGVjaW1hbEhvdXJzU2NoZWR1bGVkID0gc2ltcGxpZmllZFNjaGVkdWxlW3dlZWtOYW1lXVtjdXJyZW50SW50ZXJuXTtcbiAgICBjb25zdCBub3JtYWxIb3Vyc1NjaGVkdWxlZCA9IGRlY2ltYWxUb0hvdXJzKGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCk7XG5cbiAgICBjb25zdCBub3JtYWxIb3Vyc1dvcmtlZCA9IHdvcmtIb3VycztcbiAgICBjb25zdCBkZWNpbWFsSG91cnNXb3JrZWQgPSBob3Vyc1RvRGVjaW1hbChub3JtYWxIb3Vyc1dvcmtlZCk7XG4gICAgY3VycmVudFdlZWsudG90YWwgKz0gZGVjaW1hbEhvdXJzV29ya2VkO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlID0gKGRlY2ltYWxIb3Vyc1dvcmtlZCAvIGRlY2ltYWxIb3Vyc1NjaGVkdWxlZCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICBjdXJyZW50V2Vla1tjdXJyZW50SW50ZXJuXS5wZXJjZW50YWdlRGlmZmVyZW5jZSA9IHBlcmNlbnRhZ2VEaWZmZXJlbmNlO1xuICAgIHJldHVybiBbbm9ybWFsSG91cnNXb3JrZWQsIG5vcm1hbEhvdXJzU2NoZWR1bGVkLCBwZXJjZW50YWdlRGlmZmVyZW5jZV07XG59XG5cbmNvbnN0IHByb2Nlc3NDaGFuZ2VGcm9tUHJldmlvdXNXZWVrID0gKGN1cnJXZWVrLCB3b3Jrc2hlZXQsIGZ1bGxOYW1lLCByb3csIGhvdXJzV29ya2VkTWFwKSA9PiB7XG4gICAgY29uc3QgcHJldldlZWsgPSBnZXRXZWVrQmVmb3JlKGN1cnJXZWVrKTtcbiAgICBsZXQgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlaztcbiAgICBpZiAoaG91cnNXb3JrZWRNYXBbcHJldldlZWtdICYmIGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtmdWxsTmFtZV0pIHtcbiAgICAgICAgcGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayA9IGhvdXJzV29ya2VkTWFwW3ByZXZXZWVrXVtmdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgfVxuICAgIGNvbnN0IHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayA9IGhvdXJzV29ya2VkTWFwW2N1cnJXZWVrXVtmdWxsTmFtZV0ucGVyY2VudGFnZURpZmZlcmVuY2U7XG4gICAgbGV0IGRpZmZlcmVuY2VGcm9tV2Vla3MgPSBwZXJjZW50YWdlRGlmZmVyZW5jZU9mUHJldmlvdXNXZWVrID9cbiAgICAgICAgKHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayAtIHBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZQcmV2aW91c1dlZWspLnRvRml4ZWQoMikgOiBcIlwiO1xuXG4gICAgY29uc3QgY3VyckNlbGwgPSB3b3Jrc2hlZXQuZ2V0Q2VsbChyb3csIDYpO1xuICAgIGN1cnJDZWxsLnZhbHVlID0gZGlmZmVyZW5jZUZyb21XZWVrcztcblxuICAgIGlmIChjdXJyQ2VsbCA8PSAtMTUpIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoY3VyckNlbGwgPiAxNSkge1xuICAgICAgICBjdXJyQ2VsbC5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcbiAgICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJzgwNDJmNThkJyB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2VGcm9tV2Vla3M7XG59XG5cbmNvbnN0IGNvbG9yUGVyY2VudGFnZUNlbGwgPSAoY3VyclNoZWV0LCBwZXJjZW50YWdlQWNjZXB0ZWQpID0+IHtcbiAgICBjb25zdCBjdXJyQ2VsbCA9IGN1cnJTaGVldC5nZXRDZWxsKGN1cnJTaGVldC5yb3dDb3VudCwgNSlcbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPCBwZXJjZW50YWdlQWNjZXB0ZWQpIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MGU3NjA2MCcgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAocGFyc2VGbG9hdChjdXJyQ2VsbCkgPiAxMDApIHtcbiAgICAgICAgY3VyckNlbGwuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuJyxcbiAgICAgICAgICAgIHBhdHRlcm46ICdzb2xpZCcsXG4gICAgICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICc4MDQyZjU4ZCcgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWtlVGltZXNoZWV0QW5hbHlzaXM7Il0sIm5hbWVzIjpbIkV4Y2VsSlMiLCJGaWxlU2F2ZXIiLCJob3Vyc1RvRGVjaW1hbCIsImdldERhdGVGcm9tU3RyaW5nIiwiZGVjaW1hbFRvSG91cnMiLCJnZXRXZWVrQmVmb3JlIiwibWFrZVRpbWVzaGVldEFuYWx5c2lzIiwidGltZXNoZWV0RXhjZWwiLCJzaW1wbGlmaWVkU2NoZWR1bGUiLCJwZXJjZW50YWdlQWNjZXB0ZWQiLCJ3b3JrYm9vayIsIldvcmtib29rIiwiaG91cnNXb3JrZWRNYXAiLCJ0b3RhbCIsInRpbWVTaGVldCIsImdldFdvcmtzaGVldCIsImZpcnN0TmFtZSIsImdldENlbGwiLCJ2YWx1ZSIsImxhc3ROYW1lIiwiY3VycmVudEludGVybiIsInJvdyIsInJvd0NvdW50IiwidGVtcEZpcnN0TmFtZSIsInRlbXBMYXN0TmFtZSIsIndlZWtOYW1lIiwid2Vla1NjaGVkdWxlIiwic2V0VXBOZXdTaGVldCIsImN1cnJlbnRXZWVrIiwiY3VycmVudEludGVybkRhdGEiLCJmdWxsTmFtZSIsIndvcmtCb29rRGF0YSIsInBvcHVsYXRlUm93IiwiZWFjaFNoZWV0Iiwid29ya3NoZWV0IiwiY3VycldlZWsiLCJuYW1lIiwicHJvY2Vzc0NoYW5nZUZyb21QcmV2aW91c1dlZWsiLCJ4bHN4Iiwid3JpdGVCdWZmZXIiLCJ0aGVuIiwiZGF0YSIsImJsb2IiLCJCbG9iIiwic2F2ZUFzIiwic2hlZXQiLCJhZGRXb3Jrc2hlZXQiLCJ2aWV3cyIsInByb3BlcnRpZXMiLCJkZWZhdWx0Q29sV2lkdGgiLCJkZWZhdWx0Um93SGVpZ2h0Iiwic2V0VXBDb2x1bW5zIiwiZ2V0Q29sdW1uIiwiaGVhZGVyIiwia2V5IiwiaG91cnNXb3JrZWQiLCJob3Vyc1NjaGVkdWxlZCIsInBlcmNlbnRXb3JrZWQiLCJjaGFuZ2VGcm9tUHJldmlvdXNXZWVrIiwid2lkdGgiLCJ0YUFzc2lnbmVkIiwidG90YWxXb3JrZWQiLCJ0b3RhbFNjaGVkdWxlZCIsInRvdGFsUGVyY2VudFdvcmtlZCIsInRvdGFsUGVyY2VudENoYW5nZSIsImN1cnJTaGVldCIsIm5vcm1hbEhvdXJzV29ya2VkIiwibm9ybWFsSG91cnNTY2hlZHVsZWQiLCJwZXJjZW50YWdlRGlmZmVyZW5jZSIsInByb2Nlc3NIb3Vyc0RhdGEiLCJhZGRSb3ciLCJjb2xvclBlcmNlbnRhZ2VDZWxsIiwicG90ZW50aWFsV29ya0hvdXJzIiwid29ya0hvdXJzIiwiZGVjaW1hbEhvdXJzU2NoZWR1bGVkIiwiZGVjaW1hbEhvdXJzV29ya2VkIiwidG9GaXhlZCIsInByZXZXZWVrIiwicGVyY2VudGFnZURpZmZlcmVuY2VPZlByZXZpb3VzV2VlayIsInBlcmNlbnRhZ2VEaWZmZXJlbmNlT2ZDdXJyZW50V2VlayIsImRpZmZlcmVuY2VGcm9tV2Vla3MiLCJjdXJyQ2VsbCIsImZpbGwiLCJ0eXBlIiwicGF0dGVybiIsImZnQ29sb3IiLCJhcmdiIiwicGFyc2VGbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\n"));

/***/ })

});