class Notification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<p>component notification<p>`;
    }

}

customElements.define('comp-notification', Notification);
