const assert = require('node:assert')
const { isUnderAge } = require('./feature')

assert.ok(isUnderAge(2020))
// Assert is also an alias of ok
assert(isUnderAge(2000) === false)
