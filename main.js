/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/black-background.jpg */ "./src/images/black-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Roboto:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
} 

/*HEADER*/
.header {
    height: 150px;
    color: white;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.logo {
    height: 150px;
}
.nav {
    display: flex;
    font-size: 1.5em;
    justify-content: space-around;
    gap: 50px;
}
.nav > a {
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
}
.nav > a:hover {
    transform: scale(1.3);
}

/*Background on every page*/
.background,
.landing-section {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100% 1000px;
    background-position: center;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
}


/*Home page*/
.landing-section {
    gap: 10px;
}
.landing-image {
    width: auto;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)
}
.landing-section-button {
    cursor: pointer;
    border-radius: 3px;
    width: 100px;
    border: none;
    height: 40px;
    background: #F13223;
    color: white;
}
.welcome-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}
.menu-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    color: white;
}
.menu-dish-image {
    width: 250px;
    height: auto;
}
.menu-text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contact-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 50px;
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    height: 100px;
    color: white;
    gap: 5px;
}




.menu-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 48px;
    color: white;
    margin: 0;
}

.about-page {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 500px;
    color: white;
    text-align: justify;
    text-justify: inter-word;
}

.image-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    margin-top: 20px;
}

.slide {
    width: 700px;
    height: auto;
}

.previous,
.next {
    cursor: pointer;
    background: transparent;
    color: white;
    border: none;
    font-size: 32px;
}

.previous:hover,
.next:hover {
    color: lightgray;
}

.menu-image {
    width: 200px;
    height: 300px;
}

.menu-image:hover {
    opacity: 0.6;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,qCAAqC;AACzC;;AAEA,SAAS;AACT;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,6BAA6B;IAC7B,SAAS;AACb;AACA;IACI,eAAe;IACf,sCAAsC;AAC1C;AACA;IACI,qBAAqB;AACzB;;AAEA,2BAA2B;AAC3B;;IAEI,mDAA8C;IAC9C,4BAA4B;IAC5B,2BAA2B;IAC3B,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;;AAGA,YAAY;AACZ;IACI,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB;AACJ;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,QAAQ;AACZ;;;;;AAKA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Roboto:wght@300&display=swap');\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n} \n\n/*HEADER*/\n.header {\n    height: 150px;\n    color: white;\n    background: black;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n.logo {\n    height: 150px;\n}\n.nav {\n    display: flex;\n    font-size: 1.5em;\n    justify-content: space-around;\n    gap: 50px;\n}\n.nav > a {\n    cursor: pointer;\n    transition: transform 0.5s ease-in-out;\n}\n.nav > a:hover {\n    transform: scale(1.3);\n}\n\n/*Background on every page*/\n.background,\n.landing-section {\n    background: url(./images/black-background.jpg);\n    background-size: 100% 1000px;\n    background-position: center;\n    height: 1000px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n/*Home page*/\n.landing-section {\n    gap: 10px;\n}\n.landing-image {\n    width: auto;\n    height: 300px;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)\n}\n.landing-section-button {\n    cursor: pointer;\n    border-radius: 3px;\n    width: 100px;\n    border: none;\n    height: 40px;\n    background: #F13223;\n    color: white;\n}\n.welcome-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: white;\n}\n.menu-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n    color: white;\n}\n.menu-dish-image {\n    width: 250px;\n    height: auto;\n}\n.menu-text-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contact-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    padding: 50px;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: black;\n    height: 100px;\n    color: white;\n    gap: 5px;\n}\n\n\n\n\n.menu-heading {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 48px;\n    color: white;\n    margin: 0;\n}\n\n.about-page {\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n    width: 500px;\n    color: white;\n    text-align: justify;\n    text-justify: inter-word;\n}\n\n.image-slider {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 800px;\n    margin-top: 20px;\n}\n\n.slide {\n    width: 700px;\n    height: auto;\n}\n\n.previous,\n.next {\n    cursor: pointer;\n    background: transparent;\n    color: white;\n    border: none;\n    font-size: 32px;\n}\n\n.previous:hover,\n.next:hover {\n    color: lightgray;\n}\n\n.menu-image {\n    width: 200px;\n    height: 300px;\n}\n\n.menu-image:hover {\n    opacity: 0.6;\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAbout)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_about_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/about-1.jpg */ "./src/images/about-1.jpg");
/* harmony import */ var _images_about_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/about-2.jpg */ "./src/images/about-2.jpg");
/* harmony import */ var _images_about_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/about-3.jpg */ "./src/images/about-3.jpg");
/* harmony import */ var _images_about_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/about-4.jpg */ "./src/images/about-4.jpg");
/* harmony import */ var _images_about_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/about-5.jpg */ "./src/images/about-5.jpg");








