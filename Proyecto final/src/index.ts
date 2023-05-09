import "./screens/export"
import "./components/export"
<<<<<<< HEAD
import { addObserver, appState } from "./store/index";
import { Screen } from "./Types/store";
=======
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e

class App extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
<<<<<<< HEAD
        addObserver(this)
=======
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
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

<<<<<<< HEAD
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
=======
        this.shadowRoot?.appendChild(dashboard);
        // this.shadowRoot?.appendChild(login);
        // this.shadowRoot?.appendChild(register)
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
    }
}

customElements.define('comp-container', App);
