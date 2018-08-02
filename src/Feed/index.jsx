import React, { Component } from "react";
import Post from "./Post/index.jsx";
import NewPost from "./NewPost/index.jsx";


const postList = [{
    "body": "This is postList.body",
    "title": "This is postList.title",
    "author": "This is postList.author",
    "comments": [
        {"body": "This is postList.comments.body1", "author": "Plato"},
        {"body": "This is postList.comments.body2", "author": "Aristotle"}
]
}]

class Feed extends Component {
    constructor(props) {
        super();
        this.state = {
            "posts": postList,
            "body": "",
            "author": "",
            "commentBody": "",
            "commentAuthor": ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name] : event.currentTarget.value
        })
    }

    createPost = (event) => {
        event.preventDefault();
        document.getElementById("new-comment-form").reset();
        console.log("The parent has received the signal");
        const newPost = {
            "body": this.state.body,
            "author": this.state.author,
            "comments": []
        }
        const updatedPostList = this.state.posts;
        updatedPostList.push(newPost);
        this.setState({
            "posts": updatedPostList,
            "body": "",
            "author": ""
        })
    }

    createComment = (event) => {
        event.preventDefault();
        document.getElementByClassName("whichPost")
        document.getElementById("new-comment-form").reset();
        const newComment = {
            "body": this.state.commentBody,
            "author": this.state.commentAuthor
        }
        console.log(newComment)
    }

    render() {
        let posts = this.state.posts.map((post, index) => {
            return <Post data={post} whichPost={index} key={index} handleChange={this.handleChange} createComment={this.createComment}/>
        })
        return (
            <div className="feed">
                    <NewPost handleSubmit={this.createPost} handleChange={this.handleChange}/>
                    {posts}
            </div>
        )
    }
};


export default Feed;