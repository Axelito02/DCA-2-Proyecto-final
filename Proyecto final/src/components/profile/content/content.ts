import style from "./style.css";
import { loadCss } from "../../../utils/styles";

export default class ContenProfile extends HTMLElement {
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
        
        const Container = this.ownerDocument.createElement("section");
        Container.id = "mainContainer";
        this.shadowRoot?.appendChild(Container);

        const ContainerNavigation = this.ownerDocument.createElement("section");
        ContainerNavigation.id = "navContainer"
        
        const btnFriends = this.ownerDocument.createElement("button");
        btnFriends.classList.add("btnNavigation");
        btnFriends.classList.add("uno");
        btnFriends.textContent = "Friends";
        
        const btnNotification = this.ownerDocument.createElement("button");
        btnNotification.classList.add("btnNavigation");
        btnNotification.classList.add("dos");
        btnNotification.textContent = "Notifications";
        
        const btnSettings = this.ownerDocument.createElement("button");
        btnSettings.classList.add("btnNavigation");
        btnSettings.classList.add("tres");
        btnSettings.textContent = "Settings";
        
        const appFriends = this.ownerDocument.createElement("comp-friends");
        const appNotification = this.ownerDocument.createElement("comp-notification");
        const appSettings = this.ownerDocument.createElement("comp-settings");
        
        Container.appendChild(ContainerNavigation);
        ContainerNavigation.appendChild(btnFriends);
        ContainerNavigation.appendChild(btnNotification);
        ContainerNavigation.appendChild(btnSettings);
    }
}

customElements.define('content-profile', ContenProfile);
