import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class Login extends HTMLElement {
    private imageSrc = '../dist/image/Terraria.jpg';
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)
        
        const container = this.ownerDocument.createElement("main");
        container.classList.add("Login-both");
        this.shadowRoot?.appendChild(container)

        const left = this.ownerDocument.createElement("section");
        left.id = "space"
        
        const right = this.ownerDocument.createElement("section");
        right.id = "login_form"
        
        const ComponentForm = this.ownerDocument.createElement("comp-form");
        
        container.appendChild(left)
        container.appendChild(right)

        right.appendChild(ComponentForm)
        
        this.saveImageToLocalStorage();
    }
    private saveImageToLocalStorage() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.imageSrc, true);
        xhr.responseType = 'blob';
    
        xhr.onload = () => {
          if (xhr.status === 200) {
            const blob = xhr.response;
            const objectURL = URL.createObjectURL(blob);
            localStorage.setItem('imagen', objectURL);
          }
        };
    
        xhr.send();
}
}

customElements.define('comp-login', Login);
