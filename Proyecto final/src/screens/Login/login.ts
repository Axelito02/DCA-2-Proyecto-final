<<<<<<< HEAD
// import { Addevent } from "../../utils/addevents";
=======
import { Addevent } from "../../utils/addevents";
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class Login extends HTMLElement {
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
        
        const container = this.ownerDocument.createElement("main");
        container.classList.add("Login-both");
        this.shadowRoot?.appendChild(container)

        const left = this.ownerDocument.createElement("section");
        left.id = "space"
        
        const right = this.ownerDocument.createElement("section");
        right.id = "login_form"
        
        const ComponentForm = this.ownerDocument.createElement("comp-form");
        
        container.appendChild(left)
        container.appendChild(right)

        right.appendChild(ComponentForm)
    }
}

customElements.define('comp-login', Login);
