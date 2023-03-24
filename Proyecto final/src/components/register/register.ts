class Register extends HTMLElement {
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
            <link rel="stylesheet" href="../src/components/register/style.css">

            <div id="main">
                <section id ="images">
                    <img src="" alt="Mario world gif">
                </section>
                <section>
                    <div class="inputs">
                        <input type="text" placeholder="email"></input>
                        <input type="text" placeholder="username"></input>
                        <input type="text" placeholder="password"></input>
                    </div>
                    <p>or sing with</p>
                    <div class="btns">
                        <button>Sing in with Facebook</button>
                        <button>Sing in with Google</button>
                    </div>
                    <p>Don't have account?</p><a>register</a>
                </section>
            </div>`;
            
        }
    }

}

customElements.define('comp-register', Register);
export default Register;
