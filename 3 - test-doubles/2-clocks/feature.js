function getUser(id) {
  if (id !== 1) throw new Error('User not found')
  const user = {
    id: 1,
    name: 'John',
    createdAt: new Date().toISOString()
  }
  return user
}

module.exports = {
  getUser
}
