export default class RecentlyGames extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        const Container = this.ownerDocument.createElement("section")
        this.shadowRoot?.appendChild(Container)
    }
}

customElements.define('recently-games', RecentlyGames);
