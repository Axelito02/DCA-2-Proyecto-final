import { loadCss } from "../../utils/styles";
import style from "./styles.css";
import data from "../../components/settings/linked/data";
import datalink from "../../components/settings/linkto/data";
import { AttrGames } from "../../types/interfaces";
import { setAttributes } from "../../utils/attributtes";

export default class Account extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this, style)
        const Container = this.ownerDocument.createElement("section");
        this.shadowRoot?.appendChild(Container);

        const appInputs = this.ownerDocument.createElement("comp-inputs");

        const ContainerInputs = this.ownerDocument.createElement("div");
        ContainerInputs.classList.add("ContainerStatus");

        const ContainerLinkedTo = this.ownerDocument.createElement("div");
        ContainerLinkedTo.classList.add("ContainerLinkedTo");

        const ContainerLinkto = this.ownerDocument.createElement("div");
        ContainerLinkto.classList.add("ContainerLinkTo");

        const containerTitle = this.ownerDocument.createElement("div");
        containerTitle.classList.add("containerTitle");

        const containerTitle2 = this.ownerDocument.createElement("div");
        containerTitle2.classList.add("containerTitle");

        const containerlos4 = this.ownerDocument.createElement("div");
        containerlos4.classList.add("containerlos4");

        const containertipo1 = this.ownerDocument.createElement("div");
        containertipo1.classList.add("containertipo1");

        const containertipo2 = this.ownerDocument.createElement("div");
        containertipo2.classList.add("containertipo2");

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

        Container.appendChild(ContainerInputs)
        Container.appendChild(containerlos4)
        containerlos4.appendChild(containertipo1)
        containerlos4.appendChild(containertipo2)
        containertipo1.appendChild(containerTitle)
        containertipo1.appendChild(ContainerLinkedTo)
        containertipo2.appendChild(containerTitle2)
        containertipo2.appendChild(ContainerLinkto)

        containerTitle.appendChild(title)
        containerTitle2.appendChild(title2)
        ContainerInputs.appendChild(appInputs)
    }
}


customElements.define('comp-account', Account);
