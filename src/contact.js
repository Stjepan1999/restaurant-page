import './style.css'

export default function createContact() {
    const content = document.getElementById("content")

    const contactDiv = document.createElement("div")
    contactDiv.classList.add("menu")

    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "CONTACT US";
    contactHeading.classList.add("menu-heading")



    contactDiv.appendChild(contactHeading)
    content.appendChild(contactDiv)

}