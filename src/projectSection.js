import createProject from "./project";
import { projects, stringifyProjects, populateProjects } from "./projects";
import { addTodoDialog,editTodoDialog } from "./dialog";

export default function createProjectSection() {
  var projectsDiv = document.querySelector(".projects");
  if (projectsDiv.hasChildNodes()) {
    Array.from(projectsDiv.childNodes).forEach(child => {
      projectsDiv.removeChild(child);
    })
  }

  if (localStorage.getItem('projects') === null) {
    var defaultProject = createProject('default');
    projects.addProject(defaultProject);
    localStorage.setItem('projects', stringifyProjects(projects));
  }
  populateProjects(JSON.parse(localStorage.getItem('projects')));
  var projectCards = projects.getProjectList().map((project) => createProjectCard(project))

  projectsDiv.append(...projectCards)

}

function createProjectCard(project) {
  var projectCard = document.createElement('div');
  var projectTitle = document.createElement("h1");
  projectTitle.textContent = project.getTitle();

  var addToDoButton = document.createElement("button");
  addToDoButton.textContent = 'Add';
  addToDoButton.setAttribute('data-attribute', project.getId())
  addToDoButton.addEventListener('click', addTodoDialog);

  var todoList = document.createElement('div');
  project.getTodoList().forEach(todo => {
    todoList.append(createTodoElement(project,todo));
  });

  projectCard.append(projectTitle, addToDoButton, todoList);
  return projectCard;
}

function createTodoElement(project,todo){
  let todoElement = document.createElement('h2');
  todoElement.textContent = todo.getTitle();
  todoElement.setAttribute('projectId', project.getId());
  todoElement.setAttribute('todoId', todo.getId());
  todoElement.addEventListener('click', editTodoDialog);
  
  return todoElement;
}