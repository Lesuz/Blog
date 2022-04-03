const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EditedArticleSchema = new Schema({
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
    }
})

const EditedArticle = mongoose.model('articles', EditedArticleSchema)

EdiitedArticleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

module.exports = EditedArticle