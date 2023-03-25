import "./components/export"
import dataG from "./components/card/games"

class App extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render()
        }

    render() {
        if(this.shadowRoot){
            const gamesD = dataG.map(({name, thumbnail, publisher, releaseyear}) => `<comp-card name="${name}" thumbnail="${thumbnail}" publisher="${publisher}" releaseyear="${releaseyear}"></comp-card>`)
            
            console.log(gamesD);
            
            this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../dist/styles/main.css">

        <section id= "main_container">
            <section id= "header">
                <comp-search></comp-search>
                <comp-banner></comp-banner>
            </section>

            <section id= "bar_nav">
                <comp-nav></comp-nav>
            </section>

            <section id="title">
                <h3>You’d also like...</h3>
            </section>

            <section id= "content">
<<<<<<< HEAD
                ${gamesD.join("")}
            </section>
                
            <section id= "content">    
                ${gamesD.join("")}
=======
                <comp-card ></comp-card>
                <comp-card></comp-card>
>>>>>>> 7843c85a830786be636d2fc9f6ad09b32c3c70a8
            </section>

            <section id= "bottom">
                <comp-gameweek></comp-gameweek>
            </section>        
            ${gamesD.join("")}
        </section>
            `;
        }
    }
}

customElements.define('comp-app', App);
