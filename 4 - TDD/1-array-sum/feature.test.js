const { describe, it } = require('node:test')
const assert = require('node:assert')
const { sum } = require('./feature')

describe('array-sum', () => {
  it('should sum an array of numbers', () => {
    const result = sum([1, 2, 3])
    assert.strictEqual(result, 6)
  })

  it('should sum an array of numbers with negative numbers', () => {
    const result = sum([1, -2, 3])
    assert.strictEqual(result, 2)
  })

  it('should error if there is no array', () => {
    assert.throws(() => sum(), { message: 'Array is required' })
  })
})