function createAbout() {
    const content = document.getElementById("content")

    const background = document.createElement("div")
    background.classList.add("background")

    const aboutPage = document.createElement("div")
    aboutPage.classList.add("about-page")

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "ABOUT SAKURA";
    menuHeading.classList.add("menu-heading")

    const shortStory = `
    <p>Once upon a time in a bustling city, there was a hidden gem called Sakura Asian Restaurant. With a touch of magic in its recipes, Sakura blossomed into a place where flavors danced and aromas told stories. Our chefs, inspired by the vibrant streets of Asia, crafted dishes that brought smiles to faces.</p>

    <p>At Sakura, every meal is a journey. From sizzling stir-fries to delicate sushi rolls, each dish tells a tale of tradition and passion. We believe in creating a warm haven where friends and families can gather, share laughter, and indulge in the joy of good food.</p>
    
    <p>Step into Sakura, where the heart of Asia meets the spirit of community. Join us on this flavorful adventure, and let the essence of our story become a part of yours. Welcome to Sakura, where every bite is a chapter in the tale of our delightful journey.</p>`


    const imageSlider = document.createElement("div")
    imageSlider.classList.add("image-slider")

    const imageContainer = document.createElement("div")

    const images = [_images_about_1_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_about_2_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_about_3_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_about_4_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_about_5_jpg__WEBPACK_IMPORTED_MODULE_5__]
    images.forEach((path) => {
        const imgElement = document.createElement("img");
        imgElement.src = path;
        imgElement.alt = "About Us Image";
        imgElement.classList.add("slide")
        imageContainer.appendChild(imgElement)
    } )
    

    const nextButton = document.createElement("button")
    nextButton.textContent = ">"
    nextButton.classList.add("next")
    nextButton.addEventListener("click", () => changeImage(1))
    const previousButton = document.createElement("button")
    previousButton.textContent = "<"
    previousButton.classList.add("previous")
    previousButton.addEventListener("click", () => changeImage(-1))

    imageSlider.appendChild(previousButton)
    imageSlider.appendChild(imageContainer)
    imageSlider.appendChild(nextButton)

    aboutPage.appendChild(menuHeading)
    aboutPage.innerHTML += shortStory;
    background.appendChild(aboutPage)
    background.appendChild(imageSlider)

    content.appendChild(background)

    let slideIndex = 0;
    showImage(slideIndex)

    function changeImage(n) {
        showImage(slideIndex += n)
    }

    function showImage(n) {
        const slides = document.querySelectorAll(".slide");
        slideIndex = n;
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1
        }
        if (slideIndex > slides.length - 1) {
            slideIndex = 0
        }

        slides[slideIndex].style.display = "block"
    }

}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createContact() {
    const content = document.getElementById("content")

    const background = document.createElement("div")
    background.classList.add("background")

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("about-page")

    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "CONTACT US";
    contactHeading.classList.add("menu-heading")

    const contactInfo = `
    <h4>WORKING TIME:</h4> 
    <p>Monday - Thursday: 11:00 - 23:00</p>
    <p>Friday - Sunday : 11:00 - 00:00</p>

    <h4>PHONE:</4>
    <p>+12 345 6789 </p>

    <h4>LOCATION:</h4>
    <p>Bamboo Lane 35</p>`


    contactDiv.appendChild(contactHeading)
    contactDiv.innerHTML += contactInfo
    background.appendChild(contactDiv)
    content.appendChild(background)

}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createFooter() {
    const content = document.getElementById("content")

    const footer = document.createElement("div")
    footer.classList.add("footer")
    footer.textContent = "Developed by " 

    const githubName = document.createElement("a");
    githubName.textContent = "Stjepan1999"
    githubName.href = "https://github.com/Stjepan1999"
    githubName.target = "_blank"

    const githubRepository = document.createElement("a");
    githubRepository.textContent = "Source code";
    githubRepository.href = "https://github.com/Stjepan1999/restaurant-page"
    githubRepository.target = "_blank"

    footer.appendChild(githubName);
    footer.appendChild(githubRepository);
    content.appendChild(footer)
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");



function createHeader() {
    const content = document.getElementById("content")

    const header = document.createElement("div");
    header.classList.add("header")

    const logo = document.createElement("img");
    logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__
    logo.classList.add("logo")

    const nav = document.createElement("div");
    nav.classList.add("nav")

    const home = document.createElement("a");
    home.textContent = "HOME"

    const menu = document.createElement("a");
    menu.textContent = "MENU"

    const about = document.createElement("a");
    about.textContent = "ABOUT US"

    const contact = document.createElement("a");
    contact.textContent = "CONTACT"


    header.appendChild(logo)
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(about)
    nav.appendChild(contact)
    header.appendChild(nav)
    content.appendChild(header)
}

/***/ }),

