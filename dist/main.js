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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"commissioner-regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"commissioner-semibold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 120px 35px auto 30px;\n  color: #191919;\n  background-color: #ffaa51;\n  gap: 2px;\n  justify-items: center;\n}\n\nheader {\n  display: grid;\n  width: 100%;\n  height: 120px;\n  padding: 10px;\n  justify-items: center;\n  align-content: center;\n  background-color: #ffaa51;\n  font-family: \"commissioner-semibold\";\n}\nheader h2 {\n  height: 60px;\n  font-family: \"commissioner-semibold\";\n  font-size: 30px;\n  padding: 10px;\n}\nheader p {\n  font-family: \"commissioner-regular\";\n  height: 30px;\n  font-size: 24px;\n  padding: 5px;\n}\n\nnav {\n  width: 100%;\n  height: 35px;\n  display: grid;\n  grid-template-columns: repeat(3, 100px);\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  background-color: #ff785a;\n}\nnav button {\n  font-family: \"commissioner-semibold\";\n  height: 27px;\n  border: none;\n  border-radius: 10px;\n}\nnav button:hover {\n  border: 2px solid #191919;\n}\nnav button:active {\n  transform: translatey(2px);\n}\n\ndiv.welcome {\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  width: 100%;\n  justify-items: center;\n  align-items: center;\n}\ndiv.welcome img.welcomeImg {\n  width: 350px;\n  height: 340px;\n  border-radius: 50%;\n}\ndiv.welcome p {\n  font-family: \"commissioner-regular\";\n  text-align: center;\n  width: 70%;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100%;\n  background-color: #ff785a;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-family: \"commissioner-semibold\";\n}\n\ndiv.menu {\n  height: auto;\n  width: 70vw;\n  max-width: 720px;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  padding: 10px;\n  margin: 10px;\n}\n\ndiv.menuList {\n  max-width: 250px;\n  display: flex;\n  flex-direction: column;\n}\ndiv.menuList h1 {\n  font-family: \"commissioner-semibold\";\n  font-size: 21px;\n  text-align: center;\n}\ndiv.menuList p {\n  font-family: \"commissioner-regular\";\n  font-size: 16px;\n  margin: 3px;\n}\n\nimg.menuImg {\n  height: 200px;\n  width: 200px;\n  align-self: center;\n}\n\n@media (max-width: 480px) {\n  div.menu {\n    grid-template-columns: 1fr;\n  }\n  body {\n    grid-template-rows: 80px 35px auto 30px;\n  }\n  header {\n    height: 70px;\n    padding: 7px;\n  }\n  header h2 {\n    height: 40px;\n    font-family: \"commissioner-semibold\";\n    font-size: 28px;\n    padding: 10px;\n  }\n  header p {\n    font-family: \"commissioner-regular\";\n    height: 20px;\n    font-size: 18px;\n    padding: 5px;\n  }\n  div.welcome {\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n  }\n  div.welcome img.welcomeImg {\n    width: 230px;\n    height: 230px;\n  }\n  div.welcome p {\n    text-align: center;\n    width: 80%;\n    font-size: 16px;\n    padding: 5px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAOA;EACI,mCAAA;EACA,4CAAA;EACA,gBAAA;AANJ;AASA;EACI,oCAAA;EACA,4CAAA;EACA,gBAAA;AAPJ;AAUA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AARJ;;AAWA;EACI,aAAA;EACA,wCAAA;EACA,cA1BS;EA2BT,yBA5BQ;EA6BR,QAAA;EACA,qBAAA;AARJ;;AAWA;EACI,aAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,yBAxCQ;EAyCR,oCAAA;AARJ;AAUI;EACI,YAAA;EACA,oCAAA;EACA,eAAA;EACA,aAAA;AARR;AAWI;EACI,mCAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AATR;;AAaA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,uBAAA;EACA,QAAA;EACA,yBApEQ;AA0DZ;AAYI;EACI,oCAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AAVR;AAYQ;EACI,yBAAA;AAVZ;AAaQ;EACI,0BAAA;AAXZ;;AAiBA;EACI,aAAA;EACA,2BAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;AAdJ;AAiBI;EACI,YAAA;EACA,aAAA;EACA,kBAAA;AAfR;AAkBI;EACI,mCAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;AAhBR;;AAqBA;EACI,WAAA;EACA,yBAhHQ;EAiHR,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;AAlBJ;;AAqBA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;AAlBJ;;AAqBA;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;AAlBJ;AAoBI;EACI,oCAAA;EACA,eAAA;EACA,kBAAA;AAlBR;AAqBI;EACI,mCAAA;EACA,eAAA;EACA,WAAA;AAnBR;;AAwBA;EACI,aAAA;EACA,YAAA;EACA,kBAAA;AArBJ;;AA2BA;EACI;IACI,0BAAA;EAxBN;EA2BE;IACI,uCAAA;EAzBN;EA4BE;IACI,YAAA;IACA,YAAA;EA1BN;EA4BM;IACI,YAAA;IACA,oCAAA;IACA,eAAA;IACA,aAAA;EA1BV;EA6BM;IACI,mCAAA;IACA,YAAA;IACA,eAAA;IACA,YAAA;EA3BV;EA+BE;IACI,2BAAA;IACA,uBAAA;IACA,qBAAA;IACA,mBAAA;EA7BN;EA+BM;IACI,YAAA;IACA,aAAA;EA7BV;EAgCM;IACI,kBAAA;IACA,UAAA;IACA,eAAA;IACA,YAAA;EA9BV;AACF","sourcesContent":["$color-900: #ff785a;\r\n$color-800: #ffd25a;\r\n$color-700: #ffaa51;\r\n$text-color: #191919;\r\n\r\n$commissioner-font-path: \"../fonts/\";\r\n\r\n@font-face {\r\n    font-family: \"commissioner-regular\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-Regular.ttf\");\r\n    font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"commissioner-semibold\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-SemiBold.ttf\");\r\n    font-weight: 600;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    display: grid;\r\n    grid-template-rows: 120px 35px auto 30px;\r\n    color: $text-color;\r\n    background-color: $color-700;\r\n    gap: 2px;\r\n    justify-items: center;\r\n}\r\n\r\nheader{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 120px;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-content: center;\r\n    background-color: $color-700;\r\n    font-family: 'commissioner-semibold';\r\n\r\n    h2{\r\n        height: 60px;\r\n        font-family:'commissioner-semibold';\r\n        font-size: 30px;\r\n        padding: 10px;\r\n    }\r\n    \r\n    p{  \r\n        font-family: 'commissioner-regular';\r\n        height: 30px;\r\n        font-size: 24px;\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\nnav{\r\n    width: 100%;\r\n    height: 35px;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 100px);\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n    background-color: $color-900;\r\n\r\n    button{\r\n        font-family: 'commissioner-semibold';\r\n        height: 27px;\r\n        border: none;\r\n        border-radius: 10px;\r\n\r\n        &:hover{\r\n            border: 2px solid #191919;\r\n        }\r\n\r\n        &:active{\r\n            transform: translatey(2px);\r\n        }\r\n    }\r\n}\r\n\r\n\r\ndiv.welcome{\r\n    display: grid;\r\n    grid-template-rows: 2fr 1fr;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n\r\n\r\n    img.welcomeImg{\r\n        width: 350px;\r\n        height: 340px;\r\n        border-radius: 50%;\r\n    }\r\n\r\n    p{\r\n        font-family: 'commissioner-regular';\r\n        text-align: center;\r\n        width: 70%;\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n\r\nfooter{\r\n    width: 100%;\r\n    background-color: $color-900;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'commissioner-semibold';\r\n}\r\n\r\ndiv.menu{\r\n    height: auto;\r\n    width: 70vw;\r\n    max-width: 720px; //its the sum of gap, padding, margin, and width of the div.menulist\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\ndiv.menuList{\r\n    max-width: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    h1{\r\n        font-family: 'commissioner-semibold';\r\n        font-size: 21px;\r\n        text-align: center;\r\n    }\r\n\r\n    p{\r\n        font-family: 'commissioner-regular';\r\n        font-size: 16px;\r\n        margin: 3px;\r\n    }\r\n    \r\n}\r\n\r\nimg.menuImg{\r\n    height: 200px;\r\n    width: 200px;\r\n    align-self: center;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n    div.menu{\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    body{\r\n        grid-template-rows: 80px 35px auto 30px;\r\n    }\r\n\r\n    header{\r\n        height: 70px;\r\n        padding: 7px;\r\n    \r\n        h2{\r\n            height: 40px;\r\n            font-family:'commissioner-semibold';\r\n            font-size: 28px;\r\n            padding: 10px;\r\n        }\r\n        \r\n        p{  \r\n            font-family: 'commissioner-regular';\r\n            height: 20px;\r\n            font-size: 18px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n    div.welcome{\r\n        grid-template-rows: 1fr 1fr;\r\n        justify-content: center;   \r\n        justify-items: center;\r\n        align-items: center;\r\n    \r\n        img.welcomeImg{\r\n            width: 230px;\r\n            height: 230px;\r\n        }\r\n    \r\n        p{\r\n            text-align: center;\r\n            width: 80%;\r\n            font-size: 16px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n\r\n}"],"sourceRoot":""}]);
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
    {name: 'Food1', ingredients: 'ing1, ing2 ing1, ing2ing1, ing2 ', price: '123.32', img: 'foodone.jpg'},
    {name: 'Food2', ingredients: 'ing1, ing2 ing1, ing2ing1, ing2 ', price: '234.54', img: 'foodtwo.jpg'},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLCtJQUFxRDtBQUNqRyw0Q0FBNEMsaUpBQXNEO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELDBDQUEwQyx5REFBeUQscUJBQXFCLEdBQUcsY0FBYywyQ0FBMkMseURBQXlELHFCQUFxQixHQUFHLEtBQUssMkJBQTJCLGNBQWMsZUFBZSxpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQiw2Q0FBNkMsbUJBQW1CLDhCQUE4QixhQUFhLDBCQUEwQixHQUFHLFlBQVksa0JBQWtCLGdCQUFnQixrQkFBa0Isa0JBQWtCLDBCQUEwQiwwQkFBMEIsOEJBQThCLDJDQUEyQyxHQUFHLGFBQWEsaUJBQWlCLDJDQUEyQyxvQkFBb0Isa0JBQWtCLEdBQUcsWUFBWSwwQ0FBMEMsaUJBQWlCLG9CQUFvQixpQkFBaUIsR0FBRyxTQUFTLGdCQUFnQixpQkFBaUIsa0JBQWtCLDRDQUE0Qyx3QkFBd0IsNEJBQTRCLGFBQWEsOEJBQThCLEdBQUcsY0FBYywyQ0FBMkMsaUJBQWlCLGlCQUFpQix3QkFBd0IsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcscUJBQXFCLCtCQUErQixHQUFHLGlCQUFpQixrQkFBa0IsZ0NBQWdDLGdCQUFnQiwwQkFBMEIsd0JBQXdCLEdBQUcsOEJBQThCLGlCQUFpQixrQkFBa0IsdUJBQXVCLEdBQUcsaUJBQWlCLDBDQUEwQyx1QkFBdUIsZUFBZSxvQkFBb0IsR0FBRyxZQUFZLGdCQUFnQiw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkNBQTJDLEdBQUcsY0FBYyxpQkFBaUIsZ0JBQWdCLHFCQUFxQixxQkFBcUIsa0JBQWtCLG9CQUFvQiw0QkFBNEIsY0FBYyxrQkFBa0IsaUJBQWlCLEdBQUcsa0JBQWtCLHFCQUFxQixrQkFBa0IsMkJBQTJCLEdBQUcsbUJBQW1CLDJDQUEyQyxvQkFBb0IsdUJBQXVCLEdBQUcsa0JBQWtCLDBDQUEwQyxvQkFBb0IsZ0JBQWdCLEdBQUcsaUJBQWlCLGtCQUFrQixpQkFBaUIsdUJBQXVCLEdBQUcsK0JBQStCLGNBQWMsaUNBQWlDLEtBQUssVUFBVSw4Q0FBOEMsS0FBSyxZQUFZLG1CQUFtQixtQkFBbUIsS0FBSyxlQUFlLG1CQUFtQiw2Q0FBNkMsc0JBQXNCLG9CQUFvQixLQUFLLGNBQWMsNENBQTRDLG1CQUFtQixzQkFBc0IsbUJBQW1CLEtBQUssaUJBQWlCLGtDQUFrQyw4QkFBOEIsNEJBQTRCLDBCQUEwQixLQUFLLGdDQUFnQyxtQkFBbUIsb0JBQW9CLEtBQUssbUJBQW1CLHlCQUF5QixpQkFBaUIsc0JBQXNCLG1CQUFtQixLQUFLLEdBQUcsT0FBTyx1RkFBdUYsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLDZDQUE2Qyx3QkFBd0Isd0JBQXdCLHlCQUF5QiwrQ0FBK0Msb0JBQW9CLDhDQUE4QyxxQkFBcUIsd0JBQXdCLDZCQUE2Qix5QkFBeUIsS0FBSyxvQkFBb0IsK0NBQStDLHFCQUFxQix3QkFBd0IsOEJBQThCLHlCQUF5QixLQUFLLFVBQVUsK0JBQStCLGtCQUFrQixtQkFBbUIscUJBQXFCLEtBQUssYUFBYSxzQkFBc0IsaURBQWlELDJCQUEyQixxQ0FBcUMsaUJBQWlCLDhCQUE4QixLQUFLLGVBQWUsc0JBQXNCLG9CQUFvQixzQkFBc0Isc0JBQXNCLDhCQUE4Qiw4QkFBOEIscUNBQXFDLDZDQUE2QyxlQUFlLHlCQUF5QixnREFBZ0QsNEJBQTRCLDBCQUEwQixTQUFTLG9CQUFvQixnREFBZ0QseUJBQXlCLDRCQUE0Qix5QkFBeUIsU0FBUyxLQUFLLFlBQVksb0JBQW9CLHFCQUFxQixzQkFBc0IsZ0RBQWdELDRCQUE0QixnQ0FBZ0MsaUJBQWlCLHFDQUFxQyxtQkFBbUIsaURBQWlELHlCQUF5Qix5QkFBeUIsZ0NBQWdDLHdCQUF3QiwwQ0FBMEMsYUFBYSx5QkFBeUIsMkNBQTJDLGFBQWEsU0FBUyxLQUFLLHdCQUF3QixzQkFBc0Isb0NBQW9DLG9CQUFvQiw4QkFBOEIsNEJBQTRCLCtCQUErQix5QkFBeUIsMEJBQTBCLCtCQUErQixTQUFTLGNBQWMsZ0RBQWdELCtCQUErQix1QkFBdUIsNEJBQTRCLFNBQVMsS0FBSyxtQkFBbUIsb0JBQW9CLHFDQUFxQyxzQkFBc0IsZ0NBQWdDLDRCQUE0Qiw2Q0FBNkMsS0FBSyxpQkFBaUIscUJBQXFCLG9CQUFvQiwwQkFBMEIsNkZBQTZGLHNCQUFzQix3QkFBd0IsZ0NBQWdDLGtCQUFrQixzQkFBc0IscUJBQXFCLEtBQUsscUJBQXFCLHlCQUF5QixzQkFBc0IsK0JBQStCLG1CQUFtQixpREFBaUQsNEJBQTRCLCtCQUErQixTQUFTLGNBQWMsZ0RBQWdELDRCQUE0Qix3QkFBd0IsU0FBUyxhQUFhLG9CQUFvQixzQkFBc0IscUJBQXFCLDJCQUEyQixLQUFLLCtDQUErQyxpQkFBaUIsdUNBQXVDLFNBQVMsaUJBQWlCLG9EQUFvRCxTQUFTLG1CQUFtQix5QkFBeUIseUJBQXlCLHVCQUF1Qiw2QkFBNkIsb0RBQW9ELGdDQUFnQyw4QkFBOEIsYUFBYSw0QkFBNEIsb0RBQW9ELDZCQUE2QixnQ0FBZ0MsNkJBQTZCLGFBQWEsU0FBUyx3QkFBd0Isd0NBQXdDLHVDQUF1QyxrQ0FBa0MsZ0NBQWdDLG1DQUFtQyw2QkFBNkIsOEJBQThCLGFBQWEsc0JBQXNCLG1DQUFtQywyQkFBMkIsZ0NBQWdDLDZCQUE2QixhQUFhLFNBQVMsYUFBYSxtQkFBbUI7QUFDeG1TO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDYlE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLElBQUksd0RBQVcsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxpREFBSSxXQUFXO0FBQzdEO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQUk7QUFDcEMseUVBQXlFLGlEQUFJO0FBQzdFLDZEQUE2RCxpREFBSTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNuQ25CO0FBQ0E7QUFDQSxLQUFLLG9HQUFvRztBQUN6RyxLQUFLLG9HQUFvRztBQUN6RyxLQUFLLGdGQUFnRjtBQUNyRixLQUFLLGdGQUFnRjtBQUNyRixLQUFLLGdGQUFnRjtBQUNyRixLQUFLLGdGQUFnRjtBQUNyRixLQUFLLGdGQUFnRjtBQUNyRixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNibkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ087QUFDTjtBQUNNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvREFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdURBQU87QUFDbEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQ0FBMkMsb0RBQUk7QUFDL0M7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyQ0FBMkMsdURBQU87QUFDbEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3M/NzQ3ZSIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9qcy9tZW51bGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL2pzL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy8vQ29tbWlzc2lvbmVyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvL0NvbW1pc3Npb25lci1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1yZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAzNXB4IGF1dG8gMzBweDtcXG4gIGNvbG9yOiAjMTkxOTE5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWE1MTtcXG4gIGdhcDogMnB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYTUxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbn1cXG5oZWFkZXIgaDIge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuaGVhZGVyIHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbm5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxMDBweCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4NWE7XFxufVxcbm5hdiBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTkxOTE5O1xcbn1cXG5uYXYgYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMnB4KTtcXG59XFxuXFxuZGl2LndlbGNvbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2LndlbGNvbWUgaW1nLndlbGNvbWVJbWcge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuZGl2LndlbGNvbWUgcCB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1yZWd1bGFyXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4NWE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbn1cXG5cXG5kaXYubWVudSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzB2dztcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZGl2Lm1lbnVMaXN0IHtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZGl2Lm1lbnVMaXN0IGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2Lm1lbnVMaXN0IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDNweDtcXG59XFxuXFxuaW1nLm1lbnVJbWcge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICBkaXYubWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAzNXB4IGF1dG8gMzBweDtcXG4gIH1cXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgfVxcbiAgaGVhZGVyIGgyIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIGhlYWRlciBwIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICBkaXYud2VsY29tZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIGRpdi53ZWxjb21lIGltZy53ZWxjb21lSW1nIHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgfVxcbiAgZGl2LndlbGNvbWUgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0ksbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FBTko7QUFTQTtFQUNJLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQVBKO0FBVUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLHdDQUFBO0VBQ0EsY0ExQlM7RUEyQlQseUJBNUJRO0VBNkJSLFFBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkF4Q1E7RUF5Q1Isb0NBQUE7QUFSSjtBQVVJO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFSUjtBQVdJO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFUUjs7QUFhQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFwRVE7QUEwRFo7QUFZSTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVZSO0FBWVE7RUFDSSx5QkFBQTtBQVZaO0FBYVE7RUFDSSwwQkFBQTtBQVhaOztBQWlCQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFpQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBZlI7QUFrQkk7RUFDSSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFoQlI7O0FBcUJBO0VBQ0ksV0FBQTtFQUNBLHlCQWhIUTtFQWlIUixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBbEJKOztBQXFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFsQko7O0FBcUJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFsQko7QUFvQkk7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWxCUjtBQXFCSTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFuQlI7O0FBd0JBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJCSjs7QUEyQkE7RUFDSTtJQUNJLDBCQUFBO0VBeEJOO0VBMkJFO0lBQ0ksdUNBQUE7RUF6Qk47RUE0QkU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQTFCTjtFQTRCTTtJQUNJLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0VBMUJWO0VBNkJNO0lBQ0ksbUNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUEzQlY7RUErQkU7SUFDSSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQTdCTjtFQStCTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBN0JWO0VBZ0NNO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUE5QlY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3ItOTAwOiAjZmY3ODVhO1xcclxcbiRjb2xvci04MDA6ICNmZmQyNWE7XFxyXFxuJGNvbG9yLTcwMDogI2ZmYWE1MTtcXHJcXG4kdGV4dC1jb2xvcjogIzE5MTkxOTtcXHJcXG5cXHJcXG4kY29tbWlzc2lvbmVyLWZvbnQtcGF0aDogXFxcIi4uL2ZvbnRzL1xcXCI7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiI3skY29tbWlzc2lvbmVyLWZvbnQtcGF0aH0vQ29tbWlzc2lvbmVyLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIjeyRjb21taXNzaW9uZXItZm9udC1wYXRofS9Db21taXNzaW9uZXItU2VtaUJvbGQudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDM1cHggYXV0byAzMHB4O1xcclxcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci03MDA7XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItNzAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuXFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6J2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBweyAgXFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1yZWd1bGFyJztcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5uYXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEwMHB4KTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItOTAwO1xcclxcblxcclxcbiAgICBidXR0b257XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTkxOTE5O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjphY3RpdmV7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDJweCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LndlbGNvbWV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLndlbGNvbWVJbWd7XFxyXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM0MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1yZWd1bGFyJztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTkwMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG59XFxyXFxuXFxyXFxuZGl2Lm1lbnV7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDcwdnc7XFxyXFxuICAgIG1heC13aWR0aDogNzIwcHg7IC8vaXRzIHRoZSBzdW0gb2YgZ2FwLCBwYWRkaW5nLCBtYXJnaW4sIGFuZCB3aWR0aCBvZiB0aGUgZGl2Lm1lbnVsaXN0XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubWVudUxpc3R7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIFxcclxcbiAgICBoMXtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwe1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItcmVndWxhcic7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDNweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuaW1nLm1lbnVJbWd7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgZGl2Lm1lbnV7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDM1cHggYXV0byAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgXFxyXFxuICAgICAgICBoMntcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6J2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIHB7ICBcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1yZWd1bGFyJztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYud2VsY29tZXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICBpbWcud2VsY29tZUltZ3tcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICBwe1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdF9kaXYudGV4dENvbnRlbnQgPSAnSnVzdCB0YWxrIHRvIG1lLCBwbGVhc2UgYW5zd2VyIG15IHN0b3JpZXMgaW4gaWcgcGxlYWFhYWFzZWVlZSEhISc7XHJcblxyXG4gICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdF9kaXYpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiaW1wb3J0IGZvb2QgZnJvbSBcIi4vbWVudWxpc3RcIjtcclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZvb2QubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICBjb25zdCBtZW51X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVfZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25fZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwcmljZV9mb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBjb25zdCBmb29kX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGZvb2RfaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vaW1nLyR7Zm9vZFtpXVsnaW1nJ119YCk7XHJcbiAgICAgICAgZm9vZF9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudUltZycpO1xyXG5cclxuICAgICAgICBuYW1lX2Zvb2QudGV4dENvbnRlbnQgPSBmb29kW2ldWyduYW1lJ107XHJcbiAgICAgICAgZGVzY3JpcHRpb25fZm9vZC5pbm5lckhUTUwgPSAgJzxzdHJvbmc+SW5ncmVkaWVudHM6IDwvc3Ryb25nPicgKyBmb29kW2ldWydpbmdyZWRpZW50cyddO1xyXG4gICAgICAgIHByaWNlX2Zvb2QuaW5uZXJIVE1MID0gJzxzdHJvbmc+UHJpY2U6PC9zdHJvbmc+ICQnICsgZm9vZFtpXVsncHJpY2UnXTtcclxuXHJcbiAgICAgICAgbWVudV9kaXYuYXBwZW5kQ2hpbGQoZm9vZF9pbWcpO1xyXG4gICAgICAgIG1lbnVfZGl2LmFwcGVuZENoaWxkKG5hbWVfZm9vZCk7XHJcbiAgICAgICAgbWVudV9kaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fZm9vZCk7XHJcbiAgICAgICAgbWVudV9kaXYuYXBwZW5kQ2hpbGQocHJpY2VfZm9vZCk7XHJcblxyXG4gICAgICAgIG1lbnVfZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVMaXN0Jyk7XHJcbiAgICAgICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudV9kaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiXHJcbmxldCBmb29kID0gW1xyXG4gICAge25hbWU6ICdGb29kMScsIGluZ3JlZGllbnRzOiAnaW5nMSwgaW5nMiBpbmcxLCBpbmcyaW5nMSwgaW5nMiAnLCBwcmljZTogJzEyMy4zMicsIGltZzogJ2Zvb2RvbmUuanBnJ30sXHJcbiAgICB7bmFtZTogJ0Zvb2QyJywgaW5ncmVkaWVudHM6ICdpbmcxLCBpbmcyIGluZzEsIGluZzJpbmcxLCBpbmcyICcsIHByaWNlOiAnMjM0LjU0JywgaW1nOiAnZm9vZHR3by5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDMnLCBpbmdyZWRpZW50czogJ2luZzUsIGluZzYnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDQnLCBpbmdyZWRpZW50czogJ2luZzcsIGluZzgnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDUnLCBpbmdyZWRpZW50czogJ2luZzUsIGluZzYnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDYnLCBpbmdyZWRpZW50czogJ2luZzcsIGluZzgnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDcnLCBpbmdyZWRpZW50czogJ2luZzUsIGluZzYnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDgnLCBpbmdyZWRpZW50czogJ2luZzcsIGluZzgnLCBwcmljZTogJzIzMS4yMycsIGltZzogJ2Zvb2R0aHJlZS5qcGcnfVxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vZDsiLCJjb25zdCB3ZWxjb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcclxuXHJcbiAgICBjb25zdCBwb3J0YWxfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBwb3J0YWxfaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3dlbGNvbWUuanBnJyk7XHJcbiAgICBwb3J0YWxfaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1R3byBwZW9wbGUgY29va2luZycpXHJcbiAgICBwb3J0YWxfaW1nLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVJbWcnKTtcclxuXHJcblxyXG4gICAgY29uc3Qgd2VsY29tZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBfd2VsY29tZV9tZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwX3dlbGNvbWVfbWdzLnRleHRDb250ZW50ID0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgYWMgbGliZXJvIHNlbXBlciwgdm9sdXRwYXQgdG9ydG9yIGlkLCBhbGlxdWV0IGxhY3VzLiBQcmFlc2VudCBlbGVtZW50dW0gY29udmFsbGlzIGxvcmVtIGlkIGludGVyZHVtLiBQcmFlc2VudCB2aXRhZSBwdXJ1cyBhdWd1ZS4gRnVzY2UgZWZmaWNpdHVyIG9kaW8gc2l0IGFtZXQgZXN0IGN1cnN1cywgcXVpcyBmaW5pYnVzIGRvbG9yIG1hbGVzdWFkYS4gUGVsbGVudGVzcXVlIGlkIGVyb3MgcmhvbmN1cyBpcHN1bSBsYW9yZWV0IGRhcGlidXMgc2l0IGFtZXQgc2l0IGFtZXQgbmVxdWUuJztcclxuICAgIFxyXG4gICAgY29udGVudF9jb250YWluZXIuYXBwZW5kQ2hpbGQocG9ydGFsX2ltZyk7XHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChwX3dlbGNvbWVfbWdzKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudF9jb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB3ZWxjb21lIGZyb20gXCIuL2pzL3dlbGNvbWVcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vanMvbWVudVwiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9qcy9jb250YWN0XCI7XHJcblxyXG4oZnVuY3Rpb24gdW5DaGFuZ2UoKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnMCcpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl9zdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAgaGVhZGVyX3RpdGxlLnRleHRDb250ZW50ID0gJ0RvbiBXdWxmaXMgUmVzdG8nO1xyXG4gICAgICAgIGhlYWRlcl9zdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCBmb29kIG9mIHRoZSB3b3JsZCEhISc7XHJcblxyXG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX3RpdGxlKTtcclxuICAgICAgICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcl9zdWJ0aXRsZSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmF2ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBjb25zdCBuYXZfd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2X2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgbmF2X3dlbGNvbWUuY2xhc3NMaXN0LmFkZCgnYnRuV2VsY29tZScpO1xyXG4gICAgICAgIG5hdl9tZW51LmNsYXNzTGlzdC5hZGQoJ2J0bk1lbnUnKTtcclxuICAgICAgICBuYXZfY29udGFjdC5jbGFzc0xpc3QuYWRkKCdidG5Db250YWN0Jyk7XHJcblxyXG4gICAgICAgIG5hdl93ZWxjb21lLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xyXG4gICAgICAgIG5hdl9tZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgICAgIG5hdl9jb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG5cclxuICAgICAgICBuYXZfY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdl93ZWxjb21lKTtcclxuICAgICAgICBuYXZfY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdl9tZW51KTtcclxuICAgICAgICBuYXZfY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdl9jb250YWN0KTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdl9jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1haW4gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICAvL21haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWUoKSk7XHJcbiAgICAgICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluX2NvbnRhaW5lcik7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBmb290ZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgZm9vdGVyX2NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IHN0dWZmXCJcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJfY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidG5OYXYgPSAoKSA9PntcclxuICAgICAgICBsZXQgbmF2X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG4gICAgICAgIGxldCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbiAgICAgICAgbmF2X2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdidG5XZWxjb21lJyl7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluX2NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMScpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ2J0bk1lbnUnKXtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5fY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZW51Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAnYnRuQ29udGFjdCcpe1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIucmVtb3ZlQ2hpbGQobWFpbl9jb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCcwJyk7XHJcbiAgICBoZWFkZXIoKTtcclxuICAgIG5hdigpO1xyXG4gICAgbWFpbigpO1xyXG4gICAgZm9vdGVyKCk7XHJcbiAgICBidG5OYXYoKTtcclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=