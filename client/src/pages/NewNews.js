import axios from 'axios'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styles/NewPost.css'

const NewNews = () => {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    //TODO -confirm cancellation
    //const cancelAlert = () => {
    //    if (window.confirm("Do you really want to cancel? All input will be lost.")) {
    //        window.location("/editarticles")
    //    }
    //}
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

    const submitNews = () => {
        console.log("I am in submitNews")
        axios.post('api/othernews/submit', {
            title: title,
            content: content
        })
    }
    return (
        <div className='newpostwrapper'>
            <div className='topheader'>
                <Link to="/editnews">
                    <button>Cancel</button>
                </Link>
                <h2>New Article</h2>
                <button onClick={submitNews}>Submit</button>
            </div>
            <div className='newpostform'>
                <div>
                    <label>Title:</label>
                    <input type="text" placeholder='Title' onChange={getTitleHandler} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea placeholder='Content (written in markdown)' onChange={getContentHandler} />
                </div>
            </div>
        </div>
    )
}

export default NewNews