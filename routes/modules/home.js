const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
    const userId = req.user._id
    //拿到全部的TODO資料
    Todo.find({ userId })
       .lean()
       .sort({ _id: 'asc' }) //asc資料會按照順序，desc則是反序
       .then(todos => res.render('index', { todos }))
       .catch(error => console.error(error))
})

module.exports = router