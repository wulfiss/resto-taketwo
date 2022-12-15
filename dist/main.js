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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"commissioner-regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"commissioner-semibold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 120px 35px auto 30px;\n  color: #191919;\n  background-color: #ffaa51;\n  gap: 2px;\n  justify-items: center;\n}\n\nheader {\n  display: grid;\n  width: 100%;\n  height: 120px;\n  padding: 10px;\n  justify-items: center;\n  align-content: center;\n  background-color: #ffaa51;\n  font-family: \"commissioner-semibold\";\n}\nheader h2 {\n  height: 60px;\n  font-family: \"commissioner-semibold\";\n  font-size: 30px;\n  padding: 10px;\n}\nheader p {\n  font-family: \"commissioner-regular\";\n  height: 30px;\n  font-size: 24px;\n  padding: 5px;\n}\n\nnav {\n  width: 100%;\n  height: 35px;\n  display: grid;\n  grid-template-columns: repeat(3, 100px);\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  background-color: #ff785a;\n}\nnav button {\n  font-family: \"commissioner-semibold\";\n  height: 27px;\n  border: none;\n  border-radius: 10px;\n}\nnav button:hover {\n  border: 2px solid #191919;\n}\nnav button:active {\n  transform: translatey(2px);\n}\n\ndiv.welcome {\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  width: 100%;\n  justify-items: center;\n  align-items: center;\n}\ndiv.welcome img.welcomeImg {\n  width: 350px;\n  height: 340px;\n  border-radius: 50%;\n}\ndiv.welcome p {\n  font-family: \"commissioner-regular\";\n  text-align: center;\n  width: 70%;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100%;\n  background-color: #ff785a;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-family: \"commissioner-semibold\";\n}\n\ndiv.menu {\n  height: auto;\n  width: 70vw;\n  max-width: 720px;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  padding: 10px;\n  margin: 10px;\n}\n\nimg.menuImg {\n  height: 200px;\n  width: auto;\n}\n\n@media (max-width: 480px) {\n  div.menu {\n    grid-template-columns: 1fr;\n  }\n  body {\n    grid-template-rows: 80px 35px auto 30px;\n  }\n  header {\n    height: 70px;\n    padding: 7px;\n  }\n  header h2 {\n    height: 40px;\n    font-family: \"commissioner-semibold\";\n    font-size: 28px;\n    padding: 10px;\n  }\n  header p {\n    font-family: \"commissioner-regular\";\n    height: 20px;\n    font-size: 18px;\n    padding: 5px;\n  }\n  div.welcome {\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n  }\n  div.welcome img.welcomeImg {\n    width: 230px;\n    height: 230px;\n  }\n  div.welcome p {\n    text-align: center;\n    width: 80%;\n    font-size: 16px;\n    padding: 5px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAOA;EACI,mCAAA;EACA,4CAAA;EACA,gBAAA;AANJ;AASA;EACI,oCAAA;EACA,4CAAA;EACA,gBAAA;AAPJ;AAUA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AARJ;;AAWA;EACI,aAAA;EACA,wCAAA;EACA,cA1BS;EA2BT,yBA5BQ;EA6BR,QAAA;EACA,qBAAA;AARJ;;AAWA;EACI,aAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,yBAxCQ;EAyCR,oCAAA;AARJ;AAUI;EACI,YAAA;EACA,oCAAA;EACA,eAAA;EACA,aAAA;AARR;AAWI;EACI,mCAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AATR;;AAaA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,uBAAA;EACA,QAAA;EACA,yBApEQ;AA0DZ;AAYI;EACI,oCAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AAVR;AAYQ;EACI,yBAAA;AAVZ;AAaQ;EACI,0BAAA;AAXZ;;AAiBA;EACI,aAAA;EACA,2BAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;AAdJ;AAiBI;EACI,YAAA;EACA,aAAA;EACA,kBAAA;AAfR;AAkBI;EACI,mCAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;AAhBR;;AAqBA;EACI,WAAA;EACA,yBAhHQ;EAiHR,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;AAlBJ;;AAqBA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;AAlBJ;;AAsBA;EACI,aAAA;EACA,WAAA;AAnBJ;;AAyBA;EACI;IACI,0BAAA;EAtBN;EAyBE;IACI,uCAAA;EAvBN;EA0BE;IACI,YAAA;IACA,YAAA;EAxBN;EA0BM;IACI,YAAA;IACA,oCAAA;IACA,eAAA;IACA,aAAA;EAxBV;EA2BM;IACI,mCAAA;IACA,YAAA;IACA,eAAA;IACA,YAAA;EAzBV;EA6BE;IACI,2BAAA;IACA,uBAAA;IACA,qBAAA;IACA,mBAAA;EA3BN;EA6BM;IACI,YAAA;IACA,aAAA;EA3BV;EA8BM;IACI,kBAAA;IACA,UAAA;IACA,eAAA;IACA,YAAA;EA5BV;AACF","sourcesContent":["$color-900: #ff785a;\r\n$color-800: #ffd25a;\r\n$color-700: #ffaa51;\r\n$text-color: #191919;\r\n\r\n$commissioner-font-path: \"../fonts/\";\r\n\r\n@font-face {\r\n    font-family: \"commissioner-regular\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-Regular.ttf\");\r\n    font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"commissioner-semibold\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-SemiBold.ttf\");\r\n    font-weight: 600;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    display: grid;\r\n    grid-template-rows: 120px 35px auto 30px;\r\n    color: $text-color;\r\n    background-color: $color-700;\r\n    gap: 2px;\r\n    justify-items: center;\r\n}\r\n\r\nheader{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 120px;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-content: center;\r\n    background-color: $color-700;\r\n    font-family: 'commissioner-semibold';\r\n\r\n    h2{\r\n        height: 60px;\r\n        font-family:'commissioner-semibold';\r\n        font-size: 30px;\r\n        padding: 10px;\r\n    }\r\n    \r\n    p{  \r\n        font-family: 'commissioner-regular';\r\n        height: 30px;\r\n        font-size: 24px;\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\nnav{\r\n    width: 100%;\r\n    height: 35px;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 100px);\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n    background-color: $color-900;\r\n\r\n    button{\r\n        font-family: 'commissioner-semibold';\r\n        height: 27px;\r\n        border: none;\r\n        border-radius: 10px;\r\n\r\n        &:hover{\r\n            border: 2px solid #191919;\r\n        }\r\n\r\n        &:active{\r\n            transform: translatey(2px);\r\n        }\r\n    }\r\n}\r\n\r\n\r\ndiv.welcome{\r\n    display: grid;\r\n    grid-template-rows: 2fr 1fr;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n\r\n\r\n    img.welcomeImg{\r\n        width: 350px;\r\n        height: 340px;\r\n        border-radius: 50%;\r\n    }\r\n\r\n    p{\r\n        font-family: 'commissioner-regular';\r\n        text-align: center;\r\n        width: 70%;\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n\r\nfooter{\r\n    width: 100%;\r\n    background-color: $color-900;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'commissioner-semibold';\r\n}\r\n\r\ndiv.menu{\r\n    height: auto;\r\n    width: 70vw;\r\n    max-width: 720px; //its the sum of gap, padding, margin, and width of the div.menulist\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n\r\nimg.menuImg{\r\n    height: 200px;\r\n    width: auto;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n    div.menu{\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    body{\r\n        grid-template-rows: 80px 35px auto 30px;\r\n    }\r\n\r\n    header{\r\n        height: 70px;\r\n        padding: 7px;\r\n    \r\n        h2{\r\n            height: 40px;\r\n            font-family:'commissioner-semibold';\r\n            font-size: 28px;\r\n            padding: 10px;\r\n        }\r\n        \r\n        p{  \r\n            font-family: 'commissioner-regular';\r\n            height: 20px;\r\n            font-size: 18px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n    div.welcome{\r\n        grid-template-rows: 1fr 1fr;\r\n        justify-content: center;   \r\n        justify-items: center;\r\n        align-items: center;\r\n    \r\n        img.welcomeImg{\r\n            width: 230px;\r\n            height: 230px;\r\n        }\r\n    \r\n        p{\r\n            text-align: center;\r\n            width: 80%;\r\n            font-size: 16px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n\r\n}"],"sourceRoot":""}]);
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
        description_food.textContent = _menulist__WEBPACK_IMPORTED_MODULE_0__["default"][i]['ingredients'];
        price_food.textContent = _menulist__WEBPACK_IMPORTED_MODULE_0__["default"][i]['price'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzc0N2UiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvanMvbWVudWxpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9qcy93ZWxjb21lLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvL0NvbW1pc3Npb25lci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzLy9Db21taXNzaW9uZXItU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMzVweCBhdXRvIDMwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhNTE7XFxuICBnYXA6IDJweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWE1MTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG59XFxuaGVhZGVyIGgyIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbmhlYWRlciBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODVhO1xcbn1cXG5uYXYgYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gIGhlaWdodDogMjdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzE5MTkxOTtcXG59XFxubmF2IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDJweCk7XFxufVxcblxcbmRpdi53ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi53ZWxjb21lIGltZy53ZWxjb21lSW1nIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbmRpdi53ZWxjb21lIHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODVhO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG59XFxuXFxuZGl2Lm1lbnUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmltZy5tZW51SW1nIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICBkaXYubWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAzNXB4IGF1dG8gMzBweDtcXG4gIH1cXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgfVxcbiAgaGVhZGVyIGgyIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIGhlYWRlciBwIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICBkaXYud2VsY29tZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIGRpdi53ZWxjb21lIGltZy53ZWxjb21lSW1nIHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgfVxcbiAgZGl2LndlbGNvbWUgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0ksbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FBTko7QUFTQTtFQUNJLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQVBKO0FBVUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLHdDQUFBO0VBQ0EsY0ExQlM7RUEyQlQseUJBNUJRO0VBNkJSLFFBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkF4Q1E7RUF5Q1Isb0NBQUE7QUFSSjtBQVVJO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFSUjtBQVdJO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFUUjs7QUFhQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFwRVE7QUEwRFo7QUFZSTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVZSO0FBWVE7RUFDSSx5QkFBQTtBQVZaO0FBYVE7RUFDSSwwQkFBQTtBQVhaOztBQWlCQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFpQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBZlI7QUFrQkk7RUFDSSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFoQlI7O0FBcUJBO0VBQ0ksV0FBQTtFQUNBLHlCQWhIUTtFQWlIUixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBbEJKOztBQXFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFsQko7O0FBc0JBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFuQko7O0FBeUJBO0VBQ0k7SUFDSSwwQkFBQTtFQXRCTjtFQXlCRTtJQUNJLHVDQUFBO0VBdkJOO0VBMEJFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF4Qk47RUEwQk07SUFDSSxZQUFBO0lBQ0Esb0NBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtFQXhCVjtFQTJCTTtJQUNJLG1DQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBekJWO0VBNkJFO0lBQ0ksMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUEzQk47RUE2Qk07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQTNCVjtFQThCTTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBNUJWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbG9yLTkwMDogI2ZmNzg1YTtcXHJcXG4kY29sb3ItODAwOiAjZmZkMjVhO1xcclxcbiRjb2xvci03MDA6ICNmZmFhNTE7XFxyXFxuJHRleHQtY29sb3I6ICMxOTE5MTk7XFxyXFxuXFxyXFxuJGNvbW1pc3Npb25lci1mb250LXBhdGg6IFxcXCIuLi9mb250cy9cXFwiO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1yZWd1bGFyXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIiN7JGNvbW1pc3Npb25lci1mb250LXBhdGh9L0NvbW1pc3Npb25lci1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiI3skY29tbWlzc2lvbmVyLWZvbnQtcGF0aH0vQ29tbWlzc2lvbmVyLVNlbWlCb2xkLnR0ZlxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAzNXB4IGF1dG8gMzBweDtcXHJcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItNzAwO1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTcwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItc2VtaWJvbGQnO1xcclxcblxcclxcbiAgICBoMntcXHJcXG4gICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5Oidjb21taXNzaW9uZXItc2VtaWJvbGQnO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgcHsgIFxcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItcmVndWxhcic7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxubmF2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxMDBweCk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTkwMDtcXHJcXG5cXHJcXG4gICAgYnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItc2VtaWJvbGQnO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE5MTkxOTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6YWN0aXZle1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgycHgpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi53ZWxjb21le1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy53ZWxjb21lSW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNDBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwe1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItcmVndWxhcic7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogNzAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci05MDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxufVxcclxcblxcclxcbmRpdi5tZW51e1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDcyMHB4OyAvL2l0cyB0aGUgc3VtIG9mIGdhcCwgcGFkZGluZywgbWFyZ2luLCBhbmQgd2lkdGggb2YgdGhlIGRpdi5tZW51bGlzdFxcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW1nLm1lbnVJbWd7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgZGl2Lm1lbnV7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDM1cHggYXV0byAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgXFxyXFxuICAgICAgICBoMntcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6J2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIHB7ICBcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1yZWd1bGFyJztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYud2VsY29tZXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICBpbWcud2VsY29tZUltZ3tcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICBwe1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdF9kaXYudGV4dENvbnRlbnQgPSAnSnVzdCB0YWxrIHRvIG1lLCBwbGVhc2UgYW5zd2VyIG15IHN0b3JpZXMgaW4gaWcgcGxlYWFhYWFzZWVlZSEhISc7XHJcblxyXG4gICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdF9kaXYpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiaW1wb3J0IGZvb2QgZnJvbSBcIi4vbWVudWxpc3RcIjtcclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZvb2QubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICBjb25zdCBtZW51X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVfZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25fZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwcmljZV9mb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBjb25zdCBmb29kX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGZvb2RfaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vaW1nLyR7Zm9vZFtpXVsnaW1nJ119YCk7XHJcbiAgICAgICAgZm9vZF9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudUltZycpO1xyXG5cclxuICAgICAgICBuYW1lX2Zvb2QudGV4dENvbnRlbnQgPSBmb29kW2ldWyduYW1lJ107XHJcbiAgICAgICAgZGVzY3JpcHRpb25fZm9vZC50ZXh0Q29udGVudCA9IGZvb2RbaV1bJ2luZ3JlZGllbnRzJ107XHJcbiAgICAgICAgcHJpY2VfZm9vZC50ZXh0Q29udGVudCA9IGZvb2RbaV1bJ3ByaWNlJ107XHJcblxyXG4gICAgICAgIG1lbnVfZGl2LmFwcGVuZENoaWxkKGZvb2RfaW1nKTtcclxuICAgICAgICBtZW51X2Rpdi5hcHBlbmRDaGlsZChuYW1lX2Zvb2QpO1xyXG4gICAgICAgIG1lbnVfZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2Zvb2QpO1xyXG4gICAgICAgIG1lbnVfZGl2LmFwcGVuZENoaWxkKHByaWNlX2Zvb2QpO1xyXG5cclxuICAgICAgICBtZW51X2Rpdi5jbGFzc0xpc3QuYWRkKCdtZW51TGlzdCcpO1xyXG4gICAgICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVfZGl2KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udGVudF9jb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIlxyXG5sZXQgZm9vZCA9IFtcclxuICAgIHtuYW1lOiAnRm9vZDEnLCBpbmdyZWRpZW50czogJ2luZzEsIGluZzInLCBwcmljZTogJzEyMy4zMicsIGltZzogJ2Zvb2RvbmUuanBnJ30sXHJcbiAgICB7bmFtZTogJ0Zvb2QyJywgaW5ncmVkaWVudHM6ICdpbmczLCBpbmc0JywgcHJpY2U6ICcyMzQuNTQnLCBpbWc6ICdmb29kdHdvLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kMycsIGluZ3JlZGllbnRzOiAnaW5nNSwgaW5nNicsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNCcsIGluZ3JlZGllbnRzOiAnaW5nNywgaW5nOCcsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNScsIGluZ3JlZGllbnRzOiAnaW5nNSwgaW5nNicsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNicsIGluZ3JlZGllbnRzOiAnaW5nNywgaW5nOCcsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNycsIGluZ3JlZGllbnRzOiAnaW5nNSwgaW5nNicsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kOCcsIGluZ3JlZGllbnRzOiAnaW5nNywgaW5nOCcsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb29kOyIsImNvbnN0IHdlbGNvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xyXG5cclxuICAgIGNvbnN0IHBvcnRhbF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHBvcnRhbF9pbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvd2VsY29tZS5qcGcnKTtcclxuICAgIHBvcnRhbF9pbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnVHdvIHBlb3BsZSBjb29raW5nJylcclxuICAgIHBvcnRhbF9pbWcuY2xhc3NMaXN0LmFkZCgnd2VsY29tZUltZycpO1xyXG5cclxuXHJcbiAgICBjb25zdCB3ZWxjb21lX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcF93ZWxjb21lX21ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBfd2VsY29tZV9tZ3MudGV4dENvbnRlbnQgPSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBhYyBsaWJlcm8gc2VtcGVyLCB2b2x1dHBhdCB0b3J0b3IgaWQsIGFsaXF1ZXQgbGFjdXMuIFByYWVzZW50IGVsZW1lbnR1bSBjb252YWxsaXMgbG9yZW0gaWQgaW50ZXJkdW0uIFByYWVzZW50IHZpdGFlIHB1cnVzIGF1Z3VlLiBGdXNjZSBlZmZpY2l0dXIgb2RpbyBzaXQgYW1ldCBlc3QgY3Vyc3VzLCBxdWlzIGZpbmlidXMgZG9sb3IgbWFsZXN1YWRhLiBQZWxsZW50ZXNxdWUgaWQgZXJvcyByaG9uY3VzIGlwc3VtIGxhb3JlZXQgZGFwaWJ1cyBzaXQgYW1ldCBzaXQgYW1ldCBuZXF1ZS4nO1xyXG4gICAgXHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChwb3J0YWxfaW1nKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKHBfd2VsY29tZV9tZ3MpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSBcIi4vanMvd2VsY29tZVwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9qcy9tZW51XCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2pzL2NvbnRhY3RcIjtcclxuXHJcbihmdW5jdGlvbiB1bkNoYW5nZSgpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCcwJyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyX3N1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBoZWFkZXJfdGl0bGUudGV4dENvbnRlbnQgPSAnRG9uIFd1bGZpcyBSZXN0byc7XHJcbiAgICAgICAgaGVhZGVyX3N1YnRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IGZvb2Qgb2YgdGhlIHdvcmxkISEhJztcclxuXHJcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJfdGl0bGUpO1xyXG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX3N1YnRpdGxlKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIGNvbnN0IG5hdl93ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2X21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBuYXZfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBuYXZfd2VsY29tZS5jbGFzc0xpc3QuYWRkKCdidG5XZWxjb21lJyk7XHJcbiAgICAgICAgbmF2X21lbnUuY2xhc3NMaXN0LmFkZCgnYnRuTWVudScpO1xyXG4gICAgICAgIG5hdl9jb250YWN0LmNsYXNzTGlzdC5hZGQoJ2J0bkNvbnRhY3QnKTtcclxuXHJcbiAgICAgICAgbmF2X3dlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSc7XHJcbiAgICAgICAgbmF2X21lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICAgICAgbmF2X2NvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG4gICAgICAgIG5hdl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmF2X3dlbGNvbWUpO1xyXG4gICAgICAgIG5hdl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmF2X21lbnUpO1xyXG4gICAgICAgIG5hdl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmF2X2NvbnRhY3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2X2NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFpbiA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG1haW5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIC8vbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSgpKTtcclxuICAgICAgICBtYWluX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KCkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5fY29udGFpbmVyKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGZvb3Rlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgICAgICBmb290ZXJfY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgc3R1ZmZcIlxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcl9jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ0bk5hdiA9ICgpID0+e1xyXG4gICAgICAgIGxldCBuYXZfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XHJcbiAgICAgICAgbGV0IG1haW5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuICAgICAgICBuYXZfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ2J0bldlbGNvbWUnKXtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5fY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAnYnRuTWVudScpe1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIucmVtb3ZlQ2hpbGQobWFpbl9jb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21lbnUnKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdidG5Db250YWN0Jyl7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluX2NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY29uc29sZS5sb2coJzAnKTtcclxuICAgIGhlYWRlcigpO1xyXG4gICAgbmF2KCk7XHJcbiAgICBtYWluKCk7XHJcbiAgICBmb290ZXIoKTtcclxuICAgIGJ0bk5hdigpO1xyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==