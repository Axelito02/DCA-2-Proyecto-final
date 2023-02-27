import "./components/index.js"

class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <comp-login></comp-login>
        <comp-register></comp-register>
        <comp-banner></comp-banner>
        <comp-search></comp-search>
        <comp-nav></comp-nav>
        <comp-card></comp-card>
        <comp-comments></comp-comments>
        <comp-comment></comp-comment>
        <comp-gameweek></comp-gameweek>
        <comp-account></comp-account>
        <comp-settings></comp-settings>
        <comp-favorites></comp-favorites>
        <comp-friends></comp-friends>
        <comp-notification></comp-notification>
        <comp-profile></comp-profile>
        `;
    }

}

customElements.define('comp-app', App);
