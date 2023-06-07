import { getTime } from "./headertime.js";
import { showAddModal, hideAddModal, updateLocalStorage, updatePage } from "./helper.js";
import { createTodoItem } from "./createtodoitem.js";
import { renderTodoItem } from "./rendertodoitem.js";

// header time

getTime()

// create main block

const mainContainer = document.getElementById('main_block');
const modalBlockContainer = document.getElementById('main')

const todoBlock = document.createElement('div');
const progressBlock = document.createElement('div');
const doneBlock = document.createElement('div');

const todoBlockHeader = document.createElement('div');
const progressBlockHeader = document.createElement('div');
const doneBlockHeader = document.createElement('div');

const todoBlockHeaderTitle = document.createElement('h2');
const progressBlockHeaderTitle = document.createElement('h2');
const doneBlockHeaderTitle = document.createElement('h2');

const todoBlockHeaderAmount = document.createElement('div');
const progressBlockHeaderAmount = document.createElement('div');
const doneBlockHeaderAmount = document.createElement('div');

const todoBlockContainer = document.createElement('div');
const progressBlockContainer = document.createElement('div');
const doneBlockContainer = document.createElement('div');

const todoBlockBtn = document.createElement('button');
const doneBlockBtn = document.createElement('button');

mainContainer.append(todoBlock, progressBlock, doneBlock)
todoBlock.append(todoBlockHeader, todoBlockContainer, todoBlockBtn);
progressBlock.append(progressBlockHeader, progressBlockContainer);
doneBlock.append(doneBlockHeader, doneBlockContainer, doneBlockBtn);
todoBlockHeader.append(todoBlockHeaderTitle, todoBlockHeaderAmount);
progressBlockHeader.append(progressBlockHeaderTitle, progressBlockHeaderAmount);
doneBlockHeader.append(doneBlockHeaderTitle, doneBlockHeaderAmount);


todoBlock.classList.add('todoBlock');
progressBlock.classList.add('progressBlock');
doneBlock.classList.add('doneBlock');

todoBlockHeader.classList.add('todoBlockHeader');
progressBlockHeader.classList.add('progressBlockHeader');
doneBlockHeader.classList.add('doneBlockHeader');


todoBlockBtn.classList.add('todoBlockBtn');
doneBlockBtn.classList.add('doneBlockBtn')

todoBlockHeaderTitle.innerText = 'TODO:';
progressBlockHeaderTitle.innerText = 'IN PROGRESS:';
doneBlockHeaderTitle.innerText = 'DONE:';

todoBlockBtn.innerText = 'ADD TODO';
doneBlockBtn.innerText = 'DELETE ALL';

//create modal window
const modalContainer = document.createElement('div');
const modalBtnContainer = document.createElement('div');
const modalTitle = document.createElement('input');
const modalDescr = document.createElement('textarea');
const modalUser = document.createElement('div');
const modalCancelBtn = document.createElement('button');
const modalAddBtn = document.createElement('button');

modalTitle.setAttribute('placeholder', 'Title');
modalDescr.setAttribute('placeholder', 'Description');

modalBlockContainer.append(modalContainer);
modalContainer.append(modalTitle, modalDescr, modalBtnContainer);
modalBtnContainer.append(modalUser, modalCancelBtn, modalAddBtn);

modalUser.innerText = 'Select user'
modalCancelBtn.innerText = 'Cancel';
modalAddBtn.innerText = 'Confirm';

modalContainer.classList.add('modalContainer');
modalTitle.classList.add('modalTitle')
modalDescr.classList.add('modalDescr');
modalBtnContainer.classList.add('modalBtnContainer');
modalCancelBtn.classList.add('modalCancelBtn');
modalAddBtn.classList.add('modalAddBtn');

todoBlockBtn.addEventListener('click', () => {
    showAddModal(modalContainer)
});

modalCancelBtn.addEventListener('click', () => {
    modalTitle.value = '';
    modalDescr.value = '';
    hideAddModal(modalContainer)
});

//create todo

const todoArr = [];
const progressArr = [];
const doneArr = [];
const savedTodoArr = JSON.parse(localStorage.getItem('todoArr')) || [];
const savedProgressArr = JSON.parse(localStorage.getItem('progressArr')) || [];
const savedDoneArr = JSON.parse(localStorage.getItem('doneArr')) || [];



const handleTodo = () => {
    const todoItem = createTodoItem(modalTitle.value, modalDescr.value);
    if (modalTitle.value && modalDescr.value) {
        modalTitle.value = '';
        modalDescr.value = '';
        hideAddModal(modalContainer)
    }

    if (!todoItem) { return };

    todoArr.push(todoItem);
    console.log (todoArr)

    renderTodoItem(todoBlockContainer, todoItem);

    updateLocalStorage(todoArr, progressArr, doneArr);
};


modalAddBtn.addEventListener('click', handleTodo);

document.addEventListener("DOMContentLoaded", () => {
    updatePage(todoBlockContainer, progressBlockContainer, doneBlockContainer, todoArr, savedTodoArr, progressArr, savedProgressArr, doneArr, savedDoneArr)
});


