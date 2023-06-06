// create main block

const mainContainer = document.getElementById('main_block');

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