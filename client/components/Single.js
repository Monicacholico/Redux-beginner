import React, {Component} from 'react';
import Photo from './Photo';
// import comments

class Single extends Component {
    render() {
        //index of the post
        // get us the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        console.log(i);
        const post = this.props.posts[i];
        console.log(post);
        return (
            <div className="single-photo">
            <h1>
                I'm the single
            </h1>
            <Photo i={i} post={post} {...this.props}/>
        </div>
        )
    }
}

export default Single;
