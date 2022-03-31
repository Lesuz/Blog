const articleRouter = require('express').Router()

// import mongoose model
const Article = require('../models/article')


articleRouter.get('/all', async (req, res) => {

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

articleRouter.get('/:id', async (req, res) => {

    const id = req.params.id
    console.log(id)

    try {
        const results = await Article.findById(id)
        console.log(results)
        res.status(200).json(results)

    } catch (err) {
        res.status(404).json({ message: 'No article found.' })
    }

})

articleRouter.patch('/patch', async (req, res) => {

})

/*articleRouter.post('/:id', (req, res) => {

})*/

articleRouter.delete('/:id', async (req, res) => {

    let id = req.params.id

    await Article.findByIdAndDelete(id, (err, results) => {
        if (err) console.log(err)

        res.status(200).json(results)
    })
})

module.exports = articleRouter
