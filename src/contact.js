import './style.css'

export default function createContact() {
    const content = document.getElementById("content")

    const background = document.createElement("div")
    background.classList.add("background")

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("about-page")

    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "CONTACT US";
    contactHeading.classList.add("menu-heading")

    const contactInfo = `
    <h4>WORKING TIME:</h4> 
    <p>Monday - Thursday: 11:00 - 23:00</p>
    <p>Friday - Sunday : 11:00 - 00:00</p>

    <h4>PHONE:</4>
    <p>+12 345 6789 </p>

    <h4>LOCATION:</h4>
    <p>Bamboo Lane 35</p>`


    contactDiv.appendChild(contactHeading)
    contactDiv.innerHTML += contactInfo
    background.appendChild(contactDiv)
    content.appendChild(background)

}