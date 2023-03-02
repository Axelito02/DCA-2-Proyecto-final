class login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
        
    }

    render(){
        this.shadowRoot.innerHTML = `
        <div class="Login-both">
        <section id ="images">
            <img src="https://i.pinimg.com/originals/bd/64/79/bd6479fe38844545f7a06223bf927015.gif" alt="Mario world gif">
        </section>
        <section id ="login">
            <div class="card">
                <input type="text">
                <input type="text">
                <button></button>
                <p>or sign in with</p>
                <button></button>
                <button></button>
            </div>
        </section>
    </div>
    <link rel="stylesheet" src="../src/components/login/styleLogin.css"> ??
        `;
    }

}

customElements.define('comp-login', login);
