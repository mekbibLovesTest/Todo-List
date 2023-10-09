/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

  function deleteToDo(id){
    todoList = todoList.filter(todo => todo.getId() != id);
  }
  function sortTodoList(){
    todoList.sort((left,right) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(left.getDueDate(),right.getDueDate()));
  }
  return {
    getId,getTitle,getTodoList,
    setTitle,addTodo,findTodo,deleteToDo
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

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

  function findProject(id) {
    return projectList.find(project => project.getId() == id);
  }

  function deleteProject(id) {
    projectList = projectList.filter(project => project.getId() != id);
  }

  return { getProjectList, addProject, findProject, deleteProject };
})();

function populateProjects(projectFromStorage) {
  projectFromStorage.forEach(project => {
    let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(project["title"]);
    project["todoList"].forEach(todo => {
      let completed = todo["completed"];
      console.log(completed)
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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





var project1 = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])('First Project');
var todo1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Buy Groceries", "Make a list of essential groceries and go shopping for the week.", new Date(2023, 10, 15), "Medium", false);
project1.addTodo(todo1);
var todo2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Call Mom", "Catch up with Mom and see how she's doing.", new Date(2023, 10, 12), "Low", false);
project1.addTodo(todo2);
var todo3 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Prepare Presentation", "Create a PowerPoint presentation for the upcoming team meeting.", new Date(2023, 10, 20), "High", true);
project1.addTodo(todo3);
var todo4 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Exercise", "Go for a 30-minute jog in the evening to stay active.", new Date(2023, 10, 10), "Medium", false);
project1.addTodo(todo4);

// Create a new project called 'Second Project'
var project2 = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])('Second Project');

var todo5 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Research for Report", "Gather information and data for the upcoming quarterly report.", new Date(2023, 10, 18), "High", false);
project2.addTodo(todo5);

var todo6 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Pay Bills", "Pay monthly utility bills and rent.", new Date(2023, 10, 5), "Medium", false);
project2.addTodo(todo6);

var todo7 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Book Flight Tickets", "Book flight tickets for the upcoming vacation.", new Date(2023, 11, 1), "Medium", false);
project2.addTodo(todo7);

var todo8 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Read a Chapter", "Read one chapter of the new book.", new Date(2023, 10, 14), "Low", false);
project2.addTodo(todo8);

// Create a new project called 'Third Project'
var project3 = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])('Third Project');

var todo9 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Write Blog Post", "Start drafting a blog post on the latest industry trends.", new Date(2023, 10, 22), "High", false);
project3.addTodo(todo9);

var todo10 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Attend Webinar", "Register and attend the webinar on marketing strategies.", new Date(2023, 10, 8), "Medium", false);
project3.addTodo(todo10);

var todo11 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Plan Birthday Party", "Plan a surprise birthday party for a friend.", new Date(2023, 10, 25), "High", false);
project3.addTodo(todo11);

var todo12 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Learn Guitar Chords", "Practice and learn new guitar chords for the song.", new Date(2023, 10, 16), "Low", false);
project3.addTodo(todo12);

_projects__WEBPACK_IMPORTED_MODULE_2__.projects.addProject(project1);
_projects__WEBPACK_IMPORTED_MODULE_2__.projects.addProject(project2);
_projects__WEBPACK_IMPORTED_MODULE_2__.projects.addProject(project3);

console.log((0,_projects__WEBPACK_IMPORTED_MODULE_2__.stringifyProjects)(_projects__WEBPACK_IMPORTED_MODULE_2__.projects));
localStorage.setItem('projects', (0,_projects__WEBPACK_IMPORTED_MODULE_2__.stringifyProjects)(_projects__WEBPACK_IMPORTED_MODULE_2__.projects));

_projects__WEBPACK_IMPORTED_MODULE_2__.projects.deleteProject(project1.getId());
_projects__WEBPACK_IMPORTED_MODULE_2__.projects.deleteProject(project2.getId());
_projects__WEBPACK_IMPORTED_MODULE_2__.projects.deleteProject(project3.getId());

console.log("projects ");
console.log(_projects__WEBPACK_IMPORTED_MODULE_2__.projects.getProjectList());

