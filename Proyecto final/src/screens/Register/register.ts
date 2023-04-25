import { AttrRegister } from "../../Types/types";

export default class Register extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        const css = this.ownerDocument.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "./style/main.css");
        this.shadowRoot?.appendChild(css);

        const main = this.ownerDocument.createElement('section')
        main.setAttribute("id","registerContainer")
        this.shadowRoot?.appendChild(main)
    }
}

customElements.define('comp-register', Register);
