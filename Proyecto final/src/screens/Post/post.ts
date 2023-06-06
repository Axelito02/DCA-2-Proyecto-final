import data from "../../components/card/data";
import { addObserver } from "../../store/index";
import { AttrCards } from "../../types/interfaces";
import { setAttributes } from "../../utils/attributtes";

export default class Post extends HTMLElement {
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

        const content = this.ownerDocument.createElement("main");
        content.setAttribute("id", "content");

        const row = this.ownerDocument.createElement("main");
        row.setAttribute("id", "content");

        const ContainerRecentlyGames = this.ownerDocument.createElement("main");
        ContainerRecentlyGames.setAttribute("id", "content");

        const ContainerSearchGames = this.ownerDocument.createElement("div");
        ContainerSearchGames.setAttribute("id", "SearchContent");

        const appSearch = this.ownerDocument.createElement("comp-search");
        const appBanner = this.ownerDocument.createElement("comp-banner");
        const appNav = this.ownerDocument.createElement("comp-nav");
        const appPost = this.ownerDocument.createElement("comp-post");

        data.forEach(({ name, thumbnail, publisher, releaseyear }) => {
            const appCard = this.ownerDocument.createElement("comp-card");
            const cardProps: AttrCards = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                publisher: `${publisher}`,
                releaseyear: `${releaseyear}`,
            }
            setAttributes<AttrCards>(cardProps, appCard);
            content.appendChild(appCard)
        })

        data.forEach(({ name, thumbnail, publisher, releaseyear }) => {
            const appCard = this.ownerDocument.createElement("comp-card");
            const cardProps: AttrCards = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                publisher: `${publisher}`,
                releaseyear: `${releaseyear}`,
            }
            setAttributes<AttrCards>(cardProps, appCard);
            row.appendChild(appCard)
        })

        const header = this.ownerDocument.createElement("header");
        header.setAttribute("id", "header");

        const nav = this.ownerDocument.createElement("nav");
        nav.setAttribute("id", "bar_nav")

        const bottom = this.ownerDocument.createElement("section");
        bottom.setAttribute("id", "bottom");

        main.appendChild(header);
        main.appendChild(nav);
        main.appendChild(ContainerRecentlyGames)
        main.appendChild(ContainerSearchGames)
        main.appendChild(content);
        main.appendChild(row);
        main.appendChild(bottom);

        nav.appendChild(appNav);
        header.appendChild(appSearch);
        header.appendChild(appBanner);
        bottom.appendChild(appPost);
    }
}

customElements.define('comp-posting', Post);
