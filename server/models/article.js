const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Title required.']
    },
    content: {
        type: String,
        require: [true, 'Content required.']
    },
    release_date: {
        type: Date,
        require: [true, 'Please add date.']
    },
    authorId: {
        type: Number
    },
    clicked: {
        type: Number
    }
})

const Article = mongoose.model('articles', ArticleSchema)

module.exports = Article