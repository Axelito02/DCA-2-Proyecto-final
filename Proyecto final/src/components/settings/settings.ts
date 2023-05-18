import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Settings extends HTMLElement {
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
        
        const buttonSetting = this.ownerDocument.createElement("button");
        this.shadowRoot?.appendChild(buttonSetting);
    }
}

customElements.define('comp-settings', Settings);
