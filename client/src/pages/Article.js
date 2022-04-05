import "../styles/Article.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";

const moment = require('moment')

const Article = () => {

    const { id } = useParams()

    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    // get article by id
    useEffect(() => {
        setLoading(true)
        setNotFound(false)
        axios.get(`/api/articles/${id}`)
            .then((response) => {
                console.log(response.data)
                setArticle(response.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setNotFound(true)
            })
    }, [id, setLoading, setNotFound, setArticle])

    if (loading) {
        return (
            <div>
                <h1>LOADING</h1>
            </div>
        )
    } else if (notFound || !article) {
        return (
            <div>
                <h2>Article Not Found</h2>
            </div>
        )
    }
    else if (article) {
        return (
            <div>
                <div className="articlecontent">
                    <h3 className="title">{article.title}</h3>
                    <p className="date">{moment(article.release_date).format('DD.MM.YYYY')}</p>
                    {/*<p className="content">{article.content}</p> */}
                    <MDEditor.Markdown className="content" source={article.content}></MDEditor.Markdown>
                </div>
            </div>
        )
    }

}
export default Article