import createTodo from "./todo";
import createProject from "./project";
import projects from "./projects";

var project1 = createProject('First Project');
var todo1 = createTodo("Buy Groceries", "Make a list of essential groceries and go shopping for the week.", new Date(2023, 10, 15), "Medium", false);
project1.addTodo(todo1);
var todo2 = createTodo("Call Mom", "Catch up with Mom and see how she's doing.", new Date(2023, 10, 12), "Low", false);
project1.addTodo(todo2);
var todo3 = createTodo("Prepare Presentation", "Create a PowerPoint presentation for the upcoming team meeting.", new Date(2023, 10, 20), "High", true);
project1.addTodo(todo3);
var todo4 = createTodo("Exercise", "Go for a 30-minute jog in the evening to stay active.", new Date(2023, 10, 10), "Medium", false);
project1.addTodo(todo4);

// Create a new project called 'Second Project'
var project2 = createProject('Second Project');

var todo5 = createTodo("Research for Report", "Gather information and data for the upcoming quarterly report.", new Date(2023, 10, 18), "High", false);
project2.addTodo(todo5);

var todo6 = createTodo("Pay Bills", "Pay monthly utility bills and rent.", new Date(2023, 10, 5), "Medium", false);
project2.addTodo(todo6);

var todo7 = createTodo("Book Flight Tickets", "Book flight tickets for the upcoming vacation.", new Date(2023, 11, 1), "Medium", false);
project2.addTodo(todo7);

var todo8 = createTodo("Read a Chapter", "Read one chapter of the new book.", new Date(2023, 10, 14), "Low", false);
project2.addTodo(todo8);

// Create a new project called 'Third Project'
var project3 = createProject('Third Project');

var todo9 = createTodo("Write Blog Post", "Start drafting a blog post on the latest industry trends.", new Date(2023, 10, 22), "High", false);
project3.addTodo(todo9);

var todo10 = createTodo("Attend Webinar", "Register and attend the webinar on marketing strategies.", new Date(2023, 10, 8), "Medium", false);
project3.addTodo(todo10);

var todo11 = createTodo("Plan Birthday Party", "Plan a surprise birthday party for a friend.", new Date(2023, 10, 25), "High", false);
project3.addTodo(todo11);

var todo12 = createTodo("Learn Guitar Chords", "Practice and learn new guitar chords for the song.", new Date(2023, 10, 16), "Low", false);
project3.addTodo(todo12);

projects.addProject(project1);
projects.addProject(project2);
projects.addProject(project3);
projects.deleteProject(project1.getId());
projects.getProjectList().forEach(project => {
  console.log(project.getId());
  console.log(project.getTitle());
})

console.log(projects.findProject(project2.getId()).getTitle());

