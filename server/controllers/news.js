const newsRouter = require('express').Router()

// import mongoose model
const News = require('../models/othernews')


newsRouter.get('/', async (req, res) => {

    const results = await News.find()

    console.log(results)
    res.status(200).json(results)
})

newsRouter.post('/submit', async (req, res) => {

    const body = req.body

    const news = new News({
        title: body.title,
        content: body.content,
        release_date: new Date(),
        authorId: '5f87ac56842e500d044853dd'
    })

    try {
        await news.save()
        res.status(200).json(news)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }

})

newsRouter.delete('/:id', async (req, res) => {

    let id = req.params.id

    await News.findByIdAndDelete(id, (err, results) => {
        if (err) console.log(err)

        res.status(200).json(results)
    })

})
module.exports = newsRouter