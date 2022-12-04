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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\r\n    const content_container = document.createElement('div');\r\n    content_container.classList.add('contact');\r\n\r\n    const contact_div = document.createElement('div');\r\n    contact_div.textContent = 'Just talk to me, please answer my stories in ig pleaaaaaseeee!!!';\r\n\r\n    content_container.appendChild(contact_div);\r\n\r\n    return content_container;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://resto-taketwo/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ \"./src/welcome.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n(function unChange(){\r\n\r\n    const header = () => {\r\n        const header_container = document.createElement('header');\r\n        const header_title = document.createElement('h1');\r\n        const header_subtitle = document.createElement('h3');\r\n\r\n        header_title.textContent = 'Don Wulfis Resto';\r\n        header_subtitle.textContent = 'The best food of the world!!!';\r\n\r\n        header_container.appendChild(header_title);\r\n        header_container.appendChild(header_subtitle);\r\n\r\n        document.body.appendChild(header_container);\r\n    }\r\n\r\n    const nav = () => {\r\n        const nav_container = document.createElement('nav');\r\n        const nav_welcome = document.createElement('button');\r\n        const nav_menu = document.createElement('button');\r\n        const nav_contact = document.createElement('button');\r\n\r\n        nav_welcome.classList.add('btnWelcome');\r\n        nav_menu.classList.add('btnMenu');\r\n        nav_contact.classList.add('btnContact');\r\n\r\n        nav_welcome.textContent = 'Welcome';\r\n        nav_menu.textContent = 'Menu';\r\n        nav_contact.textContent = 'Contact';\r\n\r\n        nav_container.appendChild(nav_welcome);\r\n        nav_container.appendChild(nav_menu);\r\n        nav_container.appendChild(nav_contact);\r\n        \r\n        document.body.appendChild(nav_container);\r\n    }\r\n\r\n    const footer = () =>{\r\n        const footer_container = document.createElement('footer');\r\n\r\n        document.body.appendChild(footer_container);\r\n    }\r\n\r\n    const main = () =>{\r\n        const main_container = document.createElement('main');\r\n        //const content_container = document.createElement('div');\r\n\r\n        main_container.appendChild((0,_welcome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n        \r\n    \r\n        const btn_container =  document.querySelector('button');\r\n\r\n        btn_container.addEventListener('click', (e) => {\r\n            if(e.target.getAttribute('class') == 'btnWelcome'){\r\n                main_container.appendChild((0,_welcome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            }else if(e.target.getAttribute('class') == 'btnMenu'){\r\n                main_container.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            }else if((e.target.getAttribute('class') == 'btnContact')){\r\n                main_container.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n            }\r\n        })\r\n    \r\n        document.body.appendChild(main_container);\r\n\r\n    }\r\n\r\n    header();\r\n    nav();\r\n    main();\r\n    footer();\r\n})();\n\n//# sourceURL=webpack://resto-taketwo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const content_container = document.createElement('div');\r\n    content_container.classList.add('menu');\r\n\r\n    const menu_div = document.createElement('div');\r\n    menu_div.textContent = 'Here, you can find the best plata and food that you ever can find!!!!';\r\n\r\n    content_container.appendChild(menu_div);\r\n\r\n    return content_container;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://resto-taketwo/./src/menu.js?");

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst welcome = () => {\r\n    const content_container = document.createElement('div');\r\n    content_container.classList.add('welcome');\r\n\r\n    const welcome_div = document.createElement('div');\r\n    welcome_div.textContent = 'Welcome to the page of the Best Restaurant of the WORLD!!';\r\n\r\n    content_container.appendChild(welcome_div);\r\n\r\n    return content_container;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);\n\n//# sourceURL=webpack://resto-taketwo/./src/welcome.js?");

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