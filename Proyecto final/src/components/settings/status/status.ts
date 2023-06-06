import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Status extends HTMLElement {
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
        ContainerTitle.classList.add("ContainerTitle");
        const title = this.ownerDocument.createElement("p");
        title.textContent = "Status";

        const ContainerselectStatus = this.ownerDocument.createElement("div");
        ContainerselectStatus.classList.add("Status");

        const selectStatus = this.ownerDocument.createElement("select");
        selectStatus.textContent = "Status";
        selectStatus.classList.add("selectStatus");

        const optionOne = this.ownerDocument.createElement("option");
        optionOne.textContent = "Connected";

        const optionTwo = this.ownerDocument.createElement("option");
        optionTwo.textContent = "Offline";

        containerContent.appendChild(ContainerTitle);
        containerContent.appendChild(ContainerselectStatus);
        ContainerTitle.appendChild(title);
        ContainerselectStatus.appendChild(selectStatus);
        selectStatus.appendChild(optionOne)
        selectStatus.appendChild(optionTwo)

    }
}

customElements.define('comp-status', Status);
