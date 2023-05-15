import { ScreenNavigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Addevent } from "../../utils/addevents";
import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style)
        
        const form = this.ownerDocument.createElement("div");
        form.classList.add("forms");
        
        const ContainerfacebookBtn = this.ownerDocument.createElement("div");
        ContainerfacebookBtn.classList.add("facebook-btn");
        
        const ContainerGoogleBtn = this.ownerDocument.createElement("div");
        ContainerGoogleBtn.classList.add("google-btn");

        const ContainerTitle = this.ownerDocument.createElement("div");
        ContainerTitle.classList.add("title");
        
        const Loginbtn = this.ownerDocument.createElement("button");
        Loginbtn.classList.add("LoginBtn")
        Loginbtn.textContent = "Log in"
        Addevent(Loginbtn, () => {
            // dispatch(ScreenNavigate(Screen.DASHBOARD));
        })
        
        const textContent = this.ownerDocument.createElement("div");
        textContent.classList.add("textContent")
        
        const textContent2 = this.ownerDocument.createElement("div");
        textContent2.classList.add("textContent")
        
        const Title = this.ownerDocument.createElement("h1");
        Title.textContent = "Log in"
        Title.classList.add("TitleLogin")

        const Text = this.ownerDocument.createElement("p");
        Text.textContent = "Or sign in with"
        
        const Text2 = this.ownerDocument.createElement("p");
        Text2.textContent = "Don't have a account?"
        
        const Text3 = this.ownerDocument.createElement("p");
        Text3.classList.add("RecoveryPassword")
        Text3.textContent = "Forgot account username or password?"

        const ContainerInputs = this.ownerDocument.createElement("div");
        ContainerInputs.classList.add("ContainerInputs")
        
        const HipervinculoRegister = this.ownerDocument.createElement("a");
        HipervinculoRegister.textContent = "Register";
        Addevent(HipervinculoRegister, () => {
            // dispatch(ScreenNavigate(Screen.REGISTER));
            console.log("screen register");    
        })
        
        const HipervinculoLogin = this.ownerDocument.createElement("a");
        HipervinculoLogin.textContent = "Login"
        Addevent(HipervinculoLogin, () => {
            // dispatch(ScreenNavigate(Screen.LOGIN));
            console.log("screen register");    
        })
        
        const inptuUsername = this.ownerDocument.createElement("input");
        inptuUsername.placeholder = "Enter username";
        inptuUsername.classList.add("username");
        inptuUsername.type = "text";
        
        const inptuPassword = this.ownerDocument.createElement("input");
        inptuPassword.placeholder = "Enter password";
        inptuPassword.classList.add("password");
        inptuPassword.type = "text";
        
        const FacebookIcon = this.ownerDocument.createElement("img");
        FacebookIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/899px-Logo_de_Facebook.png";
        FacebookIcon.classList.add("facebook-icon");
        
        const GoogleIcon = this.ownerDocument.createElement("img");
        GoogleIcon.src = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
        GoogleIcon.classList.add("google-icon");
        
        const ContainerSocial = this.ownerDocument.createElement("div");
        ContainerSocial.classList.add("ContainerSocial")
        
        const ContBtnSocialGoogle = this.ownerDocument.createElement("div");
        ContBtnSocialGoogle.classList.add("Btn-social")
        
        const ContBtnSocialFacebook = this.ownerDocument.createElement("div");
        ContBtnSocialFacebook.classList.add("Btn-social")
        
        const ContainerFormLogin = this.ownerDocument.createElement("div");
        ContainerFormLogin.classList.add("ContainerFormLogin")
        
        const FacebookBtnAction = this.ownerDocument.createElement("button");
        const HipervinculoFacebook = this.ownerDocument.createElement("a");
        HipervinculoFacebook.href = "https://www.facebook.com/"
        HipervinculoFacebook.target = "_blank"
        FacebookBtnAction.textContent = "Sing with facebook"
        FacebookBtnAction.classList.add("LoginFacebook")
        
        const HipervinculoGoogle = this.ownerDocument.createElement("a");
        const GoogleBtnAction = this.ownerDocument.createElement("button");
        HipervinculoGoogle.href = "https://accounts.google.com/v3/signin/identifier?dsh=S-1592866806%3A1683307255952844&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=es-419&ifkv=Af_xneG_glkYHk1YwrU8HFDABCuyShrY_GmxbyWdv6SGUBXfsJPu9VeDlOawSBA0mornlexcwNS-dQ&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        HipervinculoGoogle.target = "_blank"
        GoogleBtnAction.textContent = "Sing with facebook"
        GoogleBtnAction.classList.add("LoginGoogle")

        this.shadowRoot?.appendChild(ContainerFormLogin)

        ContainerFormLogin.appendChild(ContainerTitle)
        ContainerFormLogin.appendChild(form)
        ContainerFormLogin.appendChild(textContent)
        ContainerFormLogin.appendChild(ContainerSocial)
        ContainerFormLogin.appendChild(textContent2)
        ContainerSocial.appendChild(ContainerGoogleBtn)
        ContainerSocial.appendChild(ContainerfacebookBtn)
        ContBtnSocialFacebook.appendChild(FacebookIcon)
        ContainerfacebookBtn.appendChild(ContBtnSocialFacebook)
        ContainerfacebookBtn.appendChild(HipervinculoFacebook)
        ContBtnSocialGoogle.appendChild(GoogleIcon)
        ContainerGoogleBtn.appendChild(ContBtnSocialGoogle)
        ContainerGoogleBtn.appendChild(HipervinculoGoogle)
        ContainerInputs.appendChild(inptuUsername);
        ContainerInputs.appendChild(inptuPassword);
        ContainerTitle.appendChild(Title)
        form.appendChild(ContainerInputs);
        form.appendChild(Loginbtn);
        form.appendChild(Text3)
        textContent.appendChild(Text)
        textContent2.appendChild(Text2)
        textContent2.appendChild(HipervinculoRegister)
        HipervinculoFacebook.appendChild(FacebookBtnAction)
        HipervinculoGoogle.appendChild(GoogleBtnAction)
    }
}

customElements.define('comp-form', Form);
