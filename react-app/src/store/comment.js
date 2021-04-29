const SET_COMMENTS = "comments/SET_COMMENTS";
const REMOVE_COMMENT = "comments/REMOVE_COMMENT";
const ADD_COMMENT = "comments/ADD_COMMENT";

const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
});

const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    comment
});

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
});

export const comments = (task_id) => async dispatch => {
    const response = await fetch(`/api/tasks/${task_id}/comments`, {
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json()
    if(!response.ok){
        return;
    };
    dispatch(setComments(data));
};

export const deleteComment = (commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        headers: {'Content-Type': 'application/json'},
        method: "DELETE"
    });
    const data = await response.json()
    if(!response.ok){
        return;
    };
    dispatch(removeComment(data));
};

export const postComment = ({comment, task_id}) => async dispatch => {
    const response = await fetch(`/api/comments/`, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({comment, task_id})
    });
    const data = response.json();
    if(!response.ok){
        return;
    };
    dispatch(addComment(data));
};

const initialState = {comments: null}

const commentReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_COMMENTS:
            return {comments: {...action.comments}};
        case REMOVE_COMMENT:
            const newState = {...state.comments};
            console.log(newState);
            console.log(action.comment)
            for (const key in action.comment){
                delete newState[key]
            };
            return {...state, comments: {...newState}};
        case ADD_COMMENT:
            const {comment} = action
            return {comments: {...state.comments, comment}}
        default:
            return state;
    };
};

export default commentReducer;
