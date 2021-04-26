const SET_COMMENTS = "comments/SET_COMMENTS"
const REMOVE_COMMENT = "comments/REMOVE_COMMENT"

const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
});

const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    comment
});

export const comments = (taskId) => async dispatch => {
    const response = await fetch(`/api/comments`, {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({taskId: `${taskId}`})
    });
    const data = await response.json()
    if(!response.ok){
        return;
    };
    dispatch(setComments(data));
};

export const deleteComment = (commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json()
    if(!response.ok){
        return;
    };
    dispatch(removeComment(data));
};

const initialState = {comments: null}

const commentReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_COMMENTS:
            return {comments: action.comments};
        case REMOVE_COMMENT:
            const newState = {...state};
            for (const key in action.comment){
                delete newState[key]
            };
            return newState;
        default:
            return state;
    };
};

export default commentReducer;
