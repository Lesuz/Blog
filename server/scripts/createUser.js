const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/user')

const args = process.argv
const saltRounds = 10

let email
let username
let password
let mongoDbUri

for (const arg of args) {
    if (arg.startsWith('-help'))
        console.log('Usage: node createUser.js -email: -username: -password: -mongoDbUri:')
    else if (arg.startsWith('-email:'))
        email = arg.slice(7)
    else if (arg.startsWith('-username:'))
        username = arg.slice(10)
    else if (arg.startsWith('-password:')) {
        password = arg.slice(10)
    }
    else if (arg.startsWith('-mongoDbUri:'))
        mongoDbUri = arg.slice(12)
}

const Run = async () => {
    try {
        mongoose.connect(mongoDbUri)

        const passwordHash = await bcrypt.hash(password, saltRounds)

        const user = new User({
            email,
            username,
            password: passwordHash
        })

        await user.save()
        console.log("User created successfully!")
    } catch (err) {
        console.error(err)
    }
}

Run()