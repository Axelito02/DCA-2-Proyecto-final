import { addObserver, appState } from "../../../store";
import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class Comments extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const cardPost = this.ownerDocument.createElement("section");
        cardPost.classList.add("card-posts");
        this.shadowRoot?.appendChild(cardPost);


        const title = this.ownerDocument.createElement("div");
        title.classList.add("hastag");
        title.textContent = "#hashtag genre of the game";
        cardPost.appendChild(title)

        appState.Post.forEach((comt) => {
            const post = this.ownerDocument.createElement("div")
            post.classList.add("content")
            cardPost.appendChild(post)

            const textpost = this.ownerDocument.createElement("p")
            post.appendChild(textpost)
            textpost.textContent = comt.comment
        })
    }
}

customElements.define('comp-comments', Comments);
