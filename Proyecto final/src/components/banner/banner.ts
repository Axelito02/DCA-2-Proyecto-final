import style from "./style.css"
import { loadCss } from "../../utils/styles";

export default class Banner extends HTMLElement {
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

        const banner = this.ownerDocument.createElement("div");
        banner.classList.add("banner")

        const img = this.ownerDocument.createElement("img");
        img.setAttribute("src","../dist/image/Valorant.png");
        img.setAttribute("alt","Valorant");

        banner.appendChild(img);
        this.shadowRoot?.appendChild(banner);
    }
}

customElements.define('comp-banner', Banner);
