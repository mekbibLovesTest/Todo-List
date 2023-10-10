import createProject from "./project";
import { projects } from "./projects";
import { openDialog } from "./dialog";

export default function createProjectSection() {
  var projectsDiv = document.querySelector(".projects");
  projectsDiv.textContent = '';

  var defaultProject = createProject('default');
  projects.addProject(defaultProject);
  localStorage.setItem("projects", projects);

  var projectTitle = document.createElement("h1");
  projectTitle.textContent = projects.getProjectList()[0].getTitle();

  var addToDoButton = document.createElement("button");
  addToDoButton.textContent = "Add";
  addToDoButton.setAttribute('data-attribute', projects.getProjectList()[0].getId())
  addToDoButton.addEventListener('click', openDialog);

  var todoList = document.createElement('div');
  projects.getProjectList()[0].getTodoList().forEach(todo => {
    let todoElement = document.createElement('h2');
    todoElement.textContent = todo.getTitle();
    todoList.append(todoElement);
  })
  projectsDiv.append(projectTitle, addToDoButton,todoList)

}
