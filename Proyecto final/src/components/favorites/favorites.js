class Favorites extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<p>component favorites<p>`;
    }

}

customElements.define('comp-favorites', Favorites);
