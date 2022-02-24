const mongoose = require('mongoose')
const Schema = mongoose.Schema


const NewsSchema = new Schema({
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
        require: [true]
    },
    authorId: {
        type: Schema.Types.ObjectId
    }
})

const News = mongoose.model('news', NewsSchema)

NewsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

module.exports = News
