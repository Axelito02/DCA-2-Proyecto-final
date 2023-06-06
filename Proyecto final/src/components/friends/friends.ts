import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Friend extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const mainContentFriends = this.ownerDocument.createElement("section");
        mainContentFriends.classList.add("mainContentFriends");
        this.shadowRoot?.appendChild(mainContentFriends);

        const contentFriends = this.ownerDocument.createElement("div");
        contentFriends.classList.add("contentFriends");

        const contentUserImage = this.ownerDocument.createElement("div");
        contentUserImage.classList.add("contentUserImage");
        const userImage = this.ownerDocument.createElement("img");
        userImage.src = "../dist/image/iconProfile.jpeg";

        const contentUserinfo = this.ownerDocument.createElement("div");
        contentUserinfo.classList.add("contentUserinfo");
        const username = this.ownerDocument.createElement("h1");
        username.textContent = "Username";

        const lastconnection = this.ownerDocument.createElement("p");
        lastconnection.textContent = "Last conection: 1 day";

        mainContentFriends.appendChild(contentFriends)
        contentUserImage.appendChild(userImage)
        contentFriends.appendChild(contentUserImage)
        contentFriends.appendChild(contentUserinfo)
        contentUserinfo.appendChild(username)
        contentUserinfo.appendChild(lastconnection)

    }
}

customElements.define('comp-friends', Friend);
