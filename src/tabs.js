const createTabs = () => {
    const content = document.querySelector(".content");

    const home = document.createElement("button");
    home.textContent = "Home";
    content.appendChild(home);

    const menu = document.createElement("button");
    menu.textContent = "Menu";
    content.appendChild(menu);

    const contact = document.createElement("button");
    contact.textContent = "Contact";
    content.appendChild(contact);
}

export default createTabs();