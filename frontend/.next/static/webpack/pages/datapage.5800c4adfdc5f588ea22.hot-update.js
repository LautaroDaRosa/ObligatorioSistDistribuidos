"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/datapage",{

/***/ "./pages/DataList.js":
/*!***************************!*\
  !*** ./pages/DataList.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar DataList = function DataList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var token, response, responseData, measurements, measurementRows;\n        return _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                token = localStorage.getItem('token');\n                _context.next = 4;\n                return fetch('http://localhost/get_data', {\n                  headers: {\n                    Authorization: \"Bearer \".concat(token)\n                  }\n                });\n\n              case 4:\n                response = _context.sent;\n                _context.next = 7;\n                return response.json();\n\n              case 7:\n                responseData = _context.sent;\n                measurements = responseData.measurements;\n                measurementRows = measurements.map(function (measurement) {\n                  var shouldHighlight = measurement.value < measurement.min_value || measurement.value > measurement.max_value;\n                  var className = shouldHighlight ? 'table-danger' : '';\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"tr\", {\n                    className: className,\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n                      children: measurement.medition_id\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 26,\n                      columnNumber: 15\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n                      children: measurement.sensor_id\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 27,\n                      columnNumber: 15\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n                      children: measurement.ubication\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 28,\n                      columnNumber: 15\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n                      children: measurement.date\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 29,\n                      columnNumber: 15\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n                      children: measurement.min_value\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 30,\n                      columnNumber: 15\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n                      children: measurement.max_value\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 31,\n                      columnNumber: 15\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n                      children: measurement.value\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 32,\n                      columnNumber: 15\n                    }, _this)]\n                  }, measurement.medition_id, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 25,\n                    columnNumber: 13\n                  }, _this);\n                });\n                setData(measurementRows);\n                setIsLoading(false);\n                _context.next = 20;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context[\"catch\"](0);\n                alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');\n                router.push({\n                  pathname: '/login'\n                });\n                console.error('Error al obtener los datos:', _context.t0);\n                setIsLoading(false);\n\n              case 20:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 14]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 12\n    }, _this);\n  }\n\n  var tableStyle = {\n    maxWidth: '800px',\n    margin: '20px auto',\n    border: '1px solid #ccc'\n  };\n  var allStyle = {\n    margin: '20px auto'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    style: allStyle,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      className: \"display-4 text-center\",\n      children: \"Mediciones\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      style: tableStyle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"table\", {\n        className: \"table\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"thead\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"tr\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"th\", {\n              children: \"Medici\\xF3n ID\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"th\", {\n              children: \"Sensor ID\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"th\", {\n              children: \"Ubicaci\\xF3n\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"th\", {\n              children: \"Fecha\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"th\", {\n              children: \"Valor M\\xEDnimo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"th\", {\n              children: \"Valor M\\xE1ximo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"th\", {\n              children: \"Valor\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"tbody\", {\n          children: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DataList, \"xUVX0TzIZ/6Kxx6r6X+EAa9x6Kk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = DataList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUEsaUJBREYsZUFZRTtBQUFBLG9CQUNHbEM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXpGRDs7R0FBTUQ7VUFHV0Q7OztLQUhYQztBQTJGTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EYXRhTGlzdC5qcz83OWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBEYXRhTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9nZXRfZGF0YScsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudHMgPSByZXNwb25zZURhdGEubWVhc3VyZW1lbnRzO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudFJvd3MgPSBtZWFzdXJlbWVudHMubWFwKG1lYXN1cmVtZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBzaG91bGRIaWdobGlnaHQgPSBtZWFzdXJlbWVudC52YWx1ZSA8IG1lYXN1cmVtZW50Lm1pbl92YWx1ZSB8fCBtZWFzdXJlbWVudC52YWx1ZSA+IG1lYXN1cmVtZW50Lm1heF92YWx1ZTtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzaG91bGRIaWdobGlnaHQgPyAndGFibGUtZGFuZ2VyJyA6ICcnO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PXttZWFzdXJlbWVudC5tZWRpdGlvbl9pZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgICA8dGQ+e21lYXN1cmVtZW50Lm1lZGl0aW9uX2lkfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bWVhc3VyZW1lbnQuc2Vuc29yX2lkfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bWVhc3VyZW1lbnQudWJpY2F0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bWVhc3VyZW1lbnQuZGF0ZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e21lYXN1cmVtZW50Lm1pbl92YWx1ZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e21lYXN1cmVtZW50Lm1heF92YWx1ZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e21lYXN1cmVtZW50LnZhbHVlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldERhdGEobWVhc3VyZW1lbnRSb3dzKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KCdBY2Nlc28gbm8gYXV0b3JpemFkby4gUG9yIGZhdm9yLCBpbmljaWUgc2VzacOzbiBudWV2YW1lbnRlLicpO1xuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6ICcvbG9naW4nLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsb3MgZGF0b3M6JywgZXJyb3IpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2Pk5vIHNlIGVuY29udHJhcm9uIGRhdG9zLjwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IHRhYmxlU3R5bGUgPSB7XG4gICAgbWF4V2lkdGg6ICc4MDBweCcsXG4gICAgbWFyZ2luOiAnMjBweCBhdXRvJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gIH07XG5cbiAgY29uc3QgYWxsU3R5bGUgPSB7XG4gICAgbWFyZ2luOiAnMjBweCBhdXRvJyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17YWxsU3R5bGV9PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCB0ZXh0LWNlbnRlclwiPk1lZGljaW9uZXM8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17dGFibGVTdHlsZX0+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPk1lZGljacOzbiBJRDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5TZW5zb3IgSUQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+VWJpY2FjacOzbjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5GZWNoYTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5WYWxvciBNw61uaW1vPC90aD5cbiAgICAgICAgICAgICAgPHRoPlZhbG9yIE3DoXhpbW88L3RoPlxuICAgICAgICAgICAgICA8dGg+VmFsb3I8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJEYXRhTGlzdCIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicm91dGVyIiwiZmV0Y2hEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlRGF0YSIsIm1lYXN1cmVtZW50cyIsIm1lYXN1cmVtZW50Um93cyIsIm1hcCIsIm1lYXN1cmVtZW50Iiwic2hvdWxkSGlnaGxpZ2h0IiwidmFsdWUiLCJtaW5fdmFsdWUiLCJtYXhfdmFsdWUiLCJjbGFzc05hbWUiLCJtZWRpdGlvbl9pZCIsInNlbnNvcl9pZCIsInViaWNhdGlvbiIsImRhdGUiLCJhbGVydCIsInB1c2giLCJwYXRobmFtZSIsImNvbnNvbGUiLCJlcnJvciIsImxlbmd0aCIsInRhYmxlU3R5bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJvcmRlciIsImFsbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ })

});