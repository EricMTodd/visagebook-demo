import React, { Component } from "react";
import Comment from "./Comment/index.jsx";
import NewComment from "./NewComment/index.jsx";

class Post extends Component {
    render() {
        let comments = this.props.data.comments.map((comment, index) => {
            return <Comment data={comment} key={index} />
        })
        return (
            <div className="post">
                <h3>{this.props.data.author}</h3>
                <p>{this.props.data.body}</p>
                <NewComment whichPost={this.props.whichPost} handleChange={this.props.handleChange} createComment={this.props.createComment} />
                <h5>Comments:</h5>
                {comments}
            </div>
        )
    }
};


export default Post;