const articleRouter = require('express').Router()

// import mongoose model
const Article = require('../models/article')




articleRouter.post('/api/articles/all', (res, req) => {
    if (req.body) {
        Article.create(req.body)
            .then(data => res.json(data))
    } else {
        res.json({
            error: 'The input field is empty'
        })
    }

})

articleRouter.get('/api/articles/:id', (res, req) => {

})

articleRouter.post('/api/articles/:id', (res, req) => {

})

// maybe /api/articles/delete/:id
articleRouter.delete('/api/articles/:id', async (res, req) => {

    let id = req.params.id

    let result = await Article.findByIdAndDelete(id, (err, results) => {
        if (err) console.log(err)

        res.status(200).json(results)
    })
})

module.exports = articleRouter
