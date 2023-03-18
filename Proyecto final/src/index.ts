import "./components/index"

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
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../dist/styles/main.css">

        <section id= "main">
            <section id= "banner">
                <comp-banner></comp-banner>
                <comp-search></comp-search>
            </section>

            <section id= "screensSesions">
                <comp-login></comp-login>
                <comp-register></comp-register>
            </section>

            <section id= "bar_nav">
                <comp-nav></comp-nav>
            </section>

            <section id= "content">
                <comp-card></comp-card>
                <comp-comments></comp-comments>
                <comp-comment></comp-comment>
                <comp-gameweek></comp-gameweek>
                <comp-profile></comp-profile>
            </section>        
        </section>
            `;
        }
    }
}

customElements.define('comp-app', App);
