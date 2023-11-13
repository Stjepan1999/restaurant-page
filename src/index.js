import createHeader from './header.js';
import createMain from './main-section.js';
import createFooter from './footer.js';


const content = document.getElementById("content");

function home() {
    content.innerHTML = "";
    createHeader();
    createMain();
    createFooter();
}


home()