export default class Search extends HTMLElement {
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
            <link rel="stylesheet" href="../src/components/search/style.css">
            
            <div class="row">
            <div class="header">
                <img src="../dist/images/Playconnect-Logo.png" >
                <div class="col">
                    <input class= "bar-search" type="text" placeholder="        Search">
                    <button class="btn">Sign in</button>
                    <button class="btn">Sign up</button>
                </div>
            </div>
        </div>
            `;
        }
    }
}

customElements.define('comp-search', Search);
