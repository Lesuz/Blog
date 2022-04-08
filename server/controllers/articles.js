const articleRouter = require('express').Router()

// import mongoose model
const Article = require('../models/article')

// route to get all articles
articleRouter.get('/all', async (req, res) => {

    // save all articles into a varibale that is send as a response to the request made in the frontend
    const results = await Article.find()

    res.status(200).json(results)
})

// route to make a new article post and save it into the database
articleRouter.post('/submit', async (req, res) => {

    if (!req.isAdmin)
        return res.status(401).json({ message: 'Protected route!' })

    const body = req.body

    // saving the data given in the frontend into variables given by the controller
    const article = new Article({
        title: body.title,
        description: body.description,
        content: body.content,
        image: body.image,
        release_date: new Date(),
        authorId: req.token.id,
        clickrate: 0
    })

    // try to save the information into the database or give error
    try {
        await article.save()
        res.status(200).json(article)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

// route to get article by id
articleRouter.get('/:id', async (req, res) => {

    const id = req.params.id

    // try to get the article by id or give error message
    try {
        const results = await Article.findById(id)
        console.log(results)
        res.status(200).json(results)

    } catch (err) {
        res.status(404).json({ message: 'No article found.' })
    }

})

// route to edit existing article
articleRouter.put('/:id', async (req, res) => {

    if (!req.isAdmin)
        return res.status(401).json({ message: 'Protected route!' })

    const body = req.body

    // find article by id and update only the parts that have changed
    Article.findByIdAndUpdate({ _id: req.params.id }, body, { new: true })
        .then(updatedArticle => res.json(updatedArticle))
        .catch(err => res.status(400).json("Error: " + err))
})

// route to delete article by id
articleRouter.delete('/:id', async (req, res) => {

    if (!req.isAdmin)
        return res.status(401).json({ message: 'Protected route!' })

    // get the news article id
    let id = req.params.id

    // find the article by id and delete it
    await Article.findByIdAndDelete(id, (err, results) => {
        // if deletion fails, error message is send into console
        if (err) console.log(err)
        res.status(200).json(results)
    })
})

module.exports = articleRouter
