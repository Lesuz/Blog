const mongoose = require('mongoose')
/*
const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    release_date: Date,
    author: authorId
}
*/
const Othernews = mongoose.model(
    "News",
    {
        title: String,
        content: String,
        release_date: Date,
        author: authorId
    },
    // name of collection
    "News"
);


// var Article = mongoose.model("Article", articleSchema)

module.exports = Othernews