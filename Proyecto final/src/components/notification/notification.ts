export interface AttrDescription {
    text_btn: string;
    text: string;
}

export default class Notification extends HTMLElement {
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
        const text = this.ownerDocument.createElement("p");
        this.shadowRoot?.appendChild(text);
        text.textContent = this.text;
        
        const button = this.ownerDocument.createElement("button");
        this.shadowRoot?.appendChild(button);
        button.textContent = this.text_btn;
    }
}

customElements.define('comp-notification', Notification);
