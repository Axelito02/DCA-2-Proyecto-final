
import { ScreenNavigate } from "../../../store/actions";
import { dispatch } from "../../../store/index";
import { Addevent } from "../../../utils/addevents";
import { loadCss } from "../../../utils/styles";
import { Screen } from "../../../Types/store";
import style from "./style.css"

export default class Bar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this,style)
        
        const col = this.ownerDocument.createElement("div");
        col.classList.add("col");
        
        const btn1= this.ownerDocument.createElement("button");
        btn1.classList.add("btn");
        btn1.textContent = ("Sign in")
        // Addevent(btn1, () => {
        //     dispatch(ChagedLOGIN())
        //     console.log("login");
        // })

        // Addevent(btn1, () => {
        //     dispatch(ScreenNavigate(Screen.LOGIN))
        // })

        const btn2 = this.ownerDocument.createElement("button");
        btn2.classList.add("btn");
        btn2.textContent = ("Sign up")
        
        const barsearch = this.ownerDocument.createElement("input");
        barsearch.classList.add("bar-search");
        barsearch.setAttribute("placeholder", "Search");
        
        col.appendChild(barsearch);
        col.appendChild(btn1);
        col.appendChild(btn2);

        this.shadowRoot?.appendChild(col);
   
    }
}

customElements.define('comp-bar', Bar);
