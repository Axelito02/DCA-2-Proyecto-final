class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<p>component register</p>`;
    }

}

customElements.define('comp-register', Register);
