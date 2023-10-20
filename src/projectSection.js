import createProject from "./project";
import { projects, stringifyProjects, populateProjects } from "./projects";
import { openAddTodoDialog, openEditTodoDialog, formatDate } from "./dialog";
import { handleDeleteTodoButton, changeCompleted, deleteProject } from "./buttonHandle";

export default function createProjectSection() {
  var projectsDiv = document.querySelector(".projects");
  if (projectsDiv.hasChildNodes()) {
    clearProjectsChild(projectsDiv);
  }
  if (localStorage.getItem('projects') === null) {
    initializeLocalStorage();
  }
  populateProjects(JSON.parse(localStorage.getItem('projects')));
  projectsDiv.append(...createProjectCards(projects.getProjectList()));
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
  let defaultProject = createProject('default');
  projects.addProject(defaultProject);
  localStorage.setItem('projects', stringifyProjects(projects));
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
  addToDoButton.addEventListener('click', openAddTodoDialog);

  return addToDoButton;
}
function createProjectDeleteButton(projectId) {
  var deleteProjectButton = document.createElement('button');
  deleteProjectButton.textContent = 'delete';
  deleteProjectButton.setAttribute('projectId', projectId);
  deleteProjectButton.addEventListener('click', deleteProject);

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
  todoDate.textContent = formatDate(dueDate);
  todoDate.setAttribute('datetime', formatDate(dueDate));

  return todoDate;
}

function createDeleteTodoButton(projectId, todoId) {
  var deleteTodoButton = document.createElement('button');
  deleteTodoButton.textContent = 'Delete';
  deleteTodoButton.setAttribute('projectId', projectId);
  deleteTodoButton.setAttribute('todoId', todoId);
  deleteTodoButton.addEventListener('click', handleDeleteTodoButton, true);

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
  editButton.addEventListener('click', openEditTodoDialog);

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
  inputCheck.addEventListener('click', changeCompleted);

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
