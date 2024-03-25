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

/***/ "(app-pages-browser)/./src/app/timesheet-tool/page.jsx":
/*!*****************************************!*\
  !*** ./src/app/timesheet-tool/page.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./src/app/timesheet-tool/page.css\");\n/* harmony import */ var _components_FileInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FileInput */ \"(app-pages-browser)/./src/components/FileInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_simplifySchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/simplifySchedule */ \"(app-pages-browser)/./src/helpers/simplifySchedule.jsx\");\n/* harmony import */ var _helpers_makeTimeSheetAnalysis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/makeTimeSheetAnalysis */ \"(app-pages-browser)/./src/helpers/makeTimeSheetAnalysis.jsx\");\n/* harmony import */ var _helpers_simplifyTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/simplifyTeam */ \"(app-pages-browser)/./src/helpers/simplifyTeam.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [timesheetExcel, setTimesheetExcel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [scheduleExcel, setScheduleExcel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [simplifiedSchedule, setSimplifiedSchedule] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [acceptablePercentage, setAcceptablePercentage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(80);\n    const [teamExcel, setTeamExcel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [teamMap, setTeamMap] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (scheduleExcel) {\n            (0,_helpers_simplifySchedule__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(scheduleExcel, setSimplifiedSchedule);\n        }\n    }, [\n        scheduleExcel\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (teamExcel) {\n            (0,_helpers_simplifyTeam__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(teamExcel, setTeamMap);\n        }\n    }, [\n        teamExcel\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"CD Timesheet Analyzer\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"NOTE: for both exports, make sure all of the extra options are UNCHECKED except for direct manager on timesheetz\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Upload Timesheet\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"instructions: In the Time Clock tab, go to timesheets and export the current week\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setWorksheet: setTimesheetExcel\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Upload Shift Schedule\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"instructions: In the Job Scheduling tab, click on View options, then List view, then choose the time frame and export.\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setWorksheet: setScheduleExcel\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Upload Teams\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"instructions: Upload an excel file with the First and Last Name and Team Name of the intern.\"\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setWorksheet: setTeamExcel\n            }, void 0, false, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            simplifiedSchedule && timesheetExcel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"1em\",\n                    marginBottom: \"1em\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"1em\",\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                style: {\n                                    margin: \"0 .5em 0 0\"\n                                },\n                                children: \"Acceptable attendance percentage: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (event)=>{\n                                    setAcceptablePercentage(event.target.value);\n                                },\n                                style: {\n                                    width: \"30px\"\n                                },\n                                type: \"text\",\n                                value: acceptablePercentage\n                            }, void 0, false, {\n                                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                if (!acceptablePercentage) {\n                                    alert(\"set a valid percentage\");\n                                } else {\n                                    (0,_helpers_makeTimeSheetAnalysis__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(timesheetExcel, simplifiedSchedule, acceptablePercentage, teamMap);\n                                }\n                            },\n                            children: \"Make Timesheet Analysis\"\n                        }, void 0, false, {\n                            fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/student/dev/cd-timesheet-analyzer/src/app/timesheet-tool/page.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"oO2Eqc+uiHO6D6wRgu0TOYMlD9c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGltZXNoZWV0LXRvb2wvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUI7QUFDNEI7QUFDSDtBQUNjO0FBQ1U7QUFDbEI7QUFDbEQsTUFBTU0sT0FBTzs7SUFDWCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQTtJQUNwRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDVSxvQkFBb0JDLHNCQUFzQixHQUFHWCwrQ0FBUUE7SUFDNUQsTUFBTSxDQUFDWSxzQkFBc0JDLHdCQUF3QixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqRSxNQUFNLENBQUNjLFdBQVdDLGFBQWEsR0FBR2YsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQTtJQUV0Q0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxlQUFlO1lBQ2pCTixxRUFBZ0JBLENBQUNNLGVBQWVHO1FBQ2xDO0lBQ0YsR0FBRztRQUFDSDtLQUFjO0lBRWxCUCxnREFBU0EsQ0FBQztRQUNSLElBQUlhLFdBQVc7WUFDYlYsaUVBQVlBLENBQUNVLFdBQVdHO1FBQzFCO0lBQ0YsR0FBRztRQUFDSDtLQUFVO0lBRWQscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ3ZCLDZEQUFTQTtnQkFBQ3dCLGNBQWNoQjs7Ozs7OzBCQUN6Qiw4REFBQ2M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ3ZCLDZEQUFTQTtnQkFBQ3dCLGNBQWNkOzs7Ozs7MEJBQ3pCLDhEQUFDWTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDdkIsNkRBQVNBO2dCQUFDd0IsY0FBY1I7Ozs7OztZQUd2Qkwsc0JBQXNCSiwrQkFDcEIsOERBQUNrQjtnQkFBSUMsT0FBTztvQkFBRUMsV0FBVztvQkFBT0MsY0FBYztnQkFBTTs7a0NBQ2xELDhEQUFDSDt3QkFBSUMsT0FBTzs0QkFBRUUsY0FBYzs0QkFBT0MsU0FBUzt3QkFBTzs7MENBQ2pELDhEQUFDUjtnQ0FBR0ssT0FBTztvQ0FBRUksUUFBUTtnQ0FBYTswQ0FBRzs7Ozs7OzBDQUNyQyw4REFBQ0M7Z0NBQU1DLFVBQVUsQ0FBQ0M7b0NBQ2hCbkIsd0JBQXdCbUIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO2dDQUM1QztnQ0FFRVQsT0FBTztvQ0FBRVUsT0FBTztnQ0FBTztnQ0FBR0MsTUFBSztnQ0FBT0YsT0FBT3RCOzs7Ozs7Ozs7Ozs7a0NBRWpELDhEQUFDWTtrQ0FDQyw0RUFBQ2E7NEJBQ0NDLFNBQVM7Z0NBQ1AsSUFBSSxDQUFDMUIsc0JBQXNCO29DQUN6QjJCLE1BQU07Z0NBQ1IsT0FDSztvQ0FDSHBDLDBFQUFxQkEsQ0FBQ0csZ0JBQWdCSSxvQkFBb0JFLHNCQUFzQkk7Z0NBQ2xGOzRCQUNGO3NDQUNFOzs7Ozs7Ozs7Ozs7Ozs7OzRCQU1OOzs7Ozs7O0FBSVo7R0FqRU1YO0tBQUFBO0FBbUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdGltZXNoZWV0LXRvb2wvcGFnZS5qc3g/YjYzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCAnLi9wYWdlLmNzcydcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL0ZpbGVJbnB1dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNpbXBsaWZ5U2NoZWR1bGUgZnJvbSAnQC9oZWxwZXJzL3NpbXBsaWZ5U2NoZWR1bGUnO1xuaW1wb3J0IG1ha2VUaW1lc2hlZXRBbmFseXNpcyBmcm9tICdAL2hlbHBlcnMvbWFrZVRpbWVTaGVldEFuYWx5c2lzJztcbmltcG9ydCBzaW1wbGlmeVRlYW0gZnJvbSAnQC9oZWxwZXJzL3NpbXBsaWZ5VGVhbSc7XG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbdGltZXNoZWV0RXhjZWwsIHNldFRpbWVzaGVldEV4Y2VsXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzY2hlZHVsZUV4Y2VsLCBzZXRTY2hlZHVsZUV4Y2VsXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzaW1wbGlmaWVkU2NoZWR1bGUsIHNldFNpbXBsaWZpZWRTY2hlZHVsZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYWNjZXB0YWJsZVBlcmNlbnRhZ2UsIHNldEFjY2VwdGFibGVQZXJjZW50YWdlXSA9IHVzZVN0YXRlKDgwKTtcbiAgY29uc3QgW3RlYW1FeGNlbCwgc2V0VGVhbUV4Y2VsXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0ZWFtTWFwLCBzZXRUZWFtTWFwXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2NoZWR1bGVFeGNlbCkge1xuICAgICAgc2ltcGxpZnlTY2hlZHVsZShzY2hlZHVsZUV4Y2VsLCBzZXRTaW1wbGlmaWVkU2NoZWR1bGUpO1xuICAgIH1cbiAgfSwgW3NjaGVkdWxlRXhjZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0ZWFtRXhjZWwpIHtcbiAgICAgIHNpbXBsaWZ5VGVhbSh0ZWFtRXhjZWwsIHNldFRlYW1NYXApO1xuICAgIH1cbiAgfSwgW3RlYW1FeGNlbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gPlxuICAgICAgPGgxPkNEIFRpbWVzaGVldCBBbmFseXplcjwvaDE+XG4gICAgICA8aDM+Tk9URTogZm9yIGJvdGggZXhwb3J0cywgbWFrZSBzdXJlIGFsbCBvZiB0aGUgZXh0cmEgb3B0aW9ucyBhcmUgVU5DSEVDS0VEIGV4Y2VwdCBmb3IgZGlyZWN0IG1hbmFnZXIgb24gdGltZXNoZWV0ejwvaDM+XG4gICAgICA8aDI+VXBsb2FkIFRpbWVzaGVldDwvaDI+XG4gICAgICA8cD5pbnN0cnVjdGlvbnM6IEluIHRoZSBUaW1lIENsb2NrIHRhYiwgZ28gdG8gdGltZXNoZWV0cyBhbmQgZXhwb3J0IHRoZSBjdXJyZW50IHdlZWs8L3A+XG4gICAgICA8RmlsZUlucHV0IHNldFdvcmtzaGVldD17c2V0VGltZXNoZWV0RXhjZWx9IC8+XG4gICAgICA8aDI+VXBsb2FkIFNoaWZ0IFNjaGVkdWxlPC9oMj5cbiAgICAgIDxwPmluc3RydWN0aW9uczogSW4gdGhlIEpvYiBTY2hlZHVsaW5nIHRhYiwgY2xpY2sgb24gVmlldyBvcHRpb25zLCB0aGVuIExpc3QgdmlldywgdGhlbiBjaG9vc2UgdGhlIHRpbWUgZnJhbWUgYW5kIGV4cG9ydC48L3A+XG4gICAgICA8RmlsZUlucHV0IHNldFdvcmtzaGVldD17c2V0U2NoZWR1bGVFeGNlbH0gLz5cbiAgICAgIDxoMj5VcGxvYWQgVGVhbXM8L2gyPlxuICAgICAgPHA+aW5zdHJ1Y3Rpb25zOiBVcGxvYWQgYW4gZXhjZWwgZmlsZSB3aXRoIHRoZSBGaXJzdCBhbmQgTGFzdCBOYW1lIGFuZCBUZWFtIE5hbWUgb2YgdGhlIGludGVybi48L3A+XG4gICAgICA8RmlsZUlucHV0IHNldFdvcmtzaGVldD17c2V0VGVhbUV4Y2VsfSAvPlxuICAgICAgXG4gICAgICB7XG4gICAgICAgIHNpbXBsaWZpZWRTY2hlZHVsZSAmJiB0aW1lc2hlZXRFeGNlbD9cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiwgbWFyZ2luQm90dG9tOiBcIjFlbVwiIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMWVtXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiBcIjAgLjVlbSAwIDBcIiB9fT5BY2NlcHRhYmxlIGF0dGVuZGFuY2UgcGVyY2VudGFnZTogPC9oMz5cbiAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBY2NlcHRhYmxlUGVyY2VudGFnZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMHB4XCIgfX0gdHlwZT1cInRleHRcIiB2YWx1ZT17YWNjZXB0YWJsZVBlcmNlbnRhZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWFjY2VwdGFibGVQZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdzZXQgYSB2YWxpZCBwZXJjZW50YWdlJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYWtlVGltZXNoZWV0QW5hbHlzaXModGltZXNoZWV0RXhjZWwsIHNpbXBsaWZpZWRTY2hlZHVsZSwgYWNjZXB0YWJsZVBlcmNlbnRhZ2UsIHRlYW1NYXApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgIE1ha2UgVGltZXNoZWV0IEFuYWx5c2lzXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA6IFwiXCJcbiAgICAgIH1cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiRmlsZUlucHV0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzaW1wbGlmeVNjaGVkdWxlIiwibWFrZVRpbWVzaGVldEFuYWx5c2lzIiwic2ltcGxpZnlUZWFtIiwiSG9tZSIsInRpbWVzaGVldEV4Y2VsIiwic2V0VGltZXNoZWV0RXhjZWwiLCJzY2hlZHVsZUV4Y2VsIiwic2V0U2NoZWR1bGVFeGNlbCIsInNpbXBsaWZpZWRTY2hlZHVsZSIsInNldFNpbXBsaWZpZWRTY2hlZHVsZSIsImFjY2VwdGFibGVQZXJjZW50YWdlIiwic2V0QWNjZXB0YWJsZVBlcmNlbnRhZ2UiLCJ0ZWFtRXhjZWwiLCJzZXRUZWFtRXhjZWwiLCJ0ZWFtTWFwIiwic2V0VGVhbU1hcCIsIm1haW4iLCJoMSIsImgzIiwiaDIiLCJwIiwic2V0V29ya3NoZWV0IiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwibWFyZ2luIiwiaW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/timesheet-tool/page.jsx\n"));

/***/ })

});