if (localStorage.getItem("projects")) {
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.populateProjects)(JSON.parse(localStorage.getItem('projects')));
}
_projects__WEBPACK_IMPORTED_MODULE_2__.projects.getProjectList().forEach(project => { 
  console.log(project.getTitle())
  project.getTodoList().forEach(todo => {
    console.log(todo.getId());
    console.log(todo.getTitle());
    console.log(todo.getDescription());
    console.log(todo.getDueDate());
    console.log(todo.getPriority());
    console.log(todo.getCompleted());
  })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgY29tcGFyZUFzY30gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKTtcclxuICB2YXIgdG9kb0xpc3QgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SWQoKXtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSl7XHJcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb0xpc3QoKXtcclxuICAgIHJldHVybiB0b2RvTGlzdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvZG8odG9kbyl7XHJcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xyXG4gICAgc29ydFRvZG9MaXN0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kVG9kbyhpZCl7XHJcbiAgICByZXR1cm4gdG9kb0xpc3QuZmluZCh0b2RvID0+IHRvZG8uZ2V0SWQoKSA9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUb0RvKGlkKXtcclxuICAgIHRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKHRvZG8gPT4gdG9kby5nZXRJZCgpICE9IGlkKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc29ydFRvZG9MaXN0KCl7XHJcbiAgICB0b2RvTGlzdC5zb3J0KChsZWZ0LHJpZ2h0KSA9PiBjb21wYXJlQXNjKGxlZnQuZ2V0RHVlRGF0ZSgpLHJpZ2h0LmdldER1ZURhdGUoKSkpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SWQsZ2V0VGl0bGUsZ2V0VG9kb0xpc3QsXHJcbiAgICBzZXRUaXRsZSxhZGRUb2RvLGZpbmRUb2RvLGRlbGV0ZVRvRG9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5leHBvcnQgdmFyIHByb2plY3RzID0gKCgpID0+IHtcclxuICB2YXIgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UHJvamVjdExpc3QoKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kUHJvamVjdChpZCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgPT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpZCkge1xyXG4gICAgcHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgIT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0UHJvamVjdExpc3QsIGFkZFByb2plY3QsIGZpbmRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cyhwcm9qZWN0RnJvbVN0b3JhZ2UpIHtcclxuICBwcm9qZWN0RnJvbVN0b3JhZ2UuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0W1widGl0bGVcIl0pO1xyXG4gICAgcHJvamVjdFtcInRvZG9MaXN0XCJdLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgIGxldCBjb21wbGV0ZWQgPSB0b2RvW1wiY29tcGxldGVkXCJdO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21wbGV0ZWQpXHJcbiAgICAgIGxldCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0b2RvW1widGl0bGVcIl0sIHRvZG9bXCJkZXNjcmlwdGlvblwiXSwgbmV3IERhdGUodG9kb1tcImR1ZURhdGVcIl0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1tcInByaW9yaXR5XCJdLCB0b2RvW1wiY29tcGxldGVkXCJdKTtcclxuICAgICAgbmV3UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeVByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLmdldFByb2plY3RMaXN0KCkubWFwKHByb2plY3QgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHByb2plY3QuZ2V0VGl0bGUoKSxcclxuICAgICAgdG9kb0xpc3Q6IHByb2plY3QuZ2V0VG9kb0xpc3QoKS5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiB0b2RvLmdldFRpdGxlKCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5nZXREZXNjcmlwdGlvbigpLFxyXG4gICAgICAgICAgZHVlRGF0ZTogdG9kby5nZXREdWVEYXRlKCksXHJcbiAgICAgICAgICBwcmlvcml0eTogdG9kby5nZXRQcmlvcml0eSgpLFxyXG4gICAgICAgICAgY29tcGxldGVkOiB0b2RvLmdldENvbXBsZXRlZCgpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KSlcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcclxuICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SWQoKXtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDb21wbGV0ZWQoKSB7XHJcbiAgICByZXR1cm4gY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCkge1xyXG4gICAgY29tcGxldGVkID0gbmV3Q29tcGxldGVkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SWQsZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0Q29tcGxldGVkLFxyXG4gICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSwgc2V0Q29tcGxldGVkXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgcG9wdWxhdGVQcm9qZWN0cyxzdHJpbmdpZnlQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5cclxudmFyIHByb2plY3QxID0gY3JlYXRlUHJvamVjdCgnRmlyc3QgUHJvamVjdCcpO1xyXG52YXIgdG9kbzEgPSBjcmVhdGVUb2RvKFwiQnV5IEdyb2Nlcmllc1wiLCBcIk1ha2UgYSBsaXN0IG9mIGVzc2VudGlhbCBncm9jZXJpZXMgYW5kIGdvIHNob3BwaW5nIGZvciB0aGUgd2Vlay5cIiwgbmV3IERhdGUoMjAyMywgMTAsIDE1KSwgXCJNZWRpdW1cIiwgZmFsc2UpO1xyXG5wcm9qZWN0MS5hZGRUb2RvKHRvZG8xKTtcclxudmFyIHRvZG8yID0gY3JlYXRlVG9kbyhcIkNhbGwgTW9tXCIsIFwiQ2F0Y2ggdXAgd2l0aCBNb20gYW5kIHNlZSBob3cgc2hlJ3MgZG9pbmcuXCIsIG5ldyBEYXRlKDIwMjMsIDEwLCAxMiksIFwiTG93XCIsIGZhbHNlKTtcclxucHJvamVjdDEuYWRkVG9kbyh0b2RvMik7XHJcbnZhciB0b2RvMyA9IGNyZWF0ZVRvZG8oXCJQcmVwYXJlIFByZXNlbnRhdGlvblwiLCBcIkNyZWF0ZSBhIFBvd2VyUG9pbnQgcHJlc2VudGF0aW9uIGZvciB0aGUgdXBjb21pbmcgdGVhbSBtZWV0aW5nLlwiLCBuZXcgRGF0ZSgyMDIzLCAxMCwgMjApLCBcIkhpZ2hcIiwgdHJ1ZSk7XHJcbnByb2plY3QxLmFkZFRvZG8odG9kbzMpO1xyXG52YXIgdG9kbzQgPSBjcmVhdGVUb2RvKFwiRXhlcmNpc2VcIiwgXCJHbyBmb3IgYSAzMC1taW51dGUgam9nIGluIHRoZSBldmVuaW5nIHRvIHN0YXkgYWN0aXZlLlwiLCBuZXcgRGF0ZSgyMDIzLCAxMCwgMTApLCBcIk1lZGl1bVwiLCBmYWxzZSk7XHJcbnByb2plY3QxLmFkZFRvZG8odG9kbzQpO1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgY2FsbGVkICdTZWNvbmQgUHJvamVjdCdcclxudmFyIHByb2plY3QyID0gY3JlYXRlUHJvamVjdCgnU2Vjb25kIFByb2plY3QnKTtcclxuXHJcbnZhciB0b2RvNSA9IGNyZWF0ZVRvZG8oXCJSZXNlYXJjaCBmb3IgUmVwb3J0XCIsIFwiR2F0aGVyIGluZm9ybWF0aW9uIGFuZCBkYXRhIGZvciB0aGUgdXBjb21pbmcgcXVhcnRlcmx5IHJlcG9ydC5cIiwgbmV3IERhdGUoMjAyMywgMTAsIDE4KSwgXCJIaWdoXCIsIGZhbHNlKTtcclxucHJvamVjdDIuYWRkVG9kbyh0b2RvNSk7XHJcblxyXG52YXIgdG9kbzYgPSBjcmVhdGVUb2RvKFwiUGF5IEJpbGxzXCIsIFwiUGF5IG1vbnRobHkgdXRpbGl0eSBiaWxscyBhbmQgcmVudC5cIiwgbmV3IERhdGUoMjAyMywgMTAsIDUpLCBcIk1lZGl1bVwiLCBmYWxzZSk7XHJcbnByb2plY3QyLmFkZFRvZG8odG9kbzYpO1xyXG5cclxudmFyIHRvZG83ID0gY3JlYXRlVG9kbyhcIkJvb2sgRmxpZ2h0IFRpY2tldHNcIiwgXCJCb29rIGZsaWdodCB0aWNrZXRzIGZvciB0aGUgdXBjb21pbmcgdmFjYXRpb24uXCIsIG5ldyBEYXRlKDIwMjMsIDExLCAxKSwgXCJNZWRpdW1cIiwgZmFsc2UpO1xyXG5wcm9qZWN0Mi5hZGRUb2RvKHRvZG83KTtcclxuXHJcbnZhciB0b2RvOCA9IGNyZWF0ZVRvZG8oXCJSZWFkIGEgQ2hhcHRlclwiLCBcIlJlYWQgb25lIGNoYXB0ZXIgb2YgdGhlIG5ldyBib29rLlwiLCBuZXcgRGF0ZSgyMDIzLCAxMCwgMTQpLCBcIkxvd1wiLCBmYWxzZSk7XHJcbnByb2plY3QyLmFkZFRvZG8odG9kbzgpO1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgY2FsbGVkICdUaGlyZCBQcm9qZWN0J1xyXG52YXIgcHJvamVjdDMgPSBjcmVhdGVQcm9qZWN0KCdUaGlyZCBQcm9qZWN0Jyk7XHJcblxyXG52YXIgdG9kbzkgPSBjcmVhdGVUb2RvKFwiV3JpdGUgQmxvZyBQb3N0XCIsIFwiU3RhcnQgZHJhZnRpbmcgYSBibG9nIHBvc3Qgb24gdGhlIGxhdGVzdCBpbmR1c3RyeSB0cmVuZHMuXCIsIG5ldyBEYXRlKDIwMjMsIDEwLCAyMiksIFwiSGlnaFwiLCBmYWxzZSk7XHJcbnByb2plY3QzLmFkZFRvZG8odG9kbzkpO1xyXG5cclxudmFyIHRvZG8xMCA9IGNyZWF0ZVRvZG8oXCJBdHRlbmQgV2ViaW5hclwiLCBcIlJlZ2lzdGVyIGFuZCBhdHRlbmQgdGhlIHdlYmluYXIgb24gbWFya2V0aW5nIHN0cmF0ZWdpZXMuXCIsIG5ldyBEYXRlKDIwMjMsIDEwLCA4KSwgXCJNZWRpdW1cIiwgZmFsc2UpO1xyXG5wcm9qZWN0My5hZGRUb2RvKHRvZG8xMCk7XHJcblxyXG52YXIgdG9kbzExID0gY3JlYXRlVG9kbyhcIlBsYW4gQmlydGhkYXkgUGFydHlcIiwgXCJQbGFuIGEgc3VycHJpc2UgYmlydGhkYXkgcGFydHkgZm9yIGEgZnJpZW5kLlwiLCBuZXcgRGF0ZSgyMDIzLCAxMCwgMjUpLCBcIkhpZ2hcIiwgZmFsc2UpO1xyXG5wcm9qZWN0My5hZGRUb2RvKHRvZG8xMSk7XHJcblxyXG52YXIgdG9kbzEyID0gY3JlYXRlVG9kbyhcIkxlYXJuIEd1aXRhciBDaG9yZHNcIiwgXCJQcmFjdGljZSBhbmQgbGVhcm4gbmV3IGd1aXRhciBjaG9yZHMgZm9yIHRoZSBzb25nLlwiLCBuZXcgRGF0ZSgyMDIzLCAxMCwgMTYpLCBcIkxvd1wiLCBmYWxzZSk7XHJcbnByb2plY3QzLmFkZFRvZG8odG9kbzEyKTtcclxuXHJcbnByb2plY3RzLmFkZFByb2plY3QocHJvamVjdDEpO1xyXG5wcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QyKTtcclxucHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0Myk7XHJcblxyXG5jb25zb2xlLmxvZyhzdHJpbmdpZnlQcm9qZWN0cyhwcm9qZWN0cykpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBzdHJpbmdpZnlQcm9qZWN0cyhwcm9qZWN0cykpO1xyXG5cclxucHJvamVjdHMuZGVsZXRlUHJvamVjdChwcm9qZWN0MS5nZXRJZCgpKTtcclxucHJvamVjdHMuZGVsZXRlUHJvamVjdChwcm9qZWN0Mi5nZXRJZCgpKTtcclxucHJvamVjdHMuZGVsZXRlUHJvamVjdChwcm9qZWN0My5nZXRJZCgpKTtcclxuXHJcbmNvbnNvbGUubG9nKFwicHJvamVjdHMgXCIpO1xyXG5jb25zb2xlLmxvZyhwcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpKTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XHJcbiAgcG9wdWxhdGVQcm9qZWN0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7XHJcbn1cclxucHJvamVjdHMuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKHByb2plY3QgPT4geyBcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRpdGxlKCkpXHJcbiAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RvLmdldElkKCkpO1xyXG4gICAgY29uc29sZS5sb2codG9kby5nZXRUaXRsZSgpKTtcclxuICAgIGNvbnNvbGUubG9nKHRvZG8uZ2V0RGVzY3JpcHRpb24oKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RvLmdldER1ZURhdGUoKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RvLmdldFByaW9yaXR5KCkpO1xyXG4gICAgY29uc29sZS5sb2codG9kby5nZXRDb21wbGV0ZWQoKSk7XHJcbiAgfSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=