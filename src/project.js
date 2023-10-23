import { compareAsc } from "date-fns";

function createProject(title) {
  const _id = Math.floor(Math.random() * 10000000);
  var _todoList = [];

  function getId() {
    return _id;
  }

  function getTitle() {
    return title;
  }

  function setTitle(newTitle) {
    title = newTitle;
  }

  function getTodoList() {
    return _todoList;
  }

  function handleNewTodo(todo) {
    _todoList.push(todo);
    _sortTodoList();
  }

  function findTodo(id) {
    return _todoList.find((todo) => todo.getId() == id);
  }

  function deleteTodo(id) {
    _todoList = _todoList.filter((todo) => todo.getId() != id);
  }
  function _sortTodoList() {
    _todoList.sort((left, right) =>
      compareAsc(left.getDueDate(), right.getDueDate()),
    );
  }
  return {
    getId,
    getTitle,
    getTodoList,
    setTitle,
    handleNewTodo,
    findTodo,
    deleteTodo,
  };
}

export default createProject;
