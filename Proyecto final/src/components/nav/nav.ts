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
            <script src="../src/components/nav/script.js"></script>
            <link rel="stylesheet" href="../src/components/nav/style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

            <div class="cont-nav">

                <div data-target id="gameweek" class="col uno active" tabindex="0"> News
                </div>

                <div data-target id="communities" class="col dos" tabindex="0"> Communities
                </div>

                <div data-target id="my-games" class="col tres-log" tabindex="0">
                    My Games
                </div>

                <div data-target id="profile" class="col cuatro" tabindex="0">Profile
                </div>   
            </div>

            <div class= "cont-nav-unlog">
                <div class="col uno" tabindex="0"> News </div>

                <div class="col dos" tabindex="0"> Comunities </div>
                
                <div class="col tres" tabindex="0"> Login </div>
            </div>
            `;

        }
    }
}

customElements.define('comp-nav', Nav);
