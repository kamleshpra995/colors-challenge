import rgbSpec from './rgb';
import hslSpec from './hsl';

const specs = [{
    type: 'rgb',
    getColors: rgbSpec
}, {
    type: 'hsl',
    getColors: hslSpec
}
]
export default specs;