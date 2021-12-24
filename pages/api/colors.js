
import specs from '../back-end/color-spaces';

const buildResponse = (maxCount = 5) => {
    const colors = [];
    const totalSpecs = specs.length;
    while (colors.length < maxCount) {
        const randomIndex = Math.floor(Math.random() * totalSpecs);
        const spec = specs[randomIndex];
        if (spec.getColors) {
            colors.push(spec.getColors());
        }
    }
    return colors;
}

export default function handler(req, res) {
    const colors = buildResponse();
    res.status(200).json(colors)
}