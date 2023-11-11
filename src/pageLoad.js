import createHeader from './header.js';
import createMain from './main-section.js';

class PageLoader {
    constructor(contentId) {
        this.content = document.querySelector(contentId);
    }

    load() {
        const header = createHeader();
        const main = createMain();

        this.content.appendChild(header);
        this.content.appendChild(main);
    }

}


export default PageLoader