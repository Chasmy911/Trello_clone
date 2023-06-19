export const getTime = () => {
    const timeContainer = document.querySelector('.header__time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeContainer.textContent = currentTime;
    setTimeout(getTime, 1000);
};



