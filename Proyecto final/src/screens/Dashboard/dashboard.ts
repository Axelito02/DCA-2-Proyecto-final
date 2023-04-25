import data from "../../components/card/data";
import { AttrCards } from "../../Types/types";
import { setAttributes } from "../../utils/attributtes";

export default class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        const css = this.ownerDocument.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "./style/main.css");
        this.shadowRoot?.appendChild(css);
        
        const main = this.ownerDocument.createElement("section");
        main.setAttribute("id", "main_container");
        this.shadowRoot?.appendChild(main);

        const content = this.ownerDocument.createElement("main");
        content.setAttribute("id", "content");

        const appSearch = this.ownerDocument.createElement("comp-search");
        const appBanner = this.ownerDocument.createElement("comp-banner");
        const appNav = this.ownerDocument.createElement("comp-nav");
        const appGame = this.ownerDocument.createElement("comp-gameweek");
        const appPost = this.ownerDocument.createElement("comp-post");

        // const cardProps: AttrCards = {
        //     name: "zelda",
        //     thumbnail: "https://i1.sndcdn.com/artworks-Xb7DjesUtk53E0KI-GpZdgg-t500x500.jpg",
        //     publisher: "hola3",
        //     releaseyear: "hola4",
        // }

        // setAttributes<AttrCards>(cardProps, appCard)
        // this.shadowRoot?.appendChild(appCard)

        data.forEach(({name, thumbnail, publisher, releaseyear}) => {
            const appCard = this.ownerDocument.createElement("comp-card");
            const cardProps: AttrCards = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                publisher: `${publisher}`,
                releaseyear: `${releaseyear}`,
            }
            setAttributes<AttrCards>(cardProps, appCard);

            // appCard.setAttribute("name",`${name}`);
            // appCard.setAttribute("thumbnail",`${thumbnail}`);
            // appCard.setAttribute("publisher",`${publisher}`);
            // appCard.setAttribute("releaseyear",`${releaseyear}`);
            content.appendChild(appCard)
        })

        const header = this.ownerDocument.createElement("header");
        header.setAttribute("id", "header");
        
        const nav = this.ownerDocument.createElement("nav");
        nav.setAttribute("id", "bar_nav")

        const title = this.ownerDocument.createElement("section");
        const text = this.ownerDocument.createElement("h3");
        text.textContent= ("You’d also like...");
        title.setAttribute("id", "title");
        
        const bottom = this.ownerDocument.createElement("section");
        bottom.setAttribute("id", "bottom");

        main.appendChild(header);
        main.appendChild(nav);
        main.appendChild(title);
        main.appendChild(content);
        main.appendChild(bottom);
        
        nav.appendChild(appNav);
        header.appendChild(appSearch);
        header.appendChild(appBanner);
        title.appendChild(text);
        bottom.appendChild(appGame);
        // bottom.appendChild(appPost);
    }
}

customElements.define('comp-dashboard', Dashboard);
