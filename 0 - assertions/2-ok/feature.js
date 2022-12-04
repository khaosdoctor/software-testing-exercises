function isUnderAge(birthYear) {
  return new Date().getFullYear() - birthYear < 21
}

module.exports = {
  isUnderAge
}
