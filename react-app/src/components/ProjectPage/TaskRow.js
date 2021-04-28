import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskRow = ({task}) => {

    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')
    const complete_check = require('../../frontend-assets/aqua_checkmark.png')
    const user = useSelector(state => state.session.user);

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
                    <img style={{ 'width': '20px', 'paddingLeft': '10px'}} src={incomplete_check}></img>
                </td>
                <td className="capitalize">{task.title}</td>
                <td>{task.user_id}</td>
                <td style={{ 'borderRight': 'none' }} className="task-due-date">{due}</td>
                </>
                )
            }
        </tr>
    );
};

export default TaskRow;
