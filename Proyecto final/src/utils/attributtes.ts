export const setAttributes = <obj extends Record<any, any>>(objProps: obj, elementRef: HTMLElement) => {
    Object.entries(objProps).forEach(([propName, newValue]) =>
    elementRef.setAttribute(propName, newValue)
    )
}
