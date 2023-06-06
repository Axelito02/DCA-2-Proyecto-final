import { addObserver } from "../../store/index";
import style from "./style.css"
import { loadCss } from "../../utils/styles";

export default class LoginMobile extends HTMLElement {
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
        loadCss(this, style);
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
        const appLoginMobile = this.ownerDocument.createElement("comp-loginmobile");

        const header = this.ownerDocument.createElement("header");
        header.setAttribute("id", "header");

        const nav = this.ownerDocument.createElement("nav");
        nav.setAttribute("id", "bar_nav");

        main.appendChild(header);
        main.appendChild(nav);
        main.appendChild(appLoginMobile)

        header.appendChild(appSearch);
        header.appendChild(appBanner);
        nav.appendChild(appNav);
    }
}

customElements.define('compscreen-loginmobile', LoginMobile);
