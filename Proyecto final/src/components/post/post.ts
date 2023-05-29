import style from "./style.css"
import { loadCss } from "../../utils/styles";

export default class Post extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style);

        const appComment = this.ownerDocument.createElement("comp-comment");
        const appComments = this.ownerDocument.createElement("comp-comments");
        const appUser = this.ownerDocument.createElement("comp-user");
        appUser.classList.add("user")

        const container = this.ownerDocument.createElement("div");
        container.classList.add("carContainer")
        this.shadowRoot?.appendChild(container);
        
        const card = this.ownerDocument.createElement("div");
        card.classList.add("card")
        
        const title = this.ownerDocument.createElement("div");
        title.classList.add("title")

        const top = this.ownerDocument.createElement("div");
        top.classList.add("contTop")

        const text = this.ownerDocument.createElement("h2");
        text.textContent=("Communities you follow");

        const contPlatform = this.ownerDocument.createElement("div");
        contPlatform.classList.add("card-platform");
        
        container.appendChild(card);
        card.appendChild(top)
        card.appendChild(appComments)
        card.appendChild(appComment)
        card.appendChild(contPlatform)

        top.appendChild(title)
        top.appendChild(appUser)
        title.appendChild(text)
    }
}

customElements.define('comp-post', Post);
