import style from "./style.css";
import { AttrCards } from "../../utils/interfaces";
import { loadCss } from "../../utils/styles";

export default class Card extends HTMLElement {
    name: string = "";
    thumbnail: string= "";
    publisher: string= "";
    releaseyear: string= "";

    static get observedAttributes(){
        return["name", "thumbnail", "publisher", "releaseyear"];
    }

    attributeChangedCallback(propName: keyof AttrCards, _:unknown, newValue:string){
        this[propName] = newValue;
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
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style);
        
        const mainContainer = this.ownerDocument.createElement("div");
        mainContainer.setAttribute("id", "carousel-container");
        this.shadowRoot?.appendChild(mainContainer);
        
        const app = this.ownerDocument.createElement("div");
        app.setAttribute("id", "app");

        const carousel = this.ownerDocument.createElement("div");
        carousel.setAttribute("id", "carousel");

        const figure = this.ownerDocument.createElement("figure");
        figure.classList.add("juego-card");

        const img = this.ownerDocument.createElement("img");
        img.setAttribute("src",`${this.thumbnail}`);
        
        const text1 = this.ownerDocument.createElement("h2");
        text1.textContent = `${this.name}`
        
        const text2 = this.ownerDocument.createElement("h2");
        text2.textContent = `${this.releaseyear}`
        
        const text3 = this.ownerDocument.createElement("h3");
        text3.textContent = `${this.publisher}`

        mainContainer.appendChild(app)
        app.appendChild(carousel)
        carousel.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(text1)
        figure.appendChild(text2)
        figure.appendChild(text3)
    }
}

customElements.define('comp-card', Card);
