import "./components/export";
import "./screens/export";
import { addObserver, appState, dispatch } from "./store/index";
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    const css = this.ownerDocument.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "../dist/style/main.css");
    this.shadowRoot?.appendChild(css);

    switch (appState.screen) {

      case Screens.LOGIN:
        const login = this.ownerDocument.createElement("comp-login");
        this.shadowRoot?.appendChild(login);
        break;

      case Screens.REGISTER:
        const register = this.ownerDocument.createElement("comp-register");
        this.shadowRoot?.appendChild(register);
        break;

      case Screens.DASHBOARD:
        const dashboard = this.ownerDocument.createElement("comp-dashboard");
        this.shadowRoot?.appendChild(dashboard);
        break;

      default:
        break;
    }
  }
}

customElements.define("comp-container", AppContainer);
