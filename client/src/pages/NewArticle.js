import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/NewPost.css'
import adminService from '../services/adminService'

const NewArticle = () => {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cardImage, setCardImage] = useState('')

    const history = useHistory()

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
    const submitArticle = async () => {
        // try catch
        console.log("I am in submitArticle")
        const res = await adminService.createArticle({
            title,
            content,
            description,
            image: cardImage
        })

        history.push(`/article/${res.id}`)
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