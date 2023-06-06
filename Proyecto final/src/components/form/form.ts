import { addObserver, appState } from "../../store";
import { Screens } from "../../types/store";
import { loadCss } from "../../utils/styles";
import style from "./style.css"
import { dispatch } from "../../store";
import { navigate, saveInputs } from "../../store/actions";
import { Addevent } from "../../utils/addevents";
import { Usuario } from "../../types/usuario";
import { checkUsuarioInDB } from "../../utils/firebase";

const userInputs: Usuario = {
    inptuUsername: "",
    inptuEmail: "",
    inptuPassword: "",
};

export default class Form extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const ContainerInputs = this.ownerDocument.createElement("div");
        ContainerInputs.classList.add("ContainerInputs")
        this.shadowRoot?.appendChild(ContainerInputs)

        const inptuUsername = this.ownerDocument.createElement("input");
        inptuUsername.placeholder = "Enter username";
        inptuUsername.classList.add("username");
        inptuUsername.type = "text";
        inptuUsername.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            userInputs.inptuUsername = e.target.value;
        })

        const inptuPassword = this.ownerDocument.createElement("input");
        inptuPassword.placeholder = "Enter password";
        inptuPassword.classList.add("password");
        inptuPassword.type = "text";
        inptuPassword.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            userInputs.inptuPassword = e.target.value;
        })

        const Loginbtn = this.ownerDocument.createElement("button");
        Loginbtn.classList.add("LoginBtn")
        Loginbtn.textContent = "Enter"
        Addevent(Loginbtn, async () => {
        console.log(userInputs);
        const exists = await checkUsuarioInDB(userInputs);
        if (exists) {
            dispatch(navigate(Screens.DASHBOARD));
            dispatch(saveInputs(userInputs));
        } else {
            alert("El usuario no existe en la base de datos");
        }
        });

        ContainerInputs.appendChild(inptuUsername);
        ContainerInputs.appendChild(inptuPassword);
        ContainerInputs.appendChild(Loginbtn);
    }
}

customElements.define('comp-form', Form);
