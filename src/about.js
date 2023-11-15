import './style.css'
import imageOne from './images/about-1.jpg'
import imageTwo from './images/about-2.jpg'
import imageThree from './images/about-3.jpg'
import imageFour from './images/about-4.jpg'
import imageFive from './images/about-5.jpg'


export default function createAbout() {
    const content = document.getElementById("content")

    const background = document.createElement("div")
    background.classList.add("menu")

    const aboutPage = document.createElement("div")
    aboutPage.classList.add("about-page")

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "ABOUT SAKURA";
    menuHeading.classList.add("menu-heading")

    const shortStory = `
    <p>Once upon a time in a bustling city, there was a hidden gem called Sakura Asian Restaurant. With a touch of magic in its recipes, Sakura blossomed into a place where flavors danced and aromas told stories. Our chefs, inspired by the vibrant streets of Asia, crafted dishes that brought smiles to faces.</p>

    <p>At Sakura, every meal is a journey. From sizzling stir-fries to delicate sushi rolls, each dish tells a tale of tradition and passion. We believe in creating a warm haven where friends and families can gather, share laughter, and indulge in the joy of good food.</p>
    
    <p>Step into Sakura, where the heart of Asia meets the spirit of community. Join us on this flavorful adventure, and let the essence of our story become a part of yours. Welcome to Sakura, where every bite is a chapter in the tale of our delightful journey.</p>`


    const imageSlider = document.createElement("div")
    imageSlider.classList.add("image-slider")

    const imageContainer = document.createElement("div")

    const images = [imageOne, imageTwo, imageThree, imageFour, imageFive]
    images.forEach((path) => {
        const imgElement = document.createElement("img");
        imgElement.src = path;
        imgElement.alt = "About Us Image";
        imgElement.classList.add("slide")
        imageContainer.appendChild(imgElement)
    } )
    

    const nextButton = document.createElement("button")
    nextButton.textContent = ">"
    nextButton.classList.add("next")
    nextButton.addEventListener("click", () => changeImage(1))
    const previousButton = document.createElement("button")
    previousButton.textContent = "<"
    previousButton.classList.add("previous")
    previousButton.addEventListener("click", () => changeImage(-1))

    imageSlider.appendChild(previousButton)
    imageSlider.appendChild(imageContainer)
    imageSlider.appendChild(nextButton)

    aboutPage.appendChild(menuHeading)
    aboutPage.innerHTML += shortStory;
    background.appendChild(aboutPage)
    background.appendChild(imageSlider)

    content.appendChild(background)

    let slideIndex = 0;
    showImage(slideIndex)

    function changeImage(n) {
        showImage(slideIndex += n)
    }

    function showImage(n) {
        const slides = document.querySelectorAll(".slide");
        slideIndex = n;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1
        }
        if (slideIndex > slides.length - 1) {
            slideIndex = 0
        }

        slides[slideIndex].style.display = "block"
    }

}