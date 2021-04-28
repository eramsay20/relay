import React, {useState} from 'react';
import CommentForm from "../CommentForm"

const TaskDetails = ({task, date}) => {
    const due = date(task.due_date)
 return (
     <div>
         <nav>
             <div></div>
         </nav>
         <div className="taskDetailContent">
            <h1>{task.title}</h1>
            <div>
                <h4>Assignee</h4>
                <di>{task.user_id}</di>
            </div>
            <div>
                <h4>Due Date</h4>
                <div>{due}</div>
            </div>
            <div>
                <h4>Project</h4>
                <div>{task.project_id}</div>
            </div>
            <div>
                <h4>Description</h4>
                <di>{task.description}</di>
            </div>
         </div>
         <div>
             <CommentForm />
         </div>
     </div>
 )
}
export default TaskDetails
