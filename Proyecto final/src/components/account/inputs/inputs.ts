import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Inputs extends HTMLElement {
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

        const containerContent = this.ownerDocument.createElement("div");
        containerContent.classList.add("containerContent");
        this.shadowRoot?.appendChild(containerContent);
        
        const ContainerTitle = this.ownerDocument.createElement("div");
        ContainerTitle.classList.add ("ContainerTitle");
        const title = this.ownerDocument.createElement("p");
        title.textContent = "Email registered";

        const ContainerselectStatus = this.ownerDocument.createElement("div");
        ContainerselectStatus.classList.add ("Inputs");

        const inputEmail = this.ownerDocument.createElement("input");
        inputEmail.type = "text";
        inputEmail.placeholder = "example@gmail.com";
        inputEmail.classList.add ("inputEmail");

        containerContent.appendChild(ContainerTitle);
        containerContent.appendChild(ContainerselectStatus);
        ContainerTitle.appendChild(title);
        ContainerselectStatus.appendChild(inputEmail);

    }
}

customElements.define('comp-inputs', Inputs);
