import style from "./style.css"
import { loadCss } from "../../utils/styles";
import { AttrGameWeek } from "../../Types/Interfaces";

export default class GameWeek extends HTMLElement {
    name: string = "";
    thumbnail: string= "";
    description: string= "";
    alt: string= "";

    static get observedAttributes(){
        return["name", "thumbnail", "description", "alt"]
    }

    attributeChangedCallback(propName: keyof AttrGameWeek, _:unknown, newValue:string){
        this[propName] = newValue;
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){   
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this, style)

        const container = this.ownerDocument.createElement("div");
        container.classList.add("carContainer")
        this.shadowRoot?.appendChild(container);

        const card = this.ownerDocument.createElement("div");
        card.classList.add("card")

        const cardBody = this.ownerDocument.createElement("div");
        cardBody.classList.add("card-body")

        const contPlatform = this.ownerDocument.createElement("div");
        contPlatform.classList.add("card-platform")

        const title = this.ownerDocument.createElement("div");
        title.classList.add("title")

        const title2 = this.ownerDocument.createElement("div");
        title2.classList.add("nameGame")

        const contImg = this.ownerDocument.createElement("div");
        contImg.classList.add("contImg")
        
        const text = this.ownerDocument.createElement("h1");
        text.textContent=("Game The Week")
        
        const nameGame = this.ownerDocument.createElement("h2");
        nameGame.classList.add("name")
        nameGame.textContent=(`Terraria`)
        
        const text2 = this.ownerDocument.createElement("p");
        text2.classList.add("description")
        text2.textContent=(`Terraria es un videojuego de acción, aventura y de sandbox producido de forma independiente por el estudio Re-Logic. Tiene características tales como la exploración, la artesanía, la construcción de estructuras y el combate.`)

        const img = this.ownerDocument.createElement("img");
        img.setAttribute("src",`../dist/image/Terraria.jpg`);
        img.setAttribute("alt",`${this.alt}`);

        const steam = this.ownerDocument.createElement("img");
        steam.setAttribute("src",`../dist/image/Steam-logo.png`);
        steam.setAttribute("alt","logo Steam");

        const epic = this.ownerDocument.createElement("img");
        epic.setAttribute("src",`../dist/image/Epic_Games_logo.png`);
        epic.setAttribute("alt","logo Epic Games");

        container.appendChild(card)
        card.appendChild(title)
        card.appendChild(title2)
        card.appendChild(contImg)
        card.appendChild(nameGame)
        card.appendChild(cardBody)
        card.appendChild(contPlatform)

        contPlatform.appendChild(steam)
        contPlatform.appendChild(epic)
        cardBody.appendChild(text2)
        title.appendChild(text)
        title2.appendChild(nameGame)
        contImg.appendChild(img)
        
    }
}

customElements.define('comp-gameweek', GameWeek);
