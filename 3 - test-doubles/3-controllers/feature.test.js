const { include } = require('./feature')
const UserController = require('./controller')

let mocks = {
  getUser: jest.spyOn(UserController.prototype, 'getUser'),
  createUser: jest.spyOn(UserController.prototype, 'createUser')
}

const fixture = {
  id: 1,
  name: 'John',
  connectedAt: new Date('2022-01-01T00:00:00.000Z').getTime()
}

describe('include', () => {
  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2022-01-01T00:00:00.000Z'))
  })

  afterAll(() => {
    jest.useRealTimers()
    jest.resetAllMocks()
  })

  describe('include', () => {
    it('should return a user', async () => {
      mocks.getUser.mockResolvedValueOnce(fixture)

      const user = await include(1, 'John')
      expect(user).toStrictEqual(fixture)
      expect(mocks.getUser).toHaveBeenCalledTimes(1)
    })

    it('should error when there is no name', async () => {
      mocks.getUser.mockRejectedValueOnce(new Error('User not found'))
      expect(include(1)).rejects.toThrow('User name is required')
      expect(mocks.getUser).toHaveBeenCalled()
    })

    it('should create user when there is no user', async () => {
      mocks.getUser.mockRejectedValueOnce(new Error('User not found'))
      mocks.createUser.mockResolvedValueOnce(fixture)
      expect(include(1, 'John')).resolves.toStrictEqual(fixture)
      expect(mocks.getUser).toHaveBeenCalled()
      expect(mocks.createUser).toHaveBeenCalled()
    })
  })
})
