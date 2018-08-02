import React, { Component } from "react";


class NewComment extends Component {
    render() {
        return (
            <div className="newPost">
                <p>This is where the new comments shall be made --Cameron Binion</p>
                <form onSubmit={this.props.createComment} id="new-comment-form">
                    <label htmlFor="commentBody">Content:</label>
                    <input type="text" name="commentBody" onChange={this.props.handleChange}/>
                    <label htmlFor="commentAuthor">By:</label>
                    <input type="text" name="commentAuthor" onChange={this.props.handleChange}/>
                    <input type="hidden" class="whichPost" name="whichPost" value={this.props.whichPost}/>
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        )
    }
};


export default NewComment;