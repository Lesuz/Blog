// Routes and mongoose
const express = require('express')
const app = express()
const config = require('./config')
const path = require('path')
// const cors = require('cors') im not sure this is needed

// parse json bodies sent by api clients
app.use(express.json())
// app.use(cors())


// routes 


// in production, serve the react-app build to client
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
    })
}

module.exports = app