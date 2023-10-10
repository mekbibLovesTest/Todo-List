import createProjectSection from "./projectSection";
import createTodo from "./todo";
import { projects } from "./projects";
export function openDialog(e) {
  var projectsDiv = document.querySelector(".projects");
  var dialog = document.querySelector('dialog');
  dialog.show();
  projectsDiv.inert = true;
  selectSubmitButton(e.target.getAttribute('data-attribute'));
}
function selectSubmitButton(id) {
  var submitButton = document.querySelector(`button[type='submit'`);
  submitButton.addEventListener('click', (event) => {
    return handleSubmit(event, id)
  })
}

function handleSubmit(event, id) {
  if (validateForm(getDataFromForm()) === false)
    return;
  else {
    event.preventDefault();
    let dialog = document.querySelector('dialog');
    let projectsDiv = document.querySelector(".projects");
    let todoData = getDataFromForm();
    console.log(todoData);
    let todo = createTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority, false);
    projects.findProject(id).addTodo(todo);
    console.log(projects.findProject(id).getTodoList());
    dialog.close();
    projectsDiv.inert = false;
    resetForm()
    createProjectSection();
  }
}

function getDataFromForm() {
  var title = document.querySelector('#title').value;
  var description = document.querySelector('#description').value;
  var dueDate = document.querySelector('#dueDate').value;
  var priority = document.querySelector(`input[type='radio']:checked`).value;
  return {
    title, description, dueDate, priority
  }
}


function validateForm(todo) {
  if (todo.title === '' || todo.description === '' || todo.dueDate === '' || todo.priority === '')
    return false;
  return true;
}

function resetForm() {
  var title = document.querySelector('#title');
  title.value = '';
  var description = document.querySelector('#description');
  description.value = '';
  var dueDate = document.querySelector('#dueDate');
  dueDate.value = '';
  var checkedPriority = document.querySelector(`input[type='radio']:checked`);
  checkedPriority.checked = false;
  var mediumPriority = document.querySelector('input#medium');
  mediumPriority.checked = true;
}