import React, {Component} from 'react';

class Comments extends Component {
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('submitting a form')
        const postId = this.props.params.postId;
        console.log(postId);

        const author = this.ref.author;
        const comment = this.ref.comment;
        console.log(this.ref);
        console.log(postId, author, comment)
    }
    render() {
        return(
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}
export default Comments;
