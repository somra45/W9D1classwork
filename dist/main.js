/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: super() call outside constructor of a subclass (5:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| class Asteroid {\\n|     constructor() {\\n>         super();\\n|         this.MovingObject = new MovingObject()\\n|     };\");\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\r\n\r\nwindow.MovingObject = (0,_moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const canvas = document.getElementById(\"game-canvas\")\r\n    const context = canvas.getContext(\"2d\")\r\n\r\n    context.fillStyle = \"rgba(255,255,255)\"\r\n    context.fillrect(0, 0, canvas.width, canvas.height)\r\n}) \r\n\r\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovingObject)\n/* harmony export */ });\nclass MovingObject {\r\n    constructor(object) {\r\n        this.pos = object.pos;\r\n        this.vel = object.vel;\r\n        this.radius = object.radius;\r\n        this.color = object.color;\r\n    };\r\n\r\n    // draw(context) {\r\n    //     let asteroidPath = context.createPath();\r\n    //     context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)\r\n    //     context.fillStyle() = this.color\r\n    //     context.fill(asteroidPath)\r\n    // };\r\n\r\n    move () {\r\n\r\n    }\r\n\r\n    isCollidedWith (object) {\r\n\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/moving-object.js?");

/***/ })

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;