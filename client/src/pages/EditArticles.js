import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditArticleCard from '../components/EditArticleCard'
import '../styles/EditArticles.css'
import 'font-awesome/css/font-awesome.min.css'

const EditArticles = () => {

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

    const deleteArticle = (id) => {
        console.log(id)
        // const newAllArticles = articles.filter((article) => article.id !== id)
        // setArticles(newAllArticles)

        axios.delete(`/api/articles/${id}`, () => {

        })
        console.log("I am in deleteArticle!")
    }

    useEffect(() => getArticles(), [])
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
                <input placeholder='Search by title' />
            </div>
            <div className='editarticlecontent'>
                <div className='editallarticles'>
                    {articles.map(article =>
                        <EditArticleCard key={article.id} article={article} deleteArticle={(() => deleteArticle(article.id))} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditArticles