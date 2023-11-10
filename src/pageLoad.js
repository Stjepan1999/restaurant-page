class PageLoader {
    constructor(contentId) {
        console.log(contentId)
        this.content = document.querySelector(contentId)
        console.log(this.content)
    }

    load() {
        const header = document.createElement('header')
        header.textContent = "SAKURA RESTAURANT"


        const main = document.createElement("main")

        this.content.appendChild(header)
        this.content.appendChild(main)
    }

}


export default PageLoader