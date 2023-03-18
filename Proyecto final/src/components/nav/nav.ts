class Nav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){ 
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<p>component nav<p>`;

        }
    }

}

customElements.define('comp-nav', Nav);
export default Nav;