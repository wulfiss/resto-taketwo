const contact = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('contact');

    const contact_div = document.createElement('div');
    contact_div.classList.add('contactDiv');

    const address_div = document.createElement('div');
    const address_span = document.createElement('span');
    address_span.textContent = 'Address: '
    address_span.classList.add('title');
    const add_span = document.createElement('span');
    add_span.textContent = 'Earth, Macross city, 4059 N 9th Street'
    add_span.classList.add('text');

    address_div.appendChild(address_span);
    address_div.appendChild(add_span);

    const phone_div = document.createElement('div');
    const phone_span = document.createElement('span');
    phone_span.textContent = 'Phone: '
    phone_span.classList.add('title');
    const ph_span = document.createElement('span');
    ph_span.textContent = '+54-011-2341234'
    ph_span.classList.add('text');

    phone_div.appendChild(phone_span);
    phone_div.appendChild(ph_span);

    const mail_div = document.createElement('div');
    const mail_span = document.createElement('span');
    mail_span.textContent = 'Email: '
    mail_span.classList.add('title');
    const em_span = document.createElement('span');
    em_span.textContent = 'donwulfis@lala.com'
    em_span.classList.add('text');

    mail_div.appendChild(mail_span);
    mail_div.appendChild(em_span);

    const contus_div = document.createElement('div');
    contus_div.classList.add('superDiv');
    const contus_span = document.createElement('span');
    contus_span.textContent = 'Contact Us'
    contus_span.classList.add('superTitle');

    contus_div.appendChild(contus_span);

    contact_div.appendChild(contus_div);
    contact_div.appendChild(address_div);
    contact_div.appendChild(phone_div);
    contact_div.appendChild(mail_div);

    content_container.appendChild(contact_div);

    return content_container;
}


export default contact;