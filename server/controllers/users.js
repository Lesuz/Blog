const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const jwt = require('jsonwebtoken')

// import mongoose model
const User = require('../models/user')


userRouter.post('/signin', async (req, res) => {
    const body = req.body

    let user
    // regex -> case insensitive
    if (body.username)
        user = await User.findOne({ username: { $regex: body.username, $options: 'i' } })
    else
        user = null

    // result is true or false
    const correctCredentials = user === null
        ? false
        : await bcrypt.compare(body.password, user.password)

    if (!correctCredentials) {
        res.status(401).json({ message: "Credentials incorrect!" })
        return
    }

    // create token
    const token = jwt.sign({
        username: user.username,
        id: user._id
    },
        process.env.TOKEN_KEY, {
        expiresIn: '28d'
    })

    res.status(200).send({ token })
})

module.exports = userRouter


