const createHomePage = () => {
    const content = document.querySelector(".content")
    const pageContent = document.createElement("div");
    pageContent.classList.add("page_content")

    const title = document.createElement("h1");
    title.textContent = "Hell's Kitchen";
    pageContent.appendChild(title);

    const image = document.createElement("img");
    image.src = "https://www.prolificnorth.co.uk/wp-content/uploads/2022/08/hellskitchen-blogbanner-1920x1080-v2.jpeg";
    image.alt = "hell's kitchen banner";
    image.height = "500"
    pageContent.appendChild(image);

    const copy = document.createElement("p");
    copy.textContent = "The spiciest restaurant in the world!";
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createHomePage;