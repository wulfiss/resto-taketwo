/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contact = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('contact');

    const contact_div = document.createElement('div');
    contact_div.textContent = 'Just talk to me, please answer my stories in ig pleaaaaaseeee!!!';

    content_container.appendChild(contact_div);

    return content_container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('menu');

    const menu_div = document.createElement('div');
    menu_div.textContent = 'Here, you can find the best plata and food that you ever can find!!!!';

    content_container.appendChild(menu_div);

    return content_container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const welcome = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('welcome');

    const welcome_div = document.createElement('div');
    welcome_div.textContent = 'Welcome to the page of the Best Restaurant of the WORLD!!';

    content_container.appendChild(welcome_div);

    return content_container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ "./src/welcome.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




(function unChange(){

    const header = () => {
        const header_container = document.createElement('header');
        const header_title = document.createElement('h1');
        const header_subtitle = document.createElement('h3');

        header_title.textContent = 'Don Wulfis Resto';
        header_subtitle.textContent = 'The best food of the world!!!';

        header_container.appendChild(header_title);
        header_container.appendChild(header_subtitle);

        document.body.appendChild(header_container);
    }

    const nav = () => {
        const nav_container = document.createElement('nav');
        const nav_welcome = document.createElement('button');
        const nav_menu = document.createElement('button');
        const nav_contact = document.createElement('button');

        nav_welcome.classList.add('btnWelcome');
        nav_menu.classList.add('btnMenu');
        nav_contact.classList.add('btnContact');

        nav_welcome.textContent = 'Welcome';
        nav_menu.textContent = 'Menu';
        nav_contact.textContent = 'Contact';

        nav_container.appendChild(nav_welcome);
        nav_container.appendChild(nav_menu);
        nav_container.appendChild(nav_contact);
        
        document.body.appendChild(nav_container);
    }

    const footer = () =>{
        const footer_container = document.createElement('footer');

        document.body.appendChild(footer_container);
    }

    const main = () =>{
        const main_container = document.createElement('main');
        //const content_container = document.createElement('div');

        main_container.appendChild((0,_welcome__WEBPACK_IMPORTED_MODULE_0__["default"])());
        document.body.appendChild(main_container);
    
        let btn_container = document.querySelector('button');

        btn_container.addEventListener('click', (e) => {           
            if(e.target.getAttribute('class') == 'btnWelcome'){
                console.log('1');
            }else if(e.target.getAttribute('class') == 'btnMenu'){
                console.log('menu');
            }else if(e.target.getAttribute('class') == 'btnContact'){
                console.log('c');
            }
        });
    
    }

    console.log('0');
    header();
    nav();
    main();
    footer();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNidEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ2JuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7OztVQ2J0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDTjtBQUNNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvREFBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdF9kaXYudGV4dENvbnRlbnQgPSAnSnVzdCB0YWxrIHRvIG1lLCBwbGVhc2UgYW5zd2VyIG15IHN0b3JpZXMgaW4gaWcgcGxlYWFhYWFzZWVlZSEhISc7XHJcblxyXG4gICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdF9kaXYpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnRfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gICAgY29uc3QgbWVudV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVfZGl2LnRleHRDb250ZW50ID0gJ0hlcmUsIHlvdSBjYW4gZmluZCB0aGUgYmVzdCBwbGF0YSBhbmQgZm9vZCB0aGF0IHlvdSBldmVyIGNhbiBmaW5kISEhISc7XHJcblxyXG4gICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudV9kaXYpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiY29uc3Qgd2VsY29tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnRfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XHJcblxyXG4gICAgY29uc3Qgd2VsY29tZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdlbGNvbWVfZGl2LnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gdGhlIHBhZ2Ugb2YgdGhlIEJlc3QgUmVzdGF1cmFudCBvZiB0aGUgV09STEQhISc7XHJcblxyXG4gICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZV9kaXYpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VsY29tZSBmcm9tIFwiLi93ZWxjb21lXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxuKGZ1bmN0aW9uIHVuQ2hhbmdlKCl7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl9zdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgICAgIGhlYWRlcl90aXRsZS50ZXh0Q29udGVudCA9ICdEb24gV3VsZmlzIFJlc3RvJztcclxuICAgICAgICBoZWFkZXJfc3VidGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIGJlc3QgZm9vZCBvZiB0aGUgd29ybGQhISEnO1xyXG5cclxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcl90aXRsZSk7XHJcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJfc3VidGl0bGUpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcl9jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5hdiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAgICAgY29uc3QgbmF2X3dlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBuYXZfbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIG5hdl93ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ2J0bldlbGNvbWUnKTtcclxuICAgICAgICBuYXZfbWVudS5jbGFzc0xpc3QuYWRkKCdidG5NZW51Jyk7XHJcbiAgICAgICAgbmF2X2NvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYnRuQ29udGFjdCcpO1xyXG5cclxuICAgICAgICBuYXZfd2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lJztcclxuICAgICAgICBuYXZfbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgICAgICBuYXZfY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuXHJcbiAgICAgICAgbmF2X2NvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZfd2VsY29tZSk7XHJcbiAgICAgICAgbmF2X2NvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZfbWVudSk7XHJcbiAgICAgICAgbmF2X2NvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZfY29udGFjdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZfY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBmb290ZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyX2NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFpbiA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG1haW5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIC8vY29uc3QgY29udGVudF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSgpKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5fY29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBidG5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGJ0bl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAnYnRuV2VsY29tZScpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdidG5NZW51Jyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWVudScpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ2J0bkNvbnRhY3QnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCcwJyk7XHJcbiAgICBoZWFkZXIoKTtcclxuICAgIG5hdigpO1xyXG4gICAgbWFpbigpO1xyXG4gICAgZm9vdGVyKCk7XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9