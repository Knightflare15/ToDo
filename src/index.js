import "./index.css"
import "./project.css"
import { addProjectCard } from "./project.js"
import { openProjectModal } from "./modal.js"
import { loadProjectsFromStorage,saveProjectsToStorage } from "./localStorage.js"
console.log("running js")

const addButton = document.querySelector('.add-button');
let projects =loadProjectsFromStorage();
projects.forEach(project => {
  addProjectCard(project.title, project.todos);
});
addButton.addEventListener('click', () => {
  openProjectModal((projectName) => {
    projects.push({ title: projectName, todos: [] });
    saveProjectsToStorage(projects);
    addProjectCard(projectName,[]);
  });
});
export {projects,saveProjectsToStorage};