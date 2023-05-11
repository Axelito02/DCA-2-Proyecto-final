import { AttrComments } from "../../../Types/Interfaces"
import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class Comments extends HTMLElement {
    username: string = "";
    thumbnail: string = "";
    hastag: string = "";
    comment: string = "";

    static get observedAttributes(){
        return["username", "thumbnail","hastag","comment"]
    }

    attributeChangedCallback(propName: keyof AttrComments, _:unknown, newValue:string){
        this[propName] = newValue;
        console.log(propName, newValue);
            
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this, style)

        const cardPost = this.ownerDocument.createElement("section");
        cardPost.classList.add("card-posts");
        this.shadowRoot?.appendChild(cardPost);
        
        const title = this.ownerDocument.createElement("div");
        title.classList.add("hastag");
        title.textContent = "#hashtag genre of the game";
        
        const post = this.ownerDocument.createElement("div")
        post.classList.add("content")
        post.textContent = "Post of someone in the community you follow; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."

        cardPost.appendChild(title)
        cardPost.appendChild(post)

    }
}

customElements.define('comp-comments', Comments);
