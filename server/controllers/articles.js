const articleRouter = require('express').Router()

// import mongoose model
const Article = require('../models/article')


articleRouter.get('/all', async (req, res) => {
    /*Article.find({},)
        .then((data) => res.json(data))
        .catch(next)
    */

    const results = await Article.find()

    console.log(results)
    res.status(200).json(results)
})

articleRouter.post('/submit', async (req, res) => {
    const body = req.body

    const article = new Article({
        title: body.title,
        description: body.description,
        content: body.content,
        image: body.image,
        release_date: new Date(),
        authorId: '5f87ac56842e500d044853dd',
        clickrate: 0
    })

    try {
        await article.save()
        res.status(200).json(article)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

articleRouter.get('/:id', (req, res) => {

})

articleRouter.post('/:id', (req, res) => {

})

articleRouter.delete('/:id', async (req, res) => {

    let id = req.params.id

    let result = await Article.findByIdAndDelete(id, (err, results) => {
        if (err) console.log(err)

        res.status(200).json(results)
    })
})

module.exports = articleRouter
