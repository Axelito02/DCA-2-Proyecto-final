export default class Banner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/banner/style.css">

            <div class="banner">
                <img src="../dist/images/Valorant.png" alt="Valorant">
            </div>
            `;
        }
    }
}

customElements.define('comp-banner', Banner);
