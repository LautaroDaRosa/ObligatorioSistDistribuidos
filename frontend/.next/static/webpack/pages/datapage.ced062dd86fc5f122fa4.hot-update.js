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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar DataList = function DataList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var token, response, responseData, measurements, measurementStrings;\n        return _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                token = localStorage.getItem('token');\n                _context.next = 4;\n                return fetch('http://localhost/get_data', {\n                  headers: {\n                    Authorization: \"Bearer \".concat(token)\n                  }\n                });\n\n              case 4:\n                response = _context.sent;\n                _context.next = 7;\n                return response.json();\n\n              case 7:\n                responseData = _context.sent;\n                measurements = responseData.measurements;\n                measurementStrings = measurements.map(function (measurement) {\n                  var shouldHighlight = measurement.value > mea;\n                  var className = shouldHighlight ? 'list-group-item list-group-item-danger' : 'list-group-item';\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                    className: className,\n                    children: [\"Medici\\xF3n ID: \", measurement.medition_id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 26,\n                      columnNumber: 53\n                    }, _this), \"Sensor ID: \", measurement.sensor_id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 27,\n                      columnNumber: 49\n                    }, _this), \"Ubicaci\\xF3n: \", measurement.ubication, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 28,\n                      columnNumber: 49\n                    }, _this), \"Fecha: \", measurement.date, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 29,\n                      columnNumber: 40\n                    }, _this), \"Valor M\\xEDnimo: \", measurement.min_value, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 30,\n                      columnNumber: 52\n                    }, _this), \"Valor M\\xE1ximo: \", measurement.max_value, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 31,\n                      columnNumber: 52\n                    }, _this), \"Valor: \", measurement.value]\n                  }, measurement.medition_id, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 25,\n                    columnNumber: 13\n                  }, _this);\n                });\n                setData(measurementStrings);\n                setIsLoading(false);\n                _context.next = 20;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context[\"catch\"](0);\n                alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');\n                router.push({\n                  pathname: '/login'\n                });\n                console.error('Error al obtener los datos:', _context.t0);\n                setIsLoading(false);\n\n              case 20:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 14]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n    className: \"list-group\",\n    children: data\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(DataList, \"xUVX0TzIZ/6Kxx6r6X+EAa9x6Kk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = DataList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsYUFBUDtBQUNEOztBQUVELE1BQUlGLElBQUksQ0FBQ2tDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUFPO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQSxjQUE0QmxDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBekREOztHQUFNRDtVQUdXRDs7O0tBSFhDO0FBMkROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RhdGFMaXN0LmpzPzc5ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IERhdGFMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2dldF9kYXRhJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVtZW50cyA9IHJlc3BvbnNlRGF0YS5tZWFzdXJlbWVudHM7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVtZW50U3RyaW5ncyA9IG1lYXN1cmVtZW50cy5tYXAobWVhc3VyZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IHNob3VsZEhpZ2hsaWdodCA9IG1lYXN1cmVtZW50LnZhbHVlID4gbWVhO1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHNob3VsZEhpZ2hsaWdodCA/ICdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWRhbmdlcicgOiAnbGlzdC1ncm91cC1pdGVtJztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17bWVhc3VyZW1lbnQubWVkaXRpb25faWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgTWVkaWNpw7NuIElEOiB7bWVhc3VyZW1lbnQubWVkaXRpb25faWR9PGJyIC8+XG4gICAgICAgICAgICAgIFNlbnNvciBJRDoge21lYXN1cmVtZW50LnNlbnNvcl9pZH08YnIgLz5cbiAgICAgICAgICAgICAgVWJpY2FjacOzbjoge21lYXN1cmVtZW50LnViaWNhdGlvbn08YnIgLz5cbiAgICAgICAgICAgICAgRmVjaGE6IHttZWFzdXJlbWVudC5kYXRlfTxiciAvPlxuICAgICAgICAgICAgICBWYWxvciBNw61uaW1vOiB7bWVhc3VyZW1lbnQubWluX3ZhbHVlfTxiciAvPlxuICAgICAgICAgICAgICBWYWxvciBNw6F4aW1vOiB7bWVhc3VyZW1lbnQubWF4X3ZhbHVlfTxiciAvPlxuICAgICAgICAgICAgICBWYWxvcjoge21lYXN1cmVtZW50LnZhbHVlfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXREYXRhKG1lYXN1cmVtZW50U3RyaW5ncyk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnQWNjZXNvIG5vIGF1dG9yaXphZG8uIFBvciBmYXZvciwgaW5pY2llIHNlc2nDs24gbnVldmFtZW50ZS4nKTtcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiAnL2xvZ2luJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIG9idGVuZXIgbG9zIGRhdG9zOicsIGVycm9yKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+Q2FyZ2FuZG8uLi48L2Rpdj47XG4gIH1cblxuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdj5ObyBzZSBlbmNvbnRyYXJvbiBkYXRvcy48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj57ZGF0YX08L3VsPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJEYXRhTGlzdCIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicm91dGVyIiwiZmV0Y2hEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlRGF0YSIsIm1lYXN1cmVtZW50cyIsIm1lYXN1cmVtZW50U3RyaW5ncyIsIm1hcCIsIm1lYXN1cmVtZW50Iiwic2hvdWxkSGlnaGxpZ2h0IiwidmFsdWUiLCJtZWEiLCJjbGFzc05hbWUiLCJtZWRpdGlvbl9pZCIsInNlbnNvcl9pZCIsInViaWNhdGlvbiIsImRhdGUiLCJtaW5fdmFsdWUiLCJtYXhfdmFsdWUiLCJhbGVydCIsInB1c2giLCJwYXRobmFtZSIsImNvbnNvbGUiLCJlcnJvciIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ })

});