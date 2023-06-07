export const renderTodoItem = (container, obj) => {
    const itemBlock = document.createElement('div');
    const itemBlockHeader = document.createElement('div');
    const itemBlockMain = document.createElement('div');
    const itemBlockFooter = document.createElement('div');
    const title = document.createElement('div');
    const descr = document.createElement('div');
    const user = document.createElement('div');
    const time = document.createElement('div');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const moveToProgressBtn = document.createElement('button');


    container.append(itemBlock);
    itemBlock.append(itemBlockHeader, itemBlockMain, itemBlockFooter);
    itemBlockHeader.append(title, editBtn, delBtn);
    itemBlockMain.append(descr, moveToProgressBtn); 
    itemBlockFooter.append(user, time);

    title.innerText = obj.title;
    editBtn.innerText = 'Edit';
    delBtn.innerText = 'Delete';
    descr.innerText = obj.descr;
    moveToProgressBtn.innerText = '>';
    user.innerText = 'User1';
    time.innerText = obj.data;
}