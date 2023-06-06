import "./components/export";
import "./screens/export";
import { getPost } from "./store/actions";
import { addObserver, appState, dispatch } from "./store/index";
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    dispatch(await getPost());
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

      case Screens.UPDATE_GAMES:
        const home = this.ownerDocument.createElement("comp-home");
        this.shadowRoot?.appendChild(home);
        break;

      case Screens.UPDATE_POST:
        const post = this.ownerDocument.createElement("comp-posting");
        this.shadowRoot?.appendChild(post);
        break;

      case Screens.UPDATE_MYGAMES:
        const mygames = this.ownerDocument.createElement("comp-mygame");
        this.shadowRoot?.appendChild(mygames);
        break;

      case Screens.UPDATE_PROFILE:
        const profile = this.ownerDocument.createElement("compscreen-profileaccount");
        this.shadowRoot?.appendChild(profile);
        break;

      case Screens.UPDATE_ACCOUNT:
        const account = this.ownerDocument.createElement("compscreen-profileaccount");
        this.shadowRoot?.appendChild(account);
        break;

      case Screens.UPDATE_FRIENDS:
        const friends = this.ownerDocument.createElement("compscreen-profilefriends");
        this.shadowRoot?.appendChild(friends);
        break;

      case Screens.UPDATE_FAVORITES:
        const favorites = this.ownerDocument.createElement("compscreen-favorites");
        this.shadowRoot?.appendChild(favorites);
        break;

      case Screens.UPDATE_NOTIFICATIONS:
        const notifications = this.ownerDocument.createElement("compscreen-notification");
        this.shadowRoot?.appendChild(notifications);
        break;

      case Screens.UPDATE_SETTINGS:
        const settings = this.ownerDocument.createElement("compscreen-profilesettings");
        this.shadowRoot?.appendChild(settings);
        break;

      case Screens.UPDATE_LOGINMOBILE:
        const loginmible = this.ownerDocument.createElement("compscreen-loginmobile");
        this.shadowRoot?.appendChild(loginmible);
        break;

      default:
        break;
    }
  }
}

customElements.define("comp-container", AppContainer);
