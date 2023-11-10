import createHeader from './header.js'

class PageLoader {
    constructor(contentId) {
        this.content = document.querySelector(contentId)
    }

    load() {
        const header = createHeader();


        const main = document.createElement("main")

        this.content.appendChild(header)
        this.content.appendChild(main)
    }

}


export default PageLoader