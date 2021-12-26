import getRandomNumber from '../util';

/* 
ranges for hsl
Hue: 0-360
Saturation: 0-100%
Lightness: 0-100%
*/
const hslSpec = () => {
    return {
        type: 'hsl',
        values: [getRandomNumber(360), getRandomNumber(100), getRandomNumber(100)],
    }
}
export default hslSpec;