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

/***/ "./src/buttonHandle.js":
/*!*****************************!*\
  !*** ./src/buttonHandle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCompleted: () => (/* binding */ changeCompleted),
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
  var projectTitle = document.createElement("h1");
  projectTitle.textContent = project.getTitle();

  var addToDoButton = document.createElement("button");
  addToDoButton.textContent = 'Add';
  addToDoButton.setAttribute('data-attribute', project.getId())
  addToDoButton.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_2__.addTodoDialog);

  var todoList = document.createElement('div');
  project.getTodoList().forEach(todo => {
    todoList.append(createTodoElement(project, todo));
  });

  projectCard.append(projectTitle, addToDoButton, todoList);
  return projectCard;
}

function createTodoElement(project, todo) {
  var todoDiv = document.createElement('div');
  var todoElement = document.createElement('h2');

  todoElement.textContent = todo.getTitle();
  todoElement.setAttribute('projectId', project.getId());
  todoElement.setAttribute('todoId', todo.getId());
  todoElement.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_2__.editTodoDialog);

  todoDiv.append(todoElement, createDeleteButton(project, todo), createCheckInput(project, todo));
  return todoDiv;
}

function createDeleteButton(project, todo) {
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
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectSection */ "./src/projectSection.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");



(0,_projectSection__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_dialog__WEBPACK_IMPORTED_MODULE_1__.addCancelEventListeners)();

