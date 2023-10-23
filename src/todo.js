export default createTodo;

function createTodo(title, description, dueDate, priority, completed) {
  const _id = Math.floor(Math.random() * 10000000);

  function getId() {
    return _id;
  }

  function getTitle() {
    return title;
  }

  function setTitle(newTitle) {
    title = newTitle;
  }

  function getDescription() {
    return description;
  }

  function setDescription(newDescription) {
    description = newDescription;
  }

  function getDueDate() {
    return dueDate;
  }

  function setDueDate(newDueDate) {
    dueDate = newDueDate;
  }

  function getPriority() {
    return priority;
  }

  function setPriority(newPriority) {
    priority = newPriority;
  }

  function getCompleted() {
    return completed;
  }

  function setCompleted(newCompleted) {
    completed = newCompleted;
  }

  return {
    getId,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getCompleted,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setCompleted,
  };
}
