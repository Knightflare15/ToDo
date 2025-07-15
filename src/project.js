import {addTodo} from "./todo.js"

export function addProjectCard(title) {
  const projectsContainer = document.querySelector('.projects');
  if (!projectsContainer) return;
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h2>${title}</h2>
    <button class="todo-button">Add Todo</button>
  `;
  projectsContainer.appendChild(card);
const todoButton = card.querySelector('.todo-button');
todoButton.addEventListener('click', () => {
    addTodo(card);
  });
}