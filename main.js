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
  --text-color:#80B3FF;
  --bg-color:#B6FFFA;
  --dg-text-color:white;
}


body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

header {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  box-shadow: 1px 2px 1px var( --boxShadow-color);
  padding: 10px;
}
header button, .project button {
  background-color: var(--bg-color);
  border: 1px solid var(--boxShadow-color);
  border-radius: 10px;
  box-shadow: 0px 1px var(--boxShadow-color);
  color: #80B3FF;
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
.projectButtons {
  padding: 5px;
  display: flex;
  gap: 5px;
}
.projectButtons > button {
  padding: 5px;
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

.todo > div:nth-child(2) {
  display: grid;
  text-align: center;
  padding-right: 5px;
}

dialog {
  margin: auto;
  padding: 10px;
  background-color: #80B3FF;
  border: 0;
}
fieldset {
  color: var(--dg-text-color);
  padding: 10px;
  border: 0;
}

form {
  display: grid;
  gap: 20px;
}

form button {
  background-color: #80B3FF;
  color: var( --dg-text-color);
  border-radius: 10px;
  padding: 5px;
  border: 1px solid var( --dg-text-color);
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
input[type=radio], input[type=checkbox]{
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
}

.wrapperLeft {
  display: grid;
}

.wrapperLeft button {
  width: 50px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;AACvB;;;AAGA;EACE,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,+CAA+C;EAC/C,aAAa;AACf;AACA;EACE,iCAAiC;EACjC,wCAAwC;EACxC,mBAAmB;EACnB,0CAA0C;EAC1C,cAAc;AAChB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,aAAa;EACb,SAAS;AACX;;AAEA;EACE,+CAA+C;AACjD;AACA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,SAAS;AACX;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,mBAAmB;EACnB,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iCAAiC;AACnC;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --boxShadow-color:#80808099;\r\n  --text-color:#80B3FF;\r\n  --bg-color:#B6FFFA;\r\n  --dg-text-color:white;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n}\r\n\r\nheader {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  justify-content: space-around;\r\n  box-shadow: 1px 2px 1px var( --boxShadow-color);\r\n  padding: 10px;\r\n}\r\nheader button, .project button {\r\n  background-color: var(--bg-color);\r\n  border: 1px solid var(--boxShadow-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0px 1px var(--boxShadow-color);\r\n  color: #80B3FF;\r\n}\r\n.projects {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.project {\r\n  box-shadow: 2px 2px 1px var( --boxShadow-color);\r\n}\r\n.projectButtons {\r\n  padding: 5px;\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n.projectButtons > button {\r\n  padding: 5px;\r\n}\r\n.todoList {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.todo {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo > div:nth-child(2) {\r\n  display: grid;\r\n  text-align: center;\r\n  padding-right: 5px;\r\n}\r\n\r\ndialog {\r\n  margin: auto;\r\n  padding: 10px;\r\n  background-color: #80B3FF;\r\n  border: 0;\r\n}\r\nfieldset {\r\n  color: var(--dg-text-color);\r\n  padding: 10px;\r\n  border: 0;\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\nform button {\r\n  background-color: #80B3FF;\r\n  color: var( --dg-text-color);\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  border: 1px solid var( --dg-text-color);\r\n}\r\n\r\n#todo {\r\n  border-radius: 10px;\r\n  width: 300px;\r\n}\r\nform  label {\r\n  display: block;\r\n}\r\n\r\ninput:focus-visible, textarea:focus-visible {\r\n  outline: none;\r\n}\r\ninput[type=radio], input[type=checkbox]{\r\n  vertical-align: middle;\r\n}\r\n.priority {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  box-shadow: 2px 2px 1px #ffffff4a;\r\n}\r\n.priority label  {\r\n  display: inline;\r\n}\r\n\r\n.wrapperLeft {\r\n  display: grid;\r\n}\r\n\r\n.wrapperLeft button {\r\n  width: 50px;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   handleTodoSubmit: () => (/* binding */ handleTodoSubmit),
/* harmony export */   resetPage: () => (/* binding */ resetPage)
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
    _projects__WEBPACK_IMPORTED_MODULE_3__.projects.findProject(e.target.getAttribute('data-attribute')).handleNewTodo(todo);

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
    removeEventListener(type);
  }
  localStorage.setItem('projects', (0,_projects__WEBPACK_IMPORTED_MODULE_3__.stringifyProjects)(_projects__WEBPACK_IMPORTED_MODULE_3__.projects));
  _projects__WEBPACK_IMPORTED_MODULE_3__.projects.resetProjectList();
  (0,_projectSection__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function removeEventListener(type){
  if (type === 'project'){
    let submitProject = document.querySelector('#submitProject');
    submitProject.removeEventListener('click',handleProjectSubmit);
  }
  else  {
    let submitTodo = document.querySelector('#todoSubmit');
    submitTodo.removeEventListener('click',handleEditSubmit);
    submitTodo.removeEventListener('click',handleTodoSubmit);
  }
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
/* harmony export */   closeDialog: () => (/* binding */ closeDialog),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   openAddTodoDialog: () => (/* binding */ openAddTodoDialog),
/* harmony export */   openEditTodoDialog: () => (/* binding */ openEditTodoDialog),
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
    var projectDialog = document.querySelector('#project');
    (0,_buttonHandle__WEBPACK_IMPORTED_MODULE_1__.resetPage)(projectDialog, 'project');
  })
  todoCancel.addEventListener('click', (e) => {
    e.preventDefault();
    var todoDialog = document.querySelector('#todo');
    (0,_buttonHandle__WEBPACK_IMPORTED_MODULE_1__.resetPage)(todoDialog, 'todo');
  })
}

function openProjectDialog() {
  var projectDialog = document.querySelector('#project');
  projectDialog.showModal();
  addProjectSubmitEventListener();
}

function openAddTodoDialog(e) {
  var dialog = document.querySelector('#todo');
  dialog.showModal();
  addTodoSubmitButtonEventListener(e.target.getAttribute('data-attribute'));
}

function openEditTodoDialog(e) {
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
    let projectTitle = document.querySelector('#projectTitle');
    projectTitle.value = '';
  }
  else if (type === 'todo') {
    let title = document.querySelector('#todoTitle');
    title.value = '';
    let description = document.querySelector('#description');
    description.value = '';
    let dueDate = document.querySelector('#dueDate');
    dueDate.value = '';
    let checkedPriority = document.querySelector(`input[type='radio']:checked`);
    checkedPriority.checked = false;
    let mediumPriority = document.querySelector('input#medium');
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
  const _id = Math.floor(Math.random() * 10000000);
  var _todoList = [];

  function getId(){
    return _id;
  }

  function getTitle(){
    return title;
  }

  function setTitle(newTitle){
    title = newTitle;
  }

  function getTodoList(){
    return _todoList;
  }

  function handleNewTodo(todo){
    _todoList.push(todo);
    _sortTodoList();
  }

  function findTodo(id){
    return _todoList.find(todo => todo.getId() == id);
  }

  function deleteTodo(id){
    _todoList = _todoList.filter(todo => todo.getId() != id);
  }
  function _sortTodoList(){
    _todoList.sort((left,right) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(left.getDueDate(),right.getDueDate()));
  }
  return {
    getId,getTitle,getTodoList,
    setTitle,handleNewTodo,findTodo,deleteTodo
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
    clearProjectsChild(projectsDiv);
  }
  if (localStorage.getItem('projects') === null) {
    initializeLocalStorage();
  }
  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.populateProjects)(JSON.parse(localStorage.getItem('projects')));
  projectsDiv.append(...createProjectCards(_projects__WEBPACK_IMPORTED_MODULE_1__.projects.getProjectList()));
}

function createProjectCards(projectList) {
  return projectList.map((project) => createProjectCard(project));
}

function clearProjectsChild(projectsDiv) {
  Array.from(projectsDiv.childNodes).forEach(child => {
    projectsDiv.removeChild(child);
  })
}

function initializeLocalStorage() {
  let defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])('default');
  _projects__WEBPACK_IMPORTED_MODULE_1__.projects.addProject(defaultProject);
  localStorage.setItem('projects', (0,_projects__WEBPACK_IMPORTED_MODULE_1__.stringifyProjects)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects));
}

