module.exports.sum = function (array) {
  if (!array || !Array.isArray(array)) throw new Error('Array is required')
  return array.reduce((acc, curr) => acc + curr, 0)
}
