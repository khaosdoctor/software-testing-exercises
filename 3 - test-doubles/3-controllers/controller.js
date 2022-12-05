class UserController {
  #connectionTime
  #db = new Map([
    [1, { id: 1, name: 'John' }],
    [2, { id: 2, name: 'Jane' }],
    [3, { id: 3, name: 'Jack' }],
    [4, { id: 4, name: 'Jill' }],
    [5, { id: 5, name: 'Jenny' }]
  ])

  constructor(connectionTime) {
    this.#connectionTime = connectionTime || Date.now()
  }

  async getUser(id) {
    if (!this.#db.has(id)) throw new Error('User not found')
    const user = this.#db.get(id)
    user.connectedAt = this.#connectionTime
    return user
  }

  async getUsers() {
    return {
      connectedAt: this.#connectionTime,
      results: Array.from(this.#db.values())
    }
  }

  async createUser(userName) {
    if (!userName) throw new Error('User name is required')
    const id = this.#db.size + 1
    this.#db.set(id, { name: userName, id })
    return {
      connectedAt: this.#connectionTime,
      id,
      name: userName
    }
  }
}

module.exports = UserController
