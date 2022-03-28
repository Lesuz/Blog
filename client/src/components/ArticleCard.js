import { Link } from 'react-router-dom'

const ArticleCard = ({ article }) => {
    return (
        <Link to={`article/${article.id}`
        }>
            <div
                style={{
                    backgroundImage: `linear-gradient(#413547, #413547), url(${article.image})`
                }}
                className='articlebanner'
                key={article.id}
            >
                <div className='cardtext'>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <p className='readmorelink'>READ MORE</p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard