import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/NewPost.css'

const NewArticle = () => {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cardImage, setCardImage] = useState('')

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

    // function that submits article to be posted into the database
    const submitArticle = () => {
        console.log("I am in submitArticle")
        axios.post('api/articles/submit', {
            title: title,
            content: content,
            description: description,
            image: cardImage
        })
    }

    return (
        <div className='newpostwrapper'>
            <div className='topheader'>
                <Link to="/editarticles">
                    <button>Cancel</button>
                </Link>
                <h2>New Article</h2>
                <button onClick={submitArticle}>Submit</button>
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

export default NewArticle