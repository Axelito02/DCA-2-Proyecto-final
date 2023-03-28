export default class GameWeek extends HTMLElement {
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
            <link rel="stylesheet" href="../src/components/GameWeek/style.css">
            
            <div class="carContainer">
                <div class="card">
                    <div class "title">
                        <h2>Game the week</h2>
                    </div>
                    <div class "title">
                        <img src="../dist/images/Minecraft.jpg" class="card-img-top1" alt="Juego de la semana Minecraft"> 
                    </div>
                        
                    <div class="card-body">
                        <p class="card-text2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            `;
        }
    }
}

customElements.define('comp-gameweek', GameWeek);
