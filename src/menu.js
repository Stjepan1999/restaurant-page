import './style.css'


export default function createMenu() {
    const content = document.getElementById("content")

    const menu = document.createElement("div")
    menu.classList.add("menu")

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "SAKURA MENU";
    menuHeading.classList.add("menu-heading")


    menu.appendChild(menuHeading)
    content.appendChild(menu)

}