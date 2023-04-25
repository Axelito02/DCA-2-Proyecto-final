import "./screens/export"
import "./components/export"

class App extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const css = this.ownerDocument.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "../dist/style/main.css");
        this.shadowRoot?.appendChild(css);

        const dashboard = this.ownerDocument.createElement("comp-dashboard");
        const login = this.ownerDocument.createElement("comp-login");
        const register = this.ownerDocument.createElement("comp-register");

        this.shadowRoot?.appendChild(dashboard);
        this.shadowRoot?.appendChild(login);
        this.shadowRoot?.appendChild(register);
    }
}

customElements.define('comp-container', App);
