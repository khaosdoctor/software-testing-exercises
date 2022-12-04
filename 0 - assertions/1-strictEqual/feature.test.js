const assert = require('node:assert')
const { checkParity } = require('./feature')

//Parity Check
for (let i = 0; i < 100; i++) {
  const parity = checkParity(i)
  if (i % 2 === 0) {
    assert.strictEqual(parity, 'even')
    // assert.strictEqual(parity, 'even', `Expected ${i} to be even`) // asserts can have a message
  } else {
    assert.strictEqual(parity, 'odd')
    // assert.strictEqual(parity, 'odd', `Expected ${i} to be odd`) // asserts can have a message
  }
}

// Strict Equal don't work well with objects
// as they are compared by reference
assert.strictEqual({ a: 1 }, { a: 1 }) // fails because they're different objects

const object = { a: 1 }
const sameObject = object
// passes because they're the same object in reference
assert.strictEqual(object, sameObject)
