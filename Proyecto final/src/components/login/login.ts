class login extends HTMLElement {
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
            <link rel="stylesheet" href="./style.css">

            <div class="Login-both">
            <section id ="images">
                <img src="https://i.pinimg.com/originals/bd/64/79/bd6479fe38844545f7a06223bf927015.gif" alt="Mario world gif">
            </section>
            <section id ="login">
                <div class="card">
                    <input type="text">
                    <input type="text">
                    <button>Login</button>
                    <p>or sign in with</p>
                    <button>Sing in with Google</button>
                    <button>Sing in with Facebook</button>
                </div>
            </section>
        </div>`

        }
   
    }
}

customElements.define('comp-login', login);
export default login;
