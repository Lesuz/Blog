const articleRouter = require('express').Router()

// import mongoose model
const Article = require('../models/article')


articleRouter.get('/all', async (req, res,) => {
    /*Article.find({},)
        .then((data) => res.json(data))
        .catch(next)
    */

    const results = await Article.find({})

    console.log(results)
    res.status(200).json(results)
})

articleRouter.post('/all', (req, res) => {


    const title = req.body.title
    const description = req.body.description
    const content = req.body.content
    const authorId = req.body.authorId
    const clickrate = req.body.clickrate

    const article = new Article({
        title: 'title',
        description: 'description',
        content: 'content',
        release_date: new Date(),
        authorId: 'authorId',
        clickrate: 'clickrate'
    })

    res.status(200).json(article)

    article.save()
})

articleRouter.get('/:id', (req, res) => {

})

articleRouter.post('/:id', (req, res) => {

})

// delete/:id
articleRouter.delete('/:id', async (req, res) => {

    let id = req.params.id

    let result = await Article.findByIdAndDelete(id, (err, results) => {
        if (err) console.log(err)

        res.status(200).json(results)
    })
})

module.exports = articleRouter
