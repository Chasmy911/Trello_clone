import { getTime } from "./headertime.js";
import { showAddModal, hideAddModal, updateLocalStorage, getAmount, changeStyletoProgress, changeStyletoDone } from "./helper.js";
import { createTodoItem } from "./createtodoitem.js";
import { renderTodoItem } from "./rendertodoitem.js";

// header time

getTime();

// create main block

const mainContainer = document.getElementById('main_block');
const modalBlockContainer = document.getElementById('main');

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

mainContainer.append(todoBlock, progressBlock, doneBlock);
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
doneBlockContainer.classList.add('doneBlockContainer');

todoBlockBtn.classList.add('todoBlockBtn');
doneBlockBtn.classList.add('doneBlockBtn');
todoBlockHeaderAmount.classList.add('todoBlockHeaderAmount');
progressBlockHeaderAmount.classList.add('progressBlockHeaderAmount');
doneBlockHeaderAmount.classList.add('doneBlockHeaderAmount');

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

modalUser.innerText = 'Select user';
modalCancelBtn.innerText = 'Cancel';
modalAddBtn.innerText = 'Confirm';

modalContainer.classList.add('modalContainer');
modalTitle.classList.add('modalTitle');
modalDescr.classList.add('modalDescr');
modalBtnContainer.classList.add('modalBtnContainer');
modalCancelBtn.classList.add('modalCancelBtn');
modalAddBtn.classList.add('modalAddBtn');

todoBlockBtn.addEventListener('click', () => {
    showAddModal(modalContainer);
    hideAddModal(doneModalContainer);
    hideAddModal(lengthModalContainer);
});

modalCancelBtn.addEventListener('click', () => {
    modalTitle.value = '';
    modalDescr.value = '';
    hideAddModal(modalContainer);
});

//create todo

let todoArr = [];
let progressArr = [];
let doneArr = [];
let savedTodoArr = JSON.parse(localStorage.getItem('todoArr')) || [];
let savedProgressArr = JSON.parse(localStorage.getItem('progressArr')) || [];
let savedDoneArr = JSON.parse(localStorage.getItem('doneArr')) || [];

todoBlockHeaderAmount.innerText = todoArr.length;
progressBlockHeaderAmount.innerText = progressArr.length;
doneBlockHeaderAmount.innerText = doneArr.length;



const handleTodo = () => {
    const todoItem = createTodoItem(modalTitle.value, modalDescr.value);
    if (modalTitle.value && modalDescr.value) {
        modalTitle.value = '';
        modalDescr.value = '';
        hideAddModal(modalContainer);
    }

    if (!todoItem) { return };

    todoArr.push(todoItem);

    const itemContainer = renderTodoItem(todoBlockContainer, todoItem);
    todoBtnFunction(itemContainer);

    getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
    updateLocalStorage(todoArr, progressArr, doneArr);
};

const handleProgressTodo = (todoItem) => {
    progressArr.push(todoItem);
    const progressitemContainer = renderTodoItem(progressBlockContainer, todoItem);
    changeStyletoProgress(progressitemContainer);

    progressBtnFunction(progressitemContainer);
    getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
    updateLocalStorage(todoArr, progressArr, doneArr);
}


modalAddBtn.addEventListener('click', handleTodo);


const todoBtnFunction = (itemBlock) => {
    itemBlock.addEventListener('click', (event) => {
        if (event.target.dataset.name === 'closeBtn') {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();

            todoArr = todoArr.filter(todo => +todoID !== +todo.id);
            getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            updateLocalStorage(todoArr, progressArr, doneArr);
        }
    })

    itemBlock.addEventListener('click', (event) => {
        if (event.target.dataset.name === 'moveToProgress') {
            if (progressArr.length > 3) {
                showAddModal(lengthModalContainer);
                hideAddModal(doneModalContainer);
                hideAddModal(modalContainer);

            } else {
                const todoID = itemBlock.dataset.todoid;
                event.currentTarget.remove();

                let item = todoArr.find(todo => +todoID === +todo.id);
                todoArr = todoArr.filter(todo => +todoID !== +todo.id);
                getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
                handleProgressTodo(item);
                updateLocalStorage(todoArr, progressArr, doneArr);
                console.log(progressArr.length)
            }

        }
    })
}