/***/ "./src/main-section.js":
/*!*****************************!*\
  !*** ./src/main-section.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_about_3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/about-3.jpg */ "./src/images/about-3.jpg");



function createMain() {
    const content = document.getElementById("content");

    const landingSection = document.createElement("div")
    landingSection.classList.add("landing-section")

    //Welcome section
    const welcomeSection = document.createElement("div");
    welcomeSection.classList.add("welcome-section");

    const welcomeTextHeading = document.createElement("h1");
    welcomeTextHeading.textContent = "WELCOME TO SAKURA";

    const welcomeTextParagraph = document.createElement("p")
    welcomeTextParagraph.textContent = "A warm place with tasty food for you and your friends."

    const landingImage = document.createElement("img");
    landingImage.src = _images_about_3_jpg__WEBPACK_IMPORTED_MODULE_1__;
    landingImage.classList.add("landing-image");

    //Menu section
    const menuSection = document.createElement("div")
    menuSection.classList.add("menu-section")

    const menuTextSection = document.createElement("div")
    menuTextSection.classList.add("menu-text-section")

    const menuSectionHeading = document.createElement("h1");
    menuSectionHeading.textContent = "MENU"

    const menuSectionParagraph = document.createElement("p");
    menuSectionParagraph.textContent = "Experience the art of Asian culinary mastery with our menu.";

    const menuButton = document.createElement("button");
    menuButton.textContent = "SEE OUR MENU";
    menuButton.classList.add("landing-section-button")
 


    //Contact section
    const contactSection = document.createElement("div");
    contactSection.classList.add("contact-section");

    const contactSectionHeading = document.createElement("h1");
    contactSectionHeading.textContent = "CONTACT US";

    const contactSectionLocation = document.createElement("p");
    contactSectionLocation.textContent = "Bamboo Lane 35";

    const contactSectionNumber = document.createElement("p");
    contactSectionNumber.textContent = "+12 345 6789";


    welcomeSection.appendChild(welcomeTextHeading)
    welcomeSection.appendChild(welcomeTextParagraph)
    welcomeSection.appendChild(landingImage)

    menuTextSection.appendChild(menuSectionHeading)
    menuTextSection.appendChild(menuSectionParagraph)
    menuTextSection.appendChild(menuButton)

    menuSection.appendChild(menuTextSection)

    contactSection.appendChild(contactSectionHeading)
    contactSection.appendChild(contactSectionLocation);
    contactSection.appendChild(contactSectionNumber)


    landingSection.appendChild(welcomeSection)
    landingSection.appendChild(menuSection)
    landingSection.appendChild(contactSection)

    content.appendChild(landingSection)
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_dish_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dish-1.jpg */ "./src/images/dish-1.jpg");
/* harmony import */ var _images_dish_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dish-2.jpg */ "./src/images/dish-2.jpg");





