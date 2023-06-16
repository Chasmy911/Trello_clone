
export const showAddModal = (container) => {
    container.classList.add('activeModal');
}

export const hideAddModal = (container) => {
    container.classList.remove('activeModal');
}

export const updateLocalStorage = (todoarray, progressarray, donearray) => {
    localStorage.setItem('todoArr', JSON.stringify(todoarray));
    localStorage.setItem('progressArr', JSON.stringify(progressarray));
    localStorage.setItem('doneArr', JSON.stringify(donearray));
}

export const getAmount = (todoAmount, todoArr, progressAmount, progressArr, doneAmount, doneArr) => {
    todoAmount.innerText = todoArr.length;
    progressAmount.innerText = progressArr.length;
    doneAmount.innerText = doneArr.length;
}

export const changeStyletoProgress = (itemBlock) => {
    itemBlock.classList.add('moveToProgressStyle');

}

export const changeStyletoDone = (itemBlock) => {
    itemBlock.classList.add('moveToDoneStyle ');
}