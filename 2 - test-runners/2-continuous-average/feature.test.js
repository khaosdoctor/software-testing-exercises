const { average } = require('./feature.js')

describe('Happy path', () => {
  it('should return the average of the numbers in the array', () => {
    expect(average([1, 2, 3, 4, 5])).toBe((3).toFixed(2))
  })
})

describe('Edge cases', () => {
  it('should return 0 if the array is empty', () => {
    expect(average([])).toBe(0)
  })
})

describe('Errors', () => {
  it('should throw an error if the argument is not an array', () => {
    expect(() => average('not an array')).toThrow(new Error('Not a list of numbers'))
  })

  it('should throw an error if the array contains non-numbers', () => {
    expect(() => average([1, 2, 'not a number'])).toThrow(new Error('Some of the arguments are not numbers'))
  })

  it('should throw an error if the array is not provided', () => {
    expect(() => average()).toThrow(new Error('Numbers array is required'))
  })
})
