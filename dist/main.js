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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(function unChange(){\r\n\r\n    const header = () => {\r\n        const header_container = document.createElement('header');\r\n        const header_title = document.createElement('h1');\r\n        const header_subtitle = document.createElement('h3');\r\n\r\n        header_title.textContent = 'Don Wulfis Resto';\r\n        header_subtitle.textContent = 'The best food of the world!!!';\r\n\r\n        header_container.appendChild(header_title);\r\n        header_container.appendChild(header_subtitle);\r\n\r\n        document.body.appendChild(header_container);\r\n    }\r\n\r\n    const nav = () => {\r\n        const nav_container = document.createElement('nav');\r\n        const nav_welcome = document.createElement('button');\r\n        const nav_menu = document.createElement('button');\r\n        const nav_contact = document.createElement('button');\r\n\r\n        nav_welcome.classList.add('btnWelcome');\r\n        nav_menu.classList.add('btnMenu');\r\n        nav_contact.classList.add('btnContact');\r\n\r\n        nav_welcome.textContent = 'Welcome';\r\n        nav_menu.textContent = 'Menu';\r\n        nav_contact.textContent = 'Contact';\r\n\r\n        nav_container.appendChild(nav_welcome);\r\n        nav_container.appendChild(nav_menu);\r\n        nav_container.appendChild(nav_contact);\r\n        \r\n        document.body.appendChild(nav_container);\r\n    }\r\n\r\n    const main = () =>{\r\n        const main_container = document.createElement('main');\r\n        const content_container = document.createElement('div');\r\n\r\n        main_container.appendChild(content_container);\r\n        document.body.appendChild(main_container);\r\n    }\r\n\r\n    const footer = () =>{\r\n        const footer_container = document.createElement('footer');\r\n\r\n        document.body.appendChild(footer_container);\r\n    }\r\n\r\n    header();\r\n    nav();\r\n    main();\r\n    footer();\r\n})();\n\n//# sourceURL=webpack://resto-taketwo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;