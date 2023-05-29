import { AttrComments } from "../../../utils/interfaces";
import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class User extends HTMLElement {
    username: string = "";
    thumbnail: string = "";
    hastag: string = "";
    comment: string = "";

    static get observedAttributes(){
        return["name", "thumbnail", "publisher", "releaseyear"]
    }

    attributeChangedCallback(propName: keyof AttrComments, _:unknown, newValue:string){
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
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this, style)

        const user = this.ownerDocument.createElement("div");
        user.classList.add("user")
        this.shadowRoot?.appendChild(user)

        const username = this.ownerDocument.createElement("h5");
        username.classList.add("username")
        username.textContent = "Axelito"

        const icon = this.ownerDocument.createElement("img");
        icon.setAttribute("src","../dist/image/iconProfile.jpeg")
        // icon.setAttribute("src",`${this.thumbnail}`)
        icon.textContent=("Profile");

        user.appendChild(icon)
        user.appendChild(username)
    }
}

customElements.define('comp-user', User);
