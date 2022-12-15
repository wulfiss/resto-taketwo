/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts//Commissioner-Regular.ttf */ "./src/fonts/Commissioner-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts//Commissioner-SemiBold.ttf */ "./src/fonts/Commissioner-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"commissioner-regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"commissioner-semibold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 120px 35px auto 30px;\n  color: #191919;\n  background-color: #ffaa51;\n  gap: 2px;\n  justify-items: center;\n}\n\nheader {\n  display: grid;\n  width: 100%;\n  height: 120px;\n  padding: 10px;\n  justify-items: center;\n  align-content: center;\n  background-color: #ffaa51;\n  font-family: \"commissioner-semibold\";\n}\nheader h2 {\n  height: 60px;\n  font-family: \"commissioner-semibold\";\n  font-size: 30px;\n  padding: 10px;\n}\nheader p {\n  font-family: \"commissioner-regular\";\n  height: 30px;\n  font-size: 24px;\n  padding: 5px;\n}\n\nnav {\n  width: 100%;\n  height: 35px;\n  display: grid;\n  grid-template-columns: repeat(3, 100px);\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  background-color: #ff785a;\n}\nnav button {\n  font-family: \"commissioner-semibold\";\n  height: 27px;\n  border: none;\n  border-radius: 10px;\n}\nnav button:hover {\n  border: 2px solid #191919;\n}\nnav button:active {\n  transform: translatey(2px);\n}\n\ndiv.welcome {\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  width: 100%;\n  justify-items: center;\n  align-items: center;\n}\ndiv.welcome img.welcomeImg {\n  width: 350px;\n  height: 340px;\n  border-radius: 50%;\n}\ndiv.welcome p {\n  font-family: \"commissioner-regular\";\n  text-align: center;\n  width: 70%;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100%;\n  background-color: #ff785a;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-family: \"commissioner-semibold\";\n}\n\ndiv.menu {\n  height: auto;\n  width: 70vw;\n  max-width: 720px;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  padding: 10px;\n  margin: 10px;\n}\n\ndiv.menuList h1 {\n  font-family: \"commissioner-semibold\";\n  font-size: 21px;\n  text-align: center;\n}\ndiv.menuList p {\n  font-family: \"commissioner-regular\";\n  font-size: 16px;\n  margin: 3px;\n}\n\nimg.menuImg {\n  height: 200px;\n  width: auto;\n}\n\n@media (max-width: 480px) {\n  div.menu {\n    grid-template-columns: 1fr;\n  }\n  body {\n    grid-template-rows: 80px 35px auto 30px;\n  }\n  header {\n    height: 70px;\n    padding: 7px;\n  }\n  header h2 {\n    height: 40px;\n    font-family: \"commissioner-semibold\";\n    font-size: 28px;\n    padding: 10px;\n  }\n  header p {\n    font-family: \"commissioner-regular\";\n    height: 20px;\n    font-size: 18px;\n    padding: 5px;\n  }\n  div.welcome {\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n  }\n  div.welcome img.welcomeImg {\n    width: 230px;\n    height: 230px;\n  }\n  div.welcome p {\n    text-align: center;\n    width: 80%;\n    font-size: 16px;\n    padding: 5px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAOA;EACI,mCAAA;EACA,4CAAA;EACA,gBAAA;AANJ;AASA;EACI,oCAAA;EACA,4CAAA;EACA,gBAAA;AAPJ;AAUA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AARJ;;AAWA;EACI,aAAA;EACA,wCAAA;EACA,cA1BS;EA2BT,yBA5BQ;EA6BR,QAAA;EACA,qBAAA;AARJ;;AAWA;EACI,aAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,yBAxCQ;EAyCR,oCAAA;AARJ;AAUI;EACI,YAAA;EACA,oCAAA;EACA,eAAA;EACA,aAAA;AARR;AAWI;EACI,mCAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AATR;;AAaA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,uBAAA;EACA,QAAA;EACA,yBApEQ;AA0DZ;AAYI;EACI,oCAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AAVR;AAYQ;EACI,yBAAA;AAVZ;AAaQ;EACI,0BAAA;AAXZ;;AAiBA;EACI,aAAA;EACA,2BAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;AAdJ;AAiBI;EACI,YAAA;EACA,aAAA;EACA,kBAAA;AAfR;AAkBI;EACI,mCAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;AAhBR;;AAqBA;EACI,WAAA;EACA,yBAhHQ;EAiHR,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;AAlBJ;;AAqBA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;AAlBJ;;AAuBI;EACI,oCAAA;EACA,eAAA;EACA,kBAAA;AApBR;AAuBI;EACI,mCAAA;EACA,eAAA;EACA,WAAA;AArBR;;AA0BA;EACI,aAAA;EACA,WAAA;AAvBJ;;AA6BA;EACI;IACI,0BAAA;EA1BN;EA6BE;IACI,uCAAA;EA3BN;EA8BE;IACI,YAAA;IACA,YAAA;EA5BN;EA8BM;IACI,YAAA;IACA,oCAAA;IACA,eAAA;IACA,aAAA;EA5BV;EA+BM;IACI,mCAAA;IACA,YAAA;IACA,eAAA;IACA,YAAA;EA7BV;EAiCE;IACI,2BAAA;IACA,uBAAA;IACA,qBAAA;IACA,mBAAA;EA/BN;EAiCM;IACI,YAAA;IACA,aAAA;EA/BV;EAkCM;IACI,kBAAA;IACA,UAAA;IACA,eAAA;IACA,YAAA;EAhCV;AACF","sourcesContent":["$color-900: #ff785a;\r\n$color-800: #ffd25a;\r\n$color-700: #ffaa51;\r\n$text-color: #191919;\r\n\r\n$commissioner-font-path: \"../fonts/\";\r\n\r\n@font-face {\r\n    font-family: \"commissioner-regular\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-Regular.ttf\");\r\n    font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"commissioner-semibold\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-SemiBold.ttf\");\r\n    font-weight: 600;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    display: grid;\r\n    grid-template-rows: 120px 35px auto 30px;\r\n    color: $text-color;\r\n    background-color: $color-700;\r\n    gap: 2px;\r\n    justify-items: center;\r\n}\r\n\r\nheader{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 120px;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-content: center;\r\n    background-color: $color-700;\r\n    font-family: 'commissioner-semibold';\r\n\r\n    h2{\r\n        height: 60px;\r\n        font-family:'commissioner-semibold';\r\n        font-size: 30px;\r\n        padding: 10px;\r\n    }\r\n    \r\n    p{  \r\n        font-family: 'commissioner-regular';\r\n        height: 30px;\r\n        font-size: 24px;\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\nnav{\r\n    width: 100%;\r\n    height: 35px;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 100px);\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n    background-color: $color-900;\r\n\r\n    button{\r\n        font-family: 'commissioner-semibold';\r\n        height: 27px;\r\n        border: none;\r\n        border-radius: 10px;\r\n\r\n        &:hover{\r\n            border: 2px solid #191919;\r\n        }\r\n\r\n        &:active{\r\n            transform: translatey(2px);\r\n        }\r\n    }\r\n}\r\n\r\n\r\ndiv.welcome{\r\n    display: grid;\r\n    grid-template-rows: 2fr 1fr;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n\r\n\r\n    img.welcomeImg{\r\n        width: 350px;\r\n        height: 340px;\r\n        border-radius: 50%;\r\n    }\r\n\r\n    p{\r\n        font-family: 'commissioner-regular';\r\n        text-align: center;\r\n        width: 70%;\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n\r\nfooter{\r\n    width: 100%;\r\n    background-color: $color-900;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'commissioner-semibold';\r\n}\r\n\r\ndiv.menu{\r\n    height: auto;\r\n    width: 70vw;\r\n    max-width: 720px; //its the sum of gap, padding, margin, and width of the div.menulist\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\ndiv.menuList{\r\n\r\n    h1{\r\n        font-family: 'commissioner-semibold';\r\n        font-size: 21px;\r\n        text-align: center;\r\n    }\r\n\r\n    p{\r\n        font-family: 'commissioner-regular';\r\n        font-size: 16px;\r\n        margin: 3px;\r\n    }\r\n    \r\n}\r\n\r\nimg.menuImg{\r\n    height: 200px;\r\n    width: auto;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n    div.menu{\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    body{\r\n        grid-template-rows: 80px 35px auto 30px;\r\n    }\r\n\r\n    header{\r\n        height: 70px;\r\n        padding: 7px;\r\n    \r\n        h2{\r\n            height: 40px;\r\n            font-family:'commissioner-semibold';\r\n            font-size: 28px;\r\n            padding: 10px;\r\n        }\r\n        \r\n        p{  \r\n            font-family: 'commissioner-regular';\r\n            height: 20px;\r\n            font-size: 18px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n    div.welcome{\r\n        grid-template-rows: 1fr 1fr;\r\n        justify-content: center;   \r\n        justify-items: center;\r\n        align-items: center;\r\n    \r\n        img.welcomeImg{\r\n            width: 230px;\r\n            height: 230px;\r\n        }\r\n    \r\n        p{\r\n            text-align: center;\r\n            width: 80%;\r\n            font-size: 16px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
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

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menulist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menulist */ "./src/js/menulist.js");


