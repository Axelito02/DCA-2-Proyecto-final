import dataG from "./games"

enum renderCharacter{
    "name" = "name",
    "thumbnail" = "thumbnail",
    "publisher" = "publisher",
    "releaseyear" = "releaseyear",
}

export default class Card extends HTMLElement {
    thumbnail: string = "";
    name : string = "";
    releaseyear : string = "";
    publisher : string = "";

    static get observedAttributes(){
        return Object.keys(renderCharacter);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.name = ""
        this.thumbnail = ""
        this.publisher = ""
        this.releaseyear = ""
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName:renderCharacter, _:unknown, newValue:string){        
        this[propName]= newValue
        this.render()
    }

    render(){
        
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/card/style.css">

            <div id="carousel-container">
            <div id="app">
                <div id="carousel">
                    <figure class="juego-card">
                        <img src ="${this.thumbnail}">
                        <h2 class="name">${this.name}</h2>
                        <h2>${this.releaseyear}</h2>
                        <h3>${this.publisher}</h3>
                    </figure>
                </div>
            </div>
            </div>
            `;
        }
    }
}
customElements.define('comp-card', Card);
