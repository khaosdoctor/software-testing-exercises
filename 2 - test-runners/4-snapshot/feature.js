async function getUser(id) {
  if (id === 1) {
    return {
      id: 1,
      name: 'John',
      age: 20
    }
  }

  if (id === 2) {
    return {
      id: 2,
      name: 'Jane',
      age: 18
    }
  }

  throw new Error('User not found')
}

module.exports = {
  getUser
}
