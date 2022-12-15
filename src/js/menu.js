import food from "./menulist";

const menu = () => {
    const content_container = document.createElement('div');
    
    content_container.classList.add('menu');

    for(let i = 0; i < food.length; i++){

        const menu_div = document.createElement('div');
        const name_food = document.createElement('h1');
        const description_food = document.createElement('p');
        const price_food = document.createElement('p');

        const food_img = document.createElement('img');
        food_img.setAttribute('src', `./img/${food[i]['img']}`);
        food_img.classList.add('menuImg');

        name_food.textContent = food[i]['name'];
        description_food.innerHTML =  '<strong>Ingredients: </strong>' + food[i]['ingredients'];
        price_food.innerHTML = '<strong>Price:</strong> $' + food[i]['price'];

        menu_div.appendChild(food_img);
        menu_div.appendChild(name_food);
        menu_div.appendChild(description_food);
        menu_div.appendChild(price_food);

        menu_div.classList.add('menuList');
        content_container.appendChild(menu_div);
    }

    return content_container;
}


export default menu;