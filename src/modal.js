
const modal = document.getElementById('project-modal');
const input = document.getElementById('project-name-input');
const cancelBtn = document.getElementById('modal-cancel');

export function openProjectModal(onSubmit) {
  modal.style.display = 'flex';
  input.value = '';
  input.focus();
  const createBtn = document.getElementById('modal-create');

  const newBtn = createBtn.cloneNode(true);
  createBtn.parentNode.replaceChild(newBtn, createBtn);

  newBtn.addEventListener('click', () => {
    const projectName = input.value.trim();
    if (projectName) {
      onSubmit(projectName);
      closeModal();
    } else {
      alert('Please enter a project name.');
    }
  });
}

function closeModal() {
  modal.style.display = 'none';
}

cancelBtn.addEventListener('click', closeModal);
