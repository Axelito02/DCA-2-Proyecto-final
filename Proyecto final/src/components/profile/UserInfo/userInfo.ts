import { AttrProfile } from "../../../Types/Interfaces";
<<<<<<< HEAD
import { loadCss } from "../../../utils/styles";
import style from "./style.css"
=======
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e

export default class UserInfo extends HTMLElement {
    username = "";
    thumbnail = "";
    name = "";
    email = "";

    static get observedAttributes(){
        return["username", "thumbnail", "name", "email"]
    }

    attributeChangedCallback(propName: keyof AttrProfile, _:unknown, newValue:string){
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
<<<<<<< HEAD
        loadCss (this,style)
=======

>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
        const ContIPicture = this.ownerDocument.createElement("div")
        const ContInfo = this.ownerDocument.createElement("div")

        const Picture = this.ownerDocument.createElement("img")
<<<<<<< HEAD
        Picture.classList.add('Profile-pic');
=======
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
        Picture.src = "../dist/image/Steam-logo.png";

        const Username = this.ownerDocument.createElement("h3")   
        Username.textContent = this.username

        const Name = this.ownerDocument.createElement("h3")   
        Name.textContent = this.name

        const Email = this.ownerDocument.createElement("h3")   
        Email.textContent = this.email

        ContIPicture.appendChild(Picture)
        ContInfo.appendChild(Username)
        ContInfo.appendChild(Name)
        ContInfo.appendChild(Email)

        this.shadowRoot?.appendChild(ContIPicture)
        this.shadowRoot?.appendChild(ContInfo)

    }
}

customElements.define('user-info', UserInfo);
