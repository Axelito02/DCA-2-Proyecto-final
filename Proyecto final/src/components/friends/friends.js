class Friends extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<p>component friends<p>`;
    }

}

customElements.define('comp-friends', Friends);
