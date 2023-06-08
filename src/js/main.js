import { getTime } from "./headertime.js";
import { showAddModal, hideAddModal, updateLocalStorage, getAmount, changeStyletoProgress } from "./helper.js";
import { createTodoItem } from "./createtodoitem.js";
import { renderTodoItem, renderProgressItem } from "./rendertodoitem.js";

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

todoBlockContainer.classList.add('todoBlockContainer');
progressBlockContainer.classList.add('progressBlockContainer');
doneBlockContainer.classList.add('doneBlockContainer')

todoBlockBtn.classList.add('todoBlockBtn');
doneBlockBtn.classList.add('doneBlockBtn')
todoBlockHeaderAmount.classList.add('todoBlockHeaderAmount')

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

let todoArr = [];
let progressArr = [];
let doneArr = [];
let savedTodoArr = JSON.parse(localStorage.getItem('todoArr')) || [];
let savedProgressArr = JSON.parse(localStorage.getItem('progressArr')) || [];
let savedDoneArr = JSON.parse(localStorage.getItem('doneArr')) || [];

todoBlockHeaderAmount.innerText = todoArr.length



const handleTodo = () => {
    const todoItem = createTodoItem(modalTitle.value, modalDescr.value);
    if (modalTitle.value && modalDescr.value) {
        modalTitle.value = '';
        modalDescr.value = '';
        hideAddModal(modalContainer)
    }

    if (!todoItem) { return };

    todoArr.push(todoItem);

    const itemContainer = renderTodoItem(todoBlockContainer, todoItem);
    deleteTodoItem(itemContainer)

    getAmount(todoBlockHeaderAmount, todoArr)
    updateLocalStorage(todoArr, progressArr, doneArr);
};

const handleProgressTodo = (todoItem) => {
    progressArr.push(todoItem);
    const progressitemContainer = renderTodoItem(progressBlockContainer, todoItem);
    changeStyletoProgress(progressitemContainer)

    getAmount(todoBlockHeaderAmount, todoArr)
    updateLocalStorage(todoArr, progressArr, doneArr);
}


modalAddBtn.addEventListener('click', handleTodo);

document.addEventListener("DOMContentLoaded", () => {
    updatePage(todoBlockContainer, progressBlockContainer, doneBlockContainer, todoArr, savedTodoArr, progressArr, savedProgressArr, doneArr, savedDoneArr)
});


const deleteTodoItem = (itemBlock) => {
    itemBlock.addEventListener('click', (event) => {
        if (event.target.dataset.name === 'closeBtn') {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();

            todoArr = todoArr.filter(todo => +todoID !== +todo.id);
            getAmount(todoBlockHeaderAmount, todoArr)
            updateLocalStorage(todoArr, progressArr, doneArr);
        }
    })

    itemBlock.addEventListener('click', (event) => {
        if (event.target.dataset.name === 'moveToProgress') {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();

            let item = todoArr.find(todo => +todoID === +todo.id);
            todoArr = todoArr.filter(todo => +todoID !== +todo.id);
            getAmount(todoBlockHeaderAmount, todoArr);
            handleProgressTodo(item);
            updateLocalStorage(todoArr, progressArr, doneArr);
        }
    })

}


const updatePage = (container, container2, container3, needtodo, savetodo, progress, saveprogress, done, savedone) => {
    if (savedTodoArr.length) {
        for (let todo of savedTodoArr) {
            todoArr.push(todo);
            const itemContainer = renderTodoItem(todoBlockContainer, todo);
            deleteTodoItem(itemContainer);
            getAmount(todoBlockHeaderAmount, todoArr)

        }
    }
    if (savedProgressArr.length) {
        for (let todo of savedProgressArr) {
            handleProgressTodo(todo);
        }
    }
    // if (savedone.length) {
    //     for (let todo of savedone) {
    //         done.push(todo);
    //         renderTodoItem(container3, todo);
    //     }
    // }
}