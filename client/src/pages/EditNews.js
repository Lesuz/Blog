import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditArticleCard from '../components/EditArticleCard'
import '../styles/EditArticles.css'
import 'font-awesome/css/font-awesome.min.css'

const EditNews = () => {

    const [searchedNews, setSearchedNews] = useState('')
    const [news, setNews] = useState([])
    const [filteredNews, setFilteredNews] = useState([])

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

    const handleChange = (event) => {
        setSearchedNews(event.target.value)
    }

    useEffect(() => {
        let newsCopy = [...news]
        newsCopy = newsCopy.filter(news =>
            news.title.toLowerCase().includes(searchedNews.toLowerCase()))
        setFilteredNews(newsCopy)
    }, [searchedNews, news])

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
                <input placeholder='Search by title' value={searchedNews} onChange={handleChange} />
            </div>
            <div className='editarticlecontent'>
                <div className='editallarticles'>
                    {filteredNews.map(news =>
                        <EditArticleCard key={news.id} article={news} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditNews