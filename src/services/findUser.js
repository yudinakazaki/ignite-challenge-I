const users = require('../users')

const findUser = (username) => {
  return users.find(user => user.username === username)
}

module.exports = findUser
