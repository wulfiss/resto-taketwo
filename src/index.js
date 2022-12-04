import welcome from "./welcome";
import menu from "./menu";
import contact from "./contact";

(function unChange(){

    const header = () => {
        const header_container = document.createElement('header');
        const header_title = document.createElement('h1');
        const header_subtitle = document.createElement('h3');

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

    const footer = () =>{
        const footer_container = document.createElement('footer');

        document.body.appendChild(footer_container);
    }

    const main = () =>{
        const main_container = document.createElement('main');
        //const content_container = document.createElement('div');

        main_container.appendChild(welcome());
        document.body.appendChild(main_container);
    
        let btn_container = document.querySelector('button');

        btn_container.addEventListener('click', (e) => {           
            if(e.target.getAttribute('class') == 'btnWelcome'){
                console.log('1');
            }else if(e.target.getAttribute('class') == 'btnMenu'){
                console.log('menu');
            }else if(e.target.getAttribute('class') == 'btnContact'){
                console.log('c');
            }
        });
    
    }

    console.log('0');
    header();
    nav();
    main();
    footer();
})();