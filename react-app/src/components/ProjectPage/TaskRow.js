import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import TaskDetails from "../task/TaskDetails";
import styles from './TaskRow.module.css';

const TaskRow = ({task, showState}) => {

    const {project_id} = useParams();
    const [showModal, setShowModal] = useState(showState);

    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')
    const complete_check = require('../../frontend-assets/aqua_checkmark.png')
    const user = useSelector(state => state.session.user);


    const onClick = e => {
        setShowModal(true);

    };

    const dateFormat = (dateString) => {
        const date = new Date(dateString)
        const day = date.toDateString();
        const weekday = day.split(" ")[0]
        const month = day.split(" ")[1]
        const dateNum = day.split(" ")[2]

        const time = date.toLocaleTimeString()
        const hour = time.split(':')[0]
        const amPm = time.split(' ')[1]
        return `${month} ${dateNum}`
    }

    const today = new Date()
    let due;
    if(task.due_date){
        due= dateFormat(task.due_date)
    } else {
        due=dateFormat(today);
    }

    return (
        <tr className="task-row">
            { task &&
                (
                    <>
                    <td style={{ 'borderRight': 'none' }} className="flex-container">
                        <img style={{'width':'20px', 'paddingLeft':'10px'}} src={incomplete_check}></img>
                    </td>
                    <td className="capitalize" >
                        <Link to={`/projects/${project_id}/tasks/${task.id}`} onClick={onClick}>{task.title}</Link>
                        { showModal && (
                            <Modal onClose={onClick} styles={styles} >
                                <TaskDetails onClick={() => setShowModal(false)} task={task} date={dateFormat}/>
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
