const testColor1 = "#ff0000"
const testColor2 = "#004fff"

const convertHexToNum = (num) => parseInt(num, 16)
const convertNumToHex = (num) => parseInt(num).toString(16).toUpperCase()
const colorToArray = (color) => color.substring(1).split('')
const arrayToChunks = (array) => [array[0] + array[1], array[2] + array[3], array[4] + array[5]]
const colorToDecimalArray = (color) => arrayToChunks(colorToArray(color)).map((hex) => convertHexToNum(hex))

const getArrayOfAverages = (color1, color2) => {
  let averages = [];
  for (let x = 0; x < 3; x += 1) {
    averages.push(convertNumToHex((colorToDecimalArray(color1)[x] + colorToDecimalArray(color2)[x]) / 2))
  }
  return averages
}

const convertArrayToRGB = (array) => array.reduce((acc, sum) => acc + sum, '#')

console.log(convertArrayToRGB(getArrayOfAverages(testColor1, testColor2)))
