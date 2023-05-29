import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Notification extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)
        
        const mainContentNotification = this.ownerDocument.createElement("section");
        mainContentNotification.classList.add("mainContentNotification");
        this.shadowRoot?.appendChild(mainContentNotification);

        const contentNotification = this.ownerDocument.createElement("div");
        contentNotification.classList.add("contentNotification");
        
        const contentUserImage = this.ownerDocument.createElement("div");
        contentUserImage.classList.add("contentUserImage");
        const userImage = this.ownerDocument.createElement("img");
        userImage.src = "../dist/image/iconProfile.jpeg";
        
        const contentUserinfo = this.ownerDocument.createElement("div");
        contentUserinfo.classList.add("contentUserinfo");
        const username = this.ownerDocument.createElement("h1");
        username.textContent = "Username published";

        const lastconnection = this.ownerDocument.createElement("p");
        lastconnection.textContent = "Post of someone in the community you follow; et dolore magna aliqua. Ut en...";

        mainContentNotification.appendChild(contentNotification)
        contentUserImage.appendChild(userImage)
        contentNotification.appendChild(contentUserImage)
        contentNotification.appendChild(contentUserinfo)
        contentUserinfo.appendChild(username)
        contentUserinfo.appendChild(lastconnection)
    } 
}

customElements.define('comp-notification', Notification);
