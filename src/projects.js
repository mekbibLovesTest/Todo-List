import createProject from "./project";
import createTodo from "./todo";

export var projects = (() => {
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

export function populateProjects(projectFromStorage) {
  projectFromStorage.forEach(project => {
    let newProject = createProject(project["title"]);
    project["todoList"].forEach(todo => {
      let completed = todo["completed"];
      console.log(completed)
      let newTodo = createTodo(todo["title"], todo["description"], new Date(todo["dueDate"]),
                               todo["priority"], todo["completed"]);
      newProject.addTodo(newTodo);
    });
    
    projects.addProject(newProject);
  })
}

export function stringifyProjects(projects) {
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
