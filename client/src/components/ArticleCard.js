const ArticleCard = ({ article }) => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(#413547, #413547), url(${article.image})`
            }}
            className='articlebanner'
            key={article.id}
        >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href='#'>Read more...</a>
        </div>
    )
}

export default ArticleCard