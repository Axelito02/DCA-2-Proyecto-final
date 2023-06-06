import { navigate } from "../../../store/actions";
import { appState, dispatch } from "../../../store/index";
import { Screens } from "../../../types/store";
import { Addevent } from "../../../utils/addevents";
import { loadCss } from "../../../utils/styles";
import style from "./style.css"

export default class Bar extends HTMLElement {
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

        const col = this.ownerDocument.createElement("div");
        col.classList.add("col");

        const btn1 = this.ownerDocument.createElement("button");
        btn1.classList.add("btn");
        btn1.textContent = ("Sign in");
        Addevent(btn1, () => {
            dispatch(navigate(Screens.LOGIN))
            console.log("login");
        })

        const btn2 = this.ownerDocument.createElement("button");
        btn2.classList.add("btn");
        btn2.textContent = ("Register");
        Addevent(btn2, () => {
            dispatch(navigate(Screens.REGISTER));
            console.log("Register");
        })

        const barsearch = this.ownerDocument.createElement("input");
        barsearch.classList.add("bar-search");
        barsearch.setAttribute("placeholder", "Search");

        col.appendChild(barsearch);
        col.appendChild(btn1);
        col.appendChild(btn2);

        this.shadowRoot?.appendChild(col);

        switch (appState.screen) {
            case Screens.DASHBOARD:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_GAMES:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_POST:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_MYGAMES:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_PROFILE:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_ACCOUNT:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_FRIENDS:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_FAVORITES:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_NOTIFICATIONS:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            case Screens.UPDATE_SETTINGS:
                btn1.style.display = "none"
                btn2.style.display = "none"
                break;

            default:
                break;
        }

    }
}

customElements.define('comp-bar', Bar);
