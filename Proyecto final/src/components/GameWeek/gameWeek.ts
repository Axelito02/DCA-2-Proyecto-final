class GameWeek extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<p>component gameWeek<p>`;

        }
    }

}

customElements.define('comp-gameweek', GameWeek);
export default GameWeek;