import { AttrGames } from "../../../../utils/interfaces";
import style from "./style.css";
import { loadCss } from "../../../../utils/styles";

export default class RecentlyAdd extends HTMLElement {
    thumbnail: string = "";

    static get observedAttributes(){
        return["thumbnail"]
    }

    attributeChangedCallback(propName: keyof AttrGames, _:unknown, newValue:string){
        this[propName] = newValue;
        this.render();
    }

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

        const ContainerRecentlyAddGame = this.ownerDocument.createElement("section");
        ContainerRecentlyAddGame.id = "ContainerRecentlyAddGame";
        this.shadowRoot?.appendChild(ContainerRecentlyAddGame)

        const game = this.ownerDocument.createElement("img");
        game.classList.add ("RecentlyAddGames");
        game.src = this.thumbnail


        ContainerRecentlyAddGame.appendChild(game);
    }
}

customElements.define('recently-add', RecentlyAdd);
