import { AttrGames } from "../../types/interfaces";
import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class Favorites extends HTMLElement {
    thumbnail: string = "";

    static get observedAttributes() {
        return ["thumbnail"]
    }

    attributeChangedCallback(propName: keyof AttrGames, _: unknown, newValue: string) {
        this[propName] = newValue;
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const CardGames = this.ownerDocument.createElement("section");
        CardGames.classList.add("containerGames");

        const thumbnail = this.ownerDocument.createElement("img");
        thumbnail.src = this.thumbnail;

        this.shadowRoot?.appendChild(CardGames);

        CardGames.appendChild(thumbnail)

    }
}

customElements.define('comp-favorites', Favorites);