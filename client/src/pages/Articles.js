import '../styles/Articles.css'
import 'font-awesome/css/font-awesome.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

import ArticleCard from '../components/ArticleCard'

const Articles = () => {

    const [searchedArticle, setSearchedArticle] = useState('')
    const [articles, setArticles] = useState([])
    // const [filteredArticles, setFilteredArticles] = useState([])

    const getArticles = () => {
        axios.get('/api/articles/all')
            .then((response) => {
                console.log(response.data)
                const allArticles = response.data
                setArticles(allArticles)
            })
    }

    useEffect(() => getArticles(), [])

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
                <i className='fa fa-search'></i>
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
                        <ArticleCard key={article.id} article={article} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Articles