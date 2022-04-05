// Routes and mongoose
const express = require('express')
const app = express()
const config = require('./config')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors') //im not sure this is needed

// parse json bodies sent by api clients
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

// routes to what controllers to use
const articleRouter = require('./controllers/articles')
app.use('/api/articles', articleRouter)

const newsRouter = require('./controllers/news')
app.use('/api/othernews', newsRouter)

app.use('/api/signin', (req, res) => {
    res.send({
        token: 'test123'
    })
})

// connecting to database
mongoose.connect(config.MONGODB_URI, {});

var db = mongoose.connection;

// Making sure the connection is working
db.on("error", function () {
    console.log("Connection error!")
});

db.once("open", function () {
    console.log("Connection successful!");
});


app.use(cors())

// in production, serve the react-app build to client
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
    })
}

module.exports = app