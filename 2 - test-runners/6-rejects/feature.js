async function parseName(name) {
  if (name === '') {
    throw new Error('Name must not be blank')
  }
  return {
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1]
  }
}

module.exports = {
  parseName
}
