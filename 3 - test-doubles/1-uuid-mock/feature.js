const { randomUUID } = require('crypto')

function generateUrn(resource = 'order') {
  return `urn:dev.lsantos:us:${resource}:${randomUUID()}`
}

module.exports = {
  generateUrn
}
