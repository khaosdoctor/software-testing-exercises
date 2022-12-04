const { describe, it } = require('node:test')
const assert = require('node:assert')
const { average } = require('./feature.js')

describe('Happy path', () => {
  it('should return the average of the numbers in the array', () => {
    assert.strictEqual(average([1, 2, 3, 4, 5]), (3).toFixed(2))
  })
})

describe('Edge cases', () => {
  it('should return 0 if the array is empty', () => {
    assert.strictEqual(average([]), 0)
  })
})

describe('Errors', () => {
  it('should throw an error if the argument is not an array', () => {
    assert.throws(() => average('not an array'), new Error('Not a list of numbers'))
  })

  it('should throw an error if the array contains non-numbers', () => {
    assert.throws(() => average([1, 2, 'not a number']), new Error('Some of the arguments are not numbers'))
  })

  it('should throw an error if the array is not provided', () => {
    assert.throws(() => average(), new Error('Numbers array is required'))
  })
})
