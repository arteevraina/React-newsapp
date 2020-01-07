import React from "react"
import axios from "axios"

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
    const apiKey = "apiKey=10ec0e1a10374ee88678d00ea394efce"
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

    render() {
        return(
            <div>
                <p>Hello World</p>
            </div>
        )
    }
}

export default Content