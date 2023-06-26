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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\nclass Asteroid extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    static RADIUS = 20;\r\n    static COLOR = \"rgb(128,138,135)\";\r\n    constructor(pos) {\r\n        super(obj);\r\n        this.pos = pos\r\n        this.color = COLOR\r\n        this.radius = RADIUS\r\n        this.vel = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.scale)((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.randomVec)(length(30)), 2)\r\n        const obj = new Object({color: this.color, radius: this.radius, vel: this.vel, pos: this.pos});\r\n\r\n\r\n    };\r\n\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\r\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\nclass Game {\r\n    constructor(ship, asteroids, bullets, canvas) {\r\n        this.context = canvas.getContext('2d');\r\n        this.ship = ship;\r\n        this.asteroids = asteroids;\r\n        this.bullets = bullets;\r\n    };\r\n\r\n    step() {\r\n\r\n    };\r\n\r\n    move() {\r\n\r\n    };\r\n\r\n    checkCollision() {\r\n\r\n    };\r\n\r\n    draw(context) {\r\n\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\r\n\r\n\r\nwindow.MovingObject = _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const canvas = document.getElementById(\"game-canvas\")\r\n    const steroid = new _asteroid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [30,30]});\r\n})\r\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovingObject)\n/* harmony export */ });\nclass MovingObject {\r\n    constructor(object) {\r\n        this.pos = object.pos;\r\n        this.vel = object.vel;\r\n        this.radius = object.radius;\r\n        this.color = object.color;\r\n    };\r\n\r\n    draw(context) {\r\n        let asteroidPath = context.createPath();\r\n        context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)\r\n        context.fillStyle = this.color\r\n        context.fill(asteroidPath)\r\n    };\r\n\r\n    move () {\r\n\r\n    }\r\n\r\n    isCollidedWith (object) {\r\n\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/moving-object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomVec: () => (/* binding */ randomVec),\n/* harmony export */   scale: () => (/* binding */ scale)\n/* harmony export */ });\n\r\n\r\n\r\n\r\n\r\nfunction randomVec(length) {\r\n    const deg = 2 * Math.PI * Math.random();\r\n    return scale([Math.sin(deg), Math.cos(deg)], length);\r\n  }\r\n\r\n  // Scale the length of a vector by the given amount.\r\n  function scale(vec, m) {\r\n    return [vec[0] * m, vec[1] * m];\r\n  }\r\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/utils.js?");

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