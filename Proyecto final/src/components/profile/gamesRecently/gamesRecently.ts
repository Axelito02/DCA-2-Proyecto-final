import data from "../gamesRecently/recentlyadd/data";
import style from "./style.css";
import { loadCss } from "../../../utils/styles";
import { AttrGames } from "../../../Types/Interfaces";
import { setAttributes } from "../../../utils/attributtes";

export default class RecentlyGames extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)
        
        const Container = this.ownerDocument.createElement("section");
        Container.id = "Containermain";

        const ContainerTitle = this.ownerDocument.createElement("section");
        ContainerTitle.id = "containertitle";

        const title = this.ownerDocument.createElement("p");
        title.classList.add("title")
        title.textContent = "Recently obtained games";

        ContainerTitle.appendChild(title)

        this.shadowRoot?.appendChild(ContainerTitle);
        this.shadowRoot?.appendChild(Container);

        data.forEach(({thumbnail}) => {
            const appRecentlyAdd = this.ownerDocument.createElement("recently-add");
            const cardProps: AttrGames = {
                thumbnail: `${thumbnail}`,
            }
            setAttributes<AttrGames>(cardProps, appRecentlyAdd);
            Container.appendChild(appRecentlyAdd);
        })
    }
}

customElements.define('recently-games', RecentlyGames);
