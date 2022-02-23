import handcuffed from '../images/handcuffs.jpg'
import '../styles/Homepage.css'



const Homepage = () => {

    const dummyArticles = [
        { "title": "Article 75", "content": "Short description about the article. Idea is to give the reader anidea what the article is about and to make it interesting so that as -many as possible will read it. ", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
    ]


    return (
        <div className='homepage'>
            <div className='banner'>
                <img className='bannerimage' src={handcuffed} alt='newest article pic' />
                <div className='latestarticle'>
                    <h1>Article 76</h1>
                    <p>
                        Short description about the article. Idea is to give the reader an
                        idea what the article is about and to make it interesting so that as
                        many as possible will read it.
                    </p>
                    <a href='#'>Read more...</a>
                </div>
            </div>
            <div className='content'>
                <h2>Other Popular Articles</h2>
                <div className='populararticles'>
                    {dummyArticles.map(article =>
                        <div style={{
                            backgroundImage: 'url(' + article.image + ')',
                        }} className='articlebanner'>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <a href='#'>Read more...</a>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Homepage