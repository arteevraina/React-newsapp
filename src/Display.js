import React from "react"
import "./index.css"
class Display extends React.Component {

    render() {
    return(
        <div key={this.props.news.id}>
            {
                this.props.news.map((news) => {
                    return(
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <img src={news.urlToImage} alt="imagehere"/>
                                    <div className="caption">
                                        <a href={news.url}><h3>{news.title}</h3></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )}
}

export default Display