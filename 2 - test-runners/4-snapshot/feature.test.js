const { getUser } = require('./feature')

describe('Happy path', () => {
  it('should return the user with the given id from snapshot', async () => {
    const user = await getUser(1)

    expect(user).toMatchSnapshot()
  })

  it('should return the user with the given id from inline snapshot', async () => {
    const user = await getUser(2)

    expect(user).toMatchInlineSnapshot(`
{
  "age": 18,
  "id": 2,
  "name": "Jane",
}
`)
  })
})
