import './style.css';
import restaurantImage from './images/about-3.jpg'

export default function createMain() {
    const content = document.getElementById("content");

    const landingSection = document.createElement("div")
    landingSection.classList.add("landing-section")

    //Welcome section
    const welcomeSection = document.createElement("div");
    welcomeSection.classList.add("welcome-section");

    const welcomeTextHeading = document.createElement("h1");
    welcomeTextHeading.textContent = "WELCOME TO SAKURA";

    const welcomeTextParagraph = document.createElement("p")
    welcomeTextParagraph.textContent = "A warm place with tasty food for you and your friends."

    const landingImage = document.createElement("img");
    landingImage.src = restaurantImage;
    landingImage.classList.add("landing-image");

    //Menu section
    const menuSection = document.createElement("div")
    menuSection.classList.add("menu-section")

    const menuTextSection = document.createElement("div")
    menuTextSection.classList.add("menu-text-section")

    const menuSectionHeading = document.createElement("h1");
    menuSectionHeading.textContent = "MENU"

    const menuSectionParagraph = document.createElement("p");
    menuSectionParagraph.textContent = "Experience the art of Asian culinary mastery with our menu.";

    const menuButton = document.createElement("button");
    menuButton.textContent = "SEE OUR MENU";
    menuButton.classList.add("landing-section-button")
 


    //Contact section
    const contactSection = document.createElement("div");
    contactSection.classList.add("contact-section");

    const contactInfo = `
    <h2>CONTACT US</h2>
    <p>LOCATION: Bamboo Lane 35</p>
    <p>PHONE: +12 345 6789</p>
    <p>EMAIL: sakura@info.com</p>`


    welcomeSection.appendChild(welcomeTextHeading)
    welcomeSection.appendChild(welcomeTextParagraph)
    welcomeSection.appendChild(landingImage)

    menuTextSection.appendChild(menuSectionHeading)
    menuTextSection.appendChild(menuSectionParagraph)
    menuTextSection.appendChild(menuButton)

    menuSection.appendChild(menuTextSection)

    contactSection.innerHTML += contactInfo


    landingSection.appendChild(welcomeSection)
    landingSection.appendChild(menuSection)
    landingSection.appendChild(contactSection)

    content.appendChild(landingSection)
}