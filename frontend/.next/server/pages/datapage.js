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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/DataList.js\";\n\n\n\n\nconst DataList = () => {\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const fetchData = async () => {\n      try {\n        const token = localStorage.getItem('token');\n        const response = await fetch('http://localhost/get_data', {\n          headers: {\n            Authorization: `Bearer ${token}`\n          }\n        });\n        const responseData = await response.json();\n        const measurements = responseData.measurements;\n        const measurementStrings = measurements.map(measurement => {\n          return `Medición ID: ${measurement.medition_id}\\nSensor ID: ${measurement.sensor_id}\\nUbicación: ${measurement.ubication}\\nFecha: ${measurement.date}\\nValor Mínimo: ${measurement.min_value}\\nValor Máximo: ${measurement.max_value}\\nValor: ${measurement.value}`;\n        });\n        setData(measurementStrings);\n        setIsLoading(false);\n      } catch (error) {\n        alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');\n        router.push({\n          pathname: '/login'\n        });\n        console.error('Error al obtener los datos:', error);\n        setIsLoading(false);\n      }\n    };\n\n    fetchData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  if (data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"No se encontraron datos.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n    children: data.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n      children: item\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EYXRhTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1JLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkwsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCUCwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFDQSxRQUFNUSxNQUFNLEdBQUdOLHNEQUFTLEVBQXhCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1RLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFVBQUk7QUFDRixjQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0EsY0FBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQywyQkFBRCxFQUE4QjtBQUN4REMsVUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFlBQUFBLGFBQWEsRUFBRyxVQUFTTixLQUFNO0FBRHhCO0FBRCtDLFNBQTlCLENBQTVCO0FBTUEsY0FBTU8sWUFBWSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBVCxFQUEzQjtBQUNBLGNBQU1DLFlBQVksR0FBR0YsWUFBWSxDQUFDRSxZQUFsQztBQUNBLGNBQU1DLGtCQUFrQixHQUFHRCxZQUFZLENBQUNFLEdBQWIsQ0FBaUJDLFdBQVcsSUFBSTtBQUN6RCxpQkFBUSxnQkFBZUEsV0FBVyxDQUFDQyxXQUFZLGdCQUFlRCxXQUFXLENBQUNFLFNBQVUsZ0JBQWVGLFdBQVcsQ0FBQ0csU0FBVSxZQUFXSCxXQUFXLENBQUNJLElBQUssbUJBQWtCSixXQUFXLENBQUNLLFNBQVUsbUJBQWtCTCxXQUFXLENBQUNNLFNBQVUsWUFBV04sV0FBVyxDQUFDTyxLQUFNLEVBQWxRO0FBQ0QsU0FGMEIsQ0FBM0I7QUFJQXhCLFFBQUFBLE9BQU8sQ0FBQ2Usa0JBQUQsQ0FBUDtBQUNBYixRQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsT0FoQkQsQ0FnQkUsT0FBT3VCLEtBQVAsRUFBYztBQUNaQyxRQUFBQSxLQUFLLENBQUMsNERBQUQsQ0FBTDtBQUNBdkIsUUFBQUEsTUFBTSxDQUFDd0IsSUFBUCxDQUNFO0FBQ0VDLFVBQUFBLFFBQVEsRUFBRTtBQURaLFNBREY7QUFLRkMsUUFBQUEsT0FBTyxDQUFDSixLQUFSLENBQWMsNkJBQWQsRUFBNkNBLEtBQTdDO0FBQ0F2QixRQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7QUFDRixLQTNCRDs7QUE2QkFFLElBQUFBLFNBQVM7QUFDVixHQS9CUSxFQStCTixFQS9CTSxDQUFUOztBQWlDQSxNQUFJSCxTQUFKLEVBQWU7QUFDYix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELE1BQUlGLElBQUksQ0FBQytCLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0cvQixJQUFJLENBQUNpQixHQUFMLENBQVMsQ0FBQ2UsSUFBRCxFQUFPQyxLQUFQLGtCQUNSO0FBQUEsZ0JBQWlCRDtBQUFqQixPQUFTQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQXJERDs7QUF1REEsaUVBQWVsQyxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWktYXBsaWNhY2lvbi1uZXh0anMvLi9wYWdlcy9EYXRhTGlzdC5qcz83OWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBEYXRhTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9nZXRfZGF0YScsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudHMgPSByZXNwb25zZURhdGEubWVhc3VyZW1lbnRzO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudFN0cmluZ3MgPSBtZWFzdXJlbWVudHMubWFwKG1lYXN1cmVtZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gYE1lZGljacOzbiBJRDogJHttZWFzdXJlbWVudC5tZWRpdGlvbl9pZH1cXG5TZW5zb3IgSUQ6ICR7bWVhc3VyZW1lbnQuc2Vuc29yX2lkfVxcblViaWNhY2nDs246ICR7bWVhc3VyZW1lbnQudWJpY2F0aW9ufVxcbkZlY2hhOiAke21lYXN1cmVtZW50LmRhdGV9XFxuVmFsb3IgTcOtbmltbzogJHttZWFzdXJlbWVudC5taW5fdmFsdWV9XFxuVmFsb3IgTcOheGltbzogJHttZWFzdXJlbWVudC5tYXhfdmFsdWV9XFxuVmFsb3I6ICR7bWVhc3VyZW1lbnQudmFsdWV9YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0RGF0YShtZWFzdXJlbWVudFN0cmluZ3MpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBhbGVydCgnQWNjZXNvIG5vIGF1dG9yaXphZG8uIFBvciBmYXZvciwgaW5pY2llIHNlc2nDs24gbnVldmFtZW50ZS4nKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbG9naW4nLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIG9idGVuZXIgbG9zIGRhdG9zOicsIGVycm9yKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+Q2FyZ2FuZG8uLi48L2Rpdj47XG4gIH1cblxuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdj5ObyBzZSBlbmNvbnRyYXJvbiBkYXRvcy48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YUxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkRhdGFMaXN0IiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJmZXRjaERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZURhdGEiLCJqc29uIiwibWVhc3VyZW1lbnRzIiwibWVhc3VyZW1lbnRTdHJpbmdzIiwibWFwIiwibWVhc3VyZW1lbnQiLCJtZWRpdGlvbl9pZCIsInNlbnNvcl9pZCIsInViaWNhdGlvbiIsImRhdGUiLCJtaW5fdmFsdWUiLCJtYXhfdmFsdWUiLCJ2YWx1ZSIsImVycm9yIiwiYWxlcnQiLCJwdXNoIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibGVuZ3RoIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DataList.js\n");

/***/ }),

/***/ "./pages/datapage/index.jsx":
/*!**********************************!*\
  !*** ./pages/datapage/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DataList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataList.js */ \"./pages/DataList.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nicolasvelazquez/Documents/GitHub/ObligatorioSistDistribuidos/frontend/pages/datapage/index.jsx\";\n\n\n\nconst DataListPage = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DataList_js__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataListPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXRhcGFnZS9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRQSxpRUFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21pLWFwbGljYWNpb24tbmV4dGpzLy4vcGFnZXMvZGF0YXBhZ2UvaW5kZXguanN4Pzc2NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFMaXN0IGZyb20gJy4uL0RhdGFMaXN0LmpzJztcblxuY29uc3QgRGF0YUxpc3RQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RGF0YUxpc3QgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0UGFnZTtcbiJdLCJuYW1lcyI6WyJEYXRhTGlzdCIsIkRhdGFMaXN0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/datapage/index.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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