import { renderList } from './render.js';
import { tasks } from './storage.js';
import { checkthisDone, createTaskBoard } from './gateway.js';

renderList(tasks);

const listElem = document.querySelector('.list');
listElem.addEventListener('click', checkthisDone);

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', createTaskBoard);