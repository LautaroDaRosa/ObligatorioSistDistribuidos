"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/datapage";
exports.ids = ["pages/datapage"];
exports.modules = {

/***/ "./pages/DataList.js":
/*!***************************!*\
  !*** ./pages/DataList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\";\n\n\n\nconst DataList = () => {\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const fetchData = async () => {\n      try {\n        const token = localStorage.getItem('token');\n        alert(token);\n        /*\n        const response = await axios.get('http://localhost/get_data', {\n          headers: {\n            Authorization: `Bearer ${token}`\n          }\n        });\n        */\n\n        const response = await fetch('http://localhost/get_data', {\n          method: 'POST'\n        });\n        setData(response.data);\n        setIsLoading(false);\n      } catch (error) {\n        console.error('Error al obtener los datos:', error);\n        alert(error.message);\n        setIsLoading(false);\n      }\n    };\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"Hay 0 datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n    children: data.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n      children: item.name\n    }, item.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EYXRhTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUcsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJOLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNTSxTQUFTLEdBQUcsWUFBWTtBQUM1QixVQUFJO0FBQ0YsY0FBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBQyxRQUFBQSxLQUFLLENBQUNILEtBQUQsQ0FBTDtBQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNRLGNBQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsMkJBQUQsRUFBNkI7QUFDdkRDLFVBQUFBLE1BQU0sRUFBRTtBQUQrQyxTQUE3QixDQUE1QjtBQUdBVixRQUFBQSxPQUFPLENBQUNRLFFBQVEsQ0FBQ1QsSUFBVixDQUFQO0FBQ0FHLFFBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxPQWZELENBZUUsT0FBT1MsS0FBUCxFQUFjO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLDZCQUFkLEVBQTZDQSxLQUE3QztBQUNBSixRQUFBQSxLQUFLLENBQUNJLEtBQUssQ0FBQ0UsT0FBUCxDQUFMO0FBQ0FYLFFBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGLEtBckJEOztBQXVCQUMsSUFBQUEsU0FBUztBQUNWLEdBekJRLEVBeUJOLEVBekJNLENBQVQ7O0FBMkJBLE1BQUlGLFNBQUosRUFBZTtBQUNiLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRixJQUFMLEVBQVc7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELE1BQUlBLElBQUksQ0FBQ2UsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsY0FDR2YsSUFBSSxDQUFDZ0IsR0FBTCxDQUFTQyxJQUFJLGlCQUNaO0FBQUEsZ0JBQW1CQSxJQUFJLENBQUNDO0FBQXhCLE9BQVNELElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FsREQ7O0FBb0RBLGlFQUFlcEIsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21pLWFwbGljYWNpb24tbmV4dGpzLy4vcGFnZXMvRGF0YUxpc3QuanM/NzllNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRGF0YUxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgYWxlcnQodG9rZW4pO1xuICAgICAgICAvKlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9nZXRfZGF0YScsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvZ2V0X2RhdGEnLHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBvYnRlbmVyIGxvcyBkYXRvczonLCBlcnJvcik7XG4gICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2Pk5vIHNlIGVuY29udHJhcm9uIGRhdG9zLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2PkhheSAwIGRhdG9zLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YUxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhdGFMaXN0IiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmZXRjaERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbGVydCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ }),

/***/ "./pages/datapage/index.jsx":
/*!**********************************!*\
  !*** ./pages/datapage/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DataList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataList.js */ \"./pages/DataList.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/datapage/index.jsx\";\n\n\n\nconst DataListPage = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DataList_js__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataListPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXRhcGFnZS9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRQSxpRUFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21pLWFwbGljYWNpb24tbmV4dGpzLy4vcGFnZXMvZGF0YXBhZ2UvaW5kZXguanN4Pzc2NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFMaXN0IGZyb20gJy4uL0RhdGFMaXN0LmpzJztcblxuY29uc3QgRGF0YUxpc3RQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RGF0YUxpc3QgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0UGFnZTtcbiJdLCJuYW1lcyI6WyJEYXRhTGlzdCIsIkRhdGFMaXN0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/datapage/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/datapage/index.jsx"));
module.exports = __webpack_exports__;

})();