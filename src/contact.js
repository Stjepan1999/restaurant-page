import './style.css'

export default function createContact() {
    const content = document.getElementById("content")

    const background = document.createElement("div")
    background.classList.add("background")

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-page")

    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "CONTACT US";
    contactHeading.classList.add("menu-heading")

    const workingTimeDiv = document.createElement("div")
    const contactInfoDiv = document.createElement("div")

    const workingTime = `
    <h2>WORKING TIME:</h2> 
    <p>Monday: 11:00 - 23:00</p>
    <p>Thursday: 11:00 - 23:00</p>
    <p>Wednesday: 11:00 - 23:00</p>
    <p>Thursday: 11:00 - 23:00</p>
    <p>Friday: 11:00 - 00:00</p>
    <p>Saturday: 11:00 - 00:00</p>
    <p>Sunday: 11:00 - 00:00</p>`

    const contactInfo = `
    <h2>LOCATION:</h2> 
    <p>Bamboo Lane 35</p>
    <h2>PHONE:</h2> 
    <p>+12 345 6789</p>
    <h2>EMAIL:</h2> 
    <p>sakura@info.com</p>`


    background.appendChild(contactHeading)
    workingTimeDiv.innerHTML += workingTime
    contactInfoDiv.innerHTML += contactInfo
    contactDiv.appendChild(workingTimeDiv)
    contactDiv.appendChild(contactInfoDiv)
    background.appendChild(contactDiv)
    content.appendChild(background)

}