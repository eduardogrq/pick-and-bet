
const express = require('express')
const cors = require('cors')
const usersRoter = require('./routers/users')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRoter)

module.exports = app