function createMenu() {
    const content = document.getElementById("content")

    const menu = document.createElement("div")
    menu.classList.add("background")

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "SAKURA MENU";
    menuHeading.classList.add("menu-heading");
    menu.appendChild(menuHeading);

    let menuImages = [_images_dish_1_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_dish_2_jpg__WEBPACK_IMPORTED_MODULE_2__];

    menuImages.forEach((path) => {
        const dishImage = document.createElement("img");
        dishImage.src = path;
        dishImage.classList.add("menu-image");
        menu.appendChild(dishImage);
    })


    
    content.appendChild(menu)

}

/***/ }),

/***/ "./src/images/about-1.jpg":
/*!********************************!*\
  !*** ./src/images/about-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02c29e95f4175b29c6b3.jpg";

/***/ }),

/***/ "./src/images/about-2.jpg":
/*!********************************!*\
  !*** ./src/images/about-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1323060e42c7983cecda.jpg";

/***/ }),

/***/ "./src/images/about-3.jpg":
/*!********************************!*\
  !*** ./src/images/about-3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84d01c558378d4b447e7.jpg";

/***/ }),

/***/ "./src/images/about-4.jpg":
/*!********************************!*\
  !*** ./src/images/about-4.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efe52b09e8bfe1bd42c8.jpg";

/***/ }),

/***/ "./src/images/about-5.jpg":
/*!********************************!*\
  !*** ./src/images/about-5.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efb6135600e75f31ce03.jpg";

/***/ }),

/***/ "./src/images/black-background.jpg":
/*!*****************************************!*\
  !*** ./src/images/black-background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7d6c8c96bf3ff1c878d.jpg";

/***/ }),

/***/ "./src/images/dish-1.jpg":
/*!*******************************!*\
  !*** ./src/images/dish-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb4428413c1fffc459ff.jpg";

/***/ }),

/***/ "./src/images/dish-2.jpg":
/*!*******************************!*\
  !*** ./src/images/dish-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d73e322a6f2318d30e0.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae8b9807b69d802cf645.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _main_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-section.js */ "./src/main-section.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");








const content = document.getElementById("content");

function home() {
    content.innerHTML = "";
    (0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_main_section_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}


function menu() {
    content.innerHTML = ""
    ;(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function about() {
    content.innerHTML = "";
    (0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function contact() {
    content.innerHTML = "";
    (0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "HOME") home();
    if (target === "MENU" || target === "SEE OUR MENU") menu();
    if (target === "ABOUT US") about();
    if (target === "CONTACT") contact();
  });


home()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsSUFBSSx1REFBWTtBQUNoQixJQUFJLG9EQUFVO0FBQ2QsSUFBSSxzREFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBWTtBQUNoQixJQUFJLHFEQUFXO0FBQ2YsSUFBSSxzREFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBWTtBQUNoQixJQUFJLHVEQUFhO0FBQ2pCLElBQUksc0RBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi1zZWN0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9ibGFjay1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59IFxuXG4vKkhFQURFUiovXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cbi5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBnYXA6IDUwcHg7XG59XG4ubmF2ID4gYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm5hdiA+IGE6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLypCYWNrZ3JvdW5kIG9uIGV2ZXJ5IHBhZ2UqL1xuLmJhY2tncm91bmQsXG4ubGFuZGluZy1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLypIb21lIHBhZ2UqL1xuLmxhbmRpbmctc2VjdGlvbiB7XG4gICAgZ2FwOiAxMHB4O1xufVxuLmxhbmRpbmctaW1hZ2Uge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KVxufVxuLmxhbmRpbmctc2VjdGlvbi1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI0YxMzIyMztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ud2VsY29tZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubWVudS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZW51LWRpc2gtaW1hZ2Uge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4ubWVudS10ZXh0LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3Qtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBnYXA6IDVweDtcbn1cblxuXG5cblxuLm1lbnUtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hYm91dC1wYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cblxuLmltYWdlLXNsaWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2xpZGUge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5wcmV2aW91cyxcbi5uZXh0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5wcmV2aW91czpob3Zlcixcbi5uZXh0OmhvdmVyIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubWVudS1pbWFnZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5tZW51LWltYWdlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjY7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNDQUFzQztBQUMxQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjs7SUFFSSxtREFBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7OztBQUdBLFlBQVk7QUFDWjtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0FBQ1o7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn0gXFxuXFxuLypIRUFERVIqL1xcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogNTBweDtcXG59XFxuLm5hdiA+IGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubmF2ID4gYTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLypCYWNrZ3JvdW5kIG9uIGV2ZXJ5IHBhZ2UqL1xcbi5iYWNrZ3JvdW5kLFxcbi5sYW5kaW5nLXNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvYmxhY2stYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4vKkhvbWUgcGFnZSovXFxuLmxhbmRpbmctc2VjdGlvbiB7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmxhbmRpbmctaW1hZ2Uge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSlcXG59XFxuLmxhbmRpbmctc2VjdGlvbi1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogI0YxMzIyMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ud2VsY29tZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1lbnUtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1lbnUtZGlzaC1pbWFnZSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubWVudS10ZXh0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcblxcblxcblxcbi5tZW51LWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWJvdXQtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcXG59XFxuXFxuLmltYWdlLXNsaWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5zbGlkZSB7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJldmlvdXMsXFxuLm5leHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ucHJldmlvdXM6aG92ZXIsXFxuLm5leHQ6aG92ZXIge1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubWVudS1pbWFnZSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBpbWFnZU9uZSBmcm9tICcuL2ltYWdlcy9hYm91dC0xLmpwZydcbmltcG9ydCBpbWFnZVR3byBmcm9tICcuL2ltYWdlcy9hYm91dC0yLmpwZydcbmltcG9ydCBpbWFnZVRocmVlIGZyb20gJy4vaW1hZ2VzL2Fib3V0LTMuanBnJ1xuaW1wb3J0IGltYWdlRm91ciBmcm9tICcuL2ltYWdlcy9hYm91dC00LmpwZydcbmltcG9ydCBpbWFnZUZpdmUgZnJvbSAnLi9pbWFnZXMvYWJvdXQtNS5qcGcnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpXG5cbiAgICBjb25zdCBhYm91dFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYWJvdXRQYWdlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1wYWdlXCIpXG5cbiAgICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9IFwiQUJPVVQgU0FLVVJBXCI7XG4gICAgbWVudUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGluZ1wiKVxuXG4gICAgY29uc3Qgc2hvcnRTdG9yeSA9IGBcbiAgICA8cD5PbmNlIHVwb24gYSB0aW1lIGluIGEgYnVzdGxpbmcgY2l0eSwgdGhlcmUgd2FzIGEgaGlkZGVuIGdlbSBjYWxsZWQgU2FrdXJhIEFzaWFuIFJlc3RhdXJhbnQuIFdpdGggYSB0b3VjaCBvZiBtYWdpYyBpbiBpdHMgcmVjaXBlcywgU2FrdXJhIGJsb3Nzb21lZCBpbnRvIGEgcGxhY2Ugd2hlcmUgZmxhdm9ycyBkYW5jZWQgYW5kIGFyb21hcyB0b2xkIHN0b3JpZXMuIE91ciBjaGVmcywgaW5zcGlyZWQgYnkgdGhlIHZpYnJhbnQgc3RyZWV0cyBvZiBBc2lhLCBjcmFmdGVkIGRpc2hlcyB0aGF0IGJyb3VnaHQgc21pbGVzIHRvIGZhY2VzLjwvcD5cblxuICAgIDxwPkF0IFNha3VyYSwgZXZlcnkgbWVhbCBpcyBhIGpvdXJuZXkuIEZyb20gc2l6emxpbmcgc3Rpci1mcmllcyB0byBkZWxpY2F0ZSBzdXNoaSByb2xscywgZWFjaCBkaXNoIHRlbGxzIGEgdGFsZSBvZiB0cmFkaXRpb24gYW5kIHBhc3Npb24uIFdlIGJlbGlldmUgaW4gY3JlYXRpbmcgYSB3YXJtIGhhdmVuIHdoZXJlIGZyaWVuZHMgYW5kIGZhbWlsaWVzIGNhbiBnYXRoZXIsIHNoYXJlIGxhdWdodGVyLCBhbmQgaW5kdWxnZSBpbiB0aGUgam95IG9mIGdvb2QgZm9vZC48L3A+XG4gICAgXG4gICAgPHA+U3RlcCBpbnRvIFNha3VyYSwgd2hlcmUgdGhlIGhlYXJ0IG9mIEFzaWEgbWVldHMgdGhlIHNwaXJpdCBvZiBjb21tdW5pdHkuIEpvaW4gdXMgb24gdGhpcyBmbGF2b3JmdWwgYWR2ZW50dXJlLCBhbmQgbGV0IHRoZSBlc3NlbmNlIG9mIG91ciBzdG9yeSBiZWNvbWUgYSBwYXJ0IG9mIHlvdXJzLiBXZWxjb21lIHRvIFNha3VyYSwgd2hlcmUgZXZlcnkgYml0ZSBpcyBhIGNoYXB0ZXIgaW4gdGhlIHRhbGUgb2Ygb3VyIGRlbGlnaHRmdWwgam91cm5leS48L3A+YFxuXG5cbiAgICBjb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbWFnZVNsaWRlci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2Utc2xpZGVyXCIpXG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGNvbnN0IGltYWdlcyA9IFtpbWFnZU9uZSwgaW1hZ2VUd28sIGltYWdlVGhyZWUsIGltYWdlRm91ciwgaW1hZ2VGaXZlXVxuICAgIGltYWdlcy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWdFbGVtZW50LnNyYyA9IHBhdGg7XG4gICAgICAgIGltZ0VsZW1lbnQuYWx0ID0gXCJBYm91dCBVcyBJbWFnZVwiO1xuICAgICAgICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzbGlkZVwiKVxuICAgICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KVxuICAgIH0gKVxuICAgIFxuXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBuZXh0QnV0dG9uLnRleHRDb250ZW50ID0gXCI+XCJcbiAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXh0XCIpXG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlSW1hZ2UoMSkpXG4gICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgcHJldmlvdXNCdXR0b24udGV4dENvbnRlbnQgPSBcIjxcIlxuICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcmV2aW91c1wiKVxuICAgIHByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjaGFuZ2VJbWFnZSgtMSkpXG5cbiAgICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChwcmV2aW91c0J1dHRvbilcbiAgICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcilcbiAgICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKVxuXG4gICAgYWJvdXRQYWdlLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKVxuICAgIGFib3V0UGFnZS5pbm5lckhUTUwgKz0gc2hvcnRTdG9yeTtcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGFib3V0UGFnZSlcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGltYWdlU2xpZGVyKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKVxuXG4gICAgbGV0IHNsaWRlSW5kZXggPSAwO1xuICAgIHNob3dJbWFnZShzbGlkZUluZGV4KVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlSW1hZ2Uobikge1xuICAgICAgICBzaG93SW1hZ2Uoc2xpZGVJbmRleCArPSBuKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dJbWFnZShuKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIik7XG4gICAgICAgIHNsaWRlSW5kZXggPSBuO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2xpZGVJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMVxuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZUluZGV4ID4gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSAwXG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cblxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpXG5cbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1wYWdlXCIpXG5cbiAgICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ09OVEFDVCBVU1wiO1xuICAgIGNvbnRhY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlYWRpbmdcIilcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gYFxuICAgIDxoND5XT1JLSU5HIFRJTUU6PC9oND4gXG4gICAgPHA+TW9uZGF5IC0gVGh1cnNkYXk6IDExOjAwIC0gMjM6MDA8L3A+XG4gICAgPHA+RnJpZGF5IC0gU3VuZGF5IDogMTE6MDAgLSAwMDowMDwvcD5cblxuICAgIDxoND5QSE9ORTo8LzQ+XG4gICAgPHA+KzEyIDM0NSA2Nzg5IDwvcD5cblxuICAgIDxoND5MT0NBVElPTjo8L2g0PlxuICAgIDxwPkJhbWJvbyBMYW5lIDM1PC9wPmBcblxuXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZylcbiAgICBjb250YWN0RGl2LmlubmVySFRNTCArPSBjb250YWN0SW5mb1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoY29udGFjdERpdilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhY2tncm91bmQpXG5cbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKVxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5IFwiIFxuXG4gICAgY29uc3QgZ2l0aHViTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGdpdGh1Yk5hbWUudGV4dENvbnRlbnQgPSBcIlN0amVwYW4xOTk5XCJcbiAgICBnaXRodWJOYW1lLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TdGplcGFuMTk5OVwiXG4gICAgZ2l0aHViTmFtZS50YXJnZXQgPSBcIl9ibGFua1wiXG5cbiAgICBjb25zdCBnaXRodWJSZXBvc2l0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2l0aHViUmVwb3NpdG9yeS50ZXh0Q29udGVudCA9IFwiU291cmNlIGNvZGVcIjtcbiAgICBnaXRodWJSZXBvc2l0b3J5LmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TdGplcGFuMTk5OS9yZXN0YXVyYW50LXBhZ2VcIlxuICAgIGdpdGh1YlJlcG9zaXRvcnkudGFyZ2V0ID0gXCJfYmxhbmtcIlxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1Yk5hbWUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJSZXBvc2l0b3J5KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcilcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ28uc3JjID0gbG9nb0ltYWdlXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKVxuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIlxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIlxuXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhYm91dC50ZXh0Q29udGVudCA9IFwiQUJPVVQgVVNcIlxuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIlxuXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSlcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXQpXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCByZXN0YXVyYW50SW1hZ2UgZnJvbSAnLi9pbWFnZXMvYWJvdXQtMy5qcGcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGxhbmRpbmdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGxhbmRpbmdTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nLXNlY3Rpb25cIilcblxuICAgIC8vV2VsY29tZSBzZWN0aW9uXG4gICAgY29uc3Qgd2VsY29tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlbGNvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCB3ZWxjb21lVGV4dEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgd2VsY29tZVRleHRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJXRUxDT01FIFRPIFNBS1VSQVwiO1xuXG4gICAgY29uc3Qgd2VsY29tZVRleHRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHdlbGNvbWVUZXh0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJBIHdhcm0gcGxhY2Ugd2l0aCB0YXN0eSBmb29kIGZvciB5b3UgYW5kIHlvdXIgZnJpZW5kcy5cIlxuXG4gICAgY29uc3QgbGFuZGluZ0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsYW5kaW5nSW1hZ2Uuc3JjID0gcmVzdGF1cmFudEltYWdlO1xuICAgIGxhbmRpbmdJbWFnZS5jbGFzc0xpc3QuYWRkKFwibGFuZGluZy1pbWFnZVwiKTtcblxuICAgIC8vTWVudSBzZWN0aW9uXG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKVxuXG4gICAgY29uc3QgbWVudVRleHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnVUZXh0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudS10ZXh0LXNlY3Rpb25cIilcblxuICAgIGNvbnN0IG1lbnVTZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51U2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1FTlVcIlxuXG4gICAgY29uc3QgbWVudVNlY3Rpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51U2VjdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiRXhwZXJpZW5jZSB0aGUgYXJ0IG9mIEFzaWFuIGN1bGluYXJ5IG1hc3Rlcnkgd2l0aCBvdXIgbWVudS5cIjtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNFRSBPVVIgTUVOVVwiO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxhbmRpbmctc2VjdGlvbi1idXR0b25cIilcbiBcblxuXG4gICAgLy9Db250YWN0IHNlY3Rpb25cbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtc2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250YWN0U2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0U2VjdGlvbkxvY2F0aW9uLnRleHRDb250ZW50ID0gXCJCYW1ib28gTGFuZSAzNVwiO1xuXG4gICAgY29uc3QgY29udGFjdFNlY3Rpb25OdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0U2VjdGlvbk51bWJlci50ZXh0Q29udGVudCA9IFwiKzEyIDM0NSA2Nzg5XCI7XG5cblxuICAgIHdlbGNvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0SGVhZGluZylcbiAgICB3ZWxjb21lU2VjdGlvbi5hcHBlbmRDaGlsZCh3ZWxjb21lVGV4dFBhcmFncmFwaClcbiAgICB3ZWxjb21lU2VjdGlvbi5hcHBlbmRDaGlsZChsYW5kaW5nSW1hZ2UpXG5cbiAgICBtZW51VGV4dFNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVNlY3Rpb25IZWFkaW5nKVxuICAgIG1lbnVUZXh0U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51U2VjdGlvblBhcmFncmFwaClcbiAgICBtZW51VGV4dFNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcblxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVUZXh0U2VjdGlvbilcblxuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uSGVhZGluZylcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbkxvY2F0aW9uKTtcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbk51bWJlcilcblxuXG4gICAgbGFuZGluZ1NlY3Rpb24uYXBwZW5kQ2hpbGQod2VsY29tZVNlY3Rpb24pXG4gICAgbGFuZGluZ1NlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pXG4gICAgbGFuZGluZ1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxhbmRpbmdTZWN0aW9uKVxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgZGlzaE9uZSBmcm9tICcuL2ltYWdlcy9kaXNoLTEuanBnJ1xuaW1wb3J0IGRpc2hUd28gZnJvbSAnLi9pbWFnZXMvZGlzaC0yLmpwZydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKVxuXG4gICAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlNBS1VSQSBNRU5VXCI7XG4gICAgbWVudUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGluZ1wiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKTtcblxuICAgIGxldCBtZW51SW1hZ2VzID0gW2Rpc2hPbmUsIGRpc2hUd29dO1xuXG4gICAgbWVudUltYWdlcy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc2hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRpc2hJbWFnZS5zcmMgPSBwYXRoO1xuICAgICAgICBkaXNoSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaEltYWdlKTtcbiAgICB9KVxuXG5cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGNyZWF0ZU1haW4gZnJvbSAnLi9tYWluLXNlY3Rpb24uanMnO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVNZW51KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFib3V0KCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVBYm91dCgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVDb250YWN0KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgXG4gICAgaWYgKHRhcmdldCA9PT0gXCJIT01FXCIpIGhvbWUoKTtcbiAgICBpZiAodGFyZ2V0ID09PSBcIk1FTlVcIiB8fCB0YXJnZXQgPT09IFwiU0VFIE9VUiBNRU5VXCIpIG1lbnUoKTtcbiAgICBpZiAodGFyZ2V0ID09PSBcIkFCT1VUIFVTXCIpIGFib3V0KCk7XG4gICAgaWYgKHRhcmdldCA9PT0gXCJDT05UQUNUXCIpIGNvbnRhY3QoKTtcbiAgfSk7XG5cblxuaG9tZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9