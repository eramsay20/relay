import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { postComment } from '../store/comment';

const CommentForm = () => {
    const {task_id} = useParams();
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(!comment.length){
            setErrors(["Comment cannot be an empty field."])
        }else {
            dispatch(postComment({comment, task_id}))
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
                        placeholder="Comment here"
                    />
                </div>
                <div>
                    <button type="submit">Add Comment</button>
                </div>
            </form>
        </div>
    )
};
export default CommentForm;
