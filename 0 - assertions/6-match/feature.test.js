const assert = require('node:assert')
const { generateUrn } = require('./feature')

assert.match(generateUrn(), /^urn:dev\.lsantos:us:order:[0-9a-f-]{36}$/)
assert.match(generateUrn('shipping'), /^urn:dev\.lsantos:us:shipping:[0-9a-f-]{36}$/)
