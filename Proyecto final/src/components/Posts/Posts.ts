export default class Post extends HTMLElement {
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

            <div class="PostContainer">
                <div class="card">
                    <div class ="title">
                        <h2>Comunities you follow   </h2>
                    </div>

                    <div class= "publishedPost">
                        <comp-comments></comp-comments>
                    </div>
                    
                    <div class= "createPost">
                        <comp-comment></comp-comment>
                    </div>
                </div>
            </div>
            `;
        }
    }
}

customElements.define('comp-post', Post);
