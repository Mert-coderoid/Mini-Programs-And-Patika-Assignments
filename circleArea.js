const circleArea = (r) => {
    return Math.PI * r * r;
}

const circleCircumference = (r) => {
    return 2 * Math.PI * r;
}

console.log(`yarı çapı 5 olan dairenin çevresi:  ${circleCircumference(5)}`)
console.log(`yarı çapı 5 olan dairenin alanı:  ${circleArea(5)}`)
