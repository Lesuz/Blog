import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditArticleCard from '../components/EditArticleCard'
import '../styles/EditArticles.css'
import 'font-awesome/css/font-awesome.min.css'

const EditArticles = () => {

    const [searchedArticle, setSearchedArticle] = useState('')
    const [articles, setArticles] = useState([])
    const [filteredArticles, setFilteredArticles] = useState([])

    const getArticles = () => {
        axios.get('/api/articles/all')
            .then((response) => {
                console.log(response.data)
                const allArticles = response.data
                setArticles(allArticles)
            })
    }

    const deleteArticle = (id) => {
        console.log(id)
        // const newAllArticles = articles.filter((article) => article.id !== id)
        // setArticles(newAllArticles)

        axios.delete(`/api/articles/${id}`, () => {

        })
        console.log("I am in deleteArticle!")
    }

    useEffect(() => getArticles(), [])

    const handleChange = (event) => {
        setSearchedArticle(event.target.value)
    }

    useEffect(() => {
        let articlesCopy = [...articles]
        articlesCopy = articlesCopy.filter(article =>
            article.title.toLowerCase().includes(searchedArticle.toLowerCase()))
        setFilteredArticles(articlesCopy)
    }, [searchedArticle, articles])


    return (
        <div className='editarticleswrapper'>
            <div className='editarticlesearch'>
                <h2>Sign Out</h2>
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
                        <EditArticleCard key={article.id} article={article} deleteArticle={(() => deleteArticle(article.id))} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditArticles