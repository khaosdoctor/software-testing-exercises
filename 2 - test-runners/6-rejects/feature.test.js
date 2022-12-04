const { parseName } = require('./feature')

describe('Happy Path', () => {
  it('parses the name', async () => {
    expect(parseName('Lucas Santos')).resolves.toMatchInlineSnapshot(`
{
  "firstName": "Lucas",
  "lastName": "Santos",
}
`)
  })
})

describe('Errors', () => {
  it('throws if the name is blank', async () => {
    expect(parseName('')).rejects.toMatchInlineSnapshot(`[Error: Name must not be blank]`)
  })
})
