import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import '../styles/NewPost.css'

const NewArticle = () => {


    const [post, setPost] = useState()
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cardImage, setCardImage] = useState('')
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

    //TODO -confirm cancellation
    /*const cancelAlert = () => {
        if (window.confirm("Do you really want to cancel? All input will be lost.")) {
            window.location("/editarticles")
        }
    } */

    const submitArticle = () => {
        console.log("I am in submitArticle")
        axios.post('api/articles/submit', {
            title: title,
            content: content,
            description: description,
            image: cardImage
        })
        /*.then((response) => {
            setPost(response.data);
        }); */
    }


    // const cancelArticle = () => {
    // }

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