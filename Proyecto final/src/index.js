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
        `;
    }

}

customElements.define('comp-app', App);
