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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --boxShadow-color:#80808099;
}


body {
  background-color: #B6FFFA;
  color: #80B3FF;
}

header {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  box-shadow: 1px 2px 1px var( --boxShadow-color);
  padding: 10px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  gap: 20px;
}

.project {
  box-shadow: 2px 2px 1px var( --boxShadow-color);
}

.todoList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.todo {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
}

.todo > div {
  display: grid;
  text-align: center;
}

dialog {
  margin: auto;
  padding: 10px;
  background-color: #80B3FF;
  border: 0;
}
fieldset {
  color: white;
  padding: 10px;
  border: 0;
}

form {
  display: grid;
  gap: 20px;
}
#todo {
  border-radius: 10px;
  width: 300px;
}
form  label {
  display: block;
}
input:focus-visible, textarea:focus-visible {
  outline: none;
}
input[type=radio]{
  vertical-align: middle;
}
.priority {
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 2px 2px 1px #ffffff4a;
}
.priority label  {
  display: inline;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;;AAGA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,+CAA+C;EAC/C,aAAa;AACf;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,aAAa;EACb,SAAS;AACX;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iCAAiC;AACnC;AACA;EACE,eAAe;AACjB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --boxShadow-color:#80808099;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: #B6FFFA;\r\n  color: #80B3FF;\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  justify-content: space-around;\r\n  box-shadow: 1px 2px 1px var( --boxShadow-color);\r\n  padding: 10px;\r\n}\r\n\r\n.projects {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.project {\r\n  box-shadow: 2px 2px 1px var( --boxShadow-color);\r\n}\r\n\r\n.todoList {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.todo {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo > div {\r\n  display: grid;\r\n  text-align: center;\r\n}\r\n\r\ndialog {\r\n  margin: auto;\r\n  padding: 10px;\r\n  background-color: #80B3FF;\r\n  border: 0;\r\n}\r\nfieldset {\r\n  color: white;\r\n  padding: 10px;\r\n  border: 0;\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n#todo {\r\n  border-radius: 10px;\r\n  width: 300px;\r\n}\r\nform  label {\r\n  display: block;\r\n}\r\ninput:focus-visible, textarea:focus-visible {\r\n  outline: none;\r\n}\r\ninput[type=radio]{\r\n  vertical-align: middle;\r\n}\r\n.priority {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  box-shadow: 2px 2px 1px #ffffff4a;\r\n}\r\n.priority label  {\r\n  display: inline;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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

/***/ "./src/buttonHandle.js":
/*!*****************************!*\
  !*** ./src/buttonHandle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCompleted: () => (/* binding */ changeCompleted),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   handleDeleteTodoButton: () => (/* binding */ handleDeleteTodoButton),
/* harmony export */   handleEditSubmit: () => (/* binding */ handleEditSubmit),
/* harmony export */   handleProjectSubmit: () => (/* binding */ handleProjectSubmit),
/* harmony export */   handleTodoSubmit: () => (/* binding */ handleTodoSubmit)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectSection */ "./src/projectSection.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");





function handleProjectSubmit(e) {
  var projectTitle = document.querySelector('#projectTitle');
  if (projectTitle.value === '')
    return;
  else {
    e.preventDefault();
    let projectDialog = document.querySelector('#project');
    let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectTitle.value);
    _projects__WEBPACK_IMPORTED_MODULE_3__.projects.addProject(newProject);
    resetPage(projectDialog, 'project');
  }
}

function handleTodoSubmit(e) {
  if (validateTodoForm(getTodoData()) === false)
    return;
  else {
    e.preventDefault();

    let todoDialog = document.querySelector('#todo');
    let todoData = getTodoData();
    let todo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todoData.title, todoData.description, new Date(todoData.dueDate), todoData.priority, false);
    _projects__WEBPACK_IMPORTED_MODULE_3__.projects.findProject(e.target.getAttribute('data-attribute')).addTodo(todo);

    e.target.removeEventListener('click', handleTodoSubmit);
    resetPage(todoDialog, 'todo');
  }
}
function handleDeleteTodoButton(e) {
  var project = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.findProject(e.target.getAttribute('projectId'));
  var todo = project.findTodo(e.target.getAttribute('todoId'));
  project.deleteTodo(todo.getId());
  resetPage();
}
function handleEditSubmit(e) {
  if (validateTodoForm(getTodoData()) === false)
    return;
  else {
    e.preventDefault();
    let todoDialog = document.querySelector('#todo');
    let todoData = getTodoData();
    let project = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.findProject(e.target.getAttribute('projectId'));
    let todo = project.findTodo(e.target.getAttribute('todoId'));
    editTodo(todoData, todo);

    e.target.removeEventListener('click', handleEditSubmit);
    resetPage(todoDialog, 'todo');
  }
}
function changeCompleted(e) {
  var projectId = e.target.getAttribute('projectId');
  var todoId = e.target.getAttribute('todoId');
  var project = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.findProject(projectId);
  var todo = project.findTodo(todoId);
  const newCompletedValue = todo.getCompleted() ? false : true;
  todo.setCompleted(newCompletedValue);
  localStorage.setItem('projects',(0,_projects__WEBPACK_IMPORTED_MODULE_3__.stringifyProjects)(_projects__WEBPACK_IMPORTED_MODULE_3__.projects));
}
function deleteProject(e){
  _projects__WEBPACK_IMPORTED_MODULE_3__.projects.deleteProject(e.target.getAttribute('projectId'));
  resetPage();
}
function editTodo(todoData, todo) {
  todo.setTitle(todoData.title);
  todo.setDescription(todoData.description);
  todo.setDueDate(new Date(todoData.dueDate));
  todo.setPriority(todoData.priority)
}

