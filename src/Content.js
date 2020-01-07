import React from "react"
import axios from "axios"
import Display from "./Display"

class Content extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
    const apiPath = "https://newsapi.org/v2/top-headlines?"
    const country = "country=us&"
    const apiKey = process.env.REACT_APP_API_KEY
    const url = apiPath + country + apiKey
    axios.get(url)
        .then(response => {
            console.log(response.data.articles)
            this.setState({news: response.data.articles})
        })
        .catch((error) => {
            console.log("error")
        })
        
    }

   /* const newsComponents = this.state.news.map((news) => {
        return(
            <News key = {news.articles.id}/>
        )
    }) */

    render() {
        return(
            <div>
                <Display news = {this.state.news}/>
            </div>
        )
    }
}

export default Content