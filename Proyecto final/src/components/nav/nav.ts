export default class Nav extends HTMLElement {
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
            <link rel="stylesheet" href="../src/components/nav/style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

            <div class= "cont-nav">
                <div class="col uno" tabindex="0"> News </div>

                <div class="col dos" tabindex="0"> Comunities </div>
                
                <div class="col tres" tabindex="0"> Login </div>
            </div>
            `;

        }
    }
}

customElements.define('comp-nav', Nav);
