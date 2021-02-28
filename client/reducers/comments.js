function postComments(state= [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }] 
        case 'REMOVE_COMMENT':

    }
    return state;
}

function comments(state= [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            //take the curren state
            ...state,
            //overwrite this post with a new one
            [action.postId] : postComments(state[action.postId], action)
        }
    }
    return state;
    // console.log(state, action);
}

export default comments;