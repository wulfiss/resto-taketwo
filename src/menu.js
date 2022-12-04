const menu = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('menu');

    const menu_div = document.createElement('div');
    menu_div.textContent = 'Here, you can find the best plata and food that you ever can find!!!!';

    content_container.appendChild(menu_div);

    return content_container;
}


export default menu;