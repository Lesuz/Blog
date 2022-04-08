const newsRouter = require('express').Router()

// import mongoose model
const News = require('../models/othernews')

// route to get all news articles from database
newsRouter.get('/', async (req, res) => {

    // save given data into variable
    const results = await News.find()
    // send variable with the data as a response
    res.status(200).json(results)
})

// route to post new news article to the databse
newsRouter.post('/submit', async (req, res) => {

    if (!req.isAdmin)
        return res.status(401).json({ message: 'Protected route!' })

    const body = req.body

    // sainvg the data given in the frontend into variables given by the controller
    const news = new News({
        title: body.title,
        content: body.content,
        release_date: new Date(),
        authorId: req.token.id
    })

    // try to save the information into the database or give error
    try {
        await news.save()
        res.status(200).json(news)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

// used to edit news article
/*newsRouter.get('/:id', async (req, res) => {

    const id = req.params.id
    console.log("news id: " + id)

    try {
        const results = await News.findById(id)
        console.log(results)
        res.status(200).json(results)

    } catch (err) {
        res.status(404).json({ message: 'No news found.' })
    }
})
*/

/*newsRouter.put('/:id', async (req, res) => {

    const id = req.params.id
    console.log(id)
    const body = req.body
    console.log(body)

    Article.findByIdAndUpdate({ _id: req.params.id }, body, { new: true })
        .then(updatedArticle => res.json(updatedArticle))
        .catch(err => res.status(400).json("Error: " + err))
})
*/

// delete news article from the database
newsRouter.delete('/:id', async (req, res) => {

    if (!req.isAdmin)
        return res.status(401).json({ message: 'Protected route!' })

    // get the news article id
    let id = req.params.id

    // find the news article by id and delete it
    await News.findByIdAndDelete(id, (err, results) => {
        // if deletion fails, error message is send into console
        if (err) console.log(err)
        res.status(200).json(results)
    })

})
module.exports = newsRouter