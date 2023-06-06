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

        const containerTitle2 = this.ownerDocument.createElement("div");
        containerTitle2.classList.add("containerTitle");

        const title = this.ownerDocument.createElement("p");
        title.textContent = "Linked to";

        const title2 = this.ownerDocument.createElement("p");
        title2.textContent = "Link to";

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
        Container.appendChild(ContainerBtnLogout)

        containerTitle.appendChild(title)
        containerTitle2.appendChild(title2)
        ContainerStatus.appendChild(appStatus)
        ContainerBtnLogout.appendChild(appLogout)
    }
}

customElements.define('comp-settings', Settings);
