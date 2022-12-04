const { generateUrn } = require('./feature')

describe('Happy path', () => {
  it('should return a URN', () => {
    expect(generateUrn()).toMatch(/^urn:dev\.lsantos:us:order:[a-f0-9-]{36}$/)
  })
})
