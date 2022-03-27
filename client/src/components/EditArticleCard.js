import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

const EditArticleCard = ({ article, deleteArticle }) => {

    // const { deleteArticle } = props
    // const [error, setError] = useState('')

    return (
        <div className='editarticlecard'>
            <Link to={{
                pathname: "/article",
                state: article
            }}>
                <div className='editarticle' key={article.id} >
                    <h3>{article.title}</h3>
                </div>
            </Link>
            <div onClick={deleteArticle}>
                <i className="fa fa-trash fa-2x" />
            </div>
        </div >
    )
}

export default EditArticleCard