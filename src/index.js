import createTodo from "./todo";
import createProject from "./project";
import projects from "./projects";

var newTodo = createTodo("Complete Project Proposal","Draft a detailed project proposal for the upcoming client presentation. Include project scope, timeline, budget, and deliverables.",
new Date(2012,3,23),"High",false);
var newerTodo = createTodo("Complete Project Proposal","Draft a detailed project proposal for the upcoming client presentation. Include project scope, timeline, budget, and deliverables.",
new Date(2012,3,23),"High",false);
newTodo.setCompleted(true)
console.log(newTodo.getId());
console.log(newerTodo.getId());
var newDate = new Date(2000,12,12);

