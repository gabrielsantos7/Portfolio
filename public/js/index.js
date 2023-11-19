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

/***/ "./src/ts/dropdown.ts":
/*!****************************!*\
  !*** ./src/ts/dropdown.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction handleDropdownItemClick(item, index) {\n    const dropdownToggle = document.querySelector('.dropdown-toggle-split');\n    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');\n    const divs = document.querySelectorAll('.content > div');\n    dropdownItems.forEach((dropdownItem) => {\n        dropdownItem.classList.remove('active');\n    });\n    item.classList.add('active');\n    dropdownToggle.textContent = item.textContent;\n    divs.forEach((div, i) => {\n        if (i === index) {\n            div.classList.remove('d-none');\n            div.classList.add('d-flex');\n        }\n        else {\n            div.classList.add('d-none');\n            div.classList.remove('d-flex');\n        }\n    });\n}\nexports[\"default\"] = handleDropdownItemClick;\n\n\n//# sourceURL=webpack://portfolio/./src/ts/dropdown.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nav_1 = __importDefault(__webpack_require__(/*! ./nav */ \"./src/ts/nav.ts\"));\nconst dropdown_1 = __importDefault(__webpack_require__(/*! ./dropdown */ \"./src/ts/dropdown.ts\"));\nconst navItems = document.querySelectorAll('.nav.nav-tabs > .nav-item > .nav-link');\nconst dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');\nnavItems.forEach((navItem, index) => {\n    navItem.addEventListener('click', () => {\n        (0, nav_1.default)(navItem, index);\n    });\n});\ndropdownItems.forEach((item, index) => {\n    item.addEventListener('click', () => {\n        (0, dropdown_1.default)(item, index);\n    });\n});\n\n\n//# sourceURL=webpack://portfolio/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/nav.ts":
/*!***********************!*\
  !*** ./src/ts/nav.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction handleNavItemClick(navItem, index) {\n    const navItems = document.querySelectorAll('.nav.nav-tabs > .nav-item > .nav-link');\n    const divs = document.querySelectorAll('.content > div');\n    navItems.forEach((item) => {\n        item.classList.remove('active-option');\n    });\n    navItem.classList.add('active-option');\n    divs.forEach((div, i) => {\n        if (i === index) {\n            div.classList.remove('d-none');\n            div.classList.add('d-flex');\n        }\n        else {\n            div.classList.add('d-none');\n            div.classList.remove('d-flex');\n        }\n    });\n}\nexports[\"default\"] = handleNavItemClick;\n\n\n//# sourceURL=webpack://portfolio/./src/ts/nav.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;