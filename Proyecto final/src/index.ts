import "./components/export"

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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

        <section id= "main_container">
            <section id= "header">
                <comp-search></comp-search>
                <comp-banner></comp-banner>
            </section>

            <section id= "bar_nav">
                <comp-nav></comp-nav>
            </section>

            <section id= "content">

            </section>        
        </section>
            `;
        }
    }
}

customElements.define('comp-app', App);
