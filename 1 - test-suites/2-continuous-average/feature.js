function average(
  arr = (() => {
    throw new Error('Numbers array is required')
  })()
) {
  if (!Array.isArray(arr)) throw new Error('Not a list of numbers')
  if (arr.some((n) => typeof n !== 'number')) throw new Error('Some of the arguments are not numbers')

  if (arr.length === 0) return 0
  return (arr.reduce((acc, curr) => acc + curr, 0) / arr.length).toFixed(2)
}

module.exports = { average }
