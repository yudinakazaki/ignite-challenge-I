const { Router } = require('express')
const checksExistsUserAccount = require('../middlewares/checksExistsUserAccount')
const { v4: uuidv4 } = require('uuid')

const todosRoutes = Router()

todosRoutes.get('/', checksExistsUserAccount, (request, response) => {
  const user = request.user

  return response.json({ TODOS: user.todos })
})

todosRoutes.post('/', checksExistsUserAccount, (request, response) => {
  const user = request.user
  const { title, deadline } = request.body

  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    createdAt: new Date()
  }

  user.todos.push(newTodo)

  return response.status(201).json(newTodo)
})

module.exports = todosRoutes