function getTodoData() {
  var title = document.querySelector('#todoTitle').value;
  var description = document.querySelector('#description').value;
  var dueDate = document.querySelector('#dueDate').value;
  var priority = document.querySelector(`input[type='radio']:checked`).value;
  return {
    title, description, dueDate, priority
  }
}

function validateTodoForm(todo) {
  if (todo.title === '' || todo.description === '' || todo.dueDate === '' || todo.priority === '')
    return false;
  return true;
}

function resetPage(dialog, type) {
  if (type && dialog) {
    (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.resetForm)(type);
    (0,_dialog__WEBPACK_IMPORTED_MODULE_4__.closeDialog)(dialog);
  }
  localStorage.setItem('projects', (0,_projects__WEBPACK_IMPORTED_MODULE_3__.stringifyProjects)(_projects__WEBPACK_IMPORTED_MODULE_3__.projects));
  _projects__WEBPACK_IMPORTED_MODULE_3__.projects.resetProjectList();
  (0,_projectSection__WEBPACK_IMPORTED_MODULE_2__["default"])();
}




/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCancelEventListeners: () => (/* binding */ addCancelEventListeners),
/* harmony export */   addTodoDialog: () => (/* binding */ addTodoDialog),
/* harmony export */   closeDialog: () => (/* binding */ closeDialog),
/* harmony export */   editTodoDialog: () => (/* binding */ editTodoDialog),
/* harmony export */   openProjectDialog: () => (/* binding */ openProjectDialog),
/* harmony export */   resetForm: () => (/* binding */ resetForm)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _buttonHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonHandle */ "./src/buttonHandle.js");



function addCancelEventListeners() {
  var projectCancel = document.querySelector('.projectCancel');
  var todoCancel = document.querySelector('.todoCancel');

  projectCancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeDialog(document.querySelector('#project'));
    resetForm('project');
  })
  todoCancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeDialog(document.querySelector('#todo'));
    resetForm('todo');
  })
}

function openProjectDialog() {
  var projectDialog = document.querySelector('#project');
  projectDialog.showModal();
  addProjectSubmitEventListener();
}

function addTodoDialog(e) {
  var dialog = document.querySelector('#todo');
  dialog.showModal();
  addTodoSubmitButtonEventListener(e.target.getAttribute('data-attribute'));
}

function editTodoDialog(e) {
  const todoId = e.target.getAttribute('todoId');
  const projectId = e.target.getAttribute('projectId');
  var project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.findProject(projectId);
  var todo = project.findTodo(todoId);

  var dialog = document.querySelector('#todo');
  dialog.showModal();
  populateDialogInput(todo)
  addEditTodoSubmitEventListener(projectId, todoId)
}
function closeDialog(dialog) {
  dialog.close();
}
function resetForm(type) {
  if (type === 'project') {
    var projectTitle = document.querySelector('#projectTitle');
    projectTitle.value = '';
  }
  else if (type === 'todo') {
    var title = document.querySelector('#todoTitle');
    title.value = '';
    var description = document.querySelector('#description');
    description.value = '';
    var dueDate = document.querySelector('#dueDate');
    dueDate.value = '';
    var checkedPriority = document.querySelector(`input[type='radio']:checked`);
    checkedPriority.checked = false;
    var mediumPriority = document.querySelector('input#medium');
    mediumPriority.checked = true;
  }
}
function populateDialogInput(todo) {
  var title = document.querySelector('#todoTitle');
  title.value = todo.getTitle();
  var description = document.querySelector('#description');
  description.value = todo.getDescription();
  var dueDate = document.querySelector('#dueDate');
  dueDate.value = formatDate(todo.getDueDate());
  var checkedPriority = document.querySelector(`input[type='radio']:checked`);
  checkedPriority.checked = false;
  var todoPriority = document.querySelector(`#${todo.getPriority()}`);
  todoPriority.checked = true;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth().toString().length === 2 ? date.getMonth() : '0' + date.getMonth();
  const day = date.getDate().toString().length === 2 ? date.getDate() : '0' + date.getDate();

  return `${year}-${month}-${day}`;
}

