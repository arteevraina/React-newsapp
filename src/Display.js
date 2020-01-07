import React from "react"
class Display extends React.Component {

    render() {
    return(
        <div>
            {
                this.props.news.map((news) => {
                    return(
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <img src={news.urlToImage} alt="imagehere"/>
                                    <div className="caption">
                                        <p key={news.id}>{news.title}</p>
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