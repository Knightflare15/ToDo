import { openTodoModal } from "./modaltodo";
import "./todo.css"
export function addTodo(projectCard) {
  let todoList = projectCard.querySelector('.todo-list');
  if (!todoList) {
    todoList = document.createElement('ul');
    todoList.className = 'todo-list';
    projectCard.appendChild(todoList);
  }

    openTodoModal((todoText) => {
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'todo-checkbox';

      const label = document.createElement('span');
      label.textContent = todoText;

      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);

      todoList.appendChild(todoItem);
    });

}