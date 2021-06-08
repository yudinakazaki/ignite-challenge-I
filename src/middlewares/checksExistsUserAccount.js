const findUser = require('../services/findUser')

const checksExistsUserAccount = (request, response, next) => {
  const { username } = request.headers

  const usernameExists = findUser(username)

  if (!usernameExists) throw new Error('Username does not exist')
  request.user = usernameExists
  next()
}

module.exports = checksExistsUserAccount
