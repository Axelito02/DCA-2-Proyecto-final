import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class Search extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this, style)
        
        const bar = this.ownerDocument.createElement("comp-bar");
        const main = this.ownerDocument.createElement("div");
        const header = this.ownerDocument.createElement("div");
        const logo = this.ownerDocument.createElement("img");
        logo.setAttribute("src", "../dist/image/Playconnect-Logo.png");
        
        main.classList.add("row");
        header.classList.add("header");
        
        main.appendChild(header);
        header.appendChild(logo);
        header.appendChild(bar);
        
        this.shadowRoot?.appendChild(main);
    }
}

customElements.define('comp-search', Search);
