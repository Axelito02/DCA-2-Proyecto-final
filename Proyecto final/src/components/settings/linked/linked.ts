import { AttrGames } from "../../../Types/Interfaces";
import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Linked extends HTMLElement {
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
        
        const containerPlatformLinked = this.ownerDocument.createElement("div");
        containerPlatformLinked.classList.add("containerPlatformLinked");

        const PlatformLinked = this.ownerDocument.createElement("img");
        PlatformLinked.src = this.thumbnail;

        Container.appendChild(containerPlatformLinked);

        containerPlatformLinked.appendChild(PlatformLinked);
    }
}

customElements.define('comp-linked', Linked);
