import style from "./style.css"
import { loadCss } from "../../utils/styles";

export default class Banner extends HTMLElement {
  imageSrc = 'https://i.ibb.co/n0yCZvC/Valorant.png';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
    loadCss(this, style);

    const banner = this.ownerDocument.createElement('div');
    banner.classList.add('banner');

    const img = this.ownerDocument.createElement('img');
    img.setAttribute('src', this.imageSrc);
    img.setAttribute('alt', 'Valorant');

    banner.appendChild(img);
    this.shadowRoot?.appendChild(banner);

    // Guardar imagen en el localStorage
    this.saveImageToLocalStorage();
  }

  private saveImageToLocalStorage() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.imageSrc, true);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const objectURL = URL.createObjectURL(blob);
        localStorage.setItem('imagen', objectURL);
      }
    };

    xhr.send();
  }
}

customElements.define('comp-banner', Banner);
