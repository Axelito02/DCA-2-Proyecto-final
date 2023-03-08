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
        <link rel="stylesheet" href="./styles/style-login.css">
        <div class="Login-both">
        <section id ="space">
        </section>
        <section id ="login">
            <div class="card">
                <input type="text class="username" placeholder="Enter username">
                <input type="text" class="password" placeholder="Enter password">
                <button></button>
                <p>or sign in with</p>
                <div class="facebook-btn">
  <div class="facebook-icon-wrapper">
    <img class="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/899px-Logo_de_Facebook.png"/>
  </div>
  <p class="btn-text"><b>Sign in with facebook</b></p>

                <div class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><b>Sign in with google</b></p>
                <p>Don't have an account?</p>
                
            </div>
        </section>
    </div>
        `;
    }

}

customElements.define('comp-login', login);
