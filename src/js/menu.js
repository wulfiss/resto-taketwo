import food from "./menulist";

const menu = () => {
    const content_container = document.createElement('div');
    
    content_container.classList.add('menu');
    
    for(let i = 0; i < food.length; i++){

        const menu_div = document.createElement('div');
        menu_div.textContent = food[i]['name'];

        const food_img = document.createElement('img');
        food_img.setAttribute('src', `./img/${food[i]['img']}`);
        food_img.classList.add('menuImg');

        menu_div.appendChild(food_img);
    
        content_container.appendChild(menu_div);
    }

    return content_container;
}


export default menu;