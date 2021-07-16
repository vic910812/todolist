const express = require('express')
const { authenticator } = require('../middleware/auth')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')

const ( authenticator ) = require('../middleware/auth')

//router機制是由上而下，若/擺在第一個，其他頁面就會被擋，所以條件寬鬆的route放後面
router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router
