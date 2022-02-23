import handcuffed from '../images/handcuffs.jpg'
import '../styles/Homepage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

import ArticleCard from '../components/ArticleCard'

const Homepage = () => {

    //articles has all articles in the newest to oldest reinfolge
    const [articles, setArticles] = useState([])
    // const [filteredArticles, setFilteredArticles] = useState([])

    const getArticles = () => {
        axios.get('/api/articles/all')
            .then((response) => {
                console.log(response.data)
                const allArticles = response.data
                allArticles.sort((a, b) => {
                    return Date.parse(b.release_date) - Date.parse(a.release_date)
                })
                setArticles(allArticles)
            })
    }

    useEffect(() => getArticles(), [])


    return (
        <div className='homepage'>
            <div className='banner'>
                <img className='bannerimage' src={handcuffed} alt='newest article pic' />
                <div className='latestarticle'>
                    {articles.length >= 1 && <div>
                        <h3>{articles[0].title}</h3>
                        <p>{articles[0].description}</p>
                        <a href='#'>Read more...</a>
                    </div>}
                </div>
            </div>
            <div className='content'>
                <h2>Other Popular Articles</h2>
                <div className='populararticles'>
                    {articles.slice(1, 3).map(article =>
                        <ArticleCard key={article.id} article={article} />
                    )}
                </div>
            </div>
        </div >
    )
}

export default Homepage