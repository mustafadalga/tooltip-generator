export default function objectStyleToCSS(styleObject) {


    return Object.keys(styleObject).reduce((styleString, key) => {

        let property = `${key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}`
        let value = `: ${styleObject[key]};`;
        styleString += `    ${property}${value}\n`

        return styleString;

    }, "")
}