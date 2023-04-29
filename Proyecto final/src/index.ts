import "./screens/export"
import "./components/export"
import { addObserver, appState } from "./components/nav/store/index";
import { Screens } from "./Types/store";

class App extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback(){
        this.render();
    }

    render(){
        appState.screen
        switch (appState.screen) {
            case Screens.LOGIN:
                const login = this.ownerDocument.createElement("comp-login");
                this.shadowRoot?.appendChild(login);
                
                break;
            
                case Screens.SIGNUP:
                    const register = this.ownerDocument.createElement("comp-register");
                    this.shadowRoot?.appendChild(register);
                
                break;
                
                case Screens.DASHBOARD:
                    // const dashboard = this.ownerDocument.createElement("comp-dashboard");
                    // this.shadowRoot?.appendChild(dashboard);
                
                break;
        
            default:
                break;
        }
        const css = this.ownerDocument.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "../dist/style/main.css");
        this.shadowRoot?.appendChild(css);

    }
}

customElements.define('comp-container', App);
