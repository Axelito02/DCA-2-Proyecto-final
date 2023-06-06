import style from "./style.css";
import { loadCss } from "../../../../utils/styles";
import { Addevent } from "../../../../utils/addevents";
import { dispatch } from "../../../../store/index";
import data from "../../../mygames/games/data";
import { AttrGames } from "../../../../types/interfaces";
import { setAttributes } from "../../../../utils/attributtes";
import { navigate } from "../../../../store/actions";
import { Screens } from "../../../../types/store";

export default class ContenProfileFavorites extends HTMLElement {
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

        const Container = this.ownerDocument.createElement("section");
        Container.id = "mainContainer";
        this.shadowRoot?.appendChild(Container);

        const ContainerNavigation = this.ownerDocument.createElement("section");
        ContainerNavigation.id = "navContainer";

        const btnAccount = this.ownerDocument.createElement("button");
        btnAccount.classList.add("btnNavigation");
        btnAccount.classList.add("uno");
        btnAccount.textContent = "Account";
        Addevent(btnAccount, () => {
            dispatch(navigate(Screens.UPDATE_ACCOUNT))
            console.log("Account");
        })

        const btnFriends = this.ownerDocument.createElement("button");
        btnFriends.classList.add("btnNavigation");
        btnFriends.classList.add("dos");
        btnFriends.textContent = "Friends";
        Addevent(btnFriends, () => {
            dispatch(navigate(Screens.UPDATE_FRIENDS))
            console.log("Friends");
        })

        const btnFavorites = this.ownerDocument.createElement("button");
        btnFavorites.classList.add("btnNavigation");
        btnFavorites.classList.add("tres");
        btnFavorites.textContent = "Favorites";
        Addevent(btnFavorites, () => {
            dispatch(navigate(Screens.UPDATE_FAVORITES))
            console.log("Favorites");
        })

        const btnNotification = this.ownerDocument.createElement("button");
        btnNotification.classList.add("btnNavigation");
        btnNotification.classList.add("cuatro");
        btnNotification.textContent = "Notifications";
        Addevent(btnNotification, () => {
            dispatch(navigate(Screens.UPDATE_NOTIFICATIONS))
            console.log("Notifications");
        })

        const btnSettings = this.ownerDocument.createElement("button");
        btnSettings.classList.add("btnNavigation");
        btnSettings.classList.add("cinco");
        btnSettings.textContent = "Settings";
        Addevent(btnSettings, () => {
            dispatch(navigate(Screens.UPDATE_SETTINGS))
            console.log("Settings");
        })

        const ContainerContent = this.ownerDocument.createElement("section");
        ContainerContent.id = "contentContainer";

        const row = this.ownerDocument.createElement("main");
        row.setAttribute("id", "content");

        const titleCommunities = this.ownerDocument.createElement("p");
        titleCommunities.textContent = "Communities";

        const ContainerContentFavorites = this.ownerDocument.createElement("section");
        ContainerContentFavorites.id = "contentFavorites";

        data.forEach(({ thumbnail }) => {
            const appFavorites = this.ownerDocument.createElement("comp-profilefavorite");
            const gamesProps: AttrGames = {
                thumbnail: `${thumbnail}`
            }
            setAttributes<AttrGames>(gamesProps, appFavorites);
            ContainerContentFavorites.appendChild(appFavorites)
        })

        Container.appendChild(ContainerNavigation);
        Container.appendChild(ContainerContent);

        ContainerNavigation.appendChild(btnAccount);
        ContainerNavigation.appendChild(btnFriends);
        ContainerNavigation.appendChild(btnFavorites);
        ContainerNavigation.appendChild(btnNotification);
        ContainerNavigation.appendChild(btnSettings);

    }
}

customElements.define('content-favorites', ContenProfileFavorites);
