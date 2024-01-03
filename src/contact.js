const createContactPage = () => {
    const content = document.querySelector(".content")
    const pageContent = document.createElement("div");
    pageContent.classList.add("page_content")

    const form = document.createElement("form");

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Name: ";
    form.appendChild(nameInput);

    const numberInput = document.createElement("input");
    numberInput.type = "tel";
    numberInput.placeholder = "Number: ";
    form.appendChild(numberInput);

    const adressInput = document.createElement("input");
    adressInput.placeholder = "Adress: ";
    form.appendChild(adressInput);

    const inquiryInput = document.createElement("textarea");
    inquiryInput.placeholder = "Inquiries: "
    form.appendChild(inquiryInput);

    pageContent.appendChild(form);

    content.appendChild(pageContent);
}

export default createContactPage;