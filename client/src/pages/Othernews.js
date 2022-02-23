import '../styles/Othernews.css'

const Othernews = () => {

    const dummynews = [
        { "title": "News 1", "date": "XX.XX.XXXX", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada cursus magna, a molestie libero dignissim a. Suspendisse accumsan gravida nisi egestas pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada cursus magna, a molestie libero dignissim a. Suspendisse accumsan gravida nisi egestas pellentesque. " },
        { "title": "News 2", "date": "XX.XX.XXXX", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada cursus magna, a molestie libero dignissim a. Suspendisse accumsan gravida nisi egestas pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada cursus magna, a molestie libero dignissim a. Suspendisse accumsan gravida nisi egestas pellentesque. " },
        { "title": "News 3", "date": "XX.XX.XXXX", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada cursus magna, a molestie libero dignissim a. Suspendisse accumsan gravida nisi egestas pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada cursus magna, a molestie libero dignissim a. Suspendisse accumsan gravida nisi egestas pellentesque. " },
    ]

    return (
        <div className="othernews">
            <h1>Other News</h1>
            <div className='othernewsarticles'>
                {dummynews.map(news => <div className='news'><h2>{news.title}</h2><h3>{news.date}</h3><p>{news.content}</p></div>)}
            </div>
        </div>
    )
}

export default Othernews