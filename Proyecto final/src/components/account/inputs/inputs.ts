import { loadCss } from "../../../utils/styles";
import style from "./style.css";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../../utils/firebase"; // Asegúrate de importar la instancia de Firebase Firestore que estás utilizando


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

        const titleContact = this.ownerDocument.createElement("p");
        titleContact.textContent = "Contact information";

        const ContainerTitle = this.ownerDocument.createElement("div");
        ContainerTitle.classList.add("ContainerTitle");

        const ContainerTitleInputs = this.ownerDocument.createElement("div");
        ContainerTitleInputs.classList.add("ContainerTitleInputs");

        const ContainerInfo = this.ownerDocument.createElement("div");
        ContainerInfo.classList.add("ContainerInfo");

        //Los títulos de los inputs
        const titleEmail = this.ownerDocument.createElement("p");
        titleEmail.textContent = "Email registered";
        const titleRecovery = this.ownerDocument.createElement("p");
        titleRecovery.textContent = "Recovery email";
        const titleID = this.ownerDocument.createElement("p");
        titleID.textContent = "Account ID";
        const titlePhone = this.ownerDocument.createElement("p");
        titlePhone.textContent = "Phone registered";

        const ContainerselectStatus = this.ownerDocument.createElement("div");
        ContainerselectStatus.classList.add("Inputs");

        //todos los inputs
        const inputEmail = this.ownerDocument.createElement("input");
        inputEmail.type = "text";
        inputEmail.placeholder = "example@gmail.com";
        inputEmail.classList.add("inputEmail");
        const inputRecovery = this.ownerDocument.createElement("input");
        inputRecovery.type = "text";
        inputRecovery.placeholder = "example@gmail.com";
        inputRecovery.classList.add("inputRecovery");
        const inputID = this.ownerDocument.createElement("input");
        inputID.type = "text";
        inputID.readOnly = true;
        inputID.placeholder = "2398289302";
        inputID.classList.add("inputID");
        const inputPhone = this.ownerDocument.createElement("input");
        inputPhone.type = "text";
        inputID.readOnly = true;
        inputPhone.placeholder = "3174454969";
        inputPhone.classList.add("inputPhone");

        containerContent.appendChild(ContainerTitle);
        containerContent.appendChild(ContainerInfo);

        ContainerInfo.appendChild(ContainerTitleInputs);
        ContainerInfo.appendChild(ContainerselectStatus);
        ContainerTitle.appendChild(titleContact);
        ContainerTitleInputs.appendChild(titleEmail);
        ContainerselectStatus.appendChild(inputEmail);
        ContainerTitleInputs.appendChild(titleRecovery);
        ContainerselectStatus.appendChild(inputRecovery);
        ContainerTitleInputs.appendChild(titleID);
        ContainerselectStatus.appendChild(inputID);
        ContainerTitleInputs.appendChild(titlePhone);
        ContainerselectStatus.appendChild(inputPhone);

    }
}

customElements.define('comp-inputs', Inputs);
