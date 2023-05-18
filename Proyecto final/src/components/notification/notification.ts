import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Notification extends HTMLElement {
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
        
        const buttonNotification = this.ownerDocument.createElement("button");
        buttonNotification.classList.add("btnNotification")
        buttonNotification.textContent = "Notification"
        this.shadowRoot?.appendChild(buttonNotification);
    } 
}

customElements.define('comp-notification', Notification);
