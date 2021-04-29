import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { updateTaskFunction  } from '../../store/task'
import TaskDetails from "../task/TaskDetails";
import styles from './TaskRow.module.css';

const TaskRow = ({task, currentTask, onClick}) => {
    const dispatch = useDispatch();
    const { project_id } = useParams();
    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')
    const complete_check = require('../../frontend-assets/aqua_checkmark.png')

    const [status, setStatus] = useState(task.complete);
    const [change, setChange] = useState(false);

    const toggle_status = () => {
        setChange(!change)
        const payload = [task.id, task.project_id,  task.title, !task.complete, task.user_id, task.due_date, task.description]
        dispatch(updateTaskFunction(...payload))
    }
    
    useEffect(() => {
        setStatus(!status)
    }, [dispatch, change])

    const dateFormat = (dateString) => {
        const date = new Date(dateString)
        const day = date.toDateString();
        const month = day.split(" ")[1]
        const dateNum = day.split(" ")[2]
        return `${month} ${dateNum}`
    }

    const today = new Date()
    
    let due;
    task.due_date ? due= dateFormat(task.due_date) : due=dateFormat(today);

    let statusImg;
    status ? statusImg = complete_check : statusImg = incomplete_check;

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
                    <td>{task.user_id}</td>
                    <td style={{ 'borderRight': 'none' }} className="task-due-date">{due}</td>
                </>
                )
            }
        </tr>
    );
};

export default TaskRow;
