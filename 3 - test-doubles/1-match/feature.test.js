const crypto = require('crypto')
crypto.randomUUID = jest.fn(() => '1234')

const { generateUrn } = require('./feature')

describe('Happy path', () => {
  it('should return a URN', () => {
    expect(generateUrn()).toMatchInlineSnapshot(`"urn:dev.lsantos:us:order:1234"`)
  })
})
