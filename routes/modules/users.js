const express = require('express')
const router = express.Router()

const User = require('../../models/user')

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {

})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    //    以上用解構賦值可等同於下方四行   
    //    const name = req.body.name
    //    const email = req.body.email
    //    const password = req.body.password
    //    const confirmPassword = req.body.comfirmPassword
    User.findOne({ email }).then(user => {
        if (user) {
            console.log('User already exists.')
            res.render('register', {
                name,
                email,
                password,
                confirmPassword
            })
        } else {
            return User.create({
                name,
                email,
                password
            })
                //上放五行等同於下方
                //   const newUser = new User({
                //       name,
                //       email,
                //       password
                //   })
                //   newUser
                //   .save()
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
        }
    })
})

module.exports = router