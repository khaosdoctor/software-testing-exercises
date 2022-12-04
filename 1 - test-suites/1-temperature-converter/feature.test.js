const { describe, it } = require('node:test')
const assert = require('node:assert')
const { converter } = require('./feature')

const tests = [
  { C: 100, F: 212, K: 373.15 },
  { C: 0, F: 32, K: 273.15 },
  { C: 22.5, F: 72.5, K: 295.65 },
  { C: -10, F: 14, K: 263.15 },
  { C: -30.45, F: -22.81, K: 242.7 }
]

describe('Error path', () => {
  it('should throw an error when invalid temperature is provided', () => {
    assert.throws(() => converter('invalid'), { message: 'Invalid temperature' })
  })

  it('should throw an error when invalid unit is provided', () => {
    assert.throws(() => converter(100, 'invalid'), { message: 'Invalid unit' })
    assert.throws(() => converter(100, 'C', 'invalid'), { message: 'Invalid unit' })
  })
})

describe('Happy path', () => {
  it('should convert temperature from Celsius to Fahrenheit', () => {
    tests.forEach((test) => {
      assert.strictEqual(converter(test.C, 'C', 'F').toFixed(2), test.F.toFixed(2))
    })
  })

  it('should convert temperature from Celsius to Kelvin', () => {
    tests.forEach((test) => {
      assert.strictEqual(converter(test.C, 'C', 'K').toFixed(2), test.K.toFixed(2))
    })
  })

  it('should convert temperature from Fahrenheit to Celsius', () => {
    tests.forEach((test) => {
      assert.strictEqual(converter(test.F, 'F', 'C').toFixed(2), test.C.toFixed(2))
    })
  })

  it('should convert temperature from Fahrenheit to Kelvin', () => {
    tests.forEach((test) => {
      assert.strictEqual(converter(test.F, 'F', 'K').toFixed(2), test.K.toFixed(2))
    })
  })

  it('should convert temperature from Kelvin to Celsius', () => {
    tests.forEach((test) => {
      assert.strictEqual(converter(test.K, 'K', 'C').toFixed(2), test.C.toFixed(2))
    })
  })

  it('should convert temperature from Kelvin to Fahrenheit', () => {
    tests.forEach((test) => {
      assert.strictEqual(converter(test.K, 'K', 'F').toFixed(2), test.F.toFixed(2))
    })
  })

  it('should have the same temperature when converting between equal units', () => {
    tests.forEach((test) => {
      assert.strictEqual(converter(test.C, 'C', 'C').toFixed(2), test.C.toFixed(2))
      assert.strictEqual(converter(test.F, 'F', 'F').toFixed(2), test.F.toFixed(2))
      assert.strictEqual(converter(test.K, 'K', 'K').toFixed(2), test.K.toFixed(2))
    })
  })
})