function createProjectCard(project) {
  var projectCard = document.createElement('div');
  projectCard.setAttribute('class', 'project')
  var projectTitle = document.createElement("h1");
  projectTitle.textContent = project.getTitle();
  projectCard.append(projectTitle, createButtonsDiv(project.getId()), createTodoListDiv(project));

  return projectCard;
}
function createButtonsDiv(projectId) {
  var buttonsDiv = document.createElement('div');
  buttonsDiv.setAttribute('class', 'projectButtons');
  buttonsDiv.append(createAddTodoButton(projectId), createProjectDeleteButton(projectId))

  return buttonsDiv;
}
function createAddTodoButton(projectId) {
  var addToDoButton = document.createElement("button");
  addToDoButton.textContent = 'Add';
  addToDoButton.setAttribute('data-attribute', projectId);
  addToDoButton.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_2__.openAddTodoDialog);

  return addToDoButton;
}
function createProjectDeleteButton(projectId) {
  var deleteProjectButton = document.createElement('button');
  deleteProjectButton.textContent = 'delete';
  deleteProjectButton.setAttribute('projectId', projectId);
  deleteProjectButton.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_3__.deleteProject);

  return deleteProjectButton;
}
function createTodoListDiv(project) {
  var todoListDiv = document.createElement('div');
  todoListDiv.setAttribute('class', 'todoList')
  project.getTodoList().forEach(todo => {
    todoListDiv.append(createTodoDiv(project, todo));
  });

  return todoListDiv;
}

function createTodoDiv(project, todo) {
  var todoDiv = document.createElement('div');
  todoDiv.setAttribute('class', 'todo')
  var wrapperDivLeft = document.createElement('div');
  wrapperDivLeft.setAttribute('class', 'wrapperLeft')
  wrapperDivLeft.append(createTodoTitle(todo.getTitle()), createTodoDate(todo.getDueDate()),
    createEditButton(project.getId(), todo.getId()));

  var wrapperDivRight = document.createElement('div');
  wrapperDivRight.append(createDeleteTodoButton(project.getId(), todo.getId()),
    createPriorityElement(todo.getPriority()), createCheckDiv(project.getId(),
      todo.getId(), todo.getCompleted()));

  todoDiv.append(wrapperDivLeft, wrapperDivRight);

  return todoDiv;
}

function createTodoTitle(title) {
  var todoTitle = document.createElement('p');
  todoTitle.textContent = title;

  return todoTitle
}

function createTodoDate(dueDate) {
  var todoDate = document.createElement('time');
  todoDate.textContent = (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.formatDate)(dueDate);
  todoDate.setAttribute('datetime', (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.formatDate)(dueDate));

  return todoDate;
}

function createDeleteTodoButton(projectId, todoId) {
  var deleteTodoButton = document.createElement('button');
  deleteTodoButton.textContent = 'Delete';
  deleteTodoButton.setAttribute('projectId', projectId);
  deleteTodoButton.setAttribute('todoId', todoId);
  deleteTodoButton.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_3__.handleDeleteTodoButton, true);

  return deleteTodoButton;
}

function createPriorityElement(priorityText) {
  var priority = document.createElement('p');
  priority.textContent = priorityText;

  return priority;
}

function createEditButton(projectId, todoId) {
  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.setAttribute('projectId', projectId);
  editButton.setAttribute('todoId', todoId);
  editButton.setAttribute('class', 'todoTitle');
  editButton.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_2__.openEditTodoDialog);

  return editButton;
}

function createCheckDiv(projectId, todoId, completed) {
  var div = document.createElement('div');
  div.append(createCheckInput(projectId, todoId, completed), createCompletedLabel(projectId, todoId));

  return div;
}

function createCheckInput(projectId, todoId, completed) {
  var inputCheck = document.createElement('input');
  inputCheck.type = 'checkbox';
  inputCheck.setAttribute('id', `A${todoId}`);
  inputCheck.setAttribute('projectId', projectId);
  inputCheck.setAttribute('todoId', todoId);
  inputCheck.checked = completed;
  inputCheck.addEventListener('click', _buttonHandle__WEBPACK_IMPORTED_MODULE_3__.changeCompleted);

  return inputCheck;
}

function createCompletedLabel(projectId, todoId) {
  var completedLabel = document.createElement('label');
  completedLabel.textContent = "completed";
  completedLabel.setAttribute('for', `A${todoId}`);
  completedLabel.setAttribute('projectId', projectId);
  completedLabel.setAttribute('todoId', todoId);

  return completedLabel;
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
  var _projectList = [];

  function getProjectList() {
    return _projectList;
  }

  function addProject(project) {
    _projectList.push(project);
  }

  function resetProjectList() {
    _projectList = [];
  }
  function findProject(id) {
    return _projectList.find(project => project.getId() == id);
  }

  function deleteProject(id) {
    _projectList = _projectList.filter(project => project.getId() != id);
  }

  return { getProjectList, addProject, findProject, deleteProject, resetProjectList };
})();

