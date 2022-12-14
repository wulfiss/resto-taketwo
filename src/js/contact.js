const contact = () => {
    const content_container = document.createElement('div');
    content_container.classList.add('contact');

    const contact_div = document.createElement('div');
    contact_div.textContent = 'Just talk to me, please answer my stories in ig pleaaaaaseeee!!!';

    content_container.appendChild(contact_div);

    return content_container;
}


export default contact;