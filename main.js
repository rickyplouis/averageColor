const testColor1 = "#ff0000"
const testColor2 = "#004fff"

const convertHexToNum = (num) => parseInt(num, 16)
const convertNumToHex = (num) => parseInt(num).toString(16).toUpperCase()
const colorToArray = (color) => color.substring(1).split('')
const arrayToChunks = (array) => [array[0] + array[1], array[2] + array[3], array[4] + array[5]]


const colorToDecimal = (color) => {
  let hexArray = arrayToChunks(colorToArray(color))
  let decimalArray = hexArray.map((hex) => convertHexToNum(hex))
  return decimalArray
}

const averageColors = (color1, color2) => {
  let firstColor = colorToDecimal(color1)
  let secondColor = colorToDecimal(color2)
  return firstColor.map((color, index) => {
    let avgColor = convertNumToHex(parseInt((parseInt(color) + parseInt(secondColor[index])) / 2).toFixed(0))
    return avgColor.length === 1 ? '0' + avgColor : avgColor;
  })
}

console.log(averageColors(testColor1, testColor2))
