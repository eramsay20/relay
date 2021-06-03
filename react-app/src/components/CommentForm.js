import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { editComment, postComment } from '../store/comment';

const CommentForm = ({comment2, commentId, onSetCurr}) => {
    const {task_id} = useParams();
    const dispatch = useDispatch();

    const [comment, setComment] = useState(comment2? comment2: "");
    const [errors, setErrors] = useState([]);


    const onSubmitForm = (e) => {
        e.preventDefault();
        if(!comment.length){
            setErrors(["Comment cannot be an empty field."])
        }else if(comment2){
            dispatch(editComment({comment, commentId}));
            onSetCurr(null);
            setComment("");
        }else {
            dispatch(postComment({comment, task_id}))
            setComment("");
        }
    }


    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div>
                    {errors.map(error => (
                        <div>{error}</div>
                    ))}
                </div>
                <div>
                    <input
                        type="text"
                        name="comment"
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                        required={true}
                        placeholder="Comment here ..."
                    />
                </div>
                <div>
                    <button type="submit">{comment2 ? "Update Comment":"Add Comment"}</button>
                    {comment2 && <button onClick={onSetCurr} >Cancel</button>}
                </div>
            </form>
        </div>
    )
};
export default CommentForm;
