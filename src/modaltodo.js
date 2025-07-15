const todoModal = document.getElementById('todo-modal');
const todoInput = document.getElementById('todo-name-input');


function openTodoModal(onSubmit) {
  todoModal.style.display = 'flex';
  todoInput.value = '';
  todoInput.focus();
  const todoCreateBtn = document.getElementById('todo-create');
  const todoCancelBtn = document.getElementById('todo-cancel');
 

  const newCreateBtn = todoCreateBtn.cloneNode(true);
  const newCancelBtn = todoCancelBtn.cloneNode(true);
  todoCreateBtn.parentNode.replaceChild(newCreateBtn, todoCreateBtn);
  todoCancelBtn.parentNode.replaceChild(newCancelBtn, todoCancelBtn);


  newCreateBtn.addEventListener('click', () => {
    const todoName = todoInput.value.trim();
    if (todoName) {
      onSubmit(todoName);
      closeTodoModal();
    } else {
      alert('Please enter a todo item.');
    }
  });

  newCancelBtn.addEventListener('click', closeTodoModal);
}

function closeTodoModal() {
  todoModal.style.display = 'none';
}

export { openTodoModal };