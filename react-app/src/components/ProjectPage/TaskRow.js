import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { updateTaskFunction  } from '../../store/task'
import TaskDetails from "../task/TaskDetails";
import styles from './TaskRow.module.css';

const TaskRow = ({users, task, currentTask, onClick}) => {
    const dispatch = useDispatch();
    const { project_id } = useParams();
    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')
    const complete_check = require('../../frontend-assets/aqua_checkmark.png')
    const [status, setStatus] = useState(task.complete);
    
    const toggle_status = () => {
        let payload;
        if(status){
            setStatus(false)
            payload = [task.id, task.project_id,  task.title, false, assigneeId, task.due_date, task.description]    
        } else {
            setStatus(true)
            payload = [task.id, task.project_id, task.title, true, assigneeId, task.due_date, task.description]
        }
        dispatch(updateTaskFunction(...payload))
    }

    const dateFormat = (dateString) => {
        const date = new Date(dateString)
        const day = date.toDateString();
        const month = day.split(" ")[1]
        const dateNum = day.split(" ")[2]
        return `${month} ${dateNum}`
    }
    
    let due;
    task.due_date ? due= dateFormat(task.due_date) : due=""

    let statusImg;
    status ? statusImg = complete_check : statusImg = incomplete_check;

    let assignedUser, assignee, assigneeId;
    if (users && task.user_id) { assignedUser = users.find(user => user.id == task.user_id) }
    (assignedUser) ? assignee = assignedUser.username : assignee = "";
    (assignedUser) ? assigneeId = assignedUser.id : assigneeId = "";

    return (
        <tr className="task-row">
            { task &&
            (
                <>
                    <td style={{ 'borderRight': 'none' }} className="flex-container">
                        <img onClick={toggle_status} style={{'width':'20px', 'paddingLeft':'10px'}} src={statusImg}></img>
                    </td>
                    <td className="capitalize" >
                        <Link to={`/projects/${project_id}/tasks/${task.id}`} onClick={onClick(task.id)}>{task.title}</Link>
                        { currentTask === task.id && (
                            <Modal styles={styles} >
                                <TaskDetails task={task} date={dateFormat} onClick={onClick}/>
                            </Modal>
                        )}
                    </td>
                    <td>{assignee}</td>
                    <td style={{ 'borderRight': 'none'}} className="task-due-date">{due}</td>
                </>
            )
            }
        </tr>
    );
};

export default TaskRow;