function addProjectSubmitEventListener() {
  var submitProject = document.querySelector('#submitProject');
  submitProject.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_1__.handleProjectSubmit);
}

function addTodoSubmitButtonEventListener(id) {
  var submitButton = document.querySelector('#todoSubmit');
  submitButton.textContent = 'Add Todo';
  submitButton.setAttribute('data-attribute', id);
  submitButton.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_1__.handleTodoSubmit)
}

function addEditTodoSubmitEventListener(projectId, todoId) {
  var editButton = document.querySelector('#todoSubmit');
  editButton.textContent = 'Edit Todo';
  editButton.setAttribute('projectId', projectId);
  editButton.setAttribute('todoId', todoId);
  editButton.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_1__.handleEditSubmit);
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");


function createProject(title){
  const id = Math.floor(Math.random() * 10000000);
  var todoList = [];

  function getId(){
    return id;
  }

  function getTitle(){
    return title;
  }

  function setTitle(newTitle){
    title = newTitle;
  }

  function getTodoList(){
    return todoList;
  }

  function addTodo(todo){
    todoList.push(todo);
    sortTodoList();
  }

  function findTodo(id){
    return todoList.find(todo => todo.getId() == id);
  }

  function deleteTodo(id){
    todoList = todoList.filter(todo => todo.getId() != id);
  }
  function sortTodoList(){
    todoList.sort((left,right) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(left.getDueDate(),right.getDueDate()));
  }
  return {
    getId,getTitle,getTodoList,
    setTitle,addTodo,findTodo,deleteTodo
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/projectSection.js":
/*!*******************************!*\
  !*** ./src/projectSection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectSection)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
/* harmony import */ var _buttonHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttonHandle */ "./src/buttonHandle.js");





function createProjectSection() {
  var projectsDiv = document.querySelector(".projects");

  if (projectsDiv.hasChildNodes()) {
    Array.from(projectsDiv.childNodes).forEach(child => {
      projectsDiv.removeChild(child);
    })
  }

  if (localStorage.getItem('projects') === null) {
    var defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])('default');
    _projects__WEBPACK_IMPORTED_MODULE_1__.projects.addProject(defaultProject);
    localStorage.setItem('projects', (0,_projects__WEBPACK_IMPORTED_MODULE_1__.stringifyProjects)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects));
  }

  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.populateProjects)(JSON.parse(localStorage.getItem('projects')));
  var projectCards = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.getProjectList().map((project) => createProjectCard(project))

  projectsDiv.append(...projectCards)
}

function createProjectCard(project) {
  var projectCard = document.createElement('div');
  projectCard.setAttribute('class','project')
  var projectTitle = document.createElement("h1");
  projectTitle.textContent = project.getTitle();

  var addToDoButton = document.createElement("button");
  addToDoButton.textContent = 'Add';
  addToDoButton.setAttribute('data-attribute', project.getId())
  addToDoButton.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_2__.addTodoDialog);

  var todoList = document.createElement('div');
  todoList.setAttribute('class','todoList')
  project.getTodoList().forEach(todo => {
    todoList.append(createTodoElement(project, todo));
  });

  projectCard.append(projectTitle, addToDoButton, createProjectDeleteButton(project), todoList);
  return projectCard;
}

function createProjectDeleteButton(project){
  var deleteProjectButton = document.createElement('button');
  deleteProjectButton.textContent = 'delete';
  deleteProjectButton.setAttribute('projectId',project.getId());
  deleteProjectButton.addEventListener('click',_buttonHandle__WEBPACK_IMPORTED_MODULE_3__.deleteProject);
  
  return deleteProjectButton;
}

function createTodoElement(project, todo) {
  var todoDiv = document.createElement('div');
  todoDiv.setAttribute('class','todo')
  var todoElement = document.createElement('p');

  todoElement.textContent = todo.getTitle();
  todoElement.setAttribute('projectId', project.getId());
  todoElement.setAttribute('todoId', todo.getId());
  todoElement.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_2__.editTodoDialog);

  var wrapperDiv = document.createElement('div');
  var priority = document.createElement('p');
  priority = todo.getPriority();
  wrapperDiv.append(createDeleteTodoButton(project, todo), priority,createCheckInput(project, todo));
  todoDiv.append(todoElement,wrapperDiv);
  return todoDiv;
}

function createDeleteTodoButton(project, todo) {
  var deleteTodoButton = document.createElement('button');
  deleteTodoButton.textContent = 'Delete';
  deleteTodoButton.setAttribute('projectId', project.getId());
  deleteTodoButton.setAttribute('todoId', todo.getId());
  deleteTodoButton.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_3__.handleDeleteTodoButton);
  return deleteTodoButton;
}

