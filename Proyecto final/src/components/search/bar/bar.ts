import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class Bar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this,style)
        
        const col = this.ownerDocument.createElement("div");
        col.classList.add("col");
        
        const btn1= this.ownerDocument.createElement("button");
        btn1.classList.add("btn");
        btn1.textContent = ("Sing in")
        
        const btn2 = this.ownerDocument.createElement("button");
        btn2.classList.add("btn");
        btn2.textContent = ("Sing up")
        
        const barsearch = this.ownerDocument.createElement("input");
        barsearch.classList.add("bar-search");
        barsearch.setAttribute("placeholder", "Search");
        
        col.appendChild(barsearch);
        col.appendChild(btn1);
        col.appendChild(btn2);

        this.shadowRoot?.appendChild(col);
   
    }
}

customElements.define('comp-bar', Bar);
