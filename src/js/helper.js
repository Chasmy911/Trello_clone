import { renderTodoItem } from "./rendertodoitem.js";

export const showAddModal = (container) => {
    container.classList.add('activeModal');
    
}

export const hideAddModal = (container) => {
    container.classList.remove('activeModal')
}

export const updateLocalStorage = (todoarray, progressarray, donearray) => {
    localStorage.setItem('todoArr', JSON.stringify(todoarray));
    localStorage.setItem('progressArr', JSON.stringify(progressarray));
    localStorage.setItem('doneArr', JSON.stringify(donearray))
}

export const updatePage = (container, container2, container3, needtodo, savetodo, progress, saveprogress, done, savedone) => {
    if (savetodo.length) {
        for (let todo of savetodo) {
            needtodo.push(todo);
            renderTodoItem(container, todo);
        }
    }
    if (saveprogress.length) {
        for (let todo of saveprogress) {
            progress.push(todo);
            renderTodoItem(container2, todo);
        }
    }
    if (savedone.length) {
        for (let todo of savedone) {
            done.push(todo);
            renderTodoItem(container3, todo);
        }
    }
}