var addProjectButton = document.querySelector('#addProject');
addProjectButton.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_1__.openProjectDialog);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkRlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7QUFDaUI7QUFDckU7QUFDQSwyREFBb0I7QUFDcEIsZ0VBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSwyQ0FBMkMsc0RBQWlCO0FBQzVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbkhhbmRsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0U2VjdGlvbiBmcm9tIFwiLi9wcm9qZWN0U2VjdGlvblwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgc3RyaW5naWZ5UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBjbG9zZURpYWxvZywgcmVzZXRGb3JtIH0gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGUpIHtcclxuICB2YXIgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpO1xyXG4gIGlmIChwcm9qZWN0VGl0bGUudmFsdWUgPT09ICcnKVxyXG4gICAgcmV0dXJuO1xyXG4gIGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSk7XHJcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgcmVzZXRQYWdlKHByb2plY3REaWFsb2csICdwcm9qZWN0Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9kb1N1Ym1pdChlKSB7XHJcbiAgaWYgKHZhbGlkYXRlVG9kb0Zvcm0oZ2V0VG9kb0RhdGEoKSkgPT09IGZhbHNlKVxyXG4gICAgcmV0dXJuO1xyXG4gIGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICAgIGxldCB0b2RvRGF0YSA9IGdldFRvZG9EYXRhKCk7XHJcbiAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8odG9kb0RhdGEudGl0bGUsIHRvZG9EYXRhLmRlc2NyaXB0aW9uLCBuZXcgRGF0ZSh0b2RvRGF0YS5kdWVEYXRlKSwgdG9kb0RhdGEucHJpb3JpdHksIGZhbHNlKTtcclxuICAgIHByb2plY3RzLmZpbmRQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKSkuYWRkVG9kbyh0b2RvKTtcclxuXHJcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZG9TdWJtaXQpO1xyXG4gICAgcmVzZXRQYWdlKHRvZG9EaWFsb2csICd0b2RvJyk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVUb2RvQnV0dG9uKGUpIHtcclxuICB2YXIgcHJvamVjdCA9IHByb2plY3RzLmZpbmRQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdElkJykpO1xyXG4gIHZhciB0b2RvID0gcHJvamVjdC5maW5kVG9kbyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RvZG9JZCcpKTtcclxuICBwcm9qZWN0LmRlbGV0ZVRvZG8odG9kby5nZXRJZCgpKTtcclxuICByZXNldFBhZ2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRWRpdFN1Ym1pdChlKSB7XHJcbiAgaWYgKHZhbGlkYXRlVG9kb0Zvcm0oZ2V0VG9kb0RhdGEoKSkgPT09IGZhbHNlKVxyXG4gICAgcmV0dXJuO1xyXG4gIGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgbGV0IHRvZG9EYXRhID0gZ2V0VG9kb0RhdGEoKTtcclxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZFByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKSk7XHJcbiAgICBsZXQgdG9kbyA9IHByb2plY3QuZmluZFRvZG8oZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0b2RvSWQnKSk7XHJcbiAgICBlZGl0VG9kbyh0b2RvRGF0YSwgdG9kbyk7XHJcblxyXG4gICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0U3VibWl0KTtcclxuICAgIHJlc2V0UGFnZSh0b2RvRGlhbG9nLCAndG9kbycpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29tcGxldGVkKGUpIHtcclxuICB2YXIgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKTtcclxuICB2YXIgdG9kb0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0b2RvSWQnKTtcclxuICB2YXIgcHJvamVjdCA9IHByb2plY3RzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XHJcbiAgdmFyIHRvZG8gPSBwcm9qZWN0LmZpbmRUb2RvKHRvZG9JZCk7XHJcbiAgY29uc3QgbmV3Q29tcGxldGVkVmFsdWUgPSB0b2RvLmdldENvbXBsZXRlZCgpID8gZmFsc2UgOiB0cnVlO1xyXG4gIHRvZG8uc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZFZhbHVlKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLHN0cmluZ2lmeVByb2plY3RzKHByb2plY3RzKSk7XHJcbn1cclxuZnVuY3Rpb24gZWRpdFRvZG8odG9kb0RhdGEsIHRvZG8pIHtcclxuICB0b2RvLnNldFRpdGxlKHRvZG9EYXRhLnRpdGxlKTtcclxuICB0b2RvLnNldERlc2NyaXB0aW9uKHRvZG9EYXRhLmRlc2NyaXB0aW9uKTtcclxuICB0b2RvLnNldER1ZURhdGUobmV3IERhdGUodG9kb0RhdGEuZHVlRGF0ZSkpO1xyXG4gIHRvZG8uc2V0UHJpb3JpdHkodG9kb0RhdGEucHJpb3JpdHkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvZG9EYXRhKCkge1xyXG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKS52YWx1ZTtcclxuICB2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICB2YXIgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWU7XHJcbiAgdmFyIHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkYCkudmFsdWU7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVG9kb0Zvcm0odG9kbykge1xyXG4gIGlmICh0b2RvLnRpdGxlID09PSAnJyB8fCB0b2RvLmRlc2NyaXB0aW9uID09PSAnJyB8fCB0b2RvLmR1ZURhdGUgPT09ICcnIHx8IHRvZG8ucHJpb3JpdHkgPT09ICcnKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFBhZ2UoZGlhbG9nLCB0eXBlKSB7XHJcbiAgaWYgKHR5cGUgJiYgZGlhbG9nKSB7XHJcbiAgICByZXNldEZvcm0odHlwZSk7XHJcbiAgICBjbG9zZURpYWxvZyhkaWFsb2cpO1xyXG4gIH1cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBzdHJpbmdpZnlQcm9qZWN0cyhwcm9qZWN0cykpO1xyXG4gIHByb2plY3RzLnJlc2V0UHJvamVjdExpc3QoKTtcclxuICBjcmVhdGVQcm9qZWN0U2VjdGlvbigpO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVQcm9qZWN0U3VibWl0LCBoYW5kbGVUb2RvU3VibWl0LCBoYW5kbGVFZGl0U3VibWl0IH0gZnJvbSBcIi4vYnV0dG9uSGFuZGxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FuY2VsRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgdmFyIHByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENhbmNlbCcpO1xyXG4gIHZhciB0b2RvQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9DYW5jZWwnKTtcclxuXHJcbiAgcHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZURpYWxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpKTtcclxuICAgIHJlc2V0Rm9ybSgncHJvamVjdCcpO1xyXG4gIH0pXHJcbiAgdG9kb0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZURpYWxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpKTtcclxuICAgIHJlc2V0Rm9ybSgndG9kbycpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdERpYWxvZygpIHtcclxuICB2YXIgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XHJcbiAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcclxuICBhZGRQcm9qZWN0U3VibWl0RXZlbnRMaXN0ZW5lcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb0RpYWxvZyhlKSB7XHJcbiAgdmFyIGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XHJcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gIGFkZFRvZG9TdWJtaXRCdXR0b25FdmVudExpc3RlbmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0RpYWxvZyhlKSB7XHJcbiAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0b2RvSWQnKTtcclxuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcpO1xyXG4gIHZhciBwcm9qZWN0ID0gcHJvamVjdHMuZmluZFByb2plY3QocHJvamVjdElkKTtcclxuICB2YXIgdG9kbyA9IHByb2plY3QuZmluZFRvZG8odG9kb0lkKTtcclxuXHJcbiAgdmFyIGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XHJcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gIHBvcHVsYXRlRGlhbG9nSW5wdXQodG9kbylcclxuICBhZGRFZGl0VG9kb1N1Ym1pdEV2ZW50TGlzdGVuZXIocHJvamVjdElkLCB0b2RvSWQpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRGlhbG9nKGRpYWxvZykge1xyXG4gIGRpYWxvZy5jbG9zZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0odHlwZSkge1xyXG4gIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcclxuICAgIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJyk7XHJcbiAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSAnJztcclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3RvZG8nKSB7XHJcbiAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJyk7XHJcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgdmFyIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgdmFyIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xyXG4gICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgdmFyIGNoZWNrZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZGApO1xyXG4gICAgY2hlY2tlZFByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHZhciBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I21lZGl1bScpO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHBvcHVsYXRlRGlhbG9nSW5wdXQodG9kbykge1xyXG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKTtcclxuICB0aXRsZS52YWx1ZSA9IHRvZG8uZ2V0VGl0bGUoKTtcclxuICB2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcclxuICB2YXIgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XHJcbiAgZHVlRGF0ZS52YWx1ZSA9IGZvcm1hdERhdGUodG9kby5nZXREdWVEYXRlKCkpO1xyXG4gIHZhciBjaGVja2VkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWRgKTtcclxuICBjaGVja2VkUHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIHZhciB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0b2RvLmdldFByaW9yaXR5KCl9YCk7XHJcbiAgdG9kb1ByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpLnRvU3RyaW5nKCkubGVuZ3RoID09PSAyID8gZGF0ZS5nZXRNb250aCgpIDogJzAnICsgZGF0ZS5nZXRNb250aCgpO1xyXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkubGVuZ3RoID09PSAyID8gZGF0ZS5nZXREYXRlKCkgOiAnMCcgKyBkYXRlLmdldERhdGUoKTtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RTdWJtaXRFdmVudExpc3RlbmVyKCkge1xyXG4gIHZhciBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKTtcclxuICBzdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9TdWJtaXRCdXR0b25FdmVudExpc3RlbmVyKGlkKSB7XHJcbiAgdmFyIHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvU3VibWl0Jyk7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJztcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsIGlkKTtcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2RvU3VibWl0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFZGl0VG9kb1N1Ym1pdEV2ZW50TGlzdGVuZXIocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICB2YXIgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvU3VibWl0Jyk7XHJcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0IFRvZG8nO1xyXG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnLCBwcm9qZWN0SWQpO1xyXG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0b2RvSWQnLCB0b2RvSWQpO1xyXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0U3VibWl0KTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGNvbXBhcmVBc2N9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XHJcbiAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCk7XHJcbiAgdmFyIHRvZG9MaXN0ID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGdldElkKCl7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRUaXRsZSgpe1xyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpe1xyXG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9MaXN0KCl7XHJcbiAgICByZXR1cm4gdG9kb0xpc3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUb2RvKHRvZG8pe1xyXG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcclxuICAgIHNvcnRUb2RvTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmluZFRvZG8oaWQpe1xyXG4gICAgcmV0dXJuIHRvZG9MaXN0LmZpbmQodG9kbyA9PiB0b2RvLmdldElkKCkgPT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhpZCl7XHJcbiAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LmZpbHRlcih0b2RvID0+IHRvZG8uZ2V0SWQoKSAhPSBpZCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNvcnRUb2RvTGlzdCgpe1xyXG4gICAgdG9kb0xpc3Quc29ydCgobGVmdCxyaWdodCkgPT4gY29tcGFyZUFzYyhsZWZ0LmdldER1ZURhdGUoKSxyaWdodC5nZXREdWVEYXRlKCkpKTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGdldElkLGdldFRpdGxlLGdldFRvZG9MaXN0LFxyXG4gICAgc2V0VGl0bGUsYWRkVG9kbyxmaW5kVG9kbyxkZWxldGVUb2RvXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0OyIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMsIHN0cmluZ2lmeVByb2plY3RzLCBwb3B1bGF0ZVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgYWRkVG9kb0RpYWxvZywgZWRpdFRvZG9EaWFsb2cgfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHsgaGFuZGxlRGVsZXRlVG9kb0J1dHRvbiwgY2hhbmdlQ29tcGxldGVkIH0gZnJvbSBcIi4vYnV0dG9uSGFuZGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VjdGlvbigpIHtcclxuICB2YXIgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xyXG4gIGlmIChwcm9qZWN0c0Rpdi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIEFycmF5LmZyb20ocHJvamVjdHNEaXYuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpIHtcclxuICAgIHZhciBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ2RlZmF1bHQnKTtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgc3RyaW5naWZ5UHJvamVjdHMocHJvamVjdHMpKTtcclxuICB9XHJcbiAgcG9wdWxhdGVQcm9qZWN0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7XHJcbiAgdmFyIHByb2plY3RDYXJkcyA9IHByb2plY3RzLmdldFByb2plY3RMaXN0KCkubWFwKChwcm9qZWN0KSA9PiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSlcclxuXHJcbiAgcHJvamVjdHNEaXYuYXBwZW5kKC4uLnByb2plY3RDYXJkcylcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICB2YXIgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB2YXIgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuXHJcbiAgdmFyIGFkZFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICBhZGRUb0RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBwcm9qZWN0LmdldElkKCkpXHJcbiAgYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvZG9EaWFsb2cpO1xyXG5cclxuICB2YXIgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgIHRvZG9MaXN0LmFwcGVuZChjcmVhdGVUb2RvRWxlbWVudChwcm9qZWN0LCB0b2RvKSk7XHJcbiAgfSk7XHJcblxyXG4gIHByb2plY3RDYXJkLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvRG9CdXR0b24sIHRvZG9MaXN0KTtcclxuICByZXR1cm4gcHJvamVjdENhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9FbGVtZW50KHByb2plY3QsIHRvZG8pIHtcclxuICB2YXIgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHZhciB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblxyXG4gIHRvZG9FbGVtZW50LnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xyXG4gIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgncHJvamVjdElkJywgcHJvamVjdC5nZXRJZCgpKTtcclxuICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG8uZ2V0SWQoKSk7XHJcbiAgdG9kb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kb0RpYWxvZyk7XHJcblxyXG4gIHRvZG9EaXYuYXBwZW5kKHRvZG9FbGVtZW50LCBjcmVhdGVEZWxldGVCdXR0b24ocHJvamVjdCwgdG9kbyksIGNyZWF0ZUNoZWNrSW5wdXQocHJvamVjdCwgdG9kbykpO1xyXG4gIHJldHVybiB0b2RvRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdXR0b24ocHJvamVjdCwgdG9kbykge1xyXG4gIHZhciBkZWxldGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gIGRlbGV0ZVRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnLCBwcm9qZWN0LmdldElkKCkpO1xyXG4gIGRlbGV0ZVRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCd0b2RvSWQnLCB0b2RvLmdldElkKCkpO1xyXG4gIGRlbGV0ZVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEZWxldGVUb2RvQnV0dG9uKTtcclxuICByZXR1cm4gZGVsZXRlVG9kb0J1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tJbnB1dChwcm9qZWN0LCB0b2RvKSB7XHJcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHZhciBpbnB1dENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dENoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKCdpZCcsYEEke3RvZG8uZ2V0SWQoKX1gKTtcclxuICBpbnB1dENoZWNrLnNldEF0dHJpYnV0ZSgncHJvamVjdElkJywgcHJvamVjdC5nZXRJZCgpKTtcclxuICBpbnB1dENoZWNrLnNldEF0dHJpYnV0ZSgndG9kb0lkJywgdG9kby5nZXRJZCgpKTtcclxuICBpbnB1dENoZWNrLmNoZWNrZWQgPSB0b2RvLmdldENvbXBsZXRlZCgpO1xyXG4gIGlucHV0Q2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb21wbGV0ZWQpO1xyXG5cclxuICB2YXIgY29tcGxldGVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGNvbXBsZXRlZExhYmVsLnRleHRDb250ZW50ID0gXCJjb21wbGV0ZWRcIjtcclxuICBjb21wbGV0ZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYEEke3RvZG8uZ2V0SWQoKX1gKTtcclxuICBjb21wbGV0ZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3QuZ2V0SWQoKSk7XHJcbiAgY29tcGxldGVkTGFiZWwuc2V0QXR0cmlidXRlKCd0b2RvSWQnLCB0b2RvLmdldElkKCkpO1xyXG5cclxuICBkaXYuYXBwZW5kKGlucHV0Q2hlY2ssIGNvbXBsZXRlZExhYmVsKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5leHBvcnQgdmFyIHByb2plY3RzID0gKCgpID0+IHtcclxuICB2YXIgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UHJvamVjdExpc3QoKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldFByb2plY3RMaXN0KCkge1xyXG4gICAgcHJvamVjdExpc3QgPSBbXTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZmluZFByb2plY3QoaWQpIHtcclxuICAgIHJldHVybiBwcm9qZWN0TGlzdC5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09IGlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQpIHtcclxuICAgIHByb2plY3RMaXN0ID0gcHJvamVjdExpc3QuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpICE9IGlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldFByb2plY3RMaXN0LCBhZGRQcm9qZWN0LCBmaW5kUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgcmVzZXRQcm9qZWN0TGlzdCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMocHJvamVjdEZyb21TdG9yYWdlKSB7XHJcbiAgcHJvamVjdHMucmVzZXRQcm9qZWN0TGlzdCgpO1xyXG4gIHByb2plY3RGcm9tU3RvcmFnZS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RbXCJ0aXRsZVwiXSk7XHJcbiAgICBwcm9qZWN0W1widG9kb0xpc3RcIl0uZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgbGV0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRvZG9bXCJ0aXRsZVwiXSwgdG9kb1tcImRlc2NyaXB0aW9uXCJdLCBuZXcgRGF0ZSh0b2RvW1wiZHVlRGF0ZVwiXSksXHJcbiAgICAgICAgdG9kb1tcInByaW9yaXR5XCJdLCB0b2RvW1wiY29tcGxldGVkXCJdKTtcclxuICAgICAgbmV3UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5UHJvamVjdHMocHJvamVjdHMpIHtcclxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMuZ2V0UHJvamVjdExpc3QoKS5tYXAocHJvamVjdCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogcHJvamVjdC5nZXRUaXRsZSgpLFxyXG4gICAgICB0b2RvTGlzdDogcHJvamVjdC5nZXRUb2RvTGlzdCgpLm1hcCh0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGl0bGU6IHRvZG8uZ2V0VGl0bGUoKSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0b2RvLmdldERlc2NyaXB0aW9uKCksXHJcbiAgICAgICAgICBkdWVEYXRlOiB0b2RvLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgIHByaW9yaXR5OiB0b2RvLmdldFByaW9yaXR5KCksXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IHRvZG8uZ2V0Q29tcGxldGVkKCksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG87XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xyXG4gIGNvbnN0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJZCgpe1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldENvbXBsZXRlZCgpIHtcclxuICAgIHJldHVybiBjb21wbGV0ZWQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRDb21wbGV0ZWQobmV3Q29tcGxldGVkKSB7XHJcbiAgICBjb21wbGV0ZWQgPSBuZXdDb21wbGV0ZWQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRJZCxnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBnZXRDb21wbGV0ZWQsXHJcbiAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9yaXR5LCBzZXRDb21wbGV0ZWRcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3RTZWN0aW9uIGZyb20gXCIuL3Byb2plY3RTZWN0aW9uXCI7XHJcbmltcG9ydCB7IGFkZENhbmNlbEV2ZW50TGlzdGVuZXJzLG9wZW5Qcm9qZWN0RGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9nXCI7XHJcblxyXG5jcmVhdGVQcm9qZWN0U2VjdGlvbigpO1xyXG5hZGRDYW5jZWxFdmVudExpc3RlbmVycygpO1xyXG5cclxudmFyIGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpO1xyXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3REaWFsb2cpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9