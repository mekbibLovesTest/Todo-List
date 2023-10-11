import createProject from "./project";
import { projects, stringifyProjects, populateProjects } from "./projects";
import { openTodoDialog } from "./dialog";


//check if projects exist in localstorage
//if not create a default project
//if it does exist get it and create the corresponding projects
export default function createProjectSection() {
  var projectsDiv = document.querySelector(".projects");
  if(projectsDiv.hasChildNodes()){
    Array.from(projectsDiv.childNodes).forEach(child=>{
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
  addToDoButton.addEventListener('click', openTodoDialog);

  var todoList = document.createElement('div');
  project.getTodoList().forEach(todo => {
    let todoElement = document.createElement('h2');
    todoElement.textContent = todo.getTitle();
    todoList.append(todoElement);
  });

  projectCard.append(projectTitle, addToDoButton, todoList);
  return projectCard;
}
