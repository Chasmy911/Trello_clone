export const renderTodoItem = (container, obj) => {
    const itemBlock = document.createElement('div');
    const itemBlockHeader = document.createElement('div');
    const itemBlockMain = document.createElement('div');
    const itemBlockFooter = document.createElement('div');
    const title = document.createElement('div');
    const descr = document.createElement('div');
    const user = document.createElement('div');
    const time = document.createElement('div');
    const btnContainer = document.createElement('div');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const moveToProgressBtn = document.createElement('button');


    container.append(itemBlock);
    itemBlock.append(itemBlockHeader, itemBlockMain, itemBlockFooter);
    itemBlockHeader.append(title, btnContainer);
    btnContainer.append(editBtn, delBtn)
    itemBlockMain.append(descr, moveToProgressBtn);
    itemBlockFooter.append(user, time);

    title.innerText = obj.title;
    editBtn.innerText = 'Edit';
    delBtn.innerText = 'Delete';
    descr.innerText = obj.descr;
    moveToProgressBtn.innerText = '>';
    user.innerText = 'User1';
    time.innerText = obj.data;

    delBtn.setAttribute('data-name', 'closeBtn');
    itemBlock.setAttribute('data-todoid', obj.id);
    moveToProgressBtn.setAttribute('data-name', 'moveToProgress');

    itemBlock.classList.add('itemBlock');
    itemBlockHeader.classList.add('itemBlockHeader');
    title.classList.add('title');
    itemBlockMain.classList.add('itemBlockMain');
    itemBlockFooter.classList.add('itemBlockFooter');
    btnContainer.classList.add('btnContainer');
    editBtn.classList.add('editBtn');
    delBtn.classList.add('delBtn');
    moveToProgressBtn.classList.add('moveToProgressBtn');

    return itemBlock 
}

