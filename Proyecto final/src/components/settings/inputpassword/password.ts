import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Password extends HTMLElement {
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

        const Container = this.ownerDocument.createElement("section");
        this.shadowRoot?.appendChild(Container);

        const containerTitle3 = this.ownerDocument.createElement("div");
        containerTitle3.classList.add("containerTitle");

        const title3 = this.ownerDocument.createElement("p");
        title3.textContent = "Security";

        const inputPassword = this.ownerDocument.createElement("input");
        inputPassword.type = "password"
        inputPassword.readOnly

        containerTitle3.appendChild(title3)

    }
}

customElements.define('comp-password', Password);
