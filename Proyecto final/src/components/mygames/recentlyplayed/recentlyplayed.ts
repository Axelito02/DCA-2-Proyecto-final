import { AttrGames } from "../../../Types/Interfaces";
import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class RecentlyPlay extends HTMLElement {
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
        loadCss(this, style);

        const Container = this.ownerDocument.createElement("section");
        Container.id = "Container";
        
        const games = this.ownerDocument.createElement("img");
        games.src = this.thumbnail;

        const game1 = this.ownerDocument.createElement("div");
        game1.classList.add ("game");
        
        this.shadowRoot?.appendChild(Container);

        Container.appendChild(game1);
        game1.appendChild(games);
    }
}

customElements.define('comp-recentlyplayed', RecentlyPlay);
