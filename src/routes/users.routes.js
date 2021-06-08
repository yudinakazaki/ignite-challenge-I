const { Router } = require('express')
const users = require('../users')
const { v4: uuidv4 } = require('uuid')

const userRoutes = Router()

userRoutes.post('/', (request, response) => {
  const { name, username } = request.body

  users.push({
    id: uuidv4(),
    name,
    username,
    todos: []
  })

  return response.status(201).send()
})

module.exports = userRoutes
