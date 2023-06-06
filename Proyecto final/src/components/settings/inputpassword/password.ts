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
        Container.id = "Container"
        this.shadowRoot?.appendChild(Container);

        const ContainerTitle = this.ownerDocument.createElement("div");
        ContainerTitle.classList.add("ContainerTitle")
        Container.appendChild(ContainerTitle);

        const title = this.ownerDocument.createElement("p");
        title.classList.add("title")
        title.textContent = "Password"
        ContainerTitle.appendChild(title);

        const ContainerInput = this.ownerDocument.createElement("div");
        ContainerInput.classList.add("ContainerInput")
        Container.appendChild(ContainerInput);

        const inputPassword = this.ownerDocument.createElement("input");
        inputPassword.classList.add("inputPassword")
        inputPassword.type = "password"
        inputPassword.value = "password"
        inputPassword.readOnly = true

        Container.appendChild(ContainerInput)

        ContainerInput.appendChild(inputPassword)

    }
}

customElements.define('comp-password', Password);
