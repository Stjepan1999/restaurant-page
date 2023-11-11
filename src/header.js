import './style.css'

export default function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header")

    const logo = document.createElement("div");
    logo.textContent = "SAKURA"
    logo.classList.add("logo")

    const nav = document.createElement("div");
    nav.classList.add("nav")

    const home = document.createElement("a");
    home.textContent = "Home"

    const menu = document.createElement("a");
    menu.textContent = "Menu"

    const about = document.createElement("a");
    about.textContent = "About us"

    const contact = document.createElement("a");
    contact.textContent = "Contact"


    header.appendChild(logo)
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(about)
    nav.appendChild(contact)
    header.appendChild(nav)



    return header
}