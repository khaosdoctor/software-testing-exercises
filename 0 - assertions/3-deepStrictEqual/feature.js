function splitName(name) {
  const [firstName, lastName] = name.split(' ')
  return {
    firstName,
    lastName
  }
}

module.exports = {
  splitName
}
