import createProject from "./project";
import { projects, stringifyProjects, populateProjects } from "./projects";
import { addTodoDialog, editTodoDialog,formatDate } from "./dialog";
import { handleDeleteTodoButton, changeCompleted, deleteProject } from "./buttonHandle";

export default function createProjectSection() {
  var projectsDiv = document.querySelector(".projects");

  if (projectsDiv.hasChildNodes()) {
    Array.from(projectsDiv.childNodes).forEach(child => {
      projectsDiv.removeChild(child);
    })
  }

  if (localStorage.getItem('projects') === null) {
    let defaultProject = createProject('default');
    projects.addProject(defaultProject);
    localStorage.setItem('projects', stringifyProjects(projects));
  }

  populateProjects(JSON.parse(localStorage.getItem('projects')));
  var projectCards = projects.getProjectList().map((project) => createProjectCard(project))

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
  addToDoButton.addEventListener('click', addTodoDialog);

  var todoList = document.createElement('div');
  todoList.setAttribute('class','todoList')
  project.getTodoList().forEach(todo => {
    todoList.append(createTodoElement(project, todo));
  });
  var buttonsDiv = document.createElement('div');
  buttonsDiv.setAttribute('class','projectButtons');
  buttonsDiv.append(addToDoButton,createProjectDeleteButton(project))
  projectCard.append(projectTitle, buttonsDiv, todoList);
  return projectCard;
}

function createProjectDeleteButton(project){
  var deleteProjectButton = document.createElement('button');
  deleteProjectButton.textContent = 'delete';
  deleteProjectButton.setAttribute('projectId',project.getId());
  deleteProjectButton.addEventListener('click',deleteProject);
  
  return deleteProjectButton;
}

function createTodoElement(project, todo) {
  var todoDiv = document.createElement('div');
  todoDiv.setAttribute('class','todo')
  var wrapperDivLeft = document.createElement('div');
  wrapperDivLeft.setAttribute('class','wrapperLeft')

  var todoTitle = document.createElement('p');
  todoTitle.textContent = todo.getTitle();

  var todoDate = document.createElement('time');
  todoDate.textContent = formatDate(todo.getDueDate());
  todoDate.setAttribute('datetime',formatDate(todo.getDueDate()));

  wrapperDivLeft.append(todoTitle,todoDate,createEditButton(project,todo));

  var wrapperDivRight = document.createElement('div');
  var priority = document.createElement('p');
  priority = todo.getPriority();
  wrapperDivRight.append(createDeleteTodoButton(project, todo), priority,createCheckInput(project, todo));
  todoDiv.append(wrapperDivLeft,wrapperDivRight);
  return todoDiv;
}

function createDeleteTodoButton(project, todo) {
  var deleteTodoButton = document.createElement('button');
  deleteTodoButton.textContent = 'Delete';
  deleteTodoButton.setAttribute('projectId', project.getId());
  deleteTodoButton.setAttribute('todoId', todo.getId());
  deleteTodoButton.addEventListener('click', handleDeleteTodoButton,true);
  return deleteTodoButton;
}
function createEditButton(project,todo) {
  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.setAttribute('projectId', project.getId());
  editButton.setAttribute('todoId', todo.getId());
  editButton.setAttribute('class','todoTitle');
  editButton.addEventListener('click', editTodoDialog);
  
  return editButton;
}

function createCheckInput(project, todo) {
  var div = document.createElement('div');
  var inputCheck = document.createElement('input');
  inputCheck.type = 'checkbox';
  inputCheck.setAttribute('id',`A${todo.getId()}`);
  inputCheck.setAttribute('projectId', project.getId());
  inputCheck.setAttribute('todoId', todo.getId());
  inputCheck.checked = todo.getCompleted();
  inputCheck.addEventListener('click', changeCompleted);

  var completedLabel = document.createElement('label');
  completedLabel.textContent = "completed";
  completedLabel.setAttribute('for',`A${todo.getId()}`);
  completedLabel.setAttribute('projectId', project.getId());
  completedLabel.setAttribute('todoId', todo.getId());

  div.append(inputCheck, completedLabel);

  return div;
}

