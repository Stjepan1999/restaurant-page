import './style.css'
import dishOne from './images/dish-1.jpg'
import dishTwo from './images/dish-2.jpg'
import dishThree from './images/dish-3.jpg'
import dishFour from './images/dish-4.jpg'
import dishFive from './images/dish-5.jpg'
import dishSix from './images/dish-6.jpg'

export default function createMenu() {
    const content = document.getElementById("content")

    const menuBackground = document.createElement("div")
    menuBackground.classList.add("background")

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "SAKURA MENU";
    menuHeading.classList.add("menu-heading");
    menuBackground.appendChild(menuHeading);

    const menuImageContainer = document.createElement("div");
    menuImageContainer.classList.add("image-container")

    let dishNames = ["Golden Dumpling Fusion", "Sizzling Teriyaki Temptation", "Green Garden Box", "Sakura Blossom bowl", "Sakura Sesame Bowl", "Dragon Roll Delight"]
    let dishPrices = ["12€", "10€", "9€", "11€", "10€", "13€",]
    let menuImages = [dishOne, dishTwo, dishThree, dishFour, dishFive, dishSix];

    menuImages.forEach((path, index) => {
        const dishImageContainer = document.createElement("div");
        dishImageContainer.classList.add("dish-image-container")

        const dishImage = document.createElement("img");
        dishImage.src = path;
        dishImage.classList.add("menu-image");

        const dishInfo = document.createElement("div");
        dishInfo.classList.add("dish-info-overlay");
        dishInfo.innerHTML = `<p>${dishNames[index]}</p><p>${dishPrices[index]}</p>`

        dishImageContainer.appendChild(dishImage);
        dishImageContainer.appendChild(dishInfo)
        menuImageContainer.appendChild(dishImageContainer);
    })


    menuBackground.appendChild(menuImageContainer)
    content.appendChild(menuBackground)

}