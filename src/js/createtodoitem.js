export const createTodoItem = (modalTitleValue, modalDescrValue) => {
    if(!modalTitleValue || !modalDescrValue) {return}

    const date = new Date();
    const title = modalTitleValue;
    const descr = modalDescrValue;
    const todoItem = {
        title,
        descr,
        data: date.toLocaleDateString(),
        id: Date.now(),
    }

    return todoItem 
}