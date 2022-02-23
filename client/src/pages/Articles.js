import '../styles/Articles.css'
import 'font-awesome/css/font-awesome.min.css'
import { useEffect, useState } from 'react'

const Article = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <a href='#'>Read more...</a>
        </div>
    )
}

const Articles = () => {

    /*const dummyArticles = [
        { "title": "My first blog post", "content": "This is the content of my first blog post.", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
        { "title": "My second blog post", "content": "This is the content of my second blog post.", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
    ]
    */

    const [searchedArticle, setSearchedArticle] = useState('')
    const [articles, setArticles] = useState([])
    // const [filteredArticles, setFilteredArticles] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'http://localhost:3001/api/articles/all',
            )
            const json = await res.json()
            setArticles(json)
            console.log(articles)
        }
        fetchData()
    })

    const handleChange = (event) => {
        setSearchedArticle(event.target.value)
    }

    /*useEffect(() => {
        let articlesCopy = [...articles]
        articlesCopy = articlesCopy.filter(article =>
            article.title.toLowerCase().includes(article.toLowerCase()))
        setFilteredArticles(articlesCopy)
    }, [searchedArticle, articles])
*/
    return (
        <div className='articles'>
            <div className='searchbar'>
                <i class='fa fa-search'></i>
                <input
                    type="text"
                    placeholder="Search for an article..."
                    value={searchedArticle}
                    onChange={handleChange}
                />
            </div>
            <div className='articlecontent'>
                <div className='allarticles'>
                    {articles.map(article =>
                        <div style={{
                            backgroundImage: 'url(' + article.image + ')'
                        }} className='articlebanner'>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <a href='#'>Read more...</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Articles