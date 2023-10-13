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
  var todoElement = document.createElement('h2');

  todoElement.textContent = todo.getTitle();
  todoElement.setAttribute('projectId', project.getId());
  todoElement.setAttribute('todoId', todo.getId());
  todoElement.addEventListener('click', _dialog__WEBPACK_IMPORTED_MODULE_2__.editTodoDialog);

  todoDiv.append(todoElement, createDeleteTodoButton(project, todo), createCheckInput(project, todo));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2RGU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vRDtBQUNpQjtBQUNyRTtBQUNBLDJEQUFvQjtBQUNwQixnRUFBdUI7QUFDdkI7QUFDQTtBQUNBLDJDQUEyQyxzREFBaUI7QUFDNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYnV0dG9uSGFuZGxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3RTZWN0aW9uIGZyb20gXCIuL3Byb2plY3RTZWN0aW9uXCI7XHJcbmltcG9ydCB7IHByb2plY3RzLCBzdHJpbmdpZnlQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGNsb3NlRGlhbG9nLCByZXNldEZvcm0gfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RTdWJtaXQoZSkge1xyXG4gIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJyk7XHJcbiAgaWYgKHByb2plY3RUaXRsZS52YWx1ZSA9PT0gJycpXHJcbiAgICByZXR1cm47XHJcbiAgZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlKTtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICByZXNldFBhZ2UocHJvamVjdERpYWxvZywgJ3Byb2plY3QnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb2RvU3VibWl0KGUpIHtcclxuICBpZiAodmFsaWRhdGVUb2RvRm9ybShnZXRUb2RvRGF0YSgpKSA9PT0gZmFsc2UpXHJcbiAgICByZXR1cm47XHJcbiAgZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgbGV0IHRvZG9EYXRhID0gZ2V0VG9kb0RhdGEoKTtcclxuICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyh0b2RvRGF0YS50aXRsZSwgdG9kb0RhdGEuZGVzY3JpcHRpb24sIG5ldyBEYXRlKHRvZG9EYXRhLmR1ZURhdGUpLCB0b2RvRGF0YS5wcmlvcml0eSwgZmFsc2UpO1xyXG4gICAgcHJvamVjdHMuZmluZFByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpKS5hZGRUb2RvKHRvZG8pO1xyXG5cclxuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kb1N1Ym1pdCk7XHJcbiAgICByZXNldFBhZ2UodG9kb0RpYWxvZywgJ3RvZG8nKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRvZG9CdXR0b24oZSkge1xyXG4gIHZhciBwcm9qZWN0ID0gcHJvamVjdHMuZmluZFByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKSk7XHJcbiAgdmFyIHRvZG8gPSBwcm9qZWN0LmZpbmRUb2RvKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndG9kb0lkJykpO1xyXG4gIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvLmdldElkKCkpO1xyXG4gIHJlc2V0UGFnZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFZGl0U3VibWl0KGUpIHtcclxuICBpZiAodmFsaWRhdGVUb2RvRm9ybShnZXRUb2RvRGF0YSgpKSA9PT0gZmFsc2UpXHJcbiAgICByZXR1cm47XHJcbiAgZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdG9kb0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XHJcbiAgICBsZXQgdG9kb0RhdGEgPSBnZXRUb2RvRGF0YSgpO1xyXG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kUHJvamVjdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcpKTtcclxuICAgIGxldCB0b2RvID0gcHJvamVjdC5maW5kVG9kbyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RvZG9JZCcpKTtcclxuICAgIGVkaXRUb2RvKHRvZG9EYXRhLCB0b2RvKTtcclxuXHJcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVkaXRTdWJtaXQpO1xyXG4gICAgcmVzZXRQYWdlKHRvZG9EaWFsb2csICd0b2RvJyk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb21wbGV0ZWQoZSkge1xyXG4gIHZhciBwcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcpO1xyXG4gIHZhciB0b2RvSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RvZG9JZCcpO1xyXG4gIHZhciBwcm9qZWN0ID0gcHJvamVjdHMuZmluZFByb2plY3QocHJvamVjdElkKTtcclxuICB2YXIgdG9kbyA9IHByb2plY3QuZmluZFRvZG8odG9kb0lkKTtcclxuICBjb25zdCBuZXdDb21wbGV0ZWRWYWx1ZSA9IHRvZG8uZ2V0Q29tcGxldGVkKCkgPyBmYWxzZSA6IHRydWU7XHJcbiAgdG9kby5zZXRDb21wbGV0ZWQobmV3Q29tcGxldGVkVmFsdWUpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsc3RyaW5naWZ5UHJvamVjdHMocHJvamVjdHMpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKXtcclxuICBwcm9qZWN0cy5kZWxldGVQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdElkJykpO1xyXG4gIHJlc2V0UGFnZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGVkaXRUb2RvKHRvZG9EYXRhLCB0b2RvKSB7XHJcbiAgdG9kby5zZXRUaXRsZSh0b2RvRGF0YS50aXRsZSk7XHJcbiAgdG9kby5zZXREZXNjcmlwdGlvbih0b2RvRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgdG9kby5zZXREdWVEYXRlKG5ldyBEYXRlKHRvZG9EYXRhLmR1ZURhdGUpKTtcclxuICB0b2RvLnNldFByaW9yaXR5KHRvZG9EYXRhLnByaW9yaXR5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2RvRGF0YSgpIHtcclxuICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJykudmFsdWU7XHJcbiAgdmFyIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgdmFyIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlO1xyXG4gIHZhciBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZGApLnZhbHVlO1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRvZG9Gb3JtKHRvZG8pIHtcclxuICBpZiAodG9kby50aXRsZSA9PT0gJycgfHwgdG9kby5kZXNjcmlwdGlvbiA9PT0gJycgfHwgdG9kby5kdWVEYXRlID09PSAnJyB8fCB0b2RvLnByaW9yaXR5ID09PSAnJylcclxuICAgIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRQYWdlKGRpYWxvZywgdHlwZSkge1xyXG4gIGlmICh0eXBlICYmIGRpYWxvZykge1xyXG4gICAgcmVzZXRGb3JtKHR5cGUpO1xyXG4gICAgY2xvc2VEaWFsb2coZGlhbG9nKTtcclxuICB9XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgc3RyaW5naWZ5UHJvamVjdHMocHJvamVjdHMpKTtcclxuICBwcm9qZWN0cy5yZXNldFByb2plY3RMaXN0KCk7XHJcbiAgY3JlYXRlUHJvamVjdFNlY3Rpb24oKTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgaGFuZGxlUHJvamVjdFN1Ym1pdCwgaGFuZGxlVG9kb1N1Ym1pdCwgaGFuZGxlRWRpdFN1Ym1pdCB9IGZyb20gXCIuL2J1dHRvbkhhbmRsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbmNlbEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIHZhciBwcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYW5jZWwnKTtcclxuICB2YXIgdG9kb0NhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ2FuY2VsJyk7XHJcblxyXG4gIHByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2xvc2VEaWFsb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKSk7XHJcbiAgICByZXNldEZvcm0oJ3Byb2plY3QnKTtcclxuICB9KVxyXG4gIHRvZG9DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2xvc2VEaWFsb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKSk7XHJcbiAgICByZXNldEZvcm0oJ3RvZG8nKTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3REaWFsb2coKSB7XHJcbiAgdmFyIHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xyXG4gIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgYWRkUHJvamVjdFN1Ym1pdEV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9EaWFsb2coZSkge1xyXG4gIHZhciBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICBhZGRUb2RvU3VibWl0QnV0dG9uRXZlbnRMaXN0ZW5lcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9EaWFsb2coZSkge1xyXG4gIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndG9kb0lkJyk7XHJcbiAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnKTtcclxuICB2YXIgcHJvamVjdCA9IHByb2plY3RzLmZpbmRQcm9qZWN0KHByb2plY3RJZCk7XHJcbiAgdmFyIHRvZG8gPSBwcm9qZWN0LmZpbmRUb2RvKHRvZG9JZCk7XHJcblxyXG4gIHZhciBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICBwb3B1bGF0ZURpYWxvZ0lucHV0KHRvZG8pXHJcbiAgYWRkRWRpdFRvZG9TdWJtaXRFdmVudExpc3RlbmVyKHByb2plY3RJZCwgdG9kb0lkKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURpYWxvZyhkaWFsb2cpIHtcclxuICBkaWFsb2cuY2xvc2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKHR5cGUpIHtcclxuICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XHJcbiAgICB2YXIgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpO1xyXG4gICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJyc7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHR5cGUgPT09ICd0b2RvJykge1xyXG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpO1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJztcclxuICAgIHZhciBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgIHZhciBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcclxuICAgIGR1ZURhdGUudmFsdWUgPSAnJztcclxuICAgIHZhciBjaGVja2VkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWRgKTtcclxuICAgIGNoZWNrZWRQcmlvcml0eS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB2YXIgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNtZWRpdW0nKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBwb3B1bGF0ZURpYWxvZ0lucHV0KHRvZG8pIHtcclxuICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJyk7XHJcbiAgdGl0bGUudmFsdWUgPSB0b2RvLmdldFRpdGxlKCk7XHJcbiAgdmFyIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgdmFyIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBmb3JtYXREYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKTtcclxuICB2YXIgY2hlY2tlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkYCk7XHJcbiAgY2hlY2tlZFByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcclxuICB2YXIgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dG9kby5nZXRQcmlvcml0eSgpfWApO1xyXG4gIHRvZG9Qcmlvcml0eS5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpLmxlbmd0aCA9PT0gMiA/IGRhdGUuZ2V0TW9udGgoKSA6ICcwJyArIGRhdGUuZ2V0TW9udGgoKTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLmxlbmd0aCA9PT0gMiA/IGRhdGUuZ2V0RGF0ZSgpIDogJzAnICsgZGF0ZS5nZXREYXRlKCk7XHJcblxyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0U3VibWl0RXZlbnRMaXN0ZW5lcigpIHtcclxuICB2YXIgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XHJcbiAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RTdWJtaXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb2RvU3VibWl0QnV0dG9uRXZlbnRMaXN0ZW5lcihpZCkge1xyXG4gIHZhciBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1N1Ym1pdCcpO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBpZCk7XHJcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kb1N1Ym1pdClcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWRpdFRvZG9TdWJtaXRFdmVudExpc3RlbmVyKHByb2plY3RJZCwgdG9kb0lkKSB7XHJcbiAgdmFyIGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1N1Ym1pdCcpO1xyXG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBUb2RvJztcclxuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgncHJvamVjdElkJywgcHJvamVjdElkKTtcclxuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndG9kb0lkJywgdG9kb0lkKTtcclxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRWRpdFN1Ym1pdCk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpe1xyXG4gIGNvbnN0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApO1xyXG4gIHZhciB0b2RvTGlzdCA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJZCgpe1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VGl0bGUoKXtcclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKXtcclxuICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRUb2RvTGlzdCgpe1xyXG4gICAgcmV0dXJuIHRvZG9MaXN0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKXtcclxuICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XHJcbiAgICBzb3J0VG9kb0xpc3QoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbmRUb2RvKGlkKXtcclxuICAgIHJldHVybiB0b2RvTGlzdC5maW5kKHRvZG8gPT4gdG9kby5nZXRJZCgpID09IGlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oaWQpe1xyXG4gICAgdG9kb0xpc3QgPSB0b2RvTGlzdC5maWx0ZXIodG9kbyA9PiB0b2RvLmdldElkKCkgIT0gaWQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzb3J0VG9kb0xpc3QoKXtcclxuICAgIHRvZG9MaXN0LnNvcnQoKGxlZnQscmlnaHQpID0+IGNvbXBhcmVBc2MobGVmdC5nZXREdWVEYXRlKCkscmlnaHQuZ2V0RHVlRGF0ZSgpKSk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRJZCxnZXRUaXRsZSxnZXRUb2RvTGlzdCxcclxuICAgIHNldFRpdGxlLGFkZFRvZG8sZmluZFRvZG8sZGVsZXRlVG9kb1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IHByb2plY3RzLCBzdHJpbmdpZnlQcm9qZWN0cywgcG9wdWxhdGVQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGFkZFRvZG9EaWFsb2csIGVkaXRUb2RvRGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCB7IGhhbmRsZURlbGV0ZVRvZG9CdXR0b24sIGNoYW5nZUNvbXBsZXRlZCwgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL2J1dHRvbkhhbmRsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlY3Rpb24oKSB7XHJcbiAgdmFyIHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcclxuICBpZiAocHJvamVjdHNEaXYuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBBcnJheS5mcm9tKHByb2plY3RzRGl2LmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpID09PSBudWxsKSB7XHJcbiAgICB2YXIgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdkZWZhdWx0Jyk7XHJcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmeVByb2plY3RzKHByb2plY3RzKSk7XHJcbiAgfVxyXG4gIHBvcHVsYXRlUHJvamVjdHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xyXG4gIHZhciBwcm9qZWN0Q2FyZHMgPSBwcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpLm1hcCgocHJvamVjdCkgPT4gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkpXHJcblxyXG4gIHByb2plY3RzRGl2LmFwcGVuZCguLi5wcm9qZWN0Q2FyZHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICB2YXIgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB2YXIgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuXHJcbiAgdmFyIGFkZFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICBhZGRUb0RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBwcm9qZWN0LmdldElkKCkpXHJcbiAgYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvZG9EaWFsb2cpO1xyXG5cclxuICB2YXIgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgIHRvZG9MaXN0LmFwcGVuZChjcmVhdGVUb2RvRWxlbWVudChwcm9qZWN0LCB0b2RvKSk7XHJcbiAgfSk7XHJcblxyXG4gIHByb2plY3RDYXJkLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvRG9CdXR0b24sIGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24ocHJvamVjdCksIHRvZG9MaXN0KTtcclxuICByZXR1cm4gcHJvamVjdENhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24ocHJvamVjdCl7XHJcbiAgdmFyIGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XHJcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcscHJvamVjdC5nZXRJZCgpKTtcclxuICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVQcm9qZWN0KTtcclxuICBcclxuICByZXR1cm4gZGVsZXRlUHJvamVjdEJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0VsZW1lbnQocHJvamVjdCwgdG9kbykge1xyXG4gIHZhciB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdmFyIHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHJcbiAgdG9kb0VsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XHJcbiAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnLCBwcm9qZWN0LmdldElkKCkpO1xyXG4gIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgndG9kb0lkJywgdG9kby5nZXRJZCgpKTtcclxuICB0b2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvRGlhbG9nKTtcclxuXHJcbiAgdG9kb0Rpdi5hcHBlbmQodG9kb0VsZW1lbnQsIGNyZWF0ZURlbGV0ZVRvZG9CdXR0b24ocHJvamVjdCwgdG9kbyksIGNyZWF0ZUNoZWNrSW5wdXQocHJvamVjdCwgdG9kbykpO1xyXG4gIHJldHVybiB0b2RvRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVUb2RvQnV0dG9uKHByb2plY3QsIHRvZG8pIHtcclxuICB2YXIgZGVsZXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuICBkZWxldGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgncHJvamVjdElkJywgcHJvamVjdC5nZXRJZCgpKTtcclxuICBkZWxldGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndG9kb0lkJywgdG9kby5nZXRJZCgpKTtcclxuICBkZWxldGVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlVG9kb0J1dHRvbik7XHJcbiAgcmV0dXJuIGRlbGV0ZVRvZG9CdXR0b247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrSW5wdXQocHJvamVjdCwgdG9kbykge1xyXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB2YXIgaW5wdXRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXRDaGVjay50eXBlID0gJ2NoZWNrYm94JztcclxuICBpbnB1dENoZWNrLnNldEF0dHJpYnV0ZSgnaWQnLGBBJHt0b2RvLmdldElkKCl9YCk7XHJcbiAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJZCcsIHByb2plY3QuZ2V0SWQoKSk7XHJcbiAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoJ3RvZG9JZCcsIHRvZG8uZ2V0SWQoKSk7XHJcbiAgaW5wdXRDaGVjay5jaGVja2VkID0gdG9kby5nZXRDb21wbGV0ZWQoKTtcclxuICBpbnB1dENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ29tcGxldGVkKTtcclxuXHJcbiAgdmFyIGNvbXBsZXRlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb21wbGV0ZWRMYWJlbC50ZXh0Q29udGVudCA9IFwiY29tcGxldGVkXCI7XHJcbiAgY29tcGxldGVkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGBBJHt0b2RvLmdldElkKCl9YCk7XHJcbiAgY29tcGxldGVkTGFiZWwuc2V0QXR0cmlidXRlKCdwcm9qZWN0SWQnLCBwcm9qZWN0LmdldElkKCkpO1xyXG4gIGNvbXBsZXRlZExhYmVsLnNldEF0dHJpYnV0ZSgndG9kb0lkJywgdG9kby5nZXRJZCgpKTtcclxuXHJcbiAgZGl2LmFwcGVuZChpbnB1dENoZWNrLCBjb21wbGV0ZWRMYWJlbCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZXhwb3J0IHZhciBwcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgdmFyIHByb2plY3RMaXN0ID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGdldFByb2plY3RMaXN0KCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRQcm9qZWN0TGlzdCgpIHtcclxuICAgIHByb2plY3RMaXN0ID0gW107XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGZpbmRQcm9qZWN0KGlkKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdExpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkKSB7XHJcbiAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSAhPSBpZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXRQcm9qZWN0TGlzdCwgYWRkUHJvamVjdCwgZmluZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHJlc2V0UHJvamVjdExpc3QgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKHByb2plY3RGcm9tU3RvcmFnZSkge1xyXG4gIHByb2plY3RzLnJlc2V0UHJvamVjdExpc3QoKTtcclxuICBwcm9qZWN0RnJvbVN0b3JhZ2UuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0W1widGl0bGVcIl0pO1xyXG4gICAgcHJvamVjdFtcInRvZG9MaXN0XCJdLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgIGxldCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0b2RvW1widGl0bGVcIl0sIHRvZG9bXCJkZXNjcmlwdGlvblwiXSwgbmV3IERhdGUodG9kb1tcImR1ZURhdGVcIl0pLFxyXG4gICAgICAgIHRvZG9bXCJwcmlvcml0eVwiXSwgdG9kb1tcImNvbXBsZXRlZFwiXSk7XHJcbiAgICAgIG5ld1Byb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeVByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLmdldFByb2plY3RMaXN0KCkubWFwKHByb2plY3QgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHByb2plY3QuZ2V0VGl0bGUoKSxcclxuICAgICAgdG9kb0xpc3Q6IHByb2plY3QuZ2V0VG9kb0xpc3QoKS5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiB0b2RvLmdldFRpdGxlKCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5nZXREZXNjcmlwdGlvbigpLFxyXG4gICAgICAgICAgZHVlRGF0ZTogdG9kby5nZXREdWVEYXRlKCksXHJcbiAgICAgICAgICBwcmlvcml0eTogdG9kby5nZXRQcmlvcml0eSgpLFxyXG4gICAgICAgICAgY29tcGxldGVkOiB0b2RvLmdldENvbXBsZXRlZCgpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KSlcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcclxuICBjb25zdCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SWQoKXtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDb21wbGV0ZWQoKSB7XHJcbiAgICByZXR1cm4gY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCkge1xyXG4gICAgY29tcGxldGVkID0gbmV3Q29tcGxldGVkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SWQsZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0Q29tcGxldGVkLFxyXG4gICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSwgc2V0Q29tcGxldGVkXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVQcm9qZWN0U2VjdGlvbiBmcm9tIFwiLi9wcm9qZWN0U2VjdGlvblwiO1xyXG5pbXBvcnQgeyBhZGRDYW5jZWxFdmVudExpc3RlbmVycyxvcGVuUHJvamVjdERpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5cclxuY3JlYXRlUHJvamVjdFNlY3Rpb24oKTtcclxuYWRkQ2FuY2VsRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbnZhciBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3QnKTtcclxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0RGlhbG9nKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==