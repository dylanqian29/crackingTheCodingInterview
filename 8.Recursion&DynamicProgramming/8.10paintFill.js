function paintFill(screenArr, row, column, newColor) {
  if (row < 0 || row > screenArr.length || column < 0 || column > screenArr[0].length || !newColor) {
    return screenArr
  }
  let oldColor = screenArr[row][column]
  paint(screenArr, row, column, oldColor, newColor)
  return screenArr
}

function paint(screenArr, row, column, oldColor, newColor) {
  if (row < 0 || row > screenArr.length || column < 0 || column > screenArr[0].length) {
    return;
  }
  if (screenArr[row][column] === oldColor) {
    screenArr[row][column] = newColor
    paint(screenArr, row + 1, column, oldColor, newColor)
    paint(screenArr, row - 1, column, oldColor, newColor)
    paint(screenArr, row, column + 1, oldColor, newColor)
    paint(screenArr, row, column - 1, oldColor, newColor)
  }

}

const screenArr = [
  ['green', 'blue', 'yellow', 'orange'],
  ['green', 'yellow', 'yellow', 'orange'],
  ['green', 'blue', 'yellow', 'orange'],
  ['green', 'blue', 'blue', 'orange']
];

paintFill(screenArr, 1, 2, 'green');