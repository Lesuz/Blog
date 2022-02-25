import "../styles/Article.css"
import React from "react";

const moment = require('moment')

export default class Article extends React.Component {

    // Get the data send when Link was pressed
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.location.state
        }
    }

    // TODO - Check if props empty, if it is, then get data from the database

    render() {
        return (
            <div>
                <div className="articlecontent">
                    <h3 className="title">{this.props.location.state.title}</h3>
                    <p className="date">{moment(this.props.location.state.release_date).format('DD.MM.YYYY')}</p>
                    <p className="content">{this.props.location.state.content}</p>
                </div>
            </div>
        )
    }
}