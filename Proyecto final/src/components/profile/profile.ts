import { AttrProfile, AttrRegister } from "../../Types/types"

export default class Profile extends HTMLElement {
    username: string = "";
    thumbnail: string = "";
    name: string = "";
    email: string = "";

    static get observedAttributes(){
        return["text_btn", "text"]
    }

    attributeChangedCallback(propName: keyof AttrProfile, _:unknown, newValue:string){
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
        const text = this.ownerDocument.createElement("p");
        this.shadowRoot?.appendChild(text);
        text.textContent = this.name;
        
        const button = this.ownerDocument.createElement("button");
        this.shadowRoot?.appendChild(button);
        button.textContent = this.thumbnail;
    }
}

customElements.define('comp-profile', Profile);