function createCheckInput(project, todo) {
  var div = document.createElement('div');
  var inputCheck = document.createElement('input');
  inputCheck.type = 'checkbox';
  inputCheck.setAttribute('id',`A${todo.getId()}`);
  inputCheck.setAttribute('projectId', project.getId());
  inputCheck.setAttribute('todoId', todo.getId());
  inputCheck.checked = todo.getCompleted();
  inputCheck.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_3__.changeCompleted);

  var completedLabel = document.createElement('label');
  completedLabel.textContent = "completed";
  completedLabel.setAttribute('for',`A${todo.getId()}`);
  completedLabel.setAttribute('projectId', project.getId());
  completedLabel.setAttribute('todoId', todo.getId());

  div.append(inputCheck, completedLabel);

  return div;
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateProjects: () => (/* binding */ populateProjects),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   stringifyProjects: () => (/* binding */ stringifyProjects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



var projects = (() => {
  var projectList = [];

  function getProjectList() {
    return projectList;
  }

  function addProject(project) {
    projectList.push(project);
  }

  function resetProjectList() {
    projectList = [];
  }
  function findProject(id) {
    return projectList.find(project => project.getId() == id);
  }

  function deleteProject(id) {
    projectList = projectList.filter(project => project.getId() != id);
  }

  return { getProjectList, addProject, findProject, deleteProject, resetProjectList };
})();

function populateProjects(projectFromStorage) {
  projects.resetProjectList();
  projectFromStorage.forEach(project => {
    let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(project["title"]);
    project["todoList"].forEach(todo => {
      let newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todo["title"], todo["description"], new Date(todo["dueDate"]),
        todo["priority"], todo["completed"]);
      newProject.addTodo(newTodo);
    });

    projects.addProject(newProject);
  })
}

function stringifyProjects(projects) {
  return JSON.stringify(projects.getProjectList().map(project => {
    return {
      title: project.getTitle(),
      todoList: project.getTodoList().map(todo => {
        return {
          title: todo.getTitle(),
          description: todo.getDescription(),
          dueDate: todo.getDueDate(),
          priority: todo.getPriority(),
          completed: todo.getCompleted(),
        }
      })
    }
  }))
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);

