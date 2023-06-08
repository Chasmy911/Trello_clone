
export const showAddModal = (container) => {
    container.classList.add('activeModal');

}

export const hideAddModal = (container) => {
    container.classList.remove('activeModal')
}

export const updateLocalStorage = (todoarray, progressarray, donearray) => {
    localStorage.setItem('todoArr', JSON.stringify(todoarray));
    localStorage.setItem('progressArr', JSON.stringify(progressarray));
    localStorage.setItem('doneArr', JSON.stringify(donearray));
}

export const getAmount = (todoAmount, todoArr) => {
    todoAmount.innerText = todoArr.length;
}

export const changeStyletoProgress = (itemBlock) => {
    itemBlock.classList.add('moveToProgressStyle');

}
