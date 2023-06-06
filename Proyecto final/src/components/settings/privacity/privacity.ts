import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Privacity extends HTMLElement {
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
        title.textContent = "Status"
        ContainerTitle.appendChild(title);

        const ContainerInput = this.ownerDocument.createElement("div");
        ContainerInput.classList.add("ContainerInput")
        Container.appendChild(ContainerInput);

        const inputConnected = this.ownerDocument.createElement("button");
        inputConnected.classList.add("btn")
        inputConnected.textContent = "Connected"

        const inputDisconnected = this.ownerDocument.createElement("button");
        inputDisconnected.classList.add("btn")
        inputDisconnected.textContent = "Offline"

        Container.appendChild(ContainerInput)

        ContainerInput.appendChild(inputConnected)
        ContainerInput.appendChild(inputDisconnected)

    }
}

customElements.define('comp-privacity', Privacity);
