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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"commissioner-regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"commissioner-semibold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 120px 35px auto 30px;\n  color: #191919;\n  background-color: #ffaa51;\n  gap: 2px;\n  justify-items: center;\n}\n\nheader {\n  display: grid;\n  width: 100%;\n  height: 120px;\n  padding: 10px;\n  justify-items: center;\n  align-content: center;\n  background-color: #ffaa51;\n  font-family: \"commissioner-semibold\";\n}\nheader h2 {\n  height: 60px;\n  font-family: \"commissioner-semibold\";\n  font-size: 30px;\n  padding: 10px;\n}\nheader p {\n  font-family: \"commissioner-regular\";\n  height: 30px;\n  font-size: 24px;\n  padding: 5px;\n}\n\nnav {\n  width: 100%;\n  height: 35px;\n  display: grid;\n  grid-template-columns: repeat(3, 100px);\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  background-color: #ff785a;\n}\nnav button {\n  font-family: \"commissioner-semibold\";\n  height: 27px;\n  border: none;\n  border-radius: 10px;\n}\nnav button:hover {\n  border: 2px solid #191919;\n}\nnav button:active {\n  transform: translatey(2px);\n}\n\ndiv.welcome {\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  width: 100%;\n  justify-items: center;\n  align-items: center;\n}\ndiv.welcome img.welcomeImg {\n  width: 350px;\n  height: 340px;\n  border-radius: 50%;\n}\ndiv.welcome p {\n  font-family: \"commissioner-regular\";\n  text-align: center;\n  width: 70%;\n  font-size: 20px;\n}\n\nfooter {\n  width: 100%;\n  background-color: #ff785a;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-family: \"commissioner-semibold\";\n}\n\ndiv.menu {\n  height: auto;\n  width: 70vw;\n  max-width: 720px;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  padding: 10px;\n  margin: 10px;\n}\n\ndiv.menuList {\n  max-width: 250px;\n  display: flex;\n  flex-direction: column;\n}\ndiv.menuList h1 {\n  font-family: \"commissioner-semibold\";\n  font-size: 21px;\n  text-align: center;\n}\ndiv.menuList p {\n  font-family: \"commissioner-regular\";\n  font-size: 16px;\n  margin: 3px;\n}\ndiv.menuList img.menuImg {\n  height: 200px;\n  width: 200px;\n  align-self: center;\n}\n\ndiv.contactDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-inline: 20px;\n  height: 350px;\n}\ndiv.contactDiv div {\n  height: 60px;\n}\ndiv.contactDiv .title {\n  font-family: \"commissioner-semibold\";\n}\ndiv.contactDiv .text {\n  font-family: \"commissioner-regular\";\n}\ndiv.contactDiv .superDiv {\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.contactDiv .superTitle {\n  font-family: \"commissioner-semibold\";\n  font-size: 28px;\n  padding: auto;\n  height: 30px;\n}\n\n@media (max-width: 480px) {\n  div.menu {\n    grid-template-columns: 1fr;\n  }\n  body {\n    grid-template-rows: 80px 35px auto 30px;\n  }\n  header {\n    height: 70px;\n    padding: 7px;\n  }\n  header h2 {\n    height: 40px;\n    font-family: \"commissioner-semibold\";\n    font-size: 28px;\n    padding: 10px;\n  }\n  header p {\n    font-family: \"commissioner-regular\";\n    height: 20px;\n    font-size: 18px;\n    padding: 5px;\n  }\n  div.welcome {\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n  }\n  div.welcome img.welcomeImg {\n    width: 230px;\n    height: 230px;\n  }\n  div.welcome p {\n    text-align: center;\n    width: 80%;\n    font-size: 16px;\n    padding: 5px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAOA;EACI,mCAAA;EACA,4CAAA;EACA,gBAAA;AANJ;AASA;EACI,oCAAA;EACA,4CAAA;EACA,gBAAA;AAPJ;AAUA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AARJ;;AAWA;EACI,aAAA;EACA,wCAAA;EACA,cA1BS;EA2BT,yBA5BQ;EA6BR,QAAA;EACA,qBAAA;AARJ;;AAWA;EACI,aAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,yBAxCQ;EAyCR,oCAAA;AARJ;AAUI;EACI,YAAA;EACA,oCAAA;EACA,eAAA;EACA,aAAA;AARR;AAWI;EACI,mCAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AATR;;AAaA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,uBAAA;EACA,QAAA;EACA,yBApEQ;AA0DZ;AAYI;EACI,oCAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AAVR;AAYQ;EACI,yBAAA;AAVZ;AAaQ;EACI,0BAAA;AAXZ;;AAiBA;EACI,aAAA;EACA,2BAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;AAdJ;AAiBI;EACI,YAAA;EACA,aAAA;EACA,kBAAA;AAfR;AAkBI;EACI,mCAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;AAhBR;;AAqBA;EACI,WAAA;EACA,yBAhHQ;EAiHR,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;AAlBJ;;AAqBA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;AAlBJ;;AAqBA;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;AAlBJ;AAoBI;EACI,oCAAA;EACA,eAAA;EACA,kBAAA;AAlBR;AAqBI;EACI,mCAAA;EACA,eAAA;EACA,WAAA;AAnBR;AAsBI;EACI,aAAA;EACA,YAAA;EACA,kBAAA;AApBR;;AAyBA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,oBAAA;EACA,aAAA;AAtBJ;AAwBI;EACI,YAAA;AAtBR;AAyBI;EACI,oCAAA;AAvBR;AA0BI;EACI,mCAAA;AAxBR;AA2BI;EACI,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAzBR;AA4BI;EACI,oCAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;AA1BR;;AAkCA;EACI;IACI,0BAAA;EA/BN;EAkCE;IACI,uCAAA;EAhCN;EAmCE;IACI,YAAA;IACA,YAAA;EAjCN;EAmCM;IACI,YAAA;IACA,oCAAA;IACA,eAAA;IACA,aAAA;EAjCV;EAoCM;IACI,mCAAA;IACA,YAAA;IACA,eAAA;IACA,YAAA;EAlCV;EAsCE;IACI,2BAAA;IACA,uBAAA;IACA,qBAAA;IACA,mBAAA;EApCN;EAsCM;IACI,YAAA;IACA,aAAA;EApCV;EAuCM;IACI,kBAAA;IACA,UAAA;IACA,eAAA;IACA,YAAA;EArCV;AACF","sourcesContent":["$color-900: #ff785a;\r\n$color-800: #ffd25a;\r\n$color-700: #ffaa51;\r\n$text-color: #191919;\r\n\r\n$commissioner-font-path: \"../fonts/\";\r\n\r\n@font-face {\r\n    font-family: \"commissioner-regular\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-Regular.ttf\");\r\n    font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"commissioner-semibold\";\r\n    src: url(\"#{$commissioner-font-path}/Commissioner-SemiBold.ttf\");\r\n    font-weight: 600;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    display: grid;\r\n    grid-template-rows: 120px 35px auto 30px;\r\n    color: $text-color;\r\n    background-color: $color-700;\r\n    gap: 2px;\r\n    justify-items: center;\r\n}\r\n\r\nheader{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 120px;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-content: center;\r\n    background-color: $color-700;\r\n    font-family: 'commissioner-semibold';\r\n\r\n    h2{\r\n        height: 60px;\r\n        font-family:'commissioner-semibold';\r\n        font-size: 30px;\r\n        padding: 10px;\r\n    }\r\n    \r\n    p{  \r\n        font-family: 'commissioner-regular';\r\n        height: 30px;\r\n        font-size: 24px;\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\nnav{\r\n    width: 100%;\r\n    height: 35px;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 100px);\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n    background-color: $color-900;\r\n\r\n    button{\r\n        font-family: 'commissioner-semibold';\r\n        height: 27px;\r\n        border: none;\r\n        border-radius: 10px;\r\n\r\n        &:hover{\r\n            border: 2px solid #191919;\r\n        }\r\n\r\n        &:active{\r\n            transform: translatey(2px);\r\n        }\r\n    }\r\n}\r\n\r\n\r\ndiv.welcome{\r\n    display: grid;\r\n    grid-template-rows: 2fr 1fr;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n\r\n\r\n    img.welcomeImg{\r\n        width: 350px;\r\n        height: 340px;\r\n        border-radius: 50%;\r\n    }\r\n\r\n    p{\r\n        font-family: 'commissioner-regular';\r\n        text-align: center;\r\n        width: 70%;\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n\r\nfooter{\r\n    width: 100%;\r\n    background-color: $color-900;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'commissioner-semibold';\r\n}\r\n\r\ndiv.menu{\r\n    height: auto;\r\n    width: 70vw;\r\n    max-width: 720px; //its the sum of gap, padding, margin, and width of the div.menulist\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\ndiv.menuList{\r\n    max-width: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    h1{\r\n        font-family: 'commissioner-semibold';\r\n        font-size: 21px;\r\n        text-align: center;\r\n    }\r\n\r\n    p{\r\n        font-family: 'commissioner-regular';\r\n        font-size: 16px;\r\n        margin: 3px;\r\n    }\r\n\r\n    img.menuImg{\r\n        height: 200px;\r\n        width: 200px;\r\n        align-self: center;\r\n    }\r\n    \r\n}\r\n\r\ndiv.contactDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-inline: 20px;\r\n    height: 350px;\r\n\r\n    div{\r\n        height: 60px;\r\n    }\r\n\r\n    .title{\r\n        font-family: 'commissioner-semibold';\r\n    }\r\n\r\n    .text{\r\n        font-family: 'commissioner-regular';\r\n    }\r\n\r\n    .superDiv{\r\n        height: 100px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    .superTitle{\r\n        font-family: 'commissioner-semibold';\r\n        font-size: 28px;\r\n        padding: auto;\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n    div.menu{\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    body{\r\n        grid-template-rows: 80px 35px auto 30px;\r\n    }\r\n\r\n    header{\r\n        height: 70px;\r\n        padding: 7px;\r\n    \r\n        h2{\r\n            height: 40px;\r\n            font-family:'commissioner-semibold';\r\n            font-size: 28px;\r\n            padding: 10px;\r\n        }\r\n        \r\n        p{  \r\n            font-family: 'commissioner-regular';\r\n            height: 20px;\r\n            font-size: 18px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n    div.welcome{\r\n        grid-template-rows: 1fr 1fr;\r\n        justify-content: center;   \r\n        justify-items: center;\r\n        align-items: center;\r\n    \r\n        img.welcomeImg{\r\n            width: 230px;\r\n            height: 230px;\r\n        }\r\n    \r\n        p{\r\n            text-align: center;\r\n            width: 80%;\r\n            font-size: 16px;\r\n            padding: 5px;\r\n        }\r\n    }\r\n\r\n\r\n}"],"sourceRoot":""}]);
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
    contact_div.classList.add('contactDiv');

    const address_div = document.createElement('div');
    const address_span = document.createElement('span');
    address_span.textContent = 'Address: '
    address_span.classList.add('title');
    const add_span = document.createElement('span');
    add_span.textContent = 'Earth, Macross city, 4059 N 9th Street'
    add_span.classList.add('text');

    address_div.appendChild(address_span);
    address_div.appendChild(add_span);

    const phone_div = document.createElement('div');
    const phone_span = document.createElement('span');
    phone_span.textContent = 'Phone: '
    phone_span.classList.add('title');
    const ph_span = document.createElement('span');
    ph_span.textContent = '+54-011-2341234'
    ph_span.classList.add('text');

    phone_div.appendChild(phone_span);
    phone_div.appendChild(ph_span);

    const mail_div = document.createElement('div');
    const mail_span = document.createElement('span');
    mail_span.textContent = 'Email: '
    mail_span.classList.add('title');
    const em_span = document.createElement('span');
    em_span.textContent = 'donwulfis@lala.com'
    em_span.classList.add('text');

    mail_div.appendChild(mail_span);
    mail_div.appendChild(em_span);

    const contus_div = document.createElement('div');
    contus_div.classList.add('superDiv');
    const contus_span = document.createElement('span');
    contus_span.textContent = 'Contact Us'
    contus_span.classList.add('superTitle');

    contus_div.appendChild(contus_span);

    contact_div.appendChild(contus_div);
    contact_div.appendChild(address_div);
    contact_div.appendChild(phone_div);
    contact_div.appendChild(mail_div);

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
        main_container.appendChild((0,_js_welcome__WEBPACK_IMPORTED_MODULE_1__["default"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsMkNBQTJDLG9EQUFJO0FBQy9DO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkNBQTJDLHVEQUFPO0FBQ2xEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzc0N2UiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvLy4vc3JjL2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vLi9zcmMvanMvbWVudWxpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9qcy93ZWxjb21lLmpzIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0by10YWtldHdvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RvLXRha2V0d28vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdG8tdGFrZXR3by8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvL0NvbW1pc3Npb25lci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzLy9Db21taXNzaW9uZXItU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMzVweCBhdXRvIDMwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhNTE7XFxuICBnYXA6IDJweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWE1MTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG59XFxuaGVhZGVyIGgyIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbmhlYWRlciBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODVhO1xcbn1cXG5uYXYgYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gIGhlaWdodDogMjdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzE5MTkxOTtcXG59XFxubmF2IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDJweCk7XFxufVxcblxcbmRpdi53ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi53ZWxjb21lIGltZy53ZWxjb21lSW1nIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbmRpdi53ZWxjb21lIHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODVhO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG59XFxuXFxuZGl2Lm1lbnUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmRpdi5tZW51TGlzdCB7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdi5tZW51TGlzdCBoMSB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5tZW51TGlzdCBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcbmRpdi5tZW51TGlzdCBpbWcubWVudUltZyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY29udGFjdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5kaXYuY29udGFjdERpdiBkaXYge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5kaXYuY29udGFjdERpdiAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItc2VtaWJvbGRcXFwiO1xcbn1cXG5kaXYuY29udGFjdERpdiAudGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1yZWd1bGFyXFxcIjtcXG59XFxuZGl2LmNvbnRhY3REaXYgLnN1cGVyRGl2IHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYuY29udGFjdERpdiAuc3VwZXJUaXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1zZW1pYm9sZFxcXCI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBwYWRkaW5nOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIGRpdi5tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDM1cHggYXV0byAzMHB4O1xcbiAgfVxcbiAgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICB9XFxuICBoZWFkZXIgaDIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbiAgaGVhZGVyIHAge1xcbiAgICBmb250LWZhbWlseTogXFxcImNvbW1pc3Npb25lci1yZWd1bGFyXFxcIjtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIGRpdi53ZWxjb21lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgZGl2LndlbGNvbWUgaW1nLndlbGNvbWVJbWcge1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICB9XFxuICBkaXYud2VsY29tZSBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDSSxtQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNBO0VBQ0ksb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FBUEo7QUFVQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQTFCUztFQTJCVCx5QkE1QlE7RUE2QlIsUUFBQTtFQUNBLHFCQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQXhDUTtFQXlDUixvQ0FBQTtBQVJKO0FBVUk7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQVJSO0FBV0k7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVRSOztBQWFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQXBFUTtBQTBEWjtBQVlJO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVlI7QUFZUTtFQUNJLHlCQUFBO0FBVlo7QUFhUTtFQUNJLDBCQUFBO0FBWFo7O0FBaUJBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWlCSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFmUjtBQWtCSTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWhCUjs7QUFxQkE7RUFDSSxXQUFBO0VBQ0EseUJBaEhRO0VBaUhSLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFsQko7O0FBcUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWxCSjs7QUFxQkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWxCSjtBQW9CSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbEJSO0FBcUJJO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQW5CUjtBQXNCSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFwQlI7O0FBeUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUF0Qko7QUF3Qkk7RUFDSSxZQUFBO0FBdEJSO0FBeUJJO0VBQ0ksb0NBQUE7QUF2QlI7QUEwQkk7RUFDSSxtQ0FBQTtBQXhCUjtBQTJCSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXpCUjtBQTRCSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBMUJSOztBQWtDQTtFQUNJO0lBQ0ksMEJBQUE7RUEvQk47RUFrQ0U7SUFDSSx1Q0FBQTtFQWhDTjtFQW1DRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBakNOO0VBbUNNO0lBQ0ksWUFBQTtJQUNBLG9DQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUFqQ1Y7RUFvQ007SUFDSSxtQ0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQWxDVjtFQXNDRTtJQUNJLDJCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0VBcENOO0VBc0NNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFwQ1Y7RUF1Q007SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQXJDVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRjb2xvci05MDA6ICNmZjc4NWE7XFxyXFxuJGNvbG9yLTgwMDogI2ZmZDI1YTtcXHJcXG4kY29sb3ItNzAwOiAjZmZhYTUxO1xcclxcbiR0ZXh0LWNvbG9yOiAjMTkxOTE5O1xcclxcblxcclxcbiRjb21taXNzaW9uZXItZm9udC1wYXRoOiBcXFwiLi4vZm9udHMvXFxcIjtcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjb21taXNzaW9uZXItcmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIjeyRjb21taXNzaW9uZXItZm9udC1wYXRofS9Db21taXNzaW9uZXItUmVndWxhci50dGZcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiY29tbWlzc2lvbmVyLXNlbWlib2xkXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIiN7JGNvbW1pc3Npb25lci1mb250LXBhdGh9L0NvbW1pc3Npb25lci1TZW1pQm9sZC50dGZcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMzVweCBhdXRvIDMwcHg7XFxyXFxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTcwMDtcXHJcXG4gICAgZ2FwOiAycHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci03MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG5cXHJcXG4gICAgaDJ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTonY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIHB7ICBcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXJlZ3VsYXInO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbm5hdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTAwcHgpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci05MDA7XFxyXFxuXFxyXFxuICAgIGJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG4gICAgICAgIGhlaWdodDogMjdweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxOTE5MTk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMnB4KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5kaXYud2VsY29tZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcblxcclxcbiAgICBpbWcud2VsY29tZUltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzQwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXJlZ3VsYXInO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItOTAwO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItc2VtaWJvbGQnO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubWVudXtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogNzB2dztcXHJcXG4gICAgbWF4LXdpZHRoOiA3MjBweDsgLy9pdHMgdGhlIHN1bSBvZiBnYXAsIHBhZGRpbmcsIG1hcmdpbiwgYW5kIHdpZHRoIG9mIHRoZSBkaXYubWVudWxpc3RcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5tZW51TGlzdHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgaDF7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIxcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXJlZ3VsYXInO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nLm1lbnVJbWd7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udGFjdERpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcblxcclxcbiAgICBkaXZ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdGxle1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItc2VtaWJvbGQnO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0e1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjb21taXNzaW9uZXItcmVndWxhcic7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1cGVyRGl2e1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1cGVyVGl0bGV7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2NvbW1pc3Npb25lci1zZW1pYm9sZCc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgICBkaXYubWVudXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJvZHl7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMzVweCBhdXRvIDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBcXHJcXG4gICAgICAgIGgye1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTonY29tbWlzc2lvbmVyLXNlbWlib2xkJztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgcHsgIFxcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY29tbWlzc2lvbmVyLXJlZ3VsYXInO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi53ZWxjb21le1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXFxyXFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGltZy53ZWxjb21lSW1ne1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgIHB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0X2Rpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0RGl2Jyk7XHJcblxyXG4gICAgY29uc3QgYWRkcmVzc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFkZHJlc3Nfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGFkZHJlc3Nfc3Bhbi50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiAnXHJcbiAgICBhZGRyZXNzX3NwYW4uY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIGNvbnN0IGFkZF9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYWRkX3NwYW4udGV4dENvbnRlbnQgPSAnRWFydGgsIE1hY3Jvc3MgY2l0eSwgNDA1OSBOIDl0aCBTdHJlZXQnXHJcbiAgICBhZGRfc3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XHJcblxyXG4gICAgYWRkcmVzc19kaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc19zcGFuKTtcclxuICAgIGFkZHJlc3NfZGl2LmFwcGVuZENoaWxkKGFkZF9zcGFuKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBob25lX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwaG9uZV9zcGFuLnRleHRDb250ZW50ID0gJ1Bob25lOiAnXHJcbiAgICBwaG9uZV9zcGFuLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBwaF9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcGhfc3Bhbi50ZXh0Q29udGVudCA9ICcrNTQtMDExLTIzNDEyMzQnXHJcbiAgICBwaF9zcGFuLmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcclxuXHJcbiAgICBwaG9uZV9kaXYuYXBwZW5kQ2hpbGQocGhvbmVfc3Bhbik7XHJcbiAgICBwaG9uZV9kaXYuYXBwZW5kQ2hpbGQocGhfc3Bhbik7XHJcblxyXG4gICAgY29uc3QgbWFpbF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG1haWxfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1haWxfc3Bhbi50ZXh0Q29udGVudCA9ICdFbWFpbDogJ1xyXG4gICAgbWFpbF9zcGFuLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBlbV9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZW1fc3Bhbi50ZXh0Q29udGVudCA9ICdkb253dWxmaXNAbGFsYS5jb20nXHJcbiAgICBlbV9zcGFuLmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcclxuXHJcbiAgICBtYWlsX2Rpdi5hcHBlbmRDaGlsZChtYWlsX3NwYW4pO1xyXG4gICAgbWFpbF9kaXYuYXBwZW5kQ2hpbGQoZW1fc3Bhbik7XHJcblxyXG4gICAgY29uc3QgY29udHVzX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udHVzX2Rpdi5jbGFzc0xpc3QuYWRkKCdzdXBlckRpdicpO1xyXG4gICAgY29uc3QgY29udHVzX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb250dXNfc3Bhbi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJ1xyXG4gICAgY29udHVzX3NwYW4uY2xhc3NMaXN0LmFkZCgnc3VwZXJUaXRsZScpO1xyXG5cclxuICAgIGNvbnR1c19kaXYuYXBwZW5kQ2hpbGQoY29udHVzX3NwYW4pO1xyXG5cclxuICAgIGNvbnRhY3RfZGl2LmFwcGVuZENoaWxkKGNvbnR1c19kaXYpO1xyXG4gICAgY29udGFjdF9kaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc19kaXYpO1xyXG4gICAgY29udGFjdF9kaXYuYXBwZW5kQ2hpbGQocGhvbmVfZGl2KTtcclxuICAgIGNvbnRhY3RfZGl2LmFwcGVuZENoaWxkKG1haWxfZGl2KTtcclxuXHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0X2Rpdik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRfY29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJpbXBvcnQgZm9vZCBmcm9tIFwiLi9tZW51bGlzdFwiO1xyXG5cclxuY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnRfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZm9vZC5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbmFtZV9mb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbl9mb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlX2Zvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb2RfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZm9vZF9pbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9pbWcvJHtmb29kW2ldWydpbWcnXX1gKTtcclxuICAgICAgICBmb29kX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51SW1nJyk7XHJcblxyXG4gICAgICAgIG5hbWVfZm9vZC50ZXh0Q29udGVudCA9IGZvb2RbaV1bJ25hbWUnXTtcclxuICAgICAgICBkZXNjcmlwdGlvbl9mb29kLmlubmVySFRNTCA9ICAnPHN0cm9uZz5JbmdyZWRpZW50czogPC9zdHJvbmc+JyArIGZvb2RbaV1bJ2luZ3JlZGllbnRzJ107XHJcbiAgICAgICAgcHJpY2VfZm9vZC5pbm5lckhUTUwgPSAnPHN0cm9uZz5QcmljZTo8L3N0cm9uZz4gJCcgKyBmb29kW2ldWydwcmljZSddO1xyXG5cclxuICAgICAgICBtZW51X2Rpdi5hcHBlbmRDaGlsZChmb29kX2ltZyk7XHJcbiAgICAgICAgbWVudV9kaXYuYXBwZW5kQ2hpbGQobmFtZV9mb29kKTtcclxuICAgICAgICBtZW51X2Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9mb29kKTtcclxuICAgICAgICBtZW51X2Rpdi5hcHBlbmRDaGlsZChwcmljZV9mb29kKTtcclxuXHJcbiAgICAgICAgbWVudV9kaXYuY2xhc3NMaXN0LmFkZCgnbWVudUxpc3QnKTtcclxuICAgICAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51X2Rpdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRfY29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJcclxubGV0IGZvb2QgPSBbXHJcbiAgICB7bmFtZTogJ0Zvb2QxJywgaW5ncmVkaWVudHM6ICdpbmcxLCBpbmcyIGluZzEsIGluZzJpbmcxLCBpbmcyICcsIHByaWNlOiAnMTIzLjMyJywgaW1nOiAnZm9vZG9uZS5qcGcnfSxcclxuICAgIHtuYW1lOiAnRm9vZDInLCBpbmdyZWRpZW50czogJ2luZzEsIGluZzIgaW5nMSwgaW5nMmluZzEsIGluZzIgJywgcHJpY2U6ICcyMzQuNTQnLCBpbWc6ICdmb29kdHdvLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kMycsIGluZ3JlZGllbnRzOiAnaW5nNSwgaW5nNicsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNCcsIGluZ3JlZGllbnRzOiAnaW5nNywgaW5nOCcsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNScsIGluZ3JlZGllbnRzOiAnaW5nNSwgaW5nNicsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNicsIGluZ3JlZGllbnRzOiAnaW5nNywgaW5nOCcsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kNycsIGluZ3JlZGllbnRzOiAnaW5nNSwgaW5nNicsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9LFxyXG4gICAge25hbWU6ICdGb29kOCcsIGluZ3JlZGllbnRzOiAnaW5nNywgaW5nOCcsIHByaWNlOiAnMjMxLjIzJywgaW1nOiAnZm9vZHRocmVlLmpwZyd9XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb29kOyIsImNvbnN0IHdlbGNvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xyXG5cclxuICAgIGNvbnN0IHBvcnRhbF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHBvcnRhbF9pbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvd2VsY29tZS5qcGcnKTtcclxuICAgIHBvcnRhbF9pbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnVHdvIHBlb3BsZSBjb29raW5nJylcclxuICAgIHBvcnRhbF9pbWcuY2xhc3NMaXN0LmFkZCgnd2VsY29tZUltZycpO1xyXG5cclxuXHJcbiAgICBjb25zdCB3ZWxjb21lX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcF93ZWxjb21lX21ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBfd2VsY29tZV9tZ3MudGV4dENvbnRlbnQgPSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBhYyBsaWJlcm8gc2VtcGVyLCB2b2x1dHBhdCB0b3J0b3IgaWQsIGFsaXF1ZXQgbGFjdXMuIFByYWVzZW50IGVsZW1lbnR1bSBjb252YWxsaXMgbG9yZW0gaWQgaW50ZXJkdW0uIFByYWVzZW50IHZpdGFlIHB1cnVzIGF1Z3VlLiBGdXNjZSBlZmZpY2l0dXIgb2RpbyBzaXQgYW1ldCBlc3QgY3Vyc3VzLCBxdWlzIGZpbmlidXMgZG9sb3IgbWFsZXN1YWRhLiBQZWxsZW50ZXNxdWUgaWQgZXJvcyByaG9uY3VzIGlwc3VtIGxhb3JlZXQgZGFwaWJ1cyBzaXQgYW1ldCBzaXQgYW1ldCBuZXF1ZS4nO1xyXG4gICAgXHJcbiAgICBjb250ZW50X2NvbnRhaW5lci5hcHBlbmRDaGlsZChwb3J0YWxfaW1nKTtcclxuICAgIGNvbnRlbnRfY29udGFpbmVyLmFwcGVuZENoaWxkKHBfd2VsY29tZV9tZ3MpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50X2NvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSBcIi4vanMvd2VsY29tZVwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9qcy9tZW51XCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2pzL2NvbnRhY3RcIjtcclxuXHJcbihmdW5jdGlvbiB1bkNoYW5nZSgpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCcwJyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcl90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyX3N1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBoZWFkZXJfdGl0bGUudGV4dENvbnRlbnQgPSAnRG9uIFd1bGZpcyBSZXN0byc7XHJcbiAgICAgICAgaGVhZGVyX3N1YnRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IGZvb2Qgb2YgdGhlIHdvcmxkISEhJztcclxuXHJcbiAgICAgICAgaGVhZGVyX2NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJfdGl0bGUpO1xyXG4gICAgICAgIGhlYWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX3N1YnRpdGxlKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIGNvbnN0IG5hdl93ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2X21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBuYXZfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBuYXZfd2VsY29tZS5jbGFzc0xpc3QuYWRkKCdidG5XZWxjb21lJyk7XHJcbiAgICAgICAgbmF2X21lbnUuY2xhc3NMaXN0LmFkZCgnYnRuTWVudScpO1xyXG4gICAgICAgIG5hdl9jb250YWN0LmNsYXNzTGlzdC5hZGQoJ2J0bkNvbnRhY3QnKTtcclxuXHJcbiAgICAgICAgbmF2X3dlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSc7XHJcbiAgICAgICAgbmF2X21lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICAgICAgbmF2X2NvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG4gICAgICAgIG5hdl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmF2X3dlbGNvbWUpO1xyXG4gICAgICAgIG5hdl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmF2X21lbnUpO1xyXG4gICAgICAgIG5hdl9jb250YWluZXIuYXBwZW5kQ2hpbGQobmF2X2NvbnRhY3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2X2NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFpbiA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG1haW5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWUoKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluX2NvbnRhaW5lcik7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBmb290ZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgZm9vdGVyX2NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IHN0dWZmXCJcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJfY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidG5OYXYgPSAoKSA9PntcclxuICAgICAgICBsZXQgbmF2X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG4gICAgICAgIGxldCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbiAgICAgICAgbmF2X2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdidG5XZWxjb21lJyl7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluX2NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMScpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ2J0bk1lbnUnKXtcclxuICAgICAgICAgICAgICAgIG1haW5fY29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5fY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZW51Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAnYnRuQ29udGFjdCcpe1xyXG4gICAgICAgICAgICAgICAgbWFpbl9jb250YWluZXIucmVtb3ZlQ2hpbGQobWFpbl9jb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBtYWluX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCcwJyk7XHJcbiAgICBoZWFkZXIoKTtcclxuICAgIG5hdigpO1xyXG4gICAgbWFpbigpO1xyXG4gICAgZm9vdGVyKCk7XHJcbiAgICBidG5OYXYoKTtcclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=