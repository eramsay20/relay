import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import TaskDetails from "../task/TaskDetails";

const TaskRow = ({ task }) => {

    const { project_id } = useParams();

    const [showModal, setShowModal] = useState(false);

    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')

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
    if (task.due_date) {
        due = dateFormat(task.due_date)
    } else {
        due = dateFormat(today);
    }

    let due_color;
    if (task.due_date && task.due_date < today){
        due_color = 'var(--RED_FADE)'
    } else {
        due_color = 'var(--DUE_DATE_GREEN)'
    }

    return (
        <div className="my-task-row">
            { task &&
                (
                    <>
                        <div style={{ 'borderRight': 'none'}} className="flex-container">
                            <img style={{ 'width': '20px'}} src={incomplete_check}></img>
                        </div>
                        <div className="capitalize" style={{ 'paddingLeft': '10px' }}>
                            <div>{task.title}</div>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)} style={{}}>
                                    <TaskDetails task={task} date={dateFormat} />
                                </Modal>
                            )}
                        </div>
                        <div style={{ 'borderRight': 'none', 'color':`${due_color}` }}>{due}</div>
                    </>
                )
            }
        </div>
    );
};

export default TaskRow;
