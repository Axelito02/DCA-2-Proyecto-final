export const loadCss = (elRef: HTMLElement, style: string) => {
    const css = elRef.ownerDocument.createElement("style");
    css.innerHTML = style;
    elRef.shadowRoot?.appendChild(css)
}
