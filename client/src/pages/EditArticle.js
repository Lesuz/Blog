import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/NewPost.css'

const EditArticle = () => {


    const { id } = useParams()

    const [article, setArticle] = useState()

    const [content, setContent] = useState()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cardImage, setCardImage] = useState('')

    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    // TODO - save input and textare texts into variable to store in the database

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

    const updateArticle = () => {
        console.log("I am in submitArticle")
        axios.patch('api/articles/submit', {
            title: title,
            content: content,
            description: description,
            image: cardImage
        })
    }

    useEffect(() => {
        setLoading(true)
        setNotFound(false)
        axios.get(`/api/editarticle/${id}`)
            .then((response) => {
                console.log(response.data)
                /*setTitle(response.data.title)
                setContent(response.data.content)
                setDescription(response.data.description)
                setCardImage(response.data.image) */
                setArticle(response.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setNotFound(true)
            })
    }, [id, setLoading, setNotFound, setArticle])


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
                        <input type="text" placeholder='Title' onChange={getTitleHandler} />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea type="text" placeholder='Text seen on card' onChange={getDescHandler} />
                    </div>
                    <div>
                        <label>Card Image:</label>
                        <input placeholder='Url to the image used in the preview card' onChange={getImageHandler} />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea placeholder='Content (written in markdown)' onChange={getContentHandler} />
                    </div>
                </div>
            </div>
        )
    }
}


export default EditArticle