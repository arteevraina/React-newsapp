import React from "react"
import axios from "axios"
import Display from "./Display"

class Content extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            news: [],
            query: ''
        }
        this.bind = this.handleChange.bind(this)
        this.bind = this.handleClick.bind(this)
        this.bind = this.handleKeyPress.bind(this)
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

    handleClick = (event) => {
        const apiPath = "https://newsapi.org/v2/everything?q="
        var query = this.state.query + "&"
        var date = "from=2020-01-08&"
        var popularity = "sortBy=popularity&"
        const apiKey = process.env.REACT_APP_API_KEY
        const url = apiPath + query + date + popularity + apiKey
        axios.get(url)
            .then(response => {
                console.log(response.data.articles)
                this.setState({news: response.data.articles})
            })
            .catch((error) => {
                console.log("error")
            })


    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleKeyPress = (event) => {
        if(event.key === "Enter") {
            this.handleClick()
        }
    }

    render() {
        return(
            <div>
                <div className="container">
                    <input type="text" className="form-control" placeholder="Text input" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                    <br/>
                    <button type="submit" className="btn btn-success" onClick={this.handleClick}>Search</button>
                </div>
                <br/>
                <Display news = {this.state.news}/>
            </div>
        )
    }
}

export default Content