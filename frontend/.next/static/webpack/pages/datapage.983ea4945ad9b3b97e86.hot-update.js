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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar DataList = function DataList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var token, response, responseText, measurements, measurementStrings, measurement, alertMessage;\n        return _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                token = localStorage.getItem('token');\n                alert(token);\n                /*\n                const response = await axios.get('http://localhost/get_data', {\n                  headers: {\n                    Authorization: `Bearer ${token}`\n                  }\n                });\n                */\n\n                _context.next = 5;\n                return fetch('http://localhost/get_data', {\n                  method: 'GET'\n                });\n\n              case 5:\n                response = _context.sent;\n                _context.next = 8;\n                return response.text();\n\n              case 8:\n                responseText = _context.sent;\n                measurements = JSON.parse(responseText).measurements;\n                measurementStrings = [];\n\n                if (measurements.length > 0) {\n                  measurement = measurements[0];\n                  alertMessage = \"Medici\\xF3n ID: \".concat(measurement.medition_id, \"\\nSensor ID: \").concat(measurement.sensor_id, \"\\nUbicaci\\xF3n: \").concat(measurement.ubication, \"\\nFecha: \").concat(measurement.date, \"\\nValor M\\xEDnimo: \").concat(measurement.min_value, \"\\nValor M\\xE1ximo: \").concat(measurement.max_value, \"\\nValor: \").concat(measurement.value);\n                  alert(alertMessage);\n                }\n\n                setData(measurements);\n                setIsLoading(false);\n                alert(\"Anduvo\");\n                _context.next = 22;\n                break;\n\n              case 17:\n                _context.prev = 17;\n                _context.t0 = _context[\"catch\"](0);\n                console.error('Error al obtener los datos:', _context.t0);\n                alert(_context.t0.message);\n                setIsLoading(false);\n\n              case 22:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 17]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Hay 0 datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n    children: data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n        children: item.name\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DataList, \"cUIHirocPIQDoBhSWLVYEdhEgBU=\");\n\n_c = DataList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTdERDs7R0FBTW5DOztLQUFBQTtBQStETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EYXRhTGlzdC5qcz83OWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBEYXRhTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBhbGVydCh0b2tlbik7XG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2dldF9kYXRhJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9nZXRfZGF0YScse1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRzID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpLm1lYXN1cmVtZW50cztcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRTdHJpbmdzID0gW107XG4gICAgICAgIGlmIChtZWFzdXJlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzWzBdO1xuICAgICAgICAgIGNvbnN0IGFsZXJ0TWVzc2FnZSA9IGBNZWRpY2nDs24gSUQ6ICR7bWVhc3VyZW1lbnQubWVkaXRpb25faWR9XFxuU2Vuc29yIElEOiAke21lYXN1cmVtZW50LnNlbnNvcl9pZH1cXG5VYmljYWNpw7NuOiAke21lYXN1cmVtZW50LnViaWNhdGlvbn1cXG5GZWNoYTogJHttZWFzdXJlbWVudC5kYXRlfVxcblZhbG9yIE3DrW5pbW86ICR7bWVhc3VyZW1lbnQubWluX3ZhbHVlfVxcblZhbG9yIE3DoXhpbW86ICR7bWVhc3VyZW1lbnQubWF4X3ZhbHVlfVxcblZhbG9yOiAke21lYXN1cmVtZW50LnZhbHVlfWA7XG4gICAgICAgICAgYWxlcnQoYWxlcnRNZXNzYWdlKVxuXG4gICAgICAgIH1cbiAgICAgICAgc2V0RGF0YShtZWFzdXJlbWVudHMpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBhbGVydChcIkFuZHV2b1wiKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsb3MgZGF0b3M6JywgZXJyb3IpO1xuICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+Q2FyZ2FuZG8uLi48L2Rpdj47XG4gIH1cblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5ObyBzZSBlbmNvbnRyYXJvbiBkYXRvcy48L2Rpdj47XG4gIH1cblxuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdj5IYXkgMCBkYXRvcy48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEYXRhTGlzdCIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsInJlc3BvbnNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsIm1lYXN1cmVtZW50cyIsIkpTT04iLCJwYXJzZSIsIm1lYXN1cmVtZW50U3RyaW5ncyIsImxlbmd0aCIsIm1lYXN1cmVtZW50IiwiYWxlcnRNZXNzYWdlIiwibWVkaXRpb25faWQiLCJzZW5zb3JfaWQiLCJ1YmljYXRpb24iLCJkYXRlIiwibWluX3ZhbHVlIiwibWF4X3ZhbHVlIiwidmFsdWUiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ })

});