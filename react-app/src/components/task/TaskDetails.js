import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { comments } from '../../store/comment';
import CommentForm from "../CommentForm"

const TaskDetails = ({task, date}) => {
    // const dispatch = useDispatch();
    // const taskComment = useSelector(state => state.comment.comments)
    // if(taskComment){
    //     console.log(taskComment)
    // };
    // useEffect(() => {
    //     dispatch(comments(task.id))
    // }, [dispatch]);
    const due = date(task.due_date)
 return (
     <div className="taskDetailContainer">
         <nav>
             <div></div>
         </nav>
         <div className="taskDetailContent">
            <h1>{task.title}</h1>
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
         </div>
         <div>
             <CommentForm />
         </div>
     </div>
 )
}
export default TaskDetails
