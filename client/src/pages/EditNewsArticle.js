import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/NewPost.css'

const EditNewsArticle = () => {


    const { id } = useParams()

    const [article, setArticle] = useState()

    const [content, setContent] = useState()
    const [title, setTitle] = useState()

    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)



    useEffect(() => {
        setLoading(true)
        setNotFound(false)
        axios.get(`/api/othernews/${id}`)
            .then((response) => {
                setArticle(response.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setNotFound(true)
            })
    }, [id, setLoading, setNotFound, setArticle])

    const getTitleHandler = (e) => {
        const givenTitle = e.target.value
        console.log(givenTitle)
        setTitle(givenTitle)
    }
    const getContentHandler = (e) => {
        const givenContent = e.target.value
        console.log(givenContent)
        setContent(givenContent)
    }

    const updateArticle = () => {
        console.log("I am in updateArticle")
        axios.put(`/api/articles/${id}`, {
            title: title,
            content: content
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    if (loading) {
        return (
            <div>
                <h1>LOADING</h1>
            </div>
        )
    } else if (notFound || !article) {
        return (
            <div>
                <h2>Article Not Found</h2>
            </div>
        )
    }
    else if (article) {

        return (
            <div className='newpostwrapper'>
                <div className='topheader'>
                    <Link to="/editarticles">
                        <button>Cancel</button>
                    </Link>
                    <h2>Update Article</h2>
                    <button onClick={updateArticle}>Update</button>
                </div>
                <div className='newpostform'>
                    <div>
                        <label>Title:</label>
                        <input type="text" placeholder='Title' onChange={getTitleHandler} defaultValue={article.title} />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea placeholder='Content (written in markdown)' onChange={getContentHandler} defaultValue={article.content} />
                    </div>
                </div>
            </div>
        )
    }
}


export default EditNewsArticle