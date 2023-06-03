import data from "../../components/card/data";
import dataGames from "../../components/mygames/games/data";
import datarecentlyGames from "../../components/mygames/recentlyplayed/data";
import { addObserver, appState } from "../../store/index";
import { AttrCards, AttrGames } from "../../types/interfaces";
import { setAttributes } from "../../utils/attributtes";
import { Content } from "../../types/store";

export default class Dashboard extends HTMLElement {
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
        const appSearchGames = this.ownerDocument.createElement("comp-searchgames");
        const appBanner = this.ownerDocument.createElement("comp-banner");
        const appNav = this.ownerDocument.createElement("comp-nav");
        const appGame = this.ownerDocument.createElement("comp-gameweek");
        const appPost = this.ownerDocument.createElement("comp-post");
        const appProfile = this.ownerDocument.createElement("comp-profile");
        const appLogin = this.ownerDocument.createElement("comp-loginmobile");

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

        const title = this.ownerDocument.createElement("section");
        const text = this.ownerDocument.createElement("h3");
        text.textContent = ("You’d also like...");
        title.setAttribute("id", "title");

        const bottom = this.ownerDocument.createElement("section");
        bottom.setAttribute("id", "bottom");

        main.appendChild(header);
        main.appendChild(nav);
        main.appendChild(title);
        main.appendChild(ContainerRecentlyGames)
        main.appendChild(ContainerSearchGames)
        main.appendChild(content);
        main.appendChild(row);
        main.appendChild(bottom);

        switch (appState.content) {
            case Content.UPDATE_GAMES:
                main.appendChild(content);
                main.appendChild(row);
                main.appendChild(bottom);
                break;

            case Content.UPDATE_GAMES:
                text.style.display = "none";
                text.innerHTML = "";
                appGame.style.display = "none";
                bottom.appendChild(appPost);
                break;

            case Content.UPDATE_GAMES:
                text.style.display = "none";
                row.style.display = "none";
                content.style.display = "none";
                bottom.style.display = "none";
                main.appendChild(appProfile)
                break;

            case Content.UPDATE_GAMES:
                text.style.display = "none";
                row.style.display = "none";
                content.style.display = "none";
                bottom.style.display = "none";
                main.appendChild(appLogin);
                main.appendChild(appProfile);
                break;

            case Content.UPDATE_GAMES:
                text.textContent = "Recently played";
                row.innerHTML = "";
                bottom.style.display = "none";
                content.innerHTML = "";
                content.id = "overflowhide";
                ContainerRecentlyGames.id = "recentlContainer";
                ContainerSearchGames.appendChild(appSearchGames);

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
                break;

            default:
                break;
        }

        bottom.appendChild(appGame);
        nav.appendChild(appNav);
        header.appendChild(appSearch);
        header.appendChild(appBanner);
        title.appendChild(text);
    }
}

customElements.define('comp-dashboard', Dashboard);
