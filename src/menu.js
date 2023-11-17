import './style.css'
import dishOne from './images/dish-1.jpg'
import dishTwo from './images/dish-2.jpg'


export default function createMenu() {
    const content = document.getElementById("content")

    const menu = document.createElement("div")
    menu.classList.add("background")

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "SAKURA MENU";
    menuHeading.classList.add("menu-heading");
    menu.appendChild(menuHeading);

    let menuImages = [dishOne, dishTwo];

    menuImages.forEach((path) => {
        const dishImage = document.createElement("img");
        dishImage.src = path;
        dishImage.classList.add("menu-image");
        menu.appendChild(dishImage);
    })


    
    content.appendChild(menu)

}