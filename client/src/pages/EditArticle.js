import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/NewPost.css'

const EditArticle = () => {


    const { id } = useParams()

    const [article, setArticle] = useState()

    const [content, setContent] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [cardImage, setCardImage] = useState()

    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    // get article by id from tha databse
    useEffect(() => {
        setLoading(true)
        setNotFound(false)
        axios.get(`/api/articles/${id}`)
            .then((response) => {
                console.log(response.data)
                setArticle(response.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setNotFound(true)
            })
    }, [id, setLoading, setNotFound, setArticle])

    // handlers to handle every change in the input fields and save them to their variables
    const getTitleHandler = (e) => {
        const givenTitle = e.target.value
        console.log(givenTitle)
        setTitle(givenTitle)
    }
    const getDescHandler = (e) => {
        const givenDesc = e.target.value
        console.log(givenDesc)
        setDescription(givenDesc)
    }
    const getImageHandler = (e) => {
        const givenImageUrl = e.target.value
        console.log(givenImageUrl)
        setCardImage(givenImageUrl)
    }
    const getContentHandler = (e) => {
        const givenContent = e.target.value
        console.log(givenContent)
        setContent(givenContent)
    }

    // send updated article to the database
    const updateArticle = () => {
        console.log("I am in updateArticle")
        axios.put(`/api/articles/${id}`, {
            title: title,
            description: description,
            image: cardImage,
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
                        <label>Description:</label>
                        <textarea type="text" placeholder='Text seen on card' onChange={getDescHandler} defaultValue={article.description} />
                    </div>
                    <div>
                        <label>Card Image:</label>
                        <input placeholder='Url to the image used in the preview card' onChange={getImageHandler} defaultValue={article.image} />
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


export default EditArticle