const menu = () => {
    const content_container = document.createElement('div');
    
    content_container.classList.add('menu');

    for(let i = 0; i < _menulist__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++){

        const menu_div = document.createElement('div');
        const name_food = document.createElement('h1');
        const description_food = document.createElement('p');
        const price_food = document.createElement('p');

        const food_img = document.createElement('img');
        food_img.setAttribute('src', `./img/${_menulist__WEBPACK_IMPORTED_MODULE_0__["default"][i]['img']}`);
        food_img.classList.add('menuImg');

        name_food.textContent = _menulist__WEBPACK_IMPORTED_MODULE_0__["default"][i]['name'];
        description_food.innerHTML =  '<strong>Ingredients: </strong>' + _menulist__WEBPACK_IMPORTED_MODULE_0__["default"][i]['ingredients'];
        price_food.innerHTML = '<strong>Price:</strong> $' + _menulist__WEBPACK_IMPORTED_MODULE_0__["default"][i]['price'];

        menu_div.appendChild(food_img);
        menu_div.appendChild(name_food);
        menu_div.appendChild(description_food);
        menu_div.appendChild(price_food);

        menu_div.classList.add('menuList');
        content_container.appendChild(menu_div);
    }

    return content_container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/menulist.js":
/*!****************************!*\
  !*** ./src/js/menulist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

let food = [
    {name: 'Food1', ingredients: 'ing1, ing2', price: '123.32', img: 'foodone.jpg'},
    {name: 'Food2', ingredients: 'ing3, ing4', price: '234.54', img: 'foodtwo.jpg'},
    {name: 'Food3', ingredients: 'ing5, ing6', price: '231.23', img: 'foodthree.jpg'},
    {name: 'Food4', ingredients: 'ing7, ing8', price: '231.23', img: 'foodthree.jpg'},
    {name: 'Food5', ingredients: 'ing5, ing6', price: '231.23', img: 'foodthree.jpg'},
    {name: 'Food6', ingredients: 'ing7, ing8', price: '231.23', img: 'foodthree.jpg'},
    {name: 'Food7', ingredients: 'ing5, ing6', price: '231.23', img: 'foodthree.jpg'},
    {name: 'Food8', ingredients: 'ing7, ing8', price: '231.23', img: 'foodthree.jpg'}
]


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (food);

/***/ }),

