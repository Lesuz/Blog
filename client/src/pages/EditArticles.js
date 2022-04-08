import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import EditArticleCard from '../components/EditArticleCard'
import '../styles/EditArticles.css'
import 'font-awesome/css/font-awesome.min.css'
import adminService from '../services/adminService'

const EditArticles = () => {

    const [searchedArticle, setSearchedArticle] = useState('')
    const [articles, setArticles] = useState([])
    const [filteredArticles, setFilteredArticles] = useState([])

    let history = useHistory()


    // get all articles from the database
    const getArticles = () => {
        axios.get('/api/articles/all')
            .then((response) => {
                console.log(response.data)
                const allArticles = response.data
                setArticles(allArticles)
            })
    }

    useEffect(() => getArticles(), [])

    // function to delete article by id
    const deleteArticle = async (id) => {
        const res = await adminService.deleteArticle(id)
        console.log(res)
        console.log("I am in deleteArticle!")
    }
    const handleChange = (event) => {
        setSearchedArticle(event.target.value)
    }
    // make a copy of the articles -array in the database that can be used to filter by the searchword
    useEffect(() => {
        let articlesCopy = [...articles]
        articlesCopy = articlesCopy.filter(article =>
            article.title.toLowerCase().includes(searchedArticle.toLowerCase()))
        setFilteredArticles(articlesCopy)
    }, [searchedArticle, articles])

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
                <Link to="/newarticle">
                    <button>New Article</button>
                </Link>
                <input placeholder='Search by title' value={searchedArticle} onChange={handleChange} />
            </div>
            <div className='editarticlecontent'>
                <div className='editallarticles'>
                    {filteredArticles.map(article =>
                        <EditArticleCard key={article.id} article={article} deletePost={(() => deleteArticle(article.id))} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditArticles