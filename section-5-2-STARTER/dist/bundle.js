/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pizza__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza */ \"./pizza.js\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n// Webpack is a static module bundler for JavaScript applications\r\n// it takes all the code from your application and makes it usable in a web browser.\r\n// Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images,\r\n// and the CSS styles which are packaged to be easily used in your website.\r\n// Webpack separates the code based on how it is used in your app\r\n// https://webpack.js.org/\r\n\r\n\r\n//normally can't import files like below wtih regular js, but webpack allows us to\r\n\r\n\r\n_pizza__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pepperoni();\r\n_pizza__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bacon();\r\n\r\n// npm init -y creates a package.json file\r\n// all below should now be added to package.json under devDependencies after running these commands\r\n// npm install webpack webpack-cli --save-dev installs webpack\r\n// npm install --save-dev @babel/core @babel/preset-env babel-loader installs babel and the preset we need\r\n// npm install node-sass sass-loader css-loader --save-dev saves all the things needed for sass\r\n// npm install style-loader --save-dev loads the css dynamically\r\n// npm install postcss-loader --save-dev postcss lets us use javascript to make changes to css\r\n// npm install autoprefixer --save-dev is a postcss plugin that scans css properties for missing vendors\r\n\n\n//# sourceURL=webpack://section-5-2-starter/./index.js?");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://section-5-2-starter/./main.scss?");

/***/ }),

/***/ "./pizza.js":
/*!******************!*\
  !*** ./pizza.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  pepperoni: function() {\r\n    console.log('Pepperoni topping added!')\r\n  },\r\n  bacon: function() {\r\n    console.log('Bacon topping added!')\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://section-5-2-starter/./pizza.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;