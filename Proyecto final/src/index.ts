import "./screens/export"
import "./components/export"
import { addObserver, appState } from "./store/index";
import { Screen } from "./Types/store";

class App extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        const css = this.ownerDocument.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "../dist/style/main.css");
        this.shadowRoot?.appendChild(css);

        const dashboard = this.ownerDocument.createElement("comp-dashboard");
        const login = this.ownerDocument.createElement("comp-login");
        const register = this.ownerDocument.createElement("comp-register");

        this.shadowRoot?.appendChild(dashboard)
        // this.shadowRoot?.appendChild(login);
        // this.shadowRoot?.appendChild(register)

        switch (appState.screen) {
            case Screen.LOGIN:
                this.shadowRoot?.appendChild(login);
                break;
        
            case Screen.REGISTER:
                this.shadowRoot?.appendChild(register)
                break;

            case Screen.DASHBOARD:
                this.shadowRoot?.appendChild(dashboard)
                break;
        
            default:
                break;
        }
    }
}

customElements.define('comp-container', App);
