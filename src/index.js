import './style/style.scss';
import welcome from "./js/welcome";
import menu from "./js/menu";
import contact from "./js/contact";

(function unChange(){

    console.log('0');
    const header = () => {
        const header_container = document.createElement('header');
        const header_title = document.createElement('h2');
        const header_subtitle = document.createElement('p');

        header_title.textContent = 'Don Wulfis Resto';
        header_subtitle.textContent = 'The best food of the world!!!';

        header_container.appendChild(header_title);
        header_container.appendChild(header_subtitle);

        document.body.appendChild(header_container);
    }

    const nav = () => {
        const nav_container = document.createElement('nav');
        const nav_welcome = document.createElement('button');
        const nav_menu = document.createElement('button');
        const nav_contact = document.createElement('button');

        nav_welcome.classList.add('btnWelcome');
        nav_menu.classList.add('btnMenu');
        nav_contact.classList.add('btnContact');

        nav_welcome.textContent = 'Welcome';
        nav_menu.textContent = 'Menu';
        nav_contact.textContent = 'Contact';

        nav_container.appendChild(nav_welcome);
        nav_container.appendChild(nav_menu);
        nav_container.appendChild(nav_contact);
        
        document.body.appendChild(nav_container);
    }

    const main = () =>{
        const main_container = document.createElement('main');
        main_container.appendChild(welcome());
        document.body.appendChild(main_container);        
    }

    const footer = () =>{
        const footer_container = document.createElement('footer');
        footer_container.textContent = "Copyright stuff"

        document.body.appendChild(footer_container);
    }

    const btnNav = () =>{
        let nav_container = document.querySelector('nav');
        let main_container = document.querySelector('main');

        nav_container.addEventListener('click', (e) => {           
            if(e.target.getAttribute('class') == 'btnWelcome'){
                main_container.removeChild(main_container.firstChild);
                main_container.appendChild(welcome());
                console.log('1');
            }else if(e.target.getAttribute('class') == 'btnMenu'){
                main_container.removeChild(main_container.firstChild);
                main_container.appendChild(menu());
                console.log('menu');
            }else if(e.target.getAttribute('class') == 'btnContact'){
                main_container.removeChild(main_container.firstChild);
                main_container.appendChild(contact());
                console.log('c');
            }
        });
    }
   
    console.log('0');
    header();
    nav();
    main();
    footer();
    btnNav();
})();