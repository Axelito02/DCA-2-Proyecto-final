import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class LoginMobile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const Formlogin = this.ownerDocument.createElement("comp-form");
        Formlogin.classList.add("FormLogin")

        this.shadowRoot?.appendChild(Formlogin)
    }
}

customElements.define('comp-loginmobile', LoginMobile);
