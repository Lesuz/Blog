import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import EditNewsCard from '../components/EditNewsCard'
import '../styles/EditArticles.css'
import 'font-awesome/css/font-awesome.min.css'
import adminService from '../services/adminService'

const EditNews = () => {

    const [searchedNews, setSearchedNews] = useState('')
    const [news, setNews] = useState([])
    const [filteredNews, setFilteredNews] = useState([])

    let history = useHistory()

    // get all news from the database
    const getNews = () => {
        axios.get('/api/othernews')
            .then((response) => {
                console.log(response.data)
                const allNews = response.data
                setNews(allNews)
            })
    }

    useEffect(() => getNews(), [])

    // function to delete news article by id
    const deleteNews = (id) => {
        const res = adminService.deleteNews(id)
    }

    const handleChange = (event) => {
        setSearchedNews(event.target.value)
    }
    // make a copy of the news -array in the database that can be used to filter by the searchword
    useEffect(() => {
        let newsCopy = [...news]
        newsCopy = newsCopy.filter(news =>
            news.title.toLowerCase().includes(searchedNews.toLowerCase()))
        setFilteredNews(newsCopy)
    }, [searchedNews, news])

    const signOut = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div className='editarticleswrapper'>
            <div className='editarticlesearch'>
                <h2 onClick={signOut}>Sign Out</h2>
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