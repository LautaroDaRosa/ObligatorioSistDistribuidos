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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar DataList = function DataList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var token, response, responseData, measurements, measurementStrings;\n        return _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                token = localStorage.getItem('token');\n                _context.next = 4;\n                return fetch('http://localhost/get_data', {\n                  headers: {\n                    Authorization: \"Bearer \".concat(token)\n                  }\n                });\n\n              case 4:\n                response = _context.sent;\n                _context.next = 7;\n                return response.json();\n\n              case 7:\n                responseData = _context.sent;\n                measurements = responseData.measurements;\n                measurementStrings = measurements.map(function (measurement) {\n                  return \"Medici\\xF3n ID: \".concat(measurement.medition_id, \"\\nSensor ID: \").concat(measurement.sensor_id, \"\\nUbicaci\\xF3n: \").concat(measurement.ubication, \"\\nFecha: \").concat(measurement.date, \"\\nValor M\\xEDnimo: \").concat(measurement.min_value, \"\\nValor M\\xE1ximo: \").concat(measurement.max_value, \"\\nValor: \").concat(measurement.value);\n                });\n                setData(measurementStrings);\n                setIsLoading(false);\n                _context.next = 20;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context[\"catch\"](0);\n                alert(_context.t0.response.status);\n\n                if (_context.t0.response && _context.t0.response.status === 401) {\n                  alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');\n                  router.push({\n                    pathname: '/login'\n                  });\n                }\n\n                console.error('Error al obtener los datos:', _context.t0);\n                setIsLoading(false);\n\n              case 20:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 14]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n    children: data.map(function (item, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n        children: item\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DataList, \"xUVX0TzIZ/6Kxx6r6X+EAa9x6Kk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = DataList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXpERDs7R0FBTW5DO1VBR1dEOzs7S0FIWEM7QUEyRE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGF0YUxpc3QuanM/NzllNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgRGF0YUxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvZ2V0X2RhdGEnLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRzID0gcmVzcG9uc2VEYXRhLm1lYXN1cmVtZW50cztcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRTdHJpbmdzID0gbWVhc3VyZW1lbnRzLm1hcChtZWFzdXJlbWVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBNZWRpY2nDs24gSUQ6ICR7bWVhc3VyZW1lbnQubWVkaXRpb25faWR9XFxuU2Vuc29yIElEOiAke21lYXN1cmVtZW50LnNlbnNvcl9pZH1cXG5VYmljYWNpw7NuOiAke21lYXN1cmVtZW50LnViaWNhdGlvbn1cXG5GZWNoYTogJHttZWFzdXJlbWVudC5kYXRlfVxcblZhbG9yIE3DrW5pbW86ICR7bWVhc3VyZW1lbnQubWluX3ZhbHVlfVxcblZhbG9yIE3DoXhpbW86ICR7bWVhc3VyZW1lbnQubWF4X3ZhbHVlfVxcblZhbG9yOiAke21lYXN1cmVtZW50LnZhbHVlfWA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldERhdGEobWVhc3VyZW1lbnRTdHJpbmdzKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgYWxlcnQoJ0FjY2VzbyBubyBhdXRvcml6YWRvLiBQb3IgZmF2b3IsIGluaWNpZSBzZXNpw7NuIG51ZXZhbWVudGUuJyk7XG4gICAgICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2xvZ2luJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsb3MgZGF0b3M6JywgZXJyb3IpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2Pk5vIHNlIGVuY29udHJhcm9uIGRhdG9zLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpbmRleH0+e2l0ZW19PC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRGF0YUxpc3QiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsImZldGNoRGF0YSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZURhdGEiLCJtZWFzdXJlbWVudHMiLCJtZWFzdXJlbWVudFN0cmluZ3MiLCJtYXAiLCJtZWFzdXJlbWVudCIsIm1lZGl0aW9uX2lkIiwic2Vuc29yX2lkIiwidWJpY2F0aW9uIiwiZGF0ZSIsIm1pbl92YWx1ZSIsIm1heF92YWx1ZSIsInZhbHVlIiwiYWxlcnQiLCJzdGF0dXMiLCJwdXNoIiwicGF0aG5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJsZW5ndGgiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ })

});