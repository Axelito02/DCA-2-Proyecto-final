import { loadCss } from "../../utils/styles";
import style from "./style.css"

export interface AttrDescription {
    text_btn: string;
    text: string;
}

export default class MyGames extends HTMLElement {
    text_btn: string = "";
    text: string = "";

    static get observedAttributes(){
        return["text_btn", "text"]
    }

    attributeChangedCallback(propName: keyof AttrDescription, _:unknown, newValue:string){
        this[propName] = newValue;
        console.log(propName, newValue);
            
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
        Container.id = "containerMain";

        const appRecentlyPlayed = this.ownerDocument.createElement("comp-recentlyplayed");
        const appGames = this.ownerDocument.createElement("comp-games");
        
        this.shadowRoot?.appendChild(Container);

        Container.appendChild(appRecentlyPlayed);
        Container.appendChild(appGames);
    }
}

customElements.define('comp-mygames', MyGames);
