import { compareAsc} from 'date-fns'

function createProject(title){
  const id = Math.floor(Math.random() * 10000000);
  var todoList = [];

  function getId(){
    return id;
  }

  function getTitle(){
    return title;
  }

  function setTitle(newTitle){
    title = newTitle;
  }

  function getTodoList(){
    return todoList;
  }

  function addTodo(todo){
    todoList.push(todo);
    sortTodoList();
  }

  function findTodo(id){
    return todoList.find(todo => todo.getId() == id);
  }

  function deleteToDo(id){
    todoList = todoList.filter(todo => todo.getId() != id);
  }
  function sortTodoList(){
    todoList.sort((left,right) => compareAsc(left.getDueDate(),right.getDueDate()));
  }
  return {
    getId,getTitle,getTodoList,
    setTitle,addTodo,findTodo,deleteToDo
  }
}

export default createProject;