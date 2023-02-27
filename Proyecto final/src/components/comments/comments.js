class Comments extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<p>component comments<p>`;
    }

}

customElements.define('comp-comments', Comments);
