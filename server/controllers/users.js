const bcrypt = require('bcrypt')
const userRouter = require('express').Router()

// import mongoose model
const User = require('../models/user')

const saltRounds = 10


userRouter.post('/signup', (req, res) => {

    const body = req.body
    const hashedPassword = bcrypt.hash(body.password, saltRounds)



})

userRouter.post('/signin', (req, res) => {

    const body = req.body

    // look for user in database

})

module.exports = userRouter


