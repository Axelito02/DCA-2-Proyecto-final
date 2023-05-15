import style from "./style.css";
import { loadCss } from "../../../utils/styles";

export default class ContenProfile extends HTMLElement {
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
        this.shadowRoot?.appendChild(Container);


    }
}

customElements.define('content-profile', ContenProfile);
