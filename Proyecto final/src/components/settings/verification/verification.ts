import { Addevent } from "../../../utils/addevents";
import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Verification extends HTMLElement {
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
        title.textContent = "Two-step verification"
        ContainerTitle.appendChild(title);

        const ContainerInput = this.ownerDocument.createElement("div");
        ContainerInput.classList.add("ContainerInput")
        Container.appendChild(ContainerInput);

        const inputCheck = this.ownerDocument.createElement("input");
        inputCheck.classList.add("inputCheck")
        inputCheck.type = "checkbox"
        inputCheck.addEventListener("checked", () => {
            console.log("seleccionado");

        })

        const label = this.ownerDocument.createElement("p");
        label.classList.add("label")
        label.setAttribute("for", "inputCheck")
        label.textContent = "Disabled"

        Container.appendChild(ContainerInput)

        ContainerInput.appendChild(inputCheck)
        ContainerInput.appendChild(label);

    }
}

customElements.define('comp-verification', Verification);
