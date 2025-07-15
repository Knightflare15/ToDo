import { openTodoModal } from "./modaltodo";
import { addTodoItem } from "./project";
import { projects,saveProjectsToStorage } from "./index.js";
import "./todo.css"

export function addTodo(projectCard) {
  openTodoModal((todoText) => {
    if (!todoText) return;

    addTodoItem(projectCard, todoText, false);

    const projectTitle = projectCard.querySelector('h2').textContent;
    const project = projects.find(p => p.title === projectTitle);
    if (project) {
      project.todos.push({ text: todoText, completed: false });
      saveProjectsToStorage(projects);
    }
  });
}