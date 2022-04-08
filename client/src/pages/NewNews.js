import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import adminService from '../services/adminService'
import '../styles/NewPost.css'

const NewNews = () => {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    const history = useHistory()

    //TODO -confirm cancellation

    // handlers to handle every change in the input fields and save them to their variables
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

    // function that submits news to be posted into the database
    const submitNews = () => {
        console.log("I am in submitNews")
        const res = adminService.createArticle({
            title: title,
            content: content
        })

        history.push('/othernews')
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