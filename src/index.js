const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const checksExistsUserAccount = require('./middlewares/checksExistsUserAccount')

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
})

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
})

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
})

module.exports = app
