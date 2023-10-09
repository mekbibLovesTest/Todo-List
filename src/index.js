import createTodo from "./todo";
import createProject from "./project";

var project1 = createProject('First Project');
var todo1 = createTodo("Buy Groceries", "Make a list of essential groceries and go shopping for the week.", new Date(2023, 10, 15), "Medium", false);
project1.addTodo(todo1);
var todo2 = createTodo("Call Mom", "Catch up with Mom and see how she's doing.", new Date(2023, 10, 12), "Low", false);
project1.addTodo(todo2);
var todo3 = createTodo("Prepare Presentation", "Create a PowerPoint presentation for the upcoming team meeting.", new Date(2023, 10, 20), "High", true);
project1.addTodo(todo3);
var todo4 = createTodo("Exercise", "Go for a 30-minute jog in the evening to stay active.", new Date(2023, 10, 10), "Medium", false);
project1.addTodo(todo4);

console.log(project1.getId());
console.log(project1.getTitle());
project1.setTitle('new title');
console.log(project1.getTitle());
project1.deleteToDo(todo2.getId());
project1.getTodoList().forEach(todo =>{
  console.log(todo.getId());
  console.log(todo.getTitle());
  console.log(todo.getDueDate());
})

var foundTodo = project1.findTodo(`${todo3.getId()}`);
console.log(foundTodo.getTitle() + foundTodo.getId());

