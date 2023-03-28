import "./components/export"
import dataG from "./components/card/games"

class App extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
        }

    render() {
        if(this.shadowRoot){
            const gamesD = dataG.map(({name, thumbnail, publisher, releaseyear}) => `<comp-card name="${name}" thumbnail="${thumbnail}" publisher="${publisher}" releaseyear="${releaseyear}"></comp-card>`)
            
            console.log(gamesD);
            
            this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../dist/styles/main.css">
        <link rel="stylesheet" href="../src/components/nav/style.css">

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
                ${gamesD.join("")}
            </section>
                
            <section id= "content">    
                ${gamesD.join("")}
            </section>

            <div data-content id="gameweek" class="active">
                <section id= "bottom">
                    <comp-gameweek></comp-gameweek>
                </section>  
            </div>

            <div data-content id="post">
                <section id= "bottom">
                    <comp-comments></comp-comments>
                </section>  
            </div>
                  
        </section>
            `;
        }
    }
}

customElements.define('comp-app', App);
