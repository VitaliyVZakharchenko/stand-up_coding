import { renderList } from './render.js';
import { tasks } from './storage.js';
import { updateTask, createTask } from './gateway.js';

renderList(tasks);

const listElem = document.querySelector('.list');
listElem.addEventListener('click', updateTask);

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', createTask);