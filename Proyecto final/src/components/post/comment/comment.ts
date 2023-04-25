import { AttrComment } from "../../../Types/types"
import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class Comment extends HTMLElement {
    comment: string = "";

    static get observedAttributes(){
        return["username", "thumbnail","hastag","comment"]
    }

    attributeChangedCallback(propName: keyof AttrComment, _:unknown, newValue:string){
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

        const contInput = this.ownerDocument.createElement("div");
        contInput.classList.add("contInput");
        this.shadowRoot?.appendChild(contInput);
        
        const input = this.ownerDocument.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","Say something...");
        
        const button = this.ownerDocument.createElement("button");
        button.classList.add("btnSend");
        button.textContent = "Send"

        contInput.appendChild(input);
        contInput.appendChild(button);

    }
}

customElements.define('comp-comment', Comment);
