import style from "./style.css"
import { loadCss } from "../../utils/styles";

export interface AttrDescription {
    text_btn: string;
    text: string;
}

export default class Nav extends HTMLElement {
    text_btn: string = "";
    text: string = "";

    static get observedAttributes(){
        return["text_btn", "text"]
    }

    attributeChangedCallback(propName: keyof AttrDescription, _:unknown, newValue:string){
        this[propName] = newValue;
        console.log(propName, newValue);
            
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this, style)

        const bootstrap = this.ownerDocument.createElement("link");
        bootstrap.setAttribute("rel", "stylesheet");
        bootstrap.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
        this.shadowRoot?.appendChild(bootstrap);
        
        const main = this.ownerDocument.createElement("nav");
        main.classList.add("cont-nav");
        this.shadowRoot?.appendChild(main);
        
        const col1 = this.ownerDocument.createElement("div");
        col1.classList.add("col");
        col1.classList.add("uno");
        col1.setAttribute("tabindex", "0");
        col1.textContent = ("News")
        
        const col2 = this.ownerDocument.createElement("div");
        col2.classList.add("col");
        col2.classList.add("dos");
        col2.setAttribute("tabindex", "0");
        col2.textContent = ("Comunities")
        
        const col3 = this.ownerDocument.createElement("div");
        col3.classList.add("col");
        col3.classList.add("tres");
        col3.setAttribute("tabindex", "0");
        col3.textContent = ("Login")
        
        main.appendChild(col1);
        main.appendChild(col2);
        main.appendChild(col3);

    }
}

customElements.define('comp-nav', Nav);
