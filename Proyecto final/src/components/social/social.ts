import { loadCss } from "../../utils/styles";
import style from "./style.css"

export default class Social extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    loadCss(this, style)
    
    const ContainerGoogleBtn = this.ownerDocument.createElement("div");
    ContainerGoogleBtn.classList.add("google-btn");
    this.shadowRoot?.appendChild(ContainerGoogleBtn);

        const ContBtnSocialGoogle = this.ownerDocument.createElement("div");
        ContBtnSocialGoogle.classList.add("Btn-social");

            const GoogleIcon = this.ownerDocument.createElement("img");
            GoogleIcon.src = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
            GoogleIcon.classList.add("google-icon");
                    
        const HipervinculoGoogle = this.ownerDocument.createElement("a");
        HipervinculoGoogle.href = "https://accounts.google.com/v3/signin/identifier?dsh=S-1592866806%3A1683307255952844&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=es-419&ifkv=Af_xneG_glkYHk1YwrU8HFDABCuyShrY_GmxbyWdv6SGUBXfsJPu9VeDlOawSBA0mornlexcwNS-dQ&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        HipervinculoGoogle.target = "_blank";
            const GoogleBtnAction = this.ownerDocument.createElement("button");
            GoogleBtnAction.textContent = "Sing with facebook";
            GoogleBtnAction.classList.add("LoginGoogle");
            
    const ContainerfacebookBtn = this.ownerDocument.createElement("div");
    ContainerfacebookBtn.classList.add("facebook-btn");
    this.shadowRoot?.appendChild(ContainerfacebookBtn);

        const ContBtnSocialFacebook = this.ownerDocument.createElement("div");
        ContBtnSocialFacebook.classList.add("Btn-social");
    
            const FacebookIcon = this.ownerDocument.createElement("img");
            FacebookIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/899px-Logo_de_Facebook.png";
            FacebookIcon.classList.add("facebook-icon");

        const FacebookBtnAction = this.ownerDocument.createElement("button");
        const HipervinculoFacebook = this.ownerDocument.createElement("a");
        HipervinculoFacebook.href = "https://www.facebook.com/";
        HipervinculoFacebook.target = "_blank";
        FacebookBtnAction.textContent = "Sing with facebook";
        FacebookBtnAction.classList.add("LoginFacebook");

    ContainerGoogleBtn.appendChild(ContBtnSocialGoogle);
    ContainerGoogleBtn.appendChild(HipervinculoGoogle);

    ContainerfacebookBtn.appendChild(ContBtnSocialFacebook);
    ContainerfacebookBtn.appendChild(HipervinculoFacebook);

    ContBtnSocialGoogle.appendChild(GoogleIcon);
    HipervinculoGoogle.appendChild(GoogleBtnAction);

    ContBtnSocialFacebook.appendChild(FacebookIcon);
    HipervinculoFacebook.appendChild(FacebookBtnAction);
    }
}

customElements.define("comp-social", Social);
