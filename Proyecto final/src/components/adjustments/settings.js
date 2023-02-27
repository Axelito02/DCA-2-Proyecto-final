class Settings extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<p>component settings<p>`;
    }

}

customElements.define('comp-settings', Settings);
