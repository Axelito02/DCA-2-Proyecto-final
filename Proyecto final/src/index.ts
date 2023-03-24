import "./components/export"
import dataG from "./components/card/games"

class App extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render()
        console.log(dataG);
        }

    render() {
        if(this.shadowRoot){
            const gamesD = dataG.map(({name, thumbnail, publisher, releaseyear}) => `<comp-card name=${name} thumbnail="${thumbnail}" publisher="${publisher}" releaseyear="${releaseyear}"></comp-card>`)
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

            <section id= "content">
                <comp-card></comp-card>
                <comp-card></comp-card>
            </section>

            <section id= "content">
                <comp-card></comp-card>
                <comp-card></comp-card>
            </section>

            <section id= "bottom">
                <comp-gameweek></comp-gameweek>
            </section>        
        </section>
            `;
        }
    }
}

customElements.define('comp-app', App);
