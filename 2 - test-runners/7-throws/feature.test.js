const { parseName } = require('./feature')

describe('Happy Path', () => {
  expect(parseName('Lucas Santos')).toEqual({ firstName: 'Lucas', lastName: 'Santos' })
})

describe('Errors', () => {
  it('throws if the name is blank', () => {
    expect(() => parseName('')).toThrow(new Error('Name must not be blank'))
  })
})
