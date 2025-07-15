import "./index.css"
import "./project.css"
import { addProjectCard } from "./project.js"
import { openProjectModal } from "./modal.js"
console.log("running js")

const addButton = document.querySelector('.add-button');

addProjectCard("Default")
addButton.addEventListener('click', () => {
  openProjectModal((projectName) => {
    addProjectCard(projectName);
  });
});
