
function checkNumber(num) {
  if (typeof (num) !== 'number') {
    throw new TypeError('the value entered is not of type number')
  }
  if (num < 0) { return 'negative' }
  else if (num > 0) { return 'positive' }
  else { return 'neutral' }
}
module.exports = checkNumber