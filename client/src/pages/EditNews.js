import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditArticleCard from '../components/EditArticleCard'
import '../styles/EditArticles.css'
import 'font-awesome/css/font-awesome.min.css'

const EditNews = () => {

    const [news, setNews] = useState([])

    const getNews = () => {
        axios.get('/api/othernews')
            .then((response) => {
                console.log(response.data)
                const allNews = response.data
                allNews.sort((a, b) => {
                    return Date.parse(b.release_date) - Date.parse(a.release_date)
                })
                setNews(allNews)
            })
    }

    useEffect(() => getNews(), [])

    return (
        <div className='editarticleswrapper'>
            <div className='editarticlesearch'>
                <h2>Sign Out</h2>
                <div className='links'>
                    <Link to="/editarticles">Articles</Link>
                    <Link to="/editnews">News</Link>
                </div>
                <Link to="/newnews">
                    <button>Add News</button>
                </Link>
                <input placeholder='Search by title' />
            </div>
            <div className='editarticlecontent'>
                <div className='editallarticles'>
                    {news.map(news =>
                        <EditArticleCard key={news.id} article={news} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditNews