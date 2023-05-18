import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Friend extends HTMLElement {
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
        
        const buttonFriends = this.ownerDocument.createElement("button");
        buttonFriends.classList.add("btnFriends")
        buttonFriends.textContent = "Friends";
        this.shadowRoot?.appendChild(buttonFriends);

    }
}

customElements.define('comp-friends', Friend);
