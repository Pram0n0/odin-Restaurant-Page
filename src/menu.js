const createMenuPage = () => {
    const content = document.querySelector(".content")
    const pageContent = document.createElement("div");
    pageContent.classList.add("page_content")

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our devilicious treats"
    pageContent.appendChild(menuTitle);

    const menuList = document.createElement("ul");

    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "lobster bisque risoto"
    menuList.appendChild(menuItem1)

    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "raw scallops"
    menuList.appendChild(menuItem2)

    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "idiot sandwich"
    menuList.appendChild(menuItem3)

    pageContent.appendChild(menuList)

    content.appendChild(pageContent);
}

export default createMenuPage;