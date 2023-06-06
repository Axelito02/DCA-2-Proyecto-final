import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { Addevent } from "../../utils/addevents";
import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
        //this.setupFormSubmitHandler();
    }

    //Prueba guardar info del usuario inicio

    //   setupFormSubmitHandler() {
    //     const form = this.shadowRoot?.querySelector("comp-form");
    //     form?.addEventListener("formSubmit", (event: Event) => {
    //       const customEvent = event as CustomEvent;
    //       const userData = customEvent.detail;
    //       this.saveUserDataToLocalStorage(userData);
    //     });
    //   }

    //   saveUserDataToLocalStorage(userData: { username: string; password: string }) {
    //     localStorage.setItem("userData", JSON.stringify(userData));
    //   }

    //Prueba guardar info del usuario final

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const container = this.ownerDocument.createElement("main");
        container.classList.add("Login-both");
        this.shadowRoot?.appendChild(container);

        const left = this.ownerDocument.createElement("section");
        left.id = "space";

        const right = this.ownerDocument.createElement("section");
        right.id = "login_form";

        const ContainerFormLogin = this.ownerDocument.createElement("div");
        ContainerFormLogin.classList.add("ContainerFormLogin");

        const ContainerTitle = this.ownerDocument.createElement("div");
        ContainerTitle.classList.add("title");

        const Title = this.ownerDocument.createElement("h1");
        Title.textContent = "Register";
        Title.classList.add("TitleLogin");

        const form = this.ownerDocument.createElement("div");
        form.classList.add("forms");

        const ContainerInputs = this.ownerDocument.createElement("div");
        ContainerInputs.classList.add("ContainerInputs");

        const appForm = this.ownerDocument.createElement("comp-formr");

        const Text = this.ownerDocument.createElement("p");
        Text.classList.add("RecoveryPassword")
        Text.textContent = "Have you forgotten your password??"

        const textContent2 = this.ownerDocument.createElement("div");
        textContent2.classList.add("textContent");

        const Text2 = this.ownerDocument.createElement("p");
        Text2.textContent = "Or sign in with";

        const ContainerSocial = this.ownerDocument.createElement("section");
        ContainerSocial.classList.add("ContainerSocial");

        const appSocial = this.ownerDocument.createElement("comp-social")
        ContainerSocial.appendChild(appSocial)

        const textContent3 = this.ownerDocument.createElement("div");
        textContent3.classList.add("textContent");

        const Text3 = this.ownerDocument.createElement("p");
        Text3.textContent = "Do you have an account?";

        const HipervinculoRegister = this.ownerDocument.createElement("a")
        HipervinculoRegister.textContent = "Login"
        Addevent(HipervinculoRegister, () => {
            dispatch(navigate(Screens.LOGIN))
        })

        container.appendChild(left);
        container.appendChild(right);

        right.appendChild(ContainerFormLogin);

        ContainerFormLogin.appendChild(ContainerTitle);
        ContainerTitle.appendChild(Title);
        ContainerFormLogin.appendChild(form);
        ContainerFormLogin.appendChild(textContent2);
        ContainerFormLogin.appendChild(ContainerSocial);
        ContainerFormLogin.appendChild(textContent3);
        form.appendChild(ContainerInputs);
        ContainerInputs.appendChild(appForm);
        ContainerInputs.appendChild(Text);
        textContent2.appendChild(Text2);
        ContainerSocial.appendChild(appSocial)
        textContent3.appendChild(Text3)
        textContent3.appendChild(HipervinculoRegister)
    }
}

customElements.define('comp-register', Register);
