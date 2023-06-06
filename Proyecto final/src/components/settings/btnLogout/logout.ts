import { dispatch } from "../../../store";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/store";
import { Addevent } from "../../../utils/addevents";
import { loadCss } from "../../../utils/styles";
import style from "./style.css";

export default class LogOut extends HTMLElement {
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

        const btn = this.ownerDocument.createElement("button")
        btn.textContent = "Log out"
        btn.classList.add("btn")
        Addevent(btn, () => {
            dispatch(navigate(Screens.LOGIN))
            console.log("comunidad");
        })
        this.shadowRoot?.appendChild(btn)
    }
}

customElements.define('comp-btnlogout', LogOut);
