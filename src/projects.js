import createProject from "./project";
import createTodo from "./todo";

export var projects = (() => {
  var _projectList = [];

  function getProjectList() {
    return _projectList;
  }

  function addProject(project) {
    _projectList.push(project);
  }

  function resetProjectList() {
    _projectList = [];
  }
  function findProject(id) {
    return _projectList.find((project) => project.getId() == id);
  }

  function deleteProject(id) {
    _projectList = _projectList.filter((project) => project.getId() != id);
  }

  return {
    getProjectList,
    addProject,
    findProject,
    deleteProject,
    resetProjectList,
  };
})();

export function populateProjects(projectFromStorage) {
  projects.resetProjectList();
  projectFromStorage.forEach((project) => {
    var newProject = createProject(project["title"]);
    project["todoList"].forEach((todo) => {
      var newTodo = createTodo(
        todo["title"],
        todo["description"],
        new Date(todo["dueDate"]),
        todo["priority"],
        todo["completed"],
      );
      newProject.handleNewTodo(newTodo);
    });

    projects.addProject(newProject);
  });
}

export function stringifyProjects(projects) {
  return JSON.stringify(
    projects.getProjectList().map((project) => {
      return {
        title: project.getTitle(),
        todoList: project.getTodoList().map((todo) => {
          return {
            title: todo.getTitle(),
            description: todo.getDescription(),
            dueDate: todo.getDueDate(),
            priority: todo.getPriority(),
            completed: todo.getCompleted(),
          };
        }),
      };
    }),
  );
}
