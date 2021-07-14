const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
    //拿到全部的TODO資料
    Todo.find()
        .lean()
        .sort({ _id: 'asc' }) //asc資料會按照順序，desc則是反序
        .then(todos => res.render('index', { todos: todos }))
        .catch(error => console.error(error))
})

module.exports = router