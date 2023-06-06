import { AttrProfile } from "../../../types/interfaces";
import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class UserInfo extends HTMLElement {
    username = "";
    thumbnail = "";
    name = "";
    email = "";

    static get observedAttributes() {
        return ["username", "thumbnail", "name", "email"]
    }

    attributeChangedCallback(propName: keyof AttrProfile, _: unknown, newValue: string) {
        this[propName] = newValue;
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

        const ContIPicture = this.ownerDocument.createElement("div");
        ContIPicture.classList.add("Imageuser");

        const ContInfo = this.ownerDocument.createElement("div");
        ContInfo.classList.add("infoUser");

        const Picture = this.ownerDocument.createElement("img");
        Picture.classList.add('Profile-pic');
        Picture.src = "https://i.ibb.co/hsr5dLL/Icon-Profile.jpg";

        const Username = this.ownerDocument.createElement("h3");
        Username.textContent = this.username
        Username.textContent = "Username"

        const Name = this.ownerDocument.createElement("h3");
        Name.textContent = this.name
        Name.textContent = "Name"

        const Email = this.ownerDocument.createElement("h3");
        Email.textContent = this.email
        Email.textContent = "Email"

        ContIPicture.appendChild(Picture);
        ContInfo.appendChild(Username);
        ContInfo.appendChild(Name);
        ContInfo.appendChild(Email);

        this.shadowRoot?.appendChild(ContIPicture);
        this.shadowRoot?.appendChild(ContInfo);

    }
}

customElements.define('user-info', UserInfo);
