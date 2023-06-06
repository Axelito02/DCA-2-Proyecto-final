import { AttrGames } from "../../types/interfaces";
import data from "../../components/settings/linked/data";
import datalink from "../../components/settings/linkto/data";
import { setAttributes } from "../../utils/attributtes";
import { loadCss } from "../../utils/styles";
import style from "./style.css";

export default class Settings extends HTMLElement {
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
        this.shadowRoot?.appendChild(Container);

        const appStatus = this.ownerDocument.createElement("comp-status");
        const appLogout = this.ownerDocument.createElement("comp-btnlogout");
        const appPassword = this.ownerDocument.createElement("comp-password");
        const appVerification = this.ownerDocument.createElement("comp-verification");
        const appPrivacity = this.ownerDocument.createElement("comp-privacity");

        const ContainerStatus = this.ownerDocument.createElement("div");
        ContainerStatus.classList.add("ContainerStatus");

        const ContainerLinkedTo = this.ownerDocument.createElement("div");
        ContainerLinkedTo.classList.add("ContainerLinkedTo");

        const ContainerLinkto = this.ownerDocument.createElement("div");
        ContainerLinkto.classList.add("ContainerLinkTo");

        const ContainerBtnLogout = this.ownerDocument.createElement("div");
        ContainerBtnLogout.classList.add("ContainerBtnLogout");

        const containerTitle = this.ownerDocument.createElement("div");
        containerTitle.classList.add("containerTitle");
        containerTitle.classList.add("Title1");

        const title = this.ownerDocument.createElement("p");
        title.textContent = "Linked to";

        const containerTitle2 = this.ownerDocument.createElement("div");
        containerTitle2.classList.add("containerTitle");
        containerTitle2.classList.add("Title2");

        const title2 = this.ownerDocument.createElement("p");
        title2.textContent = "Link to";

        const containerTitle3 = this.ownerDocument.createElement("div");
        containerTitle3.classList.add("containerTitle");
        containerTitle3.classList.add("Title3");

        const title3 = this.ownerDocument.createElement("p");
        title3.textContent = "Security";

        const containerTitle4 = this.ownerDocument.createElement("div");
        containerTitle4.classList.add("containerTitle");
        containerTitle4.classList.add("Title4");

        const title4 = this.ownerDocument.createElement("p");
        title4.textContent = "Privacity";

        const ContainerPasword = this.ownerDocument.createElement("div");
        ContainerPasword.classList.add("ContainerPasword");

        const ContainerChechbox = this.ownerDocument.createElement("div");
        ContainerChechbox.classList.add("ContainerChechbox");

        const ContainerPrivacity = this.ownerDocument.createElement("div");
        ContainerPrivacity.classList.add("ContainerPrivacity");

        data.forEach(({ thumbnail }) => {
            const appLinkedTo = this.ownerDocument.createElement("comp-linked");
            const gamesProps: AttrGames = {
                thumbnail: `${thumbnail}`
            }
            setAttributes<AttrGames>(gamesProps, appLinkedTo);
            ContainerLinkedTo.appendChild(appLinkedTo)
        })

        datalink.forEach(({ thumbnail }) => {
            const appLinkto = this.ownerDocument.createElement("comp-link");
            const gamesProps: AttrGames = {
                thumbnail: `${thumbnail}`
            }
            setAttributes<AttrGames>(gamesProps, appLinkto);
            ContainerLinkto.appendChild(appLinkto)
        })

        Container.appendChild(ContainerStatus)
        Container.appendChild(containerTitle)
        Container.appendChild(ContainerLinkedTo)
        Container.appendChild(containerTitle2)
        Container.appendChild(ContainerLinkto)
        Container.appendChild(containerTitle3)
        Container.appendChild(ContainerPasword)
        Container.appendChild(ContainerChechbox)
        Container.appendChild(containerTitle4)
        Container.appendChild(ContainerPrivacity)
        Container.appendChild(ContainerBtnLogout)

        containerTitle4.appendChild(title4)
        ContainerPrivacity.appendChild(appPrivacity)
        ContainerPasword.appendChild(appPassword)
        ContainerChechbox.appendChild(appVerification)
        containerTitle.appendChild(title)
        containerTitle2.appendChild(title2)
        containerTitle3.appendChild(title3)
        ContainerStatus.appendChild(appStatus)
        ContainerBtnLogout.appendChild(appLogout)
    }
}

customElements.define('comp-settings', Settings);
