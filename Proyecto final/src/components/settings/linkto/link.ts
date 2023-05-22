import { AttrGames } from "../../../Types/Interfaces";
import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Link extends HTMLElement {
    thumbnail: string= "";

    static get observedAttributes(){
        return["thumbnail"]
    }

    attributeChangedCallback(propName: keyof AttrGames, _:unknown, newValue:string){
        this[propName] = newValue;
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style);

        const Container = this.ownerDocument.createElement("div");
        Container.classList.add("Container");
        this.shadowRoot?.appendChild(Container);
        
        const containerPlatformLink = this.ownerDocument.createElement("div");
        containerPlatformLink.classList.add("containerPlatformLink");

        const PlatformLink = this.ownerDocument.createElement("img");
        PlatformLink.src = this.thumbnail;

        Container.appendChild(containerPlatformLink);
        containerPlatformLink.appendChild(PlatformLink);

    }
}

customElements.define('comp-link', Link);
