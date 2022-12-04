const welcome = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('welcome');

    const welcome_div = document.createElement('div');
    welcome_div.textContent = 'Welcome to the page of the Best Restaurant of the WORLD!!';

    content_container.appendChild(welcome_div);

    return content_container;
}


export default welcome;