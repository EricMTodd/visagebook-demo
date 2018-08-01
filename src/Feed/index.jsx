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
            "posts": postList
        }
    }
    render() {
        let posts = this.state.posts.map((post, index) => {
            return <Post data={post} key={index} />
        })
        return (
            <div className="feed">
                    <NewPost />
                    {posts}
            </div>
        )
    }
};


export default Feed;