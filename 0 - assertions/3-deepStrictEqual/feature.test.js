const assert = require('node:assert')
const { splitName } = require('./feature')

assert.deepStrictEqual(splitName('Lucas Santos'), { firstName: 'Lucas', lastName: 'Santos' })
