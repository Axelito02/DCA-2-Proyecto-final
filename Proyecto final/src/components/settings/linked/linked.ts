import { Socials } from "../../../Types/Interfaces";
import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class Linked extends HTMLElement {
    thumbnail: string= ""
    link: string="";

    static get observedAttributes(){
        return["thumbnail", "link"]
    }
    

    attributeChangedCallback(propName: keyof Socials, _:unknown, newValue:string){
        if (propName === 'thumbnail') {
          this.thumbnail = newValue;
        } else if (propName === 'link') {
          this.link = newValue;
        }
        this.render();
      }

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

        const Container = this.ownerDocument.createElement("div");
        Container.classList.add("Container");
        this.shadowRoot?.appendChild(Container);
        
        const containerPlatformLinked = this.ownerDocument.createElement("div");
        containerPlatformLinked.classList.add("containerPlatformLinked");

        //imagen y link puestos

        const PlatformLinked = this.ownerDocument.createElement("img");
        PlatformLinked.src = this.thumbnail;
        const linkElement = document.createElement('a');
        linkElement.href = this.link;

        Container.appendChild(containerPlatformLinked);

        containerPlatformLinked.appendChild(PlatformLinked);
        containerPlatformLinked.appendChild(linkElement);
    }
}

customElements.define('comp-linked', Linked);
