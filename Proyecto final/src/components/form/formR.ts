import { addObserver, appState } from "../../store";
import { Screens } from "../../types/store";
import { loadCss } from "../../utils/styles";
import style from "./style.css"
import { dispatch } from "../../store";
import { navigate, saveInputs } from "../../store/actions";
import { Addevent } from "../../utils/addevents";
import { Usuario } from "../../types/usuario";
import { checkUsuarioInDB, saveUsuarioInDB } from "../../utils/firebase";
import { validateEmail } from "../../store/actions";

const userInputs: Usuario = {
    inptuUsername: "",
    inptuEmail: "",
    inptuPassword: "",
};

export default class FormR extends HTMLElement {
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

        const inptuEmail = this.ownerDocument.createElement("input");
        inptuEmail.placeholder = "Enter email";
        inptuEmail.classList.add("username");
        inptuEmail.type = "text";
        
        inptuEmail.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            userInputs.inptuEmail = e.target.value;
        })

        const inptuPassword = this.ownerDocument.createElement("input");
        inptuPassword.placeholder = "Enter password";
        inptuPassword.classList.add("password");
        inptuPassword.type = "password";
        inptuPassword.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            userInputs.inptuPassword = e.target.value;
        })

        const Loginbtn = this.ownerDocument.createElement("button");
        Loginbtn.classList.add("LoginBtn")
        Loginbtn.textContent = "Enter"
        Loginbtn.addEventListener("click", async () => {
            if (!validateEmail(userInputs.inptuEmail)) {
              alert("Por favor, ingresa un correo electrónico válido.");
              return;
            }
          
            console.log(userInputs);
            await saveUsuarioInDB(userInputs);
            dispatch(navigate(Screens.DASHBOARD));
            dispatch(saveInputs(userInputs));
          });

        ContainerInputs.appendChild(inptuUsername);
        ContainerInputs.appendChild(inptuEmail);
        ContainerInputs.appendChild(inptuPassword);
        ContainerInputs.appendChild(Loginbtn);

        switch (appState.screen) {
            case Screens.REGISTER:
                inptuUsername.style.width = "200%";
                inptuEmail.style.width = "200%";
                inptuPassword.style.width = "200%";
                break;

            default:
                break;
        }
    }
}

customElements.define('comp-formr', FormR);
