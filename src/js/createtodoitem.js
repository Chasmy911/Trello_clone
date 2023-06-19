export const createTodoItem = (modalTitleValue, modalDescrValue, willWork) => {
    if(!modalTitleValue || !modalDescrValue) {return}

    const date = new Date();
    const title = modalTitleValue;
    const descr = modalDescrValue;
    const todoItem = {
        title,
        descr,
        data: date.toLocaleDateString(),
        workUser: willWork,
        id: Date.now(),
    }

    return todoItem 
}