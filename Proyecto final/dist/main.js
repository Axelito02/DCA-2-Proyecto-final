(()=>{var e={398:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component gameWeek<p>"}}customElements.define("comp-gameweek",e)},325:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component account</p>"}}customElements.define("comp-account",e)},361:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component settings<p>"}}customElements.define("comp-settings",e)},749:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component banner</p>"}}customElements.define("comp-banner",e)},720:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component card<p>"}}customElements.define("comp-card",e)},142:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component comment<p>"}}customElements.define("comp-comment",e)},203:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component comments<p>"}}customElements.define("comp-comments",e)},760:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component favorites<p>"}}customElements.define("comp-favorites",e)},348:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component friends<p>"}}customElements.define("comp-friends",e)},434:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML='\n        <div class="Login-both">\n        <section id ="images">\n            <img src="https://i.pinimg.com/originals/bd/64/79/bd6479fe38844545f7a06223bf927015.gif" alt="Mario world gif">\n        </section>\n        <section id ="login">\n            <div class="card">\n                <input type="text">\n                <input type="text">\n                <button></button>\n                <p>or sign in with</p>\n                <button></button>\n                <button></button>\n            </div>\n        </section>\n    </div>\n    <link rel="stylesheet" src="../src/components/login/styleLogin.css"> ??\n        '}}customElements.define("comp-login",e)},232:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component nav<p>"}}customElements.define("comp-nav",e)},833:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component notification<p>"}}customElements.define("comp-notification",e)},248:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component profile<p>"}}customElements.define("comp-profile",e)},621:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component register</p>"}}customElements.define("comp-register",e)},451:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="<p>component search<p>"}}customElements.define("comp-search",e)}},n={};function t(o){var c=n[o];if(void 0!==c)return c.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,t),s.exports}(()=>{"use strict";t(434),t(621),t(749),t(451),t(232),t(720),t(203),t(142),t(398),t(325),t(361),t(760),t(348),t(833),t(248);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <comp-login></comp-login>\n        <comp-register></comp-register>\n        <comp-banner></comp-banner>\n        <comp-search></comp-search>\n        <comp-nav></comp-nav>\n        <comp-card></comp-card>\n        <comp-comments></comp-comments>\n        <comp-comment></comp-comment>\n        <comp-gameweek></comp-gameweek>\n        <comp-account></comp-account>\n        <comp-settings></comp-settings>\n        <comp-favorites></comp-favorites>\n        <comp-friends></comp-friends>\n        <comp-notification></comp-notification>\n        <comp-profile></comp-profile>\n        "}}customElements.define("comp-app",e)})()})();