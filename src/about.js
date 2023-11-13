import './style.css'

export default function createAbout() {
    const content = document.getElementById("content")

    const about = document.createElement("div")
    about.classList.add("menu")

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "ABOUT SAKURA";
    menuHeading.classList.add("menu-heading")


    about.appendChild(menuHeading)
    content.appendChild(about)

}