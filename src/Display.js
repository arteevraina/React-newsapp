import React from "react"

class Display extends React.Component {



   /* const newsComponents = this.props.news.map((news) => {
        return(
            <News key = {news.articles.id}/>
        )}*/
    render() {
    return(
        <div>
            {
                this.props.news.map((news) => {
                    return(
                        <p key={news.id}>{news.title}</p>
                    )
                })
            }
        </div>
    )}
}

export default Display