const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterBtns = document.querySelectorAll('.filters button');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks
    .filter(task => currentFilter === 'all' ||
      (currentFilter === 'active' && !task.completed) ||
      (currentFilter === 'completed' && task.completed))
    .forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.text;
      li.className = task.completed ? 'completed' : '';
      li.addEventListener('click', () => toggleTask(index));
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', e => {
        e.stopPropagation();
        deleteTask(index);
      });
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, completed: false });
  taskInput.value = '';
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

renderTasks();
