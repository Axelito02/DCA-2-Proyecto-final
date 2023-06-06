import dataGames from "../../components/card/data";
import datarecentlyGames from "../../components/mygames/recentlyplayed/data";
import { addObserver } from "../../store/index";
import { AttrGames } from "../../types/interfaces";
import { setAttributes } from "../../utils/attributtes";

export default class Mygames extends HTMLElement {
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
        content.setAttribute("id", "overflowhide");

        const row = this.ownerDocument.createElement("main");
        row.setAttribute("id", "content");

        const ContainerRecentlyGames = this.ownerDocument.createElement("main");
        ContainerRecentlyGames.setAttribute("id", "content");

        const ContainerSearchGames = this.ownerDocument.createElement("div");
        ContainerSearchGames.setAttribute("id", "SearchContent");

        const appSearch = this.ownerDocument.createElement("comp-search");
        const appSearchGames = this.ownerDocument.createElement("comp-searchgames");
        const appBanner = this.ownerDocument.createElement("comp-banner");
        const appNav = this.ownerDocument.createElement("comp-nav");
        const appGame = this.ownerDocument.createElement("comp-gameweek");

        const header = this.ownerDocument.createElement("header");
        header.setAttribute("id", "header");

        const nav = this.ownerDocument.createElement("nav");
        nav.setAttribute("id", "bar_nav")

        const title = this.ownerDocument.createElement("section");
        const text = this.ownerDocument.createElement("h3");
        text.textContent = ("Recently Played");
        title.setAttribute("id", "title");

        const bottom = this.ownerDocument.createElement("section");
        bottom.setAttribute("id", "bottom");

        main.appendChild(header);
        main.appendChild(nav);
        main.appendChild(title);
        main.appendChild(ContainerRecentlyGames)
        main.appendChild(ContainerSearchGames)
        main.appendChild(content);

        datarecentlyGames.forEach(({ thumbnail }) => {
            const appRecentlyPlayed = this.ownerDocument.createElement("comp-recentlyplayed");
            const gamesProps: AttrGames = {
                thumbnail: `${thumbnail}`
            }
            setAttributes<AttrGames>(gamesProps, appRecentlyPlayed);
            ContainerRecentlyGames.appendChild(appRecentlyPlayed);
        })

        dataGames.forEach(({ thumbnail }) => {
            const appMygames = this.ownerDocument.createElement("comp-games");
            const gamesProps: AttrGames = {
                thumbnail: `${thumbnail}`
            }
            setAttributes<AttrGames>(gamesProps, appMygames);
            content.appendChild(appMygames);
        })

        bottom.appendChild(appGame);
        nav.appendChild(appNav);
        header.appendChild(appSearch);
        header.appendChild(appBanner);
        title.appendChild(text);
        ContainerSearchGames.appendChild(appSearchGames);
    }
}

customElements.define('comp-mygame', Mygames);
