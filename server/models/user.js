const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema


// schema for author
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [5, 'Username is too short'],
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
})

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema)

module.exports = User