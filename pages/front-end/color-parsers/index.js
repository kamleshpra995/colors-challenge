const rgbParser = (values) => {
    return `rgb(${values[0]}, ${values[1]}, ${values[2]})`
}
const hslParser = (values) => {
    return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`
}

export default { hsl: hslParser, rgb: rgbParser };