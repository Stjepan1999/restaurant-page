import './style.css'
import logoImage from './images/logo.png'

export default function createHeader() {
    const content = document.getElementById("content")

    const header = document.createElement("div");
    header.classList.add("header")

    const logo = document.createElement("img");
    logo.src = logoImage
    logo.classList.add("logo")

    const nav = document.createElement("div");
    nav.classList.add("nav")

    const home = document.createElement("a");
    home.textContent = "HOME"

    const menu = document.createElement("a");
    menu.textContent = "MENU"

    const about = document.createElement("a");
    about.textContent = "ABOUT US"

    const contact = document.createElement("a");
    contact.textContent = "CONTACT"


    header.appendChild(logo)
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(about)
    nav.appendChild(contact)
    header.appendChild(nav)
    content.appendChild(header)
}