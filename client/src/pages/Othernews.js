import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/Othernews.css'

const moment = require('moment')

// a re-usable component of how to display one news
const News = ({ news }) => {

    return (
        <div className='news'>
            <h2>{news.title}</h2>
            <h3>{moment(news.release_date).format('DD.MM.YYYY')}</h3>
            <p>{news.content}</p>
        </div>
    )
}

const Othernews = () => {

    const [news, setNews] = useState([])

    // get the news articles by using axios and sending a request to the server - articles are saved into the variable "news"
    const getNews = () => {
        axios.get('/api/othernews')
            .then((response) => {
                console.log(response.data)
                const allNews = response.data
                allNews.sort((a, b) => {
                    return Date.parse(b.release_date) - Date.parse(a.release_date)
                })
                setNews(allNews)
            })
    }

    useEffect(() => getNews(), [])

    return (
        <div className="othernews">
            <h1>Other News</h1>
            <div className='othernewsarticles'>
                {news.map(news =>
                    <News key={news.id} news={news} />)}
            </div>
        </div>
    )
}

export default Othernews