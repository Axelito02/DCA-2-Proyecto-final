import data from "../../components/card/data";
import { addObserver, appState } from "../../store/index";
import { AttrCards } from "../../Types/Interfaces";
<<<<<<< HEAD
=======
import { Addevent } from "../../utils/addevents";
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
import { setAttributes } from "../../utils/attributtes";

export default class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
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

        const row = this.ownerDocument.createElement("main");
        row.setAttribute("id", "content");

<<<<<<< HEAD
=======

>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
        const appSearch = this.ownerDocument.createElement("comp-search");
        const appBanner = this.ownerDocument.createElement("comp-banner");
        const appNav = this.ownerDocument.createElement("comp-nav");
        const appGame = this.ownerDocument.createElement("comp-gameweek");
        const appPost = this.ownerDocument.createElement("comp-post");
        const appProfile = this.ownerDocument.createElement("comp-profile");
<<<<<<< HEAD
        const appLogin = this.ownerDocument.createElement("comp-loginmobile");
=======
        const appCard = this.ownerDocument.createElement("comp-card");
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e

        data.forEach(({name, thumbnail, publisher, releaseyear}) => {
            const appCard = this.ownerDocument.createElement("comp-card");
            const cardProps: AttrCards = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                publisher: `${publisher}`,
                releaseyear: `${releaseyear}`,
            }
            setAttributes<AttrCards>(cardProps, appCard);
            content.appendChild(appCard)
        })
        
        data.forEach(({name, thumbnail, publisher, releaseyear}) => {
            const appCard = this.ownerDocument.createElement("comp-card");
            const cardProps: AttrCards = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                publisher: `${publisher}`,
                releaseyear: `${releaseyear}`,
            }
            setAttributes<AttrCards>(cardProps, appCard);
            row.appendChild(appCard)
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
        main.appendChild(row);
        main.appendChild(bottom);

        Addevent(main ,() => {

        })
        
        if(appState.contentGames == "compGames") {
            main.appendChild(content);
            main.appendChild(row);
            main.appendChild(bottom);

        } else if (appState.contentPost == "compPost"){
<<<<<<< HEAD
            text.style.display = "none";
            text.innerHTML = "";
=======
            text.textContent = ("");
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
            appGame.style.display = "none"
            bottom.appendChild(appPost);
            
        } else if (appState.contentProfile == "compProfile"){
<<<<<<< HEAD
            text.style.display = "none";
            row.style.display = "none";
            content.style.display = "none";
            bottom.style.display = "none";
            main.appendChild(appProfile)
            
        } else if (appState.contentProfile == "compLoginMobile"){
            text.style.display = "none";
            row.style.display = "none";
            content.style.display = "none";
            bottom.style.display = "none";
            main.appendChild(appLogin)
=======
            text.textContent = ("");
            row.innerHTML = "";
            content.innerHTML = "";
            bottom.style.display = "none";
            content.appendChild(appProfile)
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
        }

        bottom.appendChild(appGame);
        nav.appendChild(appNav);
        header.appendChild(appSearch);
        header.appendChild(appBanner);
        title.appendChild(text);
    }
}

customElements.define('comp-dashboard', Dashboard);
