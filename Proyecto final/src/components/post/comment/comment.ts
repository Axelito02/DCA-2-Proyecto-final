import { appState, dispatch } from "../../../store";
import { getPost, savePost } from "../../../store/actions";
import { AttrComment } from "../../../types/interfaces";
import { Addevent } from "../../../utils/addevents";
import { loadCss } from "../../../utils/styles";
import { LogOut } from "../../export";
import style from "./style.css"

const newPost: AttrComment = {
    comment: "",
};

export default class Comment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    async connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)

        const contInput = this.ownerDocument.createElement("div");
        contInput.classList.add("contInput");
        this.shadowRoot?.appendChild(contInput);

        const input = this.ownerDocument.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Say something...");
        input.addEventListener("change", (e: any) => {
            newPost.comment = e.target.value
        })

        const btn = this.ownerDocument.createElement("button");
        btn.classList.add("btnSend");
        btn.textContent = "Send"
        Addevent(btn, async () => {
            console.log("envio el nuevo post");
            dispatch(await savePost(newPost))
        })

        contInput.appendChild(input);
        contInput.appendChild(btn);

    }
}

customElements.define('comp-comment', Comment);
