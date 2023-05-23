import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Register extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
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

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const container = this.ownerDocument.createElement("main");
        container.classList.add("Register-both");
        this.shadowRoot?.appendChild(container)

        const left = this.ownerDocument.createElement("section");
        left.id = "space"
        
        const right = this.ownerDocument.createElement("section");
        right.id = "register_form"
        
        const ComponentForm = this.ownerDocument.createElement("comp-form");
        
        container.appendChild(left)
        container.appendChild(right)

        right.appendChild(ComponentForm)
    }
}

customElements.define('comp-register', Register);
