import { addObserver } from "../../store/index";

export default class ProfilesAccount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        const css = this.ownerDocument.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "./style/main.css");
        this.shadowRoot?.appendChild(css);

        const main = this.ownerDocument.createElement("section");
        main.setAttribute("id", "main_container");
        this.shadowRoot?.appendChild(main);

        const appSearch = this.ownerDocument.createElement("comp-search");
        const appBanner = this.ownerDocument.createElement("comp-banner");
        const appNav = this.ownerDocument.createElement("comp-nav");
        const appProfile = this.ownerDocument.createElement("comp-profileaccount");

        const header = this.ownerDocument.createElement("header");
        header.setAttribute("id", "header");

        const nav = this.ownerDocument.createElement("nav");
        nav.setAttribute("id", "bar_nav");

        main.appendChild(header);
        main.appendChild(nav);
        main.appendChild(appProfile)

        header.appendChild(appSearch);
        header.appendChild(appBanner);
        nav.appendChild(appNav);
    }
}

customElements.define('compscreen-profileaccount', ProfilesAccount);
