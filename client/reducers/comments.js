function postComments(state= [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            //return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
            // case:
    }
    return state;
}

function comments(state= [], action) {
    if(typeof action.postID !== 'undefined') {
        return {
            //take the curren state
            ...state,
            //overwrite this post with a new one
            [action.postID] : postComments(state[action.postId], action)
        }
    }
    return state;
    // console.log(state, action);
}

export default comments;