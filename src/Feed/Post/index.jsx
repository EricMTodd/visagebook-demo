import React, { Component } from "react";
import Comment from "./Comment/index.jsx";

class Post extends Component {
    render() {
        let comments = this.props.data.comments.map((comment, index) => {
            return <Comment data={comment} key={index} />
        })
        return (
            <div className="post">
                <h3>
                    {this.props.data.author}
                </h3>
                <p>
                    {this.props.data.body}
                    {comments}
                </p>
            </div>
        )
    }
};


export default Post;