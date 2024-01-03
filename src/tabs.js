import createHomePage from "./homepage"
import createMenuPage from "./menu"
import createContactPage from "./contact"

const createTabs = () => {
    const content = document.querySelector(".content");
    const pageTabs = document.createElement("div");
    pageTabs.classList.add("page_tabs")

    const home = document.createElement("button");
    home.textContent = "Home";
    home.addEventListener("click", () => {
        clearContent()
        createHomePage();
    })

    const menu = document.createElement("button");
    menu.textContent = "Menu";
    menu.addEventListener("click", () => {
        clearContent()
        createMenuPage();
    })

    const contact = document.createElement("button");
    contact.textContent = "Contact";
    contact.addEventListener("click", () => {
        clearContent()
        createContactPage();
    })

    pageTabs.appendChild(home);
    pageTabs.appendChild(menu);
    pageTabs.appendChild(contact);

    content.prepend(pageTabs);

}

function clearContent() {
    const content = document.querySelector(".content");
    const pageContent = document.querySelector(".page_content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}
export default createTabs;