function createTodo(title, description, dueDate, priority, completed) {
  const id = Math.floor(Math.random() * 10000000);

  function getId(){
    return id;
  }

  function getTitle() {
    return title;
  }

  function setTitle(newTitle) {
    title = newTitle;
  }

  function getDescription() {
    return description;
  }

  function setDescription(newDescription) {
    description = newDescription;
  }

  function getDueDate() {
    return dueDate;
  }

  function setDueDate(newDueDate) {
    dueDate = newDueDate;
  }

  function getPriority() {
    return priority;
  }

  function setPriority(newPriority) {
    priority = newPriority;
  }

  function getCompleted() {
    return completed;
  }

  function setCompleted(newCompleted) {
    completed = newCompleted;
  }



  return {
    getId,getTitle, getDescription, getDueDate, getPriority, getCompleted,
    setTitle, setDescription, setDueDate, setPriority, setCompleted
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectSection */ "./src/projectSection.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_projectSection__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_dialog__WEBPACK_IMPORTED_MODULE_1__.addCancelEventListeners)();

var addProjectButton = document.querySelector('#addProject');
addProjectButton.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_1__.openProjectDialog);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9idXR0b25IYW5kbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1ib3hTaGFkb3ctY29sb3I6IzgwODA4MDk5O1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2RkZGQTtcclxuICBjb2xvcjogIzgwQjNGRjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggdmFyKCAtLWJveFNoYWRvdy1jb2xvcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDFweCB2YXIoIC0tYm94U2hhZG93LWNvbG9yKTtcclxufVxyXG5cclxuLnRvZG9MaXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9kbyA+IGRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpYWxvZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwQjNGRjtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuZmllbGRzZXQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuI3RvZG8ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbmZvcm0gIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pbnB1dDpmb2N1cy12aXNpYmxlLCB0ZXh0YXJlYTpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9cmFkaW9de1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnByaW9yaXR5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNmZmZmZmY0YTtcclxufVxyXG4ucHJpb3JpdHkgbGFiZWwgIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLCtDQUErQztFQUMvQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJveFNoYWRvdy1jb2xvcjojODA4MDgwOTk7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2RkZGQTtcXHJcXG4gIGNvbG9yOiAjODBCM0ZGO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMXB4IHZhciggLS1ib3hTaGFkb3ctY29sb3IpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggdmFyKCAtLWJveFNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MEIzRkY7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuI3RvZG8ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuZm9ybSAgbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzLXZpc2libGUsIHRleHRhcmVhOmZvY3VzLXZpc2libGUge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1yYWRpb117XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZmZmZmZmNGE7XFxyXFxufVxcclxcbi5wcmlvcml0eSBsYWJlbCAge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0U2VjdGlvbiBmcm9tIFwiLi9wcm9qZWN0U2VjdGlvblwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgc3RyaW5naWZ5UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBjbG9zZURpYWxvZywgcmVzZXRGb3JtIH0gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGUpIHtcclxuICB2YXIgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpO1xyXG4gIGlmIChwcm9qZWN0VGl0bGUudmFsdWUgPT09ICcnKVxyXG4gICAgcmV0dXJuO1xyXG4gIGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSk7XHJcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgcmVzZXRQYWdlKHByb2plY3REaWFsb2csICdwcm9qZWN0Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9kb1N1Ym1pdChlKSB7XHJcbiAgaWYgKHZhbGlkYXRlVG9kb0Zvcm0oZ2V0VG9kb0RhdGEoKSkgPT09IGZhbHNlKVxyXG4gICAgcmV0dXJuO1xyXG4gIGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICAgIGxldCB0b2RvRGF0YSA9IGdldFRvZG9EYXRhKCk7XHJcbiAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8odG9kb0RhdGEudGl0bGUsIHRvZG9EYXRhLmRlc2NyaXB0aW9uLCBuZXcgRGF0ZSh0b2RvRGF0YS5kdWVEYXRlKSwgdG9kb0RhdGEucHJpb3JpdHksIGZhbHNlKTtcclxuICAgIHByb2plY3RzLmZpbmRQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKSkuYWRkVG9kbyh0b2RvKTtcclxuXHJcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZG9TdWJtaXQpO1xyXG4gICAgcmVzZXRQYWdlKHRvZG9EaWFsb2csICd0b2RvJyk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVUb2RvQnV0dG9uKGUpIHtcclxuICB2YXIgcHJvamVjdCA9IHByb2plY3RzLmZpbmRQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdElkJykpO1xyXG4gIHZhciB0b2RvID0gcHJvamVjdC5maW5kVG9kbyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RvZG9JZCcpKTtcclxuICBwcm9qZWN0LmRlbGV0ZVRvZG8odG9kby5nZXRJZCgpKTtcclxuICByZXNldFBhZ2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRWRpdFN1Ym1pdChlKSB7XHJcbiAgaWYgKHZhbGlkYXRlVG9kb0Zvcm0oZ2V0VG9kb0RhdGEoKSkgPT09IGZhbHNlKVxyXG4gICAgcmV0dXJuO1xyXG4gIGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgbGV0IHRvZG9EYXRhID0gZ2V0VG9kb0RhdGEoKTtcclxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZFByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKSk7XHJcbiAgICBsZXQgdG9kbyA9IHByb2plY3QuZmluZFRvZG8oZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0b2RvSWQnKSk7XHJcbiAgICBlZGl0VG9kbyh0b2RvRGF0YSwgdG9kbyk7XHJcblxyXG4gICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0U3VibWl0KTtcclxuICAgIHJlc2V0UGFnZSh0b2RvRGlhbG9nLCAndG9kbycpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29tcGxldGVkKGUpIHtcclxuICB2YXIgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKTtcclxuICB2YXIgdG9kb0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0b2RvSWQnKTtcclxuICB2YXIgcHJvamVjdCA9IHByb2plY3RzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XHJcbiAgdmFyIHRvZG8gPSBwcm9qZWN0LmZpbmRUb2RvKHRvZG9JZCk7XHJcbiAgY29uc3QgbmV3Q29tcGxldGVkVmFsdWUgPSB0b2RvLmdldENvbXBsZXRlZCgpID8gZmFsc2UgOiB0cnVlO1xyXG4gIHRvZG8uc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZFZhbHVlKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLHN0cmluZ2lmeVByb2plY3RzKHByb2plY3RzKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSl7XHJcbiAgcHJvamVjdHMuZGVsZXRlUHJvamVjdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcpKTtcclxuICByZXNldFBhZ2UoKTtcclxufVxyXG5mdW5jdGlvbiBlZGl0VG9kbyh0b2RvRGF0YSwgdG9kbykge1xyXG4gIHRvZG8uc2V0VGl0bGUodG9kb0RhdGEudGl0bGUpO1xyXG4gIHRvZG8uc2V0RGVzY3JpcHRpb24odG9kb0RhdGEuZGVzY3JpcHRpb24pO1xyXG4gIHRvZG8uc2V0RHVlRGF0ZShuZXcgRGF0ZSh0b2RvRGF0YS5kdWVEYXRlKSk7XHJcbiAgdG9kby5zZXRQcmlvcml0eSh0b2RvRGF0YS5wcmlvcml0eSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9kb0RhdGEoKSB7XHJcbiAgdmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpLnZhbHVlO1xyXG4gIHZhciBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gIHZhciBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZTtcclxuICB2YXIgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWRgKS52YWx1ZTtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVUb2RvRm9ybSh0b2RvKSB7XHJcbiAgaWYgKHRvZG8udGl0bGUgPT09ICcnIHx8IHRvZG8uZGVzY3JpcHRpb24gPT09ICcnIHx8IHRvZG8uZHVlRGF0ZSA9PT0gJycgfHwgdG9kby5wcmlvcml0eSA9PT0gJycpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0UGFnZShkaWFsb2csIHR5cGUpIHtcclxuICBpZiAodHlwZSAmJiBkaWFsb2cpIHtcclxuICAgIHJlc2V0Rm9ybSh0eXBlKTtcclxuICAgIGNsb3NlRGlhbG9nKGRpYWxvZyk7XHJcbiAgfVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmeVByb2plY3RzKHByb2plY3RzKSk7XHJcbiAgcHJvamVjdHMucmVzZXRQcm9qZWN0TGlzdCgpO1xyXG4gIGNyZWF0ZVByb2plY3RTZWN0aW9uKCk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGhhbmRsZVByb2plY3RTdWJtaXQsIGhhbmRsZVRvZG9TdWJtaXQsIGhhbmRsZUVkaXRTdWJtaXQgfSBmcm9tIFwiLi9idXR0b25IYW5kbGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYW5jZWxFdmVudExpc3RlbmVycygpIHtcclxuICB2YXIgcHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FuY2VsJyk7XHJcbiAgdmFyIHRvZG9DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NhbmNlbCcpO1xyXG5cclxuICBwcm9qZWN0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsb3NlRGlhbG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykpO1xyXG4gICAgcmVzZXRGb3JtKCdwcm9qZWN0Jyk7XHJcbiAgfSlcclxuICB0b2RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsb3NlRGlhbG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJykpO1xyXG4gICAgcmVzZXRGb3JtKCd0b2RvJyk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qcm9qZWN0RGlhbG9nKCkge1xyXG4gIHZhciBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcclxuICBwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gIGFkZFByb2plY3RTdWJtaXRFdmVudExpc3RlbmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvRGlhbG9nKGUpIHtcclxuICB2YXIgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgYWRkVG9kb1N1Ym1pdEJ1dHRvbkV2ZW50TGlzdGVuZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RvRGlhbG9nKGUpIHtcclxuICBjb25zdCB0b2RvSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RvZG9JZCcpO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdElkJyk7XHJcbiAgdmFyIHByb2plY3QgPSBwcm9qZWN0cy5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gIHZhciB0b2RvID0gcHJvamVjdC5maW5kVG9kbyh0b2RvSWQpO1xyXG5cclxuICB2YXIgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgcG9wdWxhdGVEaWFsb2dJbnB1dCh0b2RvKVxyXG4gIGFkZEVkaXRUb2RvU3VibWl0RXZlbnRMaXN0ZW5lcihwcm9qZWN0SWQsIHRvZG9JZClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEaWFsb2coZGlhbG9nKSB7XHJcbiAgZGlhbG9nLmNsb3NlKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Rm9ybSh0eXBlKSB7XHJcbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xyXG4gICAgdmFyIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKTtcclxuICAgIHByb2plY3RUaXRsZS52YWx1ZSA9ICcnO1xyXG4gIH1cclxuICBlbHNlIGlmICh0eXBlID09PSAndG9kbycpIHtcclxuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKTtcclxuICAgIHRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICB2YXIgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XHJcbiAgICBkdWVEYXRlLnZhbHVlID0gJyc7XHJcbiAgICB2YXIgY2hlY2tlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkYCk7XHJcbiAgICBjaGVja2VkUHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgdmFyIG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjbWVkaXVtJyk7XHJcbiAgICBtZWRpdW1Qcmlvcml0eS5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcG9wdWxhdGVEaWFsb2dJbnB1dCh0b2RvKSB7XHJcbiAgdmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpO1xyXG4gIHRpdGxlLnZhbHVlID0gdG9kby5nZXRUaXRsZSgpO1xyXG4gIHZhciBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kby5nZXREZXNjcmlwdGlvbigpO1xyXG4gIHZhciBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcclxuICBkdWVEYXRlLnZhbHVlID0gZm9ybWF0RGF0ZSh0b2RvLmdldER1ZURhdGUoKSk7XHJcbiAgdmFyIGNoZWNrZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZGApO1xyXG4gIGNoZWNrZWRQcmlvcml0eS5jaGVja2VkID0gZmFsc2U7XHJcbiAgdmFyIHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RvZG8uZ2V0UHJpb3JpdHkoKX1gKTtcclxuICB0b2RvUHJpb3JpdHkuY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyBkYXRlLmdldE1vbnRoKCkgOiAnMCcgKyBkYXRlLmdldE1vbnRoKCk7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyBkYXRlLmdldERhdGUoKSA6ICcwJyArIGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFN1Ym1pdEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgdmFyIHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xyXG4gIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0U3VibWl0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9kb1N1Ym1pdEJ1dHRvbkV2ZW50TGlzdGVuZXIoaWQpIHtcclxuICB2YXIgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9TdWJtaXQnKTtcclxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgaWQpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZG9TdWJtaXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEVkaXRUb2RvU3VibWl0RXZlbnRMaXN0ZW5lcihwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gIHZhciBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9TdWJtaXQnKTtcclxuICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVG9kbyc7XHJcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3RJZCk7XHJcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG9JZCk7XHJcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVkaXRTdWJtaXQpO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgY29tcGFyZUFzY30gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKTtcclxuICB2YXIgdG9kb0xpc3QgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SWQoKXtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSl7XHJcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb0xpc3QoKXtcclxuICAgIHJldHVybiB0b2RvTGlzdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvZG8odG9kbyl7XHJcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xyXG4gICAgc29ydFRvZG9MaXN0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kVG9kbyhpZCl7XHJcbiAgICByZXR1cm4gdG9kb0xpc3QuZmluZCh0b2RvID0+IHRvZG8uZ2V0SWQoKSA9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUb2RvKGlkKXtcclxuICAgIHRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKHRvZG8gPT4gdG9kby5nZXRJZCgpICE9IGlkKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc29ydFRvZG9MaXN0KCl7XHJcbiAgICB0b2RvTGlzdC5zb3J0KChsZWZ0LHJpZ2h0KSA9PiBjb21wYXJlQXNjKGxlZnQuZ2V0RHVlRGF0ZSgpLHJpZ2h0LmdldER1ZURhdGUoKSkpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SWQsZ2V0VGl0bGUsZ2V0VG9kb0xpc3QsXHJcbiAgICBzZXRUaXRsZSxhZGRUb2RvLGZpbmRUb2RvLGRlbGV0ZVRvZG9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgc3RyaW5naWZ5UHJvamVjdHMsIHBvcHVsYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBhZGRUb2RvRGlhbG9nLCBlZGl0VG9kb0RpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVEZWxldGVUb2RvQnV0dG9uLCBjaGFuZ2VDb21wbGV0ZWQsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9idXR0b25IYW5kbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWN0aW9uKCkge1xyXG4gIHZhciBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XHJcblxyXG4gIGlmIChwcm9qZWN0c0Rpdi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIEFycmF5LmZyb20ocHJvamVjdHNEaXYuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpIHtcclxuICAgIHZhciBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ2RlZmF1bHQnKTtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgc3RyaW5naWZ5UHJvamVjdHMocHJvamVjdHMpKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlUHJvamVjdHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xyXG4gIHZhciBwcm9qZWN0Q2FyZHMgPSBwcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpLm1hcCgocHJvamVjdCkgPT4gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkpXHJcblxyXG4gIHByb2plY3RzRGl2LmFwcGVuZCguLi5wcm9qZWN0Q2FyZHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICB2YXIgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdCcpXHJcbiAgdmFyIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcblxyXG4gIHZhciBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgYWRkVG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgcHJvamVjdC5nZXRJZCgpKVxyXG4gIGFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb2RvRGlhbG9nKTtcclxuXHJcbiAgdmFyIHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG9MaXN0JylcclxuICBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgIHRvZG9MaXN0LmFwcGVuZChjcmVhdGVUb2RvRWxlbWVudChwcm9qZWN0LCB0b2RvKSk7XHJcbiAgfSk7XHJcblxyXG4gIHByb2plY3RDYXJkLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvRG9CdXR0b24sIGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24ocHJvamVjdCksIHRvZG9MaXN0KTtcclxuICByZXR1cm4gcHJvamVjdENhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24ocHJvamVjdCl7XHJcbiAgdmFyIGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XHJcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcscHJvamVjdC5nZXRJZCgpKTtcclxuICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVQcm9qZWN0KTtcclxuICBcclxuICByZXR1cm4gZGVsZXRlUHJvamVjdEJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0VsZW1lbnQocHJvamVjdCwgdG9kbykge1xyXG4gIHZhciB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kbycpXHJcbiAgdmFyIHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcclxuICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3QuZ2V0SWQoKSk7XHJcbiAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0b2RvSWQnLCB0b2RvLmdldElkKCkpO1xyXG4gIHRvZG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG9EaWFsb2cpO1xyXG5cclxuICB2YXIgd3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHZhciBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcmlvcml0eSA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcclxuICB3cmFwcGVyRGl2LmFwcGVuZChjcmVhdGVEZWxldGVUb2RvQnV0dG9uKHByb2plY3QsIHRvZG8pLCBwcmlvcml0eSxjcmVhdGVDaGVja0lucHV0KHByb2plY3QsIHRvZG8pKTtcclxuICB0b2RvRGl2LmFwcGVuZCh0b2RvRWxlbWVudCx3cmFwcGVyRGl2KTtcclxuICByZXR1cm4gdG9kb0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlVG9kb0J1dHRvbihwcm9qZWN0LCB0b2RvKSB7XHJcbiAgdmFyIGRlbGV0ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgZGVsZXRlVG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3QuZ2V0SWQoKSk7XHJcbiAgZGVsZXRlVG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG8uZ2V0SWQoKSk7XHJcbiAgZGVsZXRlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVRvZG9CdXR0b24pO1xyXG4gIHJldHVybiBkZWxldGVUb2RvQnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGVja0lucHV0KHByb2plY3QsIHRvZG8pIHtcclxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdmFyIGlucHV0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0Q2hlY2sudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoJ2lkJyxgQSR7dG9kby5nZXRJZCgpfWApO1xyXG4gIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnLCBwcm9qZWN0LmdldElkKCkpO1xyXG4gIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKCd0b2RvSWQnLCB0b2RvLmdldElkKCkpO1xyXG4gIGlucHV0Q2hlY2suY2hlY2tlZCA9IHRvZG8uZ2V0Q29tcGxldGVkKCk7XHJcbiAgaW5wdXRDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbXBsZXRlZCk7XHJcblxyXG4gIHZhciBjb21wbGV0ZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29tcGxldGVkTGFiZWwudGV4dENvbnRlbnQgPSBcImNvbXBsZXRlZFwiO1xyXG4gIGNvbXBsZXRlZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgQSR7dG9kby5nZXRJZCgpfWApO1xyXG4gIGNvbXBsZXRlZExhYmVsLnNldEF0dHJpYnV0ZSgncHJvamVjdElkJywgcHJvamVjdC5nZXRJZCgpKTtcclxuICBjb21wbGV0ZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG8uZ2V0SWQoKSk7XHJcblxyXG4gIGRpdi5hcHBlbmQoaW5wdXRDaGVjaywgY29tcGxldGVkTGFiZWwpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4iLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmV4cG9ydCB2YXIgcHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBnZXRQcm9qZWN0TGlzdCgpIHtcclxuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0UHJvamVjdExpc3QoKSB7XHJcbiAgICBwcm9qZWN0TGlzdCA9IFtdO1xyXG4gIH1cclxuICBmdW5jdGlvbiBmaW5kUHJvamVjdChpZCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgPT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpZCkge1xyXG4gICAgcHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgIT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0UHJvamVjdExpc3QsIGFkZFByb2plY3QsIGZpbmRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCByZXNldFByb2plY3RMaXN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cyhwcm9qZWN0RnJvbVN0b3JhZ2UpIHtcclxuICBwcm9qZWN0cy5yZXNldFByb2plY3RMaXN0KCk7XHJcbiAgcHJvamVjdEZyb21TdG9yYWdlLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFtcInRpdGxlXCJdKTtcclxuICAgIHByb2plY3RbXCJ0b2RvTGlzdFwiXS5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICBsZXQgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odG9kb1tcInRpdGxlXCJdLCB0b2RvW1wiZGVzY3JpcHRpb25cIl0sIG5ldyBEYXRlKHRvZG9bXCJkdWVEYXRlXCJdKSxcclxuICAgICAgICB0b2RvW1wicHJpb3JpdHlcIl0sIHRvZG9bXCJjb21wbGV0ZWRcIl0pO1xyXG4gICAgICBuZXdQcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpLm1hcChwcm9qZWN0ID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiBwcm9qZWN0LmdldFRpdGxlKCksXHJcbiAgICAgIHRvZG9MaXN0OiBwcm9qZWN0LmdldFRvZG9MaXN0KCkubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aXRsZTogdG9kby5nZXRUaXRsZSgpLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHRvZG8uZ2V0RGVzY3JpcHRpb24oKSxcclxuICAgICAgICAgIGR1ZURhdGU6IHRvZG8uZ2V0RHVlRGF0ZSgpLFxyXG4gICAgICAgICAgcHJpb3JpdHk6IHRvZG8uZ2V0UHJpb3JpdHkoKSxcclxuICAgICAgICAgIGNvbXBsZXRlZDogdG9kby5nZXRDb21wbGV0ZWQoKSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSkpXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kbztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldElkKCl7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRQcmlvcml0eSgpIHtcclxuICAgIHJldHVybiBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkKCkge1xyXG4gICAgcmV0dXJuIGNvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldENvbXBsZXRlZChuZXdDb21wbGV0ZWQpIHtcclxuICAgIGNvbXBsZXRlZCA9IG5ld0NvbXBsZXRlZDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldElkLGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldENvbXBsZXRlZCxcclxuICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0RHVlRGF0ZSwgc2V0UHJpb3JpdHksIHNldENvbXBsZXRlZFxyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3RTZWN0aW9uIGZyb20gXCIuL3Byb2plY3RTZWN0aW9uXCI7XHJcbmltcG9ydCB7IGFkZENhbmNlbEV2ZW50TGlzdGVuZXJzLG9wZW5Qcm9qZWN0RGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY3JlYXRlUHJvamVjdFNlY3Rpb24oKTtcclxuYWRkQ2FuY2VsRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbnZhciBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKTtcclxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0RGlhbG9nKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==