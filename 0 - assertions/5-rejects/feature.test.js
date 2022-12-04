const assert = require('node:assert')
const { parseName } = require('./feature')

parseName('Lucas Santos').then((parsed) => {
  assert.deepStrictEqual(parsed, { firstName: 'Lucas', lastName: 'Santos' })
})

// You can assert that a function throws an error of a specific type
assert.rejects(async () => parseName(''), new Error('Name must not be blank'))

// Or if the error matches an object
assert.rejects(async () => parseName(''), { message: 'Name must not be blank' })

// Or execute a function with the error
assert.rejects(
  async () => parseName(''),
  (err) => {
    assert.strictEqual(err.message, 'Name must not be blank')
    assert(err instanceof Error)
    return true
  }
)
