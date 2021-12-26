const rgbParser = (values) => {
    return `rgb(${values[0]}, ${values[1]}, ${values[2]})`
}
const hslParser = (values) => {
    return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`
}
const parsers = { hsl: hslParser, rgb: rgbParser }
export default parsers;