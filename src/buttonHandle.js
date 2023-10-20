import createTodo from "./todo";
import createProject from "./project";
import createProjectSection from "./projectSection";
import { projects, stringifyProjects } from "./projects";
import { closeDialog, resetForm } from "./dialog";

export function handleProjectSubmit(e) {
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

export function handleTodoSubmit(e) {
  if (validateTodoForm(getTodoData()) === false)
    return;
  else {
    e.preventDefault();

    let todoDialog = document.querySelector('#todo');
    let todoData = getTodoData();
    let todo = createTodo(todoData.title, todoData.description, new Date(todoData.dueDate), todoData.priority, false);
    projects.findProject(e.target.getAttribute('data-attribute')).handleNewTodo(todo);

    e.target.removeEventListener('click', handleTodoSubmit);
    resetPage(todoDialog, 'todo');
  }
}
export function handleDeleteTodoButton(e) {
  var project = projects.findProject(e.target.getAttribute('projectId'));
  var todo = project.findTodo(e.target.getAttribute('todoId'));
  project.deleteTodo(todo.getId());
  resetPage();
}

export function handleEditSubmit(e) {
  if (validateTodoForm(getTodoData()) === false)
    return;
  else {
    e.preventDefault();
    let todoDialog = document.querySelector('#todo');
    let todoData = getTodoData();
    let project = projects.findProject(e.target.getAttribute('projectId'));
    let todo = project.findTodo(e.target.getAttribute('todoId'));
    editTodo(todoData, todo);

    e.target.removeEventListener('click', handleEditSubmit);
    resetPage(todoDialog, 'todo');
  }
}

export function changeCompleted(e) {
  var projectId = e.target.getAttribute('projectId');
  var todoId = e.target.getAttribute('todoId');
  var project = projects.findProject(projectId);
  var todo = project.findTodo(todoId);
  const newCompletedValue = todo.getCompleted() ? false : true;
  todo.setCompleted(newCompletedValue);
  localStorage.setItem('projects',stringifyProjects(projects));
}

export function deleteProject(e){
  projects.deleteProject(e.target.getAttribute('projectId'));
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

export function resetPage(dialog, type) {
  if (type && dialog) {
    resetForm(type);
    closeDialog(dialog);
    removeEventListener(type);
  }
  localStorage.setItem('projects', stringifyProjects(projects));
  projects.resetProjectList();
  createProjectSection();
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