/***/ "./src/js/welcome.js":
/*!***************************!*\
  !*** ./src/js/welcome.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const welcome = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('welcome');

    const portal_img = document.createElement('img');
    portal_img.setAttribute('src', './img/welcome.jpg');
    portal_img.setAttribute('alt', 'Two people cooking')
    portal_img.classList.add('welcomeImg');


    const welcome_div = document.createElement('div');
    const p_welcome_mgs = document.createElement('p');
    p_welcome_mgs.textContent ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac libero semper, volutpat tortor id, aliquet lacus. Praesent elementum convallis lorem id interdum. Praesent vitae purus augue. Fusce efficitur odio sit amet est cursus, quis finibus dolor malesuada. Pellentesque id eros rhoncus ipsum laoreet dapibus sit amet sit amet neque.';
    
    content_container.appendChild(portal_img);
    content_container.appendChild(p_welcome_mgs);

    return content_container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);

/***/ }),

/***/ "./src/fonts/Commissioner-Regular.ttf":
/*!********************************************!*\
  !*** ./src/fonts/Commissioner-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Commissioner-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Commissioner-SemiBold.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Commissioner-SemiBold.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Commissioner-SemiBold.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _js_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/welcome */ "./src/js/welcome.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contact */ "./src/js/contact.js");