function populateProjects(projectFromStorage) {
  projects.resetProjectList();
  projectFromStorage.forEach(project => {
    var newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(project["title"]);
    project["todoList"].forEach(todo => {
      var newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todo["title"], todo["description"], new Date(todo["dueDate"]),
        todo["priority"], todo["completed"]);
      newProject.handleNewTodo(newTodo);
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
  const _id = Math.floor(Math.random() * 10000000);

  function getId(){
    return _id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLDRCQUE0QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGVBQWUsa0NBQWtDLDJCQUEyQix5QkFBeUIsNEJBQTRCLEtBQUssa0JBQWtCLHdDQUF3QywrQkFBK0IsS0FBSyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixvQ0FBb0Msc0RBQXNELG9CQUFvQixLQUFLLG9DQUFvQyx3Q0FBd0MsK0NBQStDLDBCQUEwQixpREFBaUQscUJBQXFCLEtBQUssZUFBZSxvQkFBb0IsNENBQTRDLG9CQUFvQixnQkFBZ0IsS0FBSyxrQkFBa0Isc0RBQXNELEtBQUsscUJBQXFCLG1CQUFtQixvQkFBb0IsZUFBZSxLQUFLLDhCQUE4QixtQkFBbUIsS0FBSyxlQUFlLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssZUFBZSxvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsS0FBSyxrQ0FBa0Msb0JBQW9CLHlCQUF5Qix5QkFBeUIsS0FBSyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixnQ0FBZ0MsZ0JBQWdCLEtBQUssY0FBYyxrQ0FBa0Msb0JBQW9CLGdCQUFnQixLQUFLLGNBQWMsb0JBQW9CLGdCQUFnQixLQUFLLHFCQUFxQixnQ0FBZ0MsbUNBQW1DLDBCQUEwQixtQkFBbUIsOENBQThDLEtBQUssZUFBZSwwQkFBMEIsbUJBQW1CLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLHFEQUFxRCxvQkFBb0IsS0FBSyw0Q0FBNEMsNkJBQTZCLEtBQUssZUFBZSxvQkFBb0IsMEJBQTBCLGdCQUFnQix3Q0FBd0MsS0FBSyxzQkFBc0Isc0JBQXNCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLDZCQUE2QixrQkFBa0IsS0FBSyxtQkFBbUI7QUFDcDNHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDcEkxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKd0M7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsaUJBQWlCLDREQUFNO0FBQ3ZCLGtCQUFrQiw0REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw4QkFBOEI7QUFDOUIsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9Dd0Q7QUFDQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZDs7QUFFQTtBQUNBLGtDQUFrQyw2RUFBTztBQUN6QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmdDO0FBQ007QUFDYztBQUNLO0FBQ1A7QUFDbEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBYTtBQUNsQyxJQUFJLCtDQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBVTtBQUN6QixJQUFJLCtDQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLCtDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0REFBaUIsQ0FBQywrQ0FBUTtBQUM1RDtBQUNBO0FBQ087QUFDUCxFQUFFLCtDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsSUFBSSxrREFBUztBQUNiLElBQUksb0RBQVc7QUFDZjtBQUNBO0FBQ0EsbUNBQW1DLDREQUFpQixDQUFDLCtDQUFRO0FBQzdELEVBQUUsK0NBQVE7QUFDVixFQUFFLDJEQUFvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIc0M7QUFDOEQ7QUFDcEc7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVM7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBUztBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQkFBbUI7QUFDbkU7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhEQUFtQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMkRBQWdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDJEQUFnQjtBQUN2RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR29DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9EQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NVO0FBQ3FDO0FBQ0U7QUFDVztBQUN4RjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFnQjtBQUNsQiwyQ0FBMkMsK0NBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBYTtBQUNwQyxFQUFFLCtDQUFRO0FBQ1YsbUNBQW1DLDREQUFpQixDQUFDLCtDQUFRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNEQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx3REFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFVO0FBQ25DLG9DQUFvQyxtREFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaUVBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQWtCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMERBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktzQztBQUNOO0FBQ2hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0EscUJBQXFCLG9EQUFhO0FBQ2xDO0FBQ0Esb0JBQW9CLGlEQUFVO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUN6REEsaUVBQWUsVUFBVSxFQUFDO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZEZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNpQjtBQUNoRDtBQUNyQjtBQUNBLDJEQUFvQjtBQUNwQixnRUFBdUI7QUFDdkI7QUFDQTtBQUNBLDJDQUEyQyxzREFBaUI7QUFDNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbkhhbmRsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWJveFNoYWRvdy1jb2xvcjojODA4MDgwOTk7XHJcbiAgLS10ZXh0LWNvbG9yOiM4MEIzRkY7XHJcbiAgLS1iZy1jb2xvcjojQjZGRkZBO1xyXG4gIC0tZGctdGV4dC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMXB4IHZhciggLS1ib3hTaGFkb3ctY29sb3IpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaGVhZGVyIGJ1dHRvbiwgLnByb2plY3QgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94U2hhZG93LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggdmFyKC0tYm94U2hhZG93LWNvbG9yKTtcclxuICBjb2xvcjogIzgwQjNGRjtcclxufVxyXG4ucHJvamVjdHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMXB4IHZhciggLS1ib3hTaGFkb3ctY29sb3IpO1xyXG59XHJcbi5wcm9qZWN0QnV0dG9ucyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuLnByb2plY3RCdXR0b25zID4gYnV0dG9uIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRvZG9MaXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9kbyA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuZGlhbG9nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBCM0ZGO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5maWVsZHNldCB7XHJcbiAgY29sb3I6IHZhcigtLWRnLXRleHQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuZm9ybSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MEIzRkY7XHJcbiAgY29sb3I6IHZhciggLS1kZy10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoIC0tZGctdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbiN0b2RvIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5mb3JtICBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLXZpc2libGUsIHRleHRhcmVhOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnByaW9yaXR5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNmZmZmZmY0YTtcclxufVxyXG4ucHJpb3JpdHkgbGFiZWwgIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi53cmFwcGVyTGVmdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLndyYXBwZXJMZWZ0IGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSxpQ0FBaUM7RUFDakMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsK0NBQStDO0VBQy9DLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYm94U2hhZG93LWNvbG9yOiM4MDgwODA5OTtcXHJcXG4gIC0tdGV4dC1jb2xvcjojODBCM0ZGO1xcclxcbiAgLS1iZy1jb2xvcjojQjZGRkZBO1xcclxcbiAgLS1kZy10ZXh0LWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMnB4IDFweCB2YXIoIC0tYm94U2hhZG93LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmhlYWRlciBidXR0b24sIC5wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3hTaGFkb3ctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggdmFyKC0tYm94U2hhZG93LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjODBCM0ZGO1xcclxcbn1cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDFweCB2YXIoIC0tYm94U2hhZG93LWNvbG9yKTtcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zID4gYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLnRvZG9MaXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvID4gZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MEIzRkY7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kZy10ZXh0LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwQjNGRjtcXHJcXG4gIGNvbG9yOiB2YXIoIC0tZGctdGV4dC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKCAtLWRnLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5mb3JtICBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSwgdGV4dGFyZWE6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF17XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjZmZmZmZmNGE7XFxyXFxufVxcclxcbi5wcmlvcml0eSBsYWJlbCAge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlckxlZnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXJMZWZ0IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdFNlY3Rpb24gZnJvbSBcIi4vcHJvamVjdFNlY3Rpb25cIjtcclxuaW1wb3J0IHsgcHJvamVjdHMsIHN0cmluZ2lmeVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgY2xvc2VEaWFsb2csIHJlc2V0Rm9ybSB9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RTdWJtaXQoZSkge1xyXG4gIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJyk7XHJcbiAgaWYgKHByb2plY3RUaXRsZS52YWx1ZSA9PT0gJycpXHJcbiAgICByZXR1cm47XHJcbiAgZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlKTtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICByZXNldFBhZ2UocHJvamVjdERpYWxvZywgJ3Byb2plY3QnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb2RvU3VibWl0KGUpIHtcclxuICBpZiAodmFsaWRhdGVUb2RvRm9ybShnZXRUb2RvRGF0YSgpKSA9PT0gZmFsc2UpXHJcbiAgICByZXR1cm47XHJcbiAgZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgbGV0IHRvZG9EYXRhID0gZ2V0VG9kb0RhdGEoKTtcclxuICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyh0b2RvRGF0YS50aXRsZSwgdG9kb0RhdGEuZGVzY3JpcHRpb24sIG5ldyBEYXRlKHRvZG9EYXRhLmR1ZURhdGUpLCB0b2RvRGF0YS5wcmlvcml0eSwgZmFsc2UpO1xyXG4gICAgcHJvamVjdHMuZmluZFByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpKS5oYW5kbGVOZXdUb2RvKHRvZG8pO1xyXG5cclxuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kb1N1Ym1pdCk7XHJcbiAgICByZXNldFBhZ2UodG9kb0RpYWxvZywgJ3RvZG8nKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRvZG9CdXR0b24oZSkge1xyXG4gIHZhciBwcm9qZWN0ID0gcHJvamVjdHMuZmluZFByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKSk7XHJcbiAgdmFyIHRvZG8gPSBwcm9qZWN0LmZpbmRUb2RvKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndG9kb0lkJykpO1xyXG4gIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvLmdldElkKCkpO1xyXG4gIHJlc2V0UGFnZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRWRpdFN1Ym1pdChlKSB7XHJcbiAgaWYgKHZhbGlkYXRlVG9kb0Zvcm0oZ2V0VG9kb0RhdGEoKSkgPT09IGZhbHNlKVxyXG4gICAgcmV0dXJuO1xyXG4gIGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgbGV0IHRvZG9EYXRhID0gZ2V0VG9kb0RhdGEoKTtcclxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZFByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKSk7XHJcbiAgICBsZXQgdG9kbyA9IHByb2plY3QuZmluZFRvZG8oZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0b2RvSWQnKSk7XHJcbiAgICBlZGl0VG9kbyh0b2RvRGF0YSwgdG9kbyk7XHJcblxyXG4gICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0U3VibWl0KTtcclxuICAgIHJlc2V0UGFnZSh0b2RvRGlhbG9nLCAndG9kbycpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlZChlKSB7XHJcbiAgdmFyIHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdElkJyk7XHJcbiAgdmFyIHRvZG9JZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndG9kb0lkJyk7XHJcbiAgdmFyIHByb2plY3QgPSBwcm9qZWN0cy5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gIHZhciB0b2RvID0gcHJvamVjdC5maW5kVG9kbyh0b2RvSWQpO1xyXG4gIGNvbnN0IG5ld0NvbXBsZXRlZFZhbHVlID0gdG9kby5nZXRDb21wbGV0ZWQoKSA/IGZhbHNlIDogdHJ1ZTtcclxuICB0b2RvLnNldENvbXBsZXRlZChuZXdDb21wbGV0ZWRWYWx1ZSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJyxzdHJpbmdpZnlQcm9qZWN0cyhwcm9qZWN0cykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKXtcclxuICBwcm9qZWN0cy5kZWxldGVQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdElkJykpO1xyXG4gIHJlc2V0UGFnZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGVkaXRUb2RvKHRvZG9EYXRhLCB0b2RvKSB7XHJcbiAgdG9kby5zZXRUaXRsZSh0b2RvRGF0YS50aXRsZSk7XHJcbiAgdG9kby5zZXREZXNjcmlwdGlvbih0b2RvRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgdG9kby5zZXREdWVEYXRlKG5ldyBEYXRlKHRvZG9EYXRhLmR1ZURhdGUpKTtcclxuICB0b2RvLnNldFByaW9yaXR5KHRvZG9EYXRhLnByaW9yaXR5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2RvRGF0YSgpIHtcclxuICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJykudmFsdWU7XHJcbiAgdmFyIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgdmFyIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlO1xyXG4gIHZhciBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZGApLnZhbHVlO1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRvZG9Gb3JtKHRvZG8pIHtcclxuICBpZiAodG9kby50aXRsZSA9PT0gJycgfHwgdG9kby5kZXNjcmlwdGlvbiA9PT0gJycgfHwgdG9kby5kdWVEYXRlID09PSAnJyB8fCB0b2RvLnByaW9yaXR5ID09PSAnJylcclxuICAgIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UGFnZShkaWFsb2csIHR5cGUpIHtcclxuICBpZiAodHlwZSAmJiBkaWFsb2cpIHtcclxuICAgIHJlc2V0Rm9ybSh0eXBlKTtcclxuICAgIGNsb3NlRGlhbG9nKGRpYWxvZyk7XHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUpO1xyXG4gIH1cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBzdHJpbmdpZnlQcm9qZWN0cyhwcm9qZWN0cykpO1xyXG4gIHByb2plY3RzLnJlc2V0UHJvamVjdExpc3QoKTtcclxuICBjcmVhdGVQcm9qZWN0U2VjdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUpe1xyXG4gIGlmICh0eXBlID09PSAncHJvamVjdCcpe1xyXG4gICAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xyXG4gICAgc3VibWl0UHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlUHJvamVjdFN1Ym1pdCk7XHJcbiAgfVxyXG4gIGVsc2UgIHtcclxuICAgIGxldCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9TdWJtaXQnKTtcclxuICAgIHN1Ym1pdFRvZG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZUVkaXRTdWJtaXQpO1xyXG4gICAgc3VibWl0VG9kby5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlVG9kb1N1Ym1pdCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGhhbmRsZVByb2plY3RTdWJtaXQsIGhhbmRsZVRvZG9TdWJtaXQsIGhhbmRsZUVkaXRTdWJtaXQsIHJlc2V0UGFnZSB9IGZyb20gXCIuL2J1dHRvbkhhbmRsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbmNlbEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIHZhciBwcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYW5jZWwnKTtcclxuICB2YXIgdG9kb0NhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ2FuY2VsJyk7XHJcblxyXG4gIHByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xyXG4gICAgcmVzZXRQYWdlKHByb2plY3REaWFsb2csICdwcm9qZWN0Jyk7XHJcbiAgfSlcclxuICB0b2RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICAgIHJlc2V0UGFnZSh0b2RvRGlhbG9nLCAndG9kbycpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdERpYWxvZygpIHtcclxuICB2YXIgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XHJcbiAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcclxuICBhZGRQcm9qZWN0U3VibWl0RXZlbnRMaXN0ZW5lcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkFkZFRvZG9EaWFsb2coZSkge1xyXG4gIHZhciBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICBhZGRUb2RvU3VibWl0QnV0dG9uRXZlbnRMaXN0ZW5lcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVkaXRUb2RvRGlhbG9nKGUpIHtcclxuICBjb25zdCB0b2RvSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RvZG9JZCcpO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdElkJyk7XHJcbiAgdmFyIHByb2plY3QgPSBwcm9qZWN0cy5maW5kUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gIHZhciB0b2RvID0gcHJvamVjdC5maW5kVG9kbyh0b2RvSWQpO1xyXG5cclxuICB2YXIgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgcG9wdWxhdGVEaWFsb2dJbnB1dCh0b2RvKVxyXG4gIGFkZEVkaXRUb2RvU3VibWl0RXZlbnRMaXN0ZW5lcihwcm9qZWN0SWQsIHRvZG9JZClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRGlhbG9nKGRpYWxvZykge1xyXG4gIGRpYWxvZy5jbG9zZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKHR5cGUpIHtcclxuICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XHJcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpO1xyXG4gICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJyc7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHR5cGUgPT09ICd0b2RvJykge1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpO1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJztcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcclxuICAgIGR1ZURhdGUudmFsdWUgPSAnJztcclxuICAgIGxldCBjaGVja2VkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWRgKTtcclxuICAgIGNoZWNrZWRQcmlvcml0eS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNtZWRpdW0nKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBwb3B1bGF0ZURpYWxvZ0lucHV0KHRvZG8pIHtcclxuICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJyk7XHJcbiAgdGl0bGUudmFsdWUgPSB0b2RvLmdldFRpdGxlKCk7XHJcbiAgdmFyIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgdmFyIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBmb3JtYXREYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKTtcclxuICB2YXIgY2hlY2tlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkYCk7XHJcbiAgY2hlY2tlZFByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcclxuICB2YXIgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dG9kby5nZXRQcmlvcml0eSgpfWApO1xyXG4gIHRvZG9Qcmlvcml0eS5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyBkYXRlLmdldE1vbnRoKCkgOiAnMCcgKyBkYXRlLmdldE1vbnRoKCk7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyBkYXRlLmdldERhdGUoKSA6ICcwJyArIGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFN1Ym1pdEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgdmFyIHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xyXG4gIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0U3VibWl0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9kb1N1Ym1pdEJ1dHRvbkV2ZW50TGlzdGVuZXIoaWQpIHtcclxuICB2YXIgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9TdWJtaXQnKTtcclxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgaWQpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZG9TdWJtaXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEVkaXRUb2RvU3VibWl0RXZlbnRMaXN0ZW5lcihwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gIHZhciBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9TdWJtaXQnKTtcclxuICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVG9kbyc7XHJcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3RJZCk7XHJcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG9JZCk7XHJcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVkaXRTdWJtaXQpO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgY29tcGFyZUFzY30gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICBjb25zdCBfaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCk7XHJcbiAgdmFyIF90b2RvTGlzdCA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJZCgpe1xyXG4gICAgcmV0dXJuIF9pZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSl7XHJcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb0xpc3QoKXtcclxuICAgIHJldHVybiBfdG9kb0xpc3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVOZXdUb2RvKHRvZG8pe1xyXG4gICAgX3RvZG9MaXN0LnB1c2godG9kbyk7XHJcbiAgICBfc29ydFRvZG9MaXN0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kVG9kbyhpZCl7XHJcbiAgICByZXR1cm4gX3RvZG9MaXN0LmZpbmQodG9kbyA9PiB0b2RvLmdldElkKCkgPT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhpZCl7XHJcbiAgICBfdG9kb0xpc3QgPSBfdG9kb0xpc3QuZmlsdGVyKHRvZG8gPT4gdG9kby5nZXRJZCgpICE9IGlkKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gX3NvcnRUb2RvTGlzdCgpe1xyXG4gICAgX3RvZG9MaXN0LnNvcnQoKGxlZnQscmlnaHQpID0+IGNvbXBhcmVBc2MobGVmdC5nZXREdWVEYXRlKCkscmlnaHQuZ2V0RHVlRGF0ZSgpKSk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRJZCxnZXRUaXRsZSxnZXRUb2RvTGlzdCxcclxuICAgIHNldFRpdGxlLGhhbmRsZU5ld1RvZG8sZmluZFRvZG8sZGVsZXRlVG9kb1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IHByb2plY3RzLCBzdHJpbmdpZnlQcm9qZWN0cywgcG9wdWxhdGVQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IG9wZW5BZGRUb2RvRGlhbG9nLCBvcGVuRWRpdFRvZG9EaWFsb2csIGZvcm1hdERhdGUgfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHsgaGFuZGxlRGVsZXRlVG9kb0J1dHRvbiwgY2hhbmdlQ29tcGxldGVkLCBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vYnV0dG9uSGFuZGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VjdGlvbigpIHtcclxuICB2YXIgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xyXG4gIGlmIChwcm9qZWN0c0Rpdi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIGNsZWFyUHJvamVjdHNDaGlsZChwcm9qZWN0c0Rpdik7XHJcbiAgfVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PT0gbnVsbCkge1xyXG4gICAgaW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuICBwb3B1bGF0ZVByb2plY3RzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKTtcclxuICBwcm9qZWN0c0Rpdi5hcHBlbmQoLi4uY3JlYXRlUHJvamVjdENhcmRzKHByb2plY3RzLmdldFByb2plY3RMaXN0KCkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmRzKHByb2plY3RMaXN0KSB7XHJcbiAgcmV0dXJuIHByb2plY3RMaXN0Lm1hcCgocHJvamVjdCkgPT4gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclByb2plY3RzQ2hpbGQocHJvamVjdHNEaXYpIHtcclxuICBBcnJheS5mcm9tKHByb2plY3RzRGl2LmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgnZGVmYXVsdCcpO1xyXG4gIHByb2plY3RzLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmeVByb2plY3RzKHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICB2YXIgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKVxyXG4gIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG4gIHByb2plY3RDYXJkLmFwcGVuZChwcm9qZWN0VGl0bGUsIGNyZWF0ZUJ1dHRvbnNEaXYocHJvamVjdC5nZXRJZCgpKSwgY3JlYXRlVG9kb0xpc3REaXYocHJvamVjdCkpO1xyXG5cclxuICByZXR1cm4gcHJvamVjdENhcmQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uc0Rpdihwcm9qZWN0SWQpIHtcclxuICB2YXIgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0QnV0dG9ucycpO1xyXG4gIGJ1dHRvbnNEaXYuYXBwZW5kKGNyZWF0ZUFkZFRvZG9CdXR0b24ocHJvamVjdElkKSwgY3JlYXRlUHJvamVjdERlbGV0ZUJ1dHRvbihwcm9qZWN0SWQpKVxyXG5cclxuICByZXR1cm4gYnV0dG9uc0RpdjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVBZGRUb2RvQnV0dG9uKHByb2plY3RJZCkge1xyXG4gIHZhciBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgYWRkVG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgcHJvamVjdElkKTtcclxuICBhZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkFkZFRvZG9EaWFsb2cpO1xyXG5cclxuICByZXR1cm4gYWRkVG9Eb0J1dHRvbjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGVsZXRlQnV0dG9uKHByb2plY3RJZCkge1xyXG4gIHZhciBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xyXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnLCBwcm9qZWN0SWQpO1xyXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZVByb2plY3RCdXR0b247XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3REaXYocHJvamVjdCkge1xyXG4gIHZhciB0b2RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvZG9MaXN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kb0xpc3QnKVxyXG4gIHByb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgdG9kb0xpc3REaXYuYXBwZW5kKGNyZWF0ZVRvZG9EaXYocHJvamVjdCwgdG9kbykpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdG9kb0xpc3REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9EaXYocHJvamVjdCwgdG9kbykge1xyXG4gIHZhciB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8nKVxyXG4gIHZhciB3cmFwcGVyRGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdyYXBwZXJEaXZMZWZ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd3JhcHBlckxlZnQnKVxyXG4gIHdyYXBwZXJEaXZMZWZ0LmFwcGVuZChjcmVhdGVUb2RvVGl0bGUodG9kby5nZXRUaXRsZSgpKSwgY3JlYXRlVG9kb0RhdGUodG9kby5nZXREdWVEYXRlKCkpLFxyXG4gICAgY3JlYXRlRWRpdEJ1dHRvbihwcm9qZWN0LmdldElkKCksIHRvZG8uZ2V0SWQoKSkpO1xyXG5cclxuICB2YXIgd3JhcHBlckRpdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd3JhcHBlckRpdlJpZ2h0LmFwcGVuZChjcmVhdGVEZWxldGVUb2RvQnV0dG9uKHByb2plY3QuZ2V0SWQoKSwgdG9kby5nZXRJZCgpKSxcclxuICAgIGNyZWF0ZVByaW9yaXR5RWxlbWVudCh0b2RvLmdldFByaW9yaXR5KCkpLCBjcmVhdGVDaGVja0Rpdihwcm9qZWN0LmdldElkKCksXHJcbiAgICAgIHRvZG8uZ2V0SWQoKSwgdG9kby5nZXRDb21wbGV0ZWQoKSkpO1xyXG5cclxuICB0b2RvRGl2LmFwcGVuZCh3cmFwcGVyRGl2TGVmdCwgd3JhcHBlckRpdlJpZ2h0KTtcclxuXHJcbiAgcmV0dXJuIHRvZG9EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9UaXRsZSh0aXRsZSkge1xyXG4gIHZhciB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gIHJldHVybiB0b2RvVGl0bGVcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0RhdGUoZHVlRGF0ZSkge1xyXG4gIHZhciB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RpbWUnKTtcclxuICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZHVlRGF0ZSk7XHJcbiAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKCdkYXRldGltZScsIGZvcm1hdERhdGUoZHVlRGF0ZSkpO1xyXG5cclxuICByZXR1cm4gdG9kb0RhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVRvZG9CdXR0b24ocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICB2YXIgZGVsZXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuICBkZWxldGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgncHJvamVjdElkJywgcHJvamVjdElkKTtcclxuICBkZWxldGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndG9kb0lkJywgdG9kb0lkKTtcclxuICBkZWxldGVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlVG9kb0J1dHRvbiwgdHJ1ZSk7XHJcblxyXG4gIHJldHVybiBkZWxldGVUb2RvQnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eUVsZW1lbnQocHJpb3JpdHlUZXh0KSB7XHJcbiAgdmFyIHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdHlUZXh0O1xyXG5cclxuICByZXR1cm4gcHJpb3JpdHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVkaXRCdXR0b24ocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICB2YXIgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XHJcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3RJZCk7XHJcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG9JZCk7XHJcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG9UaXRsZScpO1xyXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRWRpdFRvZG9EaWFsb2cpO1xyXG5cclxuICByZXR1cm4gZWRpdEJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tEaXYocHJvamVjdElkLCB0b2RvSWQsIGNvbXBsZXRlZCkge1xyXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuYXBwZW5kKGNyZWF0ZUNoZWNrSW5wdXQocHJvamVjdElkLCB0b2RvSWQsIGNvbXBsZXRlZCksIGNyZWF0ZUNvbXBsZXRlZExhYmVsKHByb2plY3RJZCwgdG9kb0lkKSk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrSW5wdXQocHJvamVjdElkLCB0b2RvSWQsIGNvbXBsZXRlZCkge1xyXG4gIHZhciBpbnB1dENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dENoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKCdpZCcsIGBBJHt0b2RvSWR9YCk7XHJcbiAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3RJZCk7XHJcbiAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG9JZCk7XHJcbiAgaW5wdXRDaGVjay5jaGVja2VkID0gY29tcGxldGVkO1xyXG4gIGlucHV0Q2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb21wbGV0ZWQpO1xyXG5cclxuICByZXR1cm4gaW5wdXRDaGVjaztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29tcGxldGVkTGFiZWwocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICB2YXIgY29tcGxldGVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGNvbXBsZXRlZExhYmVsLnRleHRDb250ZW50ID0gXCJjb21wbGV0ZWRcIjtcclxuICBjb21wbGV0ZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBBJHt0b2RvSWR9YCk7XHJcbiAgY29tcGxldGVkTGFiZWwuc2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnLCBwcm9qZWN0SWQpO1xyXG4gIGNvbXBsZXRlZExhYmVsLnNldEF0dHJpYnV0ZSgndG9kb0lkJywgdG9kb0lkKTtcclxuXHJcbiAgcmV0dXJuIGNvbXBsZXRlZExhYmVsO1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZXhwb3J0IHZhciBwcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgdmFyIF9wcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBnZXRQcm9qZWN0TGlzdCgpIHtcclxuICAgIHJldHVybiBfcHJvamVjdExpc3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIF9wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRQcm9qZWN0TGlzdCgpIHtcclxuICAgIF9wcm9qZWN0TGlzdCA9IFtdO1xyXG4gIH1cclxuICBmdW5jdGlvbiBmaW5kUHJvamVjdChpZCkge1xyXG4gICAgcmV0dXJuIF9wcm9qZWN0TGlzdC5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09IGlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQpIHtcclxuICAgIF9wcm9qZWN0TGlzdCA9IF9wcm9qZWN0TGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgIT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0UHJvamVjdExpc3QsIGFkZFByb2plY3QsIGZpbmRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCByZXNldFByb2plY3RMaXN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cyhwcm9qZWN0RnJvbVN0b3JhZ2UpIHtcclxuICBwcm9qZWN0cy5yZXNldFByb2plY3RMaXN0KCk7XHJcbiAgcHJvamVjdEZyb21TdG9yYWdlLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICB2YXIgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFtcInRpdGxlXCJdKTtcclxuICAgIHByb2plY3RbXCJ0b2RvTGlzdFwiXS5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICB2YXIgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odG9kb1tcInRpdGxlXCJdLCB0b2RvW1wiZGVzY3JpcHRpb25cIl0sIG5ldyBEYXRlKHRvZG9bXCJkdWVEYXRlXCJdKSxcclxuICAgICAgICB0b2RvW1wicHJpb3JpdHlcIl0sIHRvZG9bXCJjb21wbGV0ZWRcIl0pO1xyXG4gICAgICBuZXdQcm9qZWN0LmhhbmRsZU5ld1RvZG8obmV3VG9kbyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpLm1hcChwcm9qZWN0ID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiBwcm9qZWN0LmdldFRpdGxlKCksXHJcbiAgICAgIHRvZG9MaXN0OiBwcm9qZWN0LmdldFRvZG9MaXN0KCkubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aXRsZTogdG9kby5nZXRUaXRsZSgpLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHRvZG8uZ2V0RGVzY3JpcHRpb24oKSxcclxuICAgICAgICAgIGR1ZURhdGU6IHRvZG8uZ2V0RHVlRGF0ZSgpLFxyXG4gICAgICAgICAgcHJpb3JpdHk6IHRvZG8uZ2V0UHJpb3JpdHkoKSxcclxuICAgICAgICAgIGNvbXBsZXRlZDogdG9kby5nZXRDb21wbGV0ZWQoKSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSkpXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kbztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgY29uc3QgX2lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJZCgpe1xyXG4gICAgcmV0dXJuIF9pZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDb21wbGV0ZWQoKSB7XHJcbiAgICByZXR1cm4gY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCkge1xyXG4gICAgY29tcGxldGVkID0gbmV3Q29tcGxldGVkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SWQsZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0Q29tcGxldGVkLFxyXG4gICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSwgc2V0Q29tcGxldGVkXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdFNlY3Rpb24gZnJvbSBcIi4vcHJvamVjdFNlY3Rpb25cIjtcclxuaW1wb3J0IHsgYWRkQ2FuY2VsRXZlbnRMaXN0ZW5lcnMsb3BlblByb2plY3REaWFsb2cgfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jcmVhdGVQcm9qZWN0U2VjdGlvbigpO1xyXG5hZGRDYW5jZWxFdmVudExpc3RlbmVycygpO1xyXG5cclxudmFyIGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpO1xyXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3REaWFsb2cpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9