import createProjectSection from "./projectSection";
import { addCancelEventListeners,openProjectDialog } from "./dialog";
import './style.css';

createProjectSection();
addCancelEventListeners();

var addProjectButton = document.querySelector('#addProject');
addProjectButton.addEventListener('click', openProjectDialog);

