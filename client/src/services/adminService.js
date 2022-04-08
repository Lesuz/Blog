import axios from 'axios'

const getConfig = () => {
    const token = localStorage.getItem('token')
    let config = {}
    if (token) {
        config = {
            headers: { Authorization: `bearer ${token}` }
        }
    }

    return config
}

/*const getAllArticle = async (data) => {
    const res = await axios.get('/api/articles/all')
    return res.data
}
*/

const createArticle = async (data) => {
    const res = await axios.post('api/articles/submit', data, getConfig())
    return res.data
}

const patchArticle = async (id, data) => {
    const res = await axios.put(`/api/articles/${id}`, data, getConfig())
    return res.data
}

const deleteArticle = async (id) => {
    const res = await axios.delete(`/api/articles/${id}`, getConfig())
    return res.data
}

const createNews = async (data) => {
    const res = await axios.post('api/othernews/submit', data, getConfig())
    return res.data
}

const deleteNews = async (id) => {
    const res = await axios.delete(`/api/othernews/${id}`, getConfig())
    return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createArticle,
    patchArticle,
    deleteArticle,
    createNews,
    deleteNews
}