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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar DataList = function DataList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var token, response, responseData, measurements, measurementStrings;\n        return _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                token = localStorage.getItem('token');\n                _context.next = 4;\n                return fetch('http://localhost/get_data', {\n                  headers: {\n                    Authorization: \"Bearer \".concat(token)\n                  }\n                });\n\n              case 4:\n                response = _context.sent;\n                _context.next = 7;\n                return response.json();\n\n              case 7:\n                responseData = _context.sent;\n                measurements = responseData.measurements;\n                measurementStrings = measurements.map(function (measurement) {\n                  var shouldHighlight = measurement.value > measurement.min_value || measurement.value > measurement.max_value;\n                  var className = shouldHighlight ? 'list-group-item list-group-item-danger' : 'list-group-item';\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                    className: className,\n                    children: [\"Medici\\xF3n ID: \", measurement.medition_id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 26,\n                      columnNumber: 53\n                    }, _this), \"Sensor ID: \", measurement.sensor_id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 27,\n                      columnNumber: 49\n                    }, _this), \"Ubicaci\\xF3n: \", measurement.ubication, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 28,\n                      columnNumber: 49\n                    }, _this), \"Fecha: \", measurement.date, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 29,\n                      columnNumber: 40\n                    }, _this), \"Valor M\\xEDnimo: \", measurement.min_value, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 30,\n                      columnNumber: 52\n                    }, _this), \"Valor M\\xE1ximo: \", measurement.max_value, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 31,\n                      columnNumber: 52\n                    }, _this), \"Valor: \", measurement.value]\n                  }, measurement.medition_id, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 25,\n                    columnNumber: 13\n                  }, _this);\n                });\n                setData(measurementStrings);\n                setIsLoading(false);\n                _context.next = 20;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context[\"catch\"](0);\n                alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');\n                router.push({\n                  pathname: '/login'\n                });\n                console.error('Error al obtener los datos:', _context.t0);\n                setIsLoading(false);\n\n              case 20:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 14]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n    className: \"list-group\",\n    children: data\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(DataList, \"xUVX0TzIZ/6Kxx6r6X+EAa9x6Kk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = DataList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkNBLE1BQUlILFNBQUosRUFBZTtBQUNiLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFJRixJQUFJLENBQUNpQyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFBTztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUEsY0FBNEJqQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXpERDs7R0FBTUQ7VUFHV0Q7OztLQUhYQztBQTJETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EYXRhTGlzdC5qcz83OWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBEYXRhTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9nZXRfZGF0YScsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudHMgPSByZXNwb25zZURhdGEubWVhc3VyZW1lbnRzO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudFN0cmluZ3MgPSBtZWFzdXJlbWVudHMubWFwKG1lYXN1cmVtZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBzaG91bGRIaWdobGlnaHQgPSBtZWFzdXJlbWVudC52YWx1ZSA+IG1lYXN1cmVtZW50Lm1pbl92YWx1ZSB8fCBtZWFzdXJlbWVudC52YWx1ZSA+IG1lYXN1cmVtZW50Lm1heF92YWx1ZTtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzaG91bGRIaWdobGlnaHQgPyAnbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1kYW5nZXInIDogJ2xpc3QtZ3JvdXAtaXRlbSc7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e21lYXN1cmVtZW50Lm1lZGl0aW9uX2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICAgIE1lZGljacOzbiBJRDoge21lYXN1cmVtZW50Lm1lZGl0aW9uX2lkfTxiciAvPlxuICAgICAgICAgICAgICBTZW5zb3IgSUQ6IHttZWFzdXJlbWVudC5zZW5zb3JfaWR9PGJyIC8+XG4gICAgICAgICAgICAgIFViaWNhY2nDs246IHttZWFzdXJlbWVudC51YmljYXRpb259PGJyIC8+XG4gICAgICAgICAgICAgIEZlY2hhOiB7bWVhc3VyZW1lbnQuZGF0ZX08YnIgLz5cbiAgICAgICAgICAgICAgVmFsb3IgTcOtbmltbzoge21lYXN1cmVtZW50Lm1pbl92YWx1ZX08YnIgLz5cbiAgICAgICAgICAgICAgVmFsb3IgTcOheGltbzoge21lYXN1cmVtZW50Lm1heF92YWx1ZX08YnIgLz5cbiAgICAgICAgICAgICAgVmFsb3I6IHttZWFzdXJlbWVudC52YWx1ZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0RGF0YShtZWFzdXJlbWVudFN0cmluZ3MpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ0FjY2VzbyBubyBhdXRvcml6YWRvLiBQb3IgZmF2b3IsIGluaWNpZSBzZXNpw7NuIG51ZXZhbWVudGUuJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogJy9sb2dpbicsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBvYnRlbmVyIGxvcyBkYXRvczonLCBlcnJvcik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkNhcmdhbmRvLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+Tm8gc2UgZW5jb250cmFyb24gZGF0b3MuPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+e2RhdGF9PC91bD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRGF0YUxpc3QiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsImZldGNoRGF0YSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZURhdGEiLCJtZWFzdXJlbWVudHMiLCJtZWFzdXJlbWVudFN0cmluZ3MiLCJtYXAiLCJtZWFzdXJlbWVudCIsInNob3VsZEhpZ2hsaWdodCIsInZhbHVlIiwibWluX3ZhbHVlIiwibWF4X3ZhbHVlIiwiY2xhc3NOYW1lIiwibWVkaXRpb25faWQiLCJzZW5zb3JfaWQiLCJ1YmljYXRpb24iLCJkYXRlIiwiYWxlcnQiLCJwdXNoIiwicGF0aG5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ })

});