import style from "./style.css";
import { loadCss } from "../../../utils/styles";

export default class ProfileAccount extends HTMLElement {
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

        const MainContainer = this.ownerDocument.createElement("main");
        MainContainer.setAttribute("id", "Main");

        const Top = this.ownerDocument.createElement("section");
        Top.setAttribute("id", "Top");

        const Content = this.ownerDocument.createElement("section");
        Content.setAttribute("id", "Content");

        const AppUserInfo = this.ownerDocument.createElement("user-info");
        const AppContent = this.ownerDocument.createElement("content-account");
        const AppRecentlyGames = this.ownerDocument.createElement("recently-games");

        Top.appendChild(AppUserInfo);;
        Top.appendChild(AppRecentlyGames);
        Content.appendChild(AppContent);
        MainContainer.appendChild(Top);
        MainContainer.appendChild(Content);

        this.shadowRoot?.appendChild(MainContainer);
    }
}

customElements.define('comp-profileaccount', ProfileAccount);
