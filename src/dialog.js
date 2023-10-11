import createProjectSection from "./projectSection";
import createTodo from "./todo";
import createProject from "./project";
import { projects, stringifyProjects } from "./projects";

export function addCancelEventListeners() {
  var projectCancel = document.querySelector('.projectCancel');
  var todoCancel = document.querySelector('.todoCancel');

  projectCancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeDialog(document.querySelector('#project'));
  })
  todoCancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeDialog(document.querySelector('#todo'));
  })
}
export function openProjectDialog() {
  var projectDialog = document.querySelector('#project');
  projectDialog.showModal();
  addProjectSubmitEventListener();
}

export function openTodoDialog(e) {
  var dialog = document.querySelector('#todo');
  dialog.showModal();
  addTodoSubmitButtonEventListener(e.target.getAttribute('data-attribute'));
}
function addProjectSubmitEventListener() {
  var submitProject = document.querySelector('#submitProject');
  submitProject.addEventListener('click', handleSubmitProject);
}
function addTodoSubmitButtonEventListener(id) {
  var submitButton = document.querySelector('#addTodo');
  submitButton.setAttribute('data-attribute', id);
  submitButton.addEventListener('click', handleTodoSubmit)
}

function handleSubmitProject(e) {
  var projectTitle = document.querySelector('#projectTitle');
  if (projectTitle.value === '')
    return;
  else {
    e.preventDefault();
    let projectDialog = document.querySelector('#project');
    let newProject = createProject(projectTitle.value);
    projects.addProject(newProject);
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
    let todo = createTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority, false);
    projects.findProject(e.target.getAttribute('data-attribute')).addTodo(todo);

    e.target.removeEventListener('click', handleTodoSubmit);
    resetPage(todoDialog, 'todo');
  }
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
function closeDialog(dialog) {
  dialog.close();
}

function resetPage(dialog, type) {
  resetForm(type);
  closeDialog(dialog);
  localStorage.setItem('projects', stringifyProjects(projects));
  projects.resetProjectList();
  createProjectSection();
}

