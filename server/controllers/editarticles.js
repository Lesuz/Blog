const editArticleRouter = require('express').Router()
// import mongoose model
const Article = require('../models/article')

editArticleRouter.get('/:id', async (req, res) => {

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

/* editArticleRouter.put('/:id', async (req, res) => {

    const updatedArticle = req.body;
    await updatedArticle(req.params.id, updatedArticle);
    res.send({ message: 'Article updated.' });
}
)
*/


module.exports = editArticleRouter