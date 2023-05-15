import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class SearchGanes extends HTMLElement {
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

        const main = this.ownerDocument.createElement("div");
        main.classList.add("row");

        const header = this.ownerDocument.createElement("div");
        header.classList.add("header");
        
        const barsearch = this.ownerDocument.createElement("input");
        barsearch.classList.add("bar-search");
        barsearch.setAttribute("placeholder", "Search");

        const ContainerText = this.ownerDocument.createElement("div");
        ContainerText.textContent = "My games"
        
        const ContainerInput = this.ownerDocument.createElement("div");
        ContainerInput.appendChild(barsearch)
        ContainerInput.classList.add("ContainerInput")
        
        
        main.appendChild(header);
        header.appendChild(ContainerText);
        header.appendChild(ContainerInput);
        
        this.shadowRoot?.appendChild(main);
    }
}

customElements.define('comp-searchgames', SearchGanes);
