import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

const EditArticleCard = ({ article, deletePost }) => {

    // const { deleteArticle } = props
    // const [error, setError] = useState('')

    return (
        <div className='editarticlecard'>
            <Link to={{
                pathname: `editarticle/${article.id}`
            }}>
                <div className='editarticle' key={article.id} >
                    <h3>{article.title}</h3>
                </div>
            </Link>
            <div onClick={deletePost}>
                <i className="fa fa-trash fa-2x" />
            </div>
        </div >
    )
}

export default EditArticleCard