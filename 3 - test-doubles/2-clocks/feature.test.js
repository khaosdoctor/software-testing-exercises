const { getUser } = require('./feature')

describe('Happy path', () => {
  // First solution
  it('should return a user', () => {
    const fixedDate = new Date('2020-01-01T00:00:00.000Z')
    const spy = jest.spyOn(global, 'Date').mockImplementation(() => fixedDate)
    const user = getUser(1)

    expect(user).toEqual({
      id: 1,
      name: 'John',
      createdAt: '2020-01-01T00:00:00.000Z'
    })

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  // Second solution
  it('should return a user', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2022-01-01T00:00:00.000Z'))

    const user = getUser(1)
    expect(user).toEqual({
      id: 1,
      name: 'John',
      createdAt: '2022-01-01T00:00:00.000Z'
    })

    jest.useRealTimers()
  })
})
