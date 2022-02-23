const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Title required.']
    },
    description: {
        type: String,
        required: [true, 'Please add a short description about the article.']
    },
    image: {
        type: String,
        required: [true, 'Please add image.']
    },
    content: {
        type: String,
        require: [true, 'Content required.']
    },
    release_date: {
        type: Date,
        require: [true]
    },
    authorId: {
        type: Schema.Types.ObjectId
    },
    clickrate: {
        type: Number
    }
})

const Article = mongoose.model('articles', ArticleSchema)

ArticleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

module.exports = Article