import food from "./menulist";

const menu = () => {
    const content_container = document.createElement('div');
    
    content_container.classList.add('menu');

    const menu_div = document.createElement('div');
    menu_div.textContent = food[0]['name'];

    const food_img = document.createElement('img');
    food_img.setAttribute('src', `./img/${food[0]['img']}`);
    food_img.classList.add('menuImg');

    content_container.appendChild(food_img);
    content_container.appendChild(menu_div);

    return content_container;
}


export default menu;