(function unChange(){

    console.log('0');
    const header = () => {
        const header_container = document.createElement('header');
        const header_title = document.createElement('h2');
        const header_subtitle = document.createElement('p');

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

    const main = () =>{
        const main_container = document.createElement('main');
        //main_container.appendChild(welcome());
        main_container.appendChild((0,_js_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());

        document.body.appendChild(main_container);        
    }

    const footer = () =>{
        const footer_container = document.createElement('footer');
        footer_container.textContent = "Copyright stuff"

        document.body.appendChild(footer_container);
    }

    const btnNav = () =>{
        let nav_container = document.querySelector('nav');
        let main_container = document.querySelector('main');

        nav_container.addEventListener('click', (e) => {           
            if(e.target.getAttribute('class') == 'btnWelcome'){
                main_container.removeChild(main_container.firstChild);
                main_container.appendChild((0,_js_welcome__WEBPACK_IMPORTED_MODULE_1__["default"])());
                console.log('1');
            }else if(e.target.getAttribute('class') == 'btnMenu'){
                main_container.removeChild(main_container.firstChild);
                main_container.appendChild((0,_js_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
                console.log('menu');
            }else if(e.target.getAttribute('class') == 'btnContact'){
                main_container.removeChild(main_container.firstChild);
                main_container.appendChild((0,_js_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
                console.log('c');
            }
        });
    }
   
    console.log('0');
    header();
    nav();
    main();
    footer();
    btnNav();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1REFBTztBQUNsRDtBQUNBLGFBQWE7QUFDYjtBQUNBLDJDQUEyQyxvREFBSTtBQUMvQztBQUNBLGFBQWE7QUFDYjtBQUNBLDJDQUEyQyx1REFBTztBQUNsRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9qcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL2pzL21lbnVsaXN0LmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvanMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzLy9Db21taXNzaW9uZXItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy8vQ29tbWlzc2lvbmVyLVNlbWlCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDM1cHggYXV0byAzMHB4O1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYTUxO1xcbiAgZ2FwOiAycHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhNTE7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxufVxcbmhlYWRlciBoMiB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5oZWFkZXIgcCB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1yZWd1bGFyXFxcIjtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxubmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEwMHB4KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzg1YTtcXG59XFxubmF2IGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxOTE5MTk7XFxufVxcbm5hdiBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgycHgpO1xcbn1cXG5cXG5kaXYud2VsY29tZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYud2VsY29tZSBpbWcud2VsY29tZUltZyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5kaXYud2VsY29tZSBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzg1YTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxufVxcblxcbmRpdi5tZW51IHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5kaXYubWVudUxpc3QgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYubWVudUxpc3QgcCB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1yZWd1bGFyXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5pbWcubWVudUltZyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgZGl2Lm1lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMzVweCBhdXRvIDMwcHg7XFxuICB9XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gIH1cXG4gIGhlYWRlciBoMiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICBoZWFkZXIgcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgZGl2LndlbGNvbWUge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBkaXYud2VsY29tZSBpbWcud2VsY29tZUltZyB7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gIH1cXG4gIGRpdi53ZWxjb21lIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNJLG1DQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0E7RUFDSSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBMUJTO0VBMkJULHlCQTVCUTtFQTZCUixRQUFBO0VBQ0EscUJBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBeENRO0VBeUNSLG9DQUFBO0FBUko7QUFVSTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBUlI7QUFXSTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBVFI7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EseUJBcEVRO0FBMERaO0FBWUk7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQVlRO0VBQ0kseUJBQUE7QUFWWjtBQWFRO0VBQ0ksMEJBQUE7QUFYWjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWRKO0FBaUJJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWZSO0FBa0JJO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBaEJSOztBQXFCQTtFQUNJLFdBQUE7RUFDQSx5QkFoSFE7RUFpSFIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQWxCSjs7QUFxQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBbEJKOztBQXVCSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBcEJSO0FBdUJJO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXJCUjs7QUEwQkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQXZCSjs7QUE2QkE7RUFDSTtJQUNJLDBCQUFBO0VBMUJOO0VBNkJFO0lBQ0ksdUNBQUE7RUEzQk47RUE4QkU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQTVCTjtFQThCTTtJQUNJLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0VBNUJWO0VBK0JNO0lBQ0ksbUNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUE3QlY7RUFpQ0U7SUFDSSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQS9CTjtFQWlDTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBL0JWO0VBa0NNO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFoQ1Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3ItOTAwOiAjZmY3ODVhO1xcclxcbiRjb2xvci04MDA6ICNmZmQyNWE7XFxyXFxuJGNvbG9yLTcwMDogI2ZmYWE1MTtcXHJcXG4kdGV4dC1jb2xvcjogIzE5MTkxOTtcXHJcXG5cXHJcXG4kY29tbWlzc2lvbmVyLWZvbnQtcGF0aDogXFxcIi4uL2ZvbnRzL1xcXCI7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiI3skY29tbWlzc2lvbmVyLWZvbnQtcGF0aH0vQ29tbWlzc2lvbmVyLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIjeyRjb21taXNzaW9uZXItZm9udC1wYXRofS9Db21taXNzaW9uZXItU2VtaUJvbGQudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDM1cHggYXV0byAzMHB4O1xcclxcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci03MDA7XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItNzAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuXFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6J2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBweyAgXFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1yZWd1bGFyJztcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5uYXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEwMHB4KTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItOTAwO1xcclxcblxcclxcbiAgICBidXR0b257XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTkxOTE5O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjphY3RpdmV7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDJweCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LndlbGNvbWV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLndlbGNvbWVJbWd7XFxyXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM0MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1yZWd1bGFyJztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTkwMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG59XFxyXFxuXFxyXFxuZGl2Lm1lbnV7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDcwdnc7XFxyXFxuICAgIG1heC13aWR0aDogNzIwcHg7IC8vaXRzIHRoZSBzdW0gb2YgZ2FwLCBwYWRkaW5nLCBtYXJnaW4sIGFuZCB3aWR0aCBvZiB0aGUgZGl2Lm1lbnVsaXN0XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubWVudUxpc3R7XFxyXFxuXFxyXFxuICAgIGgxe1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItc2VtaWJvbGQnO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1yZWd1bGFyJztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5pbWcubWVudUltZ3tcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgICBkaXYubWVudXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJvZHl7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMzVweCBhdXRvIDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBcXHJcXG4gICAgICAgIGgye1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTonY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgcHsgIFxcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXJlZ3VsYXInO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi53ZWxjb21le1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXFxyXFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGltZy53ZWxjb21lSW1ne1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgIHB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0X2Rpdi50ZXh0Q29udGVudCA9ICdKdXN0IHRhbGsgdG8gbWUsIHBsZWFzZSBhbnN3ZXIgbXkgc3RvcmllcyBpbiBpZyBwbGVhYWFhYXNlZWVlISEhJztcclxuXHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0X2Rpdik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRfY29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJpbXBvcnQgZm9vZCBmcm9tIFwiLi9tZW51bGlzdFwiO1xyXG5cclxuY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnRfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZm9vZC5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbmFtZV9mb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbl9mb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlX2Zvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb2RfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZm9vZF9pbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9pbWcvJHtmb29kW2ldWydpbWcnXX1gKTtcclxuICAgICAgICBmb29kX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51SW1nJyk7XHJcblxyXG4gICAgICAgIG5hbWVfZm9vZC50ZXh0Q29udGVudCA9IGZvb2RbaV1bJ25hbWUnXTtcclxuICAgICAgICBkZXNjcmlwdGlvbl9mb29kLmlubmVySFRNTCA9ICAnPHN0cm9uZz5JbmdyZWRpZW50czogPC9zdHJvbmc+JyArIGZvb2RbaV1bJ2luZ3JlZGllbnRzJ107XHJcbiAgICAgICAgcHJpY2VfZm9vZC5pbm5lckhUTUwgPSAnPHN0cm9uZz5QcmljZTo8L3N0cm9uZz4gJCcgKyBmb29kW2ldWydwcmljZSddO1xyXG5cclxuICAgICAgICBtZW51X2Rpdi5hcHBlbmRDaGlsZChmb29kX2ltZyk7XHJcbiAgICAgICAgbWVudV9kaXYuYXBwZW5kQ2hpbGQobmFtZV9mb29kKTtcclxuICAgICAgICBtZW51X2Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9mb29kKTtcclxuICAgICAgICBtZW51X2Rpdi5hcHBlbmRDaGlsZChwcmljZV9mb29kKTtcclxuXHJcbiAgICAgICAgbWVudV9kaXYuY2xhc3NMaXN0LmFkZCgnbWVudUxpc3QnKTtcclxuICAgICAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51X2Rpdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRfY29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJcclxubGV0IGZvb2QgPSBbXHJcbiAgICB7bmFtZTogJ0Zvb2QxJywgaW5ncmVkaWVudHM6ICdpbmcxLCBpbmcyJywgcHJpY2U6ICcxMjMuMzInLCBpbWc6ICdmb29kb25lLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kMicsIGluZ3JlZGllbnRzOiAnaW5nMywgaW5nNCcsIHByaWNlOiAnMjM0LjU0JywgaW1nOiAnZm9vZHR3by5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDMnLCBpbmdyZWRpZW50czogJ2luZzUsIGluZzYnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDQnLCBpbmdyZWRpZW50czogJ2luZzcsIGluZzgnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDUnLCBpbmdyZWRpZW50czogJ2luZzUsIGluZzYnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDYnLCBpbmdyZWRpZW50czogJ2luZzcsIGluZzgnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDcnLCBpbmdyZWRpZW50czogJ2luZzUsIGluZzYnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDgnLCBpbmdyZWRpZW50czogJ2luZzcsIGluZzgnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfVxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vZDsiLCJjb25zdCB3ZWxjb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcclxuXHJcbiAgICBjb25zdCBwb3J0YWxfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBwb3J0YWxfaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3dlbGNvbWUuanBnJyk7XHJcbiAgICBwb3J0YWxfaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1R3byBwZW9wbGUgY29va2luZycpXHJcbiAgICBwb3J0YWxfaW1nLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVJbWcnKTtcclxuXHJcblxyXG4gICAgY29uc3Qgd2VsY29tZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBfd2VsY29tZV9tZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwX3dlbGNvbWVfbWdzLnRleHRDb250ZW50ID0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgYWMgbGliZXJvIHNlbXBlciwgdm9sdXRwYXQgdG9ydG9yIGlkLCBhbGlxdWV0IGxhY3VzLiBQcmFlc2VudCBlbGVtZW50dW0gY29udmFsbGlzIGxvcmVtIGlkIGludGVyZHVtLiBQcmFlc2VudCB2aXRhZSBwdXJ1cyBhdWd1ZS4gRnVzY2UgZWZmaWNpdHVyIG9kaW8gc2l0IGFtZXQgZXN0IGN1cnN1cywgcXVpcyBmaW5pYnVzIGRvbG9yIG1hbGVzdWFkYS4gUGVsbGVudGVzcXVlIGlkIGVyb3MgcmhvbmN1cyBpcHN1bSBsYW9yZWV0IGRhcGlidXMgc2l0IGFtZXQgc2l0IGFtZXQgbmVxdWUuJztcclxuICAgIFxyXG4gICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQocG9ydGFsX2ltZyk7XHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChwX3dlbGNvbWVfbWdzKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudF9jb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB3ZWxjb21lIGZyb20gXCIuL2pzL3dlbGNvbWVcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vanMvbWVudVwiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9qcy9jb250YWN0XCI7XHJcblxyXG4oZnVuY3Rpb24gdW5DaGFuZ2UoKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnMCcpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl9zdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAgaGVhZGVyX3RpdGxlLnRleHRDb250ZW50ID0gJ0RvbiBXdWxmaXMgUmVzdG8nO1xyXG4gICAgICAgIGhlYWRlcl9zdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCBmb29kIG9mIHRoZSB3b3JsZCEhISc7XHJcblxyXG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX3RpdGxlKTtcclxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcl9zdWJ0aXRsZSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmF2ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBjb25zdCBuYXZfd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2X2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgbmF2X3dlbGNvbWUuY2xhc3NMaXN0LmFkZCgnYnRuV2VsY29tZScpO1xyXG4gICAgICAgIG5hdl9tZW51LmNsYXNzTGlzdC5hZGQoJ2J0bk1lbnUnKTtcclxuICAgICAgICBuYXZfY29udGFjdC5jbGFzc0xpc3QuYWRkKCdidG5Db250YWN0Jyk7XHJcblxyXG4gICAgICAgIG5hdl93ZWxjb21lLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xyXG4gICAgICAgIG5hdl9tZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgICAgIG5hdl9jb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG5cclxuICAgICAgICBuYXZfY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdl93ZWxjb21lKTtcclxuICAgICAgICBuYXZfY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdl9tZW51KTtcclxuICAgICAgICBuYXZfY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdl9jb250YWN0KTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdl9jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1haW4gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICAvL21haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWUoKSk7XHJcbiAgICAgICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluX2NvbnRhaW5lcik7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBmb290ZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgZm9vdGVyX2NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IHN0dWZmXCJcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJfY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidG5OYXYgPSAoKSA9PntcclxuICAgICAgICBsZXQgbmF2X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG4gICAgICAgIGxldCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbiAgICAgICAgbmF2X2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdidG5XZWxjb21lJyl7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluX2NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMScpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ2J0bk1lbnUnKXtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5fY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZW51Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAnYnRuQ29udGFjdCcpe1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIucmVtb3ZlQ2hpbGQobWFpbl9jb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCcwJyk7XHJcbiAgICBoZWFkZXIoKTtcclxuICAgIG5hdigpO1xyXG4gICAgbWFpbigpO1xyXG4gICAgZm9vdGVyKCk7XHJcbiAgICBidG5OYXYoKTtcclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=