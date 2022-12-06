import food from "./menulist";

const menu = () => {
    function importAll(r){
        return r.keys().map(r);
    }

    const images = importAll(require.context('./src/img', false, /\.(png|svg|jpg|jpeg|gif)$/));
    console.log(images);

    const content_container = document.createElement('div');
    
    content_container.classList.add('menu');

    const menu_div = document.createElement('div');
    menu_div.textContent = food[0]['name'];

    const food_img = document.createElement('img');
    food_img.setAttribute('src', images[`${food[1]['img']}`]);

    content_container.appendChild(food_img);
    content_container.appendChild(menu_div);

    return content_container;
}


export default menu;