import {addTodo} from "./todo.js"
import {projects,saveProjectsToStorage} from "./index.js"
export function addProjectCard(title,todo=[]) {
  const projectsContainer = document.querySelector('.projects');
  if (!projectsContainer) return;
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h2>${title}</h2>
    <button class="todo-button">Add Todo</button>
  `;
  projectsContainer.appendChild(card);
  todo.forEach(todos=>{
    addTodoItem(card,todo.text,todo.completed);
  })
const todoButton = card.querySelector('.todo-button');
todoButton.addEventListener('click', () => {
    addTodo(card);
  });

 
}

export function addTodoItem(projectCard,todoText,completed =false)
{
  let todoList = projectCard.querySelector('.todo-list');
  if (!todoList) {
    todoList = document.createElement('ul');
    todoList.className = 'todo-list';
    projectCard.appendChild(todoList);
  }

  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-checkbox';
  checkbox.checked = completed;

  const label = document.createElement('span');
  label.textContent = todoText;

  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);

  todoList.appendChild(todoItem);

  checkbox.addEventListener('change', () => {
    updateProjectTodoStatus(projectCard, todoText, checkbox.checked);
  });
}

function updateProjectTodoStatus(projectCard, todoText, completed) {
  const projectTitle = projectCard.querySelector('h2').textContent;
  const project = projects.find(p => p.title === projectTitle);
  if (!project) return;

  const todo = project.todos.find(t => t.text === todoText);
  if (todo) {
    todo.completed = completed;
    saveProjectsToStorage(projects);
  }
}