/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js"
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/custom.scss */ \"./src/scss/custom.scss\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"./src/js/options.js\");\n/* harmony import */ var _snowflake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snowflake */ \"./src/js/snowflake.js\");\n\r\n\r\n\r\n\r\nfunction rand(min, max){\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n\r\n}\r\n\r\n\r\nfor(let i = 0; i < 100; i++){\r\n    let snowflake = new _snowflake__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n        _options__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fonts[rand(0, _options__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fonts.length-1)],\r\n        rand(0, _options__WEBPACK_IMPORTED_MODULE_1__[\"default\"].maxWidth - 100), \r\n        rand(0, _options__WEBPACK_IMPORTED_MODULE_1__[\"default\"].maxHeight),\r\n        _options__WEBPACK_IMPORTED_MODULE_1__[\"default\"].snowflakes[rand(0, _options__WEBPACK_IMPORTED_MODULE_1__[\"default\"].snowflakes - 1)]);\r\n    \r\n    //console.log(snowflakes);\r\n    snowflake.draw();\r\n    snowflake.move();\r\n}\n\n//# sourceURL=webpack://falling_snow/./src/js/index.js?\n}");

/***/ },

/***/ "./src/js/options.js"
/*!***************************!*\
  !*** ./src/js/options.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst options = {\r\n    fonts : [10, 13, 16, 18],\r\n    snowflakes: [\"&#10052\",\"&#10053\",\"&#10054\"],\r\n    speeds: [2, 5, 8, 10, 15, 20],\r\n    maxWidth: window.outerWidth,\r\n    maxHeight: window.outerHeight,\r\n    limit: 50\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (options);\n\n//# sourceURL=webpack://falling_snow/./src/js/options.js?\n}");

/***/ },

/***/ "./src/js/snowflake.js"
/*!*****************************!*\
  !*** ./src/js/snowflake.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ \"./src/js/options.js\");\n\r\n\r\nclass SnowFlake {\r\n  constructor(size, left, top, snowflake) {\r\n    this.size = size;\r\n    this.left = left;\r\n    this.top = top;\r\n    this.snowflake = snowflake;\r\n\r\n    this.element = document.createElement(\"span\");\r\n    this.element.innerHTML = snowflake;\r\n    this.element.classList.add(\"snowflake\");\r\n    this.element.style.fontSize = `${this.size}px`;\r\n    this.element.style.top = `${this.top}px`;\r\n    this.element.style.left = `${this.left}px`;\r\n  }\r\n\r\n  draw() {\r\n    document.body.append(this.element);\r\n    console.log(this.element);\r\n    document.body;\r\n  }\r\n\r\n  move(speed) {\r\n    let interval = setInterval(() => {\r\n      if (this.top <= _options__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxHeight) {\r\n        this.top += speed;\r\n        //console.log(this.top);\r\n        this.element.style.top = `${this.top}px`;\r\n      } else {\r\n        this.element.remove();\r\n        clearInterval(interval);\r\n      }\r\n    }, 500);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnowFlake);\r\n\n\n//# sourceURL=webpack://falling_snow/./src/js/snowflake.js?\n}");

/***/ },

/***/ "./src/scss/custom.scss"
/*!******************************!*\
  !*** ./src/scss/custom.scss ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://falling_snow/./src/scss/custom.scss?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;