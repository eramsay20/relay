import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { comments } from '../../store/comment';
import CommentForm from "../CommentForm"

const TaskDetails = ({task, date, onClick}) => {
    const profile_icon_violet = require('../../frontend-assets/profile_icon_violet.png');

    const dispatch = useDispatch();
    const taskComment = useSelector(state => state.comment.comments)
    if(taskComment){
        console.log(taskComment)
    }
    useEffect(() => {
        dispatch(comments(task.id))
    }, [dispatch]);
    const due = date(task.due_date)
 return (
     <div className="taskDetailContainer" onClick={onClick}>
         <nav>
             <div></div>
         </nav>
         <div>
            <h1>{task.title}</h1>
            <div className="taskDetailContent">
                <div>
                    <h4>Assignee</h4>
                    <p>{task.user_id}</p>
                </div>
                <div>
                    <h4>Due Date</h4>
                    <p>{due}</p>
                </div>
                <div>
                    <h4>Project</h4>
                    <p>{task.project_id}</p>
                </div>
                <div>
                    <h4>Description</h4>
                    <p>{task.description}</p>
                </div>
                <div>
                    <h4>Comments</h4>
                    {taskComment && Object.keys(taskComment).map(name => (
                        <div key={name} style={{"padding": "10px"}}>
                            <img style={{ 'width': '30px', 'paddingLeft': '10px' }} src={profile_icon_violet}></img>
                            <span className="commentInitial">{name.split('')[0].toUpperCase()}</span>
                            <span className="commentText">{taskComment[name].comment}</span>
                        </div>
                    ))}
                </div>
            </div>
         </div>
         <div>
             <CommentForm />
         </div>
     </div>
 )
}
export default TaskDetails
