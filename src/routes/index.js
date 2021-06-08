const { Router } = require('express')
const usersRoutes = require('./users.routes')
const todosRoutes = require('./todos.routes')

const router = Router()

router.use('/users', usersRoutes)
router.use('/todos', todosRoutes)

module.exports = router
