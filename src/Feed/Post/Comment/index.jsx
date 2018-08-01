import React, { Component } from "react";


class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <h3>
                    <p>
                        {this.props.data.author} says: {this.props.data.body}
                    </p>
                </h3>
            </div>
        )
    }
}


export default Comment;