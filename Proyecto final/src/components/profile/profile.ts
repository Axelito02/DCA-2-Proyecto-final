export default class Profile extends HTMLElement {
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
            <p>comp-profile</p>
            <comp-account></comp-account>
            <comp-account></comp-account>
            <comp-settings></comp-settings>
            <comp-favorites></comp-favorites>
            <comp-friends></comp-friends>
            <comp-notification></comp-notification>
            `;
        }
    }
}

customElements.define('comp-profile', Profile);
