import getRandomNumber from '../util';

const rgbSpec = () => {
    return {
        type: 'rgb',
        values: [getRandomNumber(255), getRandomNumber(255), getRandomNumber(255)],
    }
}
export default rgbSpec;