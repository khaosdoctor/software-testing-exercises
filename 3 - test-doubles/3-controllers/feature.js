const UserController = require('./controller')

async function include(id, userName) {
  const userController = new UserController()
  let user
  try {
    user = await userController.getUser(id)
    return user
  } catch (error) {
    if (error.message === 'User not found') {
      try {
        user = await userController.createUser(userName)
        return user
      } catch (err) {
        throw err
      }
    } else {
      throw error
    }
  }
}

module.exports = {
  include
}
