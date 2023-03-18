class Friends extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<p>component friends<p>`;

        }
    }

}

customElements.define('comp-friends', Friends);
export default Friends;