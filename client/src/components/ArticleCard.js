import { Link } from 'react-router-dom'

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
            <Link to={{
                pathname: "/article",
                state: article
            }}>Read more...</Link>
        </div>
    )
}

export default ArticleCard