const progressBtnFunction = (itemBlock) => {
    itemBlock.addEventListener('click', (event) => {
        if (event.target.dataset.name === 'moveToTodo') {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();

            let todoItem = progressArr.find(todo => +todoID === +todo.id);

            const itemContainer = renderTodoItem(todoBlockContainer, todoItem);
            todoBtnFunction(itemContainer);
            todoArr.push(todoItem);

            progressArr = progressArr.filter(todo => +todoID !== +todo.id);
            getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            updateLocalStorage(todoArr, progressArr, doneArr);
        }
    })

    itemBlock.addEventListener('click', (event) => {
        if (event.target.dataset.name === 'moveToDone') {
            const todoID = itemBlock.dataset.todoid;

            event.currentTarget.remove();
            let item = progressArr.find(todo => +todoID === +todo.id);

            const itemContainer = renderTodoItem(doneBlockContainer, item);

            doneArr.push(item);
            doneBtnFunction(itemContainer);

            progressArr = progressArr.filter(todo => +todoID !== +todo.id);
            getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            updateLocalStorage(todoArr, progressArr, doneArr);
        }
    })
}

const doneBtnFunction = (itemBlock) => {
    itemBlock.addEventListener('click', (event) => {
        if (event.target.dataset.name === 'closeBtn') {
            const todoID = itemBlock.dataset.todoid;
            event.currentTarget.remove();

            doneArr = doneArr.filter(todo => +todoID !== +todo.id);
            getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
            updateLocalStorage(todoArr, progressArr, doneArr);
        }
    })

}

// done modal btn 
const doneModalContainer = document.createElement('div');
const doneModalBtnContainer = document.createElement('div');
const doneModalTitle = document.createElement('div');
const doneModalYesBtn = document.createElement('button');
const doneModalNoBtn = document.createElement('button');

modalBlockContainer.append(doneModalContainer);
doneModalContainer.append(doneModalTitle, doneModalBtnContainer);

doneModalBtnContainer.append(doneModalYesBtn, doneModalNoBtn);

doneModalNoBtn.innerText = 'No';
doneModalYesBtn.innerText = 'Yes';

doneModalContainer.classList.add('modalDoneContainer');
doneModalTitle.classList.add('doneModalTitle');
doneModalBtnContainer.classList.add('doneModalBtnContainer');
doneModalYesBtn.classList.add('doneModalYesBtn');
doneModalNoBtn.classList.add('doneModalNoBtn');

doneModalTitle.innerText = 'Are you sure?'

doneBlockBtn.addEventListener('click', () => {
    if (!doneArr.length) { return }

    showAddModal(doneModalContainer);
    hideAddModal(modalContainer);
    hideAddModal(lengthModalContainer);


    doneModalNoBtn.addEventListener('click', () => {
        hideAddModal(doneModalContainer);
    });

    doneModalYesBtn.addEventListener('click', () => {
        doneBlockContainer.innerHTML = '';
        doneArr.length = 0;
        updateLocalStorage(todoArr, progressArr, doneArr);
        getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
        hideAddModal(doneModalContainer);
    });
});

//length modal

const lengthModalContainer = document.createElement('div');
const lengthModalTitle = document.createElement('div');
const lengthModalBtn = document.createElement('button');


modalBlockContainer.append(lengthModalContainer);
lengthModalContainer.append(lengthModalTitle, lengthModalBtn);

lengthModalBtn.innerText = 'Ok';

lengthModalContainer.classList.add('lengthModalContainer');
lengthModalTitle.classList.add('lengthModalTitle');

lengthModalBtn.classList.add('lengthModalBtn');

lengthModalTitle.innerText = 'You can\'t do more than 6 things at the same time'




lengthModalBtn.addEventListener('click', () => {
    hideAddModal(lengthModalContainer);
})


























if (savedTodoArr.length) {
    for (let todo of savedTodoArr) {
        todoArr.push(todo);
        const itemContainer = renderTodoItem(todoBlockContainer, todo);
        todoBtnFunction(itemContainer);
        getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);

    }
}
if (savedProgressArr.length) {
    for (let todo of savedProgressArr) {
        handleProgressTodo(todo);
    }
}
if (savedDoneArr.length) {
    for (let todo of savedDoneArr) {
        doneArr.push(todo);
        const itemContainer = renderTodoItem(doneBlockContainer, todo);
        doneBtnFunction(itemContainer);
        getAmount(todoBlockHeaderAmount, todoArr, progressBlockHeaderAmount, progressArr, doneBlockHeaderAmount, doneArr);
    }
}
