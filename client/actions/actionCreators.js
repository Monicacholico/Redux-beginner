// increment

export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment

export function addComment(postId, author, comment) {
    console.log('Dispatching add comment');
        return {
            type: 'ADD_COMMENT',
            postId,
            author,
            comment
        }
    }

// remove comment

export function removeComment(postId, i) {
        console.log('Removing a comment');
        return {
            type: 'REMOVE_COMMENT',
            i,
            postId
        }
    }

