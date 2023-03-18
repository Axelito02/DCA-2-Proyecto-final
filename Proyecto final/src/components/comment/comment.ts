class Comment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<p>component comment<p>`;

        }
    }

}

customElements.define('comp-comment', Comment);
export default Comment;