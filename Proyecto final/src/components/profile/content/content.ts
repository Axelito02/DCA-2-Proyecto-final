import style from "./style.css";
import { loadCss } from "../../../utils/styles";
import { Addevent } from "../../../utils/addevents";
import { ChagedAccount, ChagedFavorites, ChagedFriends, ChagedNotification, ChagedSettings } from "../../../store/actions";
import { dispatch } from "../../../store/index";
import data from "../../mygames/games/data";
import { AttrGames } from "../../../Types/Interfaces";
import { setAttributes } from "../../../utils/attributtes";

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
        ContainerNavigation.id = "navContainer";

        const btnAccount = this.ownerDocument.createElement("button");
        btnAccount.classList.add("btnNavigation");
        btnAccount.classList.add("uno");
        btnAccount.textContent = "Account";
        Addevent(btnAccount, () => {
            // dispatch(ChagedAccount())
            console.log("Account");
        })

        const btnFriends = this.ownerDocument.createElement("button");
        btnFriends.classList.add("btnNavigation");
        btnFriends.classList.add("dos");
        btnFriends.textContent = "Friends";
        Addevent(btnFriends, () => {
            // dispatch(ChagedFriends())
            console.log("Friends");
        })

        const btnFavorites = this.ownerDocument.createElement("button");
        btnFavorites.classList.add("btnNavigation");
        btnFavorites.classList.add("tres");
        btnFavorites.textContent = "Favorites";
        Addevent(btnFavorites, () => {
            // dispatch(ChagedFavorites())
            console.log("Favorites");
        })
        
        const btnNotification = this.ownerDocument.createElement("button");
        btnNotification.classList.add("btnNavigation");
        btnNotification.classList.add("cuatro");
        btnNotification.textContent = "Notifications";
        Addevent(btnNotification, () => {
            // dispatch(ChagedNotification())
            console.log("Notifications");
        })
        
        const btnSettings = this.ownerDocument.createElement("button");
        btnSettings.classList.add("btnNavigation");
        btnSettings.classList.add("cinco");
        btnSettings.textContent = "Settings";
        Addevent(btnSettings, () => {
            // dispatch(ChagedSettings())
            console.log("Settings");
        })

        const ContainerContent = this.ownerDocument.createElement("section");
        ContainerContent.id = "contentContainer";

        const ContainerContentFavorites = this.ownerDocument.createElement("section");
        ContainerContentFavorites.id = "contentFavorites";

        const title = this.ownerDocument.createElement("p");
        title.textContent = "Communities"; 

        data.forEach(({thumbnail}) => {
            const appFavorites = this.ownerDocument.createElement("comp-favorites");
            const gamesProps: AttrGames = {
                thumbnail: `${thumbnail}`
            }
            setAttributes<AttrGames> (gamesProps, appFavorites);
            ContainerContentFavorites.appendChild(appFavorites)
        })
        
        const appFriends = this.ownerDocument.createElement("comp-friends");
        const appNotification = this.ownerDocument.createElement("comp-notification");
        const appSettings = this.ownerDocument.createElement("comp-settings");
        const appAccount = this.ownerDocument.createElement("comp-account");
        

        Container.appendChild(ContainerNavigation);
        Container.appendChild(ContainerContent);
        
        
        ContainerNavigation.appendChild(btnAccount);
        ContainerNavigation.appendChild(btnFriends);
        ContainerNavigation.appendChild(btnFavorites);
        ContainerNavigation.appendChild(btnNotification);
        ContainerNavigation.appendChild(btnSettings);


        ContainerContent.appendChild(title)
        ContainerContent.appendChild(ContainerContentFavorites);
        //ContainerContent.appendChild(appAccount);
        //ContainerContent.appendChild(appFavorites);
        // ContainerContent.appendChild(appFriends);
        // ContainerContent.appendChild(appNotification);
        //ContainerContent.appendChild(appSettings);

    }
}

customElements.define('content-profile', ContenProfile);
