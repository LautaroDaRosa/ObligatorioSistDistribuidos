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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar DataList = function DataList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var token, response, _data, dataList, alertMessage;\n\n        return _Users_nicolasvelazquez_Documents_GitHub_ObligatorioSistDistribuidos_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                token = localStorage.getItem('token');\n                alert(token);\n                /*\n                const response = await axios.get('http://localhost/get_data', {\n                  headers: {\n                    Authorization: `Bearer ${token}`\n                  }\n                });\n                */\n\n                _context.next = 5;\n                return fetch('http://localhost/get_data', {\n                  method: 'GET'\n                });\n\n              case 5:\n                response = _context.sent;\n                _context.next = 8;\n                return response.json();\n\n              case 8:\n                _data = _context.sent;\n                dataList = JSON.parse(_data[0]);\n                alertMessage = JSON.stringify(dataList);\n                alert(alertMessage);\n                setData(response.data);\n                setIsLoading(false);\n                alert(\"Anduvo\");\n                _context.next = 22;\n                break;\n\n              case 17:\n                _context.prev = 17;\n                _context.t0 = _context[\"catch\"](0);\n                console.error('Error al obtener los datos:', _context.t0);\n                alert(_context.t0.message);\n                setIsLoading(false);\n\n              case 22:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 17]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Hay 0 datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n    children: data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n        children: item.name\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DataList, \"cUIHirocPIQDoBhSWLVYEdhEgBU=\");\n\n_c = DataList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EYXRhTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsa0JBQXdCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPRyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NKLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9LLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUFMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1NLFNBQVM7QUFBQSwrV0FBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUkMsZ0JBQUFBLEtBRlEsR0FFQUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBRkE7QUFHZEMsZ0JBQUFBLEtBQUssQ0FBQ0gsS0FBRCxDQUFMO0FBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVnNCO0FBQUEsdUJBV1NJLEtBQUssQ0FBQywyQkFBRCxFQUE2QjtBQUN2REMsa0JBQUFBLE1BQU0sRUFBRTtBQUQrQyxpQkFBN0IsQ0FYZDs7QUFBQTtBQVdSQyxnQkFBQUEsUUFYUTtBQUFBO0FBQUEsdUJBZUtBLFFBQVEsQ0FBQ0MsSUFBVCxFQWZMOztBQUFBO0FBZVJaLGdCQUFBQSxLQWZRO0FBZ0JSYSxnQkFBQUEsUUFoQlEsR0FnQkdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXZixLQUFJLENBQUMsQ0FBRCxDQUFmLENBaEJIO0FBaUJSZ0IsZ0JBQUFBLFlBakJRLEdBaUJPRixJQUFJLENBQUNHLFNBQUwsQ0FBZUosUUFBZixDQWpCUDtBQWtCZEwsZ0JBQUFBLEtBQUssQ0FBQ1EsWUFBRCxDQUFMO0FBQ0FmLGdCQUFBQSxPQUFPLENBQUNVLFFBQVEsQ0FBQ1gsSUFBVixDQUFQO0FBQ0FHLGdCQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FLLGdCQUFBQSxLQUFLLENBQUMsUUFBRCxDQUFMO0FBckJjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBdUJkVSxnQkFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsNkJBQWQ7QUFDQVgsZ0JBQUFBLEtBQUssQ0FBQyxZQUFNWSxPQUFQLENBQUw7QUFDQWpCLGdCQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaOztBQXpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUQyxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBNkJBQSxJQUFBQSxTQUFTO0FBQ1YsR0EvQlEsRUErQk4sRUEvQk0sQ0FBVDs7QUFpQ0EsTUFBSUYsU0FBSixFQUFlO0FBQ2Isd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELE1BQUlBLElBQUksQ0FBQ3FCLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsY0FDR3JCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsMEJBQ1o7QUFBQSxrQkFBbUJBLElBQUksQ0FBQ0M7QUFBeEIsU0FBU0QsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXhERDs7R0FBTTFCOztLQUFBQTtBQTBETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EYXRhTGlzdC5qcz83OWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBEYXRhTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBhbGVydCh0b2tlbik7XG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2dldF9kYXRhJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9nZXRfZGF0YScse1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gSlNPTi5wYXJzZShkYXRhWzBdKTtcbiAgICAgICAgY29uc3QgYWxlcnRNZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZGF0YUxpc3QpO1xuICAgICAgICBhbGVydChhbGVydE1lc3NhZ2UpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBhbGVydChcIkFuZHV2b1wiKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgb2J0ZW5lciBsb3MgZGF0b3M6JywgZXJyb3IpO1xuICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+Q2FyZ2FuZG8uLi48L2Rpdj47XG4gIH1cblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5ObyBzZSBlbmNvbnRyYXJvbiBkYXRvcy48L2Rpdj47XG4gIH1cblxuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdj5IYXkgMCBkYXRvcy48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEYXRhTGlzdCIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsImRhdGFMaXN0IiwiSlNPTiIsInBhcnNlIiwiYWxlcnRNZXNzYWdlIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ })

});