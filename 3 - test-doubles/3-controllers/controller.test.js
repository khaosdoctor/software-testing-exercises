const UserController = require('./controller')

describe('UserController', () => {
  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2022-01-01T00:00:00.000Z'))
  })

  afterAll(() => {
    jest.useRealTimers()
    jest.resetAllMocks()
  })

  describe('getUser', () => {
    it('should return a user', async () => {
      const userController = new UserController()
      const user = await userController.getUser(1)
      expect(user).toStrictEqual({
        id: 1,
        name: 'John',
        connectedAt: new Date('2022-01-01T00:00:00.000Z').getTime()
      })
    })

    it('should error when there is no user', async () => {
      const userController = new UserController()
      expect(userController.getUser(6)).rejects.toThrow('User not found')
    })
  })

  describe('createUser', () => {
    it('should create a user', async () => {
      const userController = new UserController()
      const user = await userController.createUser('John')
      expect(user).toStrictEqual({
        id: 6,
        name: 'John',
        connectedAt: new Date('2022-01-01T00:00:00.000Z').getTime()
      })
    })

    it('should error when there is no name', async () => {
      const userController = new UserController()
      expect(userController.createUser()).rejects.toThrow('User name is required')
    })
  })

  describe('getUsers', () => {
    it('should return all users', async () => {
      const userController = new UserController()
      const users = await userController.getUsers()
      expect(users).toStrictEqual({
        connectedAt: new Date('2022-01-01T00:00:00.000Z').getTime(),
        results: [
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' },
          { id: 3, name: 'Jack' },
          { id: 4, name: 'Jill' },
          { id: 5, name: 'Jenny' }
        ]
      })
    })
  })
})
