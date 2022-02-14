import '../styles/Articles.css'
import 'font-awesome/css/font-awesome.min.css'

const Articles = () => {

    const dummyArticlesAll = [
        { "title": "Article 75", "content": "Short description about the article. Idea is to give the reader anidea what the article is about and to make it interesting so that as -many as possible will read it. ", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
        { "title": "Article 74", "content": "Short description about the article. Idea is to give the reader anidea what the article is about and to make it interesting so that as -many as possible will read it. ", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
        { "title": "Article 73", "content": "Short description about the article. Idea is to give the reader anidea what the article is about and to make it interesting so that as -many as possible will read it. ", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
        { "title": "Article 72", "content": "Short description about the article. Idea is to give the reader anidea what the article is about and to make it interesting so that as -many as possible will read it. ", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
        { "title": "Article 71", "content": "Short description about the article. Idea is to give the reader anidea what the article is about and to make it interesting so that as -many as possible will read it. ", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
        { "title": "Article 70", "content": "Short description about the article. Idea is to give the reader anidea what the article is about and to make it interesting so that as -many as possible will read it. ", "image": "https://i.imgur.com/lGpjoXP.jpeg" },
    ]

    return (
        <div className='articles'>
            <div className='searchbar'>
                <i class='fa fa-search'></i>
                <input
                    type="text"
                    placeholder="Search for an article..."
                />
            </div>
            <div className='articlecontent'>
                <div className='allarticles'>
                    {dummyArticlesAll.map(article =>
                        <div style={{
                            backgroundImage: 'url(' + article.image + ')'
                        }} className='articlebanner'>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <a href='#'>Read more...</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Articles