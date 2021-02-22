import React, {Component} from 'react';

class Comments extends Component {
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }
    handleSubmit(e) {ß
        e.preventDefault();
        console.log('submitting a form')
        const {postId} = this.props.params;
        const author = this.props.author;
        const comment = this.props.comment;
        console.log(this.refs);
        console.log(postId, author, comment)
    }
    render() {
        return(
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}
export default Comments;
