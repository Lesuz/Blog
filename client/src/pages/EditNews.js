import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditNewsCard from '../components/EditNewsCard'
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
                setNews(allNews)
            })
    }

    useEffect(() => getNews(), [])

    const deleteNews = (id) => {
        console.log(id)
        axios.delete(`/api/othernews/${id}`, () => {
        })
        console.log("news deleted!")
    }

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
                        <EditNewsCard key={news.id} news={news} deletePost={(() => deleteNews(news.id))} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditNews