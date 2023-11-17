import createHeader from './header.js';
import createHome from './home.js';
import createFooter from './footer.js';
import createMenu from './menu.js';
import createAbout from './about.js';
import createContact from './contact.js';


const content = document.getElementById("content");

function home() {
    content.innerHTML = "";
    createHeader();
    createHome();
    createFooter();
}


function menu() {
    content.innerHTML = ""
    createHeader();
    createMenu();
    createFooter();
}

function about() {
    content.innerHTML = "";
    createHeader();
    createAbout();
    createFooter();
}

function contact() {
    content.innerHTML = "";
    createHeader();
    createContact();
    createFooter();
}

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "HOME") home();
    if (target === "MENU" || target === "SEE OUR MENU") menu();
    if (target === "ABOUT US") about();
    if (target === "CONTACT") contact();
  });


home()