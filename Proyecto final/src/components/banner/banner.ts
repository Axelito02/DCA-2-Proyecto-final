class Banner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<p>component banner</p>`;

        }
    }

}

customElements.define('comp-banner', Banner);
export default Banner;