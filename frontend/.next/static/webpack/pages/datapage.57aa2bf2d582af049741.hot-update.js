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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar DataList = function DataList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var token, _response, responseData, measurements, measurementStrings;\n\n        return _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                token = localStorage.getItem('token');\n                _context.next = 4;\n                return fetch('http://localhost/get_data', {\n                  headers: {\n                    Authorization: \"Bearer \".concat(token)\n                  }\n                });\n\n              case 4:\n                _response = _context.sent;\n                _context.next = 7;\n                return _response.json();\n\n              case 7:\n                responseData = _context.sent;\n                measurements = responseData.measurements;\n                measurementStrings = measurements.map(function (measurement) {\n                  return \"Medici\\xF3n ID: \".concat(measurement.medition_id, \"\\nSensor ID: \").concat(measurement.sensor_id, \"\\nUbicaci\\xF3n: \").concat(measurement.ubication, \"\\nFecha: \").concat(measurement.date, \"\\nValor M\\xEDnimo: \").concat(measurement.min_value, \"\\nValor M\\xE1ximo: \").concat(measurement.max_value, \"\\nValor: \").concat(measurement.value);\n                });\n                setData(measurementStrings);\n                setIsLoading(false);\n                _context.next = 19;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context[\"catch\"](0);\n\n                if (response.status === 401) {\n                  alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');\n                  router.push({\n                    pathname: '/datapage'\n                  });\n                }\n\n                console.error('Error al obtener los datos:', _context.t0);\n                setIsLoading(false);\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 14]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n    children: data.map(function (item, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n        children: item\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DataList, \"cUIHirocPIQDoBhSWLVYEdhEgBU=\");\n\n_c = DataList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/NzllNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRGF0YUxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9nZXRfZGF0YScsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudHMgPSByZXNwb25zZURhdGEubWVhc3VyZW1lbnRzO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudFN0cmluZ3MgPSBtZWFzdXJlbWVudHMubWFwKG1lYXN1cmVtZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gYE1lZGljacOzbiBJRDogJHttZWFzdXJlbWVudC5tZWRpdGlvbl9pZH1cXG5TZW5zb3IgSUQ6ICR7bWVhc3VyZW1lbnQuc2Vuc29yX2lkfVxcblViaWNhY2nDs246ICR7bWVhc3VyZW1lbnQudWJpY2F0aW9ufVxcbkZlY2hhOiAke21lYXN1cmVtZW50LmRhdGV9XFxuVmFsb3IgTcOtbmltbzogJHttZWFzdXJlbWVudC5taW5fdmFsdWV9XFxuVmFsb3IgTcOheGltbzogJHttZWFzdXJlbWVudC5tYXhfdmFsdWV9XFxuVmFsb3I6ICR7bWVhc3VyZW1lbnQudmFsdWV9YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0RGF0YShtZWFzdXJlbWVudFN0cmluZ3MpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBhbGVydCgnQWNjZXNvIG5vIGF1dG9yaXphZG8uIFBvciBmYXZvciwgaW5pY2llIHNlc2nDs24gbnVldmFtZW50ZS4nKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvZGF0YXBhZ2UnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBvYnRlbmVyIGxvcyBkYXRvczonLCBlcnJvcik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkNhcmdhbmRvLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+Tm8gc2UgZW5jb250cmFyb24gZGF0b3MuPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fT57aXRlbX08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEYXRhTGlzdCIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlRGF0YSIsIm1lYXN1cmVtZW50cyIsIm1lYXN1cmVtZW50U3RyaW5ncyIsIm1hcCIsIm1lYXN1cmVtZW50IiwibWVkaXRpb25faWQiLCJzZW5zb3JfaWQiLCJ1YmljYXRpb24iLCJkYXRlIiwibWluX3ZhbHVlIiwibWF4X3ZhbHVlIiwidmFsdWUiLCJzdGF0dXMiLCJhbGVydCIsInJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsImNvbnNvbGUiLCJlcnJvciIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ })

});