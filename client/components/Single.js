import React, {Component} from 'react';
import Comments from './Comments';
import Photo from './Photo';
// import comments

class Single extends Component {
    render() {
        //index of the post
        // get us the post
        const {postId} = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        console.log(i);
        const post = this.props.posts[i];
        console.log(post);
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
            <h1>
                I'm the single
            </h1>
            <Photo i={i} post={post} {...this.props}/>
            <Comments postComments={postComments} {...this.props}/>
        </div>
        )
    }
}

export default Single;
