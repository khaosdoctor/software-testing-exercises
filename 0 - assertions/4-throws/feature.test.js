const assert = require('node:assert')
const { parseName } = require('./feature')

assert.deepStrictEqual(parseName('Lucas Santos'), { firstName: 'Lucas', lastName: 'Santos' })

// You can assert that a function throws an error of a specific type
assert.throws(() => parseName(''), new Error('Name must not be blank'))

// Or if the error matches an object
assert.throws(() => parseName(''), { message: 'Name must not be blank' })
