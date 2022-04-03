import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

const EditArticleCard = ({ news, deletePost }) => {

    return (
        <div className='editarticlecard'>
            <Link to={{
                pathname: `editnews/${news.id}`
            }}>
                <div className='editarticle' key={news.id} >
                    <h3>{news.title}</h3>
                </div>
            </Link>
            <div onClick={deletePost}>
                <i className="fa fa-trash fa-2x" />
            </div>
        </div >
    )
}

export default EditArticleCard