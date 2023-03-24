export default class Search extends HTMLElement {
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
            <link rel="stylesheet" href="../src/components/search/style.css">
            
            <div class="row">
            <div class="header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShKNOcRVhqJHfcy08NCyeEm9eGfFQ2tPBuA&usqp=CAU">
                <input class= "bar-search" type="text" placeholder="Search">
            </div>
        </div>
            `;
        }
    }
}

customElements.define('comp